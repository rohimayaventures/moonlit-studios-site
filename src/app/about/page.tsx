export default function AboutPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-phoenixFire/45 via-lunarGold/30 to-mermaidTeal/35 blur-3xl animate-flow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-mermaidTeal/30 via-tealBright/25 to-deepOcean/40 blur-3xl animate-flowDelayed" />
        </div>

        <div className="relative mx-auto max-w-4xl space-y-6 fade-in-up">
          <p className="text-xs tracking-[0.35em] text-starlight uppercase">About Moonlit Studios</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            The Nurse Who Learned to Code
          </h1>
          <p className="text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl">
            From bedside care to healthcare operations leadership, from fantasy romance author to 
            full-stack developer—every transformation taught me something new about healing through technology.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-starlight">
            <span>15+ Years Healthcare Operations</span>
            <span>•</span>
            <span>Full-Stack Developer</span>
            <span>•</span>
            <span>Published Author</span>
          </div>
        </div>
      </section>

      {/* MOONLIT TRANSFORMATION - Moon Phases Journey */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-midnight via-deepOcean/30 to-midnight">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">The Journey</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">The Moonlit Transformation</h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              Every phase of the moon brought new wisdom, new power, new purpose.
            </p>
          </div>

          <div className="space-y-16">
            {/* Phase 1: New Moon - Bedside Healer */}
            <div className="flex flex-col md:flex-row items-start gap-8 fade-in-up">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-deepOcean to-midnight border-2 border-moonlightSilver/30 flex items-center justify-center">
                  <svg className="w-12 h-12 text-moonlightSilver/60" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-center mt-2 text-xs text-starlight">New Moon</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-lunarGold mb-3">The Bedside Healer</h3>
                <p className="text-moonlightSilver leading-relaxed mb-4">
                  My journey began at the bedside, where I learned that healing is both art and science. 
                  Each patient taught me about empathy, systems thinking, and the critical importance of 
                  clear communication in high-stakes environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 text-mermaidTeal text-sm border border-mermaidTeal/30">
                    Patient Care
                  </span>
                  <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 text-mermaidTeal text-sm border border-mermaidTeal/30">
                    Clinical Workflows
                  </span>
                  <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 text-mermaidTeal text-sm border border-mermaidTeal/30">
                    Systems Thinking
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 2: Waxing Crescent - Operations Master */}
            <div className="flex flex-col md:flex-row items-start gap-8 fade-in-up">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-deepOcean via-moonlightSilver/20 to-midnight border-2 border-moonlightSilver/50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-moonlightSilver" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12c0-4.41 3.59-8 8-8v16z"/>
                  </svg>
                </div>
                <p className="text-center mt-2 text-xs text-starlight">Waxing Crescent</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-lunarGold mb-3">The Operations Master</h3>
                <p className="text-moonlightSilver leading-relaxed mb-4">
                  Scaling from one patient to leading teams of 130+ people managing multimillion-dollar budgets. 
                  I partnered with Kaiser, Optum, and university health networks, achieving 96% audit success rates 
                  and 20-25% improvement in staff retention. This is where I learned that great leadership is about 
                  empowering others.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-phoenixFire/20 text-phoenixFire text-sm border border-phoenixFire/30">
                    130+ Team Members
                  </span>
                  <span className="px-3 py-1 rounded-full bg-phoenixFire/20 text-phoenixFire text-sm border border-phoenixFire/30">
                    96% Audit Success
                  </span>
                  <span className="px-3 py-1 rounded-full bg-phoenixFire/20 text-phoenixFire text-sm border border-phoenixFire/30">
                    25% Retention Improvement
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 3: Full Moon - The Storyteller */}
            <div className="flex flex-col md:flex-row items-start gap-8 fade-in-up">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lunarGold via-pearlWhite/30 to-starlight border-2 border-lunarGold flex items-center justify-center shadow-lg shadow-lunarGold/30">
                  <svg className="w-12 h-12 text-lunarGold" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-center mt-2 text-xs text-lunarGold font-semibold">Full Moon</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-lunarGold mb-3">The Storyteller Emerges</h3>
                <p className="text-moonlightSilver leading-relaxed mb-4">
                  As a published fantasy romance author with 300,000+ words across multiple manuscripts, I discovered
                  that every great product needs a compelling story. Writing taught me the power of narrative in building
                  brands and connecting with audiences—skills that translate directly to creating memorable digital experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-lunarGold/20 text-lunarGold text-sm border border-lunarGold/30">
                    Published Author
                  </span>
                  <span className="px-3 py-1 rounded-full bg-lunarGold/20 text-lunarGold text-sm border border-lunarGold/30">
                    300K+ Words
                  </span>
                  <span className="px-3 py-1 rounded-full bg-lunarGold/20 text-lunarGold text-sm border border-lunarGold/30">
                    4 Completed Manuscripts
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 4: Waning Crescent - Code Awakening */}
            <div className="flex flex-col md:flex-row items-start gap-8 fade-in-up">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-midnight via-tealBright/20 to-deepOcean border-2 border-tealBright/50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-tealBright" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16c-1.85 0-3.55-.63-4.9-1.69l11.21-11.21C19.37 8.45 20 10.15 20 12c0 4.41-3.59 8-8 8z"/>
                  </svg>
                </div>
                <p className="text-center mt-2 text-xs text-starlight">Waning Crescent</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-lunarGold mb-3">The Code Awakening</h3>
                <p className="text-moonlightSilver leading-relaxed mb-4">
                  Self-taught full-stack developer specializing in AI/ML systems. I discovered that code is
                  poetry, algorithms are empathy, and AI can amplify human healing at scale. Every line of code became
                  another way to help people, just like nursing—but now I could help thousands at once.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-tealBright/20 text-tealBright text-sm border border-tealBright/30">
                    Self-Taught Developer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-tealBright/20 text-tealBright text-sm border border-tealBright/30">
                    AI/ML Specialist
                  </span>
                  <span className="px-3 py-1 rounded-full bg-tealBright/20 text-tealBright text-sm border border-tealBright/30">
                    Full-Stack + AI
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 5: Moonlit Studios - The Master Phase */}
            <div className="flex flex-col md:flex-row items-start gap-8 fade-in-up">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-mermaidTeal via-lunarGold/30 to-phoenixFire/20 border-2 border-starlight flex items-center justify-center shadow-xl shadow-mermaidTeal/40 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mermaidTeal/20 to-phoenixFire/20 animate-pulse"></div>
                  <svg className="w-12 h-12 text-starlight relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <p className="text-center mt-2 text-xs text-starlight font-semibold">Moonlit Studios</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-lunarGold mb-3">The Master Phase</h3>
                <p className="text-moonlightSilver leading-relaxed mb-4">
                  Founder of Moonlit Studios, where healthcare expertise, creative storytelling, and technical mastery 
                  converge. This is the Avatar state of digital creation—bringing together nursing wisdom, author vision, 
                  and developer skills to build products that heal, inspire, and transform. From $1,500 websites to $20,000 
                  full-stack applications, every project gets the same obsessive attention to detail.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-starlight/20 text-starlight text-sm border border-starlight/30">
                    Founder & Lead Developer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-starlight/20 text-starlight text-sm border border-starlight/30">
                    Full-Stack Consultancy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-starlight/20 text-starlight text-sm border border-starlight/30">
                    Healthcare + Creative + Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR ELEMENTS MASTERY - ATLA Themed */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">The Four Elements</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Mastery of All Elements</h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              "It is important to draw wisdom from many different places." — Uncle Iroh
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water - Adaptability */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-mermaidTeal/10 to-deepOcean/20 border border-mermaidTeal/30 hover:border-mermaidTeal/60 transition-all duration-300 hover:shadow-lg hover:shadow-mermaidTeal/20 fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-mermaidTeal to-tealBright flex items-center justify-center">
                  <svg className="w-8 h-8 text-midnight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-mermaidTeal mb-2">Water — Adaptability</h3>
                  <p className="text-sm text-mermaidTeal/80 mb-4">The Healing Element</p>
                </div>
              </div>
              <ul className="space-y-3 text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Healthcare Foundation:</strong> 15+ years in operations, clinical workflows, patient care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Healing Touch:</strong> Understanding patient needs, HIPAA compliance, empathy-first design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mermaidTeal mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Flow State:</strong> Adapting to any client, any challenge, finding the path of least resistance</span>
                </li>
              </ul>
            </div>

            {/* Fire - Transformation */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-phoenixFire/10 to-midnight border border-phoenixFire/30 hover:border-phoenixFire/60 transition-all duration-300 hover:shadow-lg hover:shadow-phoenixFire/20 fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-phoenixFire to-lunarGold flex items-center justify-center">
                  <svg className="w-8 h-8 text-midnight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-phoenixFire mb-2">Fire — Transformation</h3>
                  <p className="text-sm text-phoenixFire/80 mb-4">The Creative Flame</p>
                </div>
              </div>
              <ul className="space-y-3 text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-phoenixFire mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Author Fire:</strong> 300K+ words published, fantasy romance storyteller</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-phoenixFire mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Creative Vision:</strong> Storytelling through every pixel, brand narratives that resonate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-phoenixFire mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Passion Projects:</strong> 6 businesses built from pure creative fire and determination</span>
                </li>
              </ul>
            </div>

            {/* Earth - Foundation */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-lunarGold/10 to-deepOcean/20 border border-lunarGold/30 hover:border-lunarGold/60 transition-all duration-300 hover:shadow-lg hover:shadow-lunarGold/20 fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-lunarGold to-starlight flex items-center justify-center">
                  <svg className="w-8 h-8 text-midnight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-lunarGold mb-2">Earth — Foundation</h3>
                  <p className="text-sm text-lunarGold/80 mb-4">The Grounded Leader</p>
                </div>
              </div>
              <ul className="space-y-3 text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Operations Mastery:</strong> Led teams of 130+, managed multimillion-dollar budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Systems Thinking:</strong> Building sustainable, scalable solutions that last</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lunarGold mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Grounded Leadership:</strong> Real-world experience over theory, results over promises</span>
                </li>
              </ul>
            </div>

            {/* Air - Innovation */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-starlight/10 to-midnight border border-starlight/30 hover:border-starlight/60 transition-all duration-300 hover:shadow-lg hover:shadow-starlight/20 fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-starlight to-pearlWhite flex items-center justify-center">
                  <svg className="w-8 h-8 text-midnight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-starlight mb-2">Air — Innovation</h3>
                  <p className="text-sm text-starlight/80 mb-4">The Tech Pioneer</p>
                </div>
              </div>
              <ul className="space-y-3 text-moonlightSilver">
                <li className="flex items-start gap-2">
                  <span className="text-starlight mt-1">▸</span>
                  <span><strong className="text-pearlWhite">AI/ML Expertise:</strong> Specialized in building intelligent systems with Claude, RAG, and computer vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-starlight mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Full-Stack Skills:</strong> React, Next.js, Python, TypeScript, Claude API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-starlight mt-1">▸</span>
                  <span><strong className="text-pearlWhite">Cutting Edge:</strong> Always learning, always evolving, never satisfied with the status quo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS PROGRESSION - Animated Progress Bars */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-midnight via-deepOcean/20 to-midnight">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">Technical Skills</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Coding Journey</h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              200+ hours of intensive development work. From zero to full-stack in record time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {/* React & Next.js */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">React & Next.js</span>
                <span className="text-mermaidTeal font-semibold">90%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-mermaidTeal to-tealBright rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">UI/UX Design</span>
                <span className="text-lunarGold font-semibold">95%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-lunarGold to-starlight rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            {/* TypeScript */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">TypeScript</span>
                <span className="text-tealBright font-semibold">85%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tealBright to-mermaidTeal rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">Tailwind CSS</span>
                <span className="text-phoenixFire font-semibold">98%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-phoenixFire to-lunarGold rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>

            {/* Python & AI/ML */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">Python & AI/ML</span>
                <span className="text-starlight font-semibold">80%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-starlight to-pearlWhite rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Responsive Design */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">Responsive Design</span>
                <span className="text-mermaidTeal font-semibold">100%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-mermaidTeal via-tealBright to-starlight rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Healthcare Tech Integration */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">Healthcare Tech</span>
                <span className="text-lunarGold font-semibold">100%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-lunarGold to-phoenixFire rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Storytelling & Brand Design */}
            <div className="fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-pearlWhite font-medium">Storytelling & Brand</span>
                <span className="text-phoenixFire font-semibold">100%</span>
              </div>
              <div className="h-3 rounded-full bg-deepOcean/60 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-phoenixFire via-lunarGold to-starlight rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS - Animated Stats */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">Impact</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">By The Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-mermaidTeal mb-2">15+</div>
              <p className="text-sm text-moonlightSilver">Years Healthcare Operations</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-phoenixFire mb-2">130+</div>
              <p className="text-sm text-moonlightSilver">Team Members Led</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-lunarGold mb-2">300K+</div>
              <p className="text-sm text-moonlightSilver">Words Published</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-tealBright mb-2">200+</div>
              <p className="text-sm text-moonlightSilver">Hours Coding</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-starlight mb-2">96%</div>
              <p className="text-sm text-moonlightSilver">Audit Success Rate</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-mermaidTeal mb-2">25%</div>
              <p className="text-sm text-moonlightSilver">Retention Improvement</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-phoenixFire mb-2">1</div>
              <p className="text-sm text-moonlightSilver">Published Fantasy Series</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-lunarGold mb-2">∞</div>
              <p className="text-sm text-moonlightSilver">Cups of Tea</p>
              <p className="text-xs text-starlight/60 italic mt-1">(Uncle Iroh approved)</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TRIFECTA - Venn Diagram Concept */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-midnight via-deepOcean/30 to-midnight">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">The Convergence</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">The Trifecta</h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto mb-8">
              Most people are one. I'm all three.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-mermaidTeal/10 to-deepOcean/20 border border-mermaidTeal/30 fade-in-up">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mermaidTeal/20 border-2 border-mermaidTeal mb-4">
                  <svg className="w-8 h-8 text-mermaidTeal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H9.5v-2H11v-2H9.5V7H11V5H9.5v2H8V5H6.5v2h-2v2h2v6h-2v2h2v2H8v-2h1.5v2zm6.5-4h-4v-2h4v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-mermaidTeal mb-2">Healthcare Expert</h3>
              </div>
              <ul className="space-y-2 text-sm text-moonlightSilver">
                <li>✓ 15+ years operations</li>
                <li>✓ Clinical workflows</li>
                <li>✓ HIPAA compliance</li>
                <li>✓ Real-world experience</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-phoenixFire/10 to-deepOcean/20 border border-phoenixFire/30 fade-in-up">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-phoenixFire/20 border-2 border-phoenixFire mb-4">
                  <svg className="w-8 h-8 text-phoenixFire" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-phoenixFire mb-2">Creative Storyteller</h3>
              </div>
              <ul className="space-y-2 text-sm text-moonlightSilver">
                <li>✓ Published author</li>
                <li>✓ 300K+ words</li>
                <li>✓ Brand narratives</li>
                <li>✓ Emotional design</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-starlight/10 to-deepOcean/20 border border-starlight/30 fade-in-up">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-starlight/20 border-2 border-starlight mb-4">
                  <svg className="w-8 h-8 text-starlight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-starlight mb-2">Technical Builder</h3>
              </div>
              <ul className="space-y-2 text-sm text-moonlightSilver">
                <li>✓ Full-stack developer</li>
                <li>✓ AI/ML specialist</li>
                <li>✓ React & Next.js expert</li>
                <li>✓ Ships products fast</li>
              </ul>
            </div>
          </div>

          <div className="text-center fade-in-up">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-lunarGold/20 via-mermaidTeal/10 to-phoenixFire/10 border-2 border-lunarGold/50">
              <p className="text-xl md:text-2xl font-semibold text-lunarGold mb-2">
                Where All Three Converge
              </p>
              <p className="text-moonlightSilver">
                Healthcare expertise + Creative vision + Technical mastery = Products that heal, inspire, and transform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PHOENIX & PEACOCK CHRONICLES - Book Showcase */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">Published Works</p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">The Phoenix & Peacock Chronicles</h2>
            <p className="text-moonlightSilver max-w-2xl mx-auto">
              A 7-book epic fantasy romance series from our published author
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Book Display */}
            <div className="fade-in-up">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-phoenixFire/10 via-lunarGold/5 to-deepOcean/20 border-2 border-lunarGold/40">
                <div className="flex items-center gap-6">
                  {/* Book Cover Placeholder */}
                  <div className="flex-shrink-0 w-48 h-64 rounded-lg bg-gradient-to-br from-phoenixFire via-lunarGold to-mermaidTeal flex items-center justify-center shadow-xl">
                    <div className="text-center p-4">
                      <p className="text-xs text-midnight font-semibold uppercase tracking-wider">Eclipse of</p>
                      <p className="text-xs text-midnight font-semibold uppercase tracking-wider">Fire & Wings</p>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-lunarGold mb-2">Book 1: Eclipse of Fire & Wings</h3>
                    <p className="text-sm text-phoenixFire mb-4">Published • 95,400 words</p>
                    <p className="text-moonlightSilver leading-relaxed text-sm mb-4">
                      An epic tale of fire and grace, transformation and healing. Where the Phoenix rises from 
                      destruction and the Peacock dances through trials, their destinies intertwine in a world 
                      where magic and love collide.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-phoenixFire/20 text-phoenixFire text-xs border border-phoenixFire/30">
                        Fantasy Romance
                      </span>
                      <span className="px-3 py-1 rounded-full bg-lunarGold/20 text-lunarGold text-xs border border-lunarGold/30">
                        Adult Fiction
                      </span>
                      <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 text-mermaidTeal text-xs border border-mermaidTeal/30">
                        Fated Mates
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Series Info */}
            <div className="fade-in-up space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-pearlWhite mb-4">The Complete Series</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lunarGold/20 border border-lunarGold flex items-center justify-center text-xs text-lunarGold font-semibold">1</span>
                    <div>
                      <p className="text-pearlWhite font-medium">Eclipse of Fire & Wings</p>
                      <p className="text-xs text-starlight">Published • 95,400 words</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-phoenixFire/20 border border-phoenixFire flex items-center justify-center text-xs text-phoenixFire font-semibold">2</span>
                    <div>
                      <p className="text-pearlWhite font-medium">Shadows of the Lioness</p>
                      <p className="text-xs text-starlight">Complete • 94,250 words</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-mermaidTeal/20 border border-mermaidTeal flex items-center justify-center text-xs text-mermaidTeal font-semibold">3</span>
                    <div>
                      <p className="text-pearlWhite font-medium">Throne of Moon & Flame</p>
                      <p className="text-xs text-starlight">Complete • 90,500 words</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-starlight/20 border border-starlight flex items-center justify-center text-xs text-starlight font-semibold">4</span>
                    <div>
                      <p className="text-pearlWhite font-medium">Shattered Crowns</p>
                      <p className="text-xs text-starlight">In Progress • Chapters 1-24</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-moonlightSilver/20 border border-moonlightSilver flex items-center justify-center text-xs text-moonlightSilver font-semibold">5-7</span>
                    <div>
                      <p className="text-moonlightSilver font-medium">Books 5-7</p>
                      <p className="text-xs text-moonlightSilver/60">Planned</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-deepOcean/20 border border-starlight/20">
                <p className="text-moonlightSilver italic text-sm leading-relaxed">
                  "A nurse who writes fantasy romance AND builds AI systems. Balance isn't choosing one 
                  path—it's mastering them all and letting them strengthen each other."
                </p>
                <p className="text-lunarGold text-xs mt-3">— Moonlit Studios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET GRACIE - Chief Design Critic */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-midnight via-deepOcean/20 to-midnight">
        <div className="mx-auto max-w-4xl text-center fade-in-up">
          <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-3">The Team</p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">Meet Gracie</h2>
          
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-phoenixFire/10 to-mermaidTeal/10 border-2 border-lunarGold/40">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-lunarGold to-phoenixFire flex items-center justify-center">
            </div>
            <h3 className="text-2xl font-semibold text-lunarGold mb-2">Gracie Pagade</h3>
            <p className="text-phoenixFire mb-4 text-sm uppercase tracking-widest">Chief Design Critic</p>
            <div className="max-w-md mx-auto">
              <p className="text-moonlightSilver leading-relaxed mb-4">
                The toughest critic on the team. If Gracie doesn't approve the design, it goes back to the drawing board.
              </p>
              <div className="p-4 rounded-lg bg-midnight/40 border border-starlight/20">
                <p className="text-starlight italic">
                  "Classy, not flashy."
                </p>
                <p className="text-xs text-moonlightSilver/60 mt-2">— Gracie's Design Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HP EASTER EGG SECTION */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hidden-wisdom select-text">
            It is our choices, not our abilities, that truly show who we are
          </div>
          <p className="text-xs text-starlight/60 italic mt-6">
            "After all this time?" — "Always."
          </p>
        </div>
      </section>

    </main>
  );
}
