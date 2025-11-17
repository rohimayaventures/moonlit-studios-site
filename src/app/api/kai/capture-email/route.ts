import { NextRequest, NextResponse } from 'next/server';
import { createLogger } from "@/lib/logger";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, context, conversationHistory } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Build context summary
    const contextSummary = context ? `
**Visitor Profile:**
${context.businessType ? `- Business Type: ${context.businessType}` : ''}
${context.budgetRange ? `- Budget Range: ${context.budgetRange}` : ''}
${context.timeline ? `- Timeline: ${context.timeline}` : ''}
${context.specificNeeds && context.specificNeeds.length > 0 ? `- Needs: ${context.specificNeeds.join(', ')}` : ''}
${context.hasShownInterest ? `- Intent Level: HIGH (Strong buying signals detected)` : ''}
${context.objectionsMentioned && context.objectionsMentioned.length > 0 ? `- Objections: ${context.objectionsMentioned.join(', ')}` : ''}
` : 'No context available';

    // Build conversation excerpt
    const conversationExcerpt = conversationHistory && conversationHistory.length > 0
      ? conversationHistory.slice(-6).map((msg: any) =>
          `**${msg.role === 'user' ? 'Visitor' : 'Kai'}:** ${msg.content}`
        ).join('\n\n')
      : 'No conversation history';

    // Email to business owner
    const ownerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1A202C;
      background-color: #F7FAFC;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #4A9B9B 0%, #1A2332 100%);
      color: white;
      padding: 32px;
      text-align: center;
    }
    .content {
      padding: 32px;
    }
    .section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: #4A5568;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .highlight-box {
      background: #EDF2F7;
      border-left: 4px solid #4A9B9B;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .message {
      background: #F7FAFC;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 8px;
      font-size: 14px;
    }
    .cta {
      text-align: center;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid #E2E8F0;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #4A9B9B 0%, #1A2332 100%);
      color: white;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin: 0 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">📬 New Email Captured by Kai</h1>
      <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">A visitor shared their contact info!</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">📧 Contact Information</div>
        <div class="highlight-box">
          ${name ? `<p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>` : ''}
          <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4A9B9B;">${email}</a></p>
        </div>
      </div>

      <div class="section">
        <div class="section-title">🎯 Visitor Context</div>
        <div class="highlight-box">
          <pre style="margin: 0; white-space: pre-wrap; font-family: inherit; font-size: 14px;">${contextSummary}</pre>
        </div>
      </div>

      <div class="section">
        <div class="section-title">💬 Recent Conversation</div>
        ${conversationHistory && conversationHistory.length > 0
          ? conversationHistory.slice(-6).map((msg: any) => `
            <div class="message">
              <strong>${msg.role === 'user' ? '👤 Visitor' : '🤖 Kai'}:</strong> ${msg.content}
            </div>
          `).join('')
          : '<p style="color: #718096;">No conversation history available</p>'
        }
      </div>

      <div class="cta">
        <p style="color: #4A5568; margin-bottom: 16px;">
          🔥 Follow up with this lead within 24 hours for best conversion!
        </p>
        <a href="mailto:${email}" class="button">Reply to ${name || 'Visitor'}</a>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Send notification email to business owner
    await resend.emails.send({
      from: 'Kai @ Moonlit Studios <kai@moonlitstudios.com>',
      to: process.env.BUSINESS_EMAIL || 'hello@moonlitstudios.com',
      subject: `📬 Email Captured: ${name || email} - Moonlit Studios`,
      html: ownerEmailHtml,
    });

    // Optional: Send to Slack if configured
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `📬 *New Email Captured by Kai*`,
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: `📬 Email Captured: ${name || email}`,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Name:*\n${name || 'Not provided'}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Email:*\n${email}`,
                },
              ],
            },
            ...(context && Object.keys(context).length > 0 ? [{
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Context:*\n${contextSummary}`,
              },
            }] : []),
          ],
        }),
      }).catch(err => console.error('Slack notification failed:', err));
    }

    console.log(`✅ Email captured: ${email} (${name || 'no name'})`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error capturing email:', error);
    return NextResponse.json(
      { error: 'Failed to capture email' },
      { status: 500 }
    );
  }
}
