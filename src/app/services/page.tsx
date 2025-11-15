'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedPalette } from '../components/AnimatedPalette';
import { AnimatedMedical } from '../components/AnimatedMedical';
import { AnimatedWizard } from '../components/AnimatedWizard';
import { AnimatedLightning } from '../components/AnimatedLightning';
import { AnimatedBook } from '../components/AnimatedBook';
import { AnimatedScroll } from '../components/AnimatedScroll';
import { AnimatedSword } from '../components/AnimatedSword';
import { AnimatedDiamond } from '../components/AnimatedDiamond';

const suites = [
  {
    name: "Creative Design & Development",
    questTitle: "The Branding Quest",
    difficulty: 2, // ⭐⭐ Warrior
    description:
      "Branding, websites, and visual direction for founders, authors, and small studios.",
    includes: [
      "Branding & identity systems",
      "Custom web + UI builds",
      "Packaging & product visuals",
      "Creative visual direction",
    ],
    rewards: [
      "Professional brand identity",
      "Custom-built web presence",
      "Client-ready marketing assets",
    ],
    starting: "$1,800+",
    href: "/services/creative-design-development",
    color: "coralPink",
  },
  {
    name: "Health x Tech Development",
    questTitle: "The Healer's Code",
    difficulty: 3, // ⭐⭐⭐ Master
    description:
      "Clinical-grade UX and interfaces designed by a nurse who understands workflows.",
    includes: [
      "HIPAA-aligned UI and flows",
      "Nurse-to-nurse platforms",
      "Health data dashboards",
    ],
    rewards: [
      "HIPAA-compliant platform",
      "Clinical workflow mastery",
      "Healthcare-grade security",
    ],
    starting: "$10,000+",
    href: "/services/health-tech-development",
    color: "mermaidTeal",
  },
  {
    name: "Consulting",
    questTitle: "The Strategy Session",
    difficulty: 1, // ⭐ Novice
    description:
      "Strategy, audits, and workshops at the intersection of healthcare, UX, and product.",
    includes: [
      "Healthtech product strategy",
      "UX for clinician workflows",
      "Creative/portfolio coaching",
    ],
    rewards: [
      "Clear product roadmap",
      "Expert guidance",
      "Actionable insights",
    ],
    starting: "$250/hr",
    href: "/services/consulting",
    color: "starlight",
  },
  {
    name: "AI Innovation Suite",
    questTitle: "The AI Architect",
    difficulty: 3, // ⭐⭐⭐ Master
    description:
      "Applied AI systems, copilots, and creative engines that actually ship.",
    includes: [
      "AI product architecture",
      "Conversational & voice AI",
      "Moonlit Labs experiments",
    ],
    rewards: [
      "Intelligent automation",
      "Custom AI copilot",
      "Competitive advantage",
    ],
    starting: "$12,000+",
    href: "/services/ai-innovation",
    color: "lunarGold",
  },
  {
    name: "Author & Ghostwriting Studio",
    questTitle: "The Storyteller's Scroll",
    difficulty: 2, // ⭐⭐ Warrior
    description:
      "Author platforms, books, cookbooks, and ongoing written content done in your voice.",
    includes: [
      "Book & cookbook ghostwriting",
      "Blogs + newsletters",
      "Brand stories & about pages",
      "Speeches & launch flows",
      "Author websites + reader magnets",
    ],
    rewards: [
      "Published work in your voice",
      "Author platform presence",
      "Reader engagement system",
    ],
    starting: "$250+",
    href: "/services/ghostwriting",
    color: "roseGold",
  },
];

// Helper function to get quest icon component
const getQuestIcon = (suiteName: string, className?: string) => {
  switch (suiteName) {
    case "Creative Design & Development":
      return <AnimatedPalette className={className} />;
    case "Health x Tech Development":
      return <AnimatedMedical className={className} />;
    case "Consulting":
      return <AnimatedWizard className={className} />;
    case "AI Innovation Suite":
      return <AnimatedLightning className={className} />;
    case "Author & Ghostwriting Studio":
      return <AnimatedBook className={className} />;
    default:
      return <AnimatedScroll className={className} />;
  }
};

// Helper function to render difficulty stars
const getDifficultyStars = (difficulty: number) => {
  const stars = [];
  for (let i = 0; i < 3; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i < difficulty ? "opacity-100" : "opacity-20"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4AF37"/>
      </svg>
    );
  }
  return stars;
};

