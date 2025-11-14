const offerings = [
  {
    title: "HIPAA-Aligned App/UI Design",
    includes: [
      "Clinical flow mapping",
      "Safe UI patterns + SBAR screens",
      "FHIR-friendly architecture",
      "Audit logging patterns",
    ],
    starting: "$1,500",
  },
  {
    title: "Clinical Workflow Tools",
    includes: [
      "SBAR digital tools",
      "Handoff automation",
      "Assessment frameworks",
      "Red-flag logic dashboards",
    ],
    starting: "$1,800",
  },
  {
    title: "Nurse-to-Nurse Platform Builds",
    includes: [
      "Staff communication tools",
      "Patient tracking + shift handoffs",
      "Real nurse UX audits",
    ],
    starting: "$500",
  },
  {
    title: "Health Data Dashboards",
    includes: [
      "KPI and analytics dashboards",
      "Patient progress visualizations",
      "Executive-ready reporting",
    ],
    starting: "$1,000",
  },
  {
    title: "Patient-Facing Education Interfaces",
    includes: [
      "Symptom & discharge modules",
      "Medication flow explanations",
      "At-home guidance UX",
    ],
    starting: "$500",
  },
];

export default function HealthTechDevelopmentPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/30 to-mermaidTeal/30 blur-3xl opacity-70 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suite · Health · Tech
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Health x Tech Development
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Interfaces and tools built by a nurse-turned engineer who respects
            clinical workflows, safety, and documentation. HIPAA-aligned product
            thinking for healthtech founders, clinics, and teams.
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
              From prototypes to production tools, every build considers
              compliance and human factors.
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
            This space will feature clinical-grade dashboards, intake tools, and
            education flows once public. Until then, ask for private examples or
            browse the general portfolio.
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
        <div className="mx-auto max-w-4xl rounded-3xl border border-deepOcean/60 bg-gradient-to-r from-deepOcean/70 via-midnight/80 to-midnight/95 px-6 py-10 text-center shadow-xl shadow-black/40">
          <h3 className="text-2xl font-semibold">
            Need a clinical-grade product partner?
          </h3>
          <p className="mt-3 text-moonlightSilver">
            We'll scope around real workflows, data privacy, and adoption, then
            build accordingly.
          </p>
          <a
            href="/contact?service=health-tech-development"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
          >
            Discuss a healthtech project
          </a>
        </div>
      </section>
    </main>
  );
}
