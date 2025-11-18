'use client';

import { useState } from 'react';
import { Check, Sparkles, Leaf, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';

// 🏮 STUDIO GHIBLI VILLAGE - IMMERSIVE WORLD COMPONENTS
// Palette: Forest Tea Green (#88C9A1), Sky Spirit Blue (#8AC7E6), Warm Lantern Gold (#F6D28F),
//          Ghibli Cloud Cream (#FAF3E6), Night Meadow Indigo (#1A2B42)

// Floating magical lantern with warm glow
const GhibliLantern = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`relative ${className}`} style={{ animationDelay: `${delay}s` }}>
    {/* Outer glow aura - Warm Lantern Gold */}
    <div className="absolute inset-0 animate-floatLantern" style={{ animationDelay: `${delay}s` }}>
      <div className="absolute inset-0 rounded-full bg-[#F6D28F]/40 blur-xl" />
    </div>

    {/* Lantern SVG */}
    <svg
      className="relative z-10 animate-floatLantern"
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animationDelay: `${delay + 0.5}s` }}
    >
      {/* Handle */}
      <path d="M35 8 Q40 2, 45 8" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Top cap */}
      <ellipse cx="40" cy="12" rx="12" ry="4" fill="#C9985F" />

      {/* Body - Ghibli Cloud Cream */}
      <path
        d="M28 15 L28 70 Q28 75, 33 75 L47 75 Q52 75, 52 70 L52 15 Q52 12, 47 12 L33 12 Q28 12, 28 15 Z"
        fill="#FAF3E6"
        opacity="0.9"
      />

      {/* Frame lines */}
      <line x1="28" y1="25" x2="52" y2="25" stroke="#C9985F" strokeWidth="1.5" />
      <line x1="28" y1="60" x2="52" y2="60" stroke="#C9985F" strokeWidth="1.5" />
      <line x1="34" y1="15" x2="34" y2="75" stroke="#C9985F" strokeWidth="1" opacity="0.5" />
      <line x1="46" y1="15" x2="46" y2="75" stroke="#C9985F" strokeWidth="1" opacity="0.5" />

      {/* Inner magical glow - Warm Lantern Gold */}
      <ellipse cx="40" cy="45" rx="10" ry="15" fill="#F6D28F" opacity="0.6" />
      <ellipse cx="40" cy="45" rx="6" ry="10" fill="#F6D28F" opacity="0.9" className="animate-pulse" />

      {/* Bottom */}
      <ellipse cx="40" cy="78" rx="12" ry="4" fill="#C9985F" />
      <circle cx="40" cy="82" r="3" fill="#D4A574" />
      <line x1="40" y1="85" x2="40" y2="92" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="94" r="4" fill="#FAF3E6" />
    </svg>
  </div>
);

