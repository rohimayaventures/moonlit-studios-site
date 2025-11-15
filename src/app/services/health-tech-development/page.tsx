import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health x Tech Development - HIPAA-Compliant Clinical Systems | Moonlit Studios",
  description:
    "Clinical-grade UX and healthcare tech built by a nurse with 15+ years experience. HIPAA-aligned platforms (starting at $4,500), clinical workflow tools, patient portals, and telemedicine interfaces. Where clinical expertise meets cutting-edge development.",
  keywords: [
    "healthcare app development",
    "HIPAA compliant development",
    "clinical workflow software",
    "patient portal development",
    "healthcare UX design",
    "FHIR integration",
    "clinical app design",
    "healthcare tech consulting",
    "nurse developer",
    "EHR integration",
    "telemedicine development",
    "healthcare SAAS development"
  ],
  openGraph: {
    title: "Health x Tech Development | Moonlit Studios",
    description:
      "HIPAA-compliant clinical systems starting at $4,500. Built by a nurse with 15+ years healthcare operations. Clinical flows, patient portals, workflow tools.",
    type: "website",
    url: "https://moonlstudios.com/services/health-tech-development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Health x Tech Development Services - Moonlit Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health x Tech Development | Moonlit Studios",
    description:
      "HIPAA-compliant healthcare tech starting at $4,500. Built by a nurse who codes.",
    images: ["/og-image.png"],
  },
};

const offerings = [
  {
    title: "Healthcare Platform",
    tier: "Essential",
    tagline: "Basic HIPAA-compliant healthcare application.",
    includes: [
      "3-5 core features",
      "Basic HIPAA compliance (encryption, audit logs)",
      "User authentication",
      "Simple dashboard",
      "1 user role",
      "1 month post-launch support",
    ],
    starting: "$4,500",
    popular: false,
  },
  {
    title: "Healthcare Platform",
    tier: "Professional",
    tagline: "Full-featured HIPAA-compliant application.",
    includes: [
      "5-10 features",
      "Full HIPAA compliance (BAA, encryption, audit logs)",
      "Multi-role user system (admin, provider, patient)",
      "Advanced workflows",
      "Data visualization/reporting",
      "Integration with 1 third-party system",
      "2 months post-launch support",
    ],
    starting: "$8,500",
    popular: true,
  },
  {
    title: "Healthcare Platform",
    tier: "Premium",
    tagline: "Enterprise-grade clinical system.",
    includes: [
      "Complex clinical workflows (triage, care coordination)",
      "Multi-facility support",
      "Advanced data analytics",
      "EHR/EMR integration",
      "Custom API development",
      "Regulatory documentation package",
      "3 months post-launch support + training",
    ],
    starting: "$15,000",
    popular: false,
  },
  {
    title: "Clinical Dashboard",
    tier: "Basic",
    tagline: "Real-time clinical operations monitoring.",
    includes: [
      "Census tracking",
      "Alert system",
      "Basic metrics & KPIs",
      "Staff directory",
      "Shift handoff tools",
    ],
    starting: "$3,500",
    popular: false,
  },
  {
    title: "Clinical Dashboard",
    tier: "Advanced",
    tagline: "Data-driven clinical intelligence platform.",
    includes: [
      "Real-time data feeds",
      "Custom charts & visualizations",
      "Predictive analytics",
      "Quality metrics tracking",
      "Automated reporting",
    ],
    starting: "$6,500",
    popular: true,
  },
  {
    title: "Patient Portal",
    tier: "Essential",
    tagline: "Secure patient engagement platform.",
    includes: [
      "Secure messaging with providers",
      "Appointment scheduling",
      "Medical records access",
      "Prescription refills",
      "Educational resources",
    ],
    starting: "$4,000",
    popular: false,
  },
  {
    title: "Patient Portal",
    tier: "Professional",
    tagline: "Comprehensive patient experience.",
    includes: [
      "Everything in Essential, PLUS:",
      "Lab results & imaging",
      "Payment processing",
      "Visit summaries",
      "Health tracking tools",
      "Insurance verification",
    ],
    starting: "$7,500",
    popular: true,
  },
  {
    title: "Telemedicine Platform",
    tier: "Basic",
    tagline: "Virtual care essentials.",
    includes: [
      "Video call integration",
      "Appointment scheduling",
      "Clinical notes",
      "Patient intake forms",
      "Basic billing",
    ],
    starting: "$6,000",
    popular: false,
  },
  {
    title: "Telemedicine Platform",
    tier: "Advanced",
    tagline: "Full-service virtual care platform.",
    includes: [
      "Everything in Basic, PLUS:",
      "E-prescribing integration",
      "Insurance verification",
      "Waiting room experience",
      "Provider scheduling",
      "Analytics & reporting",
    ],
    starting: "$12,000",
    popular: true,
  },
];

