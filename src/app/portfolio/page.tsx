import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Selected Work | Moonlit Studios",
  description:
    "Explore healthcare tech platforms, AI-powered applications, creative brand designs, and full-stack web development projects. From HIPAA-compliant clinical systems to RAG chatbots and voice AI—see what The Nurse Who Codes builds.",
  keywords: [
    "web developer portfolio",
    "healthcare tech projects",
    "AI development portfolio",
    "full-stack developer work",
    "React Next.js projects",
    "HIPAA compliant applications",
    "RAG chatbot examples",
    "voice AI projects",
    "clinical workflow software",
    "healthcare UX portfolio",
    "TypeScript developer projects",
    "AI ML portfolio"
  ],
  openGraph: {
    title: "Portfolio - Selected Work | Moonlit Studios",
    description:
      "Healthcare tech, AI applications, creative brands, and full-stack web development. Case studies from The Nurse Who Codes—where clinical expertise meets cutting-edge tech.",
    type: "website",
    url: "https://moonlstudios.com/portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moonlit Studios Portfolio - Healthcare Tech & AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Selected Work | Moonlit Studios",
    description:
      "Healthcare platforms, AI apps, creative brands. Projects that heal, inspire, and transform.",
    images: ["/og-image.png"],
  },
};

const sections = [
  {
    id: "web-brand",
    label: "WEB & BRAND DESIGN",
    title: "Web & Brand Design",
    description:
      "Story-driven marketing sites, founder portfolios, and campaign microsites built with clarity and conversion in mind.",
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
        status: "In Progress",
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
        status: "Concept",
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
        status: "Template",
      },
    ],
  },
  {
    id: "health-tech",
    label: "HEALTH x TECH & CLINICAL UX",
    title: "Health x Tech & Clinical UX",
    description:
      "Clinical-grade UX concepts built by a nurse who understands workflows, safety, and documentation.",
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
        status: "Concept",
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
        status: "Prototype",
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
        status: "Concept",
      },
    ],
  },
  {
    id: "ai-innovation",
    label: "AI INNOVATION",
    title: "AI Innovation",
    description:
      "Copilots, applied AI products, and creative engines that blend clinical empathy with technical engineering.",
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
        status: "In Progress",
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
        status: "Concept",
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
        status: "Prototype",
      },
    ],
  },
  {
    id: "author-writing",
    label: "AUTHOR & WRITING",
    title: "Author & Writing",
    description:
      "Narrative systems and content engines for books, cookbooks, newsletters, and founder storytelling.",
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
        status: "Concept",
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
        status: "In Progress",
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
        status: "Prototype",
      },
    ],
  },
  {
    id: "moonlit-labs",
    label: "MOONLIT LABS",
    title: "Moonlit Labs",
    description:
      "Small experiments and R&D sprints exploring clinical empathy, creative writing, and AI.",
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
        status: "Lab",
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
        status: "Lab",
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
        status: "Lab",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section
        id="portfolio-hero"
        className="relative overflow-hidden px-6 py-20"
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-phoenixFire/30 blur-3xl opacity-70 animate-floatSlow" />
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/30 to-mermaidTeal/30 blur-3xl opacity-70 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Selected Work
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Brands, products, and ideas brought to life.
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Case studies and concept builds across healthcare, AI, web, and
            author experiences. Some are shipped, others live in the Moonlit Lab
            as explorations of how tech can feel more human.
          </p>
        </div>
      </section>

      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`border-t border-deepOcean/50 px-6 py-16 ${
            sectionIndex % 2 === 0 ? "bg-midnight" : "bg-nightNavy/60"
          }`}
        >
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="space-y-3">
              <p className="text-sm tracking-[0.35em] text-starlight uppercase">
                {section.label}
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {section.title}
              </h2>
              <p className="text-moonlightSilver">{section.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {section.projects.map((project, index) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-deepOcean/60 bg-gradient-to-b from-deepOcean/70 via-midnight/80 to-midnight/95 p-6 text-moonlightSilver shadow-xl shadow-black/40 backdrop-blur animate-fadeInUp"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <p className="text-xs tracking-[0.25em] text-starlight uppercase">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-pearlWhite">
                    {project.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mermaidTeal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-3 text-xs uppercase tracking-widest text-starlight/70">
                    <div>
                      <p className="text-[0.6rem]">Tech Stack</p>
                      <p className="mt-1 text-sm font-semibold text-moonlightSilver">
                        {project.tech}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.6rem]">Status</p>
                      <p className="mt-1 text-sm font-semibold text-lunarGold">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-deepOcean/60 bg-nightNavy/80 px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold">
            Want something like this for your brand or product?
          </h2>
          <p className="text-moonlightSilver">
            Every engagement is tailored around your workflows, resources, and
            voice. We'll co-create a plan that scales with you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact?topic=portfolio"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
            >
              Talk about a project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-mermaidTeal/70 px-8 py-3 text-sm font-semibold text-mermaidTeal transition-colors hover:bg-mermaidTeal hover:text-midnight"
            >
              See service suites
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
