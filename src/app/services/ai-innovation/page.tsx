import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Innovation Suite - RAG, Voice AI & Custom AI Systems | Moonlit Studios",
  description:
    "Custom AI solutions. AI product architecture, RAG chatbots, voice AI systems, computer vision. Built with Claude API, OpenAI, and cutting-edge ML.",
  keywords: [
    "AI development",
    "RAG chatbot development",
    "voice AI development",
    "computer vision AI",
    "Claude API integration",
    "OpenAI integration",
    "custom AI systems",
    "AI product development",
    "machine learning development",
    "AI architecture",
    "conversational AI",
    "intelligent search AI",
    "AI ML consulting"
  ],
  openGraph: {
    title: "AI Innovation Suite | Moonlit Studios",
    description:
      "Custom AI solutions. RAG chatbots, voice AI, computer vision, full AI architecture. Claude API, OpenAI, cutting-edge ML.",
    type: "website",
    url: "https://moonlstudios.com/services/ai-innovation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Innovation Suite - Moonlit Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Innovation Suite | Moonlit Studios",
    description:
      "Custom AI solutions. RAG, voice AI, computer vision, full architecture.",
    images: ["/og-image.png"],
  },
};

const aiServices = [
  {
    id: "rag-chatbots",
    title: "RAG Chatbots & Conversational AI",
    tiers: [
      {
        name: "Essential RAG",
        price: 4500,
        duration: "project-based",
        features: [
          "Basic RAG chatbot setup",
          "Document ingestion pipeline",
          "Claude/OpenAI integration",
          "Simple query handling",
          "Basic UI implementation",
        ],
        cta: "Build Chatbot",
        popular: false,
      },
      {
        name: "Professional RAG",
        price: 9500,
        duration: "project-based",
        features: [
          "Everything in Essential",
          "Multimodal capabilities (text + images)",
          "Context-aware conversations",
          "Role-based assistants",
          "Advanced prompt engineering",
          "Custom UI/UX design",
          "2 weeks post-launch support",
        ],
        cta: "Launch RAG System",
        popular: true,
      },
      {
        name: "Enterprise RAG",
        price: 15000,
        duration: "project-based",
        features: [
          "Everything in Professional",
          "Multi-agent orchestration",
          "Custom knowledge graphs",
          "Real-time learning loops",
          "Advanced safety guardrails",
          "Analytics & monitoring dashboard",
          "30-day premium support",
        ],
        cta: "Build Enterprise AI",
        popular: false,
      },
    ],
  },
  {
    id: "voice-ai",
    title: "Voice AI & Speech Systems",
    tiers: [
      {
        name: "Voice Foundation",
        price: 8000,
        duration: "project-based",
        features: [
          "Speech-to-text integration",
          "Text-to-speech synthesis",
          "Basic voice commands",
          "Simple dialogue flows",
          "Voice UI prototype",
        ],
        cta: "Start Voice AI",
        popular: false,
      },
      {
        name: "Voice Intelligence",
        price: 12000,
        duration: "project-based",
        features: [
          "Everything in Foundation",
          "Natural conversation handling",
          "Context retention across sessions",
          "Emotion-aware responses",
          "Multi-language support",
          "Production-ready deployment",
          "2 weeks optimization support",
        ],
        cta: "Build Voice System",
        popular: true,
      },
    ],
  },
  {
    id: "vision-ai",
    title: "Computer Vision & Visual AI",
    tiers: [
      {
        name: "Vision Essentials",
        price: 8500,
        duration: "project-based",
        features: [
          "Image classification setup",
          "Object detection pipeline",
          "Basic visual processing",
          "API integration",
          "Simple dashboard",
        ],
        cta: "Build Vision AI",
        popular: false,
      },
      {
        name: "Vision Pro",
        price: 14000,
        duration: "project-based",
        features: [
          "Everything in Essentials",
          "Advanced computer vision models",
          "Real-time processing",
          "Custom model training",
          "Multi-modal analysis (image + text)",
          "Production optimization",
          "30-day support & tuning",
        ],
        cta: "Launch Vision System",
        popular: true,
      },
    ],
  },
  {
    id: "ai-architecture",
    title: "AI Product Architecture",
    tiers: [
      {
        name: "Architecture Blueprint",
        price: 15000,
        duration: "project-based",
        features: [
          "Full AI system design",
          "Backend + frontend architecture",
          "API integrations & model routing",
          "Data pipeline design",
          "Auth & safety layers",
          "Technical documentation",
          "Implementation roadmap",
        ],
        cta: "Design AI Product",
        popular: false,
      },
      {
        name: "Full AI Platform",
        price: 25000,
        duration: "project-based",
        features: [
          "Everything in Blueprint",
          "Complete implementation",
          "Multi-agent systems",
          "Advanced orchestration",
          "Monitoring & evaluation loops",
          "Hallucination reduction strategies",
          "60-day premium support & optimization",
        ],
        cta: "Build AI Platform",
        popular: true,
      },
    ],
  },
  {
    id: "rapid-prototypes",
    title: "Rapid Prototypes & Experiments",
    tiers: [
      {
        name: "Weekend Sprint",
        price: 3500,
        duration: "2-3 days",
        features: [
          "Rapid concept validation",
          "Working prototype",
          "Basic feature set",
          "Quick iteration cycle",
          "Proof-of-concept demo",
        ],
        cta: "Sprint Prototype",
        popular: false,
      },
      {
        name: "Innovation Lab",
        price: 6500,
        duration: "1 week intensive",
        features: [
          "Everything in Weekend Sprint",
          "Multiple concept exploration",
          "Advanced feature testing",
          "User feedback integration",
          "Refined prototype",
          "Scale-up recommendations",
          "2 weeks support for refinement",
        ],
        cta: "Launch Lab Sprint",
        popular: true,
      },
    ],
  },
];

