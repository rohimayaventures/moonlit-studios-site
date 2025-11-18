"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, PenSquare, Sparkles, ScrollText, MessageCircle, Feather, ChevronDown } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
//  HOGWARTS LIBRARY SVG COMPONENTS
// ═══════════════════════════════════════════════════════════════

// 🕯️ CINEMATIC 4-LAYER CANDLE GLOW - CGI Movie Quality
const CandleGlow = ({
  className = "",
  delay = 0,
  height = "h-64",
}: {
  className?: string;
  delay?: number;
  height?: string;
}) => (
  <div className={`absolute ${className} ${height} w-40 pointer-events-none`}>
    {/* Layer 1: Core flame glow (brightest - like a real flame) */}
    <div
      className="absolute bottom-0 w-6 h-16 left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#F0C979] via-[#FFA500] to-transparent blur-md opacity-90 animate-flameFlicker"
      style={{ animationDelay: `${delay}s` }}
    />

    {/* Layer 2: Inner aura (bright golden column) */}
    <div
      className="absolute bottom-0 w-24 h-full left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#F0C979]/80 via-[#F0C979]/50 to-transparent blur-3xl opacity-85"
      style={{ animationDelay: `${delay * 0.8}s` }}
    />

    {/* Layer 3: Mid glow (expansive warmth) */}
    <div
      className="absolute bottom-0 w-32 h-[120%] left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#E9C97F]/60 via-[#F0C979]/30 to-transparent blur-2xl opacity-75 scale-110"
      style={{ animationDelay: `${delay * 1.2}s` }}
    />

    {/* Layer 4: Outer atmospheric haze (fills the space) */}
    <div
      className="absolute bottom-0 w-40 h-[140%] left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#FFA500]/40 via-[#F0C979]/20 to-transparent blur-3xl opacity-65 scale-125 animate-candleFlicker"
      style={{ animationDelay: `${delay * 1.5}s` }}
    />

    {/* VOLUMETRIC LIGHT RAY - The secret sauce for "CGI movie" feel */}
    <div
      className="absolute bottom-0 w-3 h-full left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#F0C979]/70 via-[#F0C979]/25 to-transparent blur-xl opacity-60"
      style={{ animationDelay: `${delay * 0.5}s` }}
    />
  </div>
);

// Floating Open Book - Warm Parchment with Owlery Gold glow
const FloatingOpenBook = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-cosmicFloat`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="100"
      height="70"
      viewBox="0 0 100 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect */}
      <defs>
        <radialGradient id={`bookGlow-${delay}`}>
          <stop offset="0%" stopColor="#F0C979" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#F0C979" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F0C979" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Owlery Gold glow */}
      <ellipse
        cx="50"
        cy="35"
        rx="45"
        ry="30"
        fill={`url(#bookGlow-${delay})`}
      />

      {/* Left pages - Warm Parchment */}
      <path
        d="M10 15 C25 8 38 10 50 14 L50 48 C38 44 25 43 10 47 Z"
        fill="#F5E7C8"
        stroke="#F0C979"
        strokeWidth="0.5"
        opacity="0.9"
      />
      {/* Right pages */}
      <path
        d="M50 14 C62 10 75 8 90 15 L90 47 C75 43 62 44 50 48 Z"
        fill="#F5E7C8"
        stroke="#F0C979"
        strokeWidth="0.5"
        opacity="0.9"
      />
      {/* Center fold with gold shadow */}
      <path
        d="M50 14 L50 48"
        stroke="#F0C979"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Text lines - subtle gold */}
      <path d="M18 24 L42 26" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
      <path d="M18 30 L40 32" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
      <path d="M18 36 L42 38" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
      <path d="M58 26 L82 24" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
      <path d="M60 32 L82 30" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
      <path d="M58 38 L82 36" stroke="#F0C979" strokeWidth="0.4" opacity="0.3" />
    </svg>
  </div>
);

