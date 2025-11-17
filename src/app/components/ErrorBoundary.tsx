'use client';

import React, { Component, ReactNode, ErrorInfo } from 'react';
import { createLogger } from "@/lib/logger";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 *
 * @example
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 *
 * @example Custom fallback
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you would send this to an error tracking service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-phoenixFire/20 border-2 border-phoenixFire/40 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-phoenixFire"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-lunarGold mb-4">
              Something Went Wrong
            </h2>

            <p className="text-moonlightSilver mb-6 leading-relaxed">
              The moonlight flickered for a moment. We&apos;ve been notified and are working on it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-midnight/60 border border-phoenixFire/30 rounded-lg text-left">
                <p className="text-xs font-mono text-phoenixFire/90 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all"
            >
              Reload Page
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="mt-3 px-6 py-3 bg-transparent border border-moonlightSilver/20 text-moonlightSilver rounded-lg font-semibold hover:border-lunarGold/40 hover:text-lunarGold transition-all block w-full"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component to wrap any component with an error boundary
 *
 * @example
 * export default withErrorBoundary(MyComponent);
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
