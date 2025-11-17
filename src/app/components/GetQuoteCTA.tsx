import Link from 'next/link';

interface GetQuoteCTAProps {
  serviceName?: string;
  variant?: 'default' | 'compact' | 'banner';
}

export function GetQuoteCTA({ serviceName, variant = 'default' }: GetQuoteCTAProps) {
  if (variant === 'compact') {
    return (
      <Link
        href="/get-quote"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold rounded-lg hover:shadow-xl hover:shadow-lunarGold/40 hover:scale-105 transition-all"
      >
        <span>💰</span>
        <span>Get Instant Quote</span>
      </Link>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-midnight via-deepOcean to-midnight border border-lunarGold/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-pearlWhite mb-3">
          Ready to Get Started{serviceName ? ` with ${serviceName}` : ''}?
        </h3>
        <p className="text-moonlightSilver mb-6 max-w-2xl mx-auto">
          Get an instant AI-powered quote tailored to your project requirements.
          No commitment required—just honest pricing in under 60 seconds.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-lunarGold/50 hover:scale-105 transition-all"
        >
          <span className="text-2xl">💰</span>
          <span>Get Your Free Quote</span>
          <span className="text-sm opacity-80">(60 seconds)</span>
        </Link>
        <p className="text-xs text-moonlightSilver/60 mt-4">
          🤖 Powered by AI • ⚡ Instant Results • 💯 No Commitment
        </p>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-br from-deepOcean/60 to-midnight/80 border border-mermaidTeal/30 rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-pearlWhite mb-2">
            Ready for a Custom Quote?
          </h3>
          <p className="text-moonlightSilver text-sm sm:text-base">
            Get instant AI-powered pricing tailored to your{serviceName ? ` ${serviceName}` : ''} project.
            Takes less than 60 seconds.
          </p>
        </div>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold rounded-lg hover:shadow-xl hover:shadow-lunarGold/40 hover:scale-105 transition-all whitespace-nowrap"
        >
          <span className="text-xl">💰</span>
          <span>Get Instant Quote</span>
        </Link>
      </div>
    </div>
  );
}
