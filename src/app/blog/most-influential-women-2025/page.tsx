'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { PageCTASection } from '../../components/PageCTASection';

export default function MostInfluentialWomenArticle() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-lunarGold/45 via-phoenixFire/30 to-mermaidTeal/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-starlight/30 via-tealBright/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Back to Blog Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-mermaidTeal hover:text-lunarGold transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          {/* Featured Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-300 to-lunarGold text-xs font-bold text-midnight shadow-lg">
              ✨ FEATURED IN MOST INFLUENTIAL WOMEN
            </span>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-moonlightSilver">
            <span className="px-3 py-1 rounded-full bg-lunarGold/20 border border-lunarGold/40 text-lunarGold font-semibold">
              Press & Features
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-01-18">January 18, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Featured in Most Influential Women: Building Moonlit Studios
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg sm:text-xl text-moonlightSilver leading-relaxed italic">
            How Moonlit Studios came to be, why I'm building it, and how it serves individuals, small businesses, and enterprises through healthcare tech, AI innovation, and creative design.
          </p>

          {/* Author */}
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
          {/* Opening */}
          <div className="space-y-6 text-moonlightSilver leading-relaxed">
            <p className="text-xl font-serif italic text-pearlWhite/90 first-letter:text-6xl first-letter:font-elegant first-letter:text-lunarGold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2">
              There's something poetic about building software under moonlight. Maybe it's the way problems untangle themselves when the world quiets down, or how creativity flows differently when you're not racing against the sun. That's how Moonlit Studios was born—not from a business plan or a pitch deck, but from late-night code sessions where healthcare meets innovation, and logic dances with imagination.
            </p>

            <p>
              I'm Hannah Pagade, and I'm building something a little different here. Moonlit Studios isn't just a software development shop, and it's definitely not your typical tech consultancy. Think of it more as... a creative studio that happens to speak fluent code. A place where healthcare systems get smarter, businesses get AI-powered superpowers, and brands come alive with designs that actually feel human.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Moonlit Trifecta: Healthcare, Code & Creativity</h2>

            <p>
              Here's the thing about my background—it doesn't fit neatly into a LinkedIn category. I've worked in healthcare long enough to understand the weight of patient data, the chaos of hospital systems, and why HIPAA compliance isn't just checkbox bureaucracy—it's about protecting people at their most vulnerable. But I've also spent years writing code that makes those systems actually work, and even more time crafting stories and designs that make people <em>feel</em> something.
            </p>

            <p>
              Most developers understand APIs. I understand why a nurse is frustrated when an EHR system takes twelve clicks to do what should take two. Most designers can make something pretty. I can make something pretty that also converts visitors into customers because I understand the psychology behind the pixels. And most healthcare consultants understand compliance. I understand compliance <em>and</em> how to build systems that are secure, scalable, and don't make clinicians want to throw their computers out the window.
            </p>

            <p className="text-xl italic text-mermaidTeal/90 border-l-4 border-lunarGold/40 pl-6 my-8">
              "The best solutions happen when you stop thinking in silos and start thinking in symphonies."
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Who Moonlit Studios Serves (Spoiler: Everyone)</h2>

            <p>
              One of the questions I get asked most is: "Who is this for?" And honestly? Anyone who's tired of cookie-cutter solutions that don't actually solve their problems.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For Individuals: Your Digital Presence, Reimagined</h3>

            <p>
              Maybe you're an author who needs a website that feels like your book—not a generic WordPress template. Or you're a creative professional who wants a portfolio that makes art directors stop scrolling. Individual clients get the white-glove treatment here: custom design, thoughtful UX, and websites that tell your story in a way that actually resonates. No templates. No "this will do." Just you, distilled into pixels and poetry.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For Small Businesses: AI-Powered Growth Without the Enterprise Budget</h3>

            <p>
              Small businesses are where my heart lives. You're the cafe owner who needs an online presence that brings people through the door. The boutique salon that wants a booking system that doesn't cost $500/month. The local service provider who dreams of having a 24/7 assistant but can't afford to hire one.
            </p>

            <p>
              That's where the magic happens. I build AI chatbots that understand <em>your</em> business—not generic ChatGPT responses, but RAG (Retrieval Augmented Generation) systems that know your menu, your services, your brand voice. I create websites that don't just look good—they convert visitors into customers with Ghibli-inspired UX that feels cozy instead of aggressive. Booking systems, email automation, customer portals—all the enterprise-level tools, tailored for businesses that actually need them.
            </p>

            <h3 className="font-elegant text-2xl text-lunarGold mt-8 mb-4">For Enterprises: Healthcare Tech That Doesn't Make Clinicians Cry</h3>

            <p>
              And then there are the big players. Enterprises with legacy systems held together by duct tape and prayers. Healthcare organizations that need HIPAA-compliant AI integrations. Companies that want to modernize but are terrified of breaking everything in the process.
            </p>

            <p>
              This is where the healthcare background becomes pure gold. I've seen what happens when developers build health tech without understanding clinical workflows. Spoiler: it doesn't end well. Moonlit Studios specializes in building systems that are secure, compliant, scalable, and—here's the revolutionary part—actually usable by the humans who have to interact with them.
            </p>

            <p>
              EHR integrations. Patient portals that patients <em>want</em> to use. AI-powered documentation tools that save clinicians hours. Telehealth platforms that don't require an IT degree to operate. Healthcare meets innovation, minus the corporate bloat.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Why "Moonlit"?</h2>

            <p>
              People ask about the name a lot. Why Moonlit Studios? Why the cosmic branding?
            </p>

            <p>
              Because the moon represents transformation. It's the same celestial body every night, yet it looks different—waxing, waning, full, new, eclipsed. It influences tides, illuminates paths, and has inspired poets and scientists for millennia. That's what I want for every project: transformation. Taking what exists and making it better. Illuminating the path forward. Balancing the analytical (the science of code) with the artistic (the poetry of design).
            </p>

            <p>
              Plus, let's be honest—most tech companies have names like "SynergyCore Solutions" or "TechForward Innovations." Where's the magic in that? I want clients to remember us. I want our work to feel special. I want to build things that make people say, "Wait, <em>you</em> built that?"
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Work Itself: Where the Studio Comes Alive</h2>

            <p>
              Moonlit Studios is organized around what I call "creative constellations"—six core service areas that all orbit around the same mission: building digital solutions that are powerful, beautiful, and actually human-friendly.
            </p>

            <div className="bg-deepOcean/40 border border-mermaidTeal/20 rounded-lg p-6 my-8">
              <ul className="space-y-4 text-moonlightSilver">
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">⚕️</span>
                  <div>
                    <strong className="text-pearlWhite">Healthcare x Tech:</strong> HIPAA-compliant systems, EHR integrations, patient portals, telehealth platforms, AI-powered clinical documentation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">🤖</span>
                  <div>
                    <strong className="text-pearlWhite">AI & Automation:</strong> Custom RAG chatbots, business process automation, AI-powered customer service, predictive analytics
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">🎨</span>
                  <div>
                    <strong className="text-pearlWhite">Creative Design & Development:</strong> Brand identity, web design/development, UI/UX that converts, packaging design
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">✍️</span>
                  <div>
                    <strong className="text-pearlWhite">Author & Ghostwriting:</strong> Blog content, website copy, newsletters, books & cookbooks, author platforms (yes, I've published 300K+ words as a fantasy romance author)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">📈</span>
                  <div>
                    <strong className="text-pearlWhite">Business Growth:</strong> Email automation, customer portals, booking systems, conversion optimization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lunarGold font-bold mt-1">🎯</span>
                  <div>
                    <strong className="text-pearlWhite">Consulting & Strategy:</strong> Tech stack selection, system audits, digital transformation roadmaps
                  </div>
                </li>
              </ul>
            </div>

            <p>
              The beauty is that these services don't live in isolation. A small business might start with a website redesign and realize they need an AI chatbot. A healthcare enterprise might come for HIPAA compliance consulting and leave with a full patient engagement platform. An author might need a brand identity that extends into a full content strategy. Everything connects.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Philosophy: Ghibli UX Meets Enterprise Power</h2>

            <p>
              If there's one design philosophy that guides everything I build, it's this: technology should feel like a warm hug, not a cold transaction.
            </p>

            <p>
              I'm obsessed with Studio Ghibli films—not just because they're beautiful (though they absolutely are), but because they master the art of creating worlds that feel cozy, intentional, and emotionally resonant. There's no aggressive marketing. No pop-ups screaming at you. Just thoughtful design that invites you in and makes you want to stay.
            </p>

            <p>
              That's the energy I bring to every website, every app, every interface. Yes, it needs to convert. Yes, it needs to be powerful. But it also needs to <em>feel good</em>. Users should enjoy the experience. They should trust the system. They should feel like the technology was built <em>for them</em>, not at them.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">What's Next: The Vision</h2>

            <p>
              Being featured in Most Influential Women feels surreal—and incredibly validating. It's a reminder that building something different, something that doesn't fit the traditional mold, resonates with people. That there's space in this industry for developers who also understand patient care. For designers who also write code. For storytellers who also build AI systems.
            </p>

            <p>
              The vision for Moonlit Studios is simple: keep building things that matter. Keep working with clients who value craftsmanship over speed. Keep pushing the boundaries of what healthcare tech can be. Keep creating digital experiences that don't feel like "software"—they feel like magic.
            </p>

            <p>
              Because at the end of the day, that's what drives me. Not the tech stack. Not the buzzwords. But the moment when a small business owner sees their new website and tears up because it finally <em>gets</em> their vision. When a healthcare team realizes their new system actually saves them time instead of adding work. When an author's personal brand comes to life in ways they never imagined.
            </p>

            <p className="text-xl italic text-mermaidTeal/90 border-l-4 border-lunarGold/40 pl-6 my-8">
              "We're not building software. We're building solutions that happen to use software. There's a difference."
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Let's Build Something Moonlit</h2>

            <p>
              Whether you're an individual with a creative vision, a small business ready to level up, or an enterprise navigating digital transformation—there's a place for you here. Moonlit Studios isn't about one-size-fits-all packages. It's about understanding your specific challenge, your unique context, your actual needs—and then building something that works.
            </p>

            <p>
              So if you're tired of cookie-cutter solutions... if you want technology that feels human... if you need someone who understands both the clinical and the creative, the analytical and the artistic, the enterprise-scale and the indie heart—
            </p>

            <p className="text-xl text-pearlWhite font-semibold">
              Welcome to Moonlit Studios. Let's create something beautiful together.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span className="text-sm text-moonlightSilver">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Press</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Most Influential Women</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Moonlit Studios</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Entrepreneurship</span>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <p className="text-sm text-moonlightSilver mb-4">Share this article:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-deepOcean/50 border border-mermaidTeal/30 text-mermaidTeal hover:bg-mermaidTeal/10 transition-all text-sm font-semibold">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-deepOcean/50 border border-mermaidTeal/30 text-mermaidTeal hover:bg-mermaidTeal/10 transition-all text-sm font-semibold">
                LinkedIn
              </button>
              <button className="px-4 py-2 rounded-lg bg-deepOcean/50 border border-mermaidTeal/30 text-mermaidTeal hover:bg-mermaidTeal/10 transition-all text-sm font-semibold">
                Copy Link
              </button>
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
            <Link href="/blog/moonlit-trifecta" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Studio Updates</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Moonlit Trifecta: Where Healthcare, Code, and Creativity Converge
              </h3>
              <p className="text-moonlightSilver text-sm">Not your typical developer origin story...</p>
            </Link>

            <Link href="/blog/ghibli-ux-philosophy" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">Design & Brand</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                The Studio Ghibli UX Philosophy: Why Cozy Websites Win
              </h3>
              <p className="text-moonlightSilver text-sm">Forget aggressive popups and overwhelming CTAs...</p>
            </Link>

            <Link href="/blog/rag-chatbots-context-matters" className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20 p-6">
              <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold text-xs">AI & Automation</span>
              <h3 className="font-elegant text-xl font-semibold text-pearlWhite mt-4 mb-3 group-hover:text-lunarGold transition-colors">
                RAG Chatbots: Why Your AI Needs to Remember the Conversation
              </h3>
              <p className="text-moonlightSilver text-sm">Your business doesn't need ChatGPT...</p>
            </Link>
          </div>
        </div>
      </section>

      <PageCTASection />
    </main>
  );
}
