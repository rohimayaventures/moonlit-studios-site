'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Water Tribe Healer SVG Components
function HealingDroplet({ className = '', delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      style={{ animationDelay: delay }}
    >
      <path
        d="M20 2C20 2 5 20 5 35C5 46.046 12.954 55 20 55C27.046 55 35 46.046 35 35C35 20 20 2 20 2Z"
        fill="url(#healingGradient)"
        className="animate-pulse"
      />
      <circle cx="15" cy="30" r="3" fill="#9FE8FF" opacity="0.6" className="animate-ping" />
      <defs>
        <linearGradient id="healingGradient" x1="20" y1="2" x2="20" y2="55">
          <stop offset="0%" stopColor="#9FE8FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#50D4D0" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WaterStream({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="200" height="100" viewBox="0 0 200 100" fill="none">
      <path
        d="M0 50Q50 30 100 50T200 50"
        stroke="url(#streamGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        className="animate-pulse"
      />
      <path
        d="M0 60Q50 40 100 60T200 60"
        stroke="url(#streamGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <defs>
        <linearGradient id="streamGradient" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="#50D4D0" stopOpacity="0" />
          <stop offset="50%" stopColor="#9FE8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#50D4D0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RippleCircle({ className = '', delay = '0s' }: { className?: string; delay?: string }) {
  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" style={{ animationDelay: delay }}>
      <circle cx="60" cy="60" r="20" stroke="#50D4D0" strokeWidth="2" fill="none" opacity="0.6" className="animate-ping" />
      <circle cx="60" cy="60" r="35" stroke="#9FE8FF" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-ping" style={{ animationDelay: '0.3s' }} />
      <circle cx="60" cy="60" r="50" stroke="#D5ECFA" strokeWidth="1" fill="none" opacity="0.2" className="animate-ping" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

function LotusFlower({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none">
      <g className="animate-pulse">
        <ellipse cx="30" cy="45" rx="8" ry="12" fill="#50D4D0" opacity="0.7" />
        <ellipse cx="20" cy="40" rx="8" ry="12" fill="#9FE8FF" opacity="0.6" transform="rotate(-25 20 40)" />
        <ellipse cx="40" cy="40" rx="8" ry="12" fill="#9FE8FF" opacity="0.6" transform="rotate(25 40 40)" />
        <ellipse cx="15" cy="35" rx="7" ry="10" fill="#D5ECFA" opacity="0.5" transform="rotate(-45 15 35)" />
        <ellipse cx="45" cy="35" rx="7" ry="10" fill="#D5ECFA" opacity="0.5" transform="rotate(45 45 35)" />
        <circle cx="30" cy="38" r="4" fill="#9FE8FF" opacity="0.9" />
      </g>
    </svg>
  );
}

function WaterBubbles({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute top-0 left-[10%] w-3 h-3 rounded-full bg-[#9FE8FF]/40 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-10 left-[25%] w-4 h-4 rounded-full bg-[#50D4D0]/30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
      <div className="absolute top-5 left-[40%] w-2 h-2 rounded-full bg-[#D5ECFA]/50 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
      <div className="absolute top-12 right-[30%] w-3 h-3 rounded-full bg-[#9FE8FF]/35 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      <div className="absolute top-3 right-[15%] w-2 h-2 rounded-full bg-[#50D4D0]/40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
    </div>
  );
}

export default function HealthTechDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2330] via-[#083B54] to-midnight text-[#D5ECFA] overflow-hidden">

      {/* Hero Section - Water Tribe Healer */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Breathing Water Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#083B54]/40 via-[#50D4D0]/10 to-transparent animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Floating Water Elements */}
        <HealingDroplet className="absolute top-10 left-[5%] opacity-60" delay="0s" />
        <HealingDroplet className="absolute top-32 left-[15%] opacity-40" delay="1s" />
        <HealingDroplet className="absolute top-20 right-[10%] opacity-50" delay="0.5s" />
        <HealingDroplet className="absolute bottom-10 right-[20%] opacity-45" delay="1.5s" />

        <WaterStream className="absolute top-1/4 left-0 opacity-60" />
        <WaterStream className="absolute top-1/2 right-0 opacity-50 rotate-180" />

        <RippleCircle className="absolute top-0 left-1/4 opacity-40" delay="0s" />
        <RippleCircle className="absolute bottom-0 right-1/3 opacity-30" delay="0.8s" />

        <LotusFlower className="absolute top-1/3 right-[8%] opacity-70" />
        <LotusFlower className="absolute bottom-1/4 left-[12%] opacity-60" />

        <WaterBubbles className="absolute inset-0" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Moon Phases - Water Tribe Colors: Icy blues → teal → silver → navy */}
          <div className="mb-8 flex justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#9FE8FF] to-[#D5ECFA] shadow-lg shadow-[#9FE8FF]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#50D4D0] to-[#9FE8FF] shadow-lg shadow-[#50D4D0]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D5ECFA] to-white shadow-lg shadow-[#D5ECFA]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0A2330] to-[#083B54] shadow-lg shadow-[#0A2330]/50" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#083B54] to-[#50D4D0] shadow-lg shadow-[#083B54]/50" />
          </div>

          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Health × Tech Development
          </h1>
          <p className="mb-6 text-xl text-[#9FE8FF]">
            Healing-driven platforms that protect patient data and empower care teams
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-[#D5ECFA]/80">
            As a registered nurse turned developer, I bridge clinical workflows with technical precision.
            From HIPAA-compliant patient portals to EHR integrations and telehealth platforms —
            I build tools that clinicians trust and patients love.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#50D4D0] to-[#9FE8FF] px-8 py-4 font-bold text-[#083B54] shadow-xl shadow-[#50D4D0]/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#9FE8FF]/60"
            >
              Start Your Platform
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#50D4D0] bg-[#083B54]/60 px-8 py-4 font-semibold text-[#9FE8FF] backdrop-blur-sm transition-all hover:bg-[#50D4D0]/20 hover:shadow-lg hover:shadow-[#50D4D0]/30"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative px-6 py-16">
        <WaterStream className="absolute top-0 left-0 w-full opacity-40" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Who This Is For
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🏥', title: 'Healthcare Startups', desc: 'Launch compliant patient platforms with confidence' },
              { icon: '👨‍⚕️', title: 'Private Practices', desc: 'Streamline scheduling, charting, and telehealth visits' },
              { icon: '💊', title: 'Health Tech Companies', desc: 'Build scalable, regulation-ready solutions' },
              { icon: '🧬', title: 'Research Teams', desc: 'Secure data collection and analysis tools' },
              { icon: '🩺', title: 'Medical Device Makers', desc: 'Connect hardware to cloud-based dashboards' },
              { icon: '📊', title: 'Healthcare Consultants', desc: 'Tools that turn insights into action' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/30 bg-gradient-to-br from-[#083B54]/60 to-[#0A2330]/80 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-xl hover:shadow-[#50D4D0]/30"
              >
                <RippleCircle className="absolute -top-10 -right-10 opacity-20" delay={`${i * 0.2}s`} />
                <div className="relative">
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-[#9FE8FF]">{item.title}</h3>
                  <p className="text-sm text-[#D5ECFA]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            How We Work Together
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { num: '1', icon: '🩺', title: 'Clinical Discovery', desc: 'We map your workflows, compliance needs, and patient touchpoints' },
              { num: '2', icon: '⚕️', title: 'Healing-Centered Design', desc: 'I design interfaces clinicians understand and patients trust' },
              { num: '3', icon: '🔐', title: 'Secure Deployment', desc: 'HIPAA-compliant hosting, encrypted data, and audit-ready logs' },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <LotusFlower className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-40" />
                <div className="relative mb-4 text-6xl font-bold text-[#50D4D0]/20">{step.num}</div>
                <div className="mb-3 text-5xl">{step.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#9FE8FF]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#D5ECFA]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered Packages */}
      <section id="packages" className="relative px-6 py-20">
        <WaterStream className="absolute top-1/3 left-0 opacity-30" />
        <WaterStream className="absolute bottom-1/4 right-0 opacity-30 rotate-180" />

        <div className="relative mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Service Packages
          </h2>

          {/* Patient-Facing Platforms */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-[#9FE8FF]">
              💧 Patient-Facing Platforms
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* Stardust */}
              <div className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/40 bg-gradient-to-br from-[#083B54]/70 to-[#0A2330]/90 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-2xl hover:shadow-[#50D4D0]/40">
                <RippleCircle className="absolute -top-16 -right-16 opacity-10" />
                <div className="relative">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9FE8FF]/70">
                    Stardust ⭐
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">Patient Portal Starter</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#50D4D0]">$2,000</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $3,500</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Appointment scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Secure messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Patient registration forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>HIPAA-compliant hosting setup</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#50D4D0] bg-[#50D4D0]/10 px-6 py-3 font-semibold text-[#9FE8FF] transition-all hover:bg-[#50D4D0]/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Nebula - MOST POPULAR */}
              <div className="group relative overflow-visible rounded-xl border-2 border-[#9FE8FF] bg-gradient-to-br from-[#50D4D0]/20 to-[#083B54]/90 p-8 shadow-2xl shadow-[#9FE8FF]/50 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-[#9FE8FF]/70">
                <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#50D4D0] to-[#9FE8FF] px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-[#083B54] shadow-lg">
                  Most Popular
                </div>
                <RippleCircle className="absolute -top-16 -right-16 opacity-20" />
                <div className="relative">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9FE8FF]">
                    Nebula 🌌
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">Full Patient Experience Suite</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#9FE8FF]">$5,500</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $8,000</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9FE8FF]">✓</span>
                      <span>Everything in Stardust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9FE8FF]">✓</span>
                      <span>Telehealth video integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9FE8FF]">✓</span>
                      <span>Patient chart access (read-only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9FE8FF]">✓</span>
                      <span>Prescription refill requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9FE8FF]">✓</span>
                      <span>Billing & payment portal</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#50D4D0] to-[#9FE8FF] px-6 py-3 font-bold text-[#083B54] shadow-lg transition-all hover:shadow-xl hover:shadow-[#9FE8FF]/60"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Supernova */}
              <div className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/40 bg-gradient-to-br from-[#083B54]/70 to-[#0A2330]/90 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-2xl hover:shadow-[#50D4D0]/40">
                <RippleCircle className="absolute -top-16 -right-16 opacity-10" />
                <div className="relative">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9FE8FF]/70">
                    Supernova 💫
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">Enterprise Health Platform</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#50D4D0]">$10,000</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $20,000</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Everything in Nebula</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>EHR integration (HL7/FHIR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Custom clinical workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Multi-location support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Advanced analytics dashboard</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#50D4D0] bg-[#50D4D0]/10 px-6 py-3 font-semibold text-[#9FE8FF] transition-all hover:bg-[#50D4D0]/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Clinical Team Tools */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-[#9FE8FF]">
              ⚕️ Clinical Team Tools
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* Charting Assistant */}
              <div className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/40 bg-gradient-to-br from-[#083B54]/70 to-[#0A2330]/90 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-2xl hover:shadow-[#50D4D0]/40">
                <div className="relative">
                  <h4 className="mb-4 text-2xl font-bold text-white">Clinical Charting Assistant</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#50D4D0]">$3,000</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $6,000</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Voice-to-text documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Smart templates by specialty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Clinical decision support</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#50D4D0] bg-[#50D4D0]/10 px-6 py-3 font-semibold text-[#9FE8FF] transition-all hover:bg-[#50D4D0]/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Staff Dashboard */}
              <div className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/40 bg-gradient-to-br from-[#083B54]/70 to-[#0A2330]/90 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-2xl hover:shadow-[#50D4D0]/40">
                <div className="relative">
                  <h4 className="mb-4 text-2xl font-bold text-white">Staff Coordination Dashboard</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#50D4D0]">$2,500</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $5,000</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Shift scheduling & handoffs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Task assignment workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Team messaging (HIPAA-secure)</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#50D4D0] bg-[#50D4D0]/10 px-6 py-3 font-semibold text-[#9FE8FF] transition-all hover:bg-[#50D4D0]/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Compliance Tracker */}
              <div className="group relative overflow-hidden rounded-xl border border-[#50D4D0]/40 bg-gradient-to-br from-[#083B54]/70 to-[#0A2330]/90 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-[#9FE8FF] hover:shadow-2xl hover:shadow-[#50D4D0]/40">
                <div className="relative">
                  <h4 className="mb-4 text-2xl font-bold text-white">Compliance Tracker</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#50D4D0]">$1,500</span>
                    <span className="text-sm text-[#D5ECFA]/60"> - $3,500</span>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm text-[#D5ECFA]/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Audit logs & access tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Automated compliance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#50D4D0]">✓</span>
                      <span>Policy & training management</span>
                    </li>
                  </ul>
                  <Link
                    href="/get-quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#50D4D0] bg-[#50D4D0]/10 px-6 py-3 font-semibold text-[#9FE8FF] transition-all hover:bg-[#50D4D0]/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Add-On Services */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-[#9FE8FF]">
              🔧 Add-On Services
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'HIPAA Risk Assessment', price: '$500 - $1,200' },
                { title: 'Data Migration Services', price: '$800 - $2,500' },
                { title: 'Custom API Integrations', price: '$1,000 - $4,000' },
                { title: 'Ongoing Support (monthly)', price: '$300 - $1,500/mo' },
                { title: 'Staff Training Sessions', price: '$400 - $1,000' },
                { title: 'Mobile App Development', price: '$3,000 - $8,000' },
              ].map((addon, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#50D4D0]/30 bg-[#083B54]/40 p-6 backdrop-blur-sm transition-all hover:border-[#9FE8FF]/50 hover:bg-[#50D4D0]/10"
                >
                  <h4 className="mb-2 font-semibold text-white">{addon.title}</h4>
                  <p className="text-sm text-[#9FE8FF]">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-16">
        <WaterStream className="absolute top-0 left-0 w-full opacity-30" />

        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Are your solutions HIPAA-compliant?',
                a: 'Absolutely. Every platform includes encrypted data storage, secure authentication, audit logging, and Business Associate Agreements (BAAs) with all hosting providers.',
              },
              {
                q: 'Can you integrate with our existing EHR?',
                a: 'Yes! I work with HL7 and FHIR standards to connect with most major EHR systems (Epic, Cerner, Allscripts, etc.). Integration complexity varies by vendor.',
              },
              {
                q: 'How long does a typical build take?',
                a: 'Stardust packages: 3-4 weeks. Nebula packages: 6-8 weeks. Supernova packages: 10-14 weeks. Timelines include testing, compliance reviews, and training.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! I offer monthly support plans starting at $300/month for bug fixes, updates, and minor feature additions.',
              },
              {
                q: 'What makes your approach different?',
                a: 'I\'m a registered nurse AND a developer. I understand clinical workflows, patient safety, and the frustrations clinicians face with poorly designed tech. I build tools that actually fit into your day.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#50D4D0]/30 bg-gradient-to-br from-[#083B54]/50 to-[#0A2330]/70 p-6 backdrop-blur-sm transition-all hover:border-[#9FE8FF]/50 hover:bg-[#50D4D0]/10"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#9FE8FF] transition-colors group-hover:text-white">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-relaxed text-[#D5ECFA]/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-20">
        <RippleCircle className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-20" />
        <RippleCircle className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-20" delay="0.5s" />
        <LotusFlower className="absolute top-10 left-[10%] opacity-30" />
        <LotusFlower className="absolute bottom-10 right-[15%] opacity-30" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Build Healing-Driven Tech?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-[#D5ECFA]/80">
            Let's create platforms that clinicians trust, patients love, and regulators approve.
            Get your custom quote in minutes.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#50D4D0] to-[#9FE8FF] px-10 py-5 text-lg font-bold text-[#083B54] shadow-2xl shadow-[#9FE8FF]/60 transition-all hover:scale-105 hover:shadow-[#9FE8FF]/80"
          >
            <span>💰</span>
            Get Instant Quote
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

    </div>
  );
}
