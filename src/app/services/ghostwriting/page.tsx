'use client';

import type { Metadata } from "next";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

// 🦉 HOGWARTS CASTLE LIBRARY - IMMERSIVE SVG COMPONENTS

// Floating Candle
const FloatingCandle = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-candleFlicker`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative">
      {/* Candle body */}
      <div className="w-3 h-12 bg-gradient-to-b from-[#F5E7C8] to-[#E9C97F] rounded-t-sm" />
      {/* Flame */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="w-4 h-6 bg-gradient-to-t from-[#F0C979] via-[#F5E7C8] to-transparent rounded-full opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0C979]/50 to-transparent blur-sm rounded-full" />
      </div>
      {/* Glow */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#F0C979]/30 blur-md rounded-full" />
    </div>
  </div>
);

// Floating Quill
const MagicQuill = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-quillFloat`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 21L12 12M12 12L21 3M12 12V21M12 12H3"
        stroke="#5B335F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6C16 8 14 10 12 12"
        stroke="#F0C979"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  </div>
);

// Dust Motes
const DustMote = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-dustMotes`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-1 h-1 rounded-full bg-[#F5E7C8]/40" />
  </div>
);

// Flying Owl Silhouette
const FlyingOwl = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-owlFly`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="14" rx="8" ry="6" fill="#5B335F" opacity="0.7" />
      <circle cx="13" cy="13" r="2" fill="#F0C979" opacity="0.8" />
      <circle cx="19" cy="13" r="2" fill="#F0C979" opacity="0.8" />
      <path d="M8 12 L3 8 L8 14 Z" fill="#5B335F" opacity="0.6" />
      <path d="M24 12 L29 8 L24 14 Z" fill="#5B335F" opacity="0.6" />
    </svg>
  </div>
);

// Floating Spellbook
const FloatingBook = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{
      animation: 'pageFloat 5s ease-in-out infinite',
      animationDelay: `${delay}s`
    }}
  >
    <div className="relative w-12 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B335F] to-[#121528] border border-[#F0C979]/30 rounded-sm shadow-lg" />
      <div className="absolute top-2 left-2 right-2 h-0.5 bg-[#F0C979]/40" />
      <div className="absolute top-4 left-2 right-2 h-0.5 bg-[#F0C979]/40" />
      <div className="absolute top-6 left-2 right-2 h-0.5 bg-[#F0C979]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#F0C979]/10 rounded-sm" />
    </div>
  </div>
);