// 🌫️ MAGICAL PARTICLE SYSTEM - JavaScript-generated 50 particles
const MagicalParticles = () => {
  // Generate 50 unique particles with randomized properties
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 4 + 4,
    color: ['#F0C979', '#F5E7C8', '#58B6B1', '#E9C97F'][Math.floor(Math.random() * 4)],
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-dustMotes pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </>
  );
};

// Winged Skeleton Key - Harry Potter style flying key with prominent dragonfly wings
const WingedKey = ({
  className = "",
  delay = 0,
  keyShape = "ornate",
}: {
  className?: string;
  delay?: number;
  keyShape?: "ornate" | "simple" | "gothic" | "baroque" | "victorian";
}) => {
  const keyDesigns = {
    ornate: {
      shaft: "M50 65 L50 35 C50 28 54 22 60 22 C66 22 70 28 70 35 L70 65",
      head: { cx: 60, cy: 30, r1: 12, r2: 7, r3: 4 },
      teeth: "M50 63 L45 63 L45 68 L50 68 M58 65 L53 65 L53 70 L58 70 M66 63 L61 63 L61 68 L66 68",
    },
    simple: {
      shaft: "M52 65 L52 33 C52 26 56 22 62 22 C68 22 68 28 68 33 L68 65",
      head: { cx: 60, cy: 29, r1: 11, r2: 6, r3: 3 },
      teeth: "M52 63 L47 63 L47 68 L52 68 M60 65 L55 65 L55 68 L60 68",
    },
    gothic: {
      shaft: "M48 65 L48 33 C48 26 52 20 60 20 C68 20 72 26 72 33 L72 65",
      head: { cx: 60, cy: 28, r1: 14, r2: 9, r3: 5 },
      teeth: "M46 63 L41 63 L41 69 L46 69 M54 65 L49 65 L49 70 L54 70 M62 63 L57 63 L57 69 L62 69 M70 65 L65 65 L65 68 L70 68",
    },
    baroque: {
      shaft: "M49 65 L49 38 C49 31 53 26 60 26 C67 26 71 31 71 38 Q71 44 68 48 L68 65",
      head: { cx: 60, cy: 33, r1: 15, r2: 10, r3: 6 },
      teeth: "M47 61 L42 61 L42 66 L47 66 M55 63 L50 63 L50 69 L55 69 M63 61 L58 61 L58 66 L63 66 M71 63 L66 63 L66 67 L71 67",
    },
    victorian: {
      shaft: "M51 65 L51 35 C51 28 55 22 60 22 C65 22 69 28 69 35 L69 48 Q69 53 66 58 L66 65",
      head: { cx: 60, cy: 30, r1: 12, r2: 7, r3: 3 },
      teeth: "M49 62 L44 62 L44 67 L49 67 M57 64 L52 64 L52 69 L57 69 M65 62 L60 62 L60 67 L65 67",
    },
  };

  const design = keyDesigns[keyShape];

  return (
    <div
      className={`absolute ${className} pointer-events-none animate-cosmicFloat`}
      style={{
        animationDelay: `${delay}s`,
        transform: 'rotate(90deg)', // Keys fly horizontally like in the movie!
      }}
    >
      {/* Motion blur trail - creates that "flying fast" CGI effect */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-20 h-3 bg-gradient-to-r from-transparent via-[#58B6B1]/15 to-[#58B6B1]/35 blur-sm opacity-60" />

      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`wingGlow-${delay}-${keyShape}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
          <radialGradient id={`wingShimmer-${delay}-${keyShape}`}>
            <stop offset="0%" stopColor="#58B6B1" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#58B6B1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#58B6B1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Wing glow aura */}
        <ellipse
          cx="60"
          cy="40"
          rx="50"
          ry="35"
          fill={`url(#wingShimmer-${delay}-${keyShape})`}
          filter={`url(#wingGlow-${delay}-${keyShape})`}
        />

        {/* LEFT WING PAIR - Large outer wing */}
        <ellipse
          cx="25"
          cy="40"
          rx="20"
          ry="32"
          fill="#F5E7C8"
          fillOpacity="0.25"
          transform="rotate(-30 25 40)"
        />
        <ellipse
          cx="25"
          cy="40"
          rx="20"
          ry="32"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="1.2"
          opacity="0.8"
          transform="rotate(-30 25 40)"
        />
        {/* Inner vein lines */}
        <ellipse
          cx="25"
          cy="40"
          rx="14"
          ry="24"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.6"
          opacity="0.5"
          transform="rotate(-30 25 40)"
        />
        <ellipse
          cx="25"
          cy="40"
          rx="8"
          ry="16"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.4"
          opacity="0.3"
          transform="rotate(-30 25 40)"
        />

        {/* LEFT WING PAIR - Small inner wing */}
        <ellipse
          cx="35"
          cy="50"
          rx="12"
          ry="20"
          fill="#F5E7C8"
          fillOpacity="0.2"
          transform="rotate(-20 35 50)"
        />
        <ellipse
          cx="35"
          cy="50"
          rx="12"
          ry="20"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="1"
          opacity="0.7"
          transform="rotate(-20 35 50)"
        />
        <ellipse
          cx="35"
          cy="50"
          rx="7"
          ry="13"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.5"
          opacity="0.4"
          transform="rotate(-20 35 50)"
        />

        {/* RIGHT WING PAIR - Large outer wing */}
        <ellipse
          cx="95"
          cy="40"
          rx="20"
          ry="32"
          fill="#F5E7C8"
          fillOpacity="0.25"
          transform="rotate(30 95 40)"
        />
        <ellipse
          cx="95"
          cy="40"
          rx="20"
          ry="32"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="1.2"
          opacity="0.8"
          transform="rotate(30 95 40)"
        />
        {/* Inner vein lines */}
        <ellipse
          cx="95"
          cy="40"
          rx="14"
          ry="24"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.6"
          opacity="0.5"
          transform="rotate(30 95 40)"
        />
        <ellipse
          cx="95"
          cy="40"
          rx="8"
          ry="16"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.4"
          opacity="0.3"
          transform="rotate(30 95 40)"
        />

        {/* RIGHT WING PAIR - Small inner wing */}
        <ellipse
          cx="85"
          cy="50"
          rx="12"
          ry="20"
          fill="#F5E7C8"
          fillOpacity="0.2"
          transform="rotate(20 85 50)"
        />
        <ellipse
          cx="85"
          cy="50"
          rx="12"
          ry="20"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="1"
          opacity="0.7"
          transform="rotate(20 85 50)"
        />
        <ellipse
          cx="85"
          cy="50"
          rx="7"
          ry="13"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.5"
          opacity="0.4"
          transform="rotate(20 85 50)"
        />

        {/* KEY BODY - Skeleton key in Owlery Gold */}
        {/* Key shaft */}
        <path
          d={design.shaft}
          fill="none"
          stroke="#F0C979"
          strokeWidth="3"
          opacity="0.95"
        />
        <path
          d={design.shaft}
          fill="none"
          stroke="#C8A560"
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Key head (ornate bow) */}
        <circle
          cx={design.head.cx}
          cy={design.head.cy}
          r={design.head.r1}
          fill="none"
          stroke="#F0C979"
          strokeWidth="3"
          opacity="0.95"
        />
        <circle
          cx={design.head.cx}
          cy={design.head.cy}
          r={design.head.r2}
          fill="none"
          stroke="#F0C979"
          strokeWidth="2"
          opacity="0.95"
        />
        <circle
          cx={design.head.cx}
          cy={design.head.cy}
          r={design.head.r3}
          fill="none"
          stroke="#C8A560"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Key teeth (bit) */}
        <path
          d={design.teeth}
          fill="#F0C979"
          opacity="0.95"
        />
        <path
          d={design.teeth}
          fill="none"
          stroke="#C8A560"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* Decorative gold glow on key */}
        <circle
          cx={design.head.cx}
          cy={design.head.cy}
          r={design.head.r1 + 5}
          fill="#F0C979"
          opacity="0.1"
          filter={`url(#wingGlow-${delay}-${keyShape})`}
        />
      </svg>
    </div>
  );
};

