'use client';

import { useState } from 'react';
import { Check, Sparkles, Droplet, Heart, Shield, Activity, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// 🌊 WATERBENDER HEALING TEMPLE - IMMERSIVE SVG COMPONENTS

// Healing Droplet with pulsing inner light
const HealingDroplet = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`relative ${className}`} style={{ animationDelay: `${delay}s` }}>
    {/* Outer glow aura */}
    <div className="absolute inset-0 animate-pulse" style={{ animationDelay: `${delay}s` }}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 via-teal-300/20 to-sky-200/10 blur-xl" />
    </div>

    {/* Droplet SVG with healing light */}
    <svg className="relative z-10 animate-floatDroplet" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg" style={{ animationDelay: `${delay}s` }}>
      {/* Main water droplet */}
      <path
        d="M30 5 L45 25 Q50 35, 50 45 Q50 60, 40 70 Q30 75, 20 70 Q10 60, 10 45 Q10 35, 15 25 Z"
        fill="url(#dropletGradient)"
        opacity="0.85"
      />

      {/* Inner healing light - pulsing */}
      <ellipse cx="30" cy="40" rx="8" ry="12" fill="#E0F7FA" opacity="0.9" className="animate-pulse" />
      <circle cx="30" cy="35" r="4" fill="#FFFFFF" opacity="0.7" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="dropletGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Flowing Water Wave Divider
const WaveDivider = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      d="M0 60 Q150 20, 300 60 T600 60 T900 60 T1200 60 L1200 120 L0 120 Z"
      fill="currentColor"
      opacity="0.08"
    />
  </svg>
);

// Concentric Ripple Circles
const RippleCircle = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64"
  };

  return (
    <div className={`absolute ${sizeClasses[size]} ${className} pointer-events-none animate-breathe`}>
      <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
      <div className="absolute inset-2 rounded-full border border-cyan-400/15" />
      <div className="absolute inset-4 rounded-full border border-cyan-400/10" />
      <div className="absolute inset-6 rounded-full border border-cyan-400/5" />
    </div>
  );
};

// Lotus Flower - Sacred healing symbol
const LotusFlower = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Center */}
    <circle cx="50" cy="50" r="8" fill="#67E8F9" opacity="0.8" />

    {/* Inner petals */}
    <ellipse cx="50" cy="42" rx="6" ry="12" fill="#A5F3FC" opacity="0.6" />
    <ellipse cx="58" cy="50" rx="12" ry="6" fill="#A5F3FC" opacity="0.6" transform="rotate(72 50 50)" />
    <ellipse cx="50" cy="58" rx="6" ry="12" fill="#A5F3FC" opacity="0.6" transform="rotate(144 50 50)" />
    <ellipse cx="42" cy="50" rx="12" ry="6" fill="#A5F3FC" opacity="0.6" transform="rotate(216 50 50)" />
    <ellipse cx="50" cy="42" rx="6" ry="12" fill="#A5F3FC" opacity="0.6" transform="rotate(288 50 50)" />

    {/* Outer petals */}
    <ellipse cx="50" cy="35" rx="8" ry="16" fill="#22D3EE" opacity="0.4" />
    <ellipse cx="65" cy="50" rx="16" ry="8" fill="#22D3EE" opacity="0.4" transform="rotate(72 50 50)" />
    <ellipse cx="50" cy="65" rx="8" ry="16" fill="#22D3EE" opacity="0.4" transform="rotate(144 50 50)" />
    <ellipse cx="35" cy="50" rx="16" ry="8" fill="#22D3EE" opacity="0.4" transform="rotate(216 50 50)" />
    <ellipse cx="50" cy="35" rx="8" ry="16" fill="#22D3EE" opacity="0.4" transform="rotate(288 50 50)" />
  </svg>
);

// Flowing water stream
const WaterStream = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      d="M100 0 Q120 50, 100 100 T100 200 T100 300 T100 400"
      stroke="url(#streamGradient)"
      strokeWidth="3"
      opacity="0.3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M100 0 Q80 50, 100 100 T100 200 T100 300 T100 400"
      stroke="url(#streamGradient)"
      strokeWidth="2"
      opacity="0.2"
      fill="none"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="streamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

// Small water bubbles
const WaterBubbles = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <div className={`absolute ${className} pointer-events-none`} style={{ animationDelay: `${delay}s` }}>
    <div className="w-3 h-3 rounded-full bg-cyan-200/40 animate-floatDroplet border border-cyan-300/30" />
  </div>
);

