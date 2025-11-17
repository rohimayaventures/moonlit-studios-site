import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-deepOcean via-midnight to-midnight text-moonlightSilver">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/square-logo.png"
              alt="Moonlit Studios"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <p className="text-lg font-semibold text-pearlWhite">
                Moonlit Studios
              </p>
              <p className="text-sm text-lunarGold">The Nurse Who Codes</p>
            </div>
          </div>
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
            <li>
              <a href="/portal/login" className="transition-colors hover:text-lunarGold font-semibold flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Client Portal
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
              <a href="/services/small-business" className="transition-colors hover:text-starlight">
                Small Business Launchpads
              </a>
            </li>
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
              <a href="mailto:hello@moonlitstudios.com" className="transition-colors hover:text-starlight">
                hello@moonlitstudios.com
              </a>
            </p>
            <p>
              <span className="text-lunarGold">LinkedIn:</span>{" "}
              <a href="#" className="transition-colors hover:text-starlight">
                Moonlit Studios
              </a>
            </p>
          </div>
          <p className="inline-flex items-center rounded-full border border-mermaidTeal/60 px-4 py-1 text-xs font-semibold text-mermaidTeal">
            Accepting New Projects
          </p>
          <a
            href="/get-quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lunarGold to-phoenixFire text-midnight font-bold rounded-lg hover:shadow-xl hover:shadow-lunarGold/40 hover:scale-105 transition-all text-sm"
          >
            <span>💰</span>
            <span>Get Instant Quote</span>
          </a>
        </div>
      </div>

      {/* HP EASTER EGG - Marauder's Map Quote with Walking Footprints */}
      <div className="relative border-t border-deepOcean/40 py-8 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="hidden-wisdom text-center select-text">
            I solemnly swear that I am up to no good
          </div>

          {/* Walking Footprints - Contained within section */}
          <div className="footprints left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-lunarGold/40">
              <path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="currentColor"/>
            </svg>
          </div>
          <div className="footprints right">
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
          <p>© 2025 Moonlit Studios</p>
          <p className="italic text-starlight/70">Mischief Managed</p>
        </div>
      </div>
    </footer>
  );
}
