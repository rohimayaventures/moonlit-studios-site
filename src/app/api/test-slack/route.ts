import { NextRequest, NextResponse } from 'next/server';
import { sendSlackMessage } from '@/lib/slack';

/**
 * GET /api/test-slack
 *
 * Test endpoint to verify Slack webhook connection
 */
export async function GET(request: NextRequest) {
  try {
    const testMessage = `
🧪 *SLACK TEST MESSAGE* 🌙

This is a test notification from your Moonlit Studios website!

If you're seeing this in Slack, the integration is working perfectly. ✅

_Timestamp: ${new Date().toISOString()}_
    `.trim();

    await sendSlackMessage(testMessage);

    return NextResponse.json({
      ok: true,
      message: 'Test Slack message sent! Check your Slack channel.',
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error: any) {
    console.error('Slack test error:', error);
    return NextResponse.json({
      ok: false,
      message: 'Failed to send test Slack message',
      error: error.message
    }, { status: 500 });
  }
}
