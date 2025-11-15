'use client';

import { useState } from 'react';

export default function GetQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quoteResult, setQuoteResult] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    features: [] as string[],
    complexity: '',
    additionalNotes: '',
  });

  const serviceOptions = [
    'Creative Design & Development',
    'Health x Tech Development',
    'Consulting',
    'AI Innovation',
    'Ghostwriting',
  ];

  const featureOptions: Record<string, string[]> = {
    'Creative Design & Development': [
      'Logo & Brand Identity',
      'Website Development',
      'UI/UX Design',
      'Marketing Materials',
      'E-commerce Features',
      'CMS Integration',
    ],
    'Health x Tech Development': [
      'HIPAA Compliance',
      'Patient Portal',
      'Clinical Dashboard',
      'EHR/EMR Integration',
      'Telehealth Features',
      'Data Analytics',
      'Multi-facility Support',
    ],
    'Consulting': [
      'Product Strategy',
      'UX Audit',
      'Clinical Validation',
      'Regulatory Guidance',
      'Go-to-Market Plan',
      'Investor Deck Review',
    ],
    'AI Innovation': [
      'RAG Chatbot',
      'Document Q&A',
      'Voice AI',
      'Computer Vision',
      'Predictive Analytics',
      'Multi-agent Systems',
    ],
    'Ghostwriting': [
      'Book/Novel',
      'Cookbook',
      'Blog Content',
      'Website Copy',
      'Marketing Content',
      'Author Platform',
    ],
  };

  const handleFeatureToggle = (feature: string) => {
    if (formData.features.includes(feature)) {
      setFormData({ ...formData, features: formData.features.filter(f => f !== feature) });
    } else {
      setFormData({ ...formData, features: [...formData.features, feature] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/quote/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setQuoteResult(data.quote);
        setSubmitted(true);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted && quoteResult) {
    return (
      <main className="min-h-screen bg-midnight text-pearlWhite py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-mermaidTeal/20 to-lunarGold/20 flex items-center justify-center border-4 border-mermaidTeal/50 animate-pulse">
              <svg className="w-12 h-12 text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Quote is Ready! 💰
            </h1>
            <p className="text-lg text-moonlightSilver mb-6">
              AI-powered analysis complete. Check your email for the full details!
            </p>
          </div>

          {/* Quote Summary */}
          <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border-2 border-lunarGold/50 rounded-2xl p-8 mb-8 shadow-2xl shadow-lunarGold/20">
            <div className="inline-block px-4 py-2 rounded-full bg-lunarGold/20 border border-lunarGold/50 mb-6">
              <p className="text-sm font-bold text-lunarGold uppercase tracking-wider">
                Recommended Solution
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-pearlWhite mb-4">
              {quoteResult.recommendedTier}
            </h2>

            <div className="text-5xl font-bold text-mermaidTeal mb-4">
              {quoteResult.estimatedPrice}
            </div>

            <p className="text-moonlightSilver mb-2">
              <strong className="text-pearlWhite">Estimated Timeline:</strong> {quoteResult.timeline}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30">
              <svg className="w-5 h-5 text-mermaidTeal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-mermaidTeal font-semibold">
                {quoteResult.confidence === 'high' && 'High Confidence Match'}
                {quoteResult.confidence === 'medium' && 'Good Match (Refinement Suggested)'}
                {quoteResult.confidence === 'low' && 'Consultation Recommended'}
              </span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-deepOcean/20 to-midnight/40 border border-moonlightSilver/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              What Happens Next?
            </h3>

            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-lg bg-deepOcean/20 border border-mermaidTeal/20">
                <div className="w-8 h-8 rounded-full bg-mermaidTeal/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-mermaidTeal font-bold">1</span>
                </div>
                <p className="text-sm text-center text-moonlightSilver">
                  <strong className="text-pearlWhite">Check Your Email</strong><br />
                  Detailed quote sent to {formData.email.substring(0, 20)}...
                </p>
              </div>

              <div className="p-4 rounded-lg bg-deepOcean/20 border border-lunarGold/20">
                <div className="w-8 h-8 rounded-full bg-lunarGold/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lunarGold font-bold">2</span>
                </div>
                <p className="text-sm text-center text-moonlightSilver">
                  <strong className="text-pearlWhite">Book Free Consult</strong><br />
                  Discuss details & finalize scope
                </p>
              </div>

              <div className="p-4 rounded-lg bg-deepOcean/20 border border-phoenixFire/20">
                <div className="w-8 h-8 rounded-full bg-phoenixFire/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-phoenixFire font-bold">3</span>
                </div>
                <p className="text-sm text-center text-moonlightSilver">
                  <strong className="text-pearlWhite">Start Your Project</strong><br />
                  Receive proposal & begin work
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mermaidTeal/90 to-tealBright/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-mermaidTeal hover:to-tealBright hover:shadow-lg hover:shadow-mermaidTeal/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Consultation
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-moonlightSilver/50 px-8 py-4 text-base font-semibold text-moonlightSilver transition-all hover:bg-moonlightSilver/10 hover:border-moonlightSilver"
            >
              View All Services
            </a>
          </div>

          <p className="text-sm text-moonlightSilver/60 mt-8">
            Quote ID: <strong className="text-pearlWhite">{quoteResult.id}</strong> • Valid for 30 days
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

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 border border-lunarGold/40 mb-6">
            <svg className="w-5 h-5 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-xs sm:text-sm tracking-[0.35em] text-lunarGold uppercase font-semibold">
              AI-Powered Instant Quote
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get Your Custom Quote in 60 Seconds
          </h1>

          <p className="text-lg text-moonlightSilver max-w-2xl mx-auto mb-8">
            Our AI analyzes your project requirements and instantly recommends the perfect service tier with accurate pricing. No waiting, no guesswork—just honest estimates based on your needs.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-moonlightSilver/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-mermaidTeal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No obligation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-mermaidTeal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant delivery
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-mermaidTeal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Transparent pricing
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="bg-gradient-to-br from-deepOcean/40 to-midnight/60 border border-mermaidTeal/30 rounded-2xl p-8 shadow-2xl shadow-mermaidTeal/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Info */}
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

            {/* Service Selection */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">
                Service Type <span className="text-phoenixFire">*</span>
              </label>
              <select
                id="serviceType"
                required
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value, features: [] })}
                className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Features Checkboxes */}
            {formData.serviceType && featureOptions[formData.serviceType] && (
              <div>
                <label className="block text-sm font-semibold mb-3">
                  What features do you need? <span className="text-moonlightSilver/60 text-xs">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {featureOptions[formData.serviceType].map((feature) => (
                    <label
                      key={feature}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${
                        formData.features.includes(feature)
                          ? 'bg-mermaidTeal/20 border-2 border-mermaidTeal/50'
                          : 'bg-deepOcean/30 border-2 border-moonlightSilver/20 hover:border-moonlightSilver/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-pearlWhite">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-semibold mb-2">
                Project Description <span className="text-phoenixFire">*</span>
              </label>
              <textarea
                id="projectDescription"
                required
                rows={5}
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all resize-none"
                placeholder="Tell us about your project... What are your goals? Who is your target audience? What problems are you solving?"
              />
              <p className="text-xs text-moonlightSilver/60 mt-2">
                The more details you provide, the more accurate your quote will be.
              </p>
            </div>

            {/* Timeline & Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                  Timeline <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="e.g., ASAP, Q1 2025, 2-3 months"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                  Budget Range <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all"
                  placeholder="e.g., $5k-$10k, Flexible, TBD"
                />
              </div>
            </div>

            {/* Complexity Level */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                How complex is your project? <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Simple', 'Moderate', 'Complex'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({ ...formData, complexity: level })}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                      formData.complexity === level
                        ? 'bg-lunarGold/20 border-2 border-lunarGold/50 text-lunarGold'
                        : 'bg-deepOcean/30 border-2 border-moonlightSilver/20 text-moonlightSilver hover:border-moonlightSilver/40'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-semibold mb-2">
                Additional Notes <span className="text-moonlightSilver/60 text-xs">(Optional)</span>
              </label>
              <textarea
                id="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-deepOcean/60 border border-moonlightSilver/20 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:border-mermaidTeal/60 focus:ring-2 focus:ring-mermaidTeal/20 transition-all resize-none"
                placeholder="Any specific requirements, constraints, or questions?"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lunarGold/90 to-phoenixFire/80 px-8 py-4 text-base font-bold text-midnight transition-all hover:from-lunarGold hover:to-phoenixFire hover:shadow-lg hover:shadow-lunarGold/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    AI Analyzing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Instant Quote
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Trust Signal */}
        <div className="mt-8 text-center">
          <p className="text-sm text-moonlightSilver/60">
            🔒 Your information is private and will never be shared. The AI quote is an estimate—final pricing confirmed after consultation.
          </p>
        </div>
      </div>
    </main>
  );
}
