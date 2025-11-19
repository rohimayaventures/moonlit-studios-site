'use client';

import { CalendlyButton } from './components/CalendlyButton';
import { TestimonialsSection } from './components/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden py-20 md:py-32">
        {/* Multiverse-inspired flowing gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-deepOcean/40 to-oceanDark/60 blur-3xl animate-flow" />
          <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-lunarGold/50 via-phoenixFire/30 to-transparent blur-3xl animate-flowDelayed" />
          <div className="absolute right-1/4 bottom-20 h-56 w-56 rounded-full bg-gradient-to-br from-stoneGray/40 via-mermaidTeal/30 to-deepOcean/20 blur-3xl animate-flow" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Moon Phase Indicator (5 Phases) */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-moonlightSilver/30"
              title="New Moon - Journey Begins"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-moonlightSilver/30 to-mermaidTeal/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-moonlightSilver/30"
              title="Waxing Crescent - Growing Dreams"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-moonlightSilver/30 to-mermaidTeal/30" />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-starlight border-2 border-lunarGold/70 shadow-lg shadow-lunarGold/30 flex-shrink-0 animate-pulse"
              title="Full Moon - You Are Here"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-mermaidTeal/30 to-moonlightSilver/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-2 border-moonlightSilver/50 hover:border-moonlightSilver/80 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-moonlightSilver/30"
              title="Waning Crescent - Infinite Potential"
            />
            <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-mermaidTeal/30 to-moonlightSilver/30" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-midnight border-2 border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-moonlightSilver/30"
              title="New Moon - New Beginnings"
            />
          </div>

          {/* Tagline */}
          <div className="text-xs md:text-sm tracking-[0.4em] text-starlight text-center mb-3 font-medium fade-in-up">
            THE NURSE WHO CODES
          </div>

          <h1 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-6 leading-tight fade-in-up stagger-1">
            Welcome to <span className="gradient-water">Moonlit Studios</span>
          </h1>

          <p className="font-serif text-center text-lg md:text-xl text-moonlightSilver font-light max-w-2xl mx-auto mb-4 fade-in-up stagger-2 italic">
            Where Dreams Surface and Ideas Flow
          </p>

          <p className="text-center text-moonlightSilver text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up stagger-3">
            <span className="text-pearlWhite/90">15 years of clinical operations meets full-stack mastery.</span>
            {' '}Four AI systems. Five creative realms. Infinite possibilities under moonlight.
          </p>

          {/* Trust Signals - Condensed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16 fade-in-up stagger-3">
            <div className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-bold gradient-water mb-1">15+</div>
              <div className="text-xs text-moonlightSilver">Years Healthcare</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-bold text-lunarGold mb-1">6</div>
              <div className="text-xs text-moonlightSilver">Ventures Built</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-bold text-starlight mb-1">300K+</div>
              <div className="text-xs text-moonlightSilver">Words Published</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl md:text-3xl font-bold gradient-moonlight mb-1">Now</div>
              <div className="text-xs text-moonlightSilver">Taking Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OFFERS & RETAINERS */}
      <section id="offers" className="py-20 bg-gradient-to-b from-midnight to-midnightNavy border-t border-deepOcean/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
              Current Offers & Retainers
            </h2>
            <p className="text-moonlightSilver text-base max-w-3xl mx-auto">
              Clear starting points for small businesses, founders, and healthcare teams who need thoughtful design, AI systems, and ongoing support.
            </p>
          </div>

          {/* One-Time Builds */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Card 1: Totoro's Garden */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-lunarGold/40 hover:shadow-xl hover:shadow-lunarGold/20 transition-all fade-in-up stagger-1">
              <div className="inline-block px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/30 mb-3">
                <span className="text-xs font-medium text-mermaidTeal tracking-wider uppercase">Small Business Launchpads</span>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">
                Totoro&apos;s Garden
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Modern, narrative-driven starter site for small businesses and solo founders.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                Starting at $1,500–$1,800
              </div>
            </div>

            {/* Card 2: Howl's Moving Castle */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-lunarGold/40 hover:shadow-xl hover:shadow-lunarGold/20 transition-all fade-in-up stagger-2">
              <div className="inline-block px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/30 mb-3">
                <span className="text-xs font-medium text-mermaidTeal tracking-wider uppercase">Small Business Launchpads</span>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">
                Howl&apos;s Moving Castle
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Booking flows, automations, and service workflows for growing businesses.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $3,500
              </div>
            </div>

            {/* Card 3: Spirited Away */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-lunarGold/40 hover:shadow-xl hover:shadow-lunarGold/20 transition-all fade-in-up stagger-3">
              <div className="inline-block px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/30 mb-3">
                <span className="text-xs font-medium text-mermaidTeal tracking-wider uppercase">Small Business Launchpads</span>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">
                Spirited Away
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Story-driven shops for products, courses, or digital goods with full e-commerce.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $6,000–$6,500
              </div>
            </div>

            {/* Card 4: AI & Health Systems */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-lunarGold/40 hover:shadow-xl hover:shadow-lunarGold/20 transition-all md:col-span-2 lg:col-span-3 fade-in-up stagger-4">
              <div className="inline-block px-3 py-1 rounded-full bg-phoenixFire/20 border border-phoenixFire/30 mb-3">
                <span className="text-xs font-medium text-phoenixFire tracking-wider uppercase">AI & Healthcare Systems</span>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">
                Rapid AI Builds & Deep Systems
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Weekend Sprint ($2,500) and Starter Copilot ($7,000) for rapid AI prototypes. AI Growth Copilot ($20,000) and Healthcare Tech Premium ($42,000) for production-ready systems with ongoing support.
              </p>
            </div>
          </div>

          {/* Retainers */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Retainer 1: Website Maintenance */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-starlight/40 hover:shadow-xl hover:shadow-starlight/20 transition-all fade-in-up stagger-5">
              <div className="inline-block px-3 py-1 rounded-full bg-starlight/20 border border-starlight/30 mb-3">
                <span className="text-xs font-medium text-starlight tracking-wider uppercase">Retainer</span>
              </div>
              <h3 className="text-base font-semibold text-pearlWhite mb-2">
                Website Maintenance
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Security updates, content tweaks, and hosting support.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $500–$750/mo
              </div>
            </div>

            {/* Retainer 2: E-Commerce Maintenance */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-starlight/40 hover:shadow-xl hover:shadow-starlight/20 transition-all fade-in-up stagger-6">
              <div className="inline-block px-3 py-1 rounded-full bg-starlight/20 border border-starlight/30 mb-3">
                <span className="text-xs font-medium text-starlight tracking-wider uppercase">Retainer</span>
              </div>
              <h3 className="text-base font-semibold text-pearlWhite mb-2">
                E-Commerce Maintenance
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Product updates, payment monitoring, and analytics review.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $1,000–$1,500/mo
              </div>
            </div>

            {/* Retainer 3: AI Copilot Tuning */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-starlight/40 hover:shadow-xl hover:shadow-starlight/20 transition-all fade-in-up stagger-7">
              <div className="inline-block px-3 py-1 rounded-full bg-starlight/20 border border-starlight/30 mb-3">
                <span className="text-xs font-medium text-starlight tracking-wider uppercase">Retainer</span>
              </div>
              <h3 className="text-base font-semibold text-pearlWhite mb-2">
                AI Copilot Tuning
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                Prompt optimization, performance monitoring, and monthly improvements.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $1,500–$2,500/mo
              </div>
            </div>

            {/* Retainer 4: Healthcare Platform Support */}
            <div className="rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight border border-moonlightSilver/20 p-6 hover:border-starlight/40 hover:shadow-xl hover:shadow-starlight/20 transition-all fade-in-up stagger-8">
              <div className="inline-block px-3 py-1 rounded-full bg-starlight/20 border border-starlight/30 mb-3">
                <span className="text-xs font-medium text-starlight tracking-wider uppercase">Retainer</span>
              </div>
              <h3 className="text-base font-semibold text-pearlWhite mb-2">
                Healthcare Platform Support
              </h3>
              <p className="text-moonlightSilver text-sm mb-3">
                HIPAA compliance updates, security patches, and user training.
              </p>
              <div className="mt-3 text-sm font-semibold text-lunarGold">
                $3,000–$5,000/mo
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="mt-8 text-center text-sm text-moonlightSilver/70">
            Not sure where you fit? We&apos;ll map your needs to the right package on our first call.
          </p>
        </div>
      </section>

      {/* PORTAL HUB - THE FIVE REALMS */}
      <section className="py-20 bg-gradient-to-b from-midnightNavy to-midnight">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-pearlWhite mb-4">
              Choose Your Realm
            </h2>
            <p className="text-moonlightSilver text-lg max-w-2xl mx-auto">
              Each portal leads to a different dimension of expertise. Where will your journey begin?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PORTAL 1: About - Moonlit Original */}
            <Link href="/about" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-starlight/10 to-moonlightSilver/10 border-2 border-starlight/30 hover:border-starlight hover:shadow-2xl hover:shadow-starlight/40 transition-all duration-500 p-8 card-hover-lift fade-in-up stagger-1">
                {/* Portal Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-starlight/30 to-moonlightSilver/20 flex items-center justify-center mb-4 border-2 border-starlight/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>

                {/* Realm Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-starlight/20 border border-starlight/40 mb-3">
                  <span className="text-xs font-medium text-starlight tracking-wider">THE ORIGIN STORY</span>
                </div>

                <h3 className="text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-starlight transition-colors">
                  The Moonlit Archives
                </h3>

                <p className="text-moonlightSilver text-sm leading-relaxed mb-4">
                  From bedside nurse to bending master. From published author to code warrior. The Master&apos;s Journey through four phases: Healthcare Foundation, Creative Awakening, Technical Mastery, and the Avatar State. How 15 years of healing became digital transformation under moonlight.
                </p>

                <div className="flex items-center gap-2 text-starlight font-medium text-sm group-hover:gap-3 transition-all">
                  Read the Archives
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Moon Glow Effect */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-starlight/30 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            {/* PORTAL 2: Services - ATLA */}
            <Link href="/services" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mermaidTeal/20 to-deepOcean/20 border-2 border-mermaidTeal/30 hover:border-mermaidTeal hover:shadow-2xl hover:shadow-mermaidTeal/40 transition-all duration-500 p-8 card-hover-lift fade-in-up stagger-2">
                {/* Portal Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mermaidTeal/40 to-tealBright/30 flex items-center justify-center mb-4 border-2 border-mermaidTeal/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>

                {/* Realm Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/40 mb-3">
                  <span className="text-xs font-medium text-tealBright tracking-wider">WATER · EARTH · FIRE · AIR · SPIRIT</span>
                </div>

                <h3 className="text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-tealBright transition-colors">
                  The Five Bending Paths
                </h3>

                <p className="text-moonlightSilver text-sm leading-relaxed mb-4">
                  Like mastering the elements, each service suite brings unique power to your vision. Creative design flows like water. HealthTech stands grounded as earth. AI innovation burns with fire&apos;s transformation. Consulting rides air&apos;s wisdom. Writing channels spirit energy.
                </p>

                <div className="flex items-center gap-2 text-mermaidTeal font-medium text-sm group-hover:gap-3 transition-all">
                  Explore Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-mermaidTeal/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            {/* PORTAL 3: Portfolio - LOTR */}
            <Link href="/portfolio" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stoneGray/10 to-silverMist/10 border-2 border-silverMist/30 hover:border-silverMist hover:shadow-2xl hover:shadow-silverMist/40 transition-all duration-500 p-8 card-hover-lift fade-in-up stagger-3">
                {/* Portal Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-silverMist/30 to-lunarGold/20 flex items-center justify-center mb-4 border-2 border-silverMist/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 text-silverMist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                {/* Realm Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-silverMist/20 border border-silverMist/40 mb-3">
                  <span className="text-xs font-medium text-silverMist tracking-wider">5 REALMS EXPLORED</span>
                </div>

                <h3 className="text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-silverMist transition-colors">
                  Chronicles of the Realms
                </h3>

                <p className="text-moonlightSilver text-sm leading-relaxed mb-4">
                  Journey from the Shire&apos;s welcoming brands to Rivendell&apos;s healing platforms. Witness Lothlórien&apos;s AI visions and Gondor&apos;s preserved lore. Set sail from the Grey Havens&apos; experimental labs. Every quest completed. Every legend forged.
                </p>

                <div className="flex items-center gap-2 text-silverMist font-medium text-sm group-hover:gap-3 transition-all">
                  Begin the Journey
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-lunarGold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            {/* PORTAL 4: AI Lab - SAO */}
            <Link href="/ai-lab" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-phoenixFire/10 to-lunarGold/10 border-2 border-lunarGold/30 hover:border-lunarGold hover:shadow-2xl hover:shadow-lunarGold/40 transition-all duration-500 p-8 card-hover-lift fade-in-up stagger-4">
                {/* Portal Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-phoenixFire/30 to-lunarGold/30 flex items-center justify-center mb-4 border-2 border-lunarGold/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Realm Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-lunarGold/20 border border-lunarGold/40 mb-3">
                  <span className="text-xs font-medium text-lunarGold tracking-wider">LINK START!</span>
                </div>

                <h3 className="text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-lunarGold transition-colors">
                  The AI Battle System
                </h3>

                <p className="text-moonlightSilver text-sm leading-relaxed mb-4">
                  Four AI warriors ready to deploy. VisionScan analyzes PDFs with surgical precision. Echo answers customer questions 24/7. VoiceFlow brings conversations to life. AutoQuote generates instant project estimates. Each system tested, combat-ready, and waiting for activation.
                </p>

                <div className="flex items-center gap-2 text-lunarGold font-medium text-sm group-hover:gap-3 transition-all">
                  Enter the Instance
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* SAO Scan Lines Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lunarGold/10 to-transparent animate-scan" />
                </div>
              </div>
            </Link>

            {/* PORTAL 5: Contact - HP (Ministry of Magic) */}
            <Link href="/contact" className="group block md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-coralPink/10 to-roseGold/10 border-2 border-coralPink/30 hover:border-coralPink hover:shadow-2xl hover:shadow-coralPink/40 transition-all duration-500 p-8 card-hover-lift fade-in-up stagger-5">
                {/* Portal Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coralPink/30 to-roseGold/30 flex items-center justify-center mb-4 border-2 border-coralPink/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 text-coralPink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Realm Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-coralPink/20 border border-coralPink/40 mb-3">
                  <span className="text-xs font-medium text-coralPink tracking-wider">OWL POST READY</span>
                </div>

                <h3 className="text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-coralPink transition-colors">
                  Send a Howler
                </h3>

                <p className="text-moonlightSilver text-sm leading-relaxed mb-4">
                  Ready to begin your legendary quest? Whether you need water&apos;s adaptability, fire&apos;s transformation, or moonlight&apos;s guidance—send your message through the portal. Fast owl delivery. Professional service. A touch of magic in every project.
                </p>

                <div className="flex items-center gap-2 text-coralPink font-medium text-sm group-hover:gap-3 transition-all">
                  Open the Portal
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Magical Sparkle Effect */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-roseGold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </div>

          {/* Portal Navigation Hint */}
          <div className="text-center mt-12 fade-in-up stagger-6">
            <p className="text-sm text-moonlightSilver/60 italic">
              &quot;It is important to draw wisdom from many different places.&quot; — Uncle Iroh
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection limit={3} showTitle={true} />

      {/* FINAL CTA */}
      <section id="cta" className="py-20 bg-gradient-to-b from-deepOcean/20 to-midnight">
        <div className="mx-auto max-w-4xl px-6 text-center fade-in-up">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-starlight/20 to-mermaidTeal/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-moonlightSilver mb-8 max-w-2xl mx-auto leading-relaxed">
              Your digital transformation awaits. Choose your realm, and let&apos;s create something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Book Discovery Call"
              variant="primary"
            />
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-semibold hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 transition-all"
            >
              Send a Message
            </a>
          </div>

          <p className="text-sm text-moonlightSilver/60 italic">
            &quot;It is our choices that show what we truly are, far more than our abilities.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
