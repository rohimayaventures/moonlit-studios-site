'use client';

import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Cancel Card */}
        <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-8 md:p-12 text-center">
          {/* Cancel Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          {/* Cancel Message */}
          <h1 className="font-elegant text-3xl md:text-4xl font-bold text-moonlightSilver mb-4">
            Payment Canceled
          </h1>
          <p className="text-xl text-moonlightSilver/70 mb-8">
            Your payment was not completed. No charges were made to your account.
          </p>

          {/* Reassurance */}
          <div className="bg-starlight/5 border border-starlight/20 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-starlight mb-3">What happened?</h3>
            <p className="text-moonlightSilver/80 mb-4">
              You canceled the payment process, or there may have been an issue with the transaction.
              Don't worry—no charges were made to your payment method.
            </p>
            <h3 className="text-lg font-semibold text-starlight mb-3 mt-6">Ready to try again?</h3>
            <p className="text-moonlightSilver/80">
              If you'd like to complete your purchase, you can return to the payment page.
              Our team is also available to answer any questions you may have.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="px-6 py-3 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight rounded-lg font-semibold hover:shadow-xl hover:shadow-lunarGold/40 hover:scale-105 transition-all"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-deepOcean border border-moonlightSilver/20 text-moonlightSilver rounded-lg font-semibold hover:border-starlight/40 transition-all"
            >
              View Services
            </Link>
          </div>

          {/* Alternative */}
          <div className="mt-8 pt-6 border-t border-moonlightSilver/10">
            <p className="text-moonlightSilver/60 mb-4">Prefer to discuss your project first?</p>
            <Link
              href="https://calendly.com/pagadeventures/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-starlight hover:text-lunarGold transition-colors"
            >
              <span>📅</span>
              <span>Book a Free Consultation</span>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-moonlightSilver/60 text-sm">
          <Link href="/" className="hover:text-moonlightSilver transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
