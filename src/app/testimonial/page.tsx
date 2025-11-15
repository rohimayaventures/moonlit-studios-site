'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function TestimonialPage() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Pre-fill from URL params
  const [formData, setFormData] = useState({
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    role: '',
    company: '',
    rating: 5,
    feedback: '',
    service: '',
    eventId: searchParams.get('event') || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/testimonials/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit feedback');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-midnight text-pearlWhite flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Thank You! 🙏
          </h1>

          <p className="text-lg text-moonlightSilver mb-6">
            Your feedback has been submitted successfully. I truly appreciate you taking the time to share your thoughts!
          </p>

          <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-mermaidTeal/30 rounded-2xl p-8 mb-8">
            <p className="text-pearlWhite mb-4">
              If you know other healthcare professionals or organizations working on innovative projects,
              I'd be honored if you'd consider referring them my way.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mermaidTeal/90 to-tealBright/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-mermaidTeal hover:to-tealBright hover:shadow-lg hover:shadow-mermaidTeal/40"
            >
              Back to Moonlit Studios
            </a>
          </div>

          <p className="text-sm text-moonlightSilver/60">
            You'll receive a thank you email shortly.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite py-12 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-lunarGold/40 to-tealBright/60 blur-3xl animate-floatSlow" />
        <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/40 via-mermaidTeal/30 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-mermaidTeal/20 to-lunarGold/20 border border-mermaidTeal/40 mb-6">
            <svg className="w-5 h-5 text-mermaidTeal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <p className="text-xs sm:text-sm tracking-[0.35em] text-mermaidTeal uppercase font-semibold">
              Your Feedback Matters
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How Was Your Experience?
          </h1>

          <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
            Your honest feedback helps me continue to improve and serve healthcare innovators like you even better.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-mermaidTeal/30 rounded-2xl p-8 shadow-2xl shadow-mermaidTeal/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name <span className="text-phoenixFire">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-phoenixFire">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            {/* Role & Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-sm font-semibold mb-2">
                  Your Role <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="Healthcare Tech Founder"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="MedTech Innovations"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-2">
                What did we discuss? <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
              >
                <option value="">Select a topic...</option>
                <option value="Healthcare Tech Development">Healthcare Tech Development</option>
                <option value="AI Innovation">AI Innovation & Automation</option>
                <option value="Creative Design">Creative Design & Branding</option>
                <option value="Ghostwriting">Ghostwriting & Content</option>
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                How would you rate your experience? <span className="text-phoenixFire">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="group transition-transform hover:scale-110"
                  >
                    <svg
                      className={`w-12 h-12 transition-colors ${
                        star <= formData.rating
                          ? 'text-lunarGold fill-lunarGold'
                          : 'text-moonlightSilver/30 fill-transparent'
                      } group-hover:text-lunarGold`}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                ))}
              </div>
              <p className="text-sm text-moonlightSilver/60 mt-2">
                {formData.rating === 5 && '⭐ Excellent!'}
                {formData.rating === 4 && '⭐ Great!'}
                {formData.rating === 3 && '⭐ Good'}
                {formData.rating === 2 && '⭐ Fair'}
                {formData.rating === 1 && '⭐ Needs improvement'}
              </p>
            </div>

            {/* Feedback */}
            <div>
              <label htmlFor="feedback" className="block text-sm font-semibold mb-2">
                Tell me about your experience <span className="text-phoenixFire">*</span>
              </label>
              <textarea
                id="feedback"
                required
                rows={6}
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all resize-none"
                placeholder="What did you find most valuable? What could be improved? Any specific insights that stood out?"
              />
              <p className="text-xs text-moonlightSilver/60 mt-2">
                Your honest feedback is incredibly valuable—whether it's praise or constructive criticism.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-lg bg-phoenixFire/10 border border-phoenixFire/30">
                <p className="text-phoenixFire text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mermaidTeal/90 to-tealBright/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-mermaidTeal hover:to-tealBright hover:shadow-lg hover:shadow-mermaidTeal/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Feedback
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Trust Signal */}
        <div className="mt-8 text-center">
          <p className="text-sm text-moonlightSilver/60">
            🔒 Your information is kept private and will never be shared without your permission.
          </p>
        </div>
      </div>
    </main>
  );
}
