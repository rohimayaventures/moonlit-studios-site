"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, PenSquare, Sparkles, ScrollText, MessageCircle, Feather } from "lucide-react";

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D0F1E] via-[#1A1014] to-[#0D0F1E] text-[#F5E7C8] overflow-hidden relative">

      {/* 🦉 HOGWARTS LIBRARY AMBIENT ELEMENTS */}

      {/* Floating candles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-[8%] w-2 h-16 bg-gradient-to-b from-[#F0C979]/60 to-transparent rounded-full blur-sm animate-candleFlicker" />
        <div className="absolute top-40 right-[10%] w-2 h-16 bg-gradient-to-b from-[#F5E7C8]/50 to-transparent rounded-full blur-sm animate-candleFlicker" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-56 left-[12%] w-2 h-16 bg-gradient-to-b from-[#E9C97F]/55 to-transparent rounded-full blur-sm animate-candleFlicker" style={{ animationDelay: '1.4s' }} />

        {/* Dust motes */}
        <div className="absolute top-[40%] left-[35%] w-1 h-1 rounded-full bg-[#F5E7C8]/30 animate-dustMotes" />
        <div className="absolute top-[45%] right-[30%] w-1 h-1 rounded-full bg-[#F5E7C8]/25 animate-dustMotes" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[52%] left-[38%] w-1 h-1 rounded-full bg-[#F5E7C8]/20 animate-dustMotes" style={{ animationDelay: '1.6s' }} />

        {/* Owl */}
        <div className="absolute top-20 right-[6%] text-4xl opacity-60 animate-owlFloat hidden lg:block">🦉</div>
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

      {/* Divider with wax seal */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#F0C979] to-[#E9C97F] border-2 border-[#121528]/20 flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-[#121528]">M</span>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section id="start" className="px-6 sm:px-10 lg:px-16 pb-16 relative z-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeader
            eyebrow="Who this is for"
            title="Strategic writing partnerships — not one-off word dumps."
            subtitle="You bring the vision, voice notes, and lived experience. I bring narrative structure, clinical precision, and a little bit of magical chaos."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <AudienceCard
              label="Aspiring Authors"
              body="You have a book inside you—memoir, health, cookbook, or leadership—but need a partner to organize your ideas and carry the heavy writing."
            />
            <AudienceCard
              label="Busy Founders"
              body="You're leading a company and don't have 20 spare hours a week to write. We turn your brain dumps, interviews, and calls into polished assets."
            />
            <AudienceCard
              label="Healthcare Leaders"
              body="Nurses, physicians, and health innovators who want evidence-based stories that still feel deeply human, trauma-informed, and safe."
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
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeader
            eyebrow="Ways we can write together"
            title="Choose your storytelling container"
            subtitle="We'll tailor exact scope + investment on a discovery call, but here's how most clients work with me."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <PackageCard
              badge="Flagship"
              title="Signature Book Build"
              price="Custom proposal"
              idealFor="Authors & founders ready to turn an idea into a full manuscript."
              bullets={[
                "Book strategy, outline & chapter map",
                "Recorded interviews + voice-note capture",
                "2–3 rounds of collaborative revisions",
                "Launch-aligned back matter & reader journey",
              ]}
            />
            <PackageCard
              title="Ghostwriting Retainer"
              price="Monthly / quarterly"
              idealFor="Leaders who want an ongoing, done-with-you content engine."
              bullets={[
                "Thought leadership articles & LinkedIn posts",
                "Email sequences, launch copy & nurture flows",
                "Light strategy support around each campaign",
                "Slack/voice note access for quick content turns",
              ]}
            />
            <PackageCard
              title="Editorial Studio Day"
              price="Day-rate container"
              idealFor="When you need an intensive burst of focused writing magic."
              bullets={[
                "4–6 hour deep-dive sprint (virtual)",
                "Audit + refine existing drafts or assets",
                "Tighten voice, structure, and storytelling",
                "Clear next steps + content roadmap",
              ]}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#F5E7C8]/70">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Every project begins with a no-pressure consult.
            </span>
            <Link
              href="/contact?service=ghostwriting"
              className="inline-flex items-center gap-2 text-[#F0C979] hover:text-[#E9C97F] transition-colors"
            >
              Send a message
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative my-16 h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
      </div>

      {/* PROCESS */}
      <section className="px-6 sm:px-10 lg:px-16 pb-20 relative z-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionHeader
            eyebrow="The process"
            title="How we turn your ideas into something people actually finish reading"
          />

          <ol className="relative border-l border-[#F0C979]/30 pl-6 space-y-10">
            <ProcessStep
              index="01"
              title="Story mapping & scope"
              body="We clarify your goals, audience, deadlines, and emotional non-negotiables. We map the container—book, series, funnel, or ongoing content."
            />
            <ProcessStep
              index="02"
              title="Voice capture"
              body="You talk, I listen. We use interviews, voice notes, and existing materials so the writing sounds like you on your best, clearest day."
            />
            <ProcessStep
              index="03"
              title="Drafts, edits, & polish"
              body="You'll review living drafts inside a shared workspace. I handle structure, pacing, and continuity so you're never staring at a blank page."
            />
            <ProcessStep
              index="04"
              title="Launch & beyond"
              body="We align the final deliverable with your launch plans—email lists, social presence, or product suite—so your words keep working for you."
            />
          </ol>
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
            title="A few things you might be wondering"
          />

          <div className="space-y-4">
            <FAQItem
              q="Will the writing still sound like me?"
              a="Yes. My entire process is built around voice capture—interviews, transcripts, and samples of how you already speak. The goal is that your readers have no idea a ghostwriter was involved; they just feel seen."
            />
            <FAQItem
              q="Do you help with publishing or launch strategy?"
              a="I'm not a full-service publisher, but I partner beautifully with your existing team—or help you map options for self-publishing, hybrid, or traditional routes. We'll make sure the words support your bigger strategy."
            />
            <FAQItem
              q="I'm in healthcare. Will this still be clinically accurate?"
              a="I'm a nurse by background, so yes—clinical accuracy matters. We'll respect scope of practice, avoid over-promising, and make sure your content is both evidence-informed and trauma-aware."
            />
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
    <div className="space-y-3 max-w-3xl">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#F0C979]/70">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-serif text-[#F5E7C8]">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-[#F5E7C8]/75">{subtitle}</p>}
    </div>
  );
}

function AudienceCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[#F0C979]/20 bg-[#121528]/40 backdrop-blur-sm p-5 flex flex-col gap-2 hover:border-[#F0C979]/40 transition-colors">
      <h3 className="text-sm font-semibold text-[#F0C979]">{label}</h3>
      <p className="text-xs sm:text-sm text-[#F5E7C8]/75">{body}</p>
    </div>
  );
}

