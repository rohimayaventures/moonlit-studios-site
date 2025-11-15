import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Author & Ghostwriting Studio - Books, Brand Stories & Content | Moonlit Studios",
  description:
    "Professional ghostwriting from a published fantasy author. Book ghostwriting, brand storytelling, website copy, thought leadership. 300K+ words published.",
  keywords: [
    "ghostwriting services",
    "book ghostwriting",
    "fantasy author",
    "brand storytelling",
    "thought leadership writing",
    "website copywriting",
    "content writing services",
    "manuscript ghostwriting",
    "author services",
    "creative writing services",
    "fiction ghostwriting",
    "brand narrative",
    "professional ghostwriter"
  ],
  openGraph: {
    title: "Author & Ghostwriting Studio | Moonlit Studios",
    description:
      "Professional ghostwriting. Books, brand stories, website copy, thought leadership. 300K+ words published, 4 completed manuscripts.",
    type: "website",
    url: "https://moonlstudios.com/services/ghostwriting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Author & Ghostwriting Studio - Moonlit Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Author & Ghostwriting Studio | Moonlit Studios",
    description:
      "Professional ghostwriting. Books, brand stories, website copy.",
    images: ["/og-image.png"],
  },
};

const writingServices = [
  {
    id: "book-ghostwriting",
    title: "Book Ghostwriting",
    tiers: [
      {
        name: "Memoir/Fiction (50K words)",
        price: 18000,
        duration: "4-6 months",
        features: [
          "Voice alignment interviews",
          "Structure & chapter planning",
          "Full manuscript drafting (50K words)",
          "One revision cycle",
          "Final polish & formatting",
        ],
        cta: "Start Your Book",
        popular: false,
      },
      {
        name: "Full-Length Novel (80K words)",
        price: 35000,
        duration: "6-8 months",
        features: [
          "Everything in Memoir/Fiction",
          "Extended manuscript (80K words)",
          "Character development sessions",
          "Two revision cycles",
          "Plot structure consulting",
          "Query letter & synopsis",
        ],
        cta: "Write Your Novel",
        popular: true,
      },
      {
        name: "Premium Book Package (100K+ words)",
        price: 50000,
        duration: "8-12 months",
        features: [
          "Everything in Full-Length Novel",
          "Extended manuscript (100K+ words)",
          "Multiple POV coordination",
          "Three revision cycles",
          "Author platform development",
          "Marketing copy & launch materials",
          "6 months post-completion support",
        ],
        cta: "Premium Package",
        popular: false,
      },
    ],
  },
  {
    id: "cookbook-ghostwriting",
    title: "Cookbook Ghostwriting",
    tiers: [
      {
        name: "Essential Cookbook",
        price: 18000,
        duration: "4-6 months",
        features: [
          "Recipe structuring + headnotes (50 recipes)",
          "Cultural storytelling integration",
          "Testing support notes",
          "Interior copy & introductions",
          "One revision cycle",
        ],
        cta: "Create Cookbook",
        popular: false,
      },
      {
        name: "Premium Cookbook",
        price: 32000,
        duration: "6-8 months",
        features: [
          "Everything in Essential",
          "Extended recipes (80-100 recipes)",
          "In-depth cultural research",
          "Chapter narratives & stories",
          "Back-of-book copy",
          "Two revision cycles",
          "Recipe testing coordination",
        ],
        cta: "Premium Cookbook",
        popular: true,
      },
    ],
  },
  {
    id: "brand-content",
    title: "Brand Story & Content",
    tiers: [
      {
        name: "Website Copy",
        price: 1200,
        duration: "2-3 weeks",
        features: [
          "Home page copy",
          "About page storytelling",
          "3-5 service/product pages",
          "SEO-optimized content",
          "One revision round",
        ],
        cta: "Get Website Copy",
        popular: false,
      },
      {
        name: "Brand Story Package",
        price: 3000,
        duration: "1 month",
        features: [
          "Everything in Website Copy",
          "Founder story deep-dive",
          "Brand narrative framework",
          "Launch announcement copy",
          "Email sequence (5-7 emails)",
          "Social media snippets",
          "Two revision rounds",
        ],
        cta: "Build Brand Story",
        popular: true,
      },
      {
        name: "Content Engine",
        price: 5000,
        duration: "ongoing monthly",
        features: [
          "Everything in Brand Story",
          "Monthly blog posts (4-6)",
          "Newsletter ghostwriting (4 per month)",
          "Social content strategy",
          "Thought leadership pieces",
          "Content calendar planning",
          "Unlimited minor revisions",
        ],
        cta: "Launch Content Engine",
        popular: false,
      },
    ],
  },
  {
    id: "author-platforms",
    title: "Author Platforms & Materials",
    tiers: [
      {
        name: "Author Website",
        price: 1800,
        duration: "2-3 weeks",
        features: [
          "Author bio & about page",
          "Book/series pages",
          "Reader magnet copy",
          "Newsletter signup copy",
          "Basic launch materials",
        ],
        cta: "Build Author Site",
        popular: false,
      },
      {
        name: "Launch Package",
        price: 4500,
        duration: "1-2 months",
        features: [
          "Everything in Author Website",
          "Book description & back cover",
          "Launch email sequences (7-10)",
          "Blog tour materials",
          "Press kit & media copy",
          "Social media launch plan",
          "Two revision rounds",
        ],
        cta: "Launch Your Book",
        popular: true,
      },
    ],
  },
  {
    id: "speeches-leadership",
    title: "Speeches & Thought Leadership",
    tiers: [
      {
        name: "Single Speech",
        price: 1500,
        duration: "1-2 weeks",
        features: [
          "Speech structure & narrative arc",
          "Rhythm & cadence notes",
          "Delivery formatting",
          "Q&A preparation notes",
          "One revision round",
        ],
        cta: "Write Speech",
        popular: false,
      },
      {
        name: "Thought Leadership Package",
        price: 4000,
        duration: "1 month",
        features: [
          "Everything in Single Speech",
          "3 keynote speeches",
          "LinkedIn article ghostwriting (3-5)",
          "Media interview prep materials",
          "Personal branding consultation",
          "Two revision rounds per piece",
        ],
        cta: "Build Leadership Voice",
        popular: true,
      },
    ],
  },
];

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION - Starlight/Silver Theme */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* Starlight Aurora Background Orbs */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-starlight/50 via-moonlightSilver/40 to-pearlWhite/20 blur-3xl opacity-50 animate-floatSlow" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pearlWhite/30 via-starlight/40 to-moonlightSilver/30 blur-3xl opacity-40 animate-flowDelayed" />

        <div className="relative mx-auto max-w-5xl">
          {/* Moon Phase Navigation - Silver Gradient */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-starlight via-moonlightSilver to-pearlWhite border-2 border-starlight/70 hover:border-starlight transition-all cursor-pointer shadow-lg shadow-starlight/30 flex-shrink-0"
              title="Full Moon - Ghostwriting Studio"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-starlight/60 to-moonlightSilver/50 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/90 to-pearlWhite/70 border border-moonlightSilver/60 hover:border-moonlightSilver transition-all cursor-pointer shadow-md shadow-moonlightSilver/20 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-moonlightSilver/50 to-pearlWhite/40 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pearlWhite/70 to-starlight/50 border border-pearlWhite/40 hover:border-pearlWhite transition-all cursor-pointer shadow-sm shadow-pearlWhite/15 flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase font-medium">
              Service Suite · Author & Ghostwriting
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-starlight via-moonlightSilver to-pearlWhite bg-clip-text text-transparent leading-tight px-4">
              Author & Ghostwriting Studio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-moonlightSilver max-w-3xl mx-auto leading-relaxed px-4">
              Books, cookbooks, launch flows, and ongoing content engines. A blend of clinical clarity
              and creative storytelling—every word feels human and intentional.
            </p>
          </div>
        </div>
      </section>

      {/* WRITING SERVICES SECTION */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase font-medium">
              Writing Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pearlWhite">
              Strategic writing partnerships
            </h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              For founders, clinicians, and creators who want a partner to bring their stories to life with precision and heart.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {writingServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-starlight text-center">
                  {service.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.tiers.map((tier, index) => (
                    <article
                      key={tier.name}
                      className={`relative rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-starlight/15 animate-fadeInUp ${
                        tier.popular
                          ? "border-starlight/60 bg-gradient-to-br from-moonlightSilver/20 via-deepOcean/60 to-midnight/90"
                          : "border-deepOcean/60 bg-gradient-to-br from-deepOcean/50 via-midnight/80 to-midnight/95"
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-starlight via-moonlightSilver to-pearlWhite px-4 py-1 text-xs font-bold text-midnight shadow-lg">
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
                            <span className="text-3xl font-bold bg-gradient-to-r from-starlight to-moonlightSilver bg-clip-text text-transparent">
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
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-starlight"
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
                          href={`/contact?service=ghostwriting&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                            tier.popular
                              ? "bg-gradient-to-r from-starlight via-moonlightSilver to-pearlWhite text-midnight shadow-lg shadow-starlight/30 hover:shadow-xl hover:shadow-moonlightSilver/50 hover:-translate-y-0.5"
                              : "border border-starlight/40 text-starlight hover:bg-starlight/10 hover:border-starlight/60"
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

      {/* WHY GHOSTWRITING VALUE PROP */}
      <section className="border-t border-deepOcean/40 bg-gradient-to-b from-nightNavy/50 to-midnight px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase font-medium">
              Why Moonlit Writing
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-pearlWhite">
              Your voice, elevated
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-starlight/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-starlight/20 p-2">
                  <svg className="h-5 w-5 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-starlight">
                  Published Fantasy Author
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                300K+ words published across fantasy novels, short stories, and creative non-fiction.
                I understand story structure, pacing, and what makes readers care.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-starlight/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-starlight/20 p-2">
                  <svg className="h-5 w-5 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-starlight">
                  Voice Matching Expertise
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Through deep interviews and voice alignment sessions, I capture your unique way of speaking
                and thinking—then weave it into every sentence.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-starlight/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-starlight/20 p-2">
                  <svg className="h-5 w-5 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-starlight">
                  Strategic Structure + Storytelling
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                Not just pretty words—every piece is architected with narrative flow, emotional beats,
                and strategic messaging that serves your goals.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-starlight/30 bg-deepOcean/30 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-starlight/20 p-2">
                  <svg className="h-5 w-5 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-starlight">
                  Clinical Clarity Meets Creativity
                </h3>
              </div>
              <p className="text-sm text-moonlightSilver leading-relaxed">
                15+ years in healthcare ops means I write with precision, empathy, and zero fluff.
                Perfect for health founders, clinical leaders, and mission-driven brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Background Orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-starlight/30 via-moonlightSilver/20 to-pearlWhite/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-starlight/30 bg-gradient-to-br from-moonlightSilver/15 via-deepOcean/40 to-midnight/90 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-starlight via-moonlightSilver to-pearlWhite bg-clip-text text-transparent">
              Ready to bring your story to life?
            </h2>
            <p className="mt-4 text-lg text-moonlightSilver max-w-2xl mx-auto">
              Share your outlines, messy drafts, or voice notes. We'll craft a writing plan
              that honors your voice and serves your vision.
            </p>

            <a
              href="/contact?service=ghostwriting"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-starlight via-moonlightSilver to-pearlWhite px-10 py-4 text-base font-bold text-midnight shadow-xl shadow-starlight/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-moonlightSilver/60 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Writing Project</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Animated shimmer effect */}
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </a>

            <p className="mt-6 text-xs text-starlight/80">
              Book slots available for Q2 2025 • Voice samples & outlines welcome
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
