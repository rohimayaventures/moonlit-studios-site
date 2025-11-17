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
    id: "small-business",
    label: "SMALL BUSINESS REALMS",
    title: "Small Business Launchpads",
    realm: "Bree",
    realmDesc: "Crossroads of Commerce",
    questGiver: "The Innkeeper of The Prancing Pony",
    description:
      "Where travelers meet and trade flourishes, local businesses find their digital home. From cozy cafés to healing sanctuaries—practical magic for the heart of commerce.",
    projects: [
      {
        tag: "LOCAL SERVICE WEBSITE",
        title: "Aurora Wellness Studio – Therapist & Coach Hub",
        points: [
          "Service pages with calming brand aesthetics",
          "Calendly integration for client bookings",
          "Contact forms with email notifications",
        ],
        tech: "Next.js · Tailwind · Calendly · Supabase Forms",
        status: "Legend Complete",
      },
      {
        tag: "CAFE & FOOD",
        title: "Hearth & Harvest Bakery – Artisan Cafe Site",
        points: [
          "Menu display with daily specials",
          "Location map + hours with Google integration",
          "Instagram feed embed for fresh content",
        ],
        tech: "Next.js · Tailwind · Google Maps API · Instagram API",
        status: "Legend Complete",
      },
      {
        tag: "PET CARE PORTAL",
        title: "Pawsitive Companions – Pet Grooming & Boarding",
        points: [
          "Service packages with photo galleries",
          "Booking calendar with availability sync",
          "Client testimonials + pet photo wall",
        ],
        tech: "Next.js · Tailwind · Stripe · Cloudinary",
        status: "Ready to Depart",
      },
    ],
  },
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
        tag: "STUDIO SITE",
        title: "Moonlit Studios – Creative Tech Studio Site",
        points: [
          "Multi-realm service navigation with theme switchers",
          "Lead capture with quote request flow",
          "Portfolio integration + testimonial display",
        ],
        tech: "Next.js · TypeScript · Tailwind · Supabase",
        status: "Journey Ongoing",
      },
      {
        tag: "FOUNDER BRAND",
        title: "Personal Brand Site – Thought Leader Platform",
        points: [
          "Hero storytelling with mission-driven copy",
          "Speaking page with past engagements + media kit",
          "Newsletter signup with welcome sequence",
        ],
        tech: "Next.js · Tailwind · Resend · MDX",
        status: "Ready to Depart",
      },
      {
        tag: "PRODUCT LAUNCH",
        title: "SaaS Product Launch Page – Waitlist Campaign",
        points: [
          "Feature showcase with interactive demos",
          "Early access signup with referral tracking",
          "Social proof section with beta testimonials",
        ],
        tech: "Next.js · Tailwind · Vercel · Posthog",
        status: "Legend Complete",
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
        tag: "NURSE DASHBOARD",
        title: "Clinical Triage Dashboard – ED Workflow System",
        points: [
          "Real-time patient queue with acuity scoring",
          "SBAR handoff cards with vital trends",
          "Alert escalation + team messaging",
        ],
        tech: "Next.js · TypeScript · Supabase · Pusher · FHIR",
        status: "First Draft",
      },
      {
        tag: "PATIENT PORTAL",
        title: "Recovery Companion – Post-Op Patient App",
        points: [
          "Symptom logging with visual pain scales",
          "Medication reminders with photo verification",
          "Care team chat + educational resources",
        ],
        tech: "Next.js · Tailwind · Supabase · Twilio",
        status: "Tale Conceived",
      },
      {
        tag: "TELEHEALTH UX",
        title: "Virtual Care Platform – Remote Consultation System",
        points: [
          "Video visit interface with notes sidebar",
          "E-prescription workflow with pharmacy integration",
          "Follow-up scheduling + secure messaging",
        ],
        tech: "Next.js · Agora SDK · Stripe · Supabase",
        status: "Ready to Depart",
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
        tag: "SALES AUTOMATION",
        title: "Lead Qualification Copilot – SDR Assistant",
        points: [
          "Email triage with sentiment scoring",
          "Auto-draft responses for common inquiries",
          "CRM sync with opportunity tagging",
        ],
        tech: "Next.js · OpenAI · LangChain · HubSpot API",
        status: "Journey Ongoing",
      },
      {
        tag: "VOICE AI AGENT",
        title: "Kitchen Voice Assistant – Recipe Guide",
        points: [
          "Hands-free voice commands during cooking",
          "Step-by-step narrative with timer alerts",
          "Ingredient substitution suggestions",
        ],
        tech: "Next.js · Whisper · OpenAI · Vercel KV",
        status: "Journey Ongoing",
      },
      {
        tag: "OPERATIONS RAG",
        title: "Internal Knowledge Assistant – Team Copilot",
        points: [
          "Document search across wikis + Slack history",
          "Context-aware answers with source citations",
          "Onboarding flow automation",
        ],
        tech: "Next.js · LangChain · Pinecone · Supabase",
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
        tag: "AUTHOR PLATFORM",
        title: "Reader Hub – Book Series Portal",
        points: [
          "Book landing pages with sample chapters",
          "Character wiki + interactive map",
          "Newsletter signup with bonus content vault",
        ],
        tech: "Next.js · MDX · Tailwind · Resend",
        status: "Ready to Depart",
      },
      {
        tag: "WRITING SYSTEM",
        title: "Novel Planning Workspace – Author Dashboard",
        points: [
          "Scene timeline with chapter organization",
          "Character profiles + relationship tracker",
          "Draft export to manuscript format",
        ],
        tech: "Next.js · Supabase · Notion API · TypeScript",
        status: "Tale Conceived",
      },
      {
        tag: "COURSE PLATFORM",
        title: "Writing Course Site – Creator Education Hub",
        points: [
          "Lesson modules with video + worksheets",
          "Student progress tracking + badges",
          "Community forum + live Q&A integration",
        ],
        tech: "Next.js · Supabase · Stripe · Mux Video",
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
        title: "Emotion-Aware Journaling Companion",
        points: [
          "Mood tagging with reflection prompts",
          "Somatic check-in reminders",
          "Exportable insights for therapy sessions",
        ],
        tech: "Next.js · OpenAI · Prisma · Edge Functions",
        status: "Experimental Voyage",
      },
      {
        tag: "NURSE MICRO-COACH",
        title: "Nurse Resilience Micro-Coach",
        points: [
          "Shift recap with grounding exercises",
          "Voice note reflections + transcription",
          "Resource library with consent prompts",
        ],
        tech: "Next.js · Twilio · Whisper · Pinecone",
        status: "Experimental Voyage",
      },
      {
        tag: "CREATIVE RITUAL",
        title: "Moon Phase Creative Prompts",
        points: [
          "Lunar-inspired prompt calendar",
          "Audio + text delivery with email nudges",
          "Community submission gallery",
        ],
        tech: "Next.js · Tailwind · CRON · Resend",
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
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Quests completed. Realms explored. Legends forged.
            </h1>
            <p className="font-serif text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto italic">
              Every project is a legendary quest—from brand journeys in the Shire to AI visions in Lothlórien. Each realm represents
              mastery in a different craft. Some are complete tales, others are ongoing voyages from the Grey Havens.
            </p>
            {/* Stats Display */}
            <div className="flex justify-center gap-6 sm:gap-8 mt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-phoenixFire">6</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Realms Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-lunarGold">18</div>
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