// Soot Sprites - Floating magical spirits
const SootSprite = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-floatLeaf`}
    style={{ animationDelay: `${delay}s`, animationDuration: '5s' }}
  >
    <div className="relative w-8 h-8">
      {/* Sprite body - Night Meadow Indigo */}
      <div className="absolute inset-0 rounded-full bg-[#1A2B42] opacity-70" />

      {/* Eyes */}
      <div className="absolute top-3 left-2 w-1.5 h-1.5 rounded-full bg-white" />
      <div className="absolute top-3 right-2 w-1.5 h-1.5 rounded-full bg-white" />

      {/* Soft glow */}
      <div className="absolute inset-0 rounded-full bg-[#88C9A1]/20 blur-sm animate-pulse" />
    </div>
  </div>
);

// Floating forest leaves
const FloatingLeaf = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <div
    className={`absolute ${className} animate-floatLeaf pointer-events-none`}
    style={{ animationDelay: `${delay}s`, animationDuration: '6s' }}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path
        d="M20 12 Q12 4, 4 12 Q12 20, 20 12 M4 12 Q10 10, 14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-green-300/60"
      />
    </svg>
  </div>
);

// Soft Ghibli clouds
const GhibliCloud = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      d="M20 40 Q30 20, 50 30 T90 35 Q110 30, 130 35 T170 30 Q180 40, 180 50 L20 50 Z"
      fill="currentColor"
      opacity="0.08"
    />
  </svg>
);

// Fireflies/Forest spirits
const Firefly = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-2 h-2 rounded-full bg-yellow-200 animate-pulse" style={{ boxShadow: '0 0 8px #FFFACD, 0 0 12px #FFD700' }} />
  </div>
);

// Forest floor grass patches
const GrassPatch = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M10 30 L12 15 Q13 10, 14 15 L16 30" stroke="#6B8E23" strokeWidth="1.5" opacity="0.4" />
    <path d="M20 30 L22 12 Q23 8, 24 12 L26 30" stroke="#7FA044" strokeWidth="1.5" opacity="0.5" />
    <path d="M35 30 L37 18 Q38 14, 39 18 L41 30" stroke="#6B8E23" strokeWidth="1.5" opacity="0.3" />
    <path d="M50 30 L52 10 Q53 6, 54 10 L56 30" stroke="#8FBC8F" strokeWidth="1.5" opacity="0.6" />
    <path d="M65 30 L67 16 Q68 12, 69 16 L71 30" stroke="#7FA044" strokeWidth="1.5" opacity="0.4" />
    <path d="M80 30 L82 14 Q83 10, 84 14 L86 30" stroke="#6B8E23" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

// Reusable FAQ Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <details
    open={isOpen}
    className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-green-300/30 transition-all backdrop-blur-sm"
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
        className={`w-5 h-5 text-green-300 transition-transform duration-300 flex-shrink-0 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </summary>
    <p className="mt-4 text-moonlightSilver">{answer}</p>
  </details>
);

