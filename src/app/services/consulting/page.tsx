'use client';

import { useState } from 'react';
import { Check, Target } from 'lucide-react';
import Link from 'next/link';

// LOTR Council Chamber SVG Components
function ElvenScriptLine({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="200" height="40" viewBox="0 0 200 40" fill="none">
      <path
        d="M10 20 Q30 10, 50 20 T90 20 Q110 15, 130 20 T170 20"
        stroke="#E9C97F"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        className="animate-pulse"
      />
      <circle cx="30" cy="18" r="2" fill="#E9C97F" opacity="0.4" />
      <circle cx="70" cy="22" r="2" fill="#E9C97F" opacity="0.4" />
      <circle cx="110" cy="18" r="2" fill="#E9C97F" opacity="0.4" />
      <circle cx="150" cy="22" r="2" fill="#E9C97F" opacity="0.4" />
    </svg>
  );
}

function LaurelLeaf({ className = '', delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      style={{ animationDelay: delay }}
    >
      <g className="animate-pulse" opacity="0.6">
        <ellipse cx="20" cy="15" rx="6" ry="12" fill="#8CB7CF" opacity="0.7" />
        <ellipse cx="20" cy="30" rx="7" ry="14" fill="#E9C97F" opacity="0.6" />
        <ellipse cx="20" cy="45" rx="6" ry="12" fill="#8CB7CF" opacity="0.5" />
        <path d="M20 5 Q25 30 20 55" stroke="#E9C97F" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>
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
      <circle cx="40" cy="40" r="30" stroke="#E9C97F" strokeWidth="1" fill="none" opacity="0.2" className="animate-ping" />
      <circle cx="40" cy="40" r="20" stroke="#8CB7CF" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M40 20 L50 40 L40 60 L30 40 Z" stroke="#E9C97F" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="40" cy="40" r="5" fill="#F4E9D2" opacity="0.6" className="animate-pulse" />
    </svg>
  );
}

function WisdomFlow({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="300" height="100" viewBox="0 0 300 100" fill="none">
      <path
        d="M0 50 Q75 30, 150 50 T300 50"
        stroke="#E9C97F"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
        className="animate-pulse"
      />
      <path
        d="M0 60 Q75 40, 150 60 T300 60"
        stroke="#8CB7CF"
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
    </svg>
  );
}

