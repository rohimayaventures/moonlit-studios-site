'use client';

import { useState } from 'react';

export default function TestPaymentPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testPayment = async (amount: number, description: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          description,
          quoteId: `test_quote_${Date.now()}`,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Failed to create checkout session');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-moonlightSilver mb-4">
            💳 Stripe Payment Testing
          </h1>
          <p className="text-moonlightSilver/70 text-lg">
            Test your payment system before going live
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400">❌ {error}</p>
          </div>
        )}

        {/* Test Payment Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Small Payment Test */}
          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-lunarGold mb-2">Small Payment</h3>
            <p className="text-moonlightSilver/60 mb-4">Test with $10.00</p>
            <button
              onClick={() => testPayment(1000, 'Test Payment - $10 Consultation')}
              disabled={loading}
              className="w-full px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Session...' : 'Pay $10.00'}
            </button>
          </div>

          {/* Medium Payment Test */}
          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-lunarGold mb-2">Medium Payment</h3>
            <p className="text-moonlightSilver/60 mb-4">Test with $50.00</p>
            <button
              onClick={() => testPayment(5000, 'Test Payment - $50 Deposit')}
              disabled={loading}
              className="w-full px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Session...' : 'Pay $50.00'}
            </button>
          </div>

          {/* Large Payment Test */}
          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-lunarGold mb-2">Large Payment</h3>
            <p className="text-moonlightSilver/60 mb-4">Test with $500.00</p>
            <button
              onClick={() => testPayment(50000, 'Test Payment - $500 Project Deposit')}
              disabled={loading}
              className="w-full px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Session...' : 'Pay $500.00'}
            </button>
          </div>

          {/* Enterprise Payment Test */}
          <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-lunarGold mb-2">Enterprise Payment</h3>
            <p className="text-moonlightSilver/60 mb-4">Test with $2,500.00</p>
            <button
              onClick={() => testPayment(250000, 'Test Payment - $2500 Full Project')}
              disabled={loading}
              className="w-full px-6 py-3 bg-lunarGold text-midnight rounded-lg font-semibold hover:bg-starlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Session...' : 'Pay $2,500.00'}
            </button>
          </div>
        </div>

        {/* Test Card Instructions */}
        <div className="bg-starlight/5 border border-starlight/20 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-starlight mb-4">🧪 Test Credit Cards</h3>
          <div className="space-y-3 text-moonlightSilver/80">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-moonlightSilver">✅ Successful Payment</p>
                <p className="font-mono text-sm">4242 4242 4242 4242</p>
              </div>
              <div>
                <p className="font-semibold text-moonlightSilver">❌ Card Declined</p>
                <p className="font-mono text-sm">4000 0000 0000 9995</p>
              </div>
              <div>
                <p className="font-semibold text-moonlightSilver">❌ Insufficient Funds</p>
                <p className="font-mono text-sm">4000 0025 0000 3155</p>
              </div>
              <div>
                <p className="font-semibold text-moonlightSilver">🔒 Requires 3D Secure</p>
                <p className="font-mono text-sm">4000 0000 0000 3220</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-moonlightSilver/10">
              <p className="text-sm">
                <strong>For all test cards:</strong> Use any future expiry date (12/34), any 3-digit CVC (123), and any 5-digit ZIP (12345)
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-deepOcean/30 border border-lunarGold/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-lunarGold mb-4">📋 Testing Checklist</h3>
          <ol className="space-y-2 text-moonlightSilver/80 list-decimal list-inside">
            <li>Click a payment button above</li>
            <li>You'll be redirected to Stripe's secure checkout page</li>
            <li>Use test card <span className="font-mono bg-midnight/50 px-2 py-1 rounded">4242 4242 4242 4242</span></li>
            <li>Complete the payment</li>
            <li>Verify redirect to success page</li>
            <li>Check Stripe Dashboard for the test payment</li>
          </ol>
        </div>

        {/* Links */}
        <div className="mt-8 text-center space-y-3">
          <a
            href="https://dashboard.stripe.com/test/payments"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-starlight hover:text-lunarGold transition-colors"
          >
            📊 View Test Payments in Stripe Dashboard →
          </a>
          <br />
          <a
            href="/"
            className="inline-block text-moonlightSilver/60 hover:text-moonlightSilver transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
