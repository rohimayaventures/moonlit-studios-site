"use client";

import React, { ReactNode, FormEvent, useState } from "react";
import { AnimatedOwl } from "../components/AnimatedOwl";
import { AnimatedSword } from "../components/AnimatedSword";
import { AnimatedSpirit } from "../components/AnimatedSpirit";
import { AnimatedHorn } from "../components/AnimatedHorn";

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
type ThemeMode = "owlery" | "sao" | "atla" | "lotr";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [theme, setTheme] = useState<ThemeMode>("owlery");

  // Theme-aware input styling
  const inputStyle = {
    backgroundColor: 'var(--theme-surface)',
    borderWidth: '2px',
    borderColor: 'var(--theme-border)',
    transition: 'all 0.2s ease'
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--theme-primary)';
    e.target.style.boxShadow = `0 0 0 3px color-mix(in srgb, var(--theme-primary) 20%, transparent)`;
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--theme-border)';
    e.target.style.boxShadow = '0 0 0 0 transparent';
  };

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

  // Get theme icon component
  const getThemeIcon = (themeMode: ThemeMode, className?: string) => {
    switch (themeMode) {
      case "owlery":
        return <AnimatedOwl className={className} />;
      case "sao":
        return <AnimatedSword className={className} />;
      case "atla":
        return <AnimatedSpirit className={className} />;
      case "lotr":
        return <AnimatedHorn className={className} />;
      default:
        return <AnimatedOwl className={className} />;
    }
  };

  // Theme configurations
  const themeConfig = {
    owlery: {
      name: "The Owlery",
      title: "Send an Owl Post",
      subtitle: "Attach your message to a trusted owl and send it my way",
      buttonText: "Dispatch Owl",
      loadingText: "Owl in flight...",
      successTitle: "⚡ Owl successfully delivered!",
      successMessage: "Your message has arrived. Expect a reply by owl within 24-48 hours.",
      accentColor: "lunarGold",
      secondaryColor: "starlight",
    },
    sao: {
      name: "System Message",
      title: "Direct Message",
      subtitle: "Send a system message to initiate quest collaboration",
      buttonText: "Send Message",
      loadingText: "Transmitting...",
      successTitle: "✓ Message Sent Successfully",
      successMessage: "System notification sent. You'll receive a party invite within 24-48 hours.",
      accentColor: "mermaidTeal",
      secondaryColor: "tealBright",
    },
    atla: {
      name: "Spirit Portal",
      title: "Open Spirit Portal",
      subtitle: "Channel your message through the spirit world",
      buttonText: "Send Through Portal",
      loadingText: "Channeling energy...",
      successTitle: "🌟 Message transmitted!",
      successMessage: "Your energy has been received. Balance will be restored within 24-48 hours.",
      accentColor: "mermaidTeal",
      secondaryColor: "aquaMist",
    },
    lotr: {
      name: "Horn of Gondor",
      title: "Sound the Horn",
      subtitle: "Call for aid across Middle-earth",
      buttonText: "Sound the Horn",
      loadingText: "Horn echoing...",
      successTitle: "🎺 Gondor has heard!",
      successMessage: "Your call has been answered. Aid will arrive within 24-48 hours.",
      accentColor: "lunarGold",
      secondaryColor: "phoenixFire",
    },
  };

  const currentTheme = themeConfig[theme];

  return (
    <main className="min-h-screen text-pearlWhite" style={{ backgroundColor: 'var(--theme-background)' }}>
      {/* OWLERY HERO - Magical Night Sky */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        {/* Starry Night Background */}
        <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
          {/* Floating theme icons */}
          <div className="absolute left-1/4 top-20 opacity-20 animate-floatSlow">
            {getThemeIcon(theme, "w-16 h-16")}
          </div>
          <div className="absolute right-1/3 top-40 opacity-15 animate-floatSlow" style={{ animationDelay: '2s' }}>
            {getThemeIcon(theme, "w-14 h-14")}
          </div>
          <div className="absolute left-2/3 top-60 opacity-10 animate-floatSlow" style={{ animationDelay: '4s' }}>
            {getThemeIcon(theme, "w-12 h-12")}
          </div>

          {/* Magical orbs - now theme-compatible */}
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full blur-3xl animate-pulse" style={{ background: `radial-gradient(circle, var(--theme-primary), var(--theme-secondary), transparent)`, opacity: 0.3 }} />
          <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, var(--theme-secondary), var(--theme-primary), transparent)`, opacity: 0.2, animation: 'pulse 8s ease-in-out infinite 3s' }} />
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

          {/* Theme Switcher */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setTheme("owlery")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                theme === "owlery"
                  ? "bg-lunarGold text-midnight shadow-lg shadow-lunarGold/40"
                  : "bg-deepOcean/40 text-moonlightSilver hover:bg-deepOcean/60"
              }`}
              title="Harry Potter - Owlery"
            >
              <span className="inline-flex items-center gap-1">
                <AnimatedOwl className="w-4 h-4" />
                <span>Owlery</span>
              </span>
            </button>
            <button
              onClick={() => setTheme("sao")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                theme === "sao"
                  ? "bg-mermaidTeal text-midnight shadow-lg shadow-mermaidTeal/40"
                  : "bg-deepOcean/40 text-moonlightSilver hover:bg-deepOcean/60"
              }`}
              title="Sword Art Online"
            >
              <span className="inline-flex items-center gap-1">
                <AnimatedSword className="w-4 h-4" />
                <span>SAO</span>
              </span>
            </button>
            <button
              onClick={() => setTheme("atla")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                theme === "atla"
                  ? "bg-aquaMist text-midnight shadow-lg shadow-aquaMist/40"
                  : "bg-deepOcean/40 text-moonlightSilver hover:bg-deepOcean/60"
              }`}
              title="Avatar: The Last Airbender"
            >
              <span className="inline-flex items-center gap-1">
                <AnimatedSpirit className="w-4 h-4" />
                <span>ATLA</span>
              </span>
            </button>
            <button
              onClick={() => setTheme("lotr")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                theme === "lotr"
                  ? "bg-phoenixFire text-midnight shadow-lg shadow-phoenixFire/40"
                  : "bg-deepOcean/40 text-moonlightSilver hover:bg-deepOcean/60"
              }`}
              title="Lord of the Rings"
            >
              <span className="inline-flex items-center gap-1">
                <AnimatedHorn className="w-4 h-4" />
                <span>LOTR</span>
              </span>
            </button>
          </div>

          <div className="text-center space-y-4 sm:space-y-6 px-4 mb-8 animate-fadeInUp">
            <div className="inline-flex justify-center animate-pulse">
              {getThemeIcon(theme, "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28")}
            </div>
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase">{currentTheme.name}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              {currentTheme.title}
            </h1>
            <p className="text-base sm:text-lg text-moonlightSilver max-w-3xl mx-auto italic">
              {currentTheme.subtitle}
            </p>
            <p className="text-sm text-moonlightSilver/70 max-w-2xl mx-auto mt-4">
              Share as much or as little as you&apos;d like about your project.
              I&apos;ll follow up with next steps, suggested timelines, and
              whether we&apos;re a good fit for each other.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20">
        <div className="relative mx-auto max-w-3xl space-y-10">

          {/* Magical Scroll / Parchment Form */}
          <section
            className="rounded-3xl border-2 p-6 md:p-10 shadow-2xl backdrop-blur animate-fadeInUp relative overflow-hidden"
            style={{
              borderColor: 'var(--theme-border)',
              background: `linear-gradient(to bottom, var(--theme-surface), var(--theme-background))`,
              boxShadow: '0 25px 50px -12px var(--theme-border)'
            }}
          >
            {/* Parchment texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, var(--theme-primary), transparent)` }}></div>

            {/* Wax seal decoration - theme-compatible */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl animate-pulse" style={{ background: `linear-gradient(to bottom right, var(--theme-primary), var(--theme-secondary))` }}></div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Your Name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Wizard name..."
                    required
                    className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite placeholder:text-silverMist/60 focus:outline-none transition-all"
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </FormField>

                <FormField label="Owl Post Address (Email)">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@magical-realm.com"
                    required
                    className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite placeholder:text-silverMist/60 focus:outline-none transition-all"
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </FormField>
              </div>

              <FormField label="Type of Magic Needed">
                <select
                  name="serviceType"
                  className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite focus:outline-none transition-all"
                  defaultValue=""
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                >
                  <option value="" disabled>
                    Choose your quest...
                  </option>
                  <option>Brand & web foundations</option>
                  <option>Portfolio or launch site</option>
                  <option>AI development / automation</option>
                  <option>Healthcare tech solutions</option>
                  <option>Ongoing support / retainer</option>
                  <option>Not sure yet—let&apos;s explore</option>
                </select>
              </FormField>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Gold Coins Available (Budget)">
                  <input
                    type="text"
                    name="budget"
                    placeholder="e.g., $2k–$5k, $10k+"
                    className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite placeholder:text-silverMist/60 focus:outline-none transition-all"
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </FormField>

                <FormField label="When do you need this?">
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Ideal start date or window"
                    className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite placeholder:text-silverMist/60 focus:outline-none transition-all"
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </FormField>
              </div>

              <FormField label="Message Details">
                <textarea
                  name="details"
                  rows={6}
                  placeholder="Tell me about your project, your goals, your vision, and anything that would be helpful for me to know..."
                  required
                  className="w-full rounded-2xl px-4 py-3 text-sm text-pearlWhite placeholder:text-silverMist/60 focus:outline-none transition-all"
                  style={inputStyle}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </FormField>

              <div className="space-y-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-midnight transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                    status === "loading" ? "animate-pulse" : "hover:-translate-y-1"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                    boxShadow: `0 20px 25px -5px color-mix(in srgb, var(--theme-primary) 40%, transparent)`
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.boxShadow = `0 25px 50px -12px color-mix(in srgb, var(--theme-secondary) 50%, transparent)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 25px -5px color-mix(in srgb, var(--theme-primary) 40%, transparent)`;
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5"
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
                      {currentTheme.loadingText}
                    </>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      {getThemeIcon(theme, "w-5 h-5")}
                      <span>{currentTheme.buttonText}</span>
                    </span>
                  )}
                </button>

                {/* Success Message - Themed */}
                {status === "success" && (
                  <div className="rounded-2xl border-2 p-5 animate-fadeInUp shadow-lg" style={{
                    background: `linear-gradient(to right, color-mix(in srgb, var(--theme-primary) 20%, transparent), color-mix(in srgb, var(--theme-secondary) 20%, transparent))`,
                    borderColor: 'var(--theme-primary)',
                    boxShadow: `0 10px 15px -3px color-mix(in srgb, var(--theme-primary) 20%, transparent)`
                  }}>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 animate-bounce" style={{ color: 'var(--theme-primary)' }}>
                        {getThemeIcon(theme, "w-8 h-8")}
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold mb-2" style={{ color: 'var(--theme-primary)' }}>
                          {currentTheme.successTitle}
                        </p>
                        <p className="text-sm text-pearlWhite/90">
                          {currentTheme.successMessage}
                        </p>
                        <p className="text-xs text-moonlightSilver/70 mt-3 italic">
                          Check your email for confirmation from hello@moonlstudios.com
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="rounded-2xl border-2 p-5 animate-fadeInUp" style={{
                    background: `linear-gradient(to right, rgba(255, 100, 66, 0.2), rgba(220, 20, 60, 0.2))`,
                    borderColor: '#FF6442'
                  }}>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-phoenixFire"
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
                          ⚠️ The owl couldn&apos;t take flight!
                        </p>
                        <p className="text-xs text-moonlightSilver mt-1">
                          {errorMessage || "Please try again or send a direct owl to hello@moonlstudios.com"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Alternative Contact */}
                <div className="p-4 rounded-xl border" style={{
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)'
                }}>
                  <p className="text-xs text-moonlightSilver/90 text-center">
                    Prefer Muggle communication? Email me directly at{" "}
                    <a
                      href="mailto:hello@moonlstudios.com"
                      className="font-semibold transition-colors underline"
                      style={{
                        color: 'var(--theme-primary)',
                        textDecorationColor: 'var(--theme-border)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--theme-secondary)';
                        e.currentTarget.style.textDecorationColor = 'var(--theme-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--theme-primary)';
                        e.currentTarget.style.textDecorationColor = 'var(--theme-border)';
                      }}
                    >
                      hello@moonlstudios.com
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </section>

          {/* Hidden Wisdom - HP Easter Egg */}
          <div className="text-center py-8">
            <div className="hidden-wisdom select-text mb-4">
              I solemnly swear that I am up to good work
            </div>
            <p className="text-xs text-starlight/60 italic">
              &quot;Words are, in my not-so-humble opinion, our most inexhaustible source of magic.&quot; — Dumbledore
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