export default function GhostwritingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#121528] via-[#1A1E38] to-[#121528] text-[#F5E7C8] overflow-hidden relative">

      {/* MAGICAL LIBRARY AMBIENT ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Candle glows - BRIGHT background lighting columns */}
        <CandleGlow className="bottom-0 left-[2%]" delay={0} height="h-64" />
        <CandleGlow className="bottom-0 left-[8%]" delay={0.5} height="h-56" />
        <CandleGlow className="bottom-0 left-[14%]" delay={1.0} height="h-60" />
        <CandleGlow className="bottom-0 left-[20%]" delay={1.5} height="h-52" />

        <CandleGlow className="bottom-0 right-[2%]" delay={0.3} height="h-60" />
        <CandleGlow className="bottom-0 right-[8%]" delay={0.8} height="h-58" />
        <CandleGlow className="bottom-0 right-[14%]" delay={1.3} height="h-64" />
        <CandleGlow className="bottom-0 right-[20%]" delay={1.8} height="h-54" />

        {/* Floating open books with Owlery Gold glow - MORE OF THEM */}
        <FloatingOpenBook className="top-[20%] left-[6%]" delay={0} />
        <FloatingOpenBook className="top-[60%] right-[8%]" delay={1.8} />
        <FloatingOpenBook className="top-[45%] left-[10%]" delay={3.2} />
        <FloatingOpenBook className="top-[35%] right-[15%]" delay={2.5} />
        <FloatingOpenBook className="top-[75%] left-[12%]" delay={4.0} />
        <FloatingOpenBook className="top-[50%] right-[6%]" delay={3.5} />

        {/* Flying winged skeleton keys - MORE throughout page */}
        <WingedKey className="top-[15%] left-[20%]" delay={0.5} keyShape="ornate" />
        <WingedKey className="top-[28%] right-[18%]" delay={1.2} keyShape="gothic" />
        <WingedKey className="top-[42%] left-[25%]" delay={1.8} keyShape="simple" />
        <WingedKey className="top-[55%] right-[22%]" delay={2.5} keyShape="baroque" />
        <WingedKey className="top-[68%] left-[18%]" delay={3.2} keyShape="victorian" />
        <WingedKey className="top-[35%] left-[5%]" delay={2.0} keyShape="ornate" />
        <WingedKey className="top-[80%] right-[12%]" delay={3.8} keyShape="simple" />
        <WingedKey className="top-[22%] right-[8%]" delay={1.5} keyShape="baroque" />

        {/* ✨ JAVASCRIPT-GENERATED PARTICLE SYSTEM - 50 magical particles */}
        <MagicalParticles />
      </div>

      {/* 🌫️ ATMOSPHERIC FOG LAYERS - CGI movie depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Bottom fog layer - dense at floor */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#121528]/70 via-[#1A1E38]/40 to-transparent backdrop-blur-[1px]" />

        {/* Mid fog layer - drifting mist */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#F0C979]/8 via-[#5B335F]/6 to-transparent opacity-50 animate-candleFlicker" style={{ animationDuration: '8s' }} />

        {/* Animated atmospheric haze */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#E9C97F]/10 via-transparent to-transparent animate-floatSlow" />
      </div>

      {/* Warm library glow from bottom - Owlery Gold - BRIGHTER */}
      <div className="fixed bottom-0 left-0 right-0 h-2/5 pointer-events-none z-0 bg-gradient-to-t from-[#F0C979]/20 via-[#F0C979]/10 to-transparent opacity-80" />

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
