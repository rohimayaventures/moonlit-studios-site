import { Zap, DollarSign, Calendar } from "lucide-react";

interface PageCTASectionProps {
  title?: string;
  description?: string;
  showQuote?: boolean;
  showContact?: boolean;
  showDiscovery?: boolean;
  variant?: "default" | "compact";
}

export function PageCTASection({
  title = "Ready to Start Your Project?",
  description = "Let's discuss how Moonlit Studios can bring your vision to life with expert development and healthcare insights.",
  showQuote = true,
  showContact = true,
  showDiscovery = true,
  variant = "default",
}: PageCTASectionProps) {
  if (variant === "compact") {
    return (
      <section className="relative py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {showQuote && (
              <a
                href="/get-quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold rounded-lg hover:shadow-xl hover:shadow-lunarGold/40 hover:scale-105 transition-all text-sm"
              >
                <DollarSign className="w-4 h-4" />
                <span>Get Quote</span>
              </a>
            )}
            {showDiscovery && (
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-bold rounded-lg hover:shadow-xl hover:shadow-mermaidTeal/40 hover:scale-105 transition-all text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Discovery Call</span>
              </a>
            )}
            {showContact && (
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-mermaidTeal/70 text-mermaidTeal font-bold rounded-lg hover:bg-mermaidTeal hover:text-white hover:scale-105 transition-all text-sm"
              >
                <Zap className="w-4 h-4" />
                <span>Contact</span>
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal via-tealBright to-lunarGold blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/40 text-mermaidTeal text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
          <div className="w-2 h-2 rounded-full bg-mermaidTeal animate-pulse" />
          <span>Ready to Launch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4 leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-moonlightSilver max-w-2xl mx-auto px-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 pt-4">
          {showQuote && (
            <a
              href="/get-quote"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold text-base sm:text-lg shadow-xl shadow-lunarGold/40 hover:shadow-2xl hover:shadow-phoenixFire/60 hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                <span>Get Instant Quote</span>
              </span>
            </a>
          )}
          {showDiscovery && (
            <a
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-bold text-base sm:text-lg shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                <span>Book Discovery Call</span>
              </span>
            </a>
          )}
          {showContact && !showDiscovery && (
            <a
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-bold text-base sm:text-lg hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 active:scale-95 transition-all text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Contact Us</span>
              </span>
            </a>
          )}
        </div>

        {/* Trust Signal */}
        <p className="text-xs sm:text-sm text-starlight/70 italic px-4 pt-4">
          Accepting new projects • Free consultation • Fast response time
        </p>
      </div>
    </section>
  );
}
