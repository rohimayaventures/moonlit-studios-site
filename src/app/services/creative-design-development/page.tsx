import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Design & Development - Branding & Websites | Moonlit Studios",
  description:
    "Premium creative services for founders, authors, and studios. Branding & identity (starting at $1,800), custom websites (starting at $3,000), packaging design (starting at $800), and creative copywriting ($125/hr). Built with storytelling at the core.",
  keywords: [
    "creative design services",
    "brand identity design",
    "custom website development",
    "author website design",
    "founder branding",
    "packaging design",
    "visual identity system",
    "creative web development",
    "Next.js website design",
    "brand style guide",
    "logo design services",
    "UI UX design"
  ],
  openGraph: {
    title: "Creative Design & Development | Moonlit Studios",
    description:
      "Branding, websites, and visual direction. Starting at $1,800. Built by a published author who understands storytelling.",
    type: "website",
    url: "https://moonlstudios.com/services/creative-design-development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creative Design & Development Services - Moonlit Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Design & Development | Moonlit Studios",
    description:
      "Branding, custom websites, packaging. Creative services starting at $1,800.",
    images: ["/og-image.png"],
  },
};

const offerings = [
  {
    title: "Branding & Identity",
    tier: "Essential",
    tagline: "Rooted visual systems for your brand or studio.",
    includes: [
      "Logo suite (3 variations)",
      "2-color palette + 2 fonts",
      "Basic brand guidelines (10 pages)",
      "1 round of revisions",
    ],
    starting: "$1,800",
    popular: false,
  },
  {
    title: "Branding & Identity",
    tier: "Professional",
    tagline: "Full brand identity with comprehensive guidelines.",
    includes: [
      "Logo suite (5 variations)",
      "Full color palette + font pairing",
      "Comprehensive brand guidelines (20-30 pages)",
      "Mood boards + social media kit (10 templates)",
      "2 rounds of revisions",
    ],
    starting: "$2,800",
    popular: true,
  },
  {
    title: "Branding & Identity",
    tier: "Premium",
    tagline: "White-glove brand strategy and execution.",
    includes: [
      "Everything in Professional, PLUS:",
      "Brand strategy workshop (2 hours)",
      "Extended logo suite (10+ variations)",
      "Print collateral designs",
      "Brand voice guide + messaging",
      "3 rounds of revisions",
    ],
    starting: "$4,500",
    popular: false,
  },
  {
    title: "Web Development",
    tier: "Essential",
    tagline: "Custom responsive sites ready for launch.",
    includes: [
      "3-page website (Home, About, Contact)",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "1 month post-launch support",
    ],
    starting: "$3,000",
    popular: false,
  },
  {
    title: "Web Development",
    tier: "Professional",
    tagline: "Full-featured website with advanced capabilities.",
    includes: [
      "5-7 page website",
      "Blog or portfolio section",
      "Advanced SEO optimization",
      "Newsletter signup integration",
      "Custom animations",
      "2 months post-launch support",
    ],
    starting: "$5,500",
    popular: true,
  },
  {
    title: "Web Development",
    tier: "Premium",
    tagline: "Enterprise-grade site with all the bells and whistles.",
    includes: [
      "7+ pages",
      "E-commerce or booking system",
      "Custom CMS integration",
      "Advanced interactive features",
      "Accessibility audit (WCAG AA)",
      "3 months post-launch support",
    ],
    starting: "$8,500",
    popular: false,
  },
  {
    title: "Packaging & Product Design",
    tier: "Essential",
    tagline: "Shelf-ready packaging and product visuals.",
    includes: [
      "1 SKU label design",
      "2 mockup variations",
      "Print-ready files (PDF, AI)",
      "1 round of revisions",
    ],
    starting: "$800",
    popular: false,
  },
  {
    title: "Packaging & Product Design",
    tier: "Professional",
    tagline: "Comprehensive packaging with multiple variations.",
    includes: [
      "1 SKU label design",
      "5 mockup variations",
      "Print-ready files + dieline template",
      "Ingredient hierarchy & formatting",
      "2 rounds of revisions",
    ],
    starting: "$1,200",
    popular: true,
  },
  {
    title: "Creative Copywriting",
    tier: "Hourly or Project-Based",
    tagline: "Voice-aligned copy across sites, products, and launches.",
    includes: [
      "Website copy (5 pages): $1,500",
      "Product descriptions (10 items): $800",
      "Brand story (About page): $600",
      "Newsletter copy (4 issues): $1,200",
    ],
    starting: "$125/hr",
    popular: false,
  },
];

export default function CreativeDesignDevelopmentPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases & Coral Theme */}
      <section className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        {/* Aurora Background Orbs - Coral Theme */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-coralPink/50 via-sunsetPink/40 to-roseGold/45 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-roseGold/40 via-coralBlush/35 to-sunsetPink/30 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-coralBlush/30 to-coralPink/60 border-2 border-coralBlush/50 hover:border-coralPink/80 transition-all cursor-pointer flex-shrink-0"
              title="Waxing Crescent"
            />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-coralPink via-sunsetPink to-roseGold border-2 border-coralPink/70 hover:border-coralPink transition-all cursor-pointer shadow-lg shadow-coralPink/30 flex-shrink-0"
              title="Full Moon - Creative Suite"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-roseGold/30 to-sunsetPink/60 border-2 border-roseGold/50 hover:border-roseGold/80 transition-all cursor-pointer flex-shrink-0"
              title="Waning Crescent"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="text-center space-y-4 sm:space-y-6 px-4">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-coralPink uppercase">Service Suite - Creative</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Creative Design & Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto">
              Visual and digital identity for founders, authors, and small businesses.
              Branding, packaging, web, and creative direction under one roof—your story stays cohesive from concept to launch.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-starlight">
              <span className="px-3 py-1 rounded-full bg-coralBlush/20 text-coralPink border border-coralBlush/40">Branding</span>
              <span className="px-3 py-1 rounded-full bg-sunsetPink/20 text-sunsetPink border border-sunsetPink/40">Web Development</span>
              <span className="px-3 py-1 rounded-full bg-roseGold/20 text-roseGold border border-roseGold/40">Packaging Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS GRID */}
      <section className="px-6 py-16 bg-gradient-to-b from-midnight via-coralBlush/5 to-midnight">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm tracking-[0.35em] text-coralPink uppercase">
              Tiered Pricing
            </p>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Mix and match deliverables or run the full suite together. Each tier is designed for different business stages.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <article
                key={`${offering.title}-${offering.tier}`}
                className={`
                  relative rounded-3xl border p-6 text-moonlightSilver shadow-xl backdrop-blur transition-all duration-300
                  ${offering.popular
                    ? 'border-coralPink/70 bg-gradient-to-b from-coralPink/10 via-sunsetPink/5 to-midnight shadow-coralPink/20 hover:shadow-coralPink/40 hover:-translate-y-1'
                    : 'border-roseGold/40 bg-gradient-to-b from-roseGold/5 via-midnight/80 to-midnight/95 hover:border-coralBlush/60 hover:shadow-roseGold/20'
                  }
                  animate-fadeInUp
                `}
                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
              >
                {offering.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-coralPink to-sunsetPink text-xs font-bold text-midnight shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coralPink/30 to-roseGold/20 flex items-center justify-center border border-coralPink/50">
                      <span className="text-coralPink text-xs font-bold">{offering.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-pearlWhite">
                        {offering.title}
                      </h2>
                      <p className="text-xs text-coralPink">{offering.tier}</p>
                    </div>
                  </div>
                  <p className="text-sm">{offering.tagline}</p>
                </div>

                <ul className="mt-4 space-y-2 text-xs">
                  {offering.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-coralPink flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-coralBlush/30">
                  <div className="text-center">
                    <p className="text-xs text-moonlightSilver/70">Starting at</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-coralPink via-sunsetPink to-roseGold bg-clip-text text-transparent">
                      {offering.starting}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE PROJECTS */}
      <section className="border-t border-coralBlush/20 bg-nightNavy/50 px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-coralPink/20 to-roseGold/20 border-2 border-coralPink/40 mx-auto">
            <svg className="w-8 h-8 text-coralPink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm tracking-[0.35em] text-coralPink uppercase">
            Sample Projects (Coming Soon)
          </p>
          <p className="text-moonlightSilver">
            This is where I'll showcase real builds and case studies. For now,
            browse the broader portfolio to see related work.
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border-2 border-coralPink/70 px-6 py-3 text-sm font-semibold text-coralPink transition-all hover:bg-coralPink hover:text-midnight hover:shadow-lg hover:shadow-coralPink/30"
          >
            View Portfolio →
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-coralPink/30 bg-gradient-to-br from-coralPink/20 via-sunsetPink/10 to-roseGold/20 px-6 py-12 text-center shadow-2xl shadow-coralPink/20 backdrop-blur">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-coralPink via-sunsetPink to-roseGold mx-auto shadow-lg shadow-coralPink/40 animate-pulseGlow">
              <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-pearlWhite">
              Ready to build your brand or site?
            </h3>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Bring your notes, Pinterest boards, and sketches. I'll turn it into
              a cohesive brand system and live experience that tells your story.
            </p>
            <a
              href="/contact?service=creative-design-development"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-coralPink via-sunsetPink to-roseGold px-8 py-4 text-sm font-bold text-midnight shadow-xl shadow-coralPink/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-sunsetPink/60 btn-water"
            >
              Request a Project Quote →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