// Protective Circle for Steps
const ProtectiveCircle = ({ icon, color }: { icon: React.ReactNode; color: string }) => (
  <div className="relative">
    {/* Outer ripple */}
    <div className={`absolute inset-0 rounded-full border-2 ${color} opacity-20 animate-ping`} style={{ animationDuration: '3s' }} />

    {/* Main circle */}
    <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 ${color} bg-midnight/60 backdrop-blur-sm`}>
      {icon}
    </div>
  </div>
);

// Reusable FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onToggle, borderColor }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  borderColor?: string;
}) => (
  <details
    open={isOpen}
    className={`group rounded-lg border ${borderColor || 'border-white/10'} bg-white/5 p-6 hover:border-cyan-400/30 transition-all`}
  >
    <summary
      className="cursor-pointer text-lg font-semibold text-pearlWhite flex items-center justify-between gap-4 list-none"
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      aria-expanded={isOpen}
    >
      <span>{question}</span>
      <ChevronDown
        className={`w-5 h-5 text-cyan-300 transition-transform duration-300 flex-shrink-0 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </summary>
    <p className="mt-4 text-moonlightSilver">{answer}</p>
  </details>
);

export default function HealthTechDevelopmentPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // ORGANIZED BY CATEGORY - Each category sorted LOW → HIGH
  const packageCategories = [
    {
      name: "Clinical Dashboards",
      description: "Real-time monitoring and clinical intelligence",
      packages: [
        {
          id: 1,
          title: "Clinical Dashboard",
          tier: "ESS",
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
          id: 4,
          title: "Clinical Dashboard",
          tier: "ADV",
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
      ],
    },
    {
      name: "Patient Portals",
      description: "Secure patient engagement platforms",
      packages: [
        {
          id: 2,
          title: "Patient Portal",
          tier: "ESS",
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
          id: 5,
          title: "Patient Portal",
          tier: "PRO",
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
      ],
    },
    {
      name: "Telemedicine Platforms",
      description: "Virtual care and telehealth solutions",
      packages: [
        {
          id: 3,
          title: "Telemedicine Platform",
          tier: "BAS",
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
          id: 7,
          title: "Telemedicine Platform",
          tier: "ADV",
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
      ],
    },
    {
      name: "Core Healthcare Platforms",
      description: "HIPAA-compliant custom applications",
      packages: [
        {
          id: 6,
          title: "Healthcare Platform",
          tier: "ESS",
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
          id: 8,
          title: "Healthcare Platform",
          tier: "PRO",
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
          tier: "PREM",
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
      ],
    },
  ];

  // ADD-ONS - Sorted by price LOW → HIGH
  const addOns = [
    {
      name: "HIPAA Security Audit",
      description: "Comprehensive security review & documentation",
      price: "+$1,500",
    },
    {
      name: "EHR Integration",
      description: "Epic, Cerner, or custom EHR connectivity",
      price: "+$2,500",
    },
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
  ];

  const faqs = [
    {
      question: "How do you ensure HIPAA compliance?",
      answer: "HIPAA compliance is built into every layer: encrypted data at rest and in transit, comprehensive audit logs, role-based access controls, and Business Associate Agreements (BAAs). I also provide regulatory documentation and guidance throughout the project.",
    },
    {
      question: "How long does a typical healthcare platform take to build?",
      answer: "Clinical Dashboards: 4-6 weeks. Patient Portals: 6-10 weeks. Telemedicine Platforms: 8-12 weeks. Full Healthcare Platforms: 12-20 weeks depending on complexity. Rush timelines available with planning.",
    },
    {
      question: "Can you integrate with our existing EHR or EMR system?",
      answer: "Yes! I have experience integrating with Epic, Cerner, and other major EHR systems via HL7, FHIR, and custom APIs. EHR integration is available as an add-on or can be included in Professional/Premium tiers.",
    },
    {
      question: "What happens if regulations change after launch?",
      answer: "All packages include post-launch support to address urgent compliance updates. For ongoing regulatory maintenance, I offer retainer plans that include monitoring, updates, and documentation as healthcare regulations evolve.",
    },
    {
      question: "Do you provide training for our clinical staff?",
      answer: "Yes! Premium tier includes staff training sessions. For other tiers, training can be added on. I create user guides, video tutorials, and can conduct live training sessions tailored to your workflows.",
    },
    {
      question: "Why should I choose a nurse developer over a traditional dev shop?",
      answer: "Traditional developers learn healthcare from documentation. I learned it from 15+ years on the floor—managing patients, navigating EHRs, dealing with clinical workflows under pressure. I build systems that clinicians actually want to use, not just systems that technically work.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight relative overflow-hidden">
      {/* 🌊 AMBIENT HEALING TEMPLE ATMOSPHERE 🌊 */}

      {/* Breathing Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 animate-breathe">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/3 to-sky-200/5" />
      </div>

      {/* Floating healing droplets throughout page */}
      <HealingDroplet delay={0} className="absolute top-20 left-10 w-12 h-16 opacity-30 pointer-events-none" />
      <HealingDroplet delay={1.5} className="absolute top-1/3 right-20 w-16 h-20 opacity-40 pointer-events-none" />
      <HealingDroplet delay={3} className="absolute top-2/3 left-1/4 w-14 h-18 opacity-35 pointer-events-none" />
      <HealingDroplet delay={2} className="absolute bottom-1/4 right-1/3 w-18 h-22 opacity-45 pointer-events-none" />
      <HealingDroplet delay={4} className="absolute bottom-40 left-1/3 w-12 h-16 opacity-30 pointer-events-none" />

      {/* Water bubbles rising */}
      <WaterBubbles delay={0} className="top-1/4 left-1/4" />
      <WaterBubbles delay={2} className="top-1/2 right-1/4" />
      <WaterBubbles delay={1} className="bottom-1/3 left-1/3" />
      <WaterBubbles delay={3} className="top-2/3 right-1/2" />
      <WaterBubbles delay={1.5} className="bottom-1/4 left-1/2" />

      {/* Flowing water streams on sides */}
      <WaterStream className="absolute top-0 left-8 w-12 h-full opacity-15 pointer-events-none" />
      <WaterStream className="absolute top-0 right-8 w-12 h-full opacity-15 pointer-events-none" />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-br from-midnight via-deepOcean to-nightNavy py-20">
        {/* Waterbender ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <RippleCircle className="top-10 right-1/4" size="lg" />
          <RippleCircle className="bottom-20 left-1/3" size="md" />
          <RippleCircle className="top-1/2 left-1/4" size="sm" />
          <HealingDroplet delay={0} className="absolute top-32 right-1/3 w-16 h-16" />
          <HealingDroplet delay={1} className="absolute bottom-40 left-1/4 w-20 h-20" />
          <HealingDroplet delay={2} className="absolute top-1/2 right-1/4 w-14 h-18" />

          {/* Lotus flowers floating */}
          <LotusFlower className="absolute top-20 left-1/3 w-16 h-16 opacity-20 animate-pulse" />
          <LotusFlower className="absolute bottom-32 right-1/4 w-20 h-20 opacity-25 animate-breathe" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
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
      <section id="who-this-is-for" className="relative border-b border-cyan-500/20 bg-midnight/50 py-16 z-10">
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
      <section id="how-it-works" className="border-b border-cyan-500/20 bg-deepOcean/30 py-16 relative z-10">
        <RippleCircle className="top-10 left-1/4" size="lg" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <ProtectiveCircle
                  icon={<Droplet className="w-8 h-8 text-cyan-300" />}
                  color="border-cyan-400/50"
                />
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
                <ProtectiveCircle
                  icon={<Activity className="w-8 h-8 text-teal-300" />}
                  color="border-teal-400/50"
                />
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
                <ProtectiveCircle
                  icon={<Shield className="w-8 h-8 text-sky-200" />}
                  color="border-sky-300/50"
                />
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
          SECTION 4: ORGANIZED PACKAGES BY CATEGORY
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="packages" className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.35em] text-cyan-300 uppercase mb-3">Healing Temple Offerings</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Solution
            </h2>
            <p className="text-lg text-moonlightSilver">
              Organized by category. Each tier designed for different stages of healthcare innovation.
            </p>
          </div>

          {/* LOOP THROUGH CATEGORIES */}
          {packageCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-16">
              {/* Category Header */}
              <div className="mb-8 text-center">
                <h3 className="font-elegant text-2xl font-bold text-pearlWhite mb-2">
                  {category.name}
                </h3>
                <p className="text-moonlightSilver">{category.description}</p>
              </div>

              {/* Category Packages */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {category.packages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    onMouseEnter={() => setHoveredCard(pkg.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative overflow-hidden rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                      hoveredCard === pkg.id ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                    } ${pkg.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-xs font-bold text-midnight shadow-lg whitespace-nowrap">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    {/* Tier Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full ${pkg.borderColor} ${pkg.accentColor} bg-midnight/80 text-xs font-bold backdrop-blur-sm`}>
                        {pkg.tier}
                      </span>
                    </div>

                    {/* Card Header */}
                    <div className="border-b border-white/10 bg-midnight/40 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-400/20 flex items-center justify-center border ${pkg.borderColor}`}>
                          <Droplet className={`w-5 h-5 ${pkg.accentColor}`} />
                        </div>
                        <div>
                          <h4 className={`text-lg font-bold ${pkg.accentColor}`}>
                            {pkg.title}
                          </h4>
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

              {/* Category Divider */}
              {categoryIdx < packageCategories.length - 1 && (
                <div className="relative h-16 w-full my-8">
                  <WaveDivider className="absolute inset-0 text-cyan-400/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: OPTIONAL ADD-ONS (PRICE SORTED)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 bg-nightNavy/50 border-y border-cyan-500/20 relative z-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-cyan-300 uppercase mb-3">Healing Enhancements</p>
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
          SECTION 6: FAQ WITH CONSISTENT ARROWS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-16 relative z-10">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                borderColor={
                  idx % 3 === 0 ? 'border-cyan-400/20' :
                  idx % 3 === 1 ? 'border-teal-400/20' :
                  'border-sky-200/20'
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-teal-400/10 to-sky-200/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Subtle ambient glows only */}
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-teal-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes floatDroplet {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes breathe {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-floatDroplet {
          animation: floatDroplet 4s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
