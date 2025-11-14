const offerings = [
  {
    title: "AI Product Architecture",
    includes: [
      "Product design across backend + frontend",
      "API integrations + model routing",
      "Data pipelines + auth/safety layers",
    ],
    starting: "$2,500",
  },
  {
    title: "Conversational & Voice AI",
    includes: [
      "Chatbots & multimodal experiences",
      "Voice UX + cooking/education agents",
      "Role-based assistants",
    ],
    starting: "$1,200",
  },
  {
    title: "AI Creative Systems",
    includes: [
      "Story pipelines + world-builders",
      "Interactive fiction + journaling AI",
      "Creative collaborators for authors",
    ],
    starting: "$1,200",
  },
  {
    title: "AI Systems Engineering & Integration",
    includes: [
      "Prompt engineering + orchestration",
      "Safety layers & hallucination reduction",
      "Evaluation + monitoring loops",
    ],
    starting: "$600",
  },
  {
    title: "Moonlit Labs (R&D)",
    includes: [
      "Rapid prototypes + weekend sprints",
      "Creative + clinical concept tests",
      "Emergent experiments for founders",
    ],
    starting: "$1,200",
  },
];

export default function AiInnovationPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/45 via-lunarGold/30 to-mermaidTeal/30 blur-3xl opacity-75 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suite · AI
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            AI Innovation Suite
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Applied AI work at the intersection of clinical empathy, creative
            storytelling, and technical engineering. We'll architect copilots,
            automations, and creative systems that actually make sense for your
            team.
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
              Prototype quickly, then grow thoughtfully with governance baked
              in.
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
            I'll drop Moonlit Lab write-ups and deployed copilots here soon. For
            now, ask for private demos or browse the main portfolio.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-deepOcean/60 bg-gradient-to-r from-phoenixFire/30 via-lunarGold/20 to-mermaidTeal/20 px-6 py-10 text-center shadow-xl shadow-black/40">
          <h3 className="text-2xl font-semibold">Ready to ship an AI idea?</h3>
          <p className="mt-3 text-moonlightSilver">
            We can start with a low-risk discovery sprint or go straight into
            building your copilot.
          </p>
          <a
            href="/contact?service=ai-innovation-suite"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
          >
            Start an AI project
          </a>
        </div>
      </section>
    </main>
  );
}
