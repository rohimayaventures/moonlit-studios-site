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

    // 🎯 SMART NOTIFICATION SYSTEM - Detect high-intent signals
    try {
      const userMessage = body.messages[body.messages.length - 1]?.content || '';
      const kaiResponse = data.content[0]?.text || '';

      // High-intent keywords for notification triggers
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

      // Send notification if high intent detected
      if (notificationType) {
        const pathname = request.headers.get('referer')?.split('/').pop() || 'unknown';

        // Don't await - fire and forget to not slow down chat response
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/kai/notify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorMessage: userMessage,
            kaiResponse: kaiResponse,
            notificationType: notificationType,
            visitorContext: {
              page: pathname,
              personality: body.personality || 'iroh',
              messagesCount: body.messages.length,
              timeOnSite: 'Active conversation'
            }
          })
        }).catch(err => log.error('Failed to send notification:', err));

        log.info(`📧 Notification triggered: ${notificationType} for message: "${userMessage.substring(0, 50)}..."`);
      }
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