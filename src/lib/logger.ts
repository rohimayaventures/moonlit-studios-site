/**
 * Production-safe logging utility
 *
 * Automatically silences logs in production while keeping them in development.
 * Provides structured logging with context and timestamps.
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDevelopment = process.env.NODE_ENV === 'development';

class Logger {
  private context: string;

  constructor(context: string = 'App') {
    this.context = context;
  }

  /**
   * Debug logs - only shown in development
   */
  debug(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.log(`[${this.context}] 🔍 ${message}`, ...args);
    }
  }

  /**
   * Info logs - shown in development, suppressed in production
   */
  info(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.log(`[${this.context}] ℹ️  ${message}`, ...args);
    }
  }

  /**
   * Success logs - shown in development
   */
  success(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.log(`[${this.context}] ✅ ${message}`, ...args);
    }
  }

  /**
   * Warning logs - shown in all environments
   */
  warn(message: string, ...args: any[]) {
    console.warn(`[${this.context}] ⚠️  ${message}`, ...args);
  }

  /**
   * Error logs - always shown and includes stack trace
   */
  error(message: string, error?: any, ...args: any[]) {
    console.error(`[${this.context}] ❌ ${message}`, error, ...args);

    // In production, you could send to error tracking service (Sentry, etc.)
    if (!isDevelopment && error) {
      // TODO: Send to error tracking service
      // Example: Sentry.captureException(error);
    }
  }

  /**
   * Create a child logger with extended context
   */
  child(subContext: string): Logger {
    return new Logger(`${this.context}:${subContext}`);
  }
}

/**
 * Create a logger instance for a specific context
 *
 * @example
 * const log = createLogger('StripeWebhook');
 * log.info('Processing checkout session');
 * log.error('Payment failed', error);
 */
export function createLogger(context: string): Logger {
  return new Logger(context);
}

/**
 * Default logger instance
 */
export const logger = new Logger('MoonlitStudios');

/**
 * Convenience exports for quick logging without creating instances
 */
export const log = {
  debug: (message: string, ...args: any[]) => logger.debug(message, ...args),
  info: (message: string, ...args: any[]) => logger.info(message, ...args),
  success: (message: string, ...args: any[]) => logger.success(message, ...args),
  warn: (message: string, ...args: any[]) => logger.warn(message, ...args),
  error: (message: string, error?: any, ...args: any[]) => logger.error(message, error, ...args),
};
