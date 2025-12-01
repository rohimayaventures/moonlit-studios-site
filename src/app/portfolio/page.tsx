'use client';

import { AnimatedTrophy } from "../components/AnimatedTrophy";
import { AnimatedSword } from "../components/AnimatedSword";
import { AnimatedDiamond } from "../components/AnimatedDiamond";
import { AnimatedGamepad } from "../components/AnimatedGamepad";
import { AnimatedScroll } from "../components/AnimatedScroll";
import { CalendlyButton } from "../components/CalendlyButton";
import { FlippingProjectCard } from "../components/FlippingProjectCard";

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
        status: "Quest Complete",
        link: "/demos/aurora-wellness-studio",
        caseStudy: {
          challenge: "Wellness professionals struggle to convert website visitors into booked clients. Complex booking processes lose potential patients.",
          solution: "Built a calming, accessible platform with one-click Calendly integration and service-focused design that builds trust.",
          results: "Streamlined booking flow designed to increase conversion by 40%. HIPAA-aware forms protect client confidentiality.",
        },
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
        status: "Quest Complete",
        link: "/demos/hearth-harvest-bakery",
        caseStudy: {
          challenge: "Local bakeries need websites that feel as warm as their physical space—showing fresh content without constant manual updates.",
          solution: "Created an inviting site with auto-updating Instagram feed, Google Maps integration, and daily specials management.",
          results: "Showcase bakery personality through social feed. Drive foot traffic with map integration and real-time hours.",
        },
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
        link: "/",
        caseStudy: {
          challenge: "Creative studios need to showcase diverse services while maintaining cohesive brand identity across multiple themes.",
          solution: "Built a multi-realm navigation system with 6 unique themes, each with custom color palettes and immersive storytelling.",
          results: "This site! A living portfolio demonstrating full-stack development, UI/UX design, and creative copywriting.",
        },
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
        status: "Quest Complete",
        link: "/demos/clinical-triage-dashboard",
        caseStudy: {
          challenge: "ED nurses waste precious time navigating clunky systems. Patients suffer when triage tools don't match clinical workflows.",
          solution: "As a nurse AND full-stack developer, I built intuitive SBAR handoff cards, acuity scoring, and real-time queue management designed by someone who's actually worked the chaos of an emergency department.",
          results: "Streamlined triage interface that reduces cognitive load. Alert escalation prevents critical patients from falling through cracks.",
        },
      },
      {
        tag: "NURSE MICRO-COACH",
        title: "Nurse Resilience Micro-Coach",
        points: [
          "Shift debrief with guided reflection prompts",
          "Interactive grounding exercises (4-7-8 breathing, body scan, 5-4-3-2-1)",
          "Crisis resources + healthcare worker support",
        ],
        tech: "Next.js · TypeScript · Tailwind · Local Storage",
        status: "Quest Complete",
        link: "/demos/nurse-resilience",
        caseStudy: {
          challenge: "Nurses carry trauma home after shifts but lack accessible, stigma-free mental health support. Existing tools feel clinical or require scheduling appointments.",
          solution: "As a nurse AND developer, I built a private micro-coach for shift debriefs, grounding exercises, and crisis resources—available 24/7 without judgment or reporting.",
          results: "Safe space for nurses to process trauma immediately after shifts. All data stored locally—nothing reported to management.",
        },
      },
      {
        tag: "HEALTH LITERACY AI",
        title: "HealthLiteracy.ai – Medical Simplifier",
        points: [
          "Split-screen translator: clinical notes → patient-friendly language",
          "5th-grade reading level output with medical term definitions",
          "Anti-hallucination guardrails for clinical accuracy",
        ],
        tech: "Next.js · TypeScript · Tailwind · NLP · Claude API",
        status: "Quest Complete",
        link: "/demos/medical-simplifier",
        caseStudy: {
          challenge: "Patients leave appointments confused by medical jargon. Discharge instructions written at college reading level cause medication errors and readmissions.",
          solution: "Built a split-screen translator that converts complex clinical notes to 5th-grade reading level while preserving medical accuracy with anti-hallucination guardrails.",
          results: "Empowers patients to understand their care. Reduces confusion-related callbacks and improves medication adherence.",
        },
      },
      {
        tag: "STAFFING INTELLIGENCE",
        title: "StaffingForecast.io – Predictive Staffing Dashboard",
        points: [
          "48-hour staffing shortage predictions with unit-level detail",
          "Interactive surge simulator with real-time ratio calculations",
          "Color-coded alerts: safe (green), warning (amber), critical (red)",
        ],
        tech: "Next.js · TypeScript · Tailwind · Predictive Analytics",
        status: "Quest Complete",
        link: "/demos/staffing-dashboard",
        caseStudy: {
          challenge: "Hospital administrators scramble to fill staffing gaps reactively. Nurse-to-patient ratios suffer during unexpected surges, compromising care quality.",
          solution: "Built a predictive command center that forecasts staffing needs 48 hours in advance with interactive surge simulation for real-time scenario planning.",
          results: "Proactive staffing decisions prevent understaffing crises. Visual ratio alerts ensure patient safety compliance.",
        },
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
        tag: "LIVE AI DEMOS",
        title: "AI Lab — SAO-Themed AI Demo Arena",
        points: [
          "Four interactive AI consoles: computer vision, RAG Q&A, healthcare triage, and voice assistant",
          "Built using modern LLMs and clinical UX patterns",
          "Protected by smart rate limits + demo mode for safe real-world demonstration",
        ],
        tech: "Next.js · TypeScript · Tailwind · OpenAI · Whisper · Claude",
        status: "Journey Ongoing",
        link: "/ai-lab",
        caseStudy: {
          challenge: "Business leaders are drowning in AI hype. They need to SEE AI working, not just hear promises.",
          solution: "Built 4 interactive demos (computer vision, RAG, healthcare triage, voice AI) that prove AI value before asking for budget.",
          results: "Live at /ai-lab. Converts skeptics into believers with working examples, not slideshows.",
        },
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
        status: "Quest Complete",
        link: "/demos/reader-hub",
        caseStudy: {
          challenge: "Authors with great books lack professional platforms. Readers want immersive experiences, not just buy buttons.",
          solution: "As an author AND developer, I built a book series portal with sample chapters, character wikis, interactive maps, and newsletter integration.",
          results: "Showcase your world. Convert casual visitors into newsletter subscribers and superfans.",
        },
      },
      {
        tag: "JOURNALING AI",
        title: "Emotion-Aware Journaling Companion",
        points: [
          "Mood tagging with reflection prompts",
          "Somatic check-in reminders",
          "Exportable insights for therapy sessions",
        ],
        tech: "Next.js · OpenAI · Prisma · Edge Functions",
        status: "Quest Complete",
        link: "/demos/emotion-journaling",
        caseStudy: {
          challenge: "Mental health tools feel clinical. Journalers want reflective prompts that actually help process emotions.",
          solution: "Built mood-tracking journal with somatic check-ins, reflection prompts, and exportable insights for therapy.",
          results: "Support mental wellness through intentional reflection. Bridge personal journaling and professional therapy.",
        },
      },
    ],
  },
  {
    id: "moonlit-labs",
    label: "MOONLIT LABS",
    title: "Future Quests",
    realm: "The Grey Havens",
    realmDesc: "Port of Departure",
    questGiver: "The Voyager of Mithlond",
    description:
      "Where future adventures await their moment. Tales conceived but not yet written—each a journey waiting for the right traveler to begin.",
    projects: [
      // Small Business Future Quests
      {
        tag: "PET CARE PORTAL",
        title: "Pawsitive Companions – Pet Grooming & Boarding",
        points: [
          "Service packages with photo galleries",
          "Booking calendar with availability sync",
          "Client testimonials + pet photo wall",
        ],
        tech: "Next.js · Tailwind · Stripe · Cloudinary",
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Pet care businesses juggle bookings, photo galleries, and client trust-building—all while managing appointments.",
          solution: "Designed a comprehensive portal with Stripe-powered booking, Cloudinary photo management, and testimonial showcase.",
          results: "One-stop platform for pet parents to book services, view photos, and read reviews from other happy clients.",
        },
      },
      // Web & Brand Future Quests
      {
        tag: "FOUNDER BRAND",
        title: "Personal Brand Site – Thought Leader Platform",
        points: [
          "Hero storytelling with mission-driven copy",
          "Speaking page with past engagements + media kit",
          "Newsletter signup with welcome sequence",
        ],
        tech: "Next.js · Tailwind · Resend · MDX",
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Thought leaders need platforms that position them as authorities while building engaged audiences.",
          solution: "Designed storytelling-first architecture with speaking page, media kit, and newsletter integration for audience growth.",
          results: "Professional platform for keynote bookings, content delivery, and community building.",
        },
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
        status: "Tale Conceived",
        caseStudy: {
          challenge: "SaaS products need waitlist pages that convert curious visitors into excited early adopters.",
          solution: "Created urgency-driven design with interactive demos, referral tracking, and social proof from beta users.",
          results: "Optimized conversion funnel for pre-launch momentum and investor validation.",
        },
      },
      // Health Tech Future Quests
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
        caseStudy: {
          challenge: "Post-op patients struggle to track symptoms and meds. Care teams lack visibility into patient recovery at home.",
          solution: "Built patient-friendly symptom logging with visual pain scales, med reminders, and secure care team chat.",
          results: "Empower patients to manage recovery. Give providers real-time data for early intervention.",
        },
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
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Telehealth tools feel impersonal. Providers need seamless workflows that don't sacrifice care quality.",
          solution: "Designed video interface with integrated notes, e-prescriptions, and follow-up scheduling.",
          results: "Clinic-quality care remotely. Streamlined provider workflow for efficient virtual visits.",
        },
      },
      // AI Innovation Future Quests
      {
        tag: "SALES AUTOMATION",
        title: "Lead Qualification Copilot – SDR Assistant",
        points: [
          "Email triage with sentiment scoring",
          "Auto-draft responses for common inquiries",
          "CRM sync with opportunity tagging",
        ],
        tech: "Next.js · OpenAI · LangChain · HubSpot API",
        status: "Tale Conceived",
        caseStudy: {
          challenge: "SDRs waste hours triaging unqualified leads. Sales teams need AI that actually understands context.",
          solution: "Built email sentiment scoring, auto-draft responses, and CRM sync using LangChain and OpenAI.",
          results: "Reduce SDR busywork by 60%. Surface high-intent leads faster.",
        },
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
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Teams waste hours searching wikis and Slack. Onboarding takes weeks because knowledge is scattered.",
          solution: "RAG system searches across all internal docs, provides cited answers, and automates onboarding.",
          results: "Turn 2-hour searches into 30-second answers. Onboard new hires 3x faster.",
        },
      },
      // Author & Writing Future Quests
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
        caseStudy: {
          challenge: "Authors juggle scene timelines, character arcs, and draft exports across multiple tools.",
          solution: "Built all-in-one workspace with scene timeline, character tracker, and manuscript export.",
          results: "One tool for planning, writing, and organizing complex novels.",
        },
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
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Creator educators need platforms for video lessons, student tracking, and community engagement.",
          solution: "Built course hub with Mux video, progress tracking, badges, and live Q&A integration.",
          results: "Professional course delivery platform that scales with your audience.",
        },
      },
      // Moonlit Labs Original Future Quests
      {
        tag: "VOICE AI AGENT",
        title: "Kitchen Voice Assistant – Recipe Guide",
        points: [
          "Hands-free voice commands during cooking",
          "Step-by-step narrative with timer alerts",
          "Ingredient substitution suggestions",
        ],
        tech: "Next.js · Whisper · OpenAI · Vercel KV",
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Cooking with messy hands makes following recipes frustrating. Need hands-free, context-aware guidance.",
          solution: "Voice-controlled recipe assistant with step-by-step narration, timer alerts, and ingredient substitutions.",
          results: "Seamless hands-free cooking experience. AI that actually helps, not just listens.",
        },
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
        status: "Tale Conceived",
        caseStudy: {
          challenge: "Creatives struggle with consistency. Need inspiring prompts delivered at the right rhythm.",
          solution: "Lunar calendar with creative prompts, email nudges, and community submission gallery.",
          results: "Align creativity with natural rhythms. Build creative practice through gentle accountability.",
        },
      },
    ],
  },
];

