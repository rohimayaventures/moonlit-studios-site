'use client';

import { useState } from 'react';
import { Check, Sparkles, Star, Palette, Code, Package } from 'lucide-react';
import Link from 'next/link';

// ✨ MOONLIT COSMIC CREATOR - EPIC REACT COMPONENTS FOR IMMERSIVE SPACE

// ═══════════════════════════════════════════════════════════════
//  COSMIC ARCHITECTURAL COMPONENTS - THE IMMERSIVE UNIVERSE
// ═══════════════════════════════════════════════════════════════

// Twinkling Star - Individual star with realistic shimmer
const TwinklingStar = ({
  size = 2,
  color = "cyan",
  delay = 0,
  className = "",
  style
}: {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const colorMap: Record<string, string> = {
    cyan: "#67E8F9",
    indigo: "#818CF8",
    purple: "#C084FC",
    amber: "#FCD34D",
    teal: "#5EEAD4",
    lavender: "#E9D5FF",
  };

  return (
    <div
      className={`absolute ${className} pointer-events-none animate-twinkle`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      <svg width={size * 4} height={size * 4} viewBox="0 0 20 20">
        {/* Star glow */}
        <circle
          cx="10"
          cy="10"
          r="8"
          fill={colorMap[color] || colorMap.cyan}
          opacity="0.2"
          className="blur-sm"
        />
        {/* Star core */}
        <circle
          cx="10"
          cy="10"
          r={size}
          fill={colorMap[color] || colorMap.cyan}
          opacity="0.9"
        />
        {/* Star rays */}
        <line x1="10" y1="2" x2="10" y2="18" stroke={colorMap[color]} strokeWidth="0.5" opacity="0.6" />
        <line x1="2" y1="10" x2="18" y2="10" stroke={colorMap[color]} strokeWidth="0.5" opacity="0.6" />
      </svg>
    </div>
  );
};

// Cosmic Starfield - 100+ stars across the viewport
const CosmicStarfield = () => {
  const stars = Array.from({ length: 120 }, (_, i) => {
    const colors = ['cyan', 'indigo', 'purple', 'amber', 'teal', 'lavender'];
    const sizes = [1.5, 2, 2.5, 3];

    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <TwinklingStar
          key={star.id}
          size={star.size}
          color={star.color}
          delay={star.delay}
          className={`left-[${star.x}%] top-[${star.y}%]`}
          style={{ left: `${star.x}%`, top: `${star.y}%` } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

// Nebula Cloud - Swirling cosmic gas clouds
const NebulaCloud = ({
  position = "top-left",
  colors = "indigo-purple",
  size = "large"
}: {
  position?: string;
  colors?: string;
  size?: "small" | "medium" | "large";
}) => {
  const sizeMap = {
    small: "w-64 h-64",
    medium: "w-96 h-96",
    large: "w-[600px] h-[600px]"
  };

  const colorMap: Record<string, string> = {
    "indigo-purple": "from-indigo-500/30 via-purple-500/20 to-transparent",
    "cyan-teal": "from-cyan-500/30 via-teal-500/20 to-transparent",
    "amber-gold": "from-amber-500/30 via-yellow-500/20 to-transparent",
    "lavender-pink": "from-purple-400/30 via-pink-400/20 to-transparent",
  };

  const positionMap: Record<string, string> = {
    "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
    "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none animate-nebulaShimmer`}>
      <div className={`w-full h-full rounded-full bg-gradient-radial ${colorMap[colors]} blur-3xl opacity-40`} />
    </div>
  );
};

// Shooting Comet - Diagonal shooting stars from top-left to bottom-right
const ShootingComet = ({ delay = 0, startOffset = 0 }: { delay?: number; startOffset?: number }) => {
  return (
    <div
      className="absolute pointer-events-none animate-shootingStar"
      style={{
        left: `${startOffset}%`,
        top: '0%',
        animationDelay: `${delay}s`,
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Diagonal trail gradient */}
        <defs>
          <linearGradient id={`shooting-trail-${delay}-${startOffset}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
            <stop offset="30%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#C084FC" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Diagonal trail line */}
        <line
          x1="0"
          y1="0"
          x2="180"
          y2="180"
          stroke={`url(#shooting-trail-${delay}-${startOffset})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Bright comet head */}
        <circle cx="180" cy="180" r="4" fill="#FCD34D" opacity="1" />
        <circle cx="180" cy="180" r="8" fill="#FCD34D" opacity="0.5" className="blur-sm" />
        <circle cx="180" cy="180" r="12" fill="#FBBF24" opacity="0.2" className="blur-md" />
      </svg>
    </div>
  );
};

// Floating Stardust Particles
const StardustParticle = ({ delay = 0, className = "", style }: { delay?: number; className?: string; style?: React.CSSProperties }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-stardustDrift`}
    style={{ animationDelay: `${delay}s`, ...style }}
  >
    <div className="w-1 h-1 rounded-full bg-gradient-to-br from-cyan-300 to-purple-400 opacity-60" />
  </div>
);

// Cancer Constellation - Left side of hero
const CancerConstellation = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} animate-glowPulse`} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cancer stars - crab shape */}
    <circle cx="40" cy="60" r="2.5" fill="#67E8F9" opacity="0.9" />
    <circle cx="60" cy="50" r="3" fill="#5EEAD4" opacity="0.95" />
    <circle cx="75" cy="55" r="2.5" fill="#67E8F9" opacity="0.9" />
    <circle cx="90" cy="50" r="2" fill="#5EEAD4" opacity="0.85" />
    <circle cx="110" cy="60" r="2.5" fill="#67E8F9" opacity="0.9" />
    <circle cx="60" cy="80" r="2" fill="#5EEAD4" opacity="0.85" />
    <circle cx="75" cy="90" r="3" fill="#67E8F9" opacity="0.95" />
    <circle cx="90" cy="80" r="2" fill="#5EEAD4" opacity="0.85" />

    {/* Connecting lines */}
    <line x1="40" y1="60" x2="60" y2="50" stroke="#67E8F9" strokeWidth="1" opacity="0.5" />
    <line x1="60" y1="50" x2="75" y2="55" stroke="#5EEAD4" strokeWidth="1" opacity="0.5" />
    <line x1="75" y1="55" x2="90" y2="50" stroke="#67E8F9" strokeWidth="1" opacity="0.5" />
    <line x1="90" y1="50" x2="110" y2="60" stroke="#5EEAD4" strokeWidth="1" opacity="0.5" />
    <line x1="60" y1="50" x2="60" y2="80" stroke="#67E8F9" strokeWidth="1" opacity="0.5" />
    <line x1="90" y1="50" x2="90" y2="80" stroke="#5EEAD4" strokeWidth="1" opacity="0.5" />
    <line x1="60" y1="80" x2="75" y2="90" stroke="#67E8F9" strokeWidth="1" opacity="0.5" />
    <line x1="75" y1="90" x2="90" y2="80" stroke="#5EEAD4" strokeWidth="1" opacity="0.5" />
  </svg>
);

// Scorpio Constellation - Right side of hero
const ScorpioConstellation = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} animate-glowPulse`} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scorpio stars - scorpion shape with curved tail */}
    <circle cx="40" cy="50" r="3" fill="#C084FC" opacity="0.95" />
    <circle cx="55" cy="55" r="2.5" fill="#E9D5FF" opacity="0.9" />
    <circle cx="70" cy="60" r="2.5" fill="#C084FC" opacity="0.9" />
    <circle cx="85" cy="70" r="3" fill="#E9D5FF" opacity="0.95" />
    <circle cx="95" cy="85" r="2.5" fill="#C084FC" opacity="0.9" />
    <circle cx="105" cy="95" r="2" fill="#E9D5FF" opacity="0.85" />
    <circle cx="110" cy="105" r="2.5" fill="#C084FC" opacity="0.9" />
    <circle cx="55" cy="70" r="2" fill="#E9D5FF" opacity="0.85" />
    <circle cx="45" cy="65" r="2" fill="#C084FC" opacity="0.85" />

    {/* Connecting lines - scorpion body and tail */}
    <line x1="40" y1="50" x2="55" y2="55" stroke="#C084FC" strokeWidth="1" opacity="0.5" />
    <line x1="55" y1="55" x2="70" y2="60" stroke="#E9D5FF" strokeWidth="1" opacity="0.5" />
    <line x1="70" y1="60" x2="85" y2="70" stroke="#C084FC" strokeWidth="1" opacity="0.5" />
    <line x1="85" y1="70" x2="95" y2="85" stroke="#E9D5FF" strokeWidth="1" opacity="0.5" />
    <line x1="95" y1="85" x2="105" y2="95" stroke="#C084FC" strokeWidth="1" opacity="0.5" />
    <line x1="105" y1="95" x2="110" y2="105" stroke="#E9D5FF" strokeWidth="1" opacity="0.5" />
    <line x1="55" y1="55" x2="55" y2="70" stroke="#C084FC" strokeWidth="1" opacity="0.5" />
    <line x1="55" y1="55" x2="45" y2="65" stroke="#E9D5FF" strokeWidth="1" opacity="0.5" />
  </svg>
);

// Cosmic Constellation Lines
const ConstellationDivider = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} animate-glowPulse`} viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stars */}
    <circle cx="50" cy="30" r="2.5" fill="#67E8F9" opacity="0.8" />
    <circle cx="100" cy="20" r="2" fill="#818CF8" opacity="0.7" />
    <circle cx="150" cy="35" r="2.5" fill="#C084FC" opacity="0.8" />
    <circle cx="200" cy="25" r="2" fill="#FCD34D" opacity="0.7" />
    <circle cx="250" cy="30" r="2.5" fill="#5EEAD4" opacity="0.8" />
    <circle cx="300" cy="22" r="2" fill="#E9D5FF" opacity="0.7" />
    <circle cx="350" cy="32" r="2.5" fill="#67E8F9" opacity="0.8" />

    {/* Connecting lines with gradient */}
    <line x1="50" y1="30" x2="100" y2="20" stroke="#67E8F9" strokeWidth="0.8" opacity="0.4" />
    <line x1="100" y1="20" x2="150" y2="35" stroke="#818CF8" strokeWidth="0.8" opacity="0.4" />
    <line x1="150" y1="35" x2="200" y2="25" stroke="#C084FC" strokeWidth="0.8" opacity="0.4" />
    <line x1="200" y1="25" x2="250" y2="30" stroke="#FCD34D" strokeWidth="0.8" opacity="0.4" />
    <line x1="250" y1="30" x2="300" y2="22" stroke="#5EEAD4" strokeWidth="0.8" opacity="0.4" />
    <line x1="300" y1="22" x2="350" y2="32" stroke="#E9D5FF" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

// Aurora Wave - Northern lights effect
const AuroraWave = ({ position = "top" }: { position?: "top" | "bottom" }) => (
  <div className={`absolute ${position}-0 left-0 right-0 h-96 pointer-events-none animate-auroraWave overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 blur-2xl" />
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-teal-500/8 to-transparent opacity-40 blur-3xl"
         style={{ animationDelay: '1s' }} />
  </div>
);

// Radial Nebula Glow
const RadialGlow = ({ className = "", color = "indigo" }: { className?: string; color?: string }) => {
  const colorMap: Record<string, string> = {
    indigo: "from-indigo-500/20 via-indigo-500/10 to-transparent",
    lavender: "from-purple-400/20 via-purple-400/10 to-transparent",
    teal: "from-teal-400/20 via-teal-400/10 to-transparent",
    gold: "from-amber-400/20 via-amber-400/10 to-transparent",
    cyan: "from-cyan-400/20 via-cyan-400/10 to-transparent",
  };

  return (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className={`w-full h-full rounded-full bg-gradient-radial ${colorMap[color]} blur-3xl animate-cosmicPulse`} />
    </div>
  );
};

export default function CreativeDesignDevelopmentPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Reorganized packages - LOW to HIGH with COSMIC THEME NAMES
  const packages = [
    {
      id: 1,
      title: "Packaging & Product Design",
      tier: "Stardust ⭐",
      price: "$800",
      tagline: "Shelf-ready packaging and product visuals.",
      features: [
        "1 SKU label design",
        "2 mockup variations",
        "Print-ready files (PDF, AI)",
        "1 round of revisions",
      ],
      ideal: "Single product launches, Etsy shops, small batch creators",
      color: "from-cyan-600/20 to-teal-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: 2,
      title: "Packaging & Product Design",
      tier: "Nebula 🌌",
      price: "$1,200",
      tagline: "Comprehensive packaging with multiple variations.",
      features: [
        "1 SKU label design",
        "5 mockup variations",
        "Print-ready files + dieline template",
        "Ingredient hierarchy & formatting",
        "2 rounds of revisions",
      ],
      ideal: "Product lines, boutique brands, retail launches",
      color: "from-teal-600/20 to-cyan-700/20",
      borderColor: "border-teal-500/30",
      accentColor: "text-teal-400",
      glowColor: "shadow-teal-500/20",
      popular: true,
    },
    {
      id: 3,
      title: "Branding & Identity",
      tier: "Stardust ⭐",
      price: "$1,800",
      tagline: "Rooted visual systems for your brand or studio.",
      features: [
        "Logo suite (3 variations)",
        "2-color palette + 2 fonts",
        "Basic brand guidelines (10 pages)",
        "1 round of revisions",
      ],
      ideal: "Startups, side projects, personal brands",
      color: "from-purple-600/20 to-indigo-700/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: 4,
      title: "Branding & Identity",
      tier: "Nebula 🌌",
      price: "$2,800",
      tagline: "Full brand identity with comprehensive guidelines.",
      features: [
        "Logo suite (5 variations)",
        "Full color palette + font pairing",
        "Comprehensive brand guidelines (20-30 pages)",
        "Mood boards + social media kit (10 templates)",
        "2 rounds of revisions",
      ],
      ideal: "Established businesses, authors, creative studios",
      color: "from-indigo-600/20 to-purple-700/20",
      borderColor: "border-indigo-500/30",
      accentColor: "text-indigo-400",
      glowColor: "shadow-indigo-500/20",
      popular: true,
    },
    {
      id: 5,
      title: "Web Development",
      tier: "Stardust ⭐",
      price: "$3,000",
      tagline: "Custom responsive sites ready for launch.",
      features: [
        "3-page website (Home, About, Contact)",
        "Mobile responsive",
        "Basic SEO setup",
        "Contact form integration",
        "1 month post-launch support",
      ],
      ideal: "Portfolio sites, landing pages, author websites",
      color: "from-cyan-600/20 to-blue-700/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
    },
    {
      id: 6,
      title: "Branding & Identity",
      tier: "Supernova 💫",
      price: "$4,500",
      tagline: "White-glove brand strategy and execution.",
      features: [
        "Everything in Nebula, PLUS:",
        "Brand strategy workshop (2 hours)",
        "Extended logo suite (10+ variations)",
        "Print collateral designs",
        "Brand voice guide + messaging",
        "3 rounds of revisions",
      ],
      ideal: "Premium brands, product launches, rebrands",
      color: "from-purple-600/20 to-pink-700/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: 7,
      title: "Web Development",
      tier: "Nebula 🌌",
      price: "$5,500",
      tagline: "Full-featured website with advanced capabilities.",
      features: [
        "5-7 page website",
        "Blog or portfolio section",
        "Advanced SEO optimization",
        "Newsletter signup integration",
        "Custom animations",
        "2 months post-launch support",
      ],
      ideal: "Business sites, creative portfolios, content creators",
      color: "from-teal-600/20 to-indigo-700/20",
      borderColor: "border-teal-500/30",
      accentColor: "text-teal-400",
      glowColor: "shadow-teal-500/20",
      popular: true,
    },
    {
      id: 8,
      title: "Web Development",
      tier: "Supernova 💫",
      price: "$8,500",
      tagline: "Enterprise-grade site with all the bells and whistles.",
      features: [
        "7+ pages",
        "E-commerce or booking system",
        "Custom CMS integration",
        "Advanced interactive features",
        "Accessibility audit (WCAG AA)",
        "3 months post-launch support",
      ],
      ideal: "E-commerce brands, agencies, premium services",
      color: "from-indigo-600/20 to-cyan-700/20",
      borderColor: "border-indigo-500/30",
      accentColor: "text-indigo-400",
      glowColor: "shadow-indigo-500/20",
    },
  ];

  const copywriting = {
    title: "Creative Copywriting",
    tier: "Hourly or Project-Based",
    hourly: "$125/hr",
    projects: [
      { name: "Website copy (5 pages)", price: "$1,500" },
      { name: "Product descriptions (10 items)", price: "$800" },
      { name: "Brand story (About page)", price: "$600" },
      { name: "Newsletter copy (4 issues)", price: "$1,200" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-nightNavy via-deepOcean to-midnight relative overflow-hidden">
      {/* ✨ EPIC MOONLIT COSMIC CREATOR UNIVERSE ✨ */}

      {/* 120+ Twinkling Stars across the entire cosmos */}
      <CosmicStarfield />

      {/* Massive Nebula Clouds in all corners */}
      <NebulaCloud position="top-left" colors="indigo-purple" size="large" />
      <NebulaCloud position="top-right" colors="cyan-teal" size="large" />
      <NebulaCloud position="bottom-left" colors="lavender-pink" size="medium" />
      <NebulaCloud position="bottom-right" colors="amber-gold" size="large" />
      <NebulaCloud position="center" colors="indigo-purple" size="medium" />

      {/* Aurora Waves at top and bottom */}
      <AuroraWave position="top" />
      <AuroraWave position="bottom" />

      {/* Shooting Stars - Diagonal streaks across hero section */}
      <ShootingComet delay={0} startOffset={5} />
      <ShootingComet delay={3} startOffset={25} />
      <ShootingComet delay={6} startOffset={45} />
      <ShootingComet delay={9} startOffset={65} />
      <ShootingComet delay={12} startOffset={15} />
      <ShootingComet delay={15} startOffset={35} />
      <ShootingComet delay={18} startOffset={55} />
      <ShootingComet delay={21} startOffset={75} />

      {/* Stardust Particles floating throughout */}
      {Array.from({ length: 40 }).map((_, i) => (
        <StardustParticle
          key={`stardust-${i}`}
          delay={i * 0.3}
          className={`left-[${(i * 7) % 100}%] top-[${(i * 11) % 100}%]`}
          style={{ left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` } as React.CSSProperties}
        />
      ))}

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden border-b border-indigo-500/20 bg-gradient-to-br from-midnight/50 via-deepOcean/50 to-nightNavy/50 py-20 backdrop-blur-sm">
        {/* Additional cosmic effects for hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <RadialGlow className="top-10 right-1/4 w-96 h-96" color="indigo" />
          <RadialGlow className="bottom-20 left-1/3 w-80 h-80" color="lavender" />
          <RadialGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" color="cyan" />

          {/* Cancer Constellation - Left side */}
          <CancerConstellation className="absolute top-1/4 left-8 w-32 h-32 opacity-70" />

          {/* Scorpio Constellation - Right side */}
          <ScorpioConstellation className="absolute top-1/3 right-8 w-32 h-32 opacity-70" />

          <ConstellationDivider className="absolute top-1/2 left-0 w-full h-16 text-indigo-300 opacity-30" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Starlit Atelier Moon Phases - 5 phases with pulsing animation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap mb-6 sm:mb-8">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/30 animate-pulse flex-shrink-0"
              title="New Moon - Creative Dawn"
              style={{ animationDuration: '3s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-cyan-400/40 to-purple-300/40" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-midnight via-purple-300/50 to-purple-300/70 border-2 border-purple-300/60 shadow-lg shadow-purple-300/40 animate-pulse flex-shrink-0"
              title="Crescent - Vision Forms"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-purple-300/50 to-amber-300/60" />

            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 via-amber-300 to-purple-400 border-2 border-amber-300/80 shadow-xl shadow-amber-300/60 animate-pulse flex-shrink-0"
              title="Full Moon - Creation Peak"
              style={{ animationDuration: '2.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-amber-300/60 to-indigo-400/50" />

            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-indigo-400/70 via-indigo-400/50 to-midnight border-2 border-indigo-400/60 shadow-lg shadow-indigo-400/40 animate-pulse flex-shrink-0"
              title="Waning - Refinement"
              style={{ animationDuration: '3.5s' }}
            />
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-indigo-400/40 to-teal-400/30" />

            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-teal-400/50 shadow-lg shadow-teal-400/30 animate-pulse flex-shrink-0"
              title="New Moon - Next Chapter"
              style={{ animationDuration: '3s' }}
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            <Palette className="h-4 w-4" />
            <span>Branding • Web • Design • Copy</span>
          </div>

          <h1 className="font-elegant mb-6 text-4xl font-bold text-pearlWhite md:text-6xl lg:text-7xl" style={{ lineHeight: '1.3' }}>
            Creative Design &
            <span className="block bg-gradient-to-r from-cyan-400 via-amber-300 to-indigo-400 bg-clip-text text-transparent mt-2">
              Development
            </span>
          </h1>

          <p className="font-serif mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-moonlightSilver md:text-xl italic">
            Visual and digital identity for founders, authors, and small businesses.
            Branding, packaging, web, and creative direction under one roof—your story stays cohesive from concept to launch.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm mb-8">
            <span className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-300 border border-purple-400/40">Branding</span>
            <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/40">Web Development</span>
            <span className="px-3 py-1 rounded-full bg-amber-300/20 text-amber-200 border border-amber-300/40">Packaging</span>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-teal-400 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-indigo-400/50"
            >
              Start Your Project
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#packages"
              className="rounded-full border border-indigo-400/30 px-8 py-4 font-semibold text-indigo-300 transition-all hover:border-indigo-400/50 hover:bg-indigo-400/10"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="who-this-is-for" className="relative border-b border-indigo-500/20 bg-midnight/50 py-16">
        <ConstellationDivider className="absolute top-0 left-0 w-full h-12 text-purple-300 -translate-y-6 opacity-30" />

        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Star className="w-12 h-12 text-amber-300 mx-auto mb-2" />
            </div>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-4xl">
              Who This Is For
            </h2>
            <p className="text-lg text-moonlightSilver italic">
              Built for creators, founders, and dreamers who value cohesive storytelling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Authors & Creatives</h3>
                  <p className="text-moonlightSilver text-sm">
                    Authors launching books, artists building portfolios, and creators establishing their visual identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Founders & Startups</h3>
                  <p className="text-moonlightSilver text-sm">
                    Early-stage companies that need branding, websites, and design systems that grow with them.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Product Brands</h3>
                  <p className="text-moonlightSilver text-sm">
                    Small batch creators, Etsy sellers, and boutique brands launching physical products.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Service Businesses</h3>
                  <p className="text-moonlightSilver text-sm">
                    Consultants, coaches, and service providers who need professional websites and branding.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Creative Studios</h3>
                  <p className="text-moonlightSilver text-sm">
                    Design studios, photography businesses, and creative agencies needing portfolio sites and brand updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-purple-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Rebrands & Refreshes</h3>
                  <p className="text-moonlightSilver text-sm">
                    Established businesses ready to evolve their visual identity and digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-moonlightSilver">
              <span className="text-amber-300 font-semibold">If your work deserves to look as good as it feels</span>,
              let's build something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="border-b border-indigo-500/20 bg-deepOcean/30 py-16 relative">
        <RadialGlow className="top-10 left-1/4 w-96 h-96" color="teal" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/30 relative">
                  <Palette className="w-8 h-8 text-cyan-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">1. Discover</h3>
              <p className="text-sm uppercase tracking-wider text-cyan-300/70 mb-3">Vision & Direction</p>
              <p className="text-moonlightSilver">
                Bring your Pinterest boards, sketches, and ideas. We'll explore your brand story,
                audience, and visual direction together.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/30 relative">
                  <Star className="w-8 h-8 text-purple-300" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-400">2. Design & Build</h3>
              <p className="text-sm uppercase tracking-wider text-purple-300/70 mb-3">Create & Refine</p>
              <p className="text-moonlightSilver">
                I'll design mockups, iterate based on your feedback, and build the final deliverables
                with storytelling at the core.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 border border-amber-300/30 relative">
                  <Sparkles className="w-8 h-8 text-amber-200" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-amber-300">3. Deliver & Support</h3>
              <p className="text-sm uppercase tracking-wider text-amber-200/70 mb-3">Launch & Shine</p>
              <p className="text-moonlightSilver">
                Receive all files, assets, and guidelines. I'll provide support during launch
                and beyond to ensure everything shines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: TIERED PACKAGES - ORGANIZED BY SERVICE TYPE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="packages" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.35em] text-indigo-300 uppercase mb-3">Tiered Pricing</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-pearlWhite md:text-5xl">
              Choose Your Creative Constellation
            </h2>
            <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
              Select from three cosmic tiers across each service: ⭐ Stardust (Essential), 🌌 Nebula (Professional), or 💫 Supernova (Premium).
            </p>
          </div>

          {/* BRANDING & IDENTITY PACKAGES */}
          <div className="mb-20">
            <h3 className="text-2xl font-elegant text-center text-purple-300 mb-12">
              🎨 Starlit Identity — Branding & Visual Systems
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
              {packages.filter(pkg => pkg.title === "Branding & Identity").map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-visible rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                } ${pkg.popular ? 'ring-2 ring-indigo-400/50' : ''} w-full`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-50">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-teal-400 text-xs font-bold text-midnight shadow-lg whitespace-nowrap">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400/30 to-teal-400/20 flex items-center justify-center border ${pkg.borderColor}`}>
                      <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${pkg.accentColor}`}>
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-moonlightSilver/70">{pkg.tier}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-300">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-moonlightSilver">
                          <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.accentColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-moonlightSilver/70">
                      Perfect For:
                    </p>
                    <p className="text-sm text-pearlWhite">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full rounded-full border ${pkg.borderColor} py-3 text-center font-semibold ${pkg.accentColor} transition-all hover:bg-white/10`}
                  >
                    Start Project →
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* WEB DEVELOPMENT PACKAGES */}
          <div className="mb-20">
            <h3 className="text-2xl font-elegant text-center text-cyan-300 mb-12">
              🌐 Cosmic Canvas — Web Development
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
              {packages.filter(pkg => pkg.title === "Web Development").map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-visible rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                } ${pkg.popular ? 'ring-2 ring-indigo-400/50' : ''} w-full`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-50">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-teal-400 text-xs font-bold text-midnight shadow-lg whitespace-nowrap">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400/30 to-teal-400/20 flex items-center justify-center border ${pkg.borderColor}`}>
                      <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${pkg.accentColor}`}>
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-moonlightSilver/70">{pkg.tier}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-300">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-moonlightSilver">
                          <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.accentColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-moonlightSilver/70">
                      Perfect For:
                    </p>
                    <p className="text-sm text-pearlWhite">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full rounded-full border ${pkg.borderColor} py-3 text-center font-semibold ${pkg.accentColor} transition-all hover:bg-white/10`}
                  >
                    Start Project →
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* PACKAGING & PRODUCT DESIGN PACKAGES */}
          <div className="mb-20">
            <h3 className="text-2xl font-elegant text-center text-teal-300 mb-12">
              📦 Stellar Packaging — Product Design
            </h3>
            <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
              {packages.filter(pkg => pkg.title === "Packaging & Product Design").map((pkg, index) => (
              <div
                key={pkg.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-visible rounded-2xl border ${pkg.borderColor} bg-gradient-to-br ${pkg.color} backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index ? `scale-105 shadow-2xl ${pkg.glowColor}` : 'shadow-lg'
                } ${pkg.popular ? 'ring-2 ring-indigo-400/50' : ''} w-full`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-50">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-teal-400 text-xs font-bold text-midnight shadow-lg whitespace-nowrap">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-white/10 bg-midnight/40 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400/30 to-teal-400/20 flex items-center justify-center border ${pkg.borderColor}`}>
                      <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.tier.slice(0,3).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${pkg.accentColor}`}>
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-moonlightSilver/70">{pkg.tier}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm italic text-moonlightSilver/80">
                    {pkg.tagline}
                  </p>
                  <div className="text-3xl font-bold text-pearlWhite">
                    {pkg.price}+
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-300">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-moonlightSilver">
                          <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.accentColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-moonlightSilver/70">
                      Perfect For:
                    </p>
                    <p className="text-sm text-pearlWhite">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full rounded-full border ${pkg.borderColor} py-3 text-center font-semibold ${pkg.accentColor} transition-all hover:bg-white/10`}
                  >
                    Start Project →
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Copywriting Add-On */}
          <div className="mx-auto max-w-4xl">
            <h3 className="text-2xl font-elegant text-center text-amber-300 mb-12">
              ✍️ Moonlit Quill — Creative Copywriting
            </h3>
            <div className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/10 via-purple-400/5 to-transparent p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <p className="text-sm text-moonlightSilver mb-2">{copywriting.tier}</p>
                <p className="text-3xl font-bold text-amber-300">{copywriting.hourly}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {copywriting.projects.map((project, idx) => (
                  <div key={idx} className="rounded-lg border border-amber-200/20 bg-amber-200/5 p-4">
                    <p className="text-sm font-semibold text-amber-200 mb-1">{project.name}</p>
                    <p className="text-lg font-bold text-amber-300">{project.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="border-y border-indigo-500/20 bg-midnight/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-pearlWhite md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-indigo-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can I mix and match services (branding + web, etc.)?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Absolutely! Many clients bundle branding with web development or packaging design for a cohesive launch.
                I'll create a custom package that fits your needs and budget.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-purple-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                How long does a typical branding or web project take?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Branding (Essential): 2-3 weeks. Branding (Professional): 4-6 weeks. Web (Essential): 3-4 weeks.
                Web (Professional): 6-8 weeks. Packaging: 1-2 weeks. Rush timelines available with planning.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-teal-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What do I need to provide to get started?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Bring any inspiration you have—Pinterest boards, competitor sites you admire, color preferences, existing logos or assets.
                We'll start with a discovery call to map out your vision, audience, and goals.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-amber-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Do I own all the files and designs?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Yes! You receive full ownership and all source files (AI, Figma, PSD, etc.) upon final payment.
                Your brand assets are yours to use however you need.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-indigo-400/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                What if I need revisions or changes after launch?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                All packages include revision rounds during the project. After launch, I offer ongoing support plans
                or can handle updates as one-off requests. You're never locked in or stuck.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-purple-300/30 transition-all">
              <summary className="cursor-pointer text-lg font-semibold text-pearlWhite">
                Can you help with copywriting or content strategy?
              </summary>
              <p className="mt-4 text-moonlightSilver">
                Yes! I offer creative copywriting services at $125/hr or project-based rates. I can write website copy,
                product descriptions, brand stories, and more—all aligned with your brand voice.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-400/10 via-amber-300/10 to-teal-400/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <RadialGlow className="-top-16 -right-16 w-64 h-64" color="indigo" />
            <RadialGlow className="-bottom-16 -left-16 w-64 h-64" color="lavender" />
            <ConstellationDivider className="absolute top-1/2 left-0 w-full h-16 text-purple-300 opacity-20" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 via-amber-300 to-teal-400 mx-auto shadow-lg shadow-indigo-400/40">
                <Palette className="w-10 h-10 text-midnight" />
              </div>

              <h2 className="font-elegant text-3xl font-bold text-pearlWhite md:text-4xl">
                Ready to Build Your Brand or Site?
              </h2>

              <p className="text-lg text-moonlightSilver max-w-2xl mx-auto">
                Bring your notes, Pinterest boards, and sketches. I'll turn it into
                a cohesive brand system and live experience that tells your story.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact?service=creative-design-development"
                  className="rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-teal-400 px-8 py-4 font-semibold text-midnight transition-all hover:shadow-lg hover:shadow-indigo-400/50"
                >
                  Request a Project Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-indigo-400/30 px-8 py-4 font-semibold text-indigo-300 transition-all hover:border-indigo-400/50 hover:bg-indigo-400/10"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
