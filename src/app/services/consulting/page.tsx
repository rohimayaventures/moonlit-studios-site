const offerings = [
  {
    title: "HealthTech Product Strategy",
    includes: [
      "Product roadmaps & safety patterns",
      "Risk reduction + clinical validation",
      "Go-to-market + pilot planning",
    ],
    starting: "$125/hr or $900 retainer",
  },
  {
    title: "UX for Clinicians",
    includes: [
      "UX review & adoption improvements",
      "Workflow alignment + load reduction",
      "Interface tweaks clinicians actually want",
    ],
    starting: "$100/hr or $750 audit",
  },
  {
    title: "Digital Brand Strategy",
    includes: [
      "Brand positioning + messaging frameworks",
      "Platform roadmaps",
      "Cross-platform consistency planning",
    ],
    starting: "$800-$2,000 packages",
  },
  {
    title: "Workshops",
    includes: [
      "Creative writing intensives",
      "AI + creativity bootcamps",
      "Healthtech UX clinics",
      "Product accelerators",
    ],
    starting: "2hr $600 · Half-day $1,200+",
  },
  {
    title: "Portfolio / Startup Coaching",
    includes: [
      "Portfolio refinement + storytelling",
      "Pitch deck review",
      "Career positioning sessions",
    ],
    starting: "Single $150 · 4 sessions $500",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute -right-28 -bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-peacockTeal/30 to-phoenixFire/25 blur-3xl opacity-70 animate-floatSlow" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.35em] text-starlight uppercase">
            Service Suite · Consulting
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Consulting & Strategic Support
          </h1>
          <p className="text-moonlightSilver md:text-lg">
            Product thinking, UX, and clinical operations insight in one studio.
            Perfect for founders, clinical teams, or creatives who need an
            outside brain to evaluate, refine, or accelerate what they're
            building.
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
              Book hourly consults, retainers, or a workshop—whatever keeps your
              build moving.
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
                  {offering.starting}
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
            I'll highlight specific strategy and workshop outcomes here soon.
            Until then, reach out with your context and we'll tailor the
            engagement.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-deepOcean/60 bg-gradient-to-r from-deepOcean/70 via-midnight/80 to-midnight/95 px-6 py-10 text-center shadow-xl shadow-black/40">
          <h3 className="text-2xl font-semibold">Need a thinking partner?</h3>
          <p className="mt-3 text-moonlightSilver">
            Book a consult to map next steps, surface blind spots, and get an
            action plan you can run with immediately.
          </p>
          <a
            href="/contact?service=consulting"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40"
          >
            Book a consult
          </a>
        </div>
      </section>
    </main>
  );
}
