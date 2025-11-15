"use client";

import React, { ReactNode, FormEvent, useState } from "react";

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

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      serviceType: formData.get("serviceType") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      details: formData.get("details") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      setStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();

      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 8000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite" id="contact-hero">
      {/* HERO SECTION with Moon Phases */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-phoenixFire/40 via-lunarGold/35 to-mermaidTeal/45 blur-3xl animate-floatSlow" />
          <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/40 via-tealBright/30 to-transparent blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
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

          <div className="text-center space-y-4 sm:space-y-6 px-4 mb-8 animate-fadeInUp">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase">Let's Connect</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Tell me what you're dreaming up.
            </h1>
            <p className="text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto">
              Share as much or as little as you'd like about your project.
              I'll follow up with next steps, suggested timelines, and
              whether we're a good fit for each other.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20">
        <div className="relative mx-auto max-w-3xl space-y-10">

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
                    required
                    className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                  />
                </FormField>

                <FormField label="Email">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
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
                  required
                  className="w-full rounded-2xl bg-nightNavy/80 border border-deepOcean/70 px-3 py-2 text-sm text-pearlWhite placeholder:text-silverMist focus:outline-none focus:ring-2 focus:ring-mermaidTeal/70 focus:border-mermaidTeal/70"
                />
              </FormField>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold px-8 py-3 text-sm font-semibold text-midnight shadow-lg shadow-phoenixFire/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lunarGold/40 transition-all disabled:opacity-50 disabled:cursor-not-wait disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>

                {/* Success Message with Water Ripple Effect */}
                {status === "success" && (
                  <div className="rounded-2xl bg-gradient-to-r from-mermaidTeal/20 to-peacockTeal/20 border border-mermaidTeal/50 p-4 animate-fadeInUp">
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-mermaidTeal"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-mermaidTeal">
                          🌙 Your inquiry has been sent!
                        </p>
                        <p className="text-xs text-moonlightSilver mt-1">
                          Check your email for confirmation. I'll respond within 24-48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="rounded-2xl bg-gradient-to-r from-phoenixFire/20 to-red-500/20 border border-phoenixFire/50 p-4 animate-fadeInUp">
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-phoenixFire"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-phoenixFire">
                          Oops! Something went wrong.
                        </p>
                        <p className="text-xs text-moonlightSilver mt-1">
                          {errorMessage || "Please try again or email hello@moonlstudios.com directly."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs text-moonlightSilver/80">
                  Not a form person? You can also reach out directly at{" "}
                  <a
                    href="mailto:hello@moonlstudios.com"
                    className="font-medium text-starlight hover:text-mermaidTeal transition-colors"
                  >
                    hello@moonlstudios.com
                  </a>
                </p>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
