'use client';

import { useState } from 'react';
import { Check, Target, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Rivendell Council Chamber - Elven SVG Components
function ElvenScriptLine({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="200" height="2" viewBox="0 0 200 2" fill="none">
      <path
        d="M0 1 Q 50 0.5, 100 1 T 200 1"
        stroke="url(#scriptGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="scriptGradient" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="#C9A961" stopOpacity="0" />
          <stop offset="50%" stopColor="#F0C979" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LaurelLeaf({ className = '', delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="50"
      viewBox="0 0 40 50"
      fill="none"
      style={{ animationDelay: delay }}
    >
      <path
        d="M20 5 Q 15 15, 20 25 Q 25 15, 20 5 Z"
        fill="url(#leafGradient)"
        className="animate-pulse"
        opacity="0.7"
      />
      <path
        d="M20 25 Q 15 35, 20 45 Q 25 35, 20 25 Z"
        fill="url(#leafGradient)"
        className="animate-pulse"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="leafGradient" x1="20" y1="5" x2="20" y2="45">
          <stop offset="0%" stopColor="#F0C979" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C9A961" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AncientSigil({ className = '', delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      style={{ animationDelay: delay }}
    >
      <circle
        cx="40"
        cy="40"
        r="30"
        stroke="#F0C979"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        className="animate-pulse"
      />
      <path
        d="M 40 10 L 45 35 L 70 40 L 45 45 L 40 70 L 35 45 L 10 40 L 35 35 Z"
        stroke="#C9A961"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <circle cx="40" cy="40" r="5" fill="#F0C979" opacity="0.6" />
    </svg>
  );
}

function WisdomFlow({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute top-0 left-[15%] w-2 h-2 rounded-full bg-[#F0C979]/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute top-8 left-[30%] w-3 h-3 rounded-full bg-[#C9A961]/25 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '5s' }} />
      <div className="absolute top-4 left-[50%] w-2 h-2 rounded-full bg-[#F0C979]/35 animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '4.5s' }} />
      <div className="absolute top-10 right-[35%] w-2 h-2 rounded-full bg-[#C9A961]/30 animate-bounce" style={{ animationDelay: '2.4s', animationDuration: '5.5s' }} />
    </div>
  );
}

function ParchmentScroll({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="60" height="80" viewBox="0 0 60 80" fill="none">
      <g className="animate-pulse" opacity="0.6">
        <rect x="10" y="5" width="40" height="70" rx="2" fill="url(#parchmentGradient)" />
        <rect x="10" y="5" width="40" height="4" fill="#C9A961" opacity="0.4" />
        <rect x="10" y="71" width="40" height="4" fill="#C9A961" opacity="0.4" />
        <line x1="15" y1="20" x2="45" y2="20" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
        <line x1="15" y1="30" x2="45" y2="30" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
        <line x1="15" y1="40" x2="45" y2="40" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
      </g>
      <defs>
        <linearGradient id="parchmentGradient" x1="30" y1="5" x2="30" y2="75">
          <stop offset="0%" stopColor="#F5E7C8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8D5B5" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ConsultingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Quick Wins & Discovery - Sorted by price (low to high)
  const quickWins = [
    {
      id: 1,
      title: "Portfolio Review",
      price: "$500",
      priceNum: 500,
      duration: "90-minute session",
      features: [
        "Portfolio refinement guidance",
        "Storytelling framework",
        "Career positioning insights",
        "Quick-win recommendations",
      ],
      ideal: "Creatives, job seekers, career pivoters",
      popular: false,
    },
    {
      id: 2,
      title: "Pitch Deck Clinic",
      price: "$1,000",
      priceNum: 1000,
      duration: "2-hour session",
      features: [
        "Deck structure review",
        "Narrative strengthening",
        "Visual hierarchy fixes",
        "Investor perspective insights",
        "Revised deck outline",
      ],
      ideal: "Founders, fundraisers, business developers",
      popular: true,
    },
  ];

  // Workshops & Training - Sorted by price (low to high)
  const workshops = [
    {
      id: 3,
      title: "Half-Day Workshop",
      price: "$1,500",
      priceNum: 1500,
      duration: "4 hours",
      features: [
        "Creative writing intensive OR",
        "AI + creativity bootcamp OR",
        "HealthTech UX clinic",
        "Interactive exercises",
        "Takeaway materials",
      ],
      ideal: "Teams, creative groups, learning organizations",
      popular: false,
    },
    {
      id: 4,
      title: "Full-Day Intensive Workshop",
      price: "$3,000",
      priceNum: 3000,
      duration: "8 hours",
      features: [
        "Deep-dive on chosen topic",
        "Product accelerator session",
        "Team exercises & critique",
        "Personalized action plans",
        "Follow-up resources",
        "30-day email support",
      ],
      ideal: "Leadership teams, product teams, creative departments",
      popular: true,
    },
  ];

  // UX for Clinicians - Sorted by price (low to high)
  const uxServices = [
    {
      id: 5,
      title: "UX for Clinicians (Audit)",
      price: "$2,000",
      priceNum: 2000,
      duration: "one-time",
      features: [
        "Heuristic evaluation (clinical lens)",
        "Workflow friction analysis",
        "Adoption barrier identification",
        "Actionable improvement list",
      ],
      ideal: "HealthTech companies, medical device firms",
      popular: false,
    },
    {
      id: 6,
      title: "UX for Clinicians (Transformation)",
      price: "$5,000",
      priceNum: 5000,
      duration: "project-based",
      features: [
        "Heuristic evaluation (clinical lens)",
        "User testing with clinicians",
        "Interface redesign recommendations",
        "Load reduction strategies",
        "Implementation roadmap",
        "2 weeks post-launch support",
      ],
      ideal: "HealthTech scale-ups, medical software companies",
      popular: false,
    },
  ];

  // HealthTech Strategy - Sorted by price (low to high)
  const strategyServices = [
    {
      id: 7,
      title: "HealthTech Product Strategy (Single Session)",
      price: "$250/hr",
      priceNum: 250,
      duration: "per hour",
      features: [
        "Product roadmap review",
        "Safety pattern assessment",
        "Clinical validation insights",
        "Risk reduction strategies",
      ],
      ideal: "HealthTech startups, product managers",
      popular: false,
    },
    {
      id: 8,
      title: "HealthTech Product Strategy Package",
      price: "$4,000",
      priceNum: 4000,
      duration: "5-session package",
      features: [
        "Product roadmap review",
        "Go-to-market planning",
        "Pilot program design",
        "Regulatory pathway guidance",
        "Stakeholder presentation deck",
        "30-day Slack/email support",
      ],
      ideal: "HealthTech Series A/B, enterprise pilots",
      popular: true,
    },
    {
      id: 9,
      title: "Strategic Partner (Retainer)",
      price: "$8,000/mo",
      priceNum: 8000,
      duration: "monthly retainer",
      features: [
        "Weekly strategic sessions",
        "Unlimited async consultation",
        "Board/investor deck review",
        "Clinical advisory network access",
        "Priority response time",
        "Product roadmap alignment",
      ],
      ideal: "Funded HealthTech startups, growth-stage companies",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1410] via-[#2A1F1A] to-[#1A1410] text-[#F5E7C8] overflow-hidden">

      {/* Hero Section - Rivendell Council Chamber */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Ambient Parchment Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1F1A]/30 via-[#F0C979]/5 to-transparent animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Elven Decorative Elements */}
        <LaurelLeaf className="absolute top-12 left-[8%] opacity-50 hidden md:block" delay="0s" />
        <LaurelLeaf className="absolute top-24 right-[12%] opacity-40 hidden lg:block" delay="0.8s" />

        <AncientSigil className="absolute top-0 left-1/4 opacity-20 hidden lg:block" delay="0s" />
        <AncientSigil className="absolute bottom-10 right-1/3 opacity-15 hidden lg:block" delay="1.2s" />

        <ParchmentScroll className="absolute top-1/3 right-[10%] opacity-40 hidden md:block" />

        <WisdomFlow className="absolute inset-0 hidden sm:block" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Elven Script Divider */}
          <div className="mb-8 flex justify-center">
            <ElvenScriptLine />
          </div>

          {/* Moon Phases - Rivendell Elven Style with Pulsing */}
          <div className="mb-8 flex justify-center items-center gap-3 flex-wrap">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F0C979] to-[#C9A961] border-2 border-[#F0C979]/50 shadow-lg shadow-[#F0C979]/50 animate-pulse flex-shrink-0" style={{ animationDuration: '3s' }} />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-[#F0C979]/40 to-[#A8C5E0]/40" />

            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A8C5E0] to-[#6B8FA3] border-2 border-[#A8C5E0]/50 shadow-lg shadow-[#A8C5E0]/50 animate-pulse flex-shrink-0" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-[#A8C5E0]/50 to-[#F5E7C8]/50" />

            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F5E7C8] to-[#E8D5B5] border-2 border-[#F5E7C8]/50 shadow-lg shadow-[#F5E7C8]/50 animate-pulse flex-shrink-0" style={{ animationDuration: '4s', animationDelay: '0.6s' }} />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-[#F5E7C8]/40 to-[#8B7355]/40" />

            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8B7355] to-[#5C4A3A] border-2 border-[#8B7355]/50 shadow-lg shadow-[#8B7355]/50 animate-pulse flex-shrink-0" style={{ animationDuration: '3.2s', animationDelay: '0.9s' }} />
          </div>

          <h1 className="mb-4 text-5xl font-elegant text-[#F5E7C8] md:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Consulting & Advisory
          </h1>
          <p className="mb-6 text-xl text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Strategic wisdom from the council chamber
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#E8D5B5]/90">
            A nurse-turned-developer with 15+ years in clinical operations. I offer HealthTech product strategy,
            UX for clinicians, AI/ML advisory with guardrails, and portfolio storytelling. Strategic clarity grounded in real-world healthcare experience.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?service=consulting"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-8 py-4 font-bold text-[#1A1410] shadow-xl shadow-[#F0C979]/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#F0C979]/60"
            >
              <BookOpen className="h-5 w-5" />
              Book Consultation
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#F0C979] bg-[#2A1F1A]/60 px-8 py-4 font-semibold text-[#F0C979] backdrop-blur-sm transition-all hover:bg-[#F0C979]/10 hover:shadow-lg hover:shadow-[#F0C979]/30"
            >
              View Packages
            </a>
          </div>

          {/* Bottom Script Line */}
          <div className="mt-12 flex justify-center">
            <ElvenScriptLine />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative px-6 py-16 border-t border-[#C9A961]/20">
        <ElvenScriptLine className="absolute top-0 left-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Who Seeks the Council
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'HealthTech Founders', desc: 'Early to growth-stage startups building patient-facing tools, clinical workflows, or medical devices' },
              { title: 'Product & UX Teams', desc: 'Product managers, designers, and engineers building tools for clinicians or patients' },
              { title: 'Creative Professionals', desc: 'Writers, designers, and creators refining portfolios, pitches, or career positioning' },
              { title: 'Leadership Teams', desc: 'Executives and managers seeking strategic guidance, workshops, or team training' },
              { title: 'Investors & Advisors', desc: 'VC/PE firms and advisors needing clinical domain expertise for portfolio companies' },
              { title: 'Enterprises & Health Systems', desc: 'Large organizations piloting new tech, implementing digital tools, or transforming care delivery' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-[#C9A961]/30 bg-gradient-to-br from-[#2A1F1A]/70 to-[#1A1410]/90 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#F0C979] hover:shadow-xl hover:shadow-[#F0C979]/20"
              >
                <AncientSigil className="absolute -top-8 -right-8 opacity-10" delay={`${i * 0.3}s`} />
                <div className="relative">
                  <h3 className="mb-2 text-lg font-semibold text-[#F0C979]">{item.title}</h3>
                  <p className="text-sm text-[#E8D5B5]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We'll Work Together */}
      <section className="relative px-6 py-16 border-t border-[#C9A961]/20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>
            The Council's Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { num: '1', title: 'Discover', desc: 'Clarify your goals, constraints, and success metrics in focused conversation about what matters most' },
              { num: '2', title: 'Design & Recommend', desc: 'Receive frameworks, recommendations, and actionable plans tailored to your context with strategic clarity' },
              { num: '3', title: 'Deliver & Support', desc: 'Get deliverables, follow-up support, and strategic check-ins to ensure forward momentum' },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <LaurelLeaf className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-40" delay={`${i * 0.4}s`} />
                <div className="relative mb-6 text-6xl font-bold text-[#F0C979]/20" style={{ fontFamily: 'var(--font-playfair)' }}>{step.num}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#E8D5B5]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="relative px-6 py-20 border-t border-[#C9A961]/20">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <ElvenScriptLine className="mb-6 inline-block" />
            <h2 className="mb-4 text-3xl font-elegant text-[#F5E7C8] md:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Service Offerings
            </h2>
            <p className="text-lg text-[#E8D5B5]/80">
              From quick wins to strategic partnerships. Each offering designed for different needs and timelines.
            </p>
          </div>

          {/* THEMED SECTION 1: Quick Wins & Discovery */}
          <div className="mb-16">
            <div className="mb-8 flex items-center justify-center gap-4">
              <ElvenScriptLine className="w-32" />
              <h3 className="text-2xl font-elegant text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Quick Wins & Discovery
              </h3>
              <ElvenScriptLine className="w-32" />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {quickWins.map((pkg, i) => (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredCard(pkg.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-visible rounded-xl border bg-gradient-to-br from-[#2A1F1A]/80 to-[#1A1410]/95 p-8 backdrop-blur-sm transition-all shadow-lg animate-fadeInUp ${
                    hoveredCard === pkg.id ? 'scale-105 shadow-2xl shadow-[#F0C979]/30' : ''
                  } ${pkg.popular ? 'border-2 border-[#F0C979]' : 'border-[#C9A961]/40'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1410] shadow-lg">
                      Most Sought
                    </div>
                  )}
                  <AncientSigil className="absolute -top-12 -right-12 opacity-10" />
                  <div className="relative">
                    <h4 className="mb-4 text-2xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>{pkg.title}</h4>
                    <p className="mb-4 text-sm text-[#E8D5B5]/60">{pkg.duration}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#F0C979]">{pkg.price}</span>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#E8D5B5]/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0C979]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 rounded-lg border border-[#C9A961]/30 bg-[#F0C979]/5 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#E8D5B5]/70">
                        Perfect For:
                      </p>
                      <p className="text-sm text-[#F5E7C8]">{pkg.ideal}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#F0C979] bg-[#F0C979]/10 px-6 py-3 font-semibold text-[#F0C979] transition-all hover:bg-[#F0C979]/30"
                    >
                      Seek Counsel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THEMED SECTION 2: Workshops & Training */}
          <div className="mb-16">
            <div className="mb-8 flex items-center justify-center gap-4">
              <ElvenScriptLine className="w-32" />
              <h3 className="text-2xl font-elegant text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Workshops & Training
              </h3>
              <ElvenScriptLine className="w-32" />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {workshops.map((pkg, i) => (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredCard(pkg.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-visible rounded-xl border bg-gradient-to-br from-[#2A1F1A]/80 to-[#1A1410]/95 p-8 backdrop-blur-sm transition-all shadow-lg animate-fadeInUp ${
                    hoveredCard === pkg.id ? 'scale-105 shadow-2xl shadow-[#F0C979]/30' : ''
                  } ${pkg.popular ? 'border-2 border-[#F0C979]' : 'border-[#C9A961]/40'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1410] shadow-lg">
                      Most Sought
                    </div>
                  )}
                  <AncientSigil className="absolute -top-12 -right-12 opacity-10" />
                  <div className="relative">
                    <h4 className="mb-4 text-2xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>{pkg.title}</h4>
                    <p className="mb-4 text-sm text-[#E8D5B5]/60">{pkg.duration}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#F0C979]">{pkg.price}</span>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#E8D5B5]/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0C979]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 rounded-lg border border-[#C9A961]/30 bg-[#F0C979]/5 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#E8D5B5]/70">
                        Perfect For:
                      </p>
                      <p className="text-sm text-[#F5E7C8]">{pkg.ideal}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#F0C979] bg-[#F0C979]/10 px-6 py-3 font-semibold text-[#F0C979] transition-all hover:bg-[#F0C979]/30"
                    >
                      Seek Counsel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THEMED SECTION 3: UX for Clinicians */}
          <div className="mb-16">
            <div className="mb-8 flex items-center justify-center gap-4">
              <ElvenScriptLine className="w-32" />
              <h3 className="text-2xl font-elegant text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>
                UX for Clinicians
              </h3>
              <ElvenScriptLine className="w-32" />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {uxServices.map((pkg, i) => (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredCard(pkg.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-visible rounded-xl border bg-gradient-to-br from-[#2A1F1A]/80 to-[#1A1410]/95 p-8 backdrop-blur-sm transition-all shadow-lg animate-fadeInUp ${
                    hoveredCard === pkg.id ? 'scale-105 shadow-2xl shadow-[#F0C979]/30' : ''
                  } ${pkg.popular ? 'border-2 border-[#F0C979]' : 'border-[#C9A961]/40'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1410] shadow-lg">
                      Most Sought
                    </div>
                  )}
                  <AncientSigil className="absolute -top-12 -right-12 opacity-10" />
                  <div className="relative">
                    <h4 className="mb-4 text-2xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>{pkg.title}</h4>
                    <p className="mb-4 text-sm text-[#E8D5B5]/60">{pkg.duration}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#F0C979]">{pkg.price}</span>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#E8D5B5]/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0C979]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 rounded-lg border border-[#C9A961]/30 bg-[#F0C979]/5 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#E8D5B5]/70">
                        Perfect For:
                      </p>
                      <p className="text-sm text-[#F5E7C8]">{pkg.ideal}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#F0C979] bg-[#F0C979]/10 px-6 py-3 font-semibold text-[#F0C979] transition-all hover:bg-[#F0C979]/30"
                    >
                      Seek Counsel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THEMED SECTION 4: HealthTech Strategy */}
          <div>
            <div className="mb-8 flex items-center justify-center gap-4">
              <ElvenScriptLine className="w-32" />
              <h3 className="text-2xl font-elegant text-[#F0C979]" style={{ fontFamily: 'var(--font-playfair)' }}>
                HealthTech Strategy
              </h3>
              <ElvenScriptLine className="w-32" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {strategyServices.map((pkg, i) => (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredCard(pkg.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-visible rounded-xl border bg-gradient-to-br from-[#2A1F1A]/80 to-[#1A1410]/95 p-8 backdrop-blur-sm transition-all shadow-lg animate-fadeInUp ${
                    hoveredCard === pkg.id ? 'scale-105 shadow-2xl shadow-[#F0C979]/30' : ''
                  } ${pkg.popular ? 'border-2 border-[#F0C979]' : 'border-[#C9A961]/40'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1410] shadow-lg">
                      Most Sought
                    </div>
                  )}
                  <AncientSigil className="absolute -top-12 -right-12 opacity-10" />
                  <div className="relative">
                    <h4 className="mb-4 text-2xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>{pkg.title}</h4>
                    <p className="mb-4 text-sm text-[#E8D5B5]/60">{pkg.duration}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#F0C979]">{pkg.price}</span>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#E8D5B5]/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0C979]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 rounded-lg border border-[#C9A961]/30 bg-[#F0C979]/5 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#E8D5B5]/70">
                        Perfect For:
                      </p>
                      <p className="text-sm text-[#F5E7C8]">{pkg.ideal}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#F0C979] bg-[#F0C979]/10 px-6 py-3 font-semibold text-[#F0C979] transition-all hover:bg-[#F0C979]/30"
                    >
                      Seek Counsel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-16 border-t border-[#C9A961]/20">
        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-elegant text-[#F5E7C8]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Counsel's Wisdom
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do consulting sessions work?',
                a: 'Sessions are conducted via Zoom with screen sharing. You receive a calendar invite, pre-work if applicable, and follow-up notes within 48 hours. Workshops can be in-person or virtual based on your needs.',
              },
              {
                q: 'What are typical timelines?',
                a: 'Quick wins (Portfolio Review, Pitch Deck): 1-2 weeks. Strategy packages: 4-6 weeks. UX Transformation: 6-8 weeks. Retainers are ongoing monthly. Rush timelines available with planning.',
              },
              {
                q: 'Can I customize a package?',
                a: 'Absolutely. Many combine HealthTech strategy with UX audits, or add workshops to retainers. I create custom scopes that fit your needs and budget.',
              },
              {
                q: 'What makes this counsel different?',
                a: 'I bridge clinical operations and modern tech. I\'ve been a bedside nurse, managed healthcare teams, and built full-stack applications. You get strategic thinking grounded in real clinical experience—not theory.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes. All engagements include standard confidentiality protections. If you have specific requirements or need a custom NDA, we review and execute before work begins.',
              },
              {
                q: 'Not sure which service you need?',
                a: 'Start with a free 20-minute discovery call. We discuss your goals, challenges, and timeline—then I recommend the best fit. No pressure, no sales pitch. Just honest guidance.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#C9A961]/30 bg-gradient-to-br from-[#2A1F1A]/60 to-[#1A1410]/80 p-6 backdrop-blur-sm transition-all hover:border-[#F0C979]/50 hover:bg-[#F0C979]/5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#F0C979] transition-colors group-hover:text-[#F5E7C8]">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-relaxed text-[#E8D5B5]/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-20 border-t border-[#C9A961]/20">
        <AncientSigil className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-15 hidden lg:block" />
        <AncientSigil className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-15 hidden lg:block" delay="0.6s" />
        <LaurelLeaf className="absolute top-10 left-[10%] opacity-30 hidden md:block" />
        <LaurelLeaf className="absolute bottom-10 right-[15%] opacity-30 hidden md:block" delay="0.8s" />

        <div className="relative mx-auto max-w-3xl text-center">
          <ElvenScriptLine className="mb-8 inline-block" />

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#F0C979] to-[#C9A961] mx-auto mb-6 shadow-lg shadow-[#F0C979]/40">
            <Target className="w-10 h-10 text-[#1A1410]" />
          </div>

          <h2 className="mb-6 text-4xl font-elegant text-[#F5E7C8] md:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready for Strategic Clarity?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-[#E8D5B5]/80">
            Whether you seek a quick audit, strategic guidance, or ongoing partnership—
            let us discuss how to move your work forward with wisdom.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact?service=consulting"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#F0C979] to-[#C9A961] px-10 py-5 text-lg font-bold text-[#1A1410] shadow-2xl shadow-[#F0C979]/60 transition-all hover:scale-105 hover:shadow-[#F0C979]/80"
            >
              Convene the Council
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-[#F0C979] bg-[#2A1F1A]/60 px-10 py-5 text-lg font-semibold text-[#F0C979] backdrop-blur-sm transition-all hover:bg-[#F0C979]/20"
            >
              View Chronicles
            </Link>
          </div>

          <ElvenScriptLine className="mt-12 inline-block" />
        </div>
      </section>

    </div>
  );
}