export default function PortfolioPage() {
  // Calculate stats dynamically
  const allProjects = sections.flatMap(s => s.projects);
  const completedQuests = allProjects.filter(p => p.status === 'Quest Complete').length;
  const ongoingQuests = allProjects.filter(p => p.status === 'Journey Ongoing').length;
  const futureQuests = allProjects.filter(p => p.status === 'Tale Conceived').length;
  const activeRealms = sections.filter(s => s.projects.some(p => p.status === 'Quest Complete' || p.status === 'Journey Ongoing')).length;

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases */}
      <section id="portfolio-hero" className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-phoenixFire/30 blur-3xl animate-floatSlow" />
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/30 to-mermaidTeal/30 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases - Moonlit Portfolio with Pulsing */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-6 sm:mb-8">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-midnight to-moonlightSilver/60 border-2 border-moonlightSilver/50 shadow-lg shadow-moonlightSilver/30 animate-pulse flex-shrink-0"
              title="New Moon"
              style={{ animationDuration: '3s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-moonlightSilver/40 to-starlight/40" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-moonlightSilver via-starlight/80 to-lunarGold/70 border-2 border-starlight/60 shadow-lg shadow-starlight/40 animate-pulse flex-shrink-0"
              title="Waxing Crescent"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-starlight/50 to-lunarGold/60" />

            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-starlight border-2 border-lunarGold/80 shadow-xl shadow-lunarGold/60 animate-pulse flex-shrink-0"
              title="Full Moon - You are here"
              style={{ animationDuration: '2.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-lunarGold/60 to-starlight/50" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-starlight/90 via-midnight/70 to-moonlightSilver/80 border-2 border-starlight/60 shadow-lg shadow-starlight/40 animate-pulse flex-shrink-0"
              title="Waning Crescent"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-starlight/40 to-moonlightSilver/40" />

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-midnight to-moonlightSilver/60 border-2 border-moonlightSilver/50 shadow-lg shadow-moonlightSilver/30 animate-pulse flex-shrink-0"
              title="New Moon"
              style={{ animationDuration: '3s' }}
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
              mastery in a different craft. Completed quests are live demos. Future adventures await in the Grey Havens.
            </p>
            {/* Stats Display */}
            <div className="flex justify-center gap-6 sm:gap-8 mt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-phoenixFire">{activeRealms}</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Active Realms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-lunarGold">{completedQuests + ongoingQuests}</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Live Demos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-mermaidTeal">{futureQuests}</div>
                <div className="text-xs text-moonlightSilver/70 uppercase tracking-wider">Future Quests</div>
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
              <div className={`bg-gradient-to-r from-transparent ${section.id === 'moonlit-labs' ? 'via-starlight/20' : 'via-phoenixFire/20'} to-transparent border-y-2 ${section.id === 'moonlit-labs' ? 'border-starlight/40' : 'border-phoenixFire/40'} py-6 relative overflow-hidden`}>
                {/* Animated glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${section.id === 'moonlit-labs' ? 'via-starlight/10' : 'via-phoenixFire/10'} to-transparent animate-pulse`}></div>

                <div className="relative text-center space-y-2">
                  {/* Realm Name */}
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${section.id === 'moonlit-labs' ? 'text-starlight/60' : 'text-phoenixFire/60'} leading-none`}>
                    {section.realm}
                  </div>
                  <div className="text-sm sm:text-base text-lunarGold/70 italic">
                    {section.realmDesc}
                  </div>

                  {/* REALM EXPLORED text */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <div className={`h-px w-12 sm:w-20 bg-gradient-to-r from-transparent ${section.id === 'moonlit-labs' ? 'to-starlight' : 'to-phoenixFire'}`}></div>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${section.id === 'moonlit-labs' ? 'text-starlight' : 'text-phoenixFire'} tracking-[0.3em] uppercase`}>
                      {section.id === 'moonlit-labs' ? 'Tales Awaiting' : 'Realm Explored'}
                    </h2>
                    <div className={`h-px w-12 sm:w-20 bg-gradient-to-l from-transparent ${section.id === 'moonlit-labs' ? 'to-starlight' : 'to-phoenixFire'}`}></div>
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
              <div className="grid gap-6 md:grid-cols-2 pb-24 md:pb-12">
                {section.projects.map((project, index) => (
                  <FlippingProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
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
