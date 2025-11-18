'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PageCTASection } from '../components/PageCTASection';
import { blogPosts, getAllCategories, type BlogCategory } from './blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');

  const pinnedPosts = blogPosts.filter(p => p.pinned);
  const featuredPosts = blogPosts.filter(p => p.featured && !p.pinned);
  const regularPosts = blogPosts.filter(p => !p.featured && !p.pinned);

  const filteredPosts = selectedCategory === 'All'
    ? [...featuredPosts, ...regularPosts]
    : blogPosts.filter(p => p.category === selectedCategory && !p.pinned);

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO with Moon Phases */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/45 via-lunarGold/30 to-phoenixFire/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-starlight/30 via-tealBright/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases - 5 phases */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-amber-300/50 shadow-lg shadow-amber-300/30 animate-pulse flex-shrink-0" style={{ animationDuration: '3s' }} />
              <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-amber-300/40 to-teal-400/40" />
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-midnight via-teal-400/50 to-teal-400/70 border-2 border-teal-400/60 shadow-lg shadow-teal-400/40 animate-pulse flex-shrink-0" style={{ animationDuration: '3.5s' }} />
              <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-teal-400/50 to-lunarGold/60" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-200 via-lunarGold to-amber-400 border-2 border-lunarGold/80 shadow-xl shadow-lunarGold/60 animate-pulse flex-shrink-0" style={{ animationDuration: '2.5s' }} />
              <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-lunarGold/60 to-teal-400/50" />
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-teal-400/70 via-teal-400/50 to-midnight border-2 border-teal-400/60 shadow-lg shadow-teal-400/40 animate-pulse flex-shrink-0" style={{ animationDuration: '3.5s' }} />
              <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-teal-400/40 to-amber-300/40" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-amber-300/50 shadow-lg shadow-amber-300/30 animate-pulse flex-shrink-0" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          <div className="text-center space-y-4 sm:space-y-6 px-4">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase">Moonlit Studios Blog</p>
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Stories, Insights & Wisdom
            </h1>
            <p className="font-serif text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto italic">
              Healthcare tech. AI innovation. Creative design. Entrepreneurship. Code, care, and creativity converge here.
            </p>
          </div>
        </div>
      </section>

      {/* PINNED/FEATURED POST */}
      {pinnedPosts.length > 0 && (
        <section className="py-8 px-6 bg-gradient-to-b from-deepOcean/50 to-midnight">
          <div className="mx-auto max-w-5xl">
            {pinnedPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block relative overflow-hidden rounded-2xl border-2 border-lunarGold/40 bg-gradient-to-br from-lunarGold/10 via-phoenixFire/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-lunarGold/30"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-300 to-lunarGold text-xs font-bold text-midnight shadow-lg">
                    ✨ FEATURED IN MOST INFLUENTIAL WOMEN
                  </span>
                </div>

                <div className="p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-4 text-xs text-lunarGold">
                    <span className="px-3 py-1 rounded-full bg-lunarGold/20 border border-lunarGold/40 font-semibold">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>

                  <h2 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-pearlWhite mb-4 group-hover:text-lunarGold transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-moonlightSilver text-base sm:text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-lunarGold font-semibold group-hover:gap-3 transition-all">
                    Read Full Article
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CATEGORY FILTERS */}
      <section className="py-8 px-6 bg-midnight/50">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${ selectedCategory === 'All' ? 'bg-gradient-to-r from-mermaidTeal to-lunarGold text-midnight' : 'bg-deepOcean/40 text-moonlightSilver border border-moonlightSilver/20 hover:border-mermaidTeal/50' }`}
            >
              All Posts
            </button>
            {getAllCategories().map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${ selectedCategory === cat ? 'bg-gradient-to-r from-mermaidTeal to-lunarGold text-midnight' : 'bg-deepOcean/40 text-moonlightSilver border border-moonlightSilver/20 hover:border-mermaidTeal/50' }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/20"
              >
                <div className="h-48 bg-gradient-to-br from-mermaidTeal/15 via-lunarGold/10 to-phoenixFire/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-midnight/60" />
                  <span className="relative z-10 text-moonlightSilver/40 text-sm font-serif italic">Image placeholder</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-mermaidTeal font-semibold">
                      {post.category}
                    </span>
                    <time className="text-moonlightSilver" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </time>
                    <span className="text-moonlightSilver">•</span>
                    <span className="text-moonlightSilver">{post.readTime}</span>
                  </div>

                  <h3 className="font-elegant text-xl font-semibold text-pearlWhite mb-3 group-hover:text-lunarGold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-moonlightSilver text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-mermaidTeal font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-12 sm:py-16 px-6 bg-gradient-to-b from-midnight to-deepOcean border-y border-mermaidTeal/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
            Stay in the Loop
          </h2>
          <p className="text-moonlightSilver text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Get insights on healthcare tech, AI innovation, creative design, and entrepreneurship delivered to your inbox. No spam, just moonlit wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-deepOcean/50 border border-mermaidTeal/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:ring-2 focus:ring-mermaidTeal/50"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-mermaidTeal to-lunarGold text-midnight font-semibold hover:shadow-lg hover:shadow-mermaidTeal/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <PageCTASection />
    </main>
  );
}
