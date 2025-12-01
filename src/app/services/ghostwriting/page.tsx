"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, ScrollText, Feather, ChevronDown } from "lucide-react";

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#121528] via-[#1A1E38] to-[#121528] text-[#F5E7C8] overflow-hidden relative">

      {/* MINIMALIST AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle corner glows */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F0C979]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#5B335F]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F0C979]/3 rounded-full blur-3xl" />

        {/* Rectangular candle glows - warm ambient lighting scattered throughout hero */}
        <div className="absolute top-24 left-8 w-12 h-40 bg-[#F0C979]/12 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-36 right-12 w-14 h-44 bg-[#F0C979]/15 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-16 left-1/4 w-10 h-36 bg-[#F0C979]/10 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
        <div className="absolute top-28 right-1/3 w-13 h-42 bg-[#F0C979]/13 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        <div className="absolute top-44 left-1/3 w-11 h-38 bg-[#F0C979]/14 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }} />
        <div className="absolute top-20 right-1/4 w-12 h-40 bg-[#F0C979]/12 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.3s' }} />
        <div className="absolute top-32 left-16 w-10 h-35 bg-[#F0C979]/11 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4.3s', animationDelay: '0.7s' }} />
        <div className="absolute top-40 right-20 w-13 h-41 bg-[#F0C979]/13 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '3.9s', animationDelay: '1.2s' }} />
        <div className="absolute top-52 left-20 w-11 h-37 bg-[#F0C979]/12 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '4.1s', animationDelay: '0.4s' }} />
        <div className="absolute top-12 right-16 w-12 h-39 bg-[#F0C979]/14 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '3.7s', animationDelay: '0.9s' }} />
      </div>

      {/* Warm library glow from bottom - very subtle */}
      <div className="fixed bottom-0 left-0 right-0 h-1/3 pointer-events-none z-0 bg-gradient-to-t from-[#F0C979]/8 via-[#F0C979]/3 to-transparent opacity-50" />

      {/* HERO */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl">

          {/* Moon Phases - 5 phases with pulsing animation */}
          <div className="mb-10 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#121528] border-2 border-[#F0C979]/50 shadow-lg shadow-[#F0C979]/30 animate-pulse flex-shrink-0" title="New Moon - Dark Library" style={{ animationDuration: '3s' }} />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#F0C979]/40 to-[#F5E7C8]/40" />

            <div className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#121528] via-[#F0C979]/50 to-[#F0C979]/70 border-2 border-[#F0C979]/60 shadow-lg shadow-[#F0C979]/40 animate-pulse flex-shrink-0" title="Crescent - Stories Awakening" style={{ animationDuration: '3.5s' }} />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#F0C979]/50 to-[#F5E7C8]/60" />

            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F0C979] via-[#F5E7C8] to-[#58B6B1] border-2 border-[#F0C979]/80 shadow-xl shadow-[#F0C979]/60 animate-pulse flex-shrink-0" title="Full Moon - Your Story" style={{ animationDuration: '2.5s' }} />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#58B6B1]/60 to-[#5B335F]/50" />

            <div className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#5B335F]/70 via-[#5B335F]/50 to-[#121528] border-2 border-[#5B335F]/60 shadow-lg shadow-[#5B335F]/40 animate-pulse flex-shrink-0" title="Waning - Wisdom Gathered" style={{ animationDuration: '3.5s' }} />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#5B335F]/40 to-[#121528]/30" />

            <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#121528] border-2 border-[#58B6B1]/50 shadow-lg shadow-[#58B6B1]/30 animate-pulse flex-shrink-0" title="New Moon - Endless Pages" style={{ animationDuration: '3s' }} />
          </div>

          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#F0C979]/80 flex items-center justify-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#F0C979]/40 bg-[#F0C979]/10">
                <ScrollText className="h-3 w-3 text-[#F0C979]" />
              </span>
              Service Suite • Author & Ghostwriting
            </p>

            <div className="space-y-3 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#F5E7C8]">
                Author & Ghostwriting Studio
              </h1>
              <p className="text-base sm:text-lg text-[#F5E7C8]/80 max-w-2xl mx-auto italic">
                Books, cookbooks, launch flows, and ongoing content engines. A blend of{" "}
                <span className="text-[#F0C979]">clinical clarity</span> and{" "}
                <span className="text-[#F0C979]">creative storytelling</span>—so every word feels human,
                intentional, and deeply you.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact?service=ghostwriting"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#E9C97F] px-6 py-3 text-sm font-medium text-[#121528] shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-[#F0C979]/40 bg-[#121528]/40 px-5 py-3 text-sm font-medium text-[#F5E7C8] hover:bg-[#F0C979]/10 transition-colors"
              >
                View Packages
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>

            {/* Hero pills */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 max-w-4xl mx-auto">
              <HeroPill title="Aspiring Authors" subtitle="Book ideas → finished manuscripts with structure & voice." />
              <HeroPill title="Busy Founders" subtitle="Thought leadership, launch content, & brand stories done-for-you." />
              <HeroPill title="Healthcare Leaders" subtitle="Clinically accurate content that still feels warm and human." />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with burgundy wax seal */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#8B2635] to-[#6B1A28] border-2 border-[#121528]/20 flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-[#F5E7C8]">M</span>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section id="start" className="px-6 sm:px-10 lg:px-16 pb-16 relative z-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeader
            eyebrow="Who this is for"
            title="Strategic writing partnerships"
            subtitle="You bring the vision, voice notes, and lived experience. I bring narrative structure, clinical precision, and a little bit of magical chaos."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AudienceCard
              label="Aspiring Authors"
              body="Have a book idea but need help bringing it to life with structure, voice, and polish"
            />
            <AudienceCard
              label="Busy Founders"
              body="Want to share your story or expertise but didn't have time to write it yourself"
            />
            <AudienceCard
              label="Healthcare Leaders"
              body="Need thought leadership content that balances clinical precision with human warmth"
            />
            <AudienceCard
              label="Creative Entrepreneurs"
              body="Looking for ongoing blog posts, newsletters, or content engines that sound like you"
            />
            <AudienceCard
              label="Cookbook Creators"
              body="Have recipes and a vision—need someone to craft the narrative and structure"
            />
            <AudienceCard
              label="Product Launchers"
              body="Want compelling launch copy, landing pages, and storytelling that sells without feeling salesy"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
      </div>

      {/* HOW IT WORKS */}
      <section className="px-6 sm:px-10 lg:px-16 pb-16 relative z-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeader
            eyebrow="The process"
            title="How we'll work together"
          />

          <div className="grid gap-8 md:grid-cols-3">
            <ProcessCard
              number="1"
              title="Discovery"
              subtitle="Uncover Your Story"
              body="We start with a conversation—your vision, audience, goals, and tone. I'll ask the right questions to understand your story."
              icon={<BookOpen className="w-8 h-8 text-[#F0C979]" />}
              color="[#F0C979]"
            />
            <ProcessCard
              number="2"
              title="Craft & Refine"
              subtitle="Write & Iterate"
              body="I'll write the first draft, share it for feedback, and refine until it sounds unmistakably you."
              icon={<Feather className="w-8 h-8 text-[#58B6B1]" />}
              color="[#58B6B1]"
            />
            <ProcessCard
              number="3"
              title="Deliver & Launch"
              subtitle="Publish & Shine"
              body="Receive polished, ready-to-publish work. For books, I'll guide you through self-publishing or trad-pub prep."
              icon={<Sparkles className="w-8 h-8 text-[#E9C97F]" />}
              color="[#E9C97F]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
      </div>

      {/* PACKAGES */}
      <section id="packages" className="px-6 sm:px-10 lg:px-16 pb-20 relative z-10">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            eyebrow="Ways we can write together"
            title="Choose your storytelling container"
            subtitle="We'll tailor exact scope + investment on a discovery call, but here's how most clients work with me."
          />

          {/* Blog Posts & Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">The Daily Prophet — Blog Posts & Content</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <PackageCard
                title="Essential"
                price="$400"
                features={[
                  "1 blog post (800-1200 words)",
                  "SEO keyword integration",
                  "1 round of revisions",
                  "Ready-to-publish formatting",
                ]}
                ideal="Founders, creators, ongoing content needs"
              />
              <PackageCard
                title="Professional"
                price="$1,500"
                features={[
                  "4 blog posts (800-1200 words each)",
                  "SEO + content strategy",
                  "2 rounds of revisions per post",
                  "Social media snippets included",
                ]}
                ideal="Content marketers, thought leaders, monthly needs"
                popular
              />
            </div>
          </div>

          {/* Newsletter Writing */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Owl Post — Newsletter Writing</h3>
            <div className="flex justify-center">
              <PackageCard
                title="Monthly"
                price="$1,200"
                features={[
                  "4 newsletter issues per month",
                  "500-800 words each",
                  "Consistent voice and tone",
                  "2 rounds of revisions total",
                ]}
                ideal="Founders, authors, community builders"
              />
            </div>
          </div>

          {/* Website Copy */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Flourish & Blotts — Website Copy</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <PackageCard
                title="Essential"
                price="$1,500"
                features={[
                  "Homepage + 2 pages",
                  "Clear, conversion-focused messaging",
                  "SEO foundations",
                  "2 rounds of revisions",
                ]}
                ideal="New sites, landing pages, quick launches"
              />
              <PackageCard
                title="Professional"
                price="$3,000"
                features={[
                  "Homepage + 5 pages",
                  "Brand voice guide",
                  "Storytelling + conversion copy",
                  "3 rounds of revisions",
                ]}
                ideal="Full site launches, rebrands, premium experiences"
                popular
              />
            </div>
          </div>

          {/* Cookbooks */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Honeydukes Recipes — Cookbook Ghostwriting</h3>
            <div className="flex justify-center">
              <PackageCard
                title="Full Book"
                price="$8,000"
                features={[
                  "30-50 recipes with stories",
                  "Chapter structure + introductions",
                  "Voice coaching and refinement",
                  "Recipe testing guidance",
                  "3 rounds of revisions",
                ]}
                ideal="Chefs, food bloggers, culinary entrepreneurs"
              />
            </div>
          </div>

          {/* Memoirs & Creative Nonfiction */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">The Pensieve — Memoir / Creative Nonfiction</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <PackageCard
                title="Essential"
                price="$12,000"
                features={[
                  "40,000-50,000 words",
                  "Developmental editing included",
                  "Chapter outlines + structure",
                  "4 rounds of revisions",
                  "Self-publishing prep guidance",
                ]}
                ideal="First-time authors, personal stories, legacy projects"
              />
              <PackageCard
                title="Premium"
                price="$20,000"
                features={[
                  "60,000-80,000 words",
                  "Developmental + line editing",
                  "Voice coaching sessions",
                  "5 rounds of revisions",
                  "Trad-pub query package included",
                ]}
                ideal="Authors ready for trad-pub, complex narratives, premium support"
                popular
              />
            </div>
          </div>

          {/* Business Books */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">The Restricted Section — Business / Leadership Books</h3>
            <div className="flex justify-center">
              <PackageCard
                title="Full Book"
                price="$25,000"
                features={[
                  "50,000-70,000 words",
                  "Research + interviews included",
                  "Framework development",
                  "Case study integration",
                  "5 rounds of revisions",
                  "Trad-pub or self-pub support",
                ]}
                ideal="Executives, consultants, thought leaders"
              />
            </div>
          </div>

          {/* Add-Ons */}
          <div className="mt-12 rounded-2xl border border-[#E9C97F]/30 bg-gradient-to-br from-[#E9C97F]/10 via-[#F0C979]/5 to-transparent p-8 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif text-[#F5E7C8] mb-2">Add-On Services</h3>
              <p className="text-sm text-[#F5E7C8]/70">Enhance your project with these extras</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <AddOnCard name="Book Launch Strategy" price="$1,500" />
              <AddOnCard name="Author Website Copy" price="$2,000" />
              <AddOnCard name="Press Release + Media Kit" price="$800" />
              <AddOnCard name="Monthly Retainer (4 posts)" price="$1,500/mo" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
      </div>

      {/* FAQ */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24 relative z-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
          />

          <div className="space-y-4">
            <FAQItem
              q="How does ghostwriting work?"
              a="You share your story, ideas, and voice with me through interviews and outlines. I write the manuscript in your voice, and you review and provide feedback. The final work is 100% yours to publish under your name."
            />
            <FAQItem
              q="What if I don't know exactly what I want to write?"
              a="That's completely normal! Part of my process is helping you clarify your message, structure your ideas, and find your unique angle. We'll start with exploratory conversations to map out the best path forward."
            />
            <FAQItem
              q="Can you match my writing style?"
              a="Yes. I study your existing content (if you have any), ask detailed questions about your preferences, and provide sample chapters early on so you can guide the tone and voice. The goal is for the final work to sound unmistakably like you."
            />
            <FAQItem
              q="Do I own the rights to the finished work?"
              a="Absolutely. Once you've paid in full, you own all rights to the content. My name won't appear on it unless we agree otherwise (such as 'with' credit for memoirs)."
            />
            <FAQItem
              q="How long does a book project take?"
              a="Memoirs and creative nonfiction: 4-6 months. Business books: 6-9 months. Cookbooks: 3-5 months. Blog content and website copy: 2-4 weeks. Timelines depend on scope, interview availability, and revision rounds."
            />
            <FAQItem
              q="Can you help me get published?"
              a="For self-publishing, yes—I'll guide you through formatting, cover design coordination, and platform setup. For traditional publishing, I can help craft query letters and book proposals, but I don't guarantee agent representation or publishing deals."
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
      </div>

      {/* FINAL CTA */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative rounded-2xl border border-[#F0C979]/30 bg-gradient-to-br from-[#F0C979]/10 via-[#E9C97F]/10 to-[#58B6B1]/10 p-12 backdrop-blur-sm overflow-hidden">
            <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#F0C979]/40 via-[#E9C97F]/20 to-[#F5E7C8]/10 blur-3xl opacity-40" />
            <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#E9C97F]/30 via-[#F0C979]/20 to-[#F5E7C8]/10 blur-3xl opacity-40" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#F0C979] via-[#E9C97F] to-[#58B6B1] mx-auto shadow-lg shadow-[#F0C979]/40">
                <Feather className="w-10 h-10 text-[#121528]" />
              </div>

              <h2 className="text-3xl font-serif text-[#F5E7C8] md:text-4xl">
                Ready to Write Your Story?
              </h2>

              <p className="text-lg text-[#F5E7C8]/80 max-w-2xl mx-auto">
                Whether it's a book, blog, or brand narrative, let's craft something that sounds unmistakably you.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact?service=ghostwriting"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] to-[#E9C97F] px-8 py-4 text-base font-medium text-[#121528] shadow-lg hover:shadow-2xl transition-all"
                >
                  Book a Discovery Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F0C979]/40 bg-[#121528]/60 px-7 py-4 text-base font-medium text-[#F5E7C8] hover:bg-[#F0C979]/10 backdrop-blur-sm transition-colors"
                >
                  View Writing Samples
                  <BookOpen className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponents ---------- */

function HeroPill({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-[#F0C979]/20 bg-[#121528]/40 px-4 py-3 backdrop-blur-sm">
      <p className="text-xs font-semibold tracking-wide text-[#F0C979] uppercase mb-1">{title}</p>
      <p className="text-[11px] text-[#F5E7C8]/70 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3 text-center max-w-3xl mx-auto">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#F0C979]/70">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-serif text-[#F5E7C8]">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-[#F5E7C8]/75">{subtitle}</p>}
    </div>
  );
}

function AudienceCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="group relative rounded-2xl border border-[#F0C979]/20 bg-[#121528]/40 backdrop-blur-sm p-5 flex flex-col gap-2 hover:border-[#F0C979]/40 transition-all hover:-translate-y-1">
      <div className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <Feather className="w-full h-full text-[#F0C979]" />
      </div>
      <h3 className="text-sm font-semibold text-[#F0C979]">{label}</h3>
      <p className="text-xs sm:text-sm text-[#F5E7C8]/75">{body}</p>
    </div>
  );
}

function ProcessCard({
  number,
  title,
  subtitle,
  body,
  icon,
  color,
}: {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="text-center relative group">
      <div className="mb-4 flex justify-center">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-[${color}]/20 border-2 border-[${color}]/30 relative group-hover:border-[${color}] transition-all`}>
          {icon}
          <div className={`absolute inset-0 rounded-full bg-[${color}]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
        </div>
      </div>
      <h3 className={`mb-2 text-xl font-semibold text-[${color}]`}>{number}. {title}</h3>
      <p className={`text-sm uppercase tracking-wider text-[${color}]/70 mb-3`}>{subtitle}</p>
      <p className="text-[#F5E7C8]/80 text-sm">{body}</p>
    </div>
  );
}

function PackageCard({
  title,
  price,
  features,
  ideal,
  popular,
}: {
  title: string;
  price: string;
  features: string[];
  ideal: string;
  popular?: boolean;
}) {
  return (
    <div className="relative h-full w-full max-w-sm rounded-3xl border border-[#F0C979]/20 bg-[#121528]/40 backdrop-blur-sm px-6 py-6 flex flex-col gap-4 hover:border-[#F0C979]/40 transition-all hover:-translate-y-1">
      {popular && (
        <span className="absolute -top-3 left-5 inline-flex rounded-full bg-gradient-to-r from-[#F0C979] to-[#E9C97F] px-3 py-1 text-[11px] font-semibold text-[#121528] shadow-lg">
          MOST POPULAR
        </span>
      )}
      <div className="pt-1 space-y-1">
        <h3 className="text-lg font-serif text-[#F5E7C8]">{title}</h3>
        <p className="text-xl font-bold text-[#F0C979]">{price}</p>
      </div>
      <p className="text-xs sm:text-sm text-[#F5E7C8]/75">{ideal}</p>
      <ul className="mt-1 space-y-2 text-xs sm:text-sm text-[#F5E7C8]/80">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F0C979]/80 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddOnCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="rounded-lg border border-[#E9C97F]/20 bg-[#E9C97F]/5 p-4">
      <p className="text-sm font-semibold text-[#E9C97F] mb-1">{name}</p>
      <p className="text-lg font-bold text-[#F0C979]">{price}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#F0C979]/15 bg-[#121528]/40 backdrop-blur-sm px-4 py-3 hover:border-[#F0C979]/30 transition-colors">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-medium text-[#F5E7C8]">{q}</span>
        <ChevronDown className="w-4 h-4 text-[#F0C979]/70 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-2 text-xs sm:text-sm text-[#F5E7C8]/75">{a}</p>
    </details>
  );
}
