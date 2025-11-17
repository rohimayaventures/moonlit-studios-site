'use client';

import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { MoonPhaseNav } from '@/app/components/MoonPhaseNav';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';

export default function SmallBusinessPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Define sections for moon phase navigation
  const sections = [
    { id: 'hero', label: 'Welcome' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'packages', label: 'Packages' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'faq', label: 'FAQ' },
  ];

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

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-mermaidTeal/20 bg-gradient-to-br from-midnight via-deepOcean to-nightNavy py-20">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-green-400/30" />
          <div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-purple-400/30 delay-500" />
          <div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-amber-400/30 delay-1000" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Studio Ghibli Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-green-400/40 hover:border-green-400/70 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-green-400/30"
              title="New Moon - Journey Begins"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-green-400/30 to-purple-400/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-purple-400/30 to-purple-400/60 border-2 border-purple-400/50 hover:border-purple-400/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-purple-400/30"
              title="Waxing Crescent - Growing Dreams"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-400/30 to-amber-400/30" />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 via-purple-400 to-amber-400 border-2 border-amber-400/70 shadow-lg shadow-amber-400/40 flex-shrink-0 animate-pulse"
              title="Full Moon - You Are Here"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-amber-400/30 to-green-400/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-green-400/30 to-green-400/60 border-2 border-green-400/50 hover:border-green-400/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-green-400/30"
              title="Waning Crescent - Infinite Potential"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-green-400/30 to-purple-400/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-purple-400/40 hover:border-purple-400/70 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-purple-400/30"
              title="New Moon - New Beginnings"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lunarGold/30 bg-lunarGold/10 px-4 py-2 text-sm text-lunarGold">
            <Sparkles className="h-4 w-4" />
            <span>Small Business. Big Dreams. Pure Magic.</span>
          </div>

          <h1 className="font-elegant mb-6 text-4xl font-bold text-pearlWhite md:text-6xl lg:text-7xl" style={{ lineHeight: '1.3' }}>
            Your Journey
            <span className="block bg-gradient-to-r from-green-400 via-purple-400 to-amber-400 bg-clip-text text-transparent mt-2">
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

      {/* Philosophy Section */}
      <section id="philosophy" className="border-b border-mermaidTeal/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-elegant mb-6 text-3xl font-bold text-pearlWhite md:text-4xl">
            Every Great Story Starts Small
          </h2>
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
      </section>

      {/* Packages Section */}
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
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-y border-mermaidTeal/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-2xl">
                  🌱
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-400">1. Plant the Seed</h3>
              <p className="text-moonlightSilver">
                We'll talk about your vision, your customers, and what makes your business special.
                No tech jargon—just honest conversation.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
                  🏰
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-400">2. Build Together</h3>
              <p className="text-moonlightSilver">
                I'll design something beautiful that feels like YOU. You'll see previews, share feedback,
                and watch it come to life.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-2xl">
                  ✨
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-amber-400">3. Launch & Grow</h3>
              <p className="text-moonlightSilver">
                Your site goes live, and I stick around to make sure everything runs smoothly.
                You're never alone in this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-8 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Why Work With Me?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-moonlightSilver">
            <div className="rounded-lg border border-mermaidTeal/30 bg-mermaidTeal/5 p-6">
              <h3 className="mb-2 text-xl font-semibold text-mermaidTeal">💙 I Get Small Businesses</h3>
              <p>
                Before I was a developer, I spent 15+ years in healthcare operations—managing budgets,
                fighting for resources, making every dollar count. I know what it's like to wear all the hats.
              </p>
            </div>

            <div className="rounded-lg border border-lunarGold/30 bg-lunarGold/5 p-6">
              <h3 className="mb-2 text-xl font-semibold text-lunarGold">🌟 No Hidden Fees, Ever</h3>
              <p>
                The price you see is the price you pay. No "surprise" charges, no pressure to upgrade.
                If your needs grow, we'll talk about it together—honestly and transparently.
              </p>
            </div>

            <div className="rounded-lg border border-starlight/30 bg-starlight/5 p-6">
              <h3 className="mb-2 text-xl font-semibold text-starlight">✨ I Build to Last</h3>
              <p>
                Your website isn't just a project to me—it's your livelihood. I use enterprise-grade tools
                and best practices, so you get Fortune 500 quality at a local business price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-y border-mermaidTeal/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Questions You Might Have
          </h2>

          <div className="space-y-6">
            <details className="group rounded-lg border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Do I need to pay everything upfront?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Nope! We can work out a payment plan that works for you. Typically 50% to start, 50% at launch.
                Need monthly payments? Let's talk about it.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How long does it take?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Totoro's Garden: 2-3 weeks. Howl's Moving Castle: 4-6 weeks. Spirited Away: 8-12 weeks.
                Rush projects? Let me know—I'll do my best to make it work.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What if I need changes later?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                All packages include support and updates for the first few months. After that, we can set up
                a maintenance plan or handle requests as needed. You're never stuck.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can you help with hosting and domains?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Absolutely! I'll help you set everything up, or I can manage it for you.
                Either way, you'll own your domain and content—always.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                I'm not tech-savvy. Will this be hard?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Not at all! I'll teach you how to update your site (if you want to), or I can handle it all for you.
                No question is too basic. I promise.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection limit={3} showTitle={true} />

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-lunarGold/30 bg-gradient-to-br from-lunarGold/10 via-mermaidTeal/10 to-starlight/10 p-12 backdrop-blur-sm">
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
