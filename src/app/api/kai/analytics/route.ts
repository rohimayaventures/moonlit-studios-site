import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// 📊 ANALYTICS TRACKING - Log Kai conversations for dashboard
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, data } = body;

    // Create analytics directory if it doesn't exist
    const analyticsDir = path.join(process.cwd(), 'analytics');
    if (!existsSync(analyticsDir)) {
      await mkdir(analyticsDir, { recursive: true });
    }

    // Log file path (daily logs)
    const today = new Date().toISOString().split('T')[0];
    const logFile = path.join(analyticsDir, `kai-${today}.json`);

    // Read existing log or create new one
    let logs: any[] = [];
    if (existsSync(logFile)) {
      const fileContent = await readFile(logFile, 'utf-8');
      logs = JSON.parse(fileContent);
    }

    // Add new log entry
    logs.push({
      timestamp: new Date().toISOString(),
      event,
      ...data,
    });

    // Write updated logs
    await writeFile(logFile, JSON.stringify(logs, null, 2));

    return NextResponse.json({ success: true, logged: logs.length });
  } catch (error) {
    console.error('Analytics logging error:', error);
    return NextResponse.json({ error: 'Failed to log analytics' }, { status: 500 });
  }
}

// 📊 GET ANALYTICS - Retrieve analytics data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];
    const days = parseInt(searchParams.get('days') || '7');

    const analyticsDir = path.join(process.cwd(), 'analytics');
    const stats = {
      totalConversations: 0,
      totalMessages: 0,
      leadScores: [] as number[],
      sentiments: { excited: 0, frustrated: 0, confused: 0, neutral: 0 },
      conversionEvents: 0,
      averageMessagesPerConversation: 0,
      topQuestions: [] as string[],
    };

    // Read logs for the past N days
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const logFile = path.join(analyticsDir, `kai-${dateStr}.json`);

      if (existsSync(logFile)) {
        const fileContent = await readFile(logFile, 'utf-8');
        const logs = JSON.parse(fileContent);

        logs.forEach((log: any) => {
          if (log.event === 'conversation_start') stats.totalConversations++;
          if (log.event === 'message_sent') stats.totalMessages++;
          if (log.leadScore) stats.leadScores.push(log.leadScore);
          if (log.sentiment) {
            stats.sentiments[log.sentiment as keyof typeof stats.sentiments]++;
          }
          if (log.event === 'email_captured' || log.event === 'quote_requested') {
            stats.conversionEvents++;
          }
        });
      }
    }

    stats.averageMessagesPerConversation = stats.totalConversations > 0
      ? Math.round(stats.totalMessages / stats.totalConversations)
      : 0;

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Analytics retrieval error:', error);
    return NextResponse.json({ error: 'Failed to retrieve analytics' }, { status: 500 });
  }
}
