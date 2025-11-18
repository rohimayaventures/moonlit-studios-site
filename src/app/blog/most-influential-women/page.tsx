'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { PageCTASection } from '../../components/PageCTASection';

export default function MostInfluentialWomenArticle() {
  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-midnight/95 backdrop-blur-sm border-b border-mermaidTeal/20 py-4 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-mermaidTeal hover:text-lunarGold transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 sm:py-16 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-300 to-lunarGold text-xs font-bold text-midnight shadow-lg">
              Featured in Most Influential Women Magazine
            </span>
          </div>

          {/* Title */}
          <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-pearlWhite">
            Breaking Barriers: Women in Healthcare Technology
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-moonlightSilver leading-relaxed mb-8 italic">
            How 15 years in healthcare operations, a published author career, and self-taught coding skills converged to create AI-powered solutions that transform clinical workflows
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-moonlightSilver pb-8 border-b border-moonlightSilver/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-mermaidTeal" />
              <time dateTime="2025-01-18">January 18, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-mermaidTeal" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-mermaidTeal" />
              <span>Women in Tech</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mt-12 space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg">
                When people ask how I ended up building AI-powered healthcare systems, I tell them it wasn't a straight path—it was five moon phases of transformation. From bedside nursing to leading 130+ team members, from publishing 300,000+ words of fantasy romance to writing TypeScript and Python, each phase taught me something essential about solving real problems with technology.
              </p>
            </div>

            {/* Section 1: The Healthcare Foundation */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                🌑 New Moon: The Bedside Healer
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                It started with patient care—the most important work in healthcare. Every shift taught me to see patterns, to catch the subtle changes that mean everything, to communicate clearly under pressure. But more than that, bedside nursing taught me empathy. Technology means nothing if it doesn't serve the humans using it.
              </p>
              <div className="p-6 rounded-lg bg-gradient-to-br from-mermaidTeal/10 to-lunarGold/5 border border-mermaidTeal/20">
                <p className="text-moonlightSilver italic text-sm sm:text-base">
                  "The best healthcare technology doesn't replace human connection—it enhances it by removing friction so clinicians can focus on what matters: the patient."
                </p>
              </div>
            </div>

            {/* Section 2: Operations Leadership */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                🌓 Waxing Crescent: The Operations Master
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                Leading healthcare operations for 130+ team members across multiple clinics changed everything. I saw the systems-level problems: inefficient workflows, data siloed in different platforms, clinicians buried in administrative tasks that AI could handle. I achieved a 96% regulatory audit success rate—not because I was perfect, but because I understood processes, data integrity, and operational excellence.
              </p>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg">
                This experience became my secret weapon as a developer. I don't just build features—I build systems that understand clinical workflows because I lived them.
              </p>
            </div>

            {/* Section 3: The Storyteller */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                🌕 Full Moon: The Storyteller Emerges
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                Parallel to my healthcare career, I published 300,000+ words as a fantasy romance author. Writing taught me narrative design—how to create emotional arcs, build tension, deliver payoff. These skills translated directly into UX design: every user journey is a story, every interface should guide users toward a satisfying conclusion.
              </p>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg">
                Plus, let's be honest—naming variables, writing documentation, and crafting user-facing copy are all forms of storytelling. My author brain makes me a better developer.
              </p>
            </div>

            {/* Section 4: Learning to Code */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                🌗 Waning Crescent: The Code Awakening
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                In 2023, I taught myself full-stack development. Not because it was easy (it wasn't), but because I was tired of watching healthcare technology fail clinicians. I learned Next.js, TypeScript, React, Python, AI/ML engineering—not from traditional CS degrees, but from building real projects that solved real problems.
              </p>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                Being self-taught as a woman in tech comes with impostor syndrome. But here's what I learned: my "non-traditional" background is my strength. I see problems developers without healthcare experience miss. I design UX that clinicians actually want to use. I build AI systems that understand the nuance of patient care.
              </p>
            </div>

            {/* Section 5: The Convergence */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                🌌 Moonlit Studios: The Avatar State
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                Now I run Moonlit Studios, where healthcare expertise, creative storytelling, and technical innovation converge. I build:
              </p>
              <ul className="list-disc list-inside space-y-2 text-moonlightSilver text-base sm:text-lg ml-4">
                <li><strong className="text-mermaidTeal">HIPAA-compliant platforms</strong> designed by someone who understands clinical workflows from the inside</li>
                <li><strong className="text-mermaidTeal">AI-powered chatbots</strong> that actually understand healthcare context (not generic GPT wrappers)</li>
                <li><strong className="text-mermaidTeal">Patient portals</strong> with UX crafted by a former clinician who knows what patients need</li>
                <li><strong className="text-mermaidTeal">Operational automation</strong> that frees clinicians from administrative burden</li>
              </ul>
            </div>

            {/* Closing: Advice for Women in Tech */}
            <div>
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4">
                For Women Breaking Into Tech
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg mb-4">
                If you're a woman considering a career change into technology, especially from healthcare, here's what I wish someone had told me:
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-gradient-to-br from-mermaidTeal/10 to-deepOcean/20 border-l-4 border-mermaidTeal">
                  <h3 className="font-semibold text-mermaidTeal mb-2 text-lg">Your "Non-Tech" Background Is Your Superpower</h3>
                  <p className="text-moonlightSilver text-sm sm:text-base">
                    Domain expertise in healthcare, education, finance, or any other field makes you invaluable. Tech needs people who understand the problems, not just the code.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-gradient-to-br from-lunarGold/10 to-deepOcean/20 border-l-4 border-lunarGold">
                  <h3 className="font-semibold text-lunarGold mb-2 text-lg">You Don't Need a CS Degree</h3>
                  <p className="text-moonlightSilver text-sm sm:text-base">
                    I built production-grade AI systems, HIPAA-compliant platforms, and full-stack applications without a traditional CS background. What matters is solving real problems and continuous learning.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-gradient-to-br from-phoenixFire/10 to-deepOcean/20 border-l-4 border-phoenixFire">
                  <h3 className="font-semibold text-phoenixFire mb-2 text-lg">Build in Public</h3>
                  <p className="text-moonlightSilver text-sm sm:text-base">
                    Share your journey, your struggles, your wins. The tech community is more welcoming than you think, and your story will inspire others.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-gradient-to-br from-starlight/10 to-deepOcean/20 border-l-4 border-starlight">
                  <h3 className="font-semibold text-starlight mb-2 text-lg">Impostor Syndrome Never Fully Goes Away</h3>
                  <p className="text-moonlightSilver text-sm sm:text-base">
                    And that's okay. Channel it into curiosity and continuous learning instead of self-doubt. Every expert was once a beginner.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-mermaidTeal/20 via-lunarGold/10 to-phoenixFire/15 border border-mermaidTeal/30">
              <h2 className="font-elegant text-2xl sm:text-3xl font-semibold text-pearlWhite mb-4 text-center">
                The Future Is Interdisciplinary
              </h2>
              <p className="text-moonlightSilver leading-relaxed text-base sm:text-lg text-center max-w-2xl mx-auto">
                The most innovative solutions come from people who bridge multiple worlds—healthcare and tech, art and engineering, clinical care and code. Women like us, with our non-linear paths and diverse expertise, are exactly what the tech industry needs.
              </p>
              <p className="text-center mt-6">
                <span className="text-lunarGold font-semibold text-lg">
                  Healthcare meets code. Stories meet systems. 🌙
                </span>
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-deepOcean/40 to-midnight/80 border border-moonlightSilver/20">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-mermaidTeal to-lunarGold flex items-center justify-center">
                  <span className="text-3xl font-bold text-midnight">D</span>
                </div>
              </div>
              <div>
                <h3 className="font-elegant text-xl font-semibold text-pearlWhite mb-2">Destiny Marable</h3>
                <p className="text-sm text-mermaidTeal mb-3">Founder & Full-Stack AI Developer @ Moonlit Studios</p>
                <p className="text-moonlightSilver text-sm leading-relaxed">
                  15+ years healthcare operations leader turned self-taught full-stack AI developer. Published fantasy romance author (300K+ words).
                  Building HIPAA-compliant AI systems that actually understand clinical workflows. Based in the Pacific Northwest, powered by chai and moonlight.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link href="/about" className="text-sm text-mermaidTeal hover:text-lunarGold transition-colors font-semibold">
                    Learn More →
                  </Link>
                  <Link href="/contact" className="text-sm text-mermaidTeal hover:text-lunarGold transition-colors font-semibold">
                    Work Together →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Women in Tech', 'Healthcare Technology', 'AI Innovation', 'Career Change', 'Self-Taught Developer', 'Leadership'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-xs text-mermaidTeal"
              >
                #{tag.toLowerCase().replace(/\s+/g, '')}
              </span>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-12 text-center">
            <p className="text-moonlightSilver mb-4">Share this article</p>
            <div className="flex justify-center gap-4">
              <a href="https://twitter.com/intent/tweet?url=https://moonlitstudios.com/blog/most-influential-women" target="_blank" rel="noopener noreferrer" className="text-mermaidTeal hover:text-lunarGold transition-colors">
                Twitter
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://moonlitstudios.com/blog/most-influential-women" target="_blank" rel="noopener noreferrer" className="text-mermaidTeal hover:text-lunarGold transition-colors">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://moonlitstudios.com/blog/most-influential-women" target="_blank" rel="noopener noreferrer" className="text-mermaidTeal hover:text-lunarGold transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <PageCTASection />
    </main>
  );
}
