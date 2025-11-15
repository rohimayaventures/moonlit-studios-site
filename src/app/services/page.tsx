const suites = [
  {
    name: "Creative Design & Development",
    description:
      "Branding, websites, and visual direction for founders, authors, and small studios.",
    includes: [
      "Branding & identity systems",
      "Custom web + UI builds",
      "Packaging & product visuals",
      "Creative visual direction",
    ],
    starting: "$1,800+",
    href: "/services/creative-design-development",
  },
  {
    name: "Health x Tech Development",
    description:
      "Clinical-grade UX and interfaces designed by a nurse who understands workflows.",
    includes: [
      "HIPAA-aligned UI and flows",
      "Nurse-to-nurse platforms",
      "Health data dashboards",
    ],
    starting: "$4,500+",
    href: "/services/health-tech-development",
  },
  {
    name: "Consulting",
    description:
      "Strategy, audits, and workshops at the intersection of healthcare, UX, and product.",
    includes: [
      "Healthtech product strategy",
      "UX for clinician workflows",
      "Creative/portfolio coaching",
    ],
    starting: "$150/hr",
    href: "/services/consulting",
  },
  {
    name: "AI Innovation Suite",
    description:
      "Applied AI systems, copilots, and creative engines that actually ship.",
    includes: [
      "AI product architecture",
      "Conversational & voice AI",
      "Moonlit Labs experiments",
    ],
    starting: "$5,000+",
    href: "/services/ai-innovation",
  },
  {
    name: "Author & Ghostwriting Studio",
    description:
      "Author platforms, books, cookbooks, and ongoing written content done in your voice.",
    includes: [
      "Book & cookbook ghostwriting",
      "Blogs + newsletters",
      "Brand stories & about pages",
      "Speeches & launch flows",
      "Author websites + reader magnets",
    ],
    starting: "$250+",
    href: "/services/ghostwriting",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/50 via-lunarGold/40 to-mermaidTeal/50 blur-3xl opacity-80 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suites
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Choose the build that fits where you are.
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Moonlit Studios is led by a nurse-turned full-stack developer and
            creative technologist. These five suites let you pick the mix of
            branding, product, AI, or storytelling support that fits your current
            season.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm tracking-[0.35em] text-starlight uppercase">
              The Suite Catalog
            </p>
            <p className="text-moonlightSilver">
              Each suite can flex up or down. Start scoped, grow as needed.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {suites.map((suite, index) => (
              <article
                key={suite.name}
                className="rounded-3xl border border-deepOcean/60 bg-gradient-to-b from-deepOcean/70 via-midnight/80 to-midnight/95 p-5 text-moonlightSilver shadow-xl shadow-black/40 transition-all hover:border-mermaidTeal/70 hover:shadow-mermaidTeal/30 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h2 className="text-xl font-semibold text-pearlWhite">
                  {suite.name}
                </h2>
                <p className="mt-2 text-sm">{suite.description}</p>
                <ul className="mt-4 space-y-1 text-xs">
                  {suite.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mermaidTeal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex rounded-full border border-peacockTeal/70 px-3 py-1 text-xs font-semibold text-peacockTeal">
                  Starting at {suite.starting}
                </span>
                <a
                  href={suite.href}
                  className="mt-4 inline-flex text-xs font-semibold text-mermaidTeal transition-colors hover:text-lunarGold"
                >
                  Explore this suite -&gt;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-deepOcean/60 bg-nightNavy/70">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-center">
          <p className="text-sm text-moonlightSilver">
            Not sure which suite you fit into? I'll help you pick the right one.
          </p>
          <a
            href="/contact?topic=services"
            className="mx-auto inline-flex items-center justify-center rounded-full border border-mermaidTeal/70 px-6 py-3 text-sm font-semibold text-mermaidTeal transition-colors hover:bg-mermaidTeal hover:text-midnight"
          >
            Talk through options
          </a>
        </div>
      </section>
    </main>
  );
}