// Magical Sparkle
const MagicSparkle = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-goldShimmer`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L9 7L8 16L7 7L8 0Z" fill="#F0C979" opacity="0.8" />
      <path d="M0 8L7 9L16 8L7 7L0 8Z" fill="#F0C979" opacity="0.8" />
      <path d="M2 2L8 8L14 14" stroke="#F5E7C8" strokeWidth="0.5" opacity="0.6" />
      <path d="M14 2L8 8L2 14" stroke="#F5E7C8" strokeWidth="0.5" opacity="0.6" />
    </svg>
  </div>
);

// Floating Scroll
const FloatingScroll = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{
      animation: 'pageFloat 6s ease-in-out infinite',
      animationDelay: `${delay}s`
    }}
  >
    <div className="relative w-16 h-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5E7C8] to-[#E9C97F] rounded-sm shadow-md border border-[#F0C979]/40" />
      <div className="absolute top-1 left-1 right-1 h-px bg-[#5B335F]/20" />
      <div className="absolute top-2.5 left-1 right-1 h-px bg-[#5B335F]/15" />
      <div className="absolute top-4 left-1 right-1 h-px bg-[#5B335F]/15" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#F0C979] to-[#E9C97F] border-2 border-[#121528]/20 flex items-center justify-center">
        <span className="text-[8px] font-bold text-[#121528]">M</span>
      </div>
    </div>
  </div>
);

// Ink Splatter
const InkSplatter = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none opacity-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="3" fill="#5B335F" />
      <circle cx="6" cy="8" r="1.5" fill="#5B335F" />
      <circle cx="14" cy="12" r="1" fill="#5B335F" />
      <circle cx="8" cy="14" r="0.8" fill="#5B335F" />
      <circle cx="13" cy="7" r="1.2" fill="#5B335F" />
    </svg>
  </div>
);

// Wax Seal
const WaxSeal = ({ className = "" }: { className?: string }) => (
  <div className={`${className} pointer-events-none`}>
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F0C979] to-[#E9C97F] opacity-90" />
      <div className="absolute inset-2 rounded-full border-2 border-[#121528]/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-[#121528]">M</span>
      </div>
    </div>
  </div>
);

// Golden Divider
const GoldenDivider = () => (
  <div className="relative my-12 h-px overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
    <WaxSeal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);

const writingServices = [
  {
    id: "book-ghostwriting",
    title: "Book Ghostwriting",
    tiers: [
      {
        name: "Memoir/Fiction (50K words)",
        price: 18000,
        duration: "4-6 months",
        features: [
          "Voice alignment interviews",
          "Structure & chapter planning",
          "Full manuscript drafting (50K words)",
          "One revision cycle",
          "Final polish & formatting",
        ],
        cta: "Start Your Book",
        popular: false,
      },
      {
        name: "Full-Length Novel (80K words)",
        price: 35000,
        duration: "6-8 months",
        features: [
          "Everything in Memoir/Fiction",
          "Extended manuscript (80K words)",
          "Character development sessions",
          "Two revision cycles",
          "Plot structure consulting",
          "Query letter & synopsis",
        ],
        cta: "Write Your Novel",
        popular: true,
      },
      {
        name: "Premium Book Package (100K+ words)",
        price: 50000,
        duration: "8-12 months",
        features: [
          "Everything in Full-Length Novel",
          "Extended manuscript (100K+ words)",
          "Multiple POV coordination",
          "Three revision cycles",
          "Author platform development",
          "Marketing copy & launch materials",
          "6 months post-completion support",
        ],
        cta: "Premium Package",
        popular: false,
      },
    ],
  },
  {
    id: "cookbook-ghostwriting",
    title: "Cookbook Ghostwriting",
    tiers: [
      {
        name: "Essential Cookbook",
        price: 18000,
        duration: "4-6 months",
        features: [
          "Recipe structuring + headnotes (50 recipes)",
          "Cultural storytelling integration",
          "Testing support notes",
          "Interior copy & introductions",
          "One revision cycle",
        ],
        cta: "Create Cookbook",
        popular: false,
      },
      {
        name: "Premium Cookbook",
        price: 32000,
        duration: "6-8 months",
        features: [
          "Everything in Essential",
          "Extended recipes (80-100 recipes)",
          "In-depth cultural research",
          "Chapter narratives & stories",
          "Back-of-book copy",
          "Two revision cycles",
          "Recipe testing coordination",
        ],
        cta: "Premium Cookbook",
        popular: true,
      },
    ],
  },
  {
    id: "brand-content",
    title: "Brand Story & Content",
    tiers: [
      {
        name: "Website Copy",
        price: 1200,
        duration: "2-3 weeks",
        features: [
          "Home page copy",
          "About page storytelling",
          "3-5 service/product pages",
          "SEO-optimized content",
          "One revision round",
        ],
        cta: "Get Website Copy",
        popular: false,
      },
      {
        name: "Brand Story Package",
        price: 3000,
        duration: "1 month",
        features: [
          "Everything in Website Copy",
          "Founder story deep-dive",
          "Brand narrative framework",
          "Launch announcement copy",
          "Email sequence (5-7 emails)",
          "Social media snippets",
          "Two revision rounds",
        ],
        cta: "Build Brand Story",
        popular: true,
      },
      {
        name: "Content Engine",
        price: 5000,
        duration: "ongoing monthly",
        features: [
          "Everything in Brand Story",
          "Monthly blog posts (4-6)",
          "Newsletter ghostwriting (4 per month)",
          "Social content strategy",
          "Thought leadership pieces",
          "Content calendar planning",
          "Unlimited minor revisions",
        ],
        cta: "Launch Content Engine",
        popular: false,
      },
    ],
  },
  {
    id: "author-platforms",
    title: "Author Platforms & Materials",
    tiers: [
      {
        name: "Author Website",
        price: 1800,
        duration: "2-3 weeks",
        features: [
          "Author bio & about page",
          "Book/series pages",
          "Reader magnet copy",
          "Newsletter signup copy",
          "Basic launch materials",
        ],
        cta: "Build Author Site",
        popular: false,
      },
      {
        name: "Launch Package",
        price: 4500,
        duration: "1-2 months",
        features: [
          "Everything in Author Website",
          "Book description & back cover",
          "Launch email sequences (7-10)",
          "Blog tour materials",
          "Press kit & media copy",
          "Social media launch plan",
          "Two revision rounds",
        ],
        cta: "Launch Your Book",
        popular: true,
      },
    ],
  },
  {
    id: "speeches-leadership",
    title: "Speeches & Thought Leadership",
    tiers: [
      {
        name: "Single Speech",
        price: 1500,
        duration: "1-2 weeks",
        features: [
          "Speech structure & narrative arc",
          "Rhythm & cadence notes",
          "Delivery formatting",
          "Q&A preparation notes",
          "One revision round",
        ],
        cta: "Write Speech",
        popular: false,
      },
      {
        name: "Thought Leadership Package",
        price: 4000,
        duration: "1 month",
        features: [
          "Everything in Single Speech",
          "3 keynote speeches",
          "LinkedIn article ghostwriting (3-5)",
          "Media interview prep materials",
          "Personal branding consultation",
          "Two revision rounds per piece",
        ],
        cta: "Build Leadership Voice",
        popular: true,
      },
    ],
  },
];

const faqs = [
  {
    question: "How do you capture my unique voice and writing style?",
    answer: "Through deep voice alignment interviews where I ask about your favorite authors, how you speak naturally, what phrases you use often, and what tone feels authentic to you. I then create writing samples for you to review and adjust until it feels like you wrote it yourself."
  },
  {
    question: "What's your experience with book-length projects?",
    answer: "I've written 300K+ words across published fantasy novels, short stories, and creative non-fiction. I understand story structure, character arcs, pacing, and what makes readers care. I've completed 4 full manuscripts and have extensive experience with long-form narrative."
  },
  {
    question: "Can you help with both fiction and non-fiction?",
    answer: "Absolutely. I specialize in fantasy fiction, memoirs, cookbooks with cultural storytelling, brand narratives, and thought leadership content. My background in healthcare operations also makes me especially effective for clinical leaders and health founders."
  },
  {
    question: "How does the revision process work?",
    answer: "After each major milestone (outline, first draft, etc.), you'll review the work and provide feedback. I then revise based on your notes. The number of revision cycles depends on your package tier. I also offer unlimited minor revisions for ongoing content retainers."
  },
  {
    question: "Do you offer confidentiality agreements?",
    answer: "Yes, all ghostwriting projects include a standard NDA and work-for-hire agreement. Your story remains yours—I'm just the pen bringing it to life."
  },
  {
    question: "What if I only have rough ideas or voice notes?",
    answer: "That's perfect! Many clients start with scattered ideas, voice memos, or messy outlines. Part of my process is helping you structure those thoughts into a cohesive narrative. We'll craft a clear plan together before any writing begins."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl border border-[#F0C979]/30 bg-[#121528]/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#F0C979]/60"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
          >
            <span className="font-semibold text-[#F5E7C8] group-hover:text-[#F0C979] transition-colors">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#F0C979] transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-[#D5D0C8] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GhostwritingPage() {
  return (
    <main className="relative min-h-screen bg-[#121528] text-[#F5E7C8] overflow-hidden">
      {/* 🦉 HOGWARTS LIBRARY AMBIENT ELEMENTS - MATCH AI PAGE DENSITY */}

      {/* 12 Floating Candles - scattered throughout */}
      <FloatingCandle className="top-24 left-[5%] hidden lg:block" delay={0} />
      <FloatingCandle className="top-32 right-[8%] hidden lg:block" delay={0.8} />
      <FloatingCandle className="top-48 left-[12%] hidden lg:block" delay={1.5} />
      <FloatingCandle className="top-56 right-[15%] hidden lg:block" delay={2.2} />
      <FloatingCandle className="top-1/2 left-[7%] hidden lg:block" delay={3} />
      <FloatingCandle className="top-1/2 right-[18%] hidden lg:block" delay={0.5} />
      <FloatingCandle className="top-2/3 left-[15%] hidden lg:block" delay={1.8} />
      <FloatingCandle className="top-2/3 right-[10%] hidden lg:block" delay={2.5} />
      <FloatingCandle className="bottom-48 left-[9%] hidden lg:block" delay={1.2} />
      <FloatingCandle className="bottom-48 right-[12%] hidden lg:block" delay={3.5} />
      <FloatingCandle className="bottom-32 left-[14%] hidden lg:block" delay={2.8} />
      <FloatingCandle className="bottom-32 right-[6%] hidden lg:block" delay={0.3} />

      {/* 10 Magic Quills */}
      <MagicQuill className="top-28 right-[22%] hidden md:block" delay={0} />
      <MagicQuill className="top-40 left-[18%] hidden md:block" delay={1.5} />
      <MagicQuill className="top-1/3 right-[12%] hidden md:block" delay={2.5} />
      <MagicQuill className="top-1/2 left-[10%] hidden md:block" delay={0.8} />
      <MagicQuill className="top-1/2 right-[25%] hidden md:block" delay={3.2} />
      <MagicQuill className="top-2/3 left-[22%] hidden md:block" delay={1.8} />
      <MagicQuill className="bottom-1/3 right-[18%] hidden md:block" delay={2.2} />
      <MagicQuill className="bottom-48 left-[20%] hidden md:block" delay={0.5} />
      <MagicQuill className="bottom-40 right-[15%] hidden md:block" delay={3.8} />
      <MagicQuill className="bottom-28 left-[12%] hidden md:block" delay={1.2} />

      {/* 8 Floating Books */}
      <FloatingBook className="top-36 left-[8%] hidden lg:block" delay={0} />
      <FloatingBook className="top-44 right-[20%] hidden lg:block" delay={1.8} />
      <FloatingBook className="top-1/3 left-[25%] hidden lg:block" delay={2.5} />
      <FloatingBook className="top-1/2 right-[8%] hidden lg:block" delay={0.5} />
      <FloatingBook className="top-2/3 left-[18%] hidden lg:block" delay={3.2} />
      <FloatingBook className="bottom-1/3 right-[22%] hidden lg:block" delay={1.5} />
      <FloatingBook className="bottom-40 left-[14%] hidden lg:block" delay={2.8} />
      <FloatingBook className="bottom-32 right-[16%] hidden lg:block" delay={0.8} />

      {/* 6 Floating Scrolls */}
      <FloatingScroll className="top-32 right-[28%] hidden lg:block" delay={0} />
      <FloatingScroll className="top-1/3 left-[20%] hidden lg:block" delay={2} />
      <FloatingScroll className="top-1/2 right-[32%] hidden lg:block" delay={1.5} />
      <FloatingScroll className="top-2/3 left-[28%] hidden lg:block" delay={3} />
      <FloatingScroll className="bottom-48 right-[24%] hidden lg:block" delay={0.8} />
      <FloatingScroll className="bottom-36 left-[24%] hidden lg:block" delay={2.5} />

      {/* 30 Dust Motes - scattered everywhere */}
      <DustMote className="top-[10%] left-[15%]" delay={0} />
      <DustMote className="top-[12%] right-[20%]" delay={0.5} />
      <DustMote className="top-[15%] left-[30%]" delay={1} />
      <DustMote className="top-[18%] right-[35%]" delay={1.5} />
      <DustMote className="top-[22%] left-[45%]" delay={2} />
      <DustMote className="top-[25%] right-[25%]" delay={0.3} />
      <DustMote className="top-[30%] left-[18%]" delay={2.5} />
      <DustMote className="top-[35%] right-[40%]" delay={1.2} />
      <DustMote className="top-[38%] left-[50%]" delay={3} />
      <DustMote className="top-[42%] right-[15%]" delay={0.8} />
      <DustMote className="top-[45%] left-[40%]" delay={1.8} />
      <DustMote className="top-[48%] right-[48%]" delay={2.2} />
      <DustMote className="top-[52%] left-[22%]" delay={0.5} />
      <DustMote className="top-[55%] right-[28%]" delay={3.5} />
      <DustMote className="top-[58%] left-[38%]" delay={1.5} />
      <DustMote className="top-[62%] right-[18%]" delay={2.8} />
      <DustMote className="top-[65%] left-[48%]" delay={0.2} />
      <DustMote className="top-[68%] right-[32%]" delay={3.2} />
      <DustMote className="top-[72%] left-[28%]" delay={1.8} />
      <DustMote className="top-[75%] right-[42%]" delay={2.5} />
      <DustMote className="top-[78%] left-[35%]" delay={0.7} />
      <DustMote className="top-[82%] right-[22%]" delay={3.8} />
      <DustMote className="top-[85%] left-[50%]" delay={1.2} />
      <DustMote className="top-[88%] right-[38%]" delay={2.2} />
      <DustMote className="top-[92%] left-[42%]" delay={0.9} />
      <DustMote className="top-[95%] right-[28%]" delay={3.5} />
      <DustMote className="top-[15%] left-[55%]" delay={1.7} />
      <DustMote className="top-[45%] right-[55%]" delay={2.9} />
      <DustMote className="top-[75%] left-[15%]" delay={0.4} />
      <DustMote className="top-[35%] right-[8%]" delay={3.1} />

      {/* 20 Magic Sparkles */}
      <MagicSparkle className="top-[18%] left-[12%]" delay={0} />
      <MagicSparkle className="top-[28%] right-[18%]" delay={1} />
      <MagicSparkle className="top-[38%] left-[25%]" delay={2} />
      <MagicSparkle className="top-[48%] right-[30%]" delay={0.5} />
      <MagicSparkle className="top-[58%] left-[35%]" delay={1.5} />
      <MagicSparkle className="top-[68%] right-[20%]" delay={2.5} />
      <MagicSparkle className="top-[78%] left-[45%]" delay={0.8} />
      <MagicSparkle className="top-[88%] right-[35%]" delay={1.8} />
      <MagicSparkle className="top-[22%] left-[42%]" delay={2.8} />
      <MagicSparkle className="top-[32%] right-[45%]" delay={0.3} />
      <MagicSparkle className="top-[42%] left-[8%]" delay={3} />
      <MagicSparkle className="top-[52%] right-[12%]" delay={1.2} />
      <MagicSparkle className="top-[62%] left-[52%]" delay={2.2} />
      <MagicSparkle className="top-[72%] right-[48%]" delay={0.7} />
      <MagicSparkle className="top-[20%] left-[32%]" delay={3.5} />
      <MagicSparkle className="top-[40%] right-[22%]" delay={1.7} />
      <MagicSparkle className="top-[60%] left-[28%]" delay={2.7} />
      <MagicSparkle className="top-[80%] right-[38%]" delay={0.9} />
      <MagicSparkle className="top-[25%] left-[48%]" delay={3.2} />
      <MagicSparkle className="top-[55%] right-[42%]" delay={1.4} />

      {/* 10 Ink Splatters */}
      <InkSplatter className="top-[20%] left-[16%]" delay={0} />
      <InkSplatter className="top-[35%] right-[24%]" delay={1.5} />
      <InkSplatter className="top-[50%] left-[38%]" delay={0.8} />
      <InkSplatter className="top-[65%] right-[18%]" delay={2.2} />
      <InkSplatter className="top-[80%] left-[26%]" delay={1.2} />
      <InkSplatter className="top-[28%] right-[32%]" delay={2.8} />
      <InkSplatter className="top-[42%] left-[44%]" delay={0.4} />
      <InkSplatter className="top-[58%] right-[28%]" delay={3.2} />
      <InkSplatter className="top-[72%] left-[34%]" delay={1.8} />
      <InkSplatter className="top-[88%] right-[42%]" delay={2.5} />

      {/* 6 Flying Owls - crossing at different times */}
      <FlyingOwl className="top-16" delay={0} />
      <FlyingOwl className="top-1/4" delay={5} />
      <FlyingOwl className="top-1/3" delay={10} />
      <FlyingOwl className="top-1/2" delay={15} />
      <FlyingOwl className="top-2/3" delay={20} />
      <FlyingOwl className="top-3/4" delay={25} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* Library Glow Orbs */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#F0C979]/30 via-[#5B335F]/20 to-[#58B6B1]/10 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[#5B335F]/20 via-[#F0C979]/20 to-[#121528]/10 blur-3xl opacity-40" />

        <div className="relative mx-auto max-w-5xl">
          {/* 🌙 Hogwarts Moon Phases */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] border-2 border-[#F0C979] hover:border-[#F5E7C8] transition-all cursor-pointer shadow-lg shadow-[#F0C979]/50 flex-shrink-0 animate-goldShimmer"
              title="Full Moon - Ghostwriting Studio"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F0C979]/60 to-[#F5E7C8]/50 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#F5E7C8] to-[#E9C97F] border border-[#F5E7C8]/70 hover:border-[#F0C979] transition-all cursor-pointer shadow-md shadow-[#F5E7C8]/30 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F5E7C8]/50 to-[#5B335F]/40 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#5B335F] to-[#58B6B1] border border-[#5B335F]/60 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#5B335F]/20 flex-shrink-0"
              title="Half Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#5B335F]/40 to-[#121528]/30 flex-shrink-0" />
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#121528] border border-[#F0C979]/40 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#121528]/10 flex-shrink-0"
              title="Crescent Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#121528]/30 to-[#58B6B1]/20 flex-shrink-0" />
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#58B6B1] to-[#5B335F] border border-[#58B6B1]/30 hover:border-[#58B6B1] transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              🦉 Service Suite · Author & Ghostwriting
            </p>
            <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F0C979] via-[#F5E7C8] to-[#E9C97F] bg-clip-text text-transparent leading-tight px-4">
              Author & Ghostwriting Studio
            </h1>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-[#D5D0C8] max-w-3xl mx-auto leading-relaxed px-4">
              Books, cookbooks, launch flows, and ongoing content engines. A blend of clinical clarity
              and creative storytelling—every word feels human and intentional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact?service=ghostwriting"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] px-8 py-4 text-base font-bold text-[#121528] shadow-xl shadow-[#F0C979]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F5E7C8]/70 overflow-hidden"
              >
                <span className="relative z-10">Start Your Story</span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </a>

              <a
                href="#writing-packages"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#F0C979] px-8 py-4 text-base font-bold text-[#F0C979] transition-all duration-300 hover:bg-[#F0C979]/10 hover:border-[#F5E7C8]"
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

      <GoldenDivider />

      {/* WHO THIS IS FOR */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              Who This Is For
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5E7C8]">
              Strategic writing partnerships
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Aspiring Authors", desc: "Have a book idea but need help bringing it to life with structure, voice, and polish" },
              { title: "Busy Founders", desc: "Want to share your story or expertise but don't have time to write it yourself" },
              { title: "Healthcare Leaders", desc: "Need thought leadership content that balances clinical precision with human warmth" },
              { title: "Creative Entrepreneurs", desc: "Looking for brand storytelling that feels authentic, not corporate" },
              { title: "Cookbook Authors", desc: "Want cultural storytelling woven into recipes with care and research" },
              { title: "Speakers & Executives", desc: "Need speeches or LinkedIn content that sounds like you, not a template" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#F0C979]/30 bg-[#121528]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#F0C979] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F0C979]/20"
              >
                <div className="absolute top-4 right-4 text-[#F0C979] opacity-20 group-hover:opacity-40 transition-opacity">
                  📚
                </div>
                <h3 className="text-lg font-semibold text-[#F5E7C8] mb-2 group-hover:text-[#F0C979] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#D5D0C8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* HOW WE WORK TOGETHER */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              How We Work Together
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5E7C8]">
              From rough ideas to published words
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Voice Alignment",
                desc: "Deep interviews to capture your unique voice, tone, and way of thinking. We'll create samples until it feels like you wrote it.",
                icon: "🎤"
              },
              {
                step: "02",
                title: "Structure & Draft",
                desc: "I craft outlines, chapter plans, and full drafts based on your vision. You review and provide feedback at each milestone.",
                icon: "✍️"
              },
              {
                step: "03",
                title: "Polish & Deliver",
                desc: "Revision cycles, final polish, and formatting. Plus launch materials or platform development depending on your package.",
                icon: "✨"
              }
            ].map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-[#F0C979]/30 bg-gradient-to-br from-[#121528]/80 to-[#5B335F]/10 p-8 backdrop-blur-sm hover:border-[#F0C979] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#F0C979] to-[#E9C97F] flex items-center justify-center font-bold text-[#121528] shadow-lg shadow-[#F0C979]/40">
                  {step.step}
                </div>
                <div className="mb-4 text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#F5E7C8] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#D5D0C8] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* WRITING SERVICES PACKAGES */}
      <section id="writing-packages" className="relative px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              Writing Services
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5E7C8]">
              From books to brand stories
            </h2>
            <p className="text-[#D5D0C8] max-w-2xl mx-auto">
              For founders, clinicians, and creators who want a partner to bring their stories to life with precision and heart.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {writingServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F0C979] text-center">
                  {service.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.tiers.map((tier, index) => (
                    <article
                      key={tier.name}
                      className={`relative rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#F0C979]/30 backdrop-blur-sm ${
                        tier.popular
                          ? "border-[#F0C979] bg-gradient-to-br from-[#F0C979]/15 via-[#121528]/80 to-[#121528]/95"
                          : "border-[#F0C979]/30 bg-gradient-to-br from-[#121528]/60 via-[#121528]/80 to-[#121528]/95"
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] px-4 py-1 text-xs font-bold text-[#121528] shadow-lg">
                          MOST POPULAR
                        </div>
                      )}

                      <div className="space-y-6">
                        {/* Tier Header */}
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-[#F5E7C8]">
                            {tier.name}
                          </h4>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-[#F0C979] to-[#E9C97F] bg-clip-text text-transparent">
                              ${tier.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-[#D5D0C8]">
                              {tier.duration}
                            </span>
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm">
                              <svg
                                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F0C979]"
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
                              <span className="text-[#D5D0C8] leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                          href={`/contact?service=ghostwriting&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                            tier.popular
                              ? "bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] text-[#121528] shadow-lg shadow-[#F0C979]/40 hover:shadow-xl hover:shadow-[#E9C97F]/60 hover:-translate-y-0.5"
                              : "border border-[#F0C979]/40 text-[#F0C979] hover:bg-[#F0C979]/10 hover:border-[#F0C979]"
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

      <GoldenDivider />

      {/* FAQ SECTION */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              FAQ
            </p>
            <h2 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5E7C8]">
              Common questions about ghostwriting
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Background Library Orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#F0C979]/30 via-[#5B335F]/20 to-[#58B6B1]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#F0C979]/40 bg-gradient-to-br from-[#F0C979]/15 via-[#121528]/60 to-[#121528]/90 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
            <h2 className="font-elegant text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#F0C979] via-[#F5E7C8] to-[#E9C97F] bg-clip-text text-transparent">
              Ready to bring your story to life?
            </h2>
            <p className="mt-4 text-lg text-[#D5D0C8] max-w-2xl mx-auto">
              Share your outlines, messy drafts, or voice notes. We'll craft a writing plan
              that honors your voice and serves your vision.
            </p>

            <a
              href="/contact?service=ghostwriting"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] px-10 py-4 text-base font-bold text-[#121528] shadow-xl shadow-[#F0C979]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E9C97F]/70 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Writing Project</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </a>

            <p className="mt-6 text-xs text-[#F0C979]/80">
              Book slots available for Q2 2025 • Voice samples & outlines welcome
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
