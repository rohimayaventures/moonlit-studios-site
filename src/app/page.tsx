export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20">
        {/* Water-like flowing gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-mermaidTeal/60 via-deepOcean/40 to-oceanDark/60 blur-3xl animate-flow" />
          <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-tealBright/50 via-deepOcean/30 to-transparent blur-3xl animate-flowDelayed" />
          <div className="absolute right-1/4 bottom-20 h-56 w-56 rounded-full bg-gradient-to-br from-lunarGold/20 via-mermaidTeal/30 to-deepOcean/20 blur-3xl animate-flow" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Moon Phases - COMPLETE LUNAR CYCLE (5 MOONS) */}
          <div className="flex justify-center items-center gap-3 md:gap-5 mb-8 fade-in-up">
            {/* New Moon 1 */}
            <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
            </div>
            
            {/* Waxing Crescent */}
            <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waxing Crescent"></div>
            
            {/* Full Moon - ACTIVE */}
            <div className="moon-phase active w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver border-2 border-starlight shadow-lg shadow-starlight/30 cursor-pointer" title="Full Moon"></div>
            
            {/* Waning Crescent */}
            <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-midnight via-moonlightSilver/30 to-midnight border border-moonlightSilver/40 hover:border-moonlightSilver/70 transition-all cursor-pointer" title="Waning Crescent"></div>
            
            {/* New Moon 2 */}
            <div className="moon-phase w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-moonlightSilver/20 to-moonlightSilver/5 border border-moonlightSilver/30 hover:border-moonlightSilver/60 transition-all cursor-pointer flex items-center justify-center" title="New Moon">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-midnight border border-moonlightSilver/40"></div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-xs md:text-sm tracking-[0.4em] text-starlight text-center mb-3 font-medium fade-in-up stagger-1">
            THE NURSE WHO CODES
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-6 leading-tight fade-in-up stagger-2">
            Where Dreams Surface<br />
            <span className="gradient-water">
              and Ideas Flow
            </span>
          </h1>
          
          <p className="text-center text-moonlightSilver text-base md:text-lg max-w-3xl mx-auto mb-4 leading-relaxed fade-in-up stagger-3">
            <span className="text-pearlWhite/90">Like water, I adapt to every challenge. Like moonlight, I guide your vision through the darkness.</span>
            <br />
            <span className="text-sm md:text-base mt-2 block">
              Full-stack development, AI innovation, and creative design—flowing from 
              <span className="text-lunarGold"> 15+ years of healthcare operations</span> into 
              <span className="text-mermaidTeal"> digital transformation</span>.
            </span>
          </p>

          {/* Element Symbols - NO EMOJIS */}
          <div className="flex justify-center gap-6 mb-8 fade-in-up stagger-4">
            {/* Water Symbol */}
            <div className="group cursor-pointer">
              <div className="element-symbol water w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/30 flex items-center justify-center border border-mermaidTeal/50 group-hover:border-mermaidTeal group-hover:shadow-lg group-hover:shadow-mermaidTeal/30 transition-all">
                <svg className="w-5 h-5 text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-xs text-center mt-2 text-tealBright font-medium opacity-0 group-hover:opacity-100 transition-opacity">Adapt</p>
            </div>
            
            {/* Fire Symbol */}
            <div className="group cursor-pointer">
              <div className="element-symbol fire w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-phoenixFire/20 to-lunarGold/20 flex items-center justify-center border border-lunarGold/40 group-hover:border-lunarGold group-hover:shadow-lg group-hover:shadow-lunarGold/30 transition-all">
                <svg className="w-5 h-5 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xs text-center mt-2 text-lunarGold font-medium opacity-0 group-hover:opacity-100 transition-opacity">Transform</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4 fade-in-up stagger-4">
            <a
              href="/services"
              className="btn-water relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 transition-all focus-ring"
            >
              Explore Services
            </a>
            
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-mermaidTeal/70 px-8 py-4 text-sm font-semibold text-mermaidTeal hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 transition-all focus-ring"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 bg-gradient-to-b from-midnightNavy to-midnight">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12 fade-in-up">
            {/* Tea Cup Icon - Professional */}
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-lunarGold/20 to-mermaidTeal/20 mb-4">
              <svg className="tea-cup w-12 h-12 md:w-16 md:h-16 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-pearlWhite mb-4">
              The Way of Water
            </h2>
            <p className="text-moonlightSilver italic text-lg">
              &quot;Be like water, my friend&quot; — with a dash of moonlit magic
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Adaptation */}
            <div className="wisdom-card p-6 md:p-8 rounded-2xl fade-in-up stagger-1">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 mx-auto text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-pearlWhite mb-3 text-center">Adaptation</h3>
              <p className="text-sm text-moonlightSilver leading-relaxed text-center mb-4">
                Water takes the shape of its container. Your business needs are unique—I flow to meet them precisely where you are.
              </p>
              <p className="text-xs text-starlight/60 italic text-center">
                &quot;It is important to draw wisdom from many different places.&quot; — Uncle Iroh
              </p>
            </div>
            
            {/* Balance */}
            <div className="wisdom-card p-6 md:p-8 rounded-2xl fade-in-up stagger-2">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 mx-auto text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-pearlWhite mb-3 text-center">Balance</h3>
              <p className="text-sm text-moonlightSilver leading-relaxed text-center mb-4">
                Like a perfect cup of jasmine tea, great work requires balance—technical precision with creative vision, speed with quality.
              </p>
              <p className="text-xs text-starlight/60 italic text-center">
                &quot;Happiness can be found in the darkest of times, if one only remembers to turn on the light.&quot; — Dumbledore
              </p>
            </div>
            
            {/* Healing */}
            <div className="wisdom-card p-6 md:p-8 rounded-2xl fade-in-up stagger-3">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 mx-auto text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-pearlWhite mb-3 text-center">Healing</h3>
              <p className="text-sm text-moonlightSilver leading-relaxed text-center mb-4">
                From nurse to coder, I bring the healer&apos;s touch to broken systems, confusing UX, and technical challenges.
              </p>
              <p className="text-xs text-starlight/60 italic text-center">
                &quot;Protection is the first law of nature.&quot; — And the first principle of good design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS - NO EMOJIS */}
      <section className="border-t border-deepOcean/40 py-16 bg-midnight/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Healthcare Experience */}
            <div className="text-center group cursor-pointer fade-in-up stagger-1">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-mermaidTeal/20 to-mermaidTeal/10 flex items-center justify-center border border-mermaidTeal/30 group-hover:border-mermaidTeal group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-mermaidTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-mermaidTeal mb-1">15+</div>
              <div className="text-xs text-moonlightSilver">Years Healthcare Ops</div>
            </div>
            
            {/* Ventures */}
            <div className="text-center group cursor-pointer fade-in-up stagger-2">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-starlight/20 to-starlight/10 flex items-center justify-center border border-starlight/30 group-hover:border-starlight group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-starlight mb-1">6</div>
              <div className="text-xs text-moonlightSilver">Ventures Built</div>
            </div>
            
            {/* Published Words */}
            <div className="text-center group cursor-pointer fade-in-up stagger-3">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-lunarGold/20 to-lunarGold/10 flex items-center justify-center border border-lunarGold/30 group-hover:border-lunarGold group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-lunarGold mb-1">300K+</div>
              <div className="text-xs text-moonlightSilver">Words Published</div>
            </div>
            
            {/* Taking Clients */}
            <div className="text-center group cursor-pointer fade-in-up stagger-4">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-phoenixFire/20 to-phoenixFire/10 flex items-center justify-center border border-phoenixFire/30 group-hover:border-phoenixFire group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-phoenixFire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-moonlight mb-1">Now</div>
              <div className="text-xs text-moonlightSilver">Taking Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION - NO EMOJIS */}
      <section className="py-20 bg-gradient-to-b from-midnight to-deepOcean/20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-pearlWhite mb-4">
              The Master&apos;s Journey
            </h2>
            <p className="text-moonlightSilver text-lg">
              From novice to master—every great journey flows through phases
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mermaidTeal via-deepOcean to-mermaidTeal opacity-30 hidden md:block transform -translate-x-1/2" />
            
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6 fade-in-up stagger-1">
                <div className="flex-1 md:text-right">
                  <div className="wisdom-card p-6 md:p-8 rounded-2xl">
                    <div className="text-xs tracking-wider text-starlight mb-2">PHASE ONE · NOVICE</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-pearlWhite mb-3">Healthcare Foundation</h3>
                    <p className="text-sm md:text-base text-moonlightSilver leading-relaxed">
                      Like learning basic water forms, I started in healthcare operations—understanding workflows, 
                      leading teams of 130+, and mastering the art of healing systems. 15+ years of clinical wisdom 
                      partnering with Kaiser, Optum, and university health networks.
                    </p>
                  </div>
                </div>
                <div className="timeline-dot w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-mermaidTeal to-deepOcean flex items-center justify-center border-4 border-midnight shadow-xl">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-midnight border-2 border-mermaidTeal"></div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6 fade-in-up stagger-2">
                <div className="flex-1 hidden md:block" />
                <div className="timeline-dot w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-lunarGold to-coralAccent flex items-center justify-center border-4 border-midnight shadow-xl">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-midnight via-lunarGold/60 to-midnight"></div>
                </div>
                <div className="flex-1">
                  <div className="wisdom-card p-6 md:p-8 rounded-2xl">
                    <div className="text-xs tracking-wider text-starlight mb-2">PHASE TWO · STUDENT</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-pearlWhite mb-3">Creative Awakening</h3>
                    <p className="text-sm md:text-base text-moonlightSilver leading-relaxed">
                      Finding my voice through storytelling—300,000+ words written, published fantasy romance author. 
                      Learning that code and narrative both require structure, flow, and heart. Stories heal, too.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6 fade-in-up stagger-3">
                <div className="flex-1 md:text-right">
                  <div className="wisdom-card p-6 md:p-8 rounded-2xl">
                    <div className="text-xs tracking-wider text-starlight mb-2">PHASE THREE · WARRIOR</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-pearlWhite mb-3">Technical Mastery</h3>
                    <p className="text-sm md:text-base text-moonlightSilver leading-relaxed">
                      Self-taught developer pursuing MS in AI/ML at CU Boulder. Building production-ready apps, 
                      AI systems, HIPAA-compliant platforms. Lumos to every bug. Transforming ideas into reality 
                      through code and determination.
                    </p>
                  </div>
                </div>
                <div className="timeline-dot w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-phoenixFire to-lunarGold flex items-center justify-center border-4 border-midnight shadow-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-pearlWhite to-moonlightSilver"></div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col md:flex-row items-center gap-6 fade-in-up stagger-4">
                <div className="flex-1 hidden md:block" />
                <div className="timeline-dot w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-gradient-to-br from-mermaidTeal via-tealBright to-lunarGold flex items-center justify-center border-4 border-midnight shadow-2xl shadow-mermaidTeal/50">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-pearlWhite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-mermaidTeal/20 to-lunarGold/20 border-2 border-mermaidTeal backdrop-blur">
                    <div className="text-xs tracking-wider text-lunarGold mb-2">PHASE FOUR · MASTER</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-pearlWhite mb-3">Moonlit Studios</h3>
                    <p className="text-sm md:text-base text-moonlightSilver leading-relaxed">
                      Where all elements converge. Founder of Moonlit Studios, bringing together healthcare expertise, 
                      creative storytelling, and technical mastery. Water (creative flow) meets Fire (transformation power). 
                      Healing through technology, adapting to every client, guided by moonlight. The Avatar state of digital creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 fade-in-up">
            <a href="/about" className="inline-flex items-center gap-2 text-mermaidTeal hover:text-tealBright transition-colors font-medium text-lg group">
              Read the Complete Journey
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - FIXED HEART ICON */}
      <section className="py-20 bg-midnightNavy">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
              Services That Flow
            </h2>
            <p className="text-moonlightSilver text-lg">
              Each service suite brings unique magic to your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Creative Design */}
            <div className="wisdom-card p-6 rounded-2xl card-hover-lift fade-in-up stagger-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mermaidTeal/30 to-tealBright/30 flex items-center justify-center mb-4 border border-mermaidTeal/50">
                <svg className="w-6 h-6 text-tealBright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">Creative Design</h3>
              <p className="text-sm text-moonlightSilver mb-4">Full-stack builds, brand identity, and portfolio sites that tell your story</p>
              <div className="text-xs text-tealBright font-medium">Next.js · React · Tailwind</div>
            </div>

            {/* HealthTech - FIXED HEART ICON COLOR */}
            <div className="wisdom-card p-6 rounded-2xl card-hover-lift fade-in-up stagger-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deepOcean/30 to-oceanDark/30 flex items-center justify-center mb-4 border border-deepOcean/50">
                <svg className="w-6 h-6 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">HealthTech</h3>
              <p className="text-sm text-moonlightSilver mb-4">HIPAA-compliant platforms built by someone who lived clinical workflows</p>
              <div className="text-xs text-starlight font-medium">Patient Portals · Dashboards</div>
            </div>

            {/* AI Innovation */}
            <div className="wisdom-card p-6 rounded-2xl card-hover-lift fade-in-up stagger-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lunarGold/30 to-phoenixFire/20 flex items-center justify-center mb-4 border border-lunarGold/50">
                <svg className="w-6 h-6 text-lunarGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">AI Innovation</h3>
              <p className="text-sm text-moonlightSilver mb-4">RAG chatbots, voice-enabled tools, and intelligent automation</p>
              <div className="text-xs text-lunarGold font-medium">Claude API · Embeddings</div>
            </div>

            {/* Strategy & Writing */}
            <div className="wisdom-card p-6 rounded-2xl card-hover-lift fade-in-up stagger-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-starlight/30 to-moonlightSilver/20 flex items-center justify-center mb-4 border border-starlight/50">
                <svg className="w-6 h-6 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pearlWhite mb-2">Strategy & Writing</h3>
              <p className="text-sm text-moonlightSilver mb-4">Consulting, ghostwriting, and turning complex ideas into clear narratives</p>
              <div className="text-xs text-starlight font-medium">UX Audits · Content</div>
            </div>
          </div>

          <div className="text-center mt-12 fade-in-up">
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-semibold shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 transition-all"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-deepOcean/20 to-midnight">
        <div className="mx-auto max-w-4xl px-6 text-center fade-in-up">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-starlight/20 to-mermaidTeal/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-starlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-moonlightSilver mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a water bender&apos;s adaptability, a healer&apos;s touch, or a wizard&apos;s precision—
              your digital transformation starts with a single conversation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="/contact" 
              className="btn-water inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-mermaidTeal to-tealBright text-white font-semibold shadow-xl shadow-mermaidTeal/40 hover:shadow-2xl hover:shadow-tealBright/60 hover:-translate-y-1 transition-all"
            >
              Start Your Project
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-mermaidTeal/70 text-mermaidTeal font-semibold hover:bg-mermaidTeal hover:text-white hover:-translate-y-1 transition-all"
            >
              View My Work
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