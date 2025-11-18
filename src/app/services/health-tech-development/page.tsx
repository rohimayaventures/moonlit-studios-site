'use client';

import { useState } from 'react';
import { Check, Sparkles, Droplet, Heart, Shield, Activity } from 'lucide-react';
import Link from 'next/link';

// 🌊 WATERBENDER / HEALER DECORATIVE SVG COMPONENTS
const WaveDivider = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      d="M0 60 Q150 20, 300 60 T600 60 T900 60 T1200 60 L1200 120 L0 120 Z"
      fill="currentColor"
      opacity="0.08"
    />
  </svg>
);

const RippleCircle = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64"
  };

  return (
    <div className={`absolute ${sizeClasses[size]} ${className} pointer-events-none`}>
      <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
      <div className="absolute inset-2 rounded-full border border-cyan-400/15" />
      <div className="absolute inset-4 rounded-full border border-cyan-400/10" />
    </div>
  );
};

const DropletIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.3"
    />
  </svg>
);

export default function HealthTechDevelopmentPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Reorganized packages - LOW to HIGH
  const packages = [
    {
      id: 1,
      title: "Clinical Dashboard",
      tier: "Essential",
      price: "$3,500",
      tagline: "Real-time clinical operations monitoring.",
      features: [
        "Census tracking",
        "Alert system",
        "Basic metrics & KPIs",
        "Staff directory",
        "Shift handoff tools",
      ],
      ideal: "Small clinics, urgent care centers, nursing homes",
      color: "from-cyan-600/20 to-blue-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: 2,
      title: "Patient Portal",
      tier: "Essential",
      price: "$4,000",
      tagline: "Secure patient engagement platform.",
      features: [
        "Secure messaging with providers",
        "Appointment scheduling",
        "Medical records access",
        "Prescription refills",
        "Educational resources",
      ],
      ideal: "Primary care practices, specialty clinics",
      color: "from-teal-600/20 to-cyan-700/20",
      borderColor: "border-teal-500/30",
      accentColor: "text-teal-400",
      glowColor: "shadow-teal-500/20",
    },
    {
      id: 3,
      title: "Telemedicine Platform",
      tier: "Basic",
      price: "$6,000",
      tagline: "Virtual care essentials.",
      features: [
        "Video call integration",
        "Appointment scheduling",
        "Clinical notes",
        "Patient intake forms",
        "Basic billing",
      ],
      ideal: "Telehealth startups, virtual care providers",
      color: "from-blue-600/20 to-indigo-700/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 4,
      title: "Clinical Dashboard",
      tier: "Advanced",
      price: "$6,500",
      tagline: "Data-driven clinical intelligence platform.",
      features: [
        "Real-time data feeds",
        "Custom charts & visualizations",
        "Predictive analytics",
        "Quality metrics tracking",
        "Automated reporting",
      ],
      ideal: "Hospitals, multi-facility health systems",
      color: "from-cyan-600/20 to-teal-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
      popular: true,
    },
    {
      id: 5,
      title: "Patient Portal",
      tier: "Professional",
      price: "$7,500",
      tagline: "Comprehensive patient experience.",
      features: [
        "Everything in Essential, PLUS:",
        "Lab results & imaging",
        "Payment processing",
        "Visit summaries",
        "Health tracking tools",
        "Insurance verification",
      ],
      ideal: "Multi-provider practices, health networks",
      color: "from-teal-600/20 to-blue-700/20",
      borderColor: "border-teal-500/30",
      accentColor: "text-teal-400",
      glowColor: "shadow-teal-500/20",
      popular: true,
    },
    {
      id: 6,
      title: "Healthcare Platform",
      tier: "Essential",
      price: "$10,000",
      tagline: "Basic HIPAA-compliant healthcare application.",
      features: [
        "3-5 core features",
        "Basic HIPAA compliance (encryption, audit logs)",
        "User authentication",
        "Simple dashboard",
        "1 user role",
        "1 month post-launch support",
      ],
      ideal: "Healthcare startups, pilot programs",
      color: "from-blue-600/20 to-navy-700/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 7,
      title: "Telemedicine Platform",
      tier: "Advanced",
      price: "$12,000",
      tagline: "Full-service virtual care platform.",
      features: [
        "Everything in Basic, PLUS:",
        "E-prescribing integration",
        "Insurance verification",
        "Waiting room experience",
        "Provider scheduling",
        "Analytics & reporting",
      ],
      ideal: "Growing telehealth companies, enterprise virtual care",
      color: "from-indigo-600/20 to-blue-700/20",
      borderColor: "border-indigo-500/30",
      accentColor: "text-indigo-400",
      glowColor: "shadow-indigo-500/20",
      popular: true,
    },
    {
      id: 8,
      title: "Healthcare Platform",
      tier: "Professional",
      price: "$18,000",
      tagline: "Full-featured HIPAA-compliant application.",
      features: [
        "5-10 features",
        "Full HIPAA compliance (BAA, encryption, audit logs)",
        "Multi-role user system (admin, provider, patient)",
        "Advanced workflows",
        "Data visualization/reporting",
        "Integration with 1 third-party system",
        "2 months post-launch support",
      ],
      ideal: "Established healthtech companies, medical organizations",
      color: "from-cyan-600/20 to-teal-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: 9,
      title: "Healthcare Platform",
      tier: "Premium",
      price: "$30,000",
      tagline: "Enterprise-grade clinical system.",
      features: [
        "Complex clinical workflows (triage, care coordination)",
        "Multi-facility support",
        "Advanced data analytics",
        "EHR/EMR integration",
        "Custom API development",
        "Regulatory documentation package",
        "3 months post-launch support + training",
      ],
      ideal: "Enterprise health systems, complex clinical operations",
      color: "from-blue-600/20 to-indigo-700/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      glowColor: "shadow-blue-500/20",
    },
  ];

  const addOns = [
    {
      name: "Telemedicine Features",
      description: "Video calls, virtual waiting room, e-visit notes",
      price: "+$3,000",
    },
    {
      name: "E-Prescribing Integration",
      description: "Connect to pharmacy networks, medication history",
      price: "+$4,000",
    },
    {
      name: "EHR Integration",
      description: "Epic, Cerner, or custom EHR connectivity",
      price: "+$2,500",
    },
    {
      name: "HIPAA Security Audit",
      description: "Comprehensive security review & documentation",
      price: "+$1,500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight">

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-br from-midnight via-deepOcean to-nightNavy py-20">
        {/* Waterbender ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <RippleCircle className="top-10 right-1/4" size="lg" />
          <RippleCircle className="bottom-20 left-1/3" size="md" />
          <DropletIcon className="absolute top-32 right-1/3 w-16 h-16 text-cyan-400 opacity-10" />
          <DropletIcon className="absolute bottom-40 left-1/4 w-20 h-20 text-teal-400 opacity-8" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Waterbender Moon Phases - EXACT PALETTE */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            {/* Phase 1: Ice Blue (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-sky-200/50 hover:border-sky-200/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-sky-200/40"
              title="New Moon - Healing Begins"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-sky-200/30 to-cyan-300/30" />

            {/* Phase 2: Aqua (Waxing Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-cyan-300/40 to-cyan-300/70 border-2 border-cyan-300/60 hover:border-cyan-300/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-cyan-300/40"
              title="Waxing Crescent - Flow Builds"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-cyan-300/30 to-teal-400/30" />

            {/* Phase 3: Teal (Full Moon - CENTER) */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 border-2 border-teal-400/80 shadow-lg shadow-teal-400/50 flex-shrink-0 animate-pulse"
              title="Full Moon - Peak Healing"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-teal-400/30 to-slate-700/30" />

            {/* Phase 4: Navy (Waning Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-slate-700/40 to-slate-700/70 border-2 border-slate-700/60 hover:border-slate-700/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-slate-700/40"
              title="Waning Crescent - Rest & Recovery"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-slate-700/30 to-slate-400/30" />

            {/* Phase 5: Silver (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-slate-400/50 hover:border-slate-400/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-slate-400/40"
              title="New Moon - New Cycle"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Droplet className="h-4 w-4" />
            <span>HIPAA Compliant • 15+ Years Healthcare Leader</span>
          </div>

          <h1 className="font-elegant mb-6 text-4xl font-bold text-pearlWhite md:text-6xl lg:text-7xl" style={{ lineHeight: '1.3' }}>
            Health × Tech
            <span className="block bg-gradient-to-r from-sky-200 via-cyan-300 to-teal-400 bg-clip-text text-transparent mt-2">
              Development
            </span>
          </h1>

          <p className="font-serif mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-moonlightSilver md:text-xl italic">
            Clinical-grade UX and interfaces designed by a nurse who understands workflows.
            HIPAA-aligned builds for healthcare startups, practices, and medical organizations—where 15+ years of clinical operations meets cutting-edge development.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm mb-8">
            <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">HIPAA Compliant</span>
            <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/40">Clinical Workflows</span>
            <span className="px-3 py-1 rounded-full bg-sky-200/20 text-sky-200 border border-sky-200/40">15+ Years Experience</span>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-cyan-400/50"
            >
              Request a Quote
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#packages"
              className="rounded-full border border-cyan-400/30 px-8 py-4 font-semibold text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              View Packages
            </Link>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider className="absolute bottom-0 left-0 w-full h-16 text-cyan-400" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="who-this-is-for" className="relative border-b border-cyan-500/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Heart className="w-12 h-12 text-cyan-300 mx-auto mb-2" />
            </div>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-4xl">
              Who This Is For
            </h2>
            <p className="text-lg text-moonlightSilver italic">
              Built for healthcare innovators who refuse to compromise on quality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Healthcare Startups</h3>
                  <p className="text-moonlightSilver text-sm">
                    Launching patient portals, telemedicine platforms, or clinical tools that need HIPAA compliance from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-teal-400/20 bg-teal-400/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-teal-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-teal-300 mb-2">Medical Practices</h3>
                  <p className="text-moonlightSilver text-sm">
                    Primary care, specialty clinics, and urgent care centers needing custom workflow tools and patient engagement systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-sky-200/20 bg-sky-200/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-sky-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-200 mb-2">Health Systems</h3>
                  <p className="text-moonlightSilver text-sm">
                    Hospitals and multi-facility organizations requiring enterprise-grade clinical dashboards and analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Droplet className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Wellness & Mental Health</h3>
                  <p className="text-moonlightSilver text-sm">
                    Therapy platforms, wellness apps, and mental health tools that prioritize privacy and user trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-indigo-400/20 bg-indigo-400/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">Research & Clinical Trials</h3>
                  <p className="text-moonlightSilver text-sm">
                    Data collection platforms, patient tracking systems, and research databases with strict compliance needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-400/20 bg-slate-400/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-300 mb-2">Medical Device Companies</h3>
                  <p className="text-moonlightSilver text-sm">
                    Companion apps, patient monitoring systems, and device integration platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-teal-400/5 to-transparent p-8 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-midnight" />
              </div>
              <div className="space-y-2">
                <h3 className="font-elegant text-xl font-semibold text-pearlWhite">Why This Costs More (And Why It's Worth It)</h3>
                <ul className="space-y-2 text-sm text-moonlightSilver">
                  <li className="flex gap-2">
                    <span className="text-cyan-300">✓</span>
                    <span><strong>HIPAA Compliance:</strong> Security, encryption, audit logs built-in from day one</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-300">✓</span>
                    <span><strong>Clinical Domain Expertise:</strong> 15+ years in healthcare operations, not just coding</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-300">✓</span>
                    <span><strong>Clinician-Designed Workflows:</strong> Reduces training time, increases adoption</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-300">✓</span>
                    <span><strong>Regulatory Knowledge:</strong> PHI handling, consent flows, documentation standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="border-b border-cyan-500/20 bg-deepOcean/30 py-16 relative">
        <RippleCircle className="top-10 left-1/4" size="lg" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/30 relative">
                  <Droplet className="w-8 h-8 text-cyan-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">1. Discover</h3>
              <p className="text-sm uppercase tracking-wider text-cyan-300/70 mb-3">Clinical Assessment</p>
              <p className="text-moonlightSilver">
                We'll map your clinical workflows, compliance requirements, and user pain points.
                I speak both clinician and developer—no translation needed.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/20 border border-teal-400/30 relative">
                  <Activity className="w-8 h-8 text-teal-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-teal-400">2. Design & Build</h3>
              <p className="text-sm uppercase tracking-wider text-teal-300/70 mb-3">HIPAA-First Development</p>
              <p className="text-moonlightSilver">
                Security and compliance built-in from the first line of code.
                You'll see progress demos and provide clinical validation throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20 border border-sky-300/30 relative">
                  <Shield className="w-8 h-8 text-sky-200" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-sky-300">3. Deliver & Support</h3>
              <p className="text-sm uppercase tracking-wider text-sky-200/70 mb-3">Launch & Monitor</p>
              <p className="text-moonlightSilver">
                Deployment with documentation, staff training, and ongoing support.
                Your system goes live—and stays reliable.
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
            <p className="text-sm tracking-[0.35em] text-cyan-300 uppercase mb-3">Tiered Pricing</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Solution
            </h2>
            <p className="text-lg text-moonlightSilver">
              From MVP to enterprise. Each tier designed for different stages of healthcare innovation.
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
                } ${pkg.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-xs font-bold text-midnight shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-400/20 flex items-center justify-center border ${pkg.borderColor}`}>
                      <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${pkg.accentColor}`}>
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-moonlightSilver/70">{pkg.tier}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">
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
                    Request Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: OPTIONAL ADD-ONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 bg-nightNavy/50 border-y border-cyan-500/20">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-cyan-300 uppercase mb-3">Add-Ons Available</p>
            <h2 className="font-elegant text-2xl font-bold text-pearlWhite mb-2">Enhance Your Platform</h2>
            <p className="text-moonlightSilver">Additional features to scale your healthcare solution.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {addOns.map((addon, idx) => (
              <div key={idx} className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-transparent p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all">
                <h3 className="font-semibold text-pearlWhite mb-2">{addon.name}</h3>
                <p className="text-sm text-moonlightSilver mb-3">{addon.description}</p>
                <p className="text-lg font-bold text-cyan-300">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How do you ensure HIPAA compliance?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                HIPAA compliance is built into every layer: encrypted data at rest and in transit, comprehensive audit logs,
                role-based access controls, and Business Associate Agreements (BAAs). I also provide regulatory documentation
                and guidance throughout the project.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-teal-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How long does a typical healthcare platform take to build?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Clinical Dashboards: 4-6 weeks. Patient Portals: 6-10 weeks. Telemedicine Platforms: 8-12 weeks.
                Full Healthcare Platforms: 12-20 weeks depending on complexity. Rush timelines available with planning.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-sky-200/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can you integrate with our existing EHR or EMR system?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Yes! I have experience integrating with Epic, Cerner, and other major EHR systems via HL7, FHIR, and custom APIs.
                EHR integration is available as an add-on or can be included in Professional/Premium tiers.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What happens if regulations change after launch?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                All packages include post-launch support to address urgent compliance updates. For ongoing regulatory maintenance,
                I offer retainer plans that include monitoring, updates, and documentation as healthcare regulations evolve.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-teal-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Do you provide training for our clinical staff?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Yes! Premium tier includes staff training sessions. For other tiers, training can be added on.
                I create user guides, video tutorials, and can conduct live training sessions tailored to your workflows.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-sky-200/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Why should I choose a nurse developer over a traditional dev shop?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Traditional developers learn healthcare from documentation. I learned it from 15+ years on the floor—managing patients,
                navigating EHRs, dealing with clinical workflows under pressure. I build systems that clinicians actually want to use,
                not just systems that technically work.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-teal-400/10 to-sky-200/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative ripples */}
            <RippleCircle className="-top-16 -right-16" size="lg" />
            <RippleCircle className="-bottom-16 -left-16" size="md" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-sky-200 mx-auto shadow-lg shadow-cyan-400/40">
                <Heart className="w-10 h-10 text-midnight" />
              </div>

              <h2 className="font-elegant text-3xl font-bold text-pearlWhite md:text-4xl">
                Ready to Build Healthcare Tech That Actually Works?
              </h2>

              <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
                Let's talk about your clinical workflows, compliance needs, and user pain points.
                I'll design a system that clinicians actually want to use.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact?service=health-tech-development"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  Request a Project Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-cyan-400/30 px-8 py-4 font-semibold text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
                >
                  View Healthcare Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
