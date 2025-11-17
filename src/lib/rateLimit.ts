/**
 * In-Memory Rate Limiting
 *
 * Simple rate limiting for API routes to prevent abuse.
 * Uses in-memory storage (resets on server restart).
 *
 * For production with multiple servers, upgrade to Upstash Redis:
 * https://upstash.com (10,000 requests/day free tier)
 *
 * @example
 * import { rateLimit } from '@/lib/rateLimit';
 *
 * export async function POST(req: NextRequest) {
 *   const identifier = req.ip || 'anonymous';
 *   const rateLimitResult = await rateLimit(identifier);
 *
 *   if (!rateLimitResult.success) {
 *     return NextResponse.json(
 *       { error: 'Too many requests. Please try again later.' },
 *       { status: 429 }
 *     );
 *   }
 *
 *   // Continue with request handling...
 * }
 */

interface RateLimitConfig {
  /**
   * Maximum number of requests allowed within the window
   * @default 10
   */
  limit?: number;

  /**
   * Time window in milliseconds
   * @default 60000 (1 minute)
   */
  window?: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

interface RequestLog {
  count: number;
  resetTime: number;
}

// In-memory store (will reset on server restart)
const requests = new Map<string, RequestLog>();

// Clean up old entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of requests.entries()) {
    if (value.resetTime < now) {
      requests.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Rate limit checker
 *
 * @param identifier - Unique identifier (usually IP address or user ID)
 * @param config - Rate limit configuration
 * @returns Rate limit result with success status and metadata
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = {}
): RateLimitResult {
  const { limit = 10, window = 60000 } = config;
  const now = Date.now();
  const requestLog = requests.get(identifier);

  // No previous requests or window expired
  if (!requestLog || requestLog.resetTime < now) {
    const resetTime = now + window;
    requests.set(identifier, { count: 1, resetTime });

    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: resetTime,
    };
  }

  // Within window, check if limit exceeded
  if (requestLog.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: requestLog.resetTime,
    };
  }

  // Increment count
  requestLog.count++;
  requests.set(identifier, requestLog);

  return {
    success: true,
    limit,
    remaining: limit - requestLog.count,
    reset: requestLog.resetTime,
  };
}

/**
 * Rate limit configurations for different endpoints
 */
export const rateLimitConfigs = {
  // Strict - for sensitive operations (auth, payments)
  strict: { limit: 5, window: 60000 }, // 5 requests per minute

  // Standard - for API routes
  standard: { limit: 10, window: 60000 }, // 10 requests per minute

  // Generous - for public content
  generous: { limit: 30, window: 60000 }, // 30 requests per minute

  // AI operations - higher limits but longer window
  ai: { limit: 20, window: 300000 }, // 20 requests per 5 minutes
};

/**
 * Get client identifier from request (IP address or fallback)
 */
export function getClientIdentifier(req: Request): string {
  // Try to get IP from various headers (Vercel, Cloudflare, etc.)
  const forwardedFor = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const cfConnectingIp = req.headers.get('cf-connecting-ip');

  return (
    forwardedFor?.split(',')[0]?.trim() ||
    realIp ||
    cfConnectingIp ||
    'anonymous'
  );
}

/**
 * Helper to add rate limit headers to response
 */
export function addRateLimitHeaders(
  headers: Headers,
  result: RateLimitResult
): Headers {
  headers.set('X-RateLimit-Limit', result.limit.toString());
  headers.set('X-RateLimit-Remaining', result.remaining.toString());
  headers.set('X-RateLimit-Reset', new Date(result.reset).toISOString());

  return headers;
}
