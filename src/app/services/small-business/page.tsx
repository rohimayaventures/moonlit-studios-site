'use client';

import { useState } from 'react';
import { Check, Sparkles, Leaf, Coffee, Heart } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';

// 🍃 STUDIO GHIBLI DECORATIVE SVG COMPONENTS
const CloudBlob = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 40 Q30 20, 50 30 T90 35 Q110 30, 130 35 T170 30 Q180 40, 180 50 L20 50 Z"
      fill="currentColor"
      opacity="0.1"
    />
  </svg>
);

const LeafAccent = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 12 Q12 4, 4 12 Q12 20, 20 12 M4 12 Q10 10, 14 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const DustMote = ({ delay = 0 }: { delay?: number }) => (
  <div
    className="absolute h-1 w-1 rounded-full bg-green-300/40 animate-float"
    style={{ animationDelay: `${delay}s` }}
  />
);

export default function SmallBusinessPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const packages = [
    {
      id: 1,
      name: "Totoro's Garden",
      tagline: "Plant Your Roots",
      price: "Starting at $1,500",
      icon: "🌱",
      description: "Perfect for local shops, cafes, and solo practitioners just beginning their journey. Small magic that grows naturally.",
      philosophy: "Every great forest starts with a single seed. Let's plant yours together.",
      features: [
        "Beautiful single-page website",
        "Mobile-responsive design",
        "Contact form with email notifications",
        "Google Business Profile setup",
        "Basic SEO optimization",
        "Social media integration",
        "1 month of support & updates",
      ],
      ideal: "Local coffee shops, boutiques, salons, yoga studios, consultants",
      color: "from-green-600/20 to-emerald-700/20",
      borderColor: "border-green-500/30",
      accentColor: "text-green-400",
      glowColor: "shadow-green-500/20",
    },
    {
      id: 2,
      name: "Howl's Moving Castle",
      tagline: "Transform Your Presence",
      price: "Starting at $3,500",
      icon: "🏰",
      description: "For service businesses ready to evolve and adapt. Your business, beautifully in motion.",
      philosophy: "Transformation isn't just change—it's growth with magic and intention.",
      features: [
        "Multi-page website (5-7 pages)",
        "Blog or portfolio system",
        "Online booking/scheduling",
        "Email automation setup",
        "Advanced SEO & analytics",
        "Newsletter integration",
        "Payment processing (if needed)",
        "3 months of support & updates",
      ],
      ideal: "Therapists, coaches, photographers, creative studios, wellness centers",
      color: "from-purple-600/20 to-indigo-700/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: 3,
      name: "Spirited Away",
      tagline: "Cross Into Success",
      price: "Starting at $6,000",
      icon: "✨",
      description: "Complete transformation for established businesses ready to scale. Step through the gate to a new realm of possibility.",
      philosophy: "Magic happens when you're brave enough to walk through unknown doors.",
      features: [
        "Full e-commerce platform",
        "Custom AI features (chatbot, automation)",
        "Secure payment processing",
        "Inventory management",
        "Customer portal & accounts",
        "Advanced analytics dashboard",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight">

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-mermaidTeal/20 bg-gradient-to-br from-midnight via-deepOcean to-nightNavy py-20">
        {/* Floating dust motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-green-300/30" />
          <div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-pink-300/30" />
          <div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-purple-200/30" />
          <LeafAccent className="absolute top-32 right-1/4 w-12 h-12 text-green-300 opacity-20" />
          <LeafAccent className="absolute bottom-40 left-1/4 w-16 h-16 text-purple-200 opacity-15" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Studio Ghibli Moon Phases - EXACT PALETTE */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            {/* Phase 1: Pastel Green (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-green-300/50 hover:border-green-300/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-green-300/40"
              title="New Moon - Journey Begins"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-green-300/30 to-orange-200/30" />

            {/* Phase 2: Peach (Waxing Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-orange-200/40 to-orange-200/70 border-2 border-orange-200/60 hover:border-orange-200/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-orange-200/40"
              title="Waxing Crescent - Growing Dreams"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-orange-200/30 to-pink-300/30" />

            {/* Phase 3: Pink (Full Moon - CENTER) */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-300 via-pink-300 to-purple-200 border-2 border-pink-300/80 shadow-lg shadow-pink-300/50 flex-shrink-0 animate-pulse"
              title="Full Moon - You Are Here"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-pink-300/30 to-purple-200/30" />

            {/* Phase 4: Lilac (Waning Crescent) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-purple-200/40 to-purple-200/70 border-2 border-purple-200/60 hover:border-purple-200/90 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-purple-200/40"
              title="Waning Crescent - Infinite Potential"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-200/30 to-sky-300/30" />

            {/* Phase 5: Sky Blue (New Moon) */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-sky-300/50 hover:border-sky-300/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-sky-300/40"
              title="New Moon - New Beginnings"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lunarGold/30 bg-lunarGold/10 px-4 py-2 text-sm text-lunarGold">
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
              className="group rounded-full bg-gradient-to-r from-lunarGold to-starlight px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-lunarGold/50"
            >
              Start Your Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#packages"
              className="rounded-full border border-mermaidTeal/30 px-8 py-4 font-semibold text-mermaidTeal transition-all hover:border-mermaidTeal/50 hover:bg-mermaidTeal/10"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="who-this-is-for" className="relative border-b border-mermaidTeal/20 bg-midnight/50 py-16">
        {/* Cloud blob divider at top */}
        <CloudBlob className="absolute top-0 left-0 w-full h-12 text-green-300 -translate-y-6" />

        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Coffee className="w-12 h-12 text-green-300 mx-auto mb-2" />
            </div>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-4xl">
              Who This Is For
            </h2>
            <p className="text-lg text-moonlightSilver italic">
              Built for the dreamers, the makers, and the local heroes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-green-300/20 bg-green-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Local Service Businesses</h3>
                  <p className="text-moonlightSilver text-sm">
                    Coffee shops, boutiques, salons, yoga studios, wellness centers, and therapy practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-200/20 bg-purple-200/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Creative Professionals</h3>
                  <p className="text-moonlightSilver text-sm">
                    Photographers, designers, artists, writers, and creative studios building their brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-pink-300/20 bg-pink-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">Solo Practitioners & Consultants</h3>
                  <p className="text-moonlightSilver text-sm">
                    Coaches, therapists, consultants, and experts who need a professional online presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-sky-300/20 bg-sky-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-sky-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-300 mb-2">Startups Finding Their Footing</h3>
                  <p className="text-moonlightSilver text-sm">
                    New businesses and entrepreneurs who need to establish their digital home base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-moonlightSilver">
              <span className="text-lunarGold font-semibold">If you pour your heart into what you do</span>,
              you deserve a website that does the same for you.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="border-b border-mermaidTeal/20 bg-deepOcean/30 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-2xl border border-green-300/30">
                  🌱
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-400">1. Discover</h3>
              <p className="text-sm uppercase tracking-wider text-green-300/70 mb-3">Plant the Seed</p>
              <p className="text-moonlightSilver">
                We'll talk about your vision, your customers, and what makes your business special.
                No tech jargon—just honest conversation.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl border border-purple-300/30">
                  🏰
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-400">2. Design & Build</h3>
              <p className="text-sm uppercase tracking-wider text-purple-300/70 mb-3">Build Together</p>
              <p className="text-moonlightSilver">
                I'll design something beautiful that feels like YOU. You'll see previews, share feedback,
                and watch it come to life.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-2xl border border-pink-300/30">
                  ✨
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-amber-400">3. Deliver & Support</h3>
              <p className="text-sm uppercase tracking-wider text-amber-300/70 mb-3">Launch & Grow</p>
              <p className="text-moonlightSilver">
                Your site goes live, and I stick around to make sure everything runs smoothly.
                You're never alone in this journey.
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
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Path
            </h2>
            <p className="text-lg text-moonlightSilver">
              Three journeys. One promise: I'll treat your business like it's my own.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                }`}
              >
                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="mb-4 text-5xl">{pkg.icon}</div>
                  <h3 className={`mb-2 text-2xl font-bold ${pkg.accentColor}`}>
                    {pkg.name}
                  </h3>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="mb-4 leading-relaxed text-moonlightSilver">
                    {pkg.description}
                  </p>

                  <div className="mb-6 rounded-lg bg-midnight/60 p-4">
                    <p className="text-sm italic text-lunarGold/90">
                      "{pkg.philosophy}"
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-mermaidTeal">
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
                    Begin This Journey →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy callout below packages */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="rounded-lg border border-mermaidTeal/30 bg-mermaidTeal/5 p-8 text-center">
              <h3 className="font-elegant text-2xl font-bold text-pearlWhite mb-4">
                Every Great Story Starts Small
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-moonlightSilver">
                I've built platforms for Fortune 500 companies and local startups just finding their footing.
                Here's what I know: <span className="text-lunarGold font-semibold">the magic isn't in the budget—it's in the care you put into your work</span>.
              </p>
              <p className="text-lg leading-relaxed text-moonlightSilver">
                These packages are designed for local heroes—the coffee shop owner who knows every regular's order,
                the therapist changing lives one session at a time, the salon stylist who makes people feel beautiful,
                the creative studio bringing visions to life.
                <span className="text-mermaidTeal font-semibold"> You deserve a website as beautiful as what you create</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="border-y border-mermaidTeal/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Questions You Might Have
          </h2>

          <div className="space-y-6">
            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-green-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite flex items-center gap-2">
                <span>Do I need to pay everything upfront?</span>
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Nope! We can work out a payment plan that works for you. Typically 50% to start, 50% at launch.
                Need monthly payments? Let's talk about it.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-purple-200/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How long does it take?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Totoro's Garden: 2-3 weeks. Howl's Moving Castle: 4-6 weeks. Spirited Away: 8-12 weeks.
                Rush projects? Let me know—I'll do my best to make it work.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-pink-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What if I need changes later?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                All packages include support and updates for the first few months. After that, we can set up
                a maintenance plan or handle requests as needed. You're never stuck.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-sky-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can you help with hosting and domains?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Absolutely! I'll help you set everything up, or I can manage it for you.
                Either way, you'll own your domain and content—always.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-lunarGold/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                I'm not tech-savvy. Will this be hard?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Not at all! I'll teach you how to update your site (if you want to), or I can handle it all for you.
                No question is too basic. I promise.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-green-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Why should I choose you over a DIY website builder?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                DIY builders are great for some, but they often feel generic and can be limiting as you grow.
                I build custom sites that are uniquely yours, optimized for your goals, and built to scale with your business.
                Plus, you get ongoing support—not just a template.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS (Optional - already exists)
      ═══════════════════════════════════════════════════════════════════ */}
      <TestimonialsSection limit={3} showTitle={true} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative rounded-2xl border border-lunarGold/30 bg-gradient-to-br from-lunarGold/10 via-mermaidTeal/10 to-starlight/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <LeafAccent className="absolute top-4 right-4 w-16 h-16 text-green-300 opacity-10" />
            <LeafAccent className="absolute bottom-4 left-4 w-20 h-20 text-purple-200 opacity-10" />

            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-4xl">
              Ready to Begin?
            </h2>
            <p className="mb-8 text-lg text-moonlightSilver">
              Let's chat about your business over coffee (virtual or real!).
              No pressure, no sales pitch—just a conversation about your dreams.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-lunarGold to-starlight px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-lunarGold/50"
              >
                Schedule a Free Chat
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-mermaidTeal/30 px-8 py-4 font-semibold text-mermaidTeal transition-all hover:border-mermaidTeal/50 hover:bg-mermaidTeal/10"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
