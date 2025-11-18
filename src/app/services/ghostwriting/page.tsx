"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, PenSquare, Sparkles, ScrollText, MessageCircle, Feather, ChevronDown } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
//  HOGWARTS LIBRARY SVG COMPONENTS
// ═══════════════════════════════════════════════════════════════

// Floating Candle - minimalist glow
const FloatingCandle = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-candleFlicker`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative w-16 h-16">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#F0C979]/20 blur-xl" />
      {/* Inner glow */}
      <div className="absolute inset-2 rounded-full bg-[#F0C979]/40 blur-md" />
      {/* Core light */}
      <div className="absolute inset-4 rounded-full bg-[#F0C979]/60" />
    </div>
  </div>
);

// Floating Book - open book with glow
const FloatingBook = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-glowPulse`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="90"
      height="60"
      viewBox="0 0 90 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect */}
      <defs>
        <filter id={`bookGlow-${delay}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Outer glow */}
      <ellipse
        cx="45"
        cy="30"
        rx="40"
        ry="25"
        fill="#F0C979"
        opacity="0.15"
        filter={`url(#bookGlow-${delay})`}
      />

      {/* Left pages */}
      <path
        d="M10 15 C25 5 35 8 45 12 L45 42 C35 38 25 37 10 41 Z"
        fill="#F5E7C8"
        opacity="0.6"
      />
      {/* Right pages */}
      <path
        d="M45 12 C55 8 65 5 80 15 L80 41 C65 37 55 38 45 42 Z"
        fill="#F5E7C8"
        opacity="0.6"
      />
      {/* Center fold */}
      <path
        d="M45 12 L45 42"
        stroke="#F0C979"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Faint text lines */}
      <path d="M16 22 L36 24" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
      <path d="M16 28 L34 30" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
      <path d="M54 24 L74 22" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
      <path d="M56 30 L74 28" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
    </svg>
  </div>
);

