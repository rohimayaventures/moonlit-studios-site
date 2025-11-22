import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Demos | Moonlit Studios",
  description: "Interactive demos showcasing full-stack development, healthcare innovation, and UI/UX design expertise.",
};

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Demo Banner - Mobile Responsive */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-phoenixFire/95 via-lunarGold/90 to-phoenixFire/95 border-b-2 border-phoenixFire/60 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Banner Text */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-bold text-midnight uppercase tracking-wider">
                📊 Portfolio Demo
              </p>
              <p className="text-[0.65rem] sm:text-xs text-midnight/80 mt-0.5">
                This is a demonstration project showcasing technical capabilities
              </p>
            </div>

            {/* CTA Buttons - Responsive Stack */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Link
                href="/portfolio"
                className="px-4 py-2 rounded-full bg-midnight/90 text-pearlWhite text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-midnight hover:shadow-lg transition-all text-center border border-midnight/20"
              >
                ← Back to Portfolio
              </Link>
              <Link
                href="/get-quote"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-deepOcean to-midnight text-pearlWhite text-xs sm:text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all text-center border-2 border-mermaidTeal/40"
              >
                Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="min-h-screen bg-gradient-to-br from-midnight via-deepOcean to-[#0a0a0a]">
        {children}
      </div>
    </>
  );
}
