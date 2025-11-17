import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIdentifier, rateLimitConfigs, addRateLimitHeaders } from '@/lib/rateLimit';
import { createLogger } from '@/lib/logger';

const log = createLogger('KaiChat');

export async function POST(request: NextRequest) {
  try {
    // 🛡️ RATE LIMITING - Prevent spam/abuse (critical for cost control)
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, rateLimitConfigs.ai);

    if (!rateLimitResult.success) {
      log.warn(`Rate limit exceeded for ${identifier}`);
      const headers = new Headers();
      addRateLimitHeaders(headers, rateLimitResult);

      return NextResponse.json(
        {
          error: 'Too many messages. Kai needs a breather! Please try again in a few minutes.',
          resetAt: new Date(rateLimitResult.reset).toISOString()
        },
        { status: 429, headers }
      );
    }

    const body = await request.json();
    
    // Get API key from environment variables
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    log.debug("API Key exists?", !!apiKey);
    log.debug("Request body:", JSON.stringify(body, null, 2));
    
    if (!apiKey) {
      log.error("API key not found!");
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Call Anthropic API from the server (no CORS issues!)
    log.debug("Calling Anthropic API...");
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    log.debug(`Response status: ${response.status}`);

    if (!response.ok) {
      const errorData = await response.json();
      log.error("Anthropic API Error:", errorData);
      return NextResponse.json(
        { error: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    log.debug("Success! Returning response to client");

    // 🎯 SMART NOTIFICATION SYSTEM - Lead Scoring & Detection
    try {
      const userMessage = body.messages[body.messages.length - 1]?.content || '';
      const kaiResponse = data.content[0]?.text || '';
      const conversationHistory = body.messages || [];

      // 🔢 LEAD SCORING ALGORITHM (0-100 points)
      let leadScore = 0;
      const signals: string[] = [];

      // High-intent keywords for scoring
      const scoringSignals = {
        budget_mention: { regex: /\b(budget|pricing|price|cost|how much|estimate|\$\d+|dollar|afford)\b/i, points: 30, label: 'Budget Mentioned' },
        timeline_urgent: { regex: /\b(asap|urgent|now|immediately|today|this week|next week|soon)\b/i, points: 25, label: 'Urgent Timeline' },
        timeline_near: { regex: /\b(next month|this month|planning|launching|starting)\b/i, points: 20, label: 'Near-term Timeline' },
        ready_to_buy: { regex: /\b(ready|let's do|let's go|let's start|sign me up|I'm in|sold)\b/i, points: 35, label: 'Ready to Buy' },
        business_type: { regex: /\b(cafe|restaurant|salon|studio|clinic|practice|shop|store|boutique|agency)\b/i, points: 20, label: 'Business Type Identified' },
        specific_service: { regex: /\b(website|web design|app|ai system|chatbot|automation|branding|logo)\b/i, points: 15, label: 'Specific Service Request' },
        project_details: { regex: /\b(need|want|looking for|interested in|require|help with)\b/i, points: 15, label: 'Project Details Shared' },
        booking_intent: { regex: /\b(book|schedule|call|meeting|consultation|discuss|talk)\b/i, points: 25, label: 'Booking Intent' },
        return_visitor: { regex: null, points: 10, label: 'Return Visitor' }, // Checked via conversation length
        multiple_messages: { regex: null, points: 5, label: 'Engaged Conversation' }, // 3+ exchanges
      };

      // Score the current message
      Object.entries(scoringSignals).forEach(([key, signal]) => {
        if (signal.regex && signal.regex.test(userMessage)) {
          leadScore += signal.points;
          signals.push(signal.label);
        }
      });

      // Bonus: Return visitor (3+ messages in conversation)
      if (conversationHistory.length >= 6) { // 3 exchanges = 6 messages
        leadScore += scoringSignals.return_visitor.points;
        signals.push(scoringSignals.return_visitor.label);
      }

      // Bonus: Engaged conversation
      if (conversationHistory.length >= 4) {
        leadScore += scoringSignals.multiple_messages.points;
        signals.push(scoringSignals.multiple_messages.label);
      }

      // Cap at 100
      leadScore = Math.min(leadScore, 100);

      // 🌡️ Determine lead temperature
      let leadTemperature: 'hot' | 'warm' | 'cold' = 'cold';
      let urgencyEmoji = '❄️';

      if (leadScore >= 70) {
        leadTemperature = 'hot';
        urgencyEmoji = '🔥';
      } else if (leadScore >= 40) {
        leadTemperature = 'warm';
        urgencyEmoji = '🟡';
      }

      // 😊 SENTIMENT ANALYSIS - Detect visitor emotions
      let sentiment: 'excited' | 'frustrated' | 'confused' | 'neutral' = 'neutral';
      const sentimentIndicators: string[] = [];

      // Positive sentiment (excitement)
      if (/\b(love|amazing|awesome|perfect|great|excellent|wonderful|fantastic|excited|can't wait)\b/i.test(userMessage)) {
        sentiment = 'excited';
        sentimentIndicators.push('Excited/Positive');
      }

      // Negative sentiment (frustration)
      if (/\b(frustrated|annoyed|confused|difficult|hard|complicated|don't understand|help|stuck)\b/i.test(userMessage)) {
        sentiment = 'frustrated';
        sentimentIndicators.push('Frustrated/Needs Help');
      }

      // Confusion
      if (/\b(what|how|why|confused|not sure|don't know|which|help me understand)\b/i.test(userMessage) && userMessage.includes('?')) {
        if (sentiment !== 'frustrated') sentiment = 'confused';
        sentimentIndicators.push('Confused/Has Questions');
      }

      // Urgency (override to excited if positive words present)
      if (/\b(asap|urgent|immediately|now|hurry|quick)\b/i.test(userMessage)) {
        if (sentiment === 'neutral') sentiment = 'excited';
        sentimentIndicators.push('Urgent Need');
      }

      // Legacy notification type (for backwards compatibility)
      const highIntentSignals = {
        quote_interest: /\b(quote|pricing|price|cost|how much|estimate|budget)\b/i,
        lead_qualified: /\b(interested|want to|need|looking for|project|hire|work with)\b/i,
        high_intent: /\b(ready|when can|start|available|book|schedule|calendar|let's do)\b/i,
        business_inquiry: /\b(business|website|site|company|startup|cafe|restaurant|salon|studio|shop|store|service|build|create|develop|design)\b/i
      };

      let notificationType: string | null = null;

      // Check for high-intent signals (prioritized)
      if (highIntentSignals.high_intent.test(userMessage)) {
        notificationType = 'high_intent';
      } else if (highIntentSignals.business_inquiry.test(userMessage)) {
        notificationType = 'business_inquiry';
      } else if (highIntentSignals.lead_qualified.test(userMessage)) {
        notificationType = 'lead_qualified';
      } else if (highIntentSignals.quote_interest.test(userMessage)) {
        notificationType = 'quote_interest';
      }

      // Send notification if high intent detected OR lead score is significant
      const shouldNotify = notificationType || leadScore >= 30; // Notify on warm+ leads

      if (shouldNotify) {
        const pathname = request.headers.get('referer')?.split('/').pop() || 'unknown';

        // Don't await - fire and forget to not slow down chat response
        const notifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/kai/notify`;
        log.info(`📤 Sending notification to: ${notifyUrl}`);

        fetch(notifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorMessage: userMessage,
            kaiResponse: kaiResponse,
            notificationType: notificationType || 'lead_scored',
            leadScore: {
              score: leadScore,
              temperature: leadTemperature,
              emoji: urgencyEmoji,
              signals: signals
            },
            sentiment: {
              emotion: sentiment,
              indicators: sentimentIndicators
            },
            visitorContext: {
              page: pathname,
              personality: body.personality || 'iroh',
              messagesCount: body.messages.length,
              conversationLength: conversationHistory.length,
              timeOnSite: 'Active conversation'
            }
          })
        })
        .then(res => {
          if (!res.ok) {
            log.error(`❌ Notification API returned ${res.status}: ${res.statusText}`);
            return res.text().then(text => log.error('Response body:', text));
          }
          log.info('✅ Notification API call successful');
        })
        .catch(err => log.error('❌ Failed to send notification:', err));

        log.info(`${urgencyEmoji} Lead scored: ${leadScore}/100 (${leadTemperature.toUpperCase()}) - Type: ${notificationType || 'scored'} - Message: "${userMessage.substring(0, 50)}..."`);
      }

      // 📊 LOG TO ANALYTICS (fire and forget)
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/kai/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'message_sent',
          data: {
            leadScore,
            sentiment,
            messageLength: userMessage.length,
            conversationLength: conversationHistory.length,
          },
        }),
      }).catch(err => log.error('Analytics logging failed:', err));
    } catch (notificationError) {
      // Don't let notification errors break the chat
      log.error('Notification error (non-critical):', notificationError);
    }

    // Add rate limit headers to successful response
    const headers = new Headers();
    addRateLimitHeaders(headers, rateLimitResult);

    return NextResponse.json(data, { headers });

  } catch (error) {
    log.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}