function PackageCard({
  badge,
  title,
  price,
  idealFor,
  bullets,
}: {
  badge?: string;
  title: string;
  price: string;
  idealFor: string;
  bullets: string[];
}) {
  return (
    <div className="relative h-full rounded-3xl border border-[#F0C979]/20 bg-[#121528]/40 backdrop-blur-sm px-6 py-6 flex flex-col gap-4 hover:border-[#F0C979]/40 transition-all hover:-translate-y-1">
      {badge && (
        <span className="absolute -top-3 left-5 inline-flex rounded-full bg-gradient-to-r from-[#F0C979] to-[#E9C97F] px-3 py-1 text-[11px] font-semibold text-[#121528] shadow-lg">
          {badge}
        </span>
      )}
      <div className="pt-1 space-y-1">
        <h3 className="text-lg font-serif text-[#F5E7C8]">{title}</h3>
        <p className="text-xs uppercase tracking-[0.18em] text-[#F0C979]/70">{price}</p>
      </div>
      <p className="text-xs sm:text-sm text-[#F5E7C8]/75">{idealFor}</p>
      <ul className="mt-1 space-y-2 text-xs sm:text-sm text-[#F5E7C8]/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#F0C979]/80 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <li className="relative pl-4">
      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-[#F0C979] bg-[#121528]" />
      <div className="flex gap-4">
        <p className="text-xs font-mono text-[#F0C979] mt-0.5">{index}</p>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-[#F5E7C8]">{title}</h3>
          <p className="text-xs sm:text-sm text-[#F5E7C8]/75">{body}</p>
        </div>
      </div>
    </li>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#F0C979]/15 bg-[#121528]/40 backdrop-blur-sm px-4 py-3 hover:border-[#F0C979]/30 transition-colors">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-medium text-[#F5E7C8]">{q}</span>
        <span className="text-xs text-[#F0C979]/70 group-open:hidden">+</span>
        <span className="text-xs text-[#F0C979]/70 hidden group-open:inline">−</span>
      </summary>
      <p className="mt-2 text-xs sm:text-sm text-[#F5E7C8]/75">{a}</p>
    </details>
  );
}