export default function HealthTechDevelopmentPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases & Aqua Theme */}
      <section className="relative overflow-hidden px-6 py-12 sm:py-16 md:py-20">
        {/* Aurora Background Orbs - Aqua/Teal Theme */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-aquaMist/50 via-seafoamGreen/40 to-turquoiseBreeze/45 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-tealBright/35 to-aquaMist/30 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-aquaMist/30 to-seafoamGreen/60 border-2 border-aquaMist/50 hover:border-seafoamGreen/80 transition-all cursor-pointer flex-shrink-0"
              title="Waxing Crescent"
            />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-mermaidTeal via-aquaMist to-seafoamGreen border-2 border-mermaidTeal/70 hover:border-mermaidTeal transition-all cursor-pointer shadow-lg shadow-mermaidTeal/30 flex-shrink-0"
              title="Full Moon - Health x Tech"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-turquoiseBreeze/30 to-tealBright/60 border-2 border-turquoiseBreeze/50 hover:border-tealBright/80 transition-all cursor-pointer flex-shrink-0"
              title="Waning Crescent"
            />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="text-center space-y-4 sm:space-y-6 px-4">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-aquaMist uppercase">Service Suite - HealthTech</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Health x Tech Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto">
              Clinical-grade UX and interfaces designed by a nurse who understands workflows.
              HIPAA-aligned builds for healthcare startups, practices, and medical organizations—where 15+ years of clinical operations meets cutting-edge development.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-starlight">
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 text-mermaidTeal border border-mermaidTeal/40">HIPAA Compliant</span>
              <span className="px-3 py-1 rounded-full bg-aquaMist/20 text-aquaMist border border-aquaMist/40">Clinical Workflows</span>
              <span className="px-3 py-1 rounded-full bg-seafoamGreen/20 text-seafoamGreen border border-seafoamGreen/40">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE A NURSE DEVELOPER */}
      <section className="px-6 py-12 bg-gradient-to-b from-mermaidTeal/5 via-midnight to-midnight">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-aquaMist/30 bg-gradient-to-br from-mermaidTeal/10 via-aquaMist/5 to-transparent p-8 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mermaidTeal to-aquaMist flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-pearlWhite">Why This Costs More (And Why It's Worth It)</h3>
                <ul className="space-y-2 text-sm text-moonlightSilver">
                  <li className="flex gap-2">
                    <span className="text-aquaMist">✓</span>
                    <span><strong>HIPAA Compliance:</strong> Security, encryption, audit logs built-in from day one</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-aquaMist">✓</span>
                    <span><strong>Clinical Domain Expertise:</strong> 15+ years in healthcare operations, not just coding</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-aquaMist">✓</span>
                    <span><strong>Clinician-Designed Workflows:</strong> Reduces training time, increases adoption</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-aquaMist">✓</span>
                    <span><strong>Regulatory Knowledge:</strong> PHI handling, consent flows, documentation standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS GRID */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm tracking-[0.35em] text-mermaidTeal uppercase">
              Tiered Pricing
            </p>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              From MVP to enterprise. Each tier designed for different stages of healthcare innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <article
                key={`${offering.title}-${offering.tier}`}
                className={`
                  relative rounded-3xl border p-6 text-moonlightSilver shadow-xl backdrop-blur transition-all duration-300
                  ${offering.popular
                    ? 'border-mermaidTeal/70 bg-gradient-to-b from-mermaidTeal/10 via-aquaMist/5 to-midnight shadow-mermaidTeal/20 hover:shadow-mermaidTeal/40 hover:-translate-y-1'
                    : 'border-aquaMist/40 bg-gradient-to-b from-aquaMist/5 via-midnight/80 to-midnight/95 hover:border-tealBright/60 hover:shadow-aquaMist/20'
                  }
                  animate-fadeInUp
                `}
                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
              >
                {offering.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-mermaidTeal to-aquaMist text-xs font-bold text-midnight shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-aquaMist/20 flex items-center justify-center border border-mermaidTeal/50">
                      <span className="text-mermaidTeal text-xs font-bold">{offering.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-pearlWhite">
                        {offering.title}
                      </h2>
                      <p className="text-xs text-aquaMist">{offering.tier}</p>
                    </div>
                  </div>
                  <p className="text-sm">{offering.tagline}</p>
                </div>

                <ul className="mt-4 space-y-2 text-xs">
                  {offering.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mermaidTeal flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-aquaMist/30">
                  <div className="text-center">
                    <p className="text-xs text-moonlightSilver/70">Starting at</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-mermaidTeal via-aquaMist to-seafoamGreen bg-clip-text text-transparent">
                      {offering.starting}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      <section className="px-6 py-12 bg-nightNavy/50">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-aquaMist uppercase mb-3">Add-Ons Available</p>
            <p className="text-moonlightSilver">Enhance your healthcare platform with these additional features.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-mermaidTeal/30 bg-gradient-to-br from-mermaidTeal/5 to-transparent p-4">
              <h3 className="font-semibold text-pearlWhite mb-2">Telemedicine Features</h3>
              <p className="text-sm text-moonlightSilver mb-2">Video calls, virtual waiting room, e-visit notes</p>
              <p className="text-lg font-bold text-aquaMist">+$3,000</p>
            </div>
            <div className="rounded-2xl border border-mermaidTeal/30 bg-gradient-to-br from-mermaidTeal/5 to-transparent p-4">
              <h3 className="font-semibold text-pearlWhite mb-2">E-Prescribing Integration</h3>
              <p className="text-sm text-moonlightSilver mb-2">Connect to pharmacy networks, medication history</p>
              <p className="text-lg font-bold text-aquaMist">+$4,000</p>
            </div>
            <div className="rounded-2xl border border-mermaidTeal/30 bg-gradient-to-br from-mermaidTeal/5 to-transparent p-4">
              <h3 className="font-semibold text-pearlWhite mb-2">EHR Integration</h3>
              <p className="text-sm text-moonlightSilver mb-2">Epic, Cerner, or custom EHR connectivity</p>
              <p className="text-lg font-bold text-aquaMist">+$2,500</p>
            </div>
            <div className="rounded-2xl border border-mermaidTeal/30 bg-gradient-to-br from-mermaidTeal/5 to-transparent p-4">
              <h3 className="font-semibold text-pearlWhite mb-2">HIPAA Security Audit</h3>
              <p className="text-sm text-moonlightSilver mb-2">Comprehensive security review & documentation</p>
              <p className="text-lg font-bold text-aquaMist">+$1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-mermaidTeal/30 bg-gradient-to-br from-mermaidTeal/20 via-aquaMist/10 to-seafoamGreen/20 px-6 py-12 text-center shadow-2xl shadow-mermaidTeal/20 backdrop-blur">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-mermaidTeal via-aquaMist to-seafoamGreen mx-auto shadow-lg shadow-mermaidTeal/40 animate-pulseGlow">
              <svg className="w-10 h-10 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-pearlWhite">
              Ready to build healthcare tech that actually works?
            </h3>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Let's talk about your clinical workflows, compliance needs, and user pain points. I'll design a system that clinicians actually want to use.
            </p>
            <a
              href="/contact?service=health-tech-development"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-mermaidTeal via-aquaMist to-tealBright px-8 py-4 text-sm font-bold text-midnight shadow-xl shadow-mermaidTeal/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-aquaMist/60 btn-water"
            >
              Request a Project Quote →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
