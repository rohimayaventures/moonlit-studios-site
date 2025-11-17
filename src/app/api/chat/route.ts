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