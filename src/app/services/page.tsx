'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value;
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases */}
      <section className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/60 via-lunarGold/40 to-mermaidTeal/60 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-tealBright/30 to-transparent blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 transition-all cursor-pointer flex-shrink-0"
              title="Waxing Crescent"
            />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-starlight border-2 border-lunarGold/70 hover:border-lunarGold transition-all cursor-pointer shadow-lg shadow-lunarGold/30 flex-shrink-0"
              title="Full Moon - You are here"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 transition-all cursor-pointer flex-shrink-0"
              title="Waning Crescent"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="text-center space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase">
              Service Suites
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-4">
              Choose the build that fits where you are.
            </h1>
            <p className="text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto px-4">
              Moonlit Studios is led by a nurse-turned full-stack developer and
              creative technologist. These five suites let you pick the mix of
              branding, product, AI, or storytelling support that fits your current
              season.
            </p>

            {/* Service Dropdown Navigation */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full appearance-none rounded-2xl bg-gradient-to-r from-mermaidTeal/10 to-lunarGold/10 border-2 border-mermaidTeal/50 px-6 py-4 pr-12 text-base text-pearlWhite cursor-pointer hover:border-mermaidTeal transition-all focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal"
                >
                  <option value="" className="bg-midnight text-pearlWhite">Select a service to explore...</option>
                  {suites.map((suite) => (
                    <option key={suite.href} value={suite.href} className="bg-midnight text-pearlWhite">
                      {suite.name} — Starting at {suite.starting}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mermaidTeal pointer-events-none" />
              </div>
              <p className="text-xs text-moonlightSilver/70 mt-2">Or scroll down to browse all suites</p>
            </div>
          </div>
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
                <div className="mt-4 inline-flex flex-col gap-1">
                  <span className="text-xs text-moonlightSilver/70">Starting at</span>
                  <span className="text-2xl font-bold text-lunarGold">{suite.starting}</span>
                </div>
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
