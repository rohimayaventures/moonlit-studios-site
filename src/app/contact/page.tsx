"use client";

import React, { ReactNode, FormEvent } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
};

const FormField = ({ label, children }: FormFieldProps) => (
  <div className="space-y-1">
    <label className="block text-xs font-medium text-starlight uppercase tracking-[0.18em]">
      {label}
    </label>
    {children}
  </div>
);

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock submit – no backend yet
    // You can later swap this for a real action, API route, etc.
    alert("Thank you! This is a mock submit for now 🤍");
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite" id="contact-hero">
      <section className="relative overflow-hidden py-20">
        {/* floating orb */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/35 to-mermaidTeal/45 blur-3xl opacity-80 animate-floatSlow" />

        <div className="relative mx-auto max-w-3xl px-6 space-y-10">
          {/* Intro */}
          <header className="space-y-4 animate-fadeInUp">
            <p className="text-xs font-semibold tracking-[0.35em] text-starlight uppercase">
              LET&apos;S TALK
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Tell me what you&apos;re dreaming up.
            </h1>
            <p className="text-sm md:text-base text-moonlightSilver max-w-2xl">
              Share as much or as little as you&apos;d like about your project.
              I&apos;ll follow up with next steps, suggested timelines, and
              whether we&apos;re a good fit for each other.
            </p>
          </header>

          {/* Form card */}
          <section
            id="contact-form"
            className="rounded-3xl border border-deepOcean/60 bg-gradient-to-b from-deepOcean/70 via-midnight/80 to-midnight/95 p-6 md:p-8 shadow-xl shadow-black/40 backdrop-blur animate-fadeInUp"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  />
                </FormField>

                <FormField label="Email">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  />
                </FormField>
              </div>

              <FormField label="What are you looking for?">
                <select
                  name="serviceType"
                  className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Brand &amp; web foundations</option>
                  <option>Portfolio or launch site</option>
                  <option>AI development / automation</option>
                  <option>Ongoing support / retainer</option>
                  <option>Not sure yet</option>
                </select>
              </FormField>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Budget range">
                  <input
                    type="text"
                    name="budget"
                    placeholder="$2k–$5k, $5k–$10k, etc."
                    className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  />
                </FormField>

                <FormField label="Timeline">
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Ideal start date or window"
                    className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  />
                </FormField>
              </div>

              <FormField label="Project details">
                <textarea
                  name="details"
                  rows={5}
                  placeholder="Tell me about your project, your goals, and anything that would be helpful to know."
                  className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                />
              </FormField>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40 transition-transform transition-shadow animate-pulseGlow"
                >
                  Send Inquiry (mock)
                </button>

                <p className="text-xs text-moonlightSilver/80">
                  Not a form person? You can also reach out directly at{" "}
                  <span className="font-medium text-starlight">
                    hello@moonlstudios.com
                  </span>{" "}
                  or your preferred Moonlit Studios contact email.
                </p>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