export default function SmallBusinessPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Package tiers - LOW to HIGH
  const packages = [
    {
      id: 1,
      title: "Totoro's Garden",
      tier: "ESS",
      price: "$1,800",
      tagline: "Small & mighty—your digital sprout.",
      features: [
        "3-page website (Home, About, Contact)",
        "Mobile responsive",
        "Basic SEO setup",
        "Contact form integration",
        "2 weeks post-launch support",
      ],
      ideal: "Local services, consultants, side hustles, brand new businesses",
      color: "from-green-600/20 to-teal-700/20",
      borderColor: "border-green-500/30",
      accentColor: "text-green-400",
      glowColor: "shadow-green-500/20",
    },
    {
      id: 2,
      title: "Howl's Moving Castle",
      tier: "PRO",
      price: "$3,500",
      tagline: "A business that grows with you.",
      features: [
        "5-page website",
        "Blog or portfolio section",
        "Advanced SEO optimization",
        "Newsletter signup integration",
        "Custom animations",
        "3 months post-launch support",
      ],
      ideal: "Growing businesses, online shops, creative studios, service providers",
      color: "from-pink-600/20 to-purple-700/20",
      borderColor: "border-pink-500/30",
      accentColor: "text-pink-400",
      glowColor: "shadow-pink-500/20",
      popular: true,
    },
    {
      id: 3,
      title: "Spirited Away",
      tier: "PREM",
      price: "$6,500",
      tagline: "Full-scale business transformation.",
      features: [
        "7+ pages",
        "E-commerce or booking system",
        "Custom CMS integration",
        "Advanced interactive features",
        "Analytics dashboard",
        "Marketing automation",
        "6 months of support & updates",
      ],
      ideal: "Online stores, growing brands, multi-location businesses, premium services",
      color: "from-amber-600/20 to-yellow-700/20",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-400",
      glowColor: "shadow-amber-500/20",
    },
  ];

  const faqs = [
    {
      question: "Do I need to pay everything upfront?",
      answer: "Nope! We can work out a payment plan that works for you. Typically 50% to start, 50% at launch. Need monthly payments? Let's talk about it."
    },
    {
      question: "How long does it take?",
      answer: "Totoro's Garden: 2-3 weeks. Howl's Moving Castle: 4-6 weeks. Spirited Away: 8-12 weeks. Rush projects? Let me know—I'll do my best to make it work."
    },
    {
      question: "What if I need changes later?",
      answer: "All packages include support and updates for the first few months. After that, we can set up a maintenance plan or handle requests as needed. You're never stuck."
    },
    {
      question: "Can you help with hosting and domains?",
      answer: "Absolutely! I'll help you set everything up, or I can manage it for you. Either way, you'll own your domain and content—always."
    },
    {
      question: "I'm not tech-savvy. Will this be hard?",
      answer: "Not at all! I'll teach you how to update your site (if you want to), or I can handle it all for you. No question is too basic. I promise."
    },
    {
      question: "Why should I choose you over a DIY website builder?",
      answer: "DIY builders are great for some, but they often feel generic and can be limiting as you grow. I build custom sites that are uniquely yours, optimized for your goals, and built to scale with your business. Plus, you get ongoing support—not just a template."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight relative overflow-hidden">
      {/* 🌲 AMBIENT FOREST ATMOSPHERE 🌲 */}

      {/* Floating leaves throughout */}
      <FloatingLeaf delay={0} className="top-20 left-10 opacity-60" />
      <FloatingLeaf delay={2} className="top-40 right-20 opacity-50" />
      <FloatingLeaf delay={4} className="top-60 left-1/3 opacity-70" />
      <FloatingLeaf delay={1} className="bottom-40 right-1/4 opacity-40" />
      <FloatingLeaf delay={3} className="bottom-60 left-1/4 opacity-65" />
      <FloatingLeaf delay={5} className="top-1/3 right-1/3 opacity-55" />
      <FloatingLeaf delay={2.5} className="bottom-1/3 left-1/2 opacity-60" />

      {/* Fireflies/Forest spirits */}
      <Firefly delay={0} className="top-1/4 right-1/4 animate-floatLantern" />
      <Firefly delay={1.5} className="top-2/3 left-1/3 animate-floatLantern" />
      <Firefly delay={3} className="bottom-1/3 right-1/3 animate-floatLantern" />
      <Firefly delay={2} className="top-1/2 left-1/4 animate-floatLantern" />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO - FOREST VILLAGE ENTRANCE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-green-500/20 bg-gradient-to-br from-midnight via-deepOcean/80 to-nightNavy py-20">
        {/* Sky & atmospheric effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GhibliCloud className="absolute top-0 left-0 w-full h-20 text-green-300 opacity-30" />
          <GhibliCloud className="absolute top-10 left-0 w-full h-24 text-purple-200 opacity-15 translate-x-20" />
          <div className="absolute top-32 right-1/4 h-32 w-32 rounded-full bg-green-300/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-32 left-1/4 h-40 w-40 rounded-full bg-purple-200/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Lanterns floating in background */}
          <GhibliLantern className="absolute top-20 right-1/4 w-16 h-20 opacity-40" />
          <GhibliLantern className="absolute bottom-32 left-1/3 w-20 h-24 opacity-50" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          {/* Studio Ghibli Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-green-300/60 hover:border-green-300/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-green-300/50"
              title="New Moon - Seeds of Dreams"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-green-300/40 to-orange-200/40" />

            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-orange-200/50 to-orange-200/80 border-2 border-orange-200/70 hover:border-orange-200/100 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-orange-200/50"
              title="Waxing Crescent - Growth Begins"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-orange-200/40 to-pink-300/40" />

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-300 via-pink-300 to-purple-200 border-2 border-pink-300/90 shadow-xl shadow-pink-300/60 flex-shrink-0 animate-pulse"
              title="Full Moon - Your Journey"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-pink-300/40 to-purple-200/40" />

            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-purple-200/50 to-purple-200/80 border-2 border-purple-200/70 hover:border-purple-200/100 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-purple-200/50"
              title="Waning Crescent - Flourishing"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-200/40 to-sky-300/40" />

            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-sky-300/60 hover:border-sky-300/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-sky-300/50"
              title="New Moon - Endless Horizons"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm text-green-300 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Small Business. Big Dreams. Pure Magic.</span>
          </div>

          <h1 className="font-elegant mb-6 text-4xl font-bold text-pearlWhite md:text-6xl lg:text-7xl" style={{ lineHeight: '1.3' }}>
            Your Journey
            <span className="block bg-gradient-to-r from-green-300 via-pink-300 to-purple-200 bg-clip-text text-transparent mt-2">
              Begins Here
            </span>
          </h1>

          <p className="font-serif mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-moonlightSilver md:text-xl italic">
            You don't need a fortune to build something beautiful. Choose the path that feels right,
            and let's grow your business together—one gentle step at a time.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group rounded-full bg-gradient-to-r from-green-400 via-pink-300 to-purple-300 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-green-400/50 hover:scale-105"
            >
              Start Your Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#packages"
              className="rounded-full border border-green-400/40 px-8 py-4 font-semibold text-green-300 transition-all hover:border-green-400/60 hover:bg-green-400/10 backdrop-blur-sm"
            >
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Forest floor grass */}
        <GrassPatch className="absolute bottom-0 left-0 w-full h-12 text-green-400 opacity-20" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: STORY / PHILOSOPHY
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-b border-green-500/20 bg-midnight/30 relative">
        <GhibliCloud className="absolute top-0 left-0 w-full h-16 text-purple-200 -translate-y-8 opacity-20" />

        <div className="mx-auto max-w-4xl relative">
          {/* Ambient lanterns */}
          <GhibliLantern className="absolute -top-8 -right-12 w-24 h-28 opacity-30" />

          <div className="rounded-2xl border border-green-300/20 bg-gradient-to-br from-green-300/10 via-pink-200/5 to-transparent p-8 md:p-12 backdrop-blur-sm relative">
            <h2 className="font-elegant text-3xl font-bold text-pearlWhite mb-6 text-center">
              Every Great Story Starts Small
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-moonlightSilver">
              <p>
                I've built platforms for Fortune 500 companies and local startups just finding their footing.
                Here's what I know: <span className="text-green-300 font-semibold">the magic isn't in the budget—it's in the care you put into your work</span>.
              </p>
              <p>
                These packages are designed for local heroes—the coffee shop owner who knows every regular's order,
                the yoga instructor building something from scratch, the boutique that brings joy to your neighborhood.
              </p>
              <p className="text-pink-300 italic font-serif">
                "You deserve a website that feels like home—warm, welcoming, and uniquely yours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: TIERED PACKAGES
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="packages" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center relative">
            <GhibliCloud className="absolute -top-8 left-0 w-full h-16 text-green-300 opacity-15" />

            <p className="text-sm tracking-[0.35em] text-green-300 uppercase mb-3">Three Paths Forward</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-moonlightSilver">
              Each path is designed for different stages of growth. Start where you are, grow when you're ready.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
            {/* Ambient elements */}
            <div className="absolute -top-16 right-1/4 w-32 h-32 bg-pink-300/5 rounded-full blur-3xl animate-pulse" />

            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === pkg.id ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                } ${pkg.popular ? 'ring-2 ring-pink-400/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-400 via-pink-300 to-purple-300 text-xs font-bold text-midnight shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Tier Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full ${pkg.borderColor} ${pkg.accentColor} bg-midnight/80 text-xs font-bold backdrop-blur-sm`}>
                    {pkg.tier}
                  </span>
                </div>

                {/* Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <h3 className={`text-2xl font-bold ${pkg.accentColor} mb-2`}>
                    {pkg.title}
                  </h3>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-300">
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
                    Start Journey →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GrassPatch className="absolute bottom-0 left-0 w-full h-12 text-green-400 opacity-10" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-green-500/20 bg-deepOcean/30 relative overflow-hidden">
        <GhibliCloud className="absolute top-0 left-0 w-full h-16 text-pink-200 -translate-y-8 opacity-20" />

        {/* Floating lanterns for atmosphere */}
        <GhibliLantern className="absolute top-20 left-1/4 w-20 h-24 opacity-20" />
        <GhibliLantern className="absolute bottom-20 right-1/3 w-24 h-28 opacity-25" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            The Path Forward
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 border-2 border-green-400/50">
                  <Sparkles className="w-8 h-8 text-green-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-400">1. Dream Together</h3>
              <p className="text-sm uppercase tracking-wider text-green-300/70 mb-3">Discovery & Vision</p>
              <p className="text-moonlightSilver">
                Share your story, goals, and dreams. We'll map out exactly what your business needs to shine.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/20 border-2 border-pink-400/50">
                  <Leaf className="w-8 h-8 text-pink-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-400">2. Build & Grow</h3>
              <p className="text-sm uppercase tracking-wider text-pink-300/70 mb-3">Design & Development</p>
              <p className="text-moonlightSilver">
                I'll craft your site with care, share progress along the way, and refine until it feels just right.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 border-2 border-purple-300/50">
                  <Sparkles className="w-8 h-8 text-purple-200" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-300">3. Launch & Flourish</h3>
              <p className="text-sm uppercase tracking-wider text-purple-200/70 mb-3">Go Live & Support</p>
              <p className="text-moonlightSilver">
                Your site goes live, and I'll be here to support you as you grow. You're never alone on this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-midnight/30 relative">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Built for Dreamers & Doers
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-green-400/20 bg-green-400/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-green-300 mb-2">Local Businesses</h3>
              <p className="text-moonlightSilver text-sm">
                Coffee shops, boutiques, salons, and service providers who are the heartbeat of their communities.
              </p>
            </div>

            <div className="rounded-lg border border-pink-400/20 bg-pink-400/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">Wellness & Healing</h3>
              <p className="text-moonlightSilver text-sm">
                Yoga studios, therapists, wellness coaches, and anyone helping others feel their best.
              </p>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Creatives & Artists</h3>
              <p className="text-moonlightSilver text-sm">
                Photographers, designers, makers, and artists ready to share their work with the world.
              </p>
            </div>

            <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Side Hustles</h3>
              <p className="text-moonlightSilver text-sm">
                Passion projects, Etsy shops, and dreams that deserve a professional home online.
              </p>
            </div>

            <div className="rounded-lg border border-teal-400/20 bg-teal-400/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">Service Providers</h3>
              <p className="text-moonlightSilver text-sm">
                Consultants, coaches, educators, and experts who need a space to showcase their expertise.
              </p>
            </div>

            <div className="rounded-lg border border-sky-400/20 bg-sky-400/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Growing Brands</h3>
              <p className="text-moonlightSilver text-sm">
                Businesses ready to level up, refresh their look, or expand their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-16 border-t border-green-500/20 bg-deepOcean/20 relative">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Questions? I've Got Answers
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
        </div>

        <GrassPatch className="absolute bottom-0 left-0 w-full h-12 text-green-400 opacity-15" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <GhibliCloud className="absolute top-0 left-0 w-full h-16 text-purple-200 -translate-y-8 opacity-20" />

        {/* Magical lanterns surrounding the CTA */}
        <GhibliLantern className="absolute top-10 left-1/4 w-20 h-24 opacity-30" />
        <GhibliLantern className="absolute bottom-10 right-1/4 w-24 h-28 opacity-35" />
        <GhibliLantern className="absolute top-1/2 left-10 w-16 h-20 opacity-25" />
        <GhibliLantern className="absolute top-1/2 right-10 w-18 h-22 opacity-28" />

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <div className="rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-400/10 via-pink-300/10 to-purple-200/10 p-12 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 via-pink-300 to-purple-200 mx-auto shadow-lg shadow-green-400/40 mb-6">
              <Sparkles className="w-10 h-10 text-midnight" />
            </div>

            <h2 className="font-elegant text-3xl font-bold text-pearlWhite md:text-4xl mb-6">
              Ready to Begin Your Journey?
            </h2>

            <p className="text-lg text-moonlightSilver max-w-2xl mx-auto mb-8">
              Every great adventure starts with a single step. Let's build something magical together—
              something that feels uniquely, wonderfully <em>you</em>.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact?service=small-business"
                className="rounded-full bg-gradient-to-r from-green-400 via-pink-300 to-purple-300 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-green-400/50 hover:scale-105"
              >
                Let's Talk →
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-green-400/30 px-8 py-4 font-semibold text-green-300 transition-all hover:border-green-400/50 hover:bg-green-400/10"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <GrassPatch className="absolute bottom-0 left-0 w-full h-16 text-green-400 opacity-20" />
      </section>
    </div>
  );
}
