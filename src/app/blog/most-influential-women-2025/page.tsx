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
              <span>10 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            ROOTED IN TWO WORLDS: The Courage to Begin Again
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg sm:text-xl text-moonlightSilver leading-relaxed italic">
            A Most Influential Women feature on rebuilding, creating, and leading with empathy.
          </p>

          {/* Author */}
          <div className="mt-8 pt-8 border-t border-moonlightSilver/20">
            <p className="text-sm text-moonlightSilver">
              By <span className="text-mermaidTeal font-semibold">Hannah Kraulik Pagade</span>
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
              I never expected my story to become one worth sharing.
            </p>

            <p>
              For most of my life, I saw myself as someone who simply survived whatever came next—someone who kept moving because stopping wasn't an option. Growing up in North Carolina, surrounded by quiet resilience and generations of strength, I learned how to care deeply, endure quietly, and rebuild without applause.
            </p>

            <p>
              Those lessons followed me into nursing, where I spent more than 15 years witnessing the most intimate forms of human vulnerability. And in those moments, I learned the most life-altering truth: healing is not solely clinical. Healing is emotional, spiritual, cultural, and deeply human.
            </p>

            <p>
              Yet for years, I didn't offer myself the same healing I gave to others.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Starting Over</h2>

            <p>
              Life has a way of unraveling you when you least expect it—through heartbreak, through change, through moments where your identity slips through your fingers. There were times I didn't recognize the woman looking back at me. I had to start over more than once: emotionally, financially, spiritually, and professionally.
            </p>

            <p>
              But starting over became my greatest teacher.
            </p>

            <p>
              When I met my husband, and we eventually made our home in Colorado, it felt like stepping into a new chapter that honored both where I came from and where I was going. My North Carolina roots and our family's global influences gave me a new lens: it was possible to build a life that was both grounded and expansive, practical and magical.
            </p>

            <p>
              From that foundation, I began to build with intention.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">Building with Intention</h2>

            <p>
              What started as a quiet vision grew into a creative–tech–cultural ecosystem shaped by empathy, heritage, healing, and innovation. Nothing I build is random. Every venture is a chapter in the same story: helping people transform, connect, and rise.
            </p>

            <p>
              <strong className="text-pearlWhite">Rohimaya Health AI</strong>, our health-tech work, is built through empathy-centered thinking, a bridge between my years as a nurse and my love for human-focused technology.
            </p>

            <p>
              <strong className="text-pearlWhite">Two Peaks Chai Co.</strong> celebrates comfort, culture, and connection—turning stories, memory, and warmth into something you can hold in your hands.
            </p>

            <p>
              <strong className="text-pearlWhite">Moonlit Studios</strong> is the creative-tech studio at the heart of it all. It's where I partner with individuals, small businesses, and larger teams to bring clarity, identity, and storytelling into their digital presence. Here, no project is "too small." Everyone deserves to shine.
            </p>

            <p>
              <strong className="text-pearlWhite">LaidOffRise</strong>—one of the most meaningful projects in development—is a platform designed to help people rise after job loss. It focuses on support, structure, and dignity for anyone rebuilding their livelihood. Because no one should feel alone at the moment their world falls apart.
            </p>

            <p>
              Under <strong className="text-pearlWhite">Rohimaya Publishing</strong>, I write both fantasy fiction and narrative-driven work that blend culture, memory, and healing. Whether it's a fantasy series or a cookbook infused with story, the heartbeat is the same: transformation, identity, and emotional resilience.
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">An Ecosystem of Empathy</h2>

            <p>
              Every part of this ecosystem exists because I believe:
            </p>

            <ul className="space-y-3 text-moonlightSilver my-6">
              <li>• empathy should scale</li>
              <li>• culture should be honored</li>
              <li>• creativity should heal</li>
              <li>• reinvention should be accessible</li>
              <li>• and people—of every size, budget, and background—deserve to be seen.</li>
            </ul>

            <p className="text-xl italic text-mermaidTeal/90 border-l-4 border-lunarGold/40 pl-6 my-8">
              "Being an influential woman doesn't mean living a perfect story. It means surviving the imperfect ones."
            </p>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">What It Means to Be Influential</h2>

            <p>
              Women, especially, know the weight of beginning again.
            </p>

            <p>
              We are often the silent architects of our homes, our families, our dreams, and our pain. We reinvent quietly, we sacrifice loudly, and we rise continuously—even when the world doesn't notice.
            </p>

            <p>
              Being an influential woman doesn't mean living a perfect story. It means surviving the imperfect ones. It means choosing yourself when it feels impossible. It means letting your softness and your strength coexist. It means stepping into every chapter with courage, even when your voice shakes.
            </p>

            <p>
              If I have any influence at all, I want it to come from honesty—not polish.
            </p>

            <p>
              I want women to know that:
            </p>

            <ul className="space-y-3 text-moonlightSilver my-6">
              <li>• your story is not over because a chapter hurt</li>
              <li>• you are worthy of every reinvention</li>
              <li>• you can build again—more than once</li>
              <li>• you're allowed to hold many identities without apologizing</li>
              <li>• and your dreams don't have to be "big enough" for the world—they just have to be true to you.</li>
            </ul>

            <h2 className="font-elegant text-3xl text-pearlWhite mt-12 mb-6">The Courage to Begin Again</h2>

            <p>
              Today, I build, write, and create from Colorado, raising my family and shaping work that reflects everything I believe in: empathy, culture, courage, creativity, and connection. My journey isn't perfect. But it is real. It is evolving. It is mine.
            </p>

            <p>
              And if sharing it helps even one woman believe she can begin again—with courage, with softness, with fire—then every step has been worth it.
            </p>

            <p className="text-xl italic text-mermaidTeal/90 border-l-4 border-lunarGold/40 pl-6 my-8">
              "The courage to begin again is not something you find. It's something you choose. Every single day."
            </p>

            <p className="text-xl text-pearlWhite font-semibold mt-12">
              Because the courage to begin again is not something you find. It's something you choose. Every single day.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-moonlightSilver/20">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span className="text-sm text-moonlightSilver">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Press</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Most Influential Women</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Women in Leadership</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Founders & Creators</span>
              <span className="px-3 py-1 rounded-full bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal text-sm">Personal Journey</span>
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
