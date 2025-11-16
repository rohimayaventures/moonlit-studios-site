'use client';

import { AnimatedTrophy } from "../components/AnimatedTrophy";
import { AnimatedSword } from "../components/AnimatedSword";
import { AnimatedDiamond } from "../components/AnimatedDiamond";
import { AnimatedGamepad } from "../components/AnimatedGamepad";
import { AnimatedScroll } from "../components/AnimatedScroll";
import { AnimatedLightning } from "../components/AnimatedLightning";
import { CalendlyButton } from "../components/CalendlyButton";

const sections = [
  {
    id: "web-brand",
    label: "WEB & BRAND DESIGN",
    title: "Web & Brand Design",
    realm: "The Shire",
    realmDesc: "Where Journeys Begin",
    questGiver: "The Storyteller of Hobbiton",
    description:
      "Like Bag End welcoming travelers, brands and sites that feel like home—crafted with care, rooted in story, ready for adventure.",
    projects: [
      {
        tag: "STUDIO SITE / MARKETING",
        title: "Moonlit Studios - Creative Tech Studio",
        points: [
          "Service overview with narrative sections",
          "Lead capture + contact flow",
          "Modular layout for future services",
        ],
        tech: "Next.js · TypeScript · Tailwind · Sanity-ready",
        status: "Journey Ongoing",
      },
      {
        tag: "AUTHOR PORTAL",
        title: "Author Portal - Phoenix & Peacock Chronicles",
        points: [
          "Series landing, book summaries, and newsletter opt-ins",
          "Bonus content vault for readers",
          "Light CMS structure for ongoing drops",
        ],
        tech: "Next.js · Tailwind · MDX · Email API",
        status: "Tale Conceived",
      },
      {
        tag: "PRODUCT CAMPAIGN",
        title: "Product Brand Landing Page",
        points: [
          "Single-page story arc with CTA stack",
          "Testimonials + feature highlights",
          "Launch-ready assets + analytics hooks",
        ],
        tech: "Next.js · Tailwind · Vercel · Analytics",
        status: "Ready to Depart",
      },
    ],
  },
  {
    id: "health-tech",
    label: "HEALTH x TECH & CLINICAL UX",
    title: "Health x Tech & Clinical UX",
    realm: "Rivendell",
    realmDesc: "House of Healing",
    questGiver: "The Healer of Imladris",
    description:
      "As Elrond's house mends the weary, healthcare platforms built with clinical precision and healing intent. Wisdom meeting innovation.",
    projects: [
      {
        tag: "AI PLATFORM / HEALTHCARE",
        title: "Rohimaya Health AI - Concept Platform",
        points: [
          "Multi-module dashboards with risk scoring",
          "Operational messaging + escalation views",
          "Safety-aligned workflow guidance",
        ],
        tech: "Next.js · TypeScript · Tailwind · API-first",
        status: "Tale Conceived",
      },
      {
        tag: "SHIFT HANDOFF",
        title: "Clinical Shift Handoff Board",
        points: [
          "SBAR digital cards with high-risk flags",
          "Team chat + escalation actions",
          "Printable summary + audit log",
        ],
        tech: "Next.js · Node · FHIR-ready · Auth layer",
        status: "First Draft",
      },
      {
        tag: "PATIENT UX",
        title: "Patient Recovery Companion",
        points: [
          "Symptom tracking + education flows",
          "Medication reminders + visuals",
          "Care team messaging + check-ins",
        ],
        tech: "Next.js · Tailwind · React Query · Notifications",
        status: "Tale Conceived",
      },
    ],
  },
  {
    id: "ai-innovation",
    label: "AI INNOVATION",
    title: "AI Innovation",
    realm: "Lothlórien",
    realmDesc: "Forest of Vision",
    questGiver: "The Seer of the Golden Wood",
    description:
      "Like Galadriel's mirror revealing what might be, AI that sees patterns invisible to mortal eyes. Innovation blessed with foresight.",
    projects: [
      {
        tag: "VOICE + CHAT AI",
        title: "StorySpoon AI - Cooking Companion",
        points: [
          "Voice + chat guidance through recipes",
          "Narrative storytelling layered over steps",
          "Adaptive prompts based on pantry data",
        ],
        tech: "Next.js · OpenAI API · Vercel KV · Whisper",
        status: "Journey Ongoing",
      },
      {
        tag: "CLINICAL COPILOT",
        title: "Clinical Copilot",
        points: [
          "Chart summaries + risk reminders",
          "Protocol lookups with citations",
          "Escalation suggestions for nurses",
        ],
        tech: "Next.js · LangChain · Vector DB · Azure OpenAI",
        status: "Tale Conceived",
      },
      {
        tag: "FOUNDER AUTOMATION",
        title: "Founder's Studio Copilot",
        points: [
          "Content drafts + launch planning",
          "Website copy suggestions",
          "Roadmap and backlog notes",
        ],
        tech: "Next.js · Supabase · OpenAI · Airtable",
        status: "First Draft",
      },
    ],
  },
  {
    id: "author-writing",
    label: "AUTHOR & WRITING",
    title: "Author & Writing",
    realm: "Gondor",
    realmDesc: "City of Kings",
    questGiver: "The Loremaster of Minas Tirith",
    description:
      "As the libraries of Gondor preserve ancient lore, stories and words that build legacies. Every tale a kingdom waiting to rise.",
    projects: [
      {
        tag: "NOVEL WORLD",
        title: "Phoenix & Peacock Novel Development",
        points: [
          "Character + timeline planning UI",
          "Lore bible + artifact tracker",
          "Draft handoff workflows",
        ],
        tech: "Next.js · Tailwind · Supabase · Notion API",
        status: "Tale Conceived",
      },
      {
        tag: "COOKBOOK / STORY",
        title: "Cookbook + Story Hybrid Concept",
        points: [
          "Narrative-first recipe layout",
          "Reader journey with playlists + letters",
          "Interactive shopping + prep notes",
        ],
        tech: "Next.js · MDX · Tailwind · Animation API",
        status: "Journey Ongoing",
      },
      {
        tag: "NEWSLETTER ENGINE",
        title: "Newsletter Engine for Founders",
        points: [
          "Cadence + theme planning dashboard",
          "Draft + review workflow",
          "Publishing + analytics overview",
        ],
        tech: "Next.js · Resend · Supabase · Server Actions",
        status: "First Draft",
      },
    ],
  },
  {
    id: "moonlit-labs",
    label: "MOONLIT LABS",
    title: "Moonlit Labs",
    realm: "The Grey Havens",
    realmDesc: "Port of Departure",
    questGiver: "The Voyager of Mithlond",
    description:
      "Where experiments depart for unexplored lands. Labs where the next great journey begins, blessed by moonlight and possibility.",
    projects: [
      {
        tag: "JOURNALING AI",
        title: "Emotion-aware Journaling Companion",
        points: [
          "Mood tagging + reflection prompts",
          "Somatic check-in reminders",
          "Exportable insights for therapy",
        ],
        tech: "Next.js · OpenAI · Prisma · Edge Functions",
        status: "Experimental Voyage",
      },
      {
        tag: "NURSE MICRO-COACH",
        title: "Nurse Resilience Micro-Coach",
        points: [
          "Shift recap + grounding exercises",
          "Voice note reflections",
          "Resource library w/ consent prompts",
        ],
        tech: "Next.js · Twilio · Pinecone · Node",
        status: "Experimental Voyage",
      },
      {
        tag: "CREATIVE PROMPTS",
        title: "Moon Phase Writing Prompts",
        points: [
          "Lunar-inspired prompt calendar",
          "Audio + text delivery",
          "Community submission hooks",
        ],
        tech: "Next.js · Tailwind · CRON Jobs · Email API",
        status: "Experimental Voyage",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases */}
      <section id="portfolio-hero" className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-phoenixFire/30 blur-3xl animate-floatSlow" />
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/30 to-mermaidTeal/30 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
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

          <div className="text-center space-y-4 sm:space-y-6 px-4">
            {/* Chronicle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-phoenixFire/20 to-lunarGold/20 border border-phoenixFire/40">
              <AnimatedTrophy className="w-6 h-6" />
              <p className="text-xs sm:text-sm tracking-[0.35em] text-phoenixFire uppercase font-semibold">
                Chronicle of Legends
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Quests completed. Realms explored. Legends forged.
            </h1>
            <p className="text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto">
              Every project is a legendary quest—from brand journeys in the Shire to AI visions in Lothlórien. Each realm represents
              mastery in a different craft. Some are complete tales, others are ongoing voyages from the Grey Havens.
            </p>
            {/* Stats Display */}
            <div className="flex justify-center gap-6 sm:gap-8 mt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-phoenixFire">5</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Realms Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-lunarGold">15+</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Quests Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-mermaidTeal">∞</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Tales Written</div>
              </div>
            </div>

            {/* Primary CTA - Start Your Quest */}
            <div className="pt-6 fade-in-up">
              <CalendlyButton
                url="https://calendly.com/pagadeventures/30min"
                text="Begin Your Quest"
                variant="secondary"
              />
              <p className="text-xs text-moonlightSilver/60 mt-3">
                Ready to write your own legend? Let's map the journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`border-t border-deepOcean/50 px-6 py-16 relative overflow-hidden ${
            sectionIndex % 2 === 0 ? "bg-midnight" : "bg-nightNavy/60"
          }`}
        >
          {/* LOTR-Style REALM EXPLORED Banner */}
          <div className="mx-auto max-w-6xl mb-12">
            <div className="relative">
              {/* Main Realm Banner */}
              <div className="bg-gradient-to-r from-transparent via-phoenixFire/20 to-transparent border-y-2 border-phoenixFire/40 py-6 relative overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-phoenixFire/10 to-transparent animate-pulse"></div>

                <div className="relative text-center space-y-2">
                  {/* Realm Name */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-phoenixFire/60 leading-none">
                    {section.realm}
                  </div>
                  <div className="text-sm sm:text-base text-lunarGold/70 italic">
                    {section.realmDesc}
                  </div>

                  {/* REALM EXPLORED text */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-phoenixFire"></div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-phoenixFire tracking-[0.3em] uppercase">
                      Realm Explored
                    </h2>
                    <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-phoenixFire"></div>
                  </div>

                  {/* Quest Giver */}
                  <p className="text-base sm:text-lg text-lunarGold font-semibold">
                    Quest Giver: <span className="text-pearlWhite">{section.questGiver}</span>
                  </p>
                </div>
              </div>

              {/* Realm Info */}
              <div className="mt-6 space-y-3 text-center">
                <p className="text-sm tracking-[0.35em] text-starlight uppercase">
                  {section.label}
                </p>
                <h3 className="text-2xl font-semibold md:text-3xl text-pearlWhite">
                  {section.title}
                </h3>
                <p className="text-moonlightSilver max-w-3xl mx-auto">{section.description}</p>
              </div>
            </div>
          </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-2">
                {section.projects.map((project, index) => (
                  <article
                    key={project.title}
                    className="relative rounded-2xl border-2 border-phoenixFire/30 bg-gradient-to-br from-[#1a0a0a]/95 via-midnight/98 to-deepOcean/95 p-6 text-moonlightSilver shadow-2xl shadow-black/60 backdrop-blur transition-all hover:border-phoenixFire/60 hover:shadow-phoenixFire/20 hover:-translate-y-1 animate-fadeInUp group"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    {/* Quest Complete Badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-phoenixFire/90 to-lunarGold/80 border border-phoenixFire text-xs font-bold text-midnight shadow-lg flex items-center gap-1">
                      <AnimatedSword className="w-3 h-3" />
                      <span>COMPLETED</span>
                    </div>

                    {/* Project Tag */}
                    <p className="text-xs tracking-[0.25em] text-phoenixFire/70 uppercase font-semibold">
                      {project.tag}
                    </p>

                    {/* Project Title */}
                    <h3 className="mt-2 text-xl font-bold text-pearlWhite group-hover:text-phoenixFire transition-colors">
                      {project.title}
                    </h3>

                    {/* Journey Milestones */}
                    <ul className="mt-4 space-y-2 text-sm">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-2 items-start">
                          <svg className="mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4AF37"/>
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats Section - LOTR Style */}
                    <div className="mt-6 p-4 rounded-xl bg-phoenixFire/10 border border-phoenixFire/20 space-y-3">
                      {/* Tech Stack */}
                      <div>
                        <p className="text-[0.65rem] tracking-wider text-phoenixFire/70 uppercase font-semibold mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L10 10M6 6V2M6 6H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="17" cy="17" r="5" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 2L10 8L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Tools of the Trade</span>
                        </p>
                        <p className="text-sm font-semibold text-pearlWhite">
                          {project.tech}
                        </p>
                      </div>

                      {/* Status with Journey Progress */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-[0.65rem] tracking-wider text-lunarGold/70 uppercase font-semibold flex items-center gap-1">
                            <AnimatedLightning className="w-3 h-3" />
                            <span>Journey Status</span>
                          </p>
                          <p className="text-sm font-bold text-lunarGold">
                            {project.status}
                          </p>
                        </div>
                        {/* Progress bar based on status */}
                        <div className="h-2 bg-deepOcean/60 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              project.status === "Journey Ongoing"
                                ? "bg-gradient-to-r from-lunarGold to-phoenixFire w-3/4 animate-pulse"
                                : project.status === "Tale Conceived" || project.status === "Experimental Voyage"
                                ? "bg-gradient-to-r from-mermaidTeal to-tealBright w-1/4"
                                : project.status === "First Draft"
                                ? "bg-gradient-to-r from-lunarGold to-sunsetPink w-1/2"
                                : project.status === "Ready to Depart"
                                ? "bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire w-2/3"
                                : "bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire w-full"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Honor Earned */}
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-moonlightSilver/70 flex items-center gap-1">
                        <AnimatedDiamond className="w-3 h-3" />
                        <span>Honor Earned:</span>
                      </span>
                      <span className="font-bold text-mermaidTeal">
                        {project.status === "Journey Ongoing" || project.status === "Legend Complete"
                          ? "+1000 Honor"
                          : project.status === "First Draft"
                          ? "+500 Honor"
                          : "+250 Honor"}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
        </section>
      ))}

      <section className="border-t border-deepOcean/60 bg-nightNavy/80 px-6 py-16 relative overflow-hidden">
        {/* Background achievements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute left-10 top-10">
            <AnimatedTrophy className="w-24 h-24" />
          </div>
          <div className="absolute right-10 bottom-10">
            <AnimatedSword className="w-24 h-24" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <AnimatedDiamond className="w-32 h-32" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <div className="inline-flex justify-center mb-2">
            <AnimatedGamepad className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-semibold text-pearlWhite">
            Ready to begin your own legendary quest?
          </h2>
          <p className="text-moonlightSilver max-w-2xl mx-auto">
            Every project is a journey through uncharted realms. Whether you seek a brand forged in the Shire,
            healing platforms from Rivendell, or AI visions from Lothlórien—let's map your path to legend.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Book Discovery Call"
              variant="secondary"
            />
            <a
              href="/contact?topic=portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mermaidTeal/70 px-8 py-3 text-sm font-semibold text-mermaidTeal transition-all hover:bg-mermaidTeal hover:text-midnight hover:border-mermaidTeal group"
            >
              <span>Send a Message</span>
              <span className="group-hover:rotate-12 transition-transform inline-block w-4 h-4">
                <AnimatedScroll className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
