'use client';

import Link from 'next/link';
import { PageCTASection } from '../components/PageCTASection';

// 📝 BLOG POST DATA - Add new posts here!
const blogPosts = [
  {
    id: 'from-nurse-to-coder',
    title: 'From Nurse to Coder: My Journey into Healthcare Technology',
    slug: 'from-nurse-to-coder',
    excerpt: 'How 15+ years in healthcare operations led me to build AI-powered systems that actually understand clinical workflows.',
    category: 'Journey',
    date: '2025-01-15',
    readTime: '8 min read',
    image: '/blog/nurse-coder-journey.jpg', // Update with actual image path
    featured: true,
    tags: ['Healthcare', 'Coding', 'AI', 'Career Change'],
  },
  {
    id: 'most-influential-women',
    title: 'Breaking Barriers: Women in Healthcare Technology',
    slug: 'most-influential-women',
    excerpt: 'Featured in Most Influential Women magazine - how healthcare expertise and tech innovation come together to create meaningful solutions.',
    category: 'Featured',
    date: '2025-01-18',
    readTime: '6 min read',
    image: '/blog/influential-women.jpg', // Update with actual image path
    featured: true,
    tags: ['Women in Tech', 'Healthcare', 'Innovation', 'Leadership'],
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-midnight text-pearlWhite">
      {/* HERO SECTION with Moon Phases */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-mermaidTeal/45 via-lunarGold/30 to-phoenixFire/35 blur-3xl animate-floatSlow" />
          <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-starlight/30 via-tealBright/25 to-deepOcean/40 blur-3xl" style={{ animation: 'floatSlow 20s ease-in-out infinite 5s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-6 sm:space-y-8">
          {/* Moon Phases - 5 phases with pulsing animation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-6 sm:mb-8">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-amber-300/50 shadow-lg shadow-amber-300/30 animate-pulse flex-shrink-0"
              title="New Moon - New Ideas"
              style={{ animationDuration: '3s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-amber-300/40 to-teal-400/40" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-midnight via-teal-400/50 to-teal-400/70 border-2 border-teal-400/60 shadow-lg shadow-teal-400/40 animate-pulse flex-shrink-0"
              title="Crescent - Stories Emerge"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-teal-400/50 to-lunarGold/60" />

            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-200 via-lunarGold to-amber-400 border-2 border-lunarGold/80 shadow-xl shadow-lunarGold/60 animate-pulse flex-shrink-0"
              title="Full Moon - Wisdom Shared"
              style={{ animationDuration: '2.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-lunarGold/60 to-teal-400/50" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-teal-400/70 via-teal-400/50 to-midnight border-2 border-teal-400/60 shadow-lg shadow-teal-400/40 animate-pulse flex-shrink-0"
              title="Waning - Reflection"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-teal-400/40 to-amber-300/40" />

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-amber-300/50 shadow-lg shadow-amber-300/30 animate-pulse flex-shrink-0"
              title="New Moon - The Cycle Continues"
              style={{ animationDuration: '3s' }}
            />
          </div>

          <div className="text-center space-y-4 sm:space-y-6 fade-in-up px-4">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-starlight uppercase">Moonlit Studios Blog</p>
            <h1 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Stories, Insights & Wisdom
            </h1>
            <p className="font-serif text-base sm:text-lg md:text-xl text-moonlightSilver leading-relaxed max-w-3xl mx-auto italic">
              From healthcare tech to creative entrepreneurship, AI innovation to storytelling—
              sharing the lessons learned at the intersection of care, code, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      {featuredPosts.length > 0 && (
        <section className="py-12 sm:py-16 px-6 bg-gradient-to-b from-deepOcean/50 to-midnight">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12">
              <h2 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-pearlWhite">
                Featured Stories
              </h2>
              <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-lunarGold to-transparent"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-mermaidTeal/30 bg-gradient-to-br from-deepOcean/40 to-midnight/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-mermaidTeal/20"
                >
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-300 to-lunarGold text-xs font-bold text-midnight shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Image placeholder */}
                  <div className="h-48 sm:h-64 bg-gradient-to-br from-mermaidTeal/20 via-lunarGold/10 to-phoenixFire/15 flex items-center justify-center">
                    <span className="text-moonlightSilver/40 text-sm">Featured Image</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4 text-xs text-moonlightSilver">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                      <span className="w-1 h-1 rounded-full bg-moonlightSilver"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-pearlWhite mb-3 group-hover:text-lunarGold transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-moonlightSilver text-sm sm:text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-mermaidTeal/10 border border-mermaidTeal/30 text-xs text-mermaidTeal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-mermaidTeal font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL POSTS (if you have more regular posts) */}
      {regularPosts.length > 0 && (
        <section className="py-12 sm:py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12">
              <h2 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-pearlWhite">
                All Articles
              </h2>
              <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-mermaidTeal to-transparent"></div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-moonlightSilver/20 bg-gradient-to-br from-deepOcean/30 to-midnight/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-mermaidTeal/10"
                >
                  {/* Image placeholder */}
                  <div className="h-40 bg-gradient-to-br from-mermaidTeal/15 via-lunarGold/10 to-phoenixFire/10 flex items-center justify-center">
                    <span className="text-moonlightSilver/30 text-xs">Image</span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3 text-xs text-moonlightSilver">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                      <span className="w-1 h-1 rounded-full bg-moonlightSilver"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-elegant text-lg font-semibold text-pearlWhite mb-2 group-hover:text-lunarGold transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-moonlightSilver text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-mermaidTeal font-semibold text-xs group-hover:gap-3 transition-all">
                      Read More
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER CTA */}
      <section className="py-12 sm:py-16 px-6 bg-gradient-to-b from-midnight to-deepOcean border-y border-mermaidTeal/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-pearlWhite mb-4">
            Stay Connected
          </h2>
          <p className="text-moonlightSilver text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Get insights on healthcare tech, AI innovation, and creative entrepreneurship delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-deepOcean/50 border border-mermaidTeal/30 text-pearlWhite placeholder-moonlightSilver/50 focus:outline-none focus:ring-2 focus:ring-mermaidTeal/50"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-mermaidTeal to-lunarGold text-midnight font-semibold hover:shadow-lg hover:shadow-mermaidTeal/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* PAGE CTA */}
      <PageCTASection />
    </main>
  );
}
