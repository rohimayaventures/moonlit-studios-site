'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-deepOcean/50 backdrop-blur-sm border border-lunarGold/30 rounded-lg p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-lunarGold mb-4">
            Payment Successful! 🎉
          </h1>
          <p className="text-xl text-moonlightSilver mb-6">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>

          {/* Session ID */}
          {sessionId && (
            <div className="bg-midnight/50 border border-moonlightSilver/10 rounded-lg p-4 mb-8">
              <p className="text-sm text-moonlightSilver/60 mb-1">Transaction ID:</p>
              <p className="font-mono text-sm text-starlight break-all">{sessionId}</p>
            </div>
          )}

          {/* What's Next */}
          <div className="bg-starlight/5 border border-starlight/20 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-starlight mb-3">What happens next?</h3>
            <ul className="space-y-2 text-moonlightSilver/80">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>You'll receive a confirmation email with your receipt</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">👤</span>
                <span>Our team will reach out within 24 hours to begin your project</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📅</span>
                <span>You can track your project progress in your client portal</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all"
            >
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-deepOcean border border-moonlightSilver/20 text-moonlightSilver rounded-lg font-semibold hover:border-starlight/40 transition-all"
            >
              Contact Support
            </Link>
          </div>

          {/* Test Mode Notice */}
          {sessionId?.startsWith('cs_test_') && (
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 text-sm">
                ⚠️ This was a <strong>test payment</strong>. No real charges were made.
              </p>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-moonlightSilver/60 text-sm">
          <p>Questions? Email us at <a href="mailto:hello@moonlstudios.com" className="text-starlight hover:text-lunarGold">hello@moonlstudios.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-midnight flex items-center justify-center text-moonlightSilver">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
