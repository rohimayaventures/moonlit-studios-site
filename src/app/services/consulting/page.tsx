import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting - HealthTech & Tech Strategy | Moonlit Studios",
  description:
    "Expert consulting from a nurse-turned-developer. HealthTech product strategy, tech advisory, AI/ML consulting. 15+ years operations leadership + cutting-edge tech expertise.",
  keywords: [
    "healthtech consulting",
    "tech strategy consulting",
    "AI ML consulting",
    "healthcare product strategy",
    "tech stack advisory",
    "HIPAA consulting",
    "clinical workflow consulting",
    "healthcare operations consulting",
    "AI integration consulting",
    "startup tech advisory",
    "healthcare tech consultant",
    "full-stack consulting"
  ],
  openGraph: {
    title: "Consulting - HealthTech & Tech Strategy | Moonlit Studios",
    description:
      "Expert consulting. HealthTech strategy, tech stack advisory, AI/ML guidance. 15+ years healthcare ops + modern tech mastery.",
    type: "website",
    url: "https://moonlstudios.com/services/consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Consulting Services - Moonlit Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting - HealthTech & Tech Strategy | Moonlit Studios",
    description:
      "Expert consulting. HealthTech, tech stack, AI/ML guidance.",
    images: ["/og-image.png"],
  },
};