export default function AiInnovationPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION - Phoenix Fire Theme */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* Phoenix Fire Aurora Background Orbs */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-phoenixFire/60 via-lunarGold/50 to-sunsetPink/30 blur-3xl opacity-70 animate-floatSlow" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-lunarGold/50 via-phoenixFire/40 to-mermaidTeal/20 blur-3xl opacity-50 animate-flowDelayed" />

        <div className="relative mx-auto max-w-5xl">
          {/* Moon Phase Navigation - Fire Gradient */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-phoenixFire via-lunarGold to-sunsetPink border-2 border-phoenixFire/70 hover:border-phoenixFire transition-all cursor-pointer shadow-lg shadow-phoenixFire/40 flex-shrink-0"
              title="Full Moon - AI Innovation Suite"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-phoenixFire/60 to-lunarGold/50 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-lunarGold/90 to-phoenixFire/70 border border-lunarGold/60 hover:border-lunarGold transition-all cursor-pointer shadow-md shadow-lunarGold/30 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-lunarGold/50 to-sunsetPink/40 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-sunsetPink/70 to-phoenixFire/50 border border-sunsetPink/40 hover:border-sunsetPink transition-all cursor-pointer shadow-sm shadow-sunsetPink/20 flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-phoenixFire uppercase font-medium">
              Service Suite · AI Innovation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-phoenixFire via-lunarGold to-sunsetPink bg-clip-text text-transparent leading-tight px-4">
              AI Innovation Suite
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-moonlightSilver max-w-3xl mx-auto leading-relaxed px-4">
              Applied AI at the intersection of clinical empathy, creative storytelling, and technical engineering.
              We architect copilots, automations, and creative systems that actually make sense for your team.
            </p>
          </div>
        </div>
      </section>

      {/* AI SERVICES SECTION */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-phoenixFire uppercase font-medium">
              AI Solutions
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pearlWhite">
              Prototype quickly, scale thoughtfully
            </h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              From rapid weekend sprints to enterprise AI platforms—with governance and safety baked in from day one.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {aiServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-phoenixFire text-center">
                  {service.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.tiers.map((tier, index) => (
                    <article
                      key={tier.name}
                      className={`relative rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-phoenixFire/20 animate-fadeInUp ${
                        tier.popular
                          ? "border-phoenixFire/60 bg-gradient-to-br from-phoenixFire/20 via-deepOcean/60 to-midnight/90"
                          : "border-deepOcean/60 bg-gradient-to-br from-deepOcean/50 via-midnight/80 to-midnight/95"
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-phoenixFire via-lunarGold to-sunsetPink px-4 py-1 text-xs font-bold text-midnight shadow-lg">
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
                            <span className="text-3xl font-bold bg-gradient-to-r from-phoenixFire to-lunarGold bg-clip-text text-transparent">
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
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-phoenixFire"
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
                          href={`/contact?service=ai-innovation&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                            tier.popular
                              ? "bg-gradient-to-r from-phoenixFire via-lunarGold to-sunsetPink text-midnight shadow-lg shadow-phoenixFire/40 hover:shadow-xl hover:shadow-lunarGold/60 hover:-translate-y-0.5"
                              : "border border-phoenixFire/40 text-phoenixFire hover:bg-phoenixFire/10 hover:border-phoenixFire/60"
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

      {/* WHY AI INNOVATION VALUE PROP */}
      <section className="border-t border-deepOcean/40 bg-gradient-to-b from-nightNavy/50 to-midnight px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-phoenixFire uppercase font-medium">
              Why Moonlit AI
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-pearlWhite">
              Beyond the hype, into production
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-phoenixFire/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-phoenixFire/20 p-2">
                  <svg className="h-5 w-5 text-phoenixFire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-phoenixFire">
                  Hands-On AI Engineering
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Not just consulting slides—I build production RAG systems, voice AI, and multi-agent orchestration.
                Claude API, OpenAI, custom ML pipelines, the works.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-phoenixFire/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-phoenixFire/20 p-2">
                  <svg className="h-5 w-5 text-phoenixFire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-phoenixFire">
                  Safety & Ethics First
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Every AI system includes hallucination reduction, safety guardrails, and monitoring.
                Especially critical for healthcare and high-stakes applications.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-phoenixFire/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-phoenixFire/20 p-2">
                  <svg className="h-5 w-5 text-phoenixFire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-phoenixFire">
                  Conversational Intelligence
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Deep expertise in prompt engineering, context management, and creating AI that feels natural.
                From customer support to creative collaborators.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-phoenixFire/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-phoenixFire/20 p-2">
                  <svg className="h-5 w-5 text-phoenixFire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-phoenixFire">
                  Rapid Prototyping to Scale
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Weekend sprints for quick validation, then scale to production-grade systems.
                I move fast without breaking things (or your budget).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Background Orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/30 to-sunsetPink/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-phoenixFire/40 bg-gradient-to-br from-phoenixFire/15 via-deepOcean/40 to-midnight/90 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-phoenixFire via-lunarGold to-sunsetPink bg-clip-text text-transparent">
              Ready to ship an AI idea?
            </h2>
            <p className="mt-4 text-lg text-moonlightSilver max-w-2xl mx-auto">
              Start with a low-risk discovery sprint or go straight into building your intelligent system.
              Either way, you'll have something working fast.
            </p>

            <a
              href="/contact?service=ai-innovation"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-phoenixFire via-lunarGold to-sunsetPink px-10 py-4 text-base font-bold text-midnight shadow-xl shadow-phoenixFire/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lunarGold/70 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your AI Project</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Animated fire pulse effect */}
              <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </a>

            <p className="mt-6 text-xs text-phoenixFire/80">
              Weekend sprint slots available • Enterprise solutions welcome
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
