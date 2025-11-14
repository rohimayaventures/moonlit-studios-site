import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { GlobalKaiWidget } from "./components/GlobalKaiWidget";

export const metadata: Metadata = {
  title: "Moonlit Studios - The Nurse Who Codes",
  description:
    "Moonlit Studios is a creative-tech studio led by nurse-turned-developer Hannah Pagade. Full-stack builds, AI experiences, and soulful digital products for founders and healthcare innovators.",
  metadataBase: new URL("https://moonlstudios.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-nightNavy text-glacierWhite">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-silverMist/20 bg-nightNavy/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-moonlitTeal to-phoenixGold" />
                <span className="text-lg font-semibold tracking-wide">
                  Moonlit Studios
                </span>
              </div>
              <nav className="flex gap-6 text-sm text-silverMist">
                <a href="/" className="hover:text-glacierWhite">
                  Home
                </a>
                <a href="/services" className="hover:text-glacierWhite">
                  Services
                </a>
                <a href="/ai-lab" className="hover:text-glacierWhite">
                  AI Lab
                </a>
                <a href="/portfolio" className="hover:text-glacierWhite">
                  Portfolio
                </a>
                <a href="/about" className="hover:text-glacierWhite">
                  About
                </a>
                <a href="/contact" className="hover:text-glacierWhite">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 bg-gradient-to-b from-deepOcean via-midnight to-midnight text-moonlightSilver">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <p className="text-lg font-semibold text-pearlWhite">
                  Moonlit Studios
                </p>
                <p className="text-sm text-lunarGold">The Nurse Who Can Code</p>
                <p className="text-xs leading-relaxed text-moonlightSilver/80">
                  Strategic design. Technical excellence. Operational precision.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-lunarGold uppercase tracking-[0.3em]">
                  Quick Links
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="/about" className="transition-colors hover:text-starlight">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="transition-colors hover:text-starlight">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="transition-colors hover:text-starlight">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/ai-lab" className="transition-colors hover:text-starlight">
                      AI Lab
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="transition-colors hover:text-starlight">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-lunarGold uppercase tracking-[0.3em]">
                  Services
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="/services/creative-design-development" className="transition-colors hover:text-starlight">
                      Creative Design & Development
                    </a>
                  </li>
                  <li>
                    <a href="/services/health-tech-development" className="transition-colors hover:text-starlight">
                      Health x Tech Development
                    </a>
                  </li>
                  <li>
                    <a href="/services/consulting" className="transition-colors hover:text-starlight">
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a href="/services/ai-innovation" className="transition-colors hover:text-starlight">
                      AI Innovation Suite
                    </a>
                  </li>
                  <li>
                    <a href="/services/ghostwriting" className="transition-colors hover:text-starlight">
                      Author & Ghostwriting Studio
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-lunarGold uppercase tracking-[0.3em]">
                  Connect
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-lunarGold">Email:</span>{" "}
                    <a href="mailto:hello@moonlstudios.com" className="transition-colors hover:text-starlight">
                      hello@moonlstudios.com
                    </a>
                  </p>
                  <p>
                    <span className="text-lunarGold">LinkedIn:</span>{" "}
                    <a href="#" className="transition-colors hover:text-starlight">
                      Hannah Pagade
                    </a>
                  </p>
                </div>
                <p className="inline-flex items-center rounded-full border border-mermaidTeal/60 px-4 py-1 text-xs font-semibold text-mermaidTeal">
                  Accepting New Projects
                </p>
              </div>
            </div>

            {/* HP EASTER EGG - Marauder's Map Quote with Walking Footprints */}
            <div className="relative border-t border-deepOcean/40 py-8">
              <div className="mx-auto max-w-6xl px-6">
                <div className="hidden-wisdom text-center select-text">
                  I solemnly swear that I am up to no good
                </div>
                
                {/* Walking Footprints - Only visible on hover */}
                <div className="footprints left absolute" style={{ left: '-5%', top: '50%' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-lunarGold/40">
                    <path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="footprints right absolute" style={{ left: '-5%', top: '55%' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-lunarGold/40">
                    <path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Uncle Iroh Quote */}
                <p className="text-xs text-starlight/60 italic text-center mt-6">
                  &quot;It is important to draw wisdom from many different places.&quot; — Uncle Iroh
                </p>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-deepOcean/60">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-moonlightSilver/80 md:flex-row md:items-center md:justify-between">
                <p>© 2025 Moonlit Studios | Hannah Pagade</p>
                <p className="italic text-starlight/70">Mischief Managed ⚡</p>
              </div>
            </div>
          </footer>
        </div>

        {/* 🌙 GLOBAL KAI WIDGET - Appears on all pages */}
        <GlobalKaiWidget />
      </body>
    </html>
  );
}
