'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      if (activeTab === 'signup') {
        // Sign-up flow - contact form submission
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            company,
            message: `Portal Sign-up Request\n\nCompany: ${company || 'N/A'}\n\nI would like to request access to the client portal.`,
            subject: 'Client Portal Sign-up Request',
          }),
        });

        const data = await res.json();

        if (data.success) {
          setSuccess(true);
        } else {
          setErrorMessage('Failed to submit request. Please try again.');
        }
      } else {
        // Login flow - existing client
        const res = await fetch('/api/portal/auth/request-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.success) {
          setSuccess(true);
        } else {
          setErrorMessage(data.error || 'Failed to send access link');
        }
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = () => {
    switch (error) {
      case 'missing_token':
        return 'Invalid access link. Please request a new one.';
      case 'invalid_token':
        return 'Access link expired or already used. Please request a new one.';
      case 'session_failed':
        return 'Session creation failed. Please try again.';
      case 'server_error':
        return 'Server error. Please try again later.';
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-deepOcean to-midnight flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-lunarGold mb-2">🌙</h1>
          <h2 className="font-elegant text-2xl font-semibold text-moonlightSilver">
            Client Portal
          </h2>
          <p className="font-serif text-moonlightSilver/70 mt-2 italic">
            Moonlit Studios
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg p-8">
          {/* URL Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{getErrorMessage()}</p>
            </div>
          )}

          {success ? (
            // Success State
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-400"
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
              <h3 className="text-xl font-bold text-starlight mb-2">
                {activeTab === 'login' ? 'Check Your Email! 📧' : 'Request Submitted! ✅'}
              </h3>
              <p className="text-moonlightSilver/80 mb-4">
                {activeTab === 'login'
                  ? 'We sent a secure login link to:'
                  : 'Your portal access request has been sent to:'}
              </p>
              <p className="font-mono text-lunarGold mb-6">{email}</p>
              <p className="text-sm text-moonlightSilver/60 mb-4">
                {activeTab === 'login' ? (
                  <>
                    Click the link in your email to access your portal.<br />
                    The link is valid for <strong className="text-starlight">15 minutes</strong>.
                  </>
                ) : (
                  <>
                    Our team will review your request and set up your portal access.<br />
                    You'll receive an email within <strong className="text-starlight">24 hours</strong>.
                  </>
                )}
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  setEmail('');
                  setName('');
                  setCompany('');
                }}
                className="text-starlight hover:text-lunarGold transition-colors text-sm"
              >
                ← {activeTab === 'login' ? 'Send to a different email' : 'Submit another request'}
              </button>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex border-b border-moonlightSilver/10 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
                    activeTab === 'login'
                      ? 'text-lunarGold'
                      : 'text-moonlightSilver/60 hover:text-moonlightSilver'
                  }`}
                >
                  Login
                  {activeTab === 'login' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lunarGold"></div>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
                    activeTab === 'signup'
                      ? 'text-lunarGold'
                      : 'text-moonlightSilver/60 hover:text-moonlightSilver'
                  }`}
                >
                  Sign Up
                  {activeTab === 'signup' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lunarGold"></div>
                  )}
                </button>
              </div>

              {/* Login Tab */}
              {activeTab === 'login' ? (
                <>
                  <h3 className="text-xl font-bold text-moonlightSilver mb-2">
                    Welcome Back
                  </h3>
                  <p className="text-moonlightSilver/70 text-sm mb-6">
                    Enter your email to receive a secure login link
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-moonlightSilver/80 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 min-h-[44px] bg-midnight/50 border border-moonlightSilver/20 rounded-lg text-moonlightSilver placeholder-moonlightSilver/40 focus:outline-none focus:border-lunarGold/50 focus:ring-2 focus:ring-lunarGold/20"
                        placeholder="your@email.com"
                        required
                        disabled={loading}
                      />
                    </div>

                    {errorMessage && (
                      <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3 min-h-[44px] bg-gradient-to-r from-lunarGold to-starlight text-midnight rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Access Link'
                      )}
                    </button>

                    <div className="mt-6 pt-6 border-t border-moonlightSilver/10">
                      <p className="text-sm text-moonlightSilver/60 text-center">
                        🔒 Secure, passwordless login
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                // Sign Up Tab
                <>
                  <h3 className="text-xl font-bold text-moonlightSilver mb-2">
                    Request Portal Access
                  </h3>
                  <p className="text-moonlightSilver/70 text-sm mb-6">
                    Fill out the form below and we'll set up your client portal
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="signup-name"
                        className="block text-sm font-medium text-moonlightSilver/80 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="signup-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 min-h-[44px] bg-midnight/50 border border-moonlightSilver/20 rounded-lg text-moonlightSilver placeholder-moonlightSilver/40 focus:outline-none focus:border-lunarGold/50 focus:ring-2 focus:ring-lunarGold/20"
                        placeholder="John Doe"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="signup-email"
                        className="block text-sm font-medium text-moonlightSilver/80 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="signup-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 min-h-[44px] bg-midnight/50 border border-moonlightSilver/20 rounded-lg text-moonlightSilver placeholder-moonlightSilver/40 focus:outline-none focus:border-lunarGold/50 focus:ring-2 focus:ring-lunarGold/20"
                        placeholder="john@company.com"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="signup-company"
                        className="block text-sm font-medium text-moonlightSilver/80 mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="signup-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 min-h-[44px] bg-midnight/50 border border-moonlightSilver/20 rounded-lg text-moonlightSilver placeholder-moonlightSilver/40 focus:outline-none focus:border-lunarGold/50 focus:ring-2 focus:ring-lunarGold/20"
                        placeholder="Your Company (optional)"
                        disabled={loading}
                      />
                    </div>

                    {errorMessage && (
                      <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3 min-h-[44px] bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Request Portal Access'
                      )}
                    </button>

                    <div className="mt-6 pt-6 border-t border-moonlightSilver/10">
                      <p className="text-sm text-moonlightSilver/60 text-center">
                        ✨ New clients welcome • Fast 24-hour setup
                      </p>
                    </div>
                  </form>
                </>
              )}
            </>
          )}
        </div>

        {/* Help */}
        <div className="mt-6 text-center text-moonlightSilver/60 text-sm">
          <p>
            Need help? Email us at{' '}
            <a
              href="mailto:hello@moonlitstudios.com"
              className="text-starlight hover:text-lunarGold transition-colors"
            >
              hello@moonlitstudios.com
            </a>
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-moonlightSilver/60 hover:text-moonlightSilver transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-midnight flex items-center justify-center text-moonlightSilver">
          Loading...
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
