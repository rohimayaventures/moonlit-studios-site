import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Author & Ghostwriting Studio - Books, Brand Stories & Content | Moonlit Studios",
  description:
    "Professional ghostwriting from a published fantasy author. Book ghostwriting ($18,000+), brand storytelling ($3,000+), website copy ($1,200+), thought leadership ($2,500+). 300K+ words published.",
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
      "Professional ghostwriting from $1,200+. Books, brand stories, website copy, thought leadership. 300K+ words published, 4 completed manuscripts.",
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
      "Professional ghostwriting from $1,200+. Books, brand stories, website copy.",
    images: ["/og-image.png"],
  },
};

const offerings = [
  {
    title: "Book Ghostwriting",
    includes: [
      "Structure & planning with your POV",
      "Voice alignment interviews",
      "Full manuscript drafting",
      "Revision & polish cycles",
    ],
    starting: "$18,000 - $50,000+",
  },
  {
    title: "Cookbook Ghostwriting",
    includes: [
      "Recipe structuring + headnotes",
      "Cultural storytelling & research",
      "Testing support notes",
      "Interior/back-of-book copy",
    ],
    starting: "$18,000 - $50,000+",
  },
  {
    title: "Author Platforms & Sites",
    includes: [
      "Author websites + series hubs",
      "Launch pages & reader magnets",
      "Email sequences & blurbs",
      "Back-of-book copy + assets",
    ],
    starting: "$1,800 - $4,500",
  },
  {
    title: "Blog & Newsletter Content",
    includes: [
      "Content strategy support",
      "Cadence planning",
      "Voice consistency editing",
    ],
    starting: "$250 - $600",
  },
  {
    title: "Brand Story Ghostwriting",
    includes: [
      "Brand and founder stories",
      "About pages & bios",
      "Origin stories for launches",
    ],
    starting: "$250 - $600",
  },
  {
    title: "Speech Writing",
    includes: [
      "Speech structure & narrative arc",
      "Rhythm/cadence notes",
      "Delivery polish & formatting",
    ],
    starting: "$250 - $600",
  },
];

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -left-28 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-phoenixFire/25 blur-3xl opacity-70 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suite - Author & Ghostwriting
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Author & Ghostwriting Studio
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Books, cookbooks, launch flows, and ongoing content engines. A mix of
            clinical clarity and creative storytelling so every word feels human
            and intentional.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm tracking-[0.35em] text-starlight uppercase">
              Author & Writing Services
            </p>
            <p className="text-moonlightSilver">
              Whether it's a book, cookbook, or ongoing content engine, this
              suite is for founders and clinicians who want a strategic writing
              partner.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <article
                key={offering.title}
                className="rounded-3xl border border-deepOcean/60 bg-gradient-to-b from-deepOcean/70 via-midnight/80 to-midnight/95 p-6 text-moonlightSilver shadow-xl shadow-black/40 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h2 className="text-xl font-semibold text-pearlWhite">
                  {offering.title}
                </h2>
                <ul className="mt-4 space-y-2 text-xs">
                  {offering.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mermaidTeal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold text-lunarGold">
                  Starting at {offering.starting}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-deepOcean/60 bg-nightNavy/70 px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Sample Projects (Coming Soon)
          </p>
          <p className="text-moonlightSilver">
            Cookbook collabs, memoir chapters, launch newsletters, and
            ghostwritten sites will drop here soon. Until then, request private
            samples.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-deepOcean/60 bg-gradient-to-r from-deepOcean/70 via-midnight/80 to-midnight/95 px-6 py-10 text-center shadow-xl shadow-black/40">
          <h3 className="text-2xl font-semibold">
            Ready to bring a book or writing project to life?
          </h3>
          <p className="mt-3 text-moonlightSilver">
            Share outlines, messy drafts, or even voice notes. We'll craft a plan
            that honors your voice.
          </p>
          <a
            href="/contact?service=author-ghostwriting"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
          >
            Talk about a writing project
          </a>
        </div>
      </section>
    </main>
  );
}