// Get difficulty label
const getDifficultyLabel = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "NOVICE";
    case 2:
      return "WARRIOR";
    case 3:
      return "MASTER";
    default:
      return "QUEST";
  }
};

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
            {/* Quest Board Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 border border-lunarGold/40">
              <AnimatedScroll className="w-6 h-6" />
              <p className="text-xs sm:text-sm tracking-[0.35em] text-lunarGold uppercase font-semibold">
                Quest Board
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-4">
              Choose your quest. Begin your journey.
            </h1>
            <p className="text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto px-4">
              Every great adventure starts with accepting the right quest. Led by a nurse-turned-developer,
              these five service quests offer different paths—each with its own challenges, rewards, and transformations.
              Which quest calls to you?
            </p>

            {/* Service Dropdown Navigation */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full appearance-none rounded-2xl bg-gradient-to-r from-deepOcean/80 via-midnight/90 to-deepOcean/80 border-2 border-mermaidTeal/50 px-6 py-4 pr-12 text-base text-pearlWhite cursor-pointer hover:border-mermaidTeal hover:bg-gradient-to-r hover:from-deepOcean hover:to-midnight transition-all focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal backdrop-blur-sm"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>Select a service to explore...</option>
                  {suites.map((suite) => (
                    <option key={suite.href} value={suite.href} style={{ backgroundColor: '#0A1128', color: '#FAFAFA' }}>
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
          {/* Quest Board Header */}
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-2">
              <AnimatedSword className="w-5 h-5" />
              <p className="text-sm tracking-[0.35em] text-starlight uppercase">
                Available Quests
              </p>
              <AnimatedSword className="w-5 h-5" />
            </div>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Each quest scales to your resources and timeline. Accept one to begin your transformation.
            </p>
          </div>

          {/* Quest Cards - Parchment Style */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {suites.map((suite, index) => (
              <article
                key={suite.name}
                className="relative rounded-2xl border-2 border-lunarGold/30 bg-gradient-to-br from-[#2a2520]/95 via-[#1a1510]/98 to-midnight/95 p-6 text-moonlightSilver shadow-2xl shadow-black/60 transition-all hover:border-lunarGold/70 hover:shadow-lunarGold/20 hover:-translate-y-1 animate-fadeInUp backdrop-blur-sm"
                style={{
                  animationDelay: `${(index + 1) * 0.1}s`,
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix values=\'0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.03 0\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")'
                }}
              >
                {/* Quest Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-lunarGold/40 to-phoenixFire/30 border-2 border-lunarGold/60 flex items-center justify-center shadow-lg backdrop-blur">
                  {getQuestIcon(suite.name, "w-7 h-7")}
                </div>

                {/* Difficulty Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-sm">
                    {getDifficultyStars(suite.difficulty)}
                  </div>
                  <span className="text-[0.65rem] tracking-[0.2em] text-lunarGold/70 font-semibold">
                    {getDifficultyLabel(suite.difficulty)}
                  </span>
                </div>

                {/* Quest Title */}
                <h2 className="text-xl font-bold text-pearlWhite mb-1 font-serif">
                  {suite.questTitle}
                </h2>
                <h3 className="text-sm text-lunarGold/80 mb-3">
                  {suite.name}
                </h3>

                {/* Quest Description */}
                <p className="mt-2 text-sm leading-relaxed">{suite.description}</p>

                {/* Quest Objectives */}
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-lunarGold/70 uppercase tracking-wider font-semibold">Quest Objectives:</p>
                  <ul className="space-y-1.5 text-xs">
                    {suite.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <svg className="mt-1 w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0L14 9L23 9L16 14L19 23L12 18L5 23L8 14L1 9L10 9L12 0Z" fill="#D4AF37"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rewards */}
                <div className="mt-4 p-3 rounded-xl bg-lunarGold/10 border border-lunarGold/20">
                  <p className="text-xs text-lunarGold/70 uppercase tracking-wider font-semibold mb-2">Quest Rewards:</p>
                  <ul className="space-y-1 text-xs">
                    {suite.rewards.map((reward) => (
                      <li key={reward} className="flex gap-2 items-start">
                        <span className="inline-block w-4 h-4">
                          <AnimatedDiamond className="w-4 h-4" />
                        </span>
                        <span className="text-pearlWhite">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gold Cost */}
                <div className="mt-4 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="url(#coinGold)" stroke="#D4AF37" strokeWidth="2"/>
                    <text x="12" y="16" fontSize="12" fill="#654321" textAnchor="middle" fontWeight="bold">$</text>
                    <defs>
                      <linearGradient id="coinGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFD700' }} />
                        <stop offset="100%" style={{ stopColor: '#D4AF37' }} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-moonlightSilver/70">Quest Fee</span>
                    <span className="text-xl font-bold text-lunarGold">{suite.starting}</span>
                  </div>
                </div>

                {/* Accept Quest Button */}
                <a
                  href={suite.href}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lunarGold/90 to-phoenixFire/80 px-6 py-3 text-sm font-bold text-midnight transition-all hover:from-lunarGold hover:to-phoenixFire hover:shadow-lg hover:shadow-lunarGold/40 hover:-translate-y-0.5 group"
                >
                  <span>Accept Quest</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block w-4 h-4">
                    <AnimatedSword className="w-4 h-4" />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-deepOcean/60 bg-nightNavy/70 relative overflow-hidden">
        {/* Background quest scroll */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute left-10 top-10">
            <AnimatedScroll className="w-24 h-24" />
          </div>
          <div className="absolute right-10 bottom-10">
            <AnimatedSword className="w-24 h-24" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-center">
          <div className="inline-flex justify-center mb-2">
            <AnimatedWizard className="w-16 h-16" />
          </div>
          <h3 className="text-2xl font-semibold text-pearlWhite mb-2">
            Need help choosing your quest?
          </h3>
          <p className="text-sm text-moonlightSilver max-w-2xl mx-auto">
            Not all who wander are lost, but sometimes a guide helps. Let's talk through which quest fits your timeline, resources, and vision.
          </p>
          <a
            href="/contact?topic=services"
            className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-mermaidTeal/70 px-8 py-3 text-sm font-semibold text-mermaidTeal transition-all hover:bg-mermaidTeal hover:text-midnight hover:border-mermaidTeal hover:shadow-lg hover:shadow-mermaidTeal/40 group"
          >
            <span>Consult the Guide</span>
            <span className="group-hover:rotate-12 transition-transform inline-block">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.5"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
