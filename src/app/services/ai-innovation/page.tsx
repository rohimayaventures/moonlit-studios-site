'use client';

import type { Metadata } from "next";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

// ⚔️ SAO MIDNIGHT CYBER FANTASY - IMMERSIVE SVG COMPONENTS

// Floating Hologram Panel
const HologramPanel = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-hologramFlicker`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative">
      <div className="w-24 h-32 border border-[#00F5D4] bg-[#00F5D4]/10 backdrop-blur-sm rounded-lg shadow-lg shadow-[#00F5D4]/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/20 to-transparent rounded-lg" />
      {/* Hologram scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,245,212,0.1)_50%)] bg-[length:100%_4px] rounded-lg" />
    </div>
  </div>
);

// Data Stream Particles
const DataStream = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-dataFlow`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex flex-col gap-2">
      <div className="w-1 h-8 bg-gradient-to-b from-transparent via-[#00A8E8] to-transparent rounded-full" />
      <div className="w-1 h-6 bg-gradient-to-b from-transparent via-[#00F5D4] to-transparent rounded-full" />
      <div className="w-1 h-10 bg-gradient-to-b from-transparent via-[#845EC2] to-transparent rounded-full" />
    </div>
  </div>
);

// Circuit Pattern Lines
const CircuitLines = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute ${className} pointer-events-none opacity-20`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00F5D4', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: '#00F5D4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00F5D4', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <path d="M0,50 L100,50 L100,150 L200,150" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
    <circle cx="100" cy="50" r="4" fill="#00F5D4" className="animate-neonPulse" />
    <circle cx="100" cy="150" r="4" fill="#00A8E8" className="animate-neonPulse" style={{ animationDelay: '0.5s' }} />
  </svg>
);

// Floating Hex Grid Tile
const HexTile = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-hexFloat`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="40" height="46" viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0 L40 11.5 L40 34.5 L20 46 L0 34.5 L0 11.5 Z"
        fill="none"
        stroke="#00F5D4"
        strokeWidth="1.5"
        className="animate-neonPulse"
      />
      <path
        d="M20 8 L32 15 L32 31 L20 38 L8 31 L8 15 Z"
        fill="#00F5D4"
        fillOpacity="0.1"
      />
    </svg>
  </div>
);

// Neon Grid Background
const NeonGrid = ({ className = "" }: { className?: string }) => (
  <div className={`absolute ${className} pointer-events-none overflow-hidden`}>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
  </div>
);

// Light Particle
const LightParticle = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-2 h-2 rounded-full bg-[#E6F7FF] shadow-lg shadow-[#00F5D4]/50 animate-neonPulse" />
  </div>
);

// Glowing Divider Line
const CyberDivider = () => (
  <div className="relative my-12 h-px overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent opacity-30" />
    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F5D4] shadow-lg shadow-[#00F5D4]/50 animate-neonPulse" />
  </div>
);

const aiServices = [
  {
    id: "rapid-prototypes",
    title: "Rapid AI Prototypes & Experiments",
    tiers: [
      {
        name: "Weekend Sprint",
        price: 2500,
        duration: "2-3 days",
        features: [
          "Rapid concept validation for a single AI idea",
          "Working prototype using Claude or OpenAI",
          "Simple front-end demo (web-based)",
          "Light integration with your existing tools (where feasible)",
          "Recorded walkthrough + next steps",
        ],
        cta: "Sprint Prototype",
        popular: false,
      },
      {
        name: "Innovation Lab Week",
        price: 5500,
        duration: "1 week intensive",
        features: [
          "Everything in Weekend Sprint",
          "Deeper exploration of 1-2 concepts",
          "More refined prototype with user flows",
          "Feedback & iteration built into the week",
          "Roadmap for turning prototype into a full feature/product",
        ],
        cta: "Launch Lab Sprint",
        popular: true,
      },
    ],
  },
  {
    id: "rag-copilots",
    title: "AI Copilots & RAG Systems",
    tiers: [
      {
        name: "Starter Copilot",
        price: 7000,
        duration: "project-based",
        features: [
          "Single-domain AI copilot or Q&A assistant",
          "Document ingestion for a focused content set",
          "Claude or OpenAI integration",
          "Basic web UI with search/chat interface",
          "Simple admin configuration",
          "Light analytics or usage summary",
        ],
        cta: "Build Copilot",
        popular: false,
      },
      {
        name: "Growth Copilot",
        price: 15000,
        duration: "project-based",
        features: [
          "Everything in Starter Copilot",
          "Better context handling & conversation memory",
          "Role-based behaviors for different users (e.g. support vs founder)",
          "Custom UI/UX tuned to your brand",
          "Improved retrieval quality + prompt engineering",
          "Playbook + training session for your team",
          "2-4 weeks of post-launch tuning support",
        ],
        cta: "Launch Growth Copilot",
        popular: true,
      },
    ],
  },
  {
    id: "ai-architecture",
    title: "AI Architecture & Strategy",
    tiers: [
      {
        name: "Architecture Blueprint",
        price: 6000,
        duration: "2-3 week engagement",
        features: [
          "Deep-dive discovery on your product and stack",
          "High-level AI architecture design (models, APIs, data flows)",
          "Backend + frontend integration plan",
          "Safety, guardrails, and evaluation considerations",
          "Implementation roadmap for your team or partners",
          "1-2 working sessions to walk through the plan",
        ],
        cta: "Get Blueprint",
        popular: false,
      },
    ],
  },
];

