'use client';

import { 
  Heart, 
  Code, 
  PenTool, 
  TrendingUp, 
  Users, 
  Zap, 
  Award,
  ArrowRight,
  Star,
  Coffee
} from 'lucide-react';
import { CalendlyButton } from '../components/CalendlyButton';
import { TestimonialsSection } from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite selection:bg-mermaidTeal/30">
      
      {/* --- HERO: The Hook --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Abstract Background Depth */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-phoenixFire/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mermaidTeal/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="relative mx-auto max-w-5xl text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-lunarGold animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-lunarGold uppercase">
              The Nurse Who Codes
            </span>
          </div>

          <h1 className="font-elegant text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up delay-100">
            High-Stakes Precision Meets<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mermaidTeal via-starlight to-phoenixFire">
              Creative Soul.
            </span>
          </h1>

          <p className="font-serif text-xl text-moonlightSilver max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            I built Moonlit Studios on a simple premise: <strong>Technology should care.</strong><br/>
            Whether it's a small business website or an enterprise AI agent, I bring the empathy of a nurse, the storytelling of an author, and the precision of an engineer to every project.
          </p>
        </div>
      </section>

      {/* --- THE VALUE STACK: Why Hire You? --- */}
      <section className="py-20 px-6 bg-gradient-to-b from-midnight via-deepOcean/30 to-midnight border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: The Operator */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-mermaidTeal/50 transition-all group">
              <div className="w-14 h-14 bg-mermaidTeal/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-mermaidTeal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Operational Strategy</h3>
              <p className="text-moonlightSilver text-sm leading-relaxed">
                <strong>The Nurse Mindset:</strong> I spent 15 years managing hospital units where chaos was the norm and failure wasn't an option. I apply that same rigorous systems thinking to your project—ensuring it launches on time, on budget, and without the stress.
              </p>
            </div>

            {/* Card 2: The Creator */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-phoenixFire/50 transition-all group">
              <div className="w-14 h-14 bg-phoenixFire/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenTool className="w-7 h-7 text-phoenixFire" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Narrative Design</h3>
              <p className="text-moonlightSilver text-sm leading-relaxed">
                <strong>The Author Mindset:</strong> As a published novelist, I know that facts tell, but stories sell. I don't just write code; I craft the visual and written narrative of your brand so it resonates emotionally with your audience.
              </p>
            </div>

            {/* Card 3: The Builder */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-lunarGold/50 transition-all group">
              <div className="w-14 h-14 bg-lunarGold/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-lunarGold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technical Architecture</h3>
              <p className="text-moonlightSilver text-sm leading-relaxed">
                <strong>The Developer Mindset:</strong> Self-taught and obsessed with the bleeding edge. From Next.js web apps to custom AI agents, I build modern, fast, and scalable solutions that put you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE BRAND STORY: Concise & Impactful --- */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
             <p className="text-xs tracking-[0.35em] text-lunarGold uppercase mb-2">My Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              "Classy, Not Flashy."
            </h2>
            <p className="text-moonlightSilver leading-relaxed">
              In a digital world screaming for attention, <strong>clarity is the ultimate luxury</strong>.
            </p>
            <p className="text-moonlightSilver leading-relaxed">
              My studio isn't an agency with 50 interns. It's a boutique consultancy. When you hire Moonlit Studios, you get <em>me</em>—my strategic brain, my creative eye, and my technical hands.
            </p>
            <p className="text-moonlightSilver leading-relaxed">
              I partner with a select number of clients at a time to ensure deep focus. Whether you are a solo founder needing a launchpad or a health-tech startup needing an AI prototype, I treat your business with the same care I used to treat my patients.
            </p>
            
            <div className="pt-4">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-midnight bg-mermaidTeal"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-midnight bg-lunarGold"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-midnight bg-phoenixFire"></div>
                  </div>
                  <div>
                     <p className="text-white font-bold text-sm">Multidisciplinary Approach</p>
                     <p className="text-xs text-moonlightSilver">Design • Code • Strategy</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Visual Element: Abstract "Moonlit" Graphic */}
          <div className="w-full md:w-1/3 flex justify-center relative">
             <div className="absolute inset-0 bg-lunarGold/20 blur-[60px] rounded-full"></div>
             <div className="relative z-10 w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl backdrop-blur-lg p-8 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-4xl">🌙</div>
                <div>
                   <p className="text-lunarGold font-serif italic text-lg mb-2">"The moon does not fight. It simply creates the tides."</p>
                   <p className="text-xs text-starlight/60 uppercase tracking-widest">— Studio Mantra</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <TestimonialsSection limit={3} showTitle={true} />

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 bg-midnightNavy/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Vision. My Craft.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            I am currently accepting new clients for <strong>Q1 2025</strong>. 
            Let's build something that doesn't just look good, but works beautifully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyButton
              url="https://calendly.com/pagadeventures/30min"
              text="Book Free Discovery Call"
              variant="primary"
            />
            <a 
              href="/services"
              className="px-8 py-4 rounded-full border border-slate-700 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group"
            >
              View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}