export default function ConsultingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#152022] via-[#2D3B45] to-midnight text-[#F4E9D2] overflow-hidden">

      {/* Hero Section - LOTR Council Chamber */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Ancient parchment glow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3B45]/40 via-[#E9C97F]/5 to-transparent animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Floating Elven Elements */}
        <LaurelLeaf className="absolute top-10 left-[5%] opacity-50" delay="0s" />
        <LaurelLeaf className="absolute top-32 left-[15%] opacity-35" delay="1s" />
        <LaurelLeaf className="absolute top-20 right-[10%] opacity-45" delay="0.5s" />
        <LaurelLeaf className="absolute bottom-10 right-[20%] opacity-40" delay="1.5s" />

        <WisdomFlow className="absolute top-1/4 left-0 opacity-40" />
        <WisdomFlow className="absolute top-1/2 right-0 opacity-35 rotate-180" />

        <AncientSigil className="absolute top-0 left-1/4 opacity-30" delay="0s" />
        <AncientSigil className="absolute bottom-0 right-1/3 opacity-25" delay="0.8s" />

        <ElvenScriptLine className="absolute top-1/3 right-[8%] opacity-60" />
        <ElvenScriptLine className="absolute bottom-1/4 left-[12%] opacity-50" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Moon Phases - LOTR Council: Gold → parchment → silver-blue → deep forest */}
          <div className="mb-8 flex justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#E9C97F] to-[#F4E9D2] shadow-lg shadow-[#E9C97F]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F4E9D2] to-white shadow-lg shadow-[#F4E9D2]/40" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8CB7CF] to-[#F4E9D2] shadow-lg shadow-[#8CB7CF]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2D3B45] to-[#152022] shadow-lg shadow-[#2D3B45]/50" />
          </div>

          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Consulting & Advisory
          </h1>
          <p className="mb-6 text-xl text-[#E9C97F]">
            Strategic wisdom from the Council Chamber
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-[#F4E9D2]/80">
            Expert consulting from a nurse-turned-developer. HealthTech product strategy,
            tech advisory, AI/ML consulting, and creative workshops—15+ years operations leadership
            meets cutting-edge tech expertise.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E9C97F] to-[#F4E9D2] px-8 py-4 font-bold text-[#152022] shadow-xl shadow-[#E9C97F]/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#E9C97F]/60"
            >
              Book a Consultation
              <span>→</span>
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#E9C97F] bg-[#2D3B45]/60 px-8 py-4 font-semibold text-[#F4E9D2] backdrop-blur-sm transition-all hover:bg-[#E9C97F]/20 hover:shadow-lg hover:shadow-[#E9C97F]/30"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative px-6 py-16">
        <WisdomFlow className="absolute top-0 left-0 w-full opacity-30" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Who This Is For
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🏛️', title: 'HealthTech Founders', desc: 'Early to growth-stage startups building patient-facing tools, clinical workflows, or medical devices' },
              { icon: '⚔️', title: 'Product Teams', desc: 'Product managers, UX designers, and engineers building tools for clinicians or patients' },
              { icon: '📜', title: 'Creative Professionals', desc: 'Writers, designers, and creators looking to refine portfolios, pitches, or career positioning' },
              { icon: '👑', title: 'Leadership Teams', desc: 'Executives and managers seeking strategic guidance, workshops, or team training' },
              { icon: '🗡️', title: 'Investors & Advisors', desc: 'VC/PE firms and advisors needing clinical domain expertise for portfolio companies' },
              { icon: '🏰', title: 'Enterprises & Health Systems', desc: 'Large organizations piloting new tech, implementing digital tools, or transforming care delivery' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-[#E9C97F]/30 bg-gradient-to-br from-[#2D3B45]/60 to-[#152022]/80 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#F4E9D2] hover:shadow-xl hover:shadow-[#E9C97F]/30"
              >
                <AncientSigil className="absolute -top-10 -right-10 opacity-10" delay={`${i * 0.2}s`} />
                <div className="relative">
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-[#E9C97F]">{item.title}</h3>
                  <p className="text-sm text-[#F4E9D2]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-[#F4E9D2]/80">
              <span className="text-[#E9C97F] font-semibold">If you need clarity, not more complexity</span>,
              let's work together.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            How We'll Work Together
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { num: '1', icon: '🎯', title: 'Discover', desc: 'We\'ll clarify your goals, constraints, and success metrics. No fluff—just focused conversation about what matters most' },
              { num: '2', icon: '💡', title: 'Design & Build', desc: 'I\'ll provide frameworks, recommendations, and actionable plans tailored to your context. You\'ll leave with clarity and direction' },
              { num: '3', icon: '📈', title: 'Deliver & Support', desc: 'Receive deliverables, follow-up support, and strategic check-ins to ensure you\'re moving forward with confidence' },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <ElvenScriptLine className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-40" />
                <div className="relative mb-4 text-6xl font-bold text-[#E9C97F]/20">{step.num}</div>
                <div className="mb-3 text-5xl">{step.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#E9C97F]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#F4E9D2]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered Packages */}
      <section id="packages" className="relative px-6 py-20">
        <WisdomFlow className="absolute top-1/3 left-0 opacity-25" />
        <WisdomFlow className="absolute bottom-1/4 right-0 opacity-25 rotate-180" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.35em] text-[#E9C97F] uppercase mb-3">Tiered Pricing</p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Choose Your Service
            </h2>
            <p className="text-lg text-[#F4E9D2]/80">
              From quick wins to strategic partnerships. Each tier designed for different needs and timelines.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-visible rounded-xl border border-[#E9C97F]/30 bg-gradient-to-br from-[#2D3B45]/70 to-[#152022]/90 p-8 backdrop-blur-sm transition-all ${
                  hoveredCard === pkg.id ? 'scale-105 shadow-2xl shadow-[#E9C97F]/40' : 'shadow-lg'
                } ${pkg.popular ? 'border-2 border-[#E9C97F]' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E9C97F] to-[#F4E9D2] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#152022] shadow-lg">
                    Most Popular
                  </div>
                )}

                <AncientSigil className="absolute -top-10 -right-10 opacity-10" />

                <div className="relative">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#8CB7CF]">
                    {pkg.tier}
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">{pkg.title}</h4>
                  <p className="mb-4 text-sm text-[#F4E9D2]/60">{pkg.duration}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#E9C97F]">{pkg.price}</span>
                  </div>
                  <div className="mb-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8CB7CF]">
                      What's Included:
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#F4E9D2]/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E9C97F]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6 rounded-lg border border-[#E9C97F]/20 bg-[#E9C97F]/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#F4E9D2]/70">
                      Perfect For:
                    </p>
                    <p className="text-sm text-white">{pkg.ideal}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#E9C97F] bg-[#E9C97F]/10 px-6 py-3 font-semibold text-[#E9C97F] transition-all hover:bg-[#E9C97F]/30"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-16">
        <WisdomFlow className="absolute top-0 left-0 w-full opacity-20" />

        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do consulting sessions work?',
                a: 'Most sessions are conducted via Zoom with screen sharing. You\'ll receive a calendar invite, pre-work (if applicable), and follow-up notes/deliverables within 48 hours. For workshops, we can meet in-person or virtually depending on your needs.',
              },
              {
                q: 'What\'s the typical timeline for consulting projects?',
                a: 'Quick wins (Portfolio Review, Pitch Deck): 1-2 weeks. Strategy packages: 4-6 weeks. UX Transformation: 6-8 weeks. Retainers are ongoing monthly engagements. Rush timelines available with planning.',
              },
              {
                q: 'Can I customize a package or mix services?',
                a: 'Absolutely! Many clients combine HealthTech strategy with UX audits, or add workshops to retainer packages. I\'ll create a custom scope that fits your needs and budget.',
              },
              {
                q: 'What makes your consulting different?',
                a: 'I bridge clinical operations and modern tech. I\'ve been a bedside nurse, managed healthcare teams, and built full-stack applications. You get strategic thinking grounded in real-world clinical experience—not just theory.',
              },
              {
                q: 'Do you sign NDAs or confidentiality agreements?',
                a: 'Yes! All consulting engagements include standard confidentiality protections. If you have specific requirements or need a custom NDA, we can review and execute before any work begins.',
              },
              {
                q: 'What if I\'m not sure which service I need?',
                a: 'Start with a free 20-minute discovery call. We\'ll discuss your goals, challenges, and timeline—then I\'ll recommend the best fit. No pressure, no sales pitch. Just honest guidance.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#E9C97F]/30 bg-gradient-to-br from-[#2D3B45]/50 to-[#152022]/70 p-6 backdrop-blur-sm transition-all hover:border-[#E9C97F]/50 hover:bg-[#E9C97F]/10"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#E9C97F] transition-colors group-hover:text-white">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-relaxed text-[#F4E9D2]/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-20">
        <AncientSigil className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-15" />
        <AncientSigil className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-15" delay="0.5s" />
        <LaurelLeaf className="absolute top-10 left-[10%] opacity-25" />
        <LaurelLeaf className="absolute bottom-10 right-[15%] opacity-25" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#E9C97F] to-[#F4E9D2] mx-auto mb-6 shadow-lg shadow-[#E9C97F]/40">
            <Target className="w-10 h-10 text-[#152022]" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready for Strategic Clarity?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-[#F4E9D2]/80">
            Whether you need a quick audit, strategic guidance, or ongoing partnership—
            let's talk about how we can move your work forward.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact?service=consulting"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#E9C97F] to-[#F4E9D2] px-10 py-5 text-lg font-bold text-[#152022] shadow-2xl shadow-[#E9C97F]/60 transition-all hover:scale-105 hover:shadow-[#E9C97F]/80"
            >
              Schedule a Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-[#E9C97F] bg-[#2D3B45]/60 px-10 py-5 text-lg font-semibold text-[#E9C97F] backdrop-blur-sm transition-all hover:bg-[#E9C97F]/20"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