const faqs = [
  {
    question: "What AI platforms and models do you work with?",
    answer: "I focus on Claude (Anthropic), OpenAI, and some open-source models. My specialty is building copilots, prototypes, and light architecture for small teams and founders. If you need voice or visual understanding, we can scope that as a custom add-on to any of the offerings above."
  },
  {
    question: "How long does it take to build a RAG chatbot?",
    answer: "A Weekend Sprint gets you a working prototype in 2-3 days to validate your concept. A Growth Copilot with custom UI and better retrieval typically takes 2-4 weeks. We focus on founder-friendly timelines and real working demos, not months-long enterprise deployments."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! Weekend Sprints include 1-2 weeks of support for tweaks. Growth Copilot includes 2-4 weeks of post-launch tuning. Architecture Blueprint includes advisory calls to help your team implement the roadmap. This is small-team scale support, not 24/7 enterprise ops—but enough to get you stable and confident."
  },
  {
    question: "Can you build AI systems for healthcare applications?",
    answer: "Absolutely. With 15+ years of healthcare experience, I understand clinical workflows and patient safety. I focus on prototypes, copilots, workflows, and advisory work for healthcare contexts. Deeper regulated deployments at enterprise scale may require larger teams or partners, but I can help you architect and validate the foundation."
  },
  {
    question: "What's the difference between a Weekend Sprint and a Growth Copilot?",
    answer: "Weekend Sprint is a proof-of-concept—rapid validation to see if your AI idea works. Growth Copilot is a more robust build with custom UI, better retrieval, role-based behaviors, and post-launch support. Think of sprints as experiments and copilots as real tools your team will use daily. Both are designed for small studios and founders, not enterprise infrastructure."
  },
  {
    question: "Do you handle AI safety and hallucination reduction?",
    answer: "Yes, safety is built in from the start. I use prompt design best practices, retrieval patterns, simple validations, and monitoring suitable for small and mid-sized deployments. This isn't enterprise-grade MLOps with 24/7 teams, but it's thoughtful, founder-friendly guardrails that work for real products at realistic scale."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl border border-[#00F5D4]/30 bg-[#020817]/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#00F5D4]/60"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
          >
            <span className="font-semibold text-[#E6F7FF] group-hover:text-[#00F5D4] transition-colors">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#00F5D4] transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-[#9FE8FF] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AiInnovationPage() {
  return (
    <main className="relative min-h-screen bg-[#020817] text-[#E6F7FF] overflow-hidden">
      {/* ⚔️ SAO CYBER FANTASY AMBIENT ELEMENTS */}

      {/* Neon Grid Background */}
      <NeonGrid className="inset-0 w-full h-full" />

      {/* Floating Holograms */}
      <HologramPanel className="top-20 left-[10%] hidden lg:block" delay={0} />
      <HologramPanel className="top-40 right-[15%] hidden lg:block" delay={1.5} />
      <HologramPanel className="bottom-40 left-[20%] hidden lg:block" delay={3} />

      {/* Data Streams */}
      <DataStream className="top-0 left-[15%]" delay={0} />
      <DataStream className="top-0 left-[35%]" delay={1} />
      <DataStream className="top-0 left-[55%]" delay={2} />
      <DataStream className="top-0 right-[25%]" delay={0.5} />
      <DataStream className="top-0 right-[10%]" delay={1.5} />

      {/* Hex Tiles */}
      <HexTile className="top-32 right-[10%] hidden md:block" delay={0} />
      <HexTile className="top-1/3 left-[8%] hidden md:block" delay={2} />
      <HexTile className="bottom-1/4 right-[12%] hidden md:block" delay={4} />

      {/* Light Particles */}
      <LightParticle className="top-[20%] left-[25%]" delay={0} />
      <LightParticle className="top-[40%] right-[30%]" delay={1} />
      <LightParticle className="top-[60%] left-[15%]" delay={2} />
      <LightParticle className="top-[80%] right-[20%]" delay={0.5} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* Cyber Glow Orbs */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#00F5D4]/40 via-[#845EC2]/30 to-[#00A8E8]/20 blur-3xl opacity-30 animate-neonPulse" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#845EC2]/30 via-[#00A8E8]/20 to-[#00F5D4]/20 blur-3xl opacity-30 animate-neonPulse" style={{ animationDelay: '1s' }} />

        <div className="relative mx-auto max-w-5xl">
          {/* 🌙 SAO Moon Phases - Neon Cyber Gradient with Pulsing */}
          <div className="mb-8 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div
              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#020817] to-[#00A8E8]/60 border-2 border-[#00F5D4]/50 shadow-lg shadow-[#00F5D4]/30 animate-pulse flex-shrink-0"
              title="New Moon"
              style={{ animationDuration: '3s' }}
            />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#00F5D4]/40 to-[#845EC2]/40" />

            <div
              className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#00F5D4] via-[#00A8E8]/80 to-[#845EC2]/70 border-2 border-[#00F5D4]/60 shadow-lg shadow-[#00F5D4]/40 animate-pulse flex-shrink-0"
              title="Waxing Crescent"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#00F5D4]/50 to-[#00A8E8]/60" />

            <div
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00F5D4] via-[#00A8E8] to-[#845EC2] border-2 border-[#00F5D4]/80 shadow-xl shadow-[#00F5D4]/60 animate-pulse flex-shrink-0"
              title="Full Moon - AI Innovation Suite"
              style={{ animationDuration: '2.5s' }}
            />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#00A8E8]/60 to-[#845EC2]/50" />

            <div
              className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#845EC2]/90 via-[#020817]/70 to-[#00A8E8]/80 border-2 border-[#845EC2]/60 shadow-lg shadow-[#845EC2]/40 animate-pulse flex-shrink-0"
              title="Waning Crescent"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="hidden xs:block h-0.5 w-4 sm:w-8 md:w-12 bg-gradient-to-r from-[#845EC2]/40 to-[#00F5D4]/40" />

            <div
              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#020817] to-[#00A8E8]/60 border-2 border-[#00F5D4]/50 shadow-lg shadow-[#00F5D4]/30 animate-pulse flex-shrink-0"
              title="New Moon"
              style={{ animationDuration: '3s' }}
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#00F5D4] uppercase font-medium">
              ⚔️ Service Suite · AI Innovation
            </p>
            <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] bg-clip-text text-transparent leading-tight px-4">
              AI Innovation Suite
            </h1>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-[#9FE8FF] max-w-3xl mx-auto leading-relaxed px-4">
              Applied AI at the intersection of clinical empathy, creative storytelling, and technical engineering.
              We architect copilots, automations, and creative systems that actually make sense for your team.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact?service=ai-innovation"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] px-8 py-4 text-base font-bold text-[#020817] shadow-xl shadow-[#00F5D4]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00A8E8]/70 overflow-hidden"
              >
                <span className="relative z-10">Start Your AI Project</span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </a>

              <a
                href="#ai-packages"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#00F5D4] px-8 py-4 text-base font-bold text-[#00F5D4] transition-all duration-300 hover:bg-[#00F5D4]/10 hover:border-[#00A8E8]"
              >
                <span>View Packages</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CyberDivider />

      {/* WHO THIS IS FOR */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#00F5D4] uppercase font-medium">
              Who This Is For
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#E6F7FF]">
              Built for visionaries ready to deploy AI
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tech Founders", desc: "Need a RAG chatbot, voice AI, or custom copilot to differentiate your product" },
              { title: "Healthcare Innovators", desc: "Want HIPAA-compliant AI systems built by someone who understands clinical workflows" },
              { title: "Creative Studios", desc: "Looking for AI tools that enhance creative work without replacing the human magic" },
              { title: "Enterprise Teams", desc: "Ready to prototype AI features quickly before committing to full-scale development" },
              { title: "AI-Curious Leaders", desc: "Want to explore AI possibilities with weekend sprints and rapid validation" },
              { title: "Product Teams", desc: "Need AI architecture design and implementation roadmaps from an experienced engineer" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#00F5D4]/30 bg-[#020817]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#00F5D4] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00F5D4]/20"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00F5D4] animate-neonPulse" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6F7FF] mb-2 group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9FE8FF] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CyberDivider />

      {/* HOW WE WORK TOGETHER */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#00F5D4] uppercase font-medium">
              How We Work Together
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#E6F7FF]">
              From prototype to production in 3 steps
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery & Design",
                desc: "We map your AI vision, define success metrics, and architect the right solution—whether it's a weekend sprint or enterprise platform.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "Build & Iterate",
                desc: "Rapid prototyping with working demos, feedback loops, and iterative refinement. You see progress every week, not months later.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Deploy & Support",
                desc: "Production deployment with monitoring, safety guardrails, and post-launch support. Plus documentation and training for your team.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-[#00F5D4]/30 bg-gradient-to-br from-[#020817]/80 to-[#00F5D4]/5 p-8 backdrop-blur-sm hover:border-[#00F5D4] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5D4] to-[#00A8E8] flex items-center justify-center font-bold text-[#020817] shadow-lg shadow-[#00F5D4]/40">
                  {step.step}
                </div>
                <div className="mb-4 text-[#00F5D4]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#E6F7FF] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9FE8FF] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CyberDivider />

      {/* AI SERVICES PACKAGES */}
      <section id="ai-packages" className="relative px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#00F5D4] uppercase font-medium">
              AI Solutions
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#E6F7FF]">
              Prototype quickly, scale thoughtfully
            </h2>
            <p className="text-[#9FE8FF] max-w-2xl mx-auto">
              From rapid weekend sprints to enterprise AI platforms—with governance and safety baked in from day one.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {aiServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#00F5D4] text-center">
                  {service.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.tiers.map((tier, index) => (
                    <article
                      key={tier.name}
                      className={`relative rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#00F5D4]/30 backdrop-blur-sm ${
                        tier.popular
                          ? "border-[#00F5D4] bg-gradient-to-br from-[#00F5D4]/20 via-[#020817]/80 to-[#020817]/95"
                          : "border-[#00F5D4]/30 bg-gradient-to-br from-[#020817]/60 via-[#020817]/80 to-[#020817]/95"
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] px-4 py-1 text-xs font-bold text-[#020817] shadow-lg animate-neonPulse">
                          MOST POPULAR
                        </div>
                      )}

                      <div className="space-y-6">
                        {/* Tier Header */}
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-[#E6F7FF]">
                            {tier.name}
                          </h4>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-[#00F5D4] to-[#00A8E8] bg-clip-text text-transparent">
                              ${tier.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-[#9FE8FF]">
                              {tier.duration}
                            </span>
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm">
                              <svg
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00F5D4]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-[#9FE8FF] leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                          href={`/contact?service=ai-innovation&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                            tier.popular
                              ? "bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] text-[#020817] shadow-lg shadow-[#00F5D4]/40 hover:shadow-xl hover:shadow-[#00A8E8]/60 hover:-translate-y-0.5"
                              : "border border-[#00F5D4]/40 text-[#00F5D4] hover:bg-[#00F5D4]/10 hover:border-[#00F5D4]"
                          }`}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CyberDivider />

      {/* FAQ SECTION */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#00F5D4] uppercase font-medium">
              FAQ
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#E6F7FF]">
              Common questions about AI development
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Background Cyber Orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#00F5D4]/40 via-[#845EC2]/30 to-[#00A8E8]/20 blur-3xl animate-neonPulse" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#00F5D4]/40 bg-gradient-to-br from-[#00F5D4]/15 via-[#020817]/60 to-[#020817]/90 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
            <h2 className="font-elegant text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] bg-clip-text text-transparent">
              Ready to ship an AI idea?
            </h2>
            <p className="mt-4 text-lg text-[#9FE8FF] max-w-2xl mx-auto">
              Start with a low-risk discovery sprint or go straight into building your intelligent system.
              Either way, you'll have something working fast.
            </p>

            <a
              href="/contact?service=ai-innovation"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00F5D4] via-[#00A8E8] to-[#845EC2] px-10 py-4 text-base font-bold text-[#020817] shadow-xl shadow-[#00F5D4]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00A8E8]/70 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your AI Project</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </a>

            <p className="mt-6 text-xs text-[#00F5D4]/80">
              Weekend sprint slots available • Enterprise solutions welcome
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