const consultingServices = [
  {
    id: "healthtech-strategy",
    title: "HealthTech Product Strategy",
    tiers: [
      {
        name: "Single Session",
        price: 150,
        duration: "per hour",
        features: [
          "Product roadmap review",
          "Safety pattern assessment",
          "Clinical validation insights",
          "Risk reduction strategies",
        ],
        cta: "Book Session",
        popular: false,
      },
      {
        name: "Strategy Package",
        price: 2500,
        duration: "5-session package",
        features: [
          "Everything in Single Session",
          "Go-to-market planning",
          "Pilot program design",
          "Regulatory pathway guidance",
          "Stakeholder presentation deck",
          "30-day Slack/email support",
        ],
        cta: "Start Strategy",
        popular: true,
      },
      {
        name: "Strategic Partner",
        price: 5000,
        duration: "per month (retainer)",
        features: [
          "Everything in Strategy Package",
          "Weekly strategic sessions",
          "Unlimited async consultation",
          "Board/investor deck review",
          "Clinical advisory network access",
          "Priority response time",
        ],
        cta: "Partner With Us",
        popular: false,
      },
    ],
  },
  {
    id: "ux-clinicians",
    title: "UX for Clinicians",
    tiers: [
      {
        name: "UX Audit",
        price: 2000,
        duration: "one-time",
        features: [
          "Heuristic evaluation (clinical lens)",
          "Workflow friction analysis",
          "Adoption barrier identification",
          "Actionable improvement list",
        ],
        cta: "Get Audit",
        popular: false,
      },
      {
        name: "UX Transformation",
        price: 5000,
        duration: "project-based",
        features: [
          "Everything in UX Audit",
          "User testing with clinicians",
          "Interface redesign recommendations",
          "Load reduction strategies",
          "Implementation roadmap",
          "2 weeks post-launch support",
        ],
        cta: "Transform UX",
        popular: true,
      },
    ],
  },
  {
    id: "workshops",
    title: "Workshops & Training",
    tiers: [
      {
        name: "Half-Day Workshop",
        price: 1500,
        duration: "4 hours",
        features: [
          "Creative writing intensive OR",
          "AI + creativity bootcamp OR",
          "HealthTech UX clinic",
          "Interactive exercises",
          "Takeaway materials",
        ],
        cta: "Book Workshop",
        popular: false,
      },
      {
        name: "Full-Day Intensive",
        price: 3000,
        duration: "8 hours",
        features: [
          "Deep-dive on chosen topic",
          "Product accelerator session",
          "Team exercises & critique",
          "Personalized action plans",
          "Follow-up resources",
          "30-day email support",
        ],
        cta: "Book Intensive",
        popular: true,
      },
    ],
  },
  {
    id: "discovery",
    title: "Discovery & Quick Wins",
    tiers: [
      {
        name: "Portfolio Review",
        price: 500,
        duration: "90-minute session",
        features: [
          "Portfolio refinement guidance",
          "Storytelling framework",
          "Career positioning insights",
          "Quick-win recommendations",
        ],
        cta: "Get Review",
        popular: false,
      },
      {
        name: "Pitch Deck Clinic",
        price: 1000,
        duration: "2-hour session",
        features: [
          "Deck structure review",
          "Narrative strengthening",
          "Visual hierarchy fixes",
          "Investor perspective insights",
          "Revised deck outline",
        ],
        cta: "Refine Pitch",
        popular: true,
      },
    ],
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION - Purple Aurora Theme */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* Purple Aurora Background Orbs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-lavenderMist/50 via-twilightPurple/40 to-mysticViolet/30 blur-3xl opacity-60 animate-floatSlow" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-auroraPurple/40 via-twilightPurple/30 to-lavenderMist/20 blur-3xl opacity-50 animate-flowDelayed" />

        <div className="relative mx-auto max-w-5xl">
          {/* Moon Phase Navigation - Purple Gradient */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lavenderMist via-twilightPurple to-mysticViolet border-2 border-lavenderMist/70 hover:border-lavenderMist transition-all cursor-pointer shadow-lg shadow-lavenderMist/30 flex-shrink-0"
              title="Full Moon - Consulting Suite"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-lavenderMist/60 to-twilightPurple/40 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-twilightPurple/80 to-mysticViolet/60 border border-twilightPurple/50 hover:border-twilightPurple transition-all cursor-pointer shadow-md shadow-twilightPurple/20 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-twilightPurple/40 to-mysticViolet/30 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-mysticViolet/60 to-auroraPurple/40 border border-mysticViolet/30 hover:border-mysticViolet transition-all cursor-pointer shadow-sm shadow-mysticViolet/10 flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-lavenderMist uppercase font-medium">
              Service Suite · Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-lavenderMist via-twilightPurple to-auroraPurple bg-clip-text text-transparent leading-tight px-4">
              Strategic Consulting & Advisory
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-moonlightSilver max-w-3xl mx-auto leading-relaxed px-4">
              Product thinking, clinical operations insight, and technical depth—all in one studio.
              Perfect for founders, clinical teams, or creatives who need an outside brain to evaluate, refine, or accelerate their vision.
            </p>
          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES SECTION */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-lavenderMist uppercase font-medium">
              Strategic Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pearlWhite">
              Book hourly consults, retainers, or workshops
            </h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Whatever keeps your build moving forward with clarity and confidence.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {consultingServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-lavenderMist text-center">
                  {service.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.tiers.map((tier, index) => (
                    <article
                      key={tier.name}
                      className={`relative rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lavenderMist/20 animate-fadeInUp ${
                        tier.popular
                          ? "border-lavenderMist/60 bg-gradient-to-br from-twilightPurple/30 via-deepOcean/60 to-midnight/90"
                          : "border-deepOcean/60 bg-gradient-to-br from-deepOcean/50 via-midnight/80 to-midnight/95"
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-lavenderMist via-twilightPurple to-auroraPurple px-4 py-1 text-xs font-bold text-midnight shadow-lg">
                          MOST POPULAR
                        </div>
                      )}

                      <div className="space-y-6">
                        {/* Tier Header */}
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-pearlWhite">
                            {tier.name}
                          </h4>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-lavenderMist to-twilightPurple bg-clip-text text-transparent">
                              ${tier.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-moonlightSilver">
                              {tier.duration}
                            </span>
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm">
                              <svg
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-lavenderMist"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-moonlightSilver leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                          href={`/contact?service=consulting&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                            tier.popular
                              ? "bg-gradient-to-r from-lavenderMist via-twilightPurple to-auroraPurple text-midnight shadow-lg shadow-lavenderMist/30 hover:shadow-xl hover:shadow-twilightPurple/50 hover:-translate-y-0.5"
                              : "border border-lavenderMist/40 text-lavenderMist hover:bg-lavenderMist/10 hover:border-lavenderMist/60"
                          }`}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONSULTING VALUE PROP */}
      <section className="border-t border-deepOcean/40 bg-gradient-to-b from-nightNavy/50 to-midnight px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-lavenderMist uppercase font-medium">
              Why Strategic Consulting
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-pearlWhite">
              Rare combination of depth
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-twilightPurple/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-lavenderMist/20 p-2">
                  <svg className="h-5 w-5 text-lavenderMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-lavenderMist">
                  Clinical + Technical Fluency
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                15+ years healthcare operations leadership combined with full-stack development expertise.
                I speak both languages fluently and translate between them seamlessly.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-twilightPurple/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-lavenderMist/20 p-2">
                  <svg className="h-5 w-5 text-lavenderMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-lavenderMist">
                  Strategy That Ships
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Not just high-level theory. Every recommendation is grounded in implementation reality,
                regulatory constraints, and what actually works in production.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-twilightPurple/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-lavenderMist/20 p-2">
                  <svg className="h-5 w-5 text-lavenderMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-lavenderMist">
                  User-Centered Product Thinking
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Deep understanding of clinical workflows, patient journeys, and what makes healthcare products
                both safe and delightful to use.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-twilightPurple/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-lavenderMist/20 p-2">
                  <svg className="h-5 w-5 text-lavenderMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-lavenderMist">
                  AI & Innovation Guidance
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Hands-on experience with RAG systems, voice AI, and LLM integration.
                I can help you cut through hype and build AI features that actually add value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Background Orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-lavenderMist/30 via-twilightPurple/20 to-auroraPurple/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-lavenderMist/30 bg-gradient-to-br from-twilightPurple/20 via-deepOcean/40 to-midnight/90 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-lavenderMist via-twilightPurple to-auroraPurple bg-clip-text text-transparent">
              Need a thinking partner?
            </h2>
            <p className="mt-4 text-lg text-moonlightSilver max-w-2xl mx-auto">
              Book a consult to map next steps, surface blind spots, and get an action plan
              you can run with immediately.
            </p>

            <a
              href="/contact?service=consulting"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lavenderMist via-twilightPurple to-auroraPurple px-10 py-4 text-base font-bold text-midnight shadow-xl shadow-lavenderMist/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-twilightPurple/60 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your Consultation</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Animated water ripple effect */}
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </a>

            <p className="mt-6 text-xs text-lavenderMist/80">
              First-time clients receive a complimentary 15-minute discovery call
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
