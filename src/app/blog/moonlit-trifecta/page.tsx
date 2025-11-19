'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { PageCTASection } from '../../components/PageCTASection';

export default function MoonlitTrifectaArticle() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/45 via-lunarGold/30 to-phoenixFire/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-starlight/30 via-tealBright/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-mermaidTeal hover:text-lunarGold transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-moonlightSilver">
            <span className="px-3 py-1 rounded-full bg-mermaidTeal/20 border border-mermaidTeal/40 text-mermaidTeal font-semibold">
              Studio Updates
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-01-15">January 15, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>

          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            The Moonlit Trifecta: Where Healthcare, Code, and Creativity Converge
          </h1>

          <p className="font-serif text-lg sm:text-xl text-moonlightSilver leading-relaxed italic">
            Not your typical developer origin story. Here's how healing, building, and storytelling became the three elements I bend to create digital magic.
          </p>

          <div className="mt-8 pt-8 border-t border-moonlightSilver/20">
            <p className="text-sm text-moonlightSilver">
              By <span className="text-mermaidTeal font-semibold">Hannah Pagade</span>
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="py-12 px-6">
        <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
          <div className="space-y-6 text-moonlightSilver leading-relaxed">
            <p className="text-xl font-serif italic text-pearlWhite/90 leading-relaxed">
              <span className="text-6xl font-elegant text-lunarGold float-left leading-none mr-2 mt-2">ℳ</span>
              ost developers can tell you their origin story in a sentence: "I learned to code, got a job, here we are." Mine involves IVs, fantasy novels, and a whole lot of existential questioning about what it means to build things that matter.
            </p>

            <p>
              I'm not a traditional anything. Not a traditional developer (I care way too much about aesthetics and user feelings). Not a traditional healthcare worker (I'd rather debug a system than stick another IV). Not a traditional creative (I measure success in conversion rates, not just vibes). I'm the intersection of all three—and honestly? That's where the magic lives.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Element One: Healing</h2>

            <p>
              Let's start with the part that usually confuses people. Yes, I worked in healthcare. Yes, I understand clinical workflows, HIPAA compliance, and why EHR systems make nurses want to scream into the void. But here's what that experience really taught me: <strong>systems should serve people, not the other way around.</strong>
            </p>

            <p>
              In healthcare, every click matters. Every confusing interface delays care. Every poorly designed system adds cognitive load to already-exhausted clinicians. I've watched brilliant nurses waste time wrestling with technology that should be helping them. I've seen patients confused by portals that require an IT degree to navigate. And I thought, <em>"Someone should fix this."</em>
            </p>

            <p>
              Plot twist: I became that someone. But not by staying in traditional healthcare roles. By learning to build the systems myself—only better. Faster. More intuitive. Actually designed for the humans using them.
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "Healthcare taught me empathy at scale. Every user is someone's patient, someone's parent, someone's lifeline. Design accordingly."
              </p>
            </div>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Element Two: Building</h2>

            <p>
              Code is logic. Code is structure. Code is the skeleton that everything else hangs on. And I <em>love</em> it—the way a well-architected system feels like a symphony, the satisfaction of solving a problem that's been haunting you for days, the moment when everything finally compiles and runs exactly as intended.
            </p>

            <p>
              But here's the thing about being a developer with a healthcare background: I don't just build features. I build <em>solutions</em>. There's a difference.
            </p>

            <p>
              A feature is "We added a chat function." A solution is "We reduced patient anxiety by 40% because they can now message their care team at 2am when they're panicking about symptoms." A feature is "We implemented AI." A solution is "Nurses save 2 hours per shift because documentation is automated and actually accurate."
            </p>

            <p>
              I code in React, Next.js, TypeScript, Python—whatever the project needs. But the <em>why</em> behind the code? That comes from understanding the humans on the other side of the screen. The nurse working a 12-hour shift. The small business owner juggling ten things at once. The patient trying to manage their health while also just… living their life.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">The Tech Stack That Makes Sense</h3>

            <p>
              I'm not precious about technology. I don't gatekeep or evangelize. The right tool is the one that solves the problem <em>for this specific client</em>—not the one that looks best on my GitHub or fits the latest trend.
            </p>

            <ul className="space-y-2 text-moonlightSilver ml-6">
              <li><strong className="text-pearlWhite">Next.js & React:</strong> For fast, scalable web apps that feel buttery smooth</li>
              <li><strong className="text-pearlWhite">TypeScript:</strong> Because catching errors before production is self-care</li>
              <li><strong className="text-pearlWhite">Python & AI integrations:</strong> For the smart automation stuff—RAG chatbots, data analysis, process optimization</li>
              <li><strong className="text-pearlWhite">Healthcare APIs:</strong> HL7, FHIR, EHR integrations that actually work</li>
              <li><strong className="text-pearlWhite">Whatever else the project needs:</strong> I'm tool-agnostic and problem-obsessed</li>
            </ul>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Element Three: Storytelling</h2>

            <p>
              Here's the wildcard: I'm also a published author. Fantasy romance, to be specific. 300,000+ words of magic systems, character arcs, and emotional devastation (the good kind). And before you ask—yes, this absolutely makes me a better developer and designer.
            </p>

            <p>
              Because storytelling isn't just about novels. It's about <em>experience</em>. Every website tells a story. Every user flow is a narrative arc. Every piece of copy either pulls you in or pushes you away. Most developers treat content as an afterthought. I treat it as the foundation.
            </p>

            <p>
              When I design a website, I'm thinking: What's the hero's journey here? What does the user <em>feel</em> when they land on this page? What transformation are we guiding them toward? A small business owner who's overwhelmed needs to feel <em>understood</em> before they're ready to click "Book a Call." A patient accessing a portal needs to feel <em>safe</em> before they'll trust the system with their data.
            </p>

            <div className="bg-deepOcean/40 border-l-4 border-lunarGold/60 p-6 my-8">
              <p className="text-lg italic text-mermaidTeal/90 m-0">
                "Good design is invisible. Great design makes you feel something. The best design makes you feel something AND converts you into a customer."
              </p>
            </div>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">The Ghibli Effect</h3>

            <p>
              I talk a lot about Studio Ghibli UX—this idea that websites should feel cozy, intentional, and emotionally resonant instead of aggressive and transactional. That philosophy comes straight from storytelling. Hayao Miyazaki doesn't assault you with marketing. He invites you into a world and makes you want to stay. That's what I aim for with every project.
            </p>

            <p>
              No aggressive popups. No dark patterns. No guilt-tripping countdown timers. Just thoughtful design that respects your intelligence, serves your needs, and—here's the revolutionary part—actually makes you <em>enjoy</em> using the website.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Where the Three Converge: Moonlit Studios</h2>

            <p>
              So what happens when you combine healthcare insight, development expertise, and storytelling craft? You get Moonlit Studios—a place where solutions are built with empathy, designed with intention, and delivered with a level of craft that most agencies just... don't bother with.
            </p>

            <p>
              I work with healthcare organizations that need systems that don't suck. Small businesses that want AI-powered tools without the enterprise budget. Creatives who need digital presences that actually represent their work. Enterprises navigating digital transformation who are tired of consultants who've never touched production code.
            </p>

            <p>
              And because I sit at this weird intersection of worlds, I can:
            </p>

            <ul className="space-y-3 text-moonlightSilver ml-6 my-6">
              <li>Build HIPAA-compliant telehealth platforms that <em>clinicians actually want to use</em></li>
              <li>Design patient portals that reduce support calls because they're <em>actually intuitive</em></li>
              <li>Create AI chatbots that understand context and brand voice, not just generic responses</li>
              <li>Write website copy that converts because it <em>tells a story</em>, not just lists features</li>
              <li>Develop booking systems, email automation, and business tools that <em>work</em>—no bloat, no friction</li>
              <li>Consult on tech strategy with someone who's actually built systems at scale, not just theorized about them</li>
            </ul>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Moonlit Philosophy</h2>

            <p>
              At the core of everything I build is this belief: <strong>Technology should amplify human potential, not replace human connection.</strong>
            </p>

            <p>
              AI should save you time so you can focus on the work that matters—not make you obsolete. Automation should handle the tedious stuff—not strip away the personal touch that makes your business special. Websites should convert visitors—but not by manipulating them into clicking things they'll regret.
            </p>

            <p>
              I care about accessible design (because everyone deserves good UX). I care about performance (because your users aren't all on gigabit fiber). I care about security (because "it probably won't get hacked" is not a strategy). And I care about whether the thing I'm building actually <em>solves the problem</em>—not just checks a box on a project brief.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Not Your Typical Origin Story</h2>

            <p>
              So no, I can't give you the neat, linear developer origin story. Mine zigs where others zag. It includes patient care and fantasy novels and late-night debugging sessions fueled by cold brew and spite. It doesn't fit neatly into a LinkedIn headline.
            </p>

            <p>
              But that's exactly why it works. The best solutions don't come from staying in your lane—they come from borrowing liberally from every lane you've ever driven in and building something new at the intersection.
            </p>

            <p className="text-xl text-pearlWhite/90 font-serif italic mt-8">
              Healthcare taught me empathy. Code taught me structure. Storytelling taught me how to make people feel. And Moonlit Studios? That's where all three elements converge into something that actually <em>works</em>.
            </p>

            <p>
              Welcome to the trifecta. ✨
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span className="text-sm text-moonlightSilver">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Personal Story</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Healthcare</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Development</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Creativity</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Brand Story</span>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 px-6 bg-deepOcean/30 border-t border-moonlightSilver/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/most-influential-women-2025" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Press & Features</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                Featured in Most Influential Women: Building Moonlit Studios
              </h3>
              <p className="text-moonlightSilver text-sm">How Moonlit Studios came to be...</p>
            </Link>

            <Link href="/blog/ghibli-ux-philosophy" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Design & Brand</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Studio Ghibli UX Philosophy: Why Cozy Websites Win
              </h3>
              <p className="text-moonlightSilver text-sm">Forget aggressive popups...</p>
            </Link>

            <Link href="/blog/hipaa-compliance-nurses-perspective" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Healthcare x Tech</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                HIPAA Compliance for Developers: What Nurses Wish You Knew
              </h3>
              <p className="text-moonlightSilver text-sm">Building healthcare tech without clinical experience?...</p>
            </Link>
          </div>
        </div>
      </section>

      <PageCTASection />
    </main>
  );
}