// Flying Skeleton Key with Dragonfly Wings
const FlyingKey = ({
  className = "",
  delay = 0,
  keyShape = "ornate",
}: {
  className?: string;
  delay?: number;
  keyShape?: "ornate" | "simple" | "gothic";
}) => {
  const keyPaths = {
    ornate: "M10 40 L10 15 C10 10 15 5 20 5 C25 5 30 10 30 15 L30 40",
    simple: "M15 40 L15 10 C15 5 20 5 25 5 C30 5 30 10 30 10 L30 40",
    gothic: "M12 40 L12 12 C12 7 17 3 22 3 C27 3 28 8 28 12 L28 40",
  };

  return (
    <div
      className={`absolute ${className} pointer-events-none animate-cosmicFloat`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        width="70"
        height="90"
        viewBox="0 0 70 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dragonfly wings - left pair */}
        <ellipse
          cx="15"
          cy="25"
          rx="12"
          ry="18"
          fill="#F0C979"
          opacity="0.2"
          transform="rotate(-20 15 25)"
        />
        <ellipse
          cx="15"
          cy="25"
          rx="10"
          ry="15"
          fill="none"
          stroke="#F0C979"
          strokeWidth="0.5"
          opacity="0.4"
          transform="rotate(-20 15 25)"
        />

        {/* Dragonfly wings - right pair */}
        <ellipse
          cx="55"
          cy="25"
          rx="12"
          ry="18"
          fill="#F0C979"
          opacity="0.2"
          transform="rotate(20 55 25)"
        />
        <ellipse
          cx="55"
          cy="25"
          rx="10"
          ry="15"
          fill="none"
          stroke="#F0C979"
          strokeWidth="0.5"
          opacity="0.4"
          transform="rotate(20 55 25)"
        />

        {/* Key shaft */}
        <path
          d={keyPaths[keyShape]}
          fill="none"
          stroke="#8B6F47"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Key head (circular) */}
        <circle
          cx="20"
          cy="12"
          r="8"
          fill="none"
          stroke="#8B6F47"
          strokeWidth="2"
          opacity="0.7"
        />
        <circle
          cx="20"
          cy="12"
          r="4"
          fill="none"
          stroke="#8B6F47"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Key teeth */}
        <path
          d="M10 38 L5 38 L5 42 L10 42 M15 40 L10 40 L10 44 L15 44 M20 38 L15 38 L15 42 L20 42"
          fill="#8B6F47"
          opacity="0.7"
        />

        {/* Subtle glow */}
        <ellipse
          cx="35"
          cy="25"
          rx="30"
          ry="40"
          fill="#F0C979"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D0F1E] via-[#1A1014] to-[#0D0F1E] text-[#F5E7C8] overflow-hidden relative">

      {/* HOGWARTS LIBRARY AMBIENT ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Candle glows - minimalist background lighting */}
        <FloatingCandle className="top-28 left-[5%]" delay={0} />
        <FloatingCandle className="top-40 left-[8%]" delay={0.5} />
        <FloatingCandle className="top-52 left-[6%]" delay={1.0} />
        <FloatingCandle className="top-64 left-[9%]" delay={1.5} />
        <FloatingCandle className="top-[45%] left-[7%]" delay={2.0} />
        <FloatingCandle className="top-[55%] left-[5%]" delay={2.5} />
        <FloatingCandle className="top-[65%] left-[8%]" delay={3.0} />

        <FloatingCandle className="top-32 right-[6%]" delay={0.3} />
        <FloatingCandle className="top-44 right-[9%]" delay={0.8} />
        <FloatingCandle className="top-56 right-[7%]" delay={1.3} />
        <FloatingCandle className="top-68 right-[10%]" delay={1.8} />
        <FloatingCandle className="top-[48%] right-[8%]" delay={2.3} />
        <FloatingCandle className="top-[58%] right-[6%]" delay={2.8} />
        <FloatingCandle className="top-[68%] right-[9%]" delay={3.3} />

        {/* Floating open books with glow */}
        <FloatingBook className="top-36 left-[15%]" delay={0} />
        <FloatingBook className="top-48 right-[18%]" delay={1.2} />
        <FloatingBook className="top-[42%] left-[20%]" delay={2.4} />
        <FloatingBook className="top-[55%] right-[22%]" delay={3.6} />

        {/* Flying skeleton keys with dragonfly wings */}
        <FlyingKey className="top-24 left-[18%]" delay={0.5} keyShape="ornate" />
        <FlyingKey className="top-35 right-[25%]" delay={1.2} keyShape="gothic" />
        <FlyingKey className="top-[38%] left-[28%]" delay={1.8} keyShape="simple" />
        <FlyingKey className="top-[52%] right-[20%]" delay={2.5} keyShape="ornate" />
        <FlyingKey className="top-[62%] left-[22%]" delay={3.2} keyShape="gothic" />
        <FlyingKey className="top-[72%] right-[15%]" delay={3.9} keyShape="simple" />

        {/* Dust motes */}
        <div className="absolute top-[30%] left-[32%] w-1 h-1 rounded-full bg-[#F5E7C8]/30 animate-dustMotes" />
        <div className="absolute top-[35%] right-[35%] w-1 h-1 rounded-full bg-[#F5E7C8]/25 animate-dustMotes" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[40%] left-[38%] w-1 h-1 rounded-full bg-[#F5E7C8]/20 animate-dustMotes" style={{ animationDelay: '1.6s' }} />
        <div className="absolute top-[45%] right-[40%] w-1 h-1 rounded-full bg-[#F5E7C8]/28 animate-dustMotes" style={{ animationDelay: '2.4s' }} />
        <div className="absolute top-[50%] left-[42%] w-1 h-1 rounded-full bg-[#F5E7C8]/22 animate-dustMotes" style={{ animationDelay: '3.2s' }} />
        <div className="absolute top-[55%] right-[38%] w-1 h-1 rounded-full bg-[#F5E7C8]/26 animate-dustMotes" style={{ animationDelay: '4.0s' }} />
      </div>

      {/* Warm library glow from bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-1/3 pointer-events-none z-0 bg-gradient-to-t from-[#F0C979]/10 to-transparent opacity-60" />

      {/* HERO */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl">

          {/* Moon Phases - Hogwarts Palette */}
          <div className="mb-10 flex items-center justify-center gap-3 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F0C979] to-[#E9C97F] border-2 border-[#F0C979]/60 shadow-lg shadow-[#F0C979]/40 animate-goldShimmer" title="Owlery Gold" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#F0C979]/60 to-[#F5E7C8]/50" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5E7C8] to-[#E9C97F] border border-[#F5E7C8]/60 shadow-md shadow-[#F5E7C8]/30" title="Warm Parchment" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#F5E7C8]/50 to-[#5B335F]/40" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B335F] to-[#3A2550] border border-[#5B335F]/60 shadow-sm" title="Ink Plum" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#5B335F]/40 to-[#121528]/30" />
            <div className="w-6 h-6 rounded-full bg-[#121528] border border-[#F0C979]/40 shadow-sm" title="Midnight Stacks" />
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
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeader
            eyebrow="Ways we can write together"
            title="Choose your storytelling container"
            subtitle="We'll tailor exact scope + investment on a discovery call, but here's how most clients work with me."
          />

          {/* Blog Posts & Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Blog Posts & Content</h3>
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
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Newsletter Writing</h3>
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
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Website Copy</h3>
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
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Cookbook Ghostwriting</h3>
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
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Memoir / Creative Nonfiction</h3>
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
            <h3 className="text-xl font-serif text-[#F0C979] text-center">Business / Leadership Books</h3>
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
                  className="rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] px-8 py-4 font-semibold text-[#121528] transition-all hover:shadow-lg hover:shadow-[#F0C979]/50"
                >
                  Request a Writing Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-[#F0C979]/30 px-8 py-4 font-semibold text-[#F0C979] transition-all hover:border-[#F0C979]/50 hover:bg-[#F0C979]/10"
                >
                  View Writing Samples
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
        <Feather className="w-full h-full text-[#F0C979] animate-quillFloat" />
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
