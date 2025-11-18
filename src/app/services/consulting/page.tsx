'use client';

import { useState } from 'react';
import { Check, Sparkles, Wind, Lightbulb, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// 💨 AIR NOMAD DECORATIVE SVG COMPONENTS
const AirCurrentDivider = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      d="M0 40 Q100 20, 200 40 T400 40 Q500 55, 600 40 T800 40 Q900 25, 1000 40 T1200 40"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.2"
    />
    <path
      d="M0 50 Q150 35, 300 50 T600 50 Q750 60, 900 50 T1200 50"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.15"
    />
  </svg>
);

export default function ConsultingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Reorganized packages - LOW to HIGH
  const packages = [
    {
      id: 1,
      title: "Portfolio Review",
      tier: "Quick Win",
      price: "$500",
      duration: "90-minute session",
      features: [
        "Portfolio refinement guidance",
        "Storytelling framework",
        "Career positioning insights",
        "Quick-win recommendations",
      ],
      ideal: "Creatives, job seekers, career pivoters",
      color: "from-sky-600/20 to-blue-700/20",
      borderColor: "border-sky-500/30",
      accentColor: "text-sky-400",
      glowColor: "shadow-sky-500/20",
    },
    {
      id: 2,
      title: "Pitch Deck Clinic",
      tier: "Quick Win",
      price: "$1,000",
      duration: "2-hour session",
      features: [
        "Deck structure review",
        "Narrative strengthening",
        "Visual hierarchy fixes",
        "Investor perspective insights",
        "Revised deck outline",
      ],
      ideal: "Founders, fundraisers, business developers",
      color: "from-orange-600/20 to-amber-700/20",
      borderColor: "border-orange-500/30",
      accentColor: "text-orange-400",
      glowColor: "shadow-orange-500/20",
      popular: true,
    },
    {
      id: 3,
      title: "Half-Day Workshop",
      tier: "Training",
      price: "$1,500",
      duration: "4 hours",
      features: [
        "Creative writing intensive OR",
        "AI + creativity bootcamp OR",
        "HealthTech UX clinic",
        "Interactive exercises",
        "Takeaway materials",
      ],
      ideal: "Teams, creative groups, learning organizations",
      color: "from-blue-600/20 to-sky-700/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 4,
      title: "UX for Clinicians (Audit)",
      tier: "UX Transformation",
      price: "$2,000",
      duration: "one-time",
      features: [
        "Heuristic evaluation (clinical lens)",
        "Workflow friction analysis",
        "Adoption barrier identification",
        "Actionable improvement list",
      ],
      ideal: "HealthTech companies, medical device firms",
      color: "from-sky-600/20 to-cyan-700/20",
      borderColor: "border-sky-500/30",
      accentColor: "text-sky-400",
      glowColor: "shadow-sky-500/20",
    },
    {
      id: 5,
      title: "HealthTech Product Strategy (Single Session)",
      tier: "Strategy",
      price: "$250/hr",
      duration: "per hour",
      features: [
        "Product roadmap review",
        "Safety pattern assessment",
        "Clinical validation insights",
        "Risk reduction strategies",
      ],
      ideal: "HealthTech startups, product managers",
      color: "from-amber-600/20 to-orange-700/20",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-400",
      glowColor: "shadow-amber-500/20",
    },
    {
      id: 6,
      title: "Full-Day Intensive Workshop",
      tier: "Training",
      price: "$3,000",
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
      color: "from-blue-600/20 to-indigo-700/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      glowColor: "shadow-blue-500/20",
      popular: true,
    },
    {
      id: 7,
      title: "HealthTech Product Strategy Package",
      tier: "Strategy",
      price: "$4,000",
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
      color: "from-amber-600/20 to-yellow-700/20",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-400",
      glowColor: "shadow-amber-500/20",
      popular: true,
    },
    {
      id: 8,
      title: "UX for Clinicians (Transformation)",
      tier: "UX Transformation",
      price: "$5,000",
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
      color: "from-cyan-600/20 to-blue-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: 9,
      title: "Strategic Partner (Retainer)",
      tier: "Strategy",
      price: "$8,000/mo",
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
      color: "from-orange-600/20 to-amber-700/20",
      borderColor: "border-orange-500/30",
      accentColor: "text-orange-400",
      glowColor: "shadow-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight">

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-sky-500/20 bg-gradient-to-br from-midnight via-deepOcean to-nightNavy py-20">
        {/* Air Nomad ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <AirCurrentDivider className="absolute top-1/4 left-0 w-full h-20 text-sky-300 opacity-20" />
          <AirCurrentDivider className="absolute bottom-1/3 left-0 w-full h-20 text-orange-200 opacity-15" />
          <Wind className="absolute top-32 right-1/3 w-16 h-16 text-sky-200 opacity-10" />
          <Wind className="absolute bottom-40 left-1/4 w-20 h-20 text-orange-100 opacity-8" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Air Nomad Moon Phases - EXACT PALETTE */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            {/* Phase 1: Sky Gold (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-yellow-200/50 hover:border-yellow-200/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-yellow-200/40"
              title="New Moon - Clarity Dawns"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-yellow-200/30 to-orange-200/30" />

            {/* Phase 2: Pale Orange (Waxing Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-orange-200/40 to-orange-200/70 border-2 border-orange-200/60 hover:border-orange-200/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-orange-200/40"
              title="Waxing Crescent - Wisdom Builds"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-orange-200/30 to-amber-200/30" />

            {/* Phase 3: Peach (Full Moon - CENTER) */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-200 via-orange-200 to-amber-200 border-2 border-amber-200/80 shadow-lg shadow-amber-200/50 flex-shrink-0 animate-pulse"
              title="Full Moon - Strategic Peak"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-amber-200/30 to-sky-300/30" />

            {/* Phase 4: Soft Blue (Waning Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-sky-300/40 to-sky-300/70 border-2 border-sky-300/60 hover:border-sky-300/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-sky-300/40"
              title="Waning Crescent - Flow State"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-sky-300/30 to-slate-100/30" />

            {/* Phase 5: Cloudy White (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-slate-100/50 hover:border-slate-100/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-slate-100/40"
              title="New Moon - Fresh Perspective"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
            <Target className="h-4 w-4" />
            <span>Strategy • Advisory • Workshops</span>
          </div>

          <h1 className="font-elegant mb-6 text-4xl font-bold text-pearlWhite md:text-6xl lg:text-7xl" style={{ lineHeight: '1.3' }}>
            Consulting &
            <span className="block bg-gradient-to-r from-yellow-200 via-orange-200 to-sky-300 bg-clip-text text-transparent mt-2">
              Advisory
            </span>
          </h1>

          <p className="font-serif mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-moonlightSilver md:text-xl italic">
            Expert consulting from a nurse-turned-developer. HealthTech product strategy,
            tech advisory, AI/ML consulting, and creative workshops—15+ years operations leadership meets cutting-edge tech expertise.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm mb-8">
            <span className="px-3 py-1 rounded-full bg-amber-200/20 text-amber-100 border border-amber-200/40">HealthTech Strategy</span>
            <span className="px-3 py-1 rounded-full bg-sky-300/20 text-sky-200 border border-sky-300/40">UX Transformation</span>
            <span className="px-3 py-1 rounded-full bg-orange-200/20 text-orange-100 border border-orange-200/40">Workshops</span>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group rounded-full bg-gradient-to-r from-amber-300 via-orange-200 to-sky-300 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-amber-300/50"
            >
              Book a Consultation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#packages"
              className="rounded-full border border-sky-400/30 px-8 py-4 font-semibold text-sky-300 transition-all hover:border-sky-400/50 hover:bg-sky-400/10"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Air current divider at bottom */}
        <AirCurrentDivider className="absolute bottom-0 left-0 w-full h-16 text-sky-300" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="who-this-is-for" className="relative border-b border-sky-500/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Lightbulb className="w-12 h-12 text-amber-200 mx-auto mb-2" />
            </div>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-4xl">
              Who This Is For
            </h2>
            <p className="text-lg text-moonlightSilver italic">
              Built for leaders who value clarity, outcomes, and strategic thinking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-amber-200/20 bg-amber-200/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-100 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-100 mb-2">HealthTech Founders</h3>
                  <p className="text-moonlightSilver text-sm">
                    Early to growth-stage startups building patient-facing tools, clinical workflows, or medical devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-sky-300/20 bg-sky-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-sky-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-200 mb-2">Product Teams</h3>
                  <p className="text-moonlightSilver text-sm">
                    Product managers, UX designers, and engineers building tools for clinicians or patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-orange-200/20 bg-orange-200/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-orange-100 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-100 mb-2">Creative Professionals</h3>
                  <p className="text-moonlightSilver text-sm">
                    Writers, designers, and creators looking to refine portfolios, pitches, or career positioning.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-blue-300/20 bg-blue-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Leadership Teams</h3>
                  <p className="text-moonlightSilver text-sm">
                    Executives and managers seeking strategic guidance, workshops, or team training.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Investors & Advisors</h3>
                  <p className="text-moonlightSilver text-sm">
                    VC/PE firms and advisors needing clinical domain expertise for portfolio companies.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-yellow-200/20 bg-yellow-200/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-yellow-100 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-100 mb-2">Enterprises & Health Systems</h3>
                  <p className="text-moonlightSilver text-sm">
                    Large organizations piloting new tech, implementing digital tools, or transforming care delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-moonlightSilver">
              <span className="text-amber-200 font-semibold">If you need clarity, not more complexity</span>,
              let's work together.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="border-b border-sky-500/20 bg-deepOcean/30 py-16 relative">
        <AirCurrentDivider className="absolute top-10 left-0 w-full h-20 text-orange-200 opacity-15" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 border border-amber-300/30 relative">
                  <Target className="w-8 h-8 text-amber-200" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-amber-300">1. Discover</h3>
              <p className="text-sm uppercase tracking-wider text-amber-200/70 mb-3">Define the Challenge</p>
              <p className="text-moonlightSilver">
                We'll clarify your goals, constraints, and success metrics. No fluff—just focused conversation
                about what matters most.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20 border border-sky-300/30 relative">
                  <Lightbulb className="w-8 h-8 text-sky-200" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-sky-300">2. Design & Build</h3>
              <p className="text-sm uppercase tracking-wider text-sky-200/70 mb-3">Strategic Solutions</p>
              <p className="text-moonlightSilver">
                I'll provide frameworks, recommendations, and actionable plans tailored to your context.
                You'll leave with clarity and direction.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 border border-orange-200/30 relative">
                  <TrendingUp className="w-8 h-8 text-orange-100" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-orange-200">3. Deliver & Support</h3>
              <p className="text-sm uppercase tracking-wider text-orange-100/70 mb-3">Outcomes & Momentum</p>
              <p className="text-moonlightSilver">
                Receive deliverables, follow-up support, and strategic check-ins to ensure
                you're moving forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: TIERED PACKAGES (LOW → HIGH)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="packages" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.35em] text-sky-300 uppercase mb-3">Tiered Pricing</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Service
            </h2>
            <p className="text-lg text-moonlightSilver">
              From quick wins to strategic partnerships. Each tier designed for different needs and timelines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                } ${pkg.popular ? 'ring-2 ring-amber-300/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-300 via-orange-200 to-sky-300 text-xs font-bold text-midnight shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-amber-300/30 to-sky-300/20 flex items-center justify-center border ${pkg.borderColor}`}>
                      <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${pkg.accentColor}`}>
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-moonlightSilver/70">{pkg.tier}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-moonlightSilver/70">{pkg.duration}</p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-300">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-moonlightSilver">
                          <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.accentColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-moonlightSilver/70">
                      Perfect For:
                    </p>
                    <p className="text-sm text-pearlWhite">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full rounded-full border ${pkg.borderColor} py-3 text-center font-semibold ${pkg.accentColor} transition-all hover:bg-white/10`}
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="border-y border-sky-500/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-sky-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How do consulting sessions work?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Most sessions are conducted via Zoom with screen sharing. You'll receive a calendar invite, pre-work (if applicable),
                and follow-up notes/deliverables within 48 hours. For workshops, we can meet in-person or virtually depending on your needs.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-amber-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What's the typical timeline for consulting projects?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Quick wins (Portfolio Review, Pitch Deck): 1-2 weeks. Strategy packages: 4-6 weeks. UX Transformation: 6-8 weeks.
                Retainers are ongoing monthly engagements. Rush timelines available with planning.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-orange-200/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can I customize a package or mix services?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Absolutely! Many clients combine HealthTech strategy with UX audits, or add workshops to retainer packages.
                I'll create a custom scope that fits your needs and budget.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-sky-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What makes your consulting different?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                I bridge clinical operations and modern tech. I've been a bedside nurse, managed healthcare teams, and built full-stack applications.
                You get strategic thinking grounded in real-world clinical experience—not just theory.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-blue-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Do you sign NDAs or confidentiality agreements?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Yes! All consulting engagements include standard confidentiality protections. If you have specific requirements
                or need a custom NDA, we can review and execute before any work begins.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-amber-200/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What if I'm not sure which service I need?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Start with a free 20-minute discovery call. We'll discuss your goals, challenges, and timeline—then I'll recommend
                the best fit. No pressure, no sales pitch. Just honest guidance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative rounded-2xl border border-sky-400/30 bg-gradient-to-br from-amber-300/10 via-orange-200/10 to-sky-300/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative air currents */}
            <AirCurrentDivider className="absolute top-1/3 left-0 w-full h-16 text-sky-200 opacity-10" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 via-orange-200 to-sky-300 mx-auto shadow-lg shadow-amber-300/40">
                <Target className="w-10 h-10 text-midnight" />
              </div>

              <h2 className="font-elegant text-3xl font-bold text-pearlWhite md:text-4xl">
                Ready for Strategic Clarity?
              </h2>

              <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
                Whether you need a quick audit, strategic guidance, or ongoing partnership—
                let's talk about how we can move your work forward.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact?service=consulting"
                  className="rounded-full bg-gradient-to-r from-amber-300 via-orange-200 to-sky-300 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-amber-300/50"
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-sky-400/30 px-8 py-4 font-semibold text-sky-300 transition-all hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
