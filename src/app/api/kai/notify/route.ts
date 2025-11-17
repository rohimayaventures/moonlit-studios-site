import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      visitorMessage,
      kaiResponse,
      notificationType, // 'lead_qualified' | 'quote_interest' | 'high_intent' | 'business_inquiry' | 'lead_scored'
      leadScore, // { score, temperature, emoji, signals }
      sentiment, // { emotion, indicators }
      visitorContext
    } = body;

    if (!visitorMessage || !kaiResponse || !notificationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Determine notification priority and emoji based on lead score or type
    const baseNotificationConfig = {
      lead_qualified: {
        emoji: '🎯',
        title: 'Qualified Lead Detected',
        color: '#4A9B9B', // mermaidTeal
        priority: 'High'
      },
      quote_interest: {
        emoji: '💰',
        title: 'Quote Request via Kai',
        color: '#E6B17E', // lunarGold
        priority: 'Medium'
      },
      high_intent: {
        emoji: '🔥',
        title: 'High-Intent Visitor',
        color: '#FF6B35', // phoenixFire
        priority: 'Urgent'
      },
      business_inquiry: {
        emoji: '💼',
        title: 'Business Inquiry via Kai',
        color: '#4A9B9B', // mermaidTeal
        priority: 'High'
      },
      lead_scored: {
        emoji: '📊',
        title: 'Lead Scored',
        color: '#4A9B9B', // mermaidTeal
        priority: 'Medium'
      }
    };

    // Override with lead score data if available
    let config = baseNotificationConfig[notificationType as keyof typeof baseNotificationConfig];

    if (leadScore) {
      config = {
        ...config,
        emoji: leadScore.emoji,
        title: `${leadScore.emoji} ${leadScore.temperature.toUpperCase()} Lead (Score: ${leadScore.score}/100)`,
        priority: leadScore.temperature === 'hot' ? 'URGENT 🚨' : leadScore.temperature === 'warm' ? 'High' : 'Medium'
      };
    }

    // Email to business owner
    const ownerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
      background: linear-gradient(135deg, ${config.color} 0%, #1A2332 100%);
      color: white;
      padding: 32px;
      text-align: center;
    }
    .logo {
      width: 80px;
      height: 80px;
      border-radius: 16px;
      margin-bottom: 20px;
    }
    .priority-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-top: 8px;
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
    .message-box {
      background: #F7FAFC;
      border-left: 4px solid ${config.color};
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .visitor-message {
      background: #EDF2F7;
      border-left: 4px solid #4299E1;
    }
    .kai-response {
      background: #F0FFF4;
      border-left: 4px solid #48BB78;
    }
    .context-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 12px;
    }
    .context-item {
      background: #F7FAFC;
      padding: 12px;
      border-radius: 8px;
      font-size: 14px;
    }
    .context-label {
      font-size: 11px;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .context-value {
      color: #2D3748;
      font-weight: 500;
    }
    .cta {
      text-align: center;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid #E2E8F0;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, ${config.color} 0%, #1A2332 100%);
      color: white;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin: 0 8px;
    }
    .footer {
      background: #F7FAFC;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #718096;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${process.env.NEXT_PUBLIC_SITE_URL || 'https://moonlstudios.com/'}square-logo.png" alt="Moonlit Studios" class="logo" />
      <h1 style="margin: 0; font-size: 28px;">${config.emoji} ${config.title}</h1>
      <div class="priority-badge">Priority: ${config.priority}</div>
    </div>

    <div class="content">
      ${leadScore ? `
      <div class="section">
        <div class="section-title">📊 Lead Score Analysis</div>
        <div style="background: linear-gradient(135deg, ${config.color} 0%, #1A2332 100%); color: white; padding: 24px; border-radius: 12px; margin-bottom: 16px;">
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="font-size: 48px; font-weight: 900; letter-spacing: -2px;">${leadScore.score}/100</div>
            <div style="font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 8px;">${leadScore.emoji} ${leadScore.temperature.toUpperCase()} LEAD</div>
          </div>
          ${leadScore.signals && leadScore.signals.length > 0 ? `
          <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 16px;">
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Buying Signals Detected:</div>
            <ul style="margin: 0; padding-left: 20px;">
              ${leadScore.signals.map((signal: string) => `<li style="margin-bottom: 4px;">${signal}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
        </div>
      </div>
      ` : ''}

      ${sentiment && sentiment.emotion !== 'neutral' ? `
      <div class="section">
        <div class="section-title">😊 Sentiment Analysis</div>
        <div style="background: ${sentiment.emotion === 'excited' ? '#D4EDDA' : sentiment.emotion === 'frustrated' ? '#F8D7DA' : '#FFF3CD'}; border-left: 4px solid ${sentiment.emotion === 'excited' ? '#28A745' : sentiment.emotion === 'frustrated' ? '#DC3545' : '#FFC107'}; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
          <div style="font-weight: 600; margin-bottom: 8px;">
            ${sentiment.emotion === 'excited' ? '😊 Excited/Positive' : sentiment.emotion === 'frustrated' ? '😤 Frustrated/Needs Help' : '🤔 Confused/Has Questions'}
          </div>
          ${sentiment.indicators && sentiment.indicators.length > 0 ? `
          <div style="font-size: 14px; color: #666;">
            Indicators: ${sentiment.indicators.join(', ')}
          </div>
          ` : ''}
          ${sentiment.emotion === 'frustrated' ? `
          <div style="background: rgba(220,53,69,0.1); padding: 12px; border-radius: 6px; margin-top: 12px; font-size: 14px; color: #721C24;">
            <strong>⚠️ Action Required:</strong> This visitor may need extra attention or human escalation. Respond promptly to prevent churn.
          </div>
          ` : ''}
        </div>
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">💬 Visitor Message</div>
        <div class="message-box visitor-message">
          ${visitorMessage}
        </div>
      </div>

      <div class="section">
        <div class="section-title">🤖 Kai's Response</div>
        <div class="message-box kai-response">
          ${kaiResponse}
        </div>
      </div>

      ${visitorContext ? `
      <div class="section">
        <div class="section-title">📊 Visitor Context</div>
        <div class="context-grid">
          ${visitorContext.page ? `
          <div class="context-item">
            <div class="context-label">Current Page</div>
            <div class="context-value">${visitorContext.page}</div>
          </div>
          ` : ''}
          ${visitorContext.personality ? `
          <div class="context-item">
            <div class="context-label">Kai Personality</div>
            <div class="context-value">${visitorContext.personality}</div>
          </div>
          ` : ''}
          ${visitorContext.messagesCount ? `
          <div class="context-item">
            <div class="context-label">Messages Exchanged</div>
            <div class="context-value">${visitorContext.messagesCount}</div>
          </div>
          ` : ''}
          ${visitorContext.timeOnSite ? `
          <div class="context-item">
            <div class="context-label">Time on Site</div>
            <div class="context-value">${visitorContext.timeOnSite}</div>
          </div>
          ` : ''}
        </div>
      </div>
      ` : ''}

      <div class="cta">
        <p style="color: #4A5568; margin-bottom: 16px;">
          ${notificationType === 'high_intent'
            ? '🔥 This visitor is highly engaged! Respond quickly to maximize conversion.'
            : notificationType === 'lead_qualified'
            ? '🎯 Kai has qualified this lead based on budget, timeline, and project scope.'
            : '💰 Visitor showed interest in getting a quote or booking a consultation.'}
        </p>
        <a href="mailto:${process.env.BUSINESS_EMAIL}" class="button">Reply via Email</a>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://moonlstudios.com/'}admin" class="button">View Dashboard</a>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0 0 8px 0;">
        <strong>Moonlit Studios</strong> - Automated Business Intelligence
      </p>
      <p style="margin: 0;">
        🌙 Kai is working 24/7 to qualify leads while you focus on your nursing shifts
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email notification
    await resend.emails.send({
      from: 'Kai @ Moonlit Studios <kai@moonlstudios.com>',
      to: process.env.BUSINESS_EMAIL || 'hello@moonlstudios.com',
      subject: `${config.emoji} ${config.title} - Moonlit Studios`,
      html: ownerEmailHtml,
    });

    // Optional: Send to Slack webhook if configured
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackBlocks: any[] = [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `${config.emoji} ${config.title}`,
          },
        },
      ];

      // Add lead score block if available
      if (leadScore) {
        slackBlocks.push({
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Lead Score:*\n${leadScore.score}/100 (${leadScore.emoji} ${leadScore.temperature.toUpperCase()})`,
            },
            {
              type: 'mrkdwn',
              text: `*Priority:*\n${config.priority}`,
            },
          ],
        });

        if (leadScore.signals && leadScore.signals.length > 0) {
          slackBlocks.push({
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Buying Signals:*\n${leadScore.signals.map((s: string) => `• ${s}`).join('\n')}`,
            },
          });
        }
      } else {
        slackBlocks.push({
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Priority:*\n${config.priority}`,
            },
            {
              type: 'mrkdwn',
              text: `*Page:*\n${visitorContext?.page || 'Unknown'}`,
            },
          ],
        });
      }

      // Add sentiment block if available
      if (sentiment && sentiment.emotion !== 'neutral') {
        const sentimentEmoji = sentiment.emotion === 'excited' ? '😊' : sentiment.emotion === 'frustrated' ? '😤' : '🤔';
        const sentimentLabel = sentiment.emotion === 'excited' ? 'Excited/Positive' : sentiment.emotion === 'frustrated' ? 'Frustrated/Needs Help' : 'Confused/Has Questions';

        slackBlocks.push({
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*${sentimentEmoji} Sentiment:*\n${sentimentLabel}${sentiment.indicators && sentiment.indicators.length > 0 ? `\nIndicators: ${sentiment.indicators.join(', ')}` : ''}${sentiment.emotion === 'frustrated' ? '\n⚠️ *May need extra attention or human escalation*' : ''}`,
          },
        });
      }

      // Add message blocks
      slackBlocks.push(
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Visitor Message:*\n${visitorMessage.substring(0, 500)}`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Kai's Response:*\n${kaiResponse.substring(0, 500)}`,
          },
        }
      );

      const slackResponse = await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `${config.emoji} *${config.title}*`,
          blocks: slackBlocks,
        }),
      });

      if (!slackResponse.ok) {
        const errorText = await slackResponse.text();
        console.error('Slack webhook failed:', {
          status: slackResponse.status,
          statusText: slackResponse.statusText,
          error: errorText
        });
      } else {
        console.log('✅ Slack notification sent successfully');
      }
    }

    console.log('✅ Email notification sent successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error sending Kai notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
