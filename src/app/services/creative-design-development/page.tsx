import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Design & Development - Branding & Websites | Moonlit Studios",
  description:
    "Premium creative services for founders, authors, and studios. Branding & identity ($1,800), custom websites ($3,500+), packaging design ($2,200+), and visual direction. Built with storytelling at the core.",
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
      "Branding, websites, and visual direction. From $1,800. Built by a published author who understands storytelling.",
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
      "Branding, custom websites, packaging. Creative services from $1,800.",
    images: ["/og-image.png"],
  },
};

const offerings = [
  {
    title: "Branding & Identity",
    tagline: "Rooted visual systems for your brand or studio.",
    includes: [
      "Full logo suite & alternates",
      "Brand color palette + typography",
      "Visual identity system & mood boards",
      "Style guide PDF",
    ],
    starting: "$1,800 - $4,500",
  },
  {
    title: "Web Development",
    tagline: "Custom responsive sites ready for launch and growth.",
    includes: [
      "3-7 page custom site",
      "Responsive + SEO-friendly structure",
      "Blog or portfolio buildouts",
      "Launch & deployment support",
    ],
    starting: "$3,000 - $8,500",
  },
  {
    title: "Packaging & Product Design",
    tagline: "Shelf-ready packaging and product visuals.",
    includes: [
      "Label & packaging layout",
      "Mockups + ingredient formatting",
      "Print-ready files",
    ],
    starting: "$800 - $2,000",
  },
  {
    title: "Creative Copywriting",
    tagline: "Voice-aligned copy across sites, products, and launches.",
    includes: [
      "Website copy & brand story",
      "Product descriptions + social captions",
      "Newsletter copy + scripts",
    ],
    starting: "$250 - $600",
  },
];

export default function CreativeDesignDevelopmentPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-deepOcean/40 blur-3xl opacity-70 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suite - Creative
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Creative Design & Development
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Visual and digital identity for founders and small businesses.
            Branding, packaging, web, and creative direction under one roof so
            your story stays cohesive from concept to launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm tracking-[0.35em] text-starlight uppercase">
              Offerings
            </p>
            <p className="text-moonlightSilver">
              Mix and match deliverables or run the full suite together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <article
                key={offering.title}
                className="rounded-3xl border border-deepOcean/60 bg-gradient-to-b from-deepOcean/70 via-midnight/80 to-midnight/95 p-6 text-moonlightSilver shadow-xl shadow-black/40 backdrop-blur animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h2 className="text-xl font-semibold text-pearlWhite">
                  {offering.title}
                </h2>
                <p className="mt-2 text-sm">{offering.tagline}</p>
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
            This is where I'll showcase real builds and case studies. For now,
            browse the broader portfolio to see related work.
          </p>
          <a
            href="/portfolio"
            className="mx-auto inline-flex items-center justify-center rounded-full border border-mermaidTeal/70 px-6 py-3 text-sm font-semibold text-mermaidTeal transition-colors hover:bg-mermaidTeal hover:text-midnight"
          >
            View portfolio
          </a>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-deepOcean/60 bg-gradient-to-r from-phoenixFire/30 via-lunarGold/20 to-mermaidTeal/20 px-6 py-10 text-center shadow-xl shadow-black/40">
          <h3 className="text-2xl font-semibold text-pearlWhite">
            Ready to build your brand or site?
          </h3>
          <p className="mt-3 text-moonlightSilver">
            Bring your notes, Pinterest boards, and sketches. I'll turn it into
            a cohesive brand system and live experience.
          </p>
          <a
            href="/contact?service=creative-design-development"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
          >
            Request a project quote
          </a>
        </div>
      </section>
    </main>
  );
}
