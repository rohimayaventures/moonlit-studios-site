'use client';

import { useState } from 'react';
import { Check, Sparkles, BookOpen, Feather, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// 🏰 HOGWARTS CASTLE LIBRARY - EPIC REACT COMPONENTS

// ═══════════════════════════════════════════════════════════════
//  ARCHITECTURAL COMPONENTS - THE IMMERSIVE LIBRARY STRUCTURE
// ═══════════════════════════════════════════════════════════════

// Ornate Ceiling Vault - Painted golden medallions and patterns
const OrnateCeiling = () => (
  <div className="fixed top-0 left-0 right-0 h-80 pointer-events-none z-0">
    {/* Fan vault ceiling - ornate painted patterns */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#F0C979]/20 via-[#E9C97F]/10 to-transparent" />

    {/* Ornate painted medallions */}
    <div className="absolute top-8 left-1/4 w-32 h-32 rounded-full border-4 border-[#F0C979]/40 opacity-60 animate-goldShimmer"
         style={{ boxShadow: 'inset 0 0 30px rgba(240, 201, 121, 0.3), 0 0 40px rgba(240, 201, 121, 0.2)' }} />
    <div className="absolute top-12 right-1/4 w-32 h-32 rounded-full border-4 border-[#E9C97F]/40 opacity-60 animate-glowPulse"
         style={{ boxShadow: 'inset 0 0 30px rgba(233, 201, 127, 0.3), 0 0 40px rgba(233, 201, 127, 0.2)' }} />
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-[#F5E7C8]/40 opacity-50 animate-cosmicFloat"
         style={{ boxShadow: 'inset 0 0 40px rgba(245, 231, 200, 0.4), 0 0 50px rgba(245, 231, 200, 0.3)' }} />

    {/* Decorative painted lines radiating */}
    <div className="absolute top-20 left-1/3 w-1 h-40 bg-gradient-to-b from-[#F0C979]/40 to-transparent rotate-12 animate-dustMotes" />
    <div className="absolute top-20 left-1/2 w-1 h-40 bg-gradient-to-b from-[#F0C979]/40 to-transparent animate-candleFlicker" />
    <div className="absolute top-20 right-1/3 w-1 h-40 bg-gradient-to-b from-[#F0C979]/40 to-transparent -rotate-12 animate-dustMotes" />

    {/* Warm golden glow from ceiling */}
    <div className="absolute inset-0 bg-gradient-radial from-[#F0C979]/30 via-[#E9C97F]/15 to-transparent blur-3xl animate-glowPulse" />
  </div>
);

// Book Spine Component - Individual books with realistic rendering
const BookSpine = ({
  color,
  darkColor,
  height,
  tilt,
  index,
  position = 'left',
}: {
  color: string;
  darkColor: string;
  height: number;
  tilt: number;
  index: number;
  position?: 'left' | 'right';
}) => {
  const gradientId = `bookGrad${position}${index}`;

  return (
    <svg
      className="absolute transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        [position === 'left' ? 'left' : 'right']: `${(index % 8) * 12 + 2}%`,
        bottom: `${Math.floor(index / 8) * 12 + 1}%`,
        width: '10%',
        height: `${height}%`,
        opacity: 0.85,
        transform: `rotate(${tilt}deg)`,
      }}
      viewBox="0 0 30 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: position === 'left' ? darkColor : '#000', stopOpacity: position === 'left' ? 0.9 : 0.7 }} />
          <stop offset="15%" style={{ stopColor: position === 'left' ? color : darkColor, stopOpacity: position === 'left' ? 1 : 0.95 }} />
          <stop offset="50%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="85%" style={{ stopColor: position === 'left' ? darkColor : color, stopOpacity: position === 'left' ? 0.95 : 1 }} />
          <stop offset="100%" style={{ stopColor: position === 'left' ? '#000' : darkColor, stopOpacity: position === 'left' ? 0.7 : 0.9 }} />
        </linearGradient>
      </defs>

      {/* Main spine */}
      <path
        d={position === 'left'
          ? `M 2 ${index % 3} L 28 ${(index + 1) % 3} L 28 100 L 2 ${100 - (index % 2)}`
          : `M 2 ${(index + 1) % 3} L 28 ${index % 3} L 28 ${100 - (index % 2)} L 2 100`
        }
        fill={`url(#${gradientId})`}
        stroke={darkColor}
        strokeWidth="0.5"
      />

      {/* Gold embossed title lines */}
      <rect x="6" y="20" width="18" height="1" fill="#F0C979" opacity="0.6" />
      <rect x="8" y="24" width="14" height="0.5" fill="#F0C979" opacity="0.5" />
      <rect x="10" y="27" width="10" height="0.5" fill="#F0C979" opacity="0.4" />

      {/* Wear marks */}
      <line x1="2" y1="10" x2="5" y2="10" stroke="#000" strokeWidth="0.3" opacity="0.4" />
      <line x1="25" y1="70" x2="28" y2="72" stroke="#000" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
};

// Towering Bookshelf Wall - Multi-story shelves with perspective
const ToweringBookshelfWall = ({ side }: { side: 'left' | 'right' }) => {
  const bookColors: [string, string][] = [
    ['#8B6F47', '#6B5837'], // Brown leather
    ['#F0C979', '#E9C97F'], // Gold
    ['#5B335F', '#4A2550'], // Plum
    ['#58B6B1', '#4896A1'], // Teal
    ['#3A2112', '#2A1808'], // Dark brown
    ['#C4A35A', '#B4934A'], // Bronze
  ];

  const isLeft = side === 'left';

  return (
    <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-0 bottom-0 w-1/3 opacity-70`}>
      {/* GROUND FLOOR - Dark brown shelves with books */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 transition-transform duration-500 hover:scale-[1.02]"
        style={{
          background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(58, 33, 18, 0.9), rgba(58, 33, 18, 0.6), rgba(58, 33, 18, 0.3))`,
          transform: `rotateY(${isLeft ? '8deg' : '-8deg'})`,
          transformOrigin: `${isLeft ? 'right' : 'left'} center`,
        }}
      >
        {/* Shelf lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`shelf-${i}`}
            className="absolute left-0 right-0 animate-glowPulse"
            style={{
              bottom: `${i * 12}%`,
              height: '2px',
              background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, transparent, rgba(240, 201, 121, 0.5), rgba(240, 201, 121, 0.2))`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Book spines */}
        {Array.from({ length: 40 }).map((_, i) => {
          const [color, darkColor] = bookColors[(i + (isLeft ? 0 : 2)) % 6];
          const height = 8 + (i % 5) * 2;
          const tilt = ((i % 7) - 3) * 2;

          return (
            <BookSpine
              key={`book-${i}`}
              color={color}
              darkColor={darkColor}
              height={height}
              tilt={tilt}
              index={i}
              position={side}
            />
          );
        })}
      </div>

      {/* SECOND FLOOR - Balcony with ornate railing */}
      <div
        className="absolute bottom-1/2 left-0 right-0 h-8 transition-all duration-300 hover:border-[#F0C979]"
        style={{
          background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(139, 111, 71, 0.9), rgba(139, 111, 71, 0.5))`,
          transform: `rotateY(${isLeft ? '8deg' : '-8deg'})`,
          transformOrigin: `${isLeft ? 'right' : 'left'} center`,
          borderTop: '2px solid rgba(240, 201, 121, 0.6)',
        }}
      >
        {/* Balcony railing */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`rail-${i}`}
            className="absolute animate-glowPulse"
            style={{
              [isLeft ? 'left' : 'right']: `${i * 8}%`,
              top: 0,
              width: '1px',
              height: '100%',
              background: 'rgba(240, 201, 121, 0.5)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* UPPER FLOOR - Shelves receding into shadowy ceiling */}
      <div
        className="absolute top-0 bottom-1/2 left-0 right-0 transition-opacity duration-500 hover:opacity-80"
        style={{
          background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(26, 16, 20, 0.9), rgba(26, 16, 20, 0.5))`,
          transform: `rotateY(${isLeft ? '8deg' : '-8deg'})`,
          transformOrigin: `${isLeft ? 'right' : 'left'} center`,
        }}
      >
        {/* Shelf lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`upper-shelf-${i}`}
            className="absolute left-0 right-0 animate-dustMotes"
            style={{
              bottom: `${i * 16}%`,
              height: '1px',
              background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, transparent, rgba(240, 201, 121, 0.3))`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Gothic Arch Component - Massive pointed arches framing the space
const GothicArch = ({ position }: { position: 'left' | 'right' }) => (
  <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-0 bottom-0 w-1/3 group`}>
    {/* Left pillar */}
    <div className="absolute left-0 bottom-0 w-1 h-full bg-gradient-to-t from-[#8B6F47] via-[#F0C979]/60 to-transparent animate-glowPulse" />

    {/* Right pillar */}
    <div className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-t from-[#8B6F47] via-[#F0C979]/60 to-transparent animate-glowPulse" />

    {/* Pointed arch top */}
    <div
      className="absolute top-0 left-0 right-0 h-32 transition-all duration-500 group-hover:scale-105"
      style={{
        background: 'radial-gradient(ellipse at bottom, rgba(240, 201, 121, 0.6), transparent)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      }}
    />
  </div>
);

// Atmospheric Lighting - Warm candlelight below, mysterious shadows above
const LibraryLighting = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Warm golden glow from bottom (reading lamps & candles) */}
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#F0C979]/15 via-[#E9C97F]/8 to-transparent animate-glowPulse" />

    {/* Dark shadows at top (mysterious vaulted ceiling) */}
    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0D0F1E]/80 to-transparent" />

    {/* Vignette effect */}
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0D0F1E]/60" />
  </div>
);

// ═══════════════════════════════════════════════════════════════
//  AMBIENT DECORATIVE COMPONENTS
// ═══════════════════════════════════════════════════════════════

// Floating Candle – slimmer, more realistic
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
    <svg
      width="22"
      height="80"
      viewBox="0 0 22 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow halo */}
      <ellipse
        cx="11"
        cy="10"
        rx="14"
        ry="10"
        fill="#F0C979"
        opacity="0.12"
      />
      {/* Flame */}
      <path
        d="M11 3 C9 7 9 10 11 12 C13 10 13 7 11 3Z"
        fill="url(#flameGradient)"
        opacity="0.9"
      />
      {/* Candle body */}
      <rect
        x="6"
        y="12"
        width="10"
        height="50"
        rx="2"
        fill="url(#waxGradient)"
      />
      {/* Wick */}
      <rect x="10.5" y="9" width="1" height="4" fill="#3B2A1A" opacity="0.8" />
      {/* Drips */}
      <path
        d="M7 20 C8 22 9 22 10 20 C10.5 22.5 11.5 22.5 12 20 C13 22 14 22 15 20"
        fill="#F5E7C8"
        opacity="0.9"
      />
      <defs>
        <linearGradient
          id="flameGradient"
          x1="11"
          y1="3"
          x2="11"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFEBC2" />
          <stop offset="0.5" stopColor="#F0C979" />
          <stop offset="1" stopColor="#F29B4C" />
        </linearGradient>
        <linearGradient
          id="waxGradient"
          x1="6"
          y1="12"
          x2="16"
          y2="62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#F5E7C8" />
          <stop offset="1" stopColor="#E1C489" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Ambient Book – closed, slightly tilted
const AmbientBook = ({
  className = "",
  delay = 0,
  tilt = -8,
}: {
  className?: string;
  delay?: number;
  tilt?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-cosmicFloat`}
    style={{
      animationDelay: `${delay}s`,
      transformOrigin: "center",
      rotate: `${tilt}deg`,
    }}
  >
    <svg
      width="72"
      height="52"
      viewBox="0 0 72 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="36"
        cy="46"
        rx="26"
        ry="6"
        fill="#000000"
        opacity="0.25"
      />
      {/* Pages block */}
      <path
        d="M10 10 L40 8 L62 12 L62 40 L32 42 L10 38 Z"
        fill="#F8F1E2"
      />
      {/* Cover */}
      <path
        d="M10 10 L40 8 L40 36 L10 38 Z"
        fill="#5B335F"
        opacity="0.95"
      />
      {/* Spine highlight */}
      <path
        d="M12 11 L14 11 L14 37 L12 37 Z"
        fill="#F0C979"
        opacity="0.65"
      />
      {/* Top page lines */}
      <path
        d="M40 12 L60 14"
        stroke="#D5C7B5"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M40 16 L60 18"
        stroke="#D5C7B5"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  </div>
);

// Ambient Open Book – looks like it's lying open in the air
const AmbientOpenBook = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-glowPulse`}
    style={{ animationDelay: `${delay}s`, transformOrigin: "center" }}
  >
    <svg
      width="90"
      height="60"
      viewBox="0 0 90 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="45"
        cy="50"
        rx="30"
        ry="7"
        fill="#000000"
        opacity="0.3"
      />
      {/* Left pages */}
      <path
        d="M10 15 C25 5 35 8 45 12 L45 42 C35 38 25 37 10 41 Z"
        fill="#F8F1E2"
      />
      {/* Right pages */}
      <path
        d="M45 12 C55 8 65 5 80 15 L80 41 C65 37 55 38 45 42 Z"
        fill="#F8F1E2"
      />
      {/* Center fold */}
      <path
        d="M45 12 L45 42"
        stroke="#D0C0A5"
        strokeWidth="1.2"
        opacity="0.9"
      />
      {/* Glyphs / text suggestion */}
      <path
        d="M16 22 L36 24"
        stroke="#C0AE94"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M16 28 L34 30"
        stroke="#C0AE94"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M54 24 L74 22"
        stroke="#C0AE94"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M56 30 L74 28"
        stroke="#C0AE94"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  </div>
);

// Dust mote – keep but use fewer
const DustMote = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none animate-dustMotes`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-1 h-1 rounded-full bg-[#F5E7C8]/40" />
  </div>
);

// Owl with Letter – uses owl-float / owl-wing CSS
const OwlPost = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      className="owl-float"
      width="220"
      height="180"
      viewBox="0 0 220 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="110" cy="105" rx="28" ry="34" fill="#F8F5EF" />
      {/* Head */}
      <circle cx="110" cy="70" r="22" fill="#FDFBF6" />
      {/* Face mask */}
      <path
        d="M92 72 C96 60 104 56 110 56 C116 56 124 60 128 72 C122 78 116 82 110 82 C104 82 98 78 92 72Z"
        fill="#F0E5D4"
      />
      {/* Eyes */}
      <circle cx="102" cy="69" r="4" fill="#1C1B1A" />
      <circle cx="118" cy="69" r="4" fill="#1C1B1A" />
      <circle cx="102" cy="69" r="1.5" fill="#F5F3EB" />
      <circle cx="118" cy="69" r="1.5" fill="#F5F3EB" />
      {/* Beak */}
      <path
        d="M110 72 L114 79 L106 79 Z"
        fill="#D8A35A"
      />
      {/* Left wing - Realistic feathers */}
      <g className="owl-wing owl-wing-left">
        {/* Wing base */}
        <path
          d="M88 85 C75 88 65 95 58 105 C52 115 48 125 46 135"
          stroke="#E8DCC8"
          strokeWidth="12"
          fill="none"
          opacity="0.6"
        />

        {/* Primary feathers (longest) */}
        <path d="M46 135 Q40 145 38 155 Q40 150 46 140Z" fill="#F8F5EF" opacity="0.9" />
        <path d="M48 132 Q44 142 43 152 Q45 147 50 137Z" fill="#F5F0E8" opacity="0.85" />
        <path d="M52 128 Q48 138 47 148 Q49 143 54 133Z" fill="#F2EBE0" opacity="0.8" />

        {/* Secondary feathers */}
        <path d="M58 120 Q54 128 53 136 Q56 132 60 124Z" fill="#F8F5EF" opacity="0.85" />
        <path d="M64 112 Q60 120 59 128 Q62 124 66 116Z" fill="#F5F0E8" opacity="0.8" />
        <path d="M70 104 Q66 112 65 120 Q68 116 72 108Z" fill="#F2EBE0" opacity="0.75" />

        {/* Coverts (shoulder feathers) */}
        <ellipse cx="78" cy="92" rx="8" ry="14" fill="#FDFBF6" opacity="0.7" transform="rotate(-25 78 92)" />
        <ellipse cx="82" cy="88" rx="6" ry="10" fill="#F8F5EF" opacity="0.6" transform="rotate(-20 82 88)" />
      </g>

      {/* Right wing - Realistic feathers */}
      <g className="owl-wing owl-wing-right">
        {/* Wing base */}
        <path
          d="M132 85 C145 88 155 95 162 105 C168 115 172 125 174 135"
          stroke="#E8DCC8"
          strokeWidth="12"
          fill="none"
          opacity="0.6"
        />

        {/* Primary feathers (longest) */}
        <path d="M174 135 Q180 145 182 155 Q180 150 174 140Z" fill="#F8F5EF" opacity="0.9" />
        <path d="M172 132 Q176 142 177 152 Q175 147 170 137Z" fill="#F5F0E8" opacity="0.85" />
        <path d="M168 128 Q172 138 173 148 Q171 143 166 133Z" fill="#F2EBE0" opacity="0.8" />

        {/* Secondary feathers */}
        <path d="M162 120 Q166 128 167 136 Q164 132 160 124Z" fill="#F8F5EF" opacity="0.85" />
        <path d="M156 112 Q160 120 161 128 Q158 124 154 116Z" fill="#F5F0E8" opacity="0.8" />
        <path d="M150 104 Q154 112 155 120 Q152 116 148 108Z" fill="#F2EBE0" opacity="0.75" />

        {/* Coverts (shoulder feathers) */}
        <ellipse cx="142" cy="92" rx="8" ry="14" fill="#FDFBF6" opacity="0.7" transform="rotate(25 142 92)" />
        <ellipse cx="138" cy="88" rx="6" ry="10" fill="#F8F5EF" opacity="0.6" transform="rotate(20 138 88)" />
      </g>
      {/* Letter */}
      <g className="owl-letter">
        <rect
          x="92"
          y="118"
          width="36"
          height="22"
          rx="2"
          fill="#F8F1E2"
          stroke="#D8A35A"
          strokeWidth="1.5"
        />
        <path
          d="M92 118 L110 130 L128 118"
          stroke="#D8A35A"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="110" cy="130" r="2.5" fill="#D8A35A" />
      </g>
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
const EnchantedDivider = () => (
  <div className="relative my-12 h-px overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
    <WaxSeal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);

// Writing Package Card Component
function WritingPackageCard({
  title,
  tier,
  price,
  features,
  ideal,
  popular = false,
  color = "from-[#5B335F]/20 to-[#58B6B1]/20",
  borderColor = "border-[#F0C979]/30",
  accentColor = "text-[#F0C979]",
  glowColor = "shadow-[#F0C979]/20"
}: {
  title: string;
  tier: string;
  price: string;
  features: string[];
  ideal: string;
  popular?: boolean;
  color?: string;
  borderColor?: string;
  accentColor?: string;
  glowColor?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border ${borderColor} bg-gradient-to-br ${color} backdrop-blur-sm transition-all duration-300 ${
        isHovered ? `scale-105 shadow-2xl ${glowColor}` : 'shadow-lg'
      } ${popular ? 'ring-2 ring-[#F0C979]/50' : ''}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] text-xs font-bold text-[#121528] shadow-lg">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      <div className="border-b border-white/10 bg-[#121528]/40 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[#F0C979]/30 to-[#58B6B1]/20 flex items-center justify-center border ${borderColor}`}>
            <span className={`text-xs font-bold ${accentColor}`}>{tier.slice(0,3).toUpperCase()}</span>
          </div>
          <div>
            <h3 className={`text-lg font-bold ${accentColor}`}>{title}</h3>
            <p className="text-xs text-[#F5E7C8]/70">{tier}</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-[#F5E7C8]">{price}+</div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#F0C979]">What's Included:</p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#F5E7C8]">
                <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentColor}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#F5E7C8]/70">Perfect For:</p>
          <p className="text-sm text-[#F5E7C8]">{ideal}</p>
        </div>

        <Link
          href="/contact"
          className={`block w-full rounded-full border ${borderColor} py-3 text-center font-semibold ${accentColor} transition-all hover:bg-white/10`}
        >
          Start Your Story →
        </Link>
      </div>
    </div>
  );
}

export default function GhostwritingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0D0F1E] via-[#1A1014] to-[#0D0F1E] text-[#F5E7C8] overflow-hidden">
      {/* 🏰 EPIC HOGWARTS LIBRARY - USING REACT COMPONENTS */}

      {/* Ornate golden ceiling vault with animated medallions */}
      <OrnateCeiling />

      {/* 3D Perspective container for architectural elements */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ perspective: '1000px' }}>
        {/* Towering multi-story bookshelves on both walls */}
        <ToweringBookshelfWall side="left" />
        <ToweringBookshelfWall side="right" />

        {/* Massive Gothic arches framing the center space */}
        <div className="absolute top-0 left-1/4 right-1/4 h-2/3 opacity-60">
          <GothicArch position="left" />
          <GothicArch position="right" />
        </div>
      </div>

      {/* Atmospheric lighting with warm candlelight and mysterious shadows */}
      <LibraryLighting />

      {/* 🦉 HOGWARTS LIBRARY AMBIENT ELEMENTS – CALMER, MORE CINEMATIC */}

      {/* A few floating candles along the aisle */}
      <FloatingCandle className="top-28 left-[8%] hidden lg:block" delay={0} />
      <FloatingCandle className="top-32 right-[10%] hidden lg:block" delay={0.7} />
      <FloatingCandle className="top-48 left-[14%] hidden lg:block" delay={1.4} />
      <FloatingCandle className="top-52 right-[16%] hidden lg:block" delay={2.1} />
      <FloatingCandle className="top-2/3 left-[10%] hidden lg:block" delay={2.8} />
      <FloatingCandle className="top-2/3 right-[12%] hidden lg:block" delay={3.5} />

      {/* A few floating books in the background */}
      <AmbientBook
        className="top-40 left-[20%] hidden xl:block"
        delay={0.8}
        tilt={-10}
      />
      <AmbientBook
        className="top-44 right-[22%] hidden xl:block"
        delay={1.6}
        tilt={7}
      />
      <AmbientOpenBook
        className="top-56 left-[26%] hidden xl:block"
        delay={2.3}
      />

      {/* Soft dust motes near the hero only */}
      <DustMote className="top-[30%] left-[32%]" delay={0} />
      <DustMote className="top-[34%] right-[30%]" delay={0.8} />
      <DustMote className="top-[40%] left-[40%]" delay={1.6} />
      <DustMote className="top-[46%] right-[36%]" delay={2.4} />

      {/* One owl with a letter gliding across the top of the hero */}
      <OwlPost className="top-10 left-[5%] hidden lg:block" delay={0} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-5xl z-10">
          {/* 🌙 Hogwarts Moon Phases - BROWN/GOLD EMPHASIS */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] border-2 border-[#F0C979] hover:border-[#F5E7C8] transition-all cursor-pointer shadow-lg shadow-[#F0C979]/60 flex-shrink-0 animate-goldShimmer"
              title="Full Moon - Ghostwriting Studio"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F0C979]/60 to-[#F5E7C8]/50 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#F5E7C8] to-[#8B6F47] border border-[#F5E7C8] hover:border-[#F0C979] transition-all cursor-pointer shadow-md shadow-[#F5E7C8]/40 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F5E7C8]/50 to-[#5B335F]/40 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#5B335F] to-[#121528] border border-[#5B335F]/60 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#5B335F]/30 flex-shrink-0"
              title="Half Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#5B335F]/40 to-[#58B6B1]/30 flex-shrink-0" />
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#58B6B1] border border-[#58B6B1]/40 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#58B6B1]/20 flex-shrink-0"
              title="Crescent Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#58B6B1]/30 to-[#121528]/20 flex-shrink-0" />
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#121528] border border-[#F0C979]/30 hover:border-[#F0C979] transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              🦉 Service Suite · Author & Ghostwriting
            </p>
            <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] bg-clip-text text-transparent leading-tight px-4">
              Author & Ghostwriting Studio
            </h1>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-[#F5E7C8] max-w-3xl mx-auto leading-relaxed px-4 italic">
              Books, cookbooks, launch flows, and ongoing content engines. A blend of clinical clarity and
              creative storytelling—every word feels human and intentional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact?service=ghostwriting"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] px-8 py-4 text-base font-bold text-[#121528] shadow-xl shadow-[#F0C979]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E9C97F]/70 overflow-hidden"
              >
                <span className="relative z-10">Start Your Story</span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </Link>

              <Link
                href="#packages"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#F0C979] px-8 py-4 text-base font-bold text-[#F0C979] transition-all duration-300 hover:bg-[#F0C979]/10 hover:border-[#E9C97F]"
              >
                <span>View Packages</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EnchantedDivider />

      {/* ═══════════════════════════════════════════════════════════════
          WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl relative z-10">
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
              { title: "Busy Founders", desc: "Want to share your story or expertise but didn't have time to write it yourself" },
              { title: "Healthcare Leaders", desc: "Need thought leadership content that balances clinical precision with human warmth" },
              { title: "Creative Entrepreneurs", desc: "Looking for ongoing blog posts, newsletters, or content engines that sound like you" },
              { title: "Cookbook Creators", desc: "Have recipes and a vision—need someone to craft the narrative and structure" },
              { title: "Product Launchers", desc: "Want compelling launch copy, landing pages, and storytelling that sells without feeling salesy" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#F0C979]/30 bg-[#121528]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#F0C979] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F0C979]/20"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Feather className="w-full h-full text-[#F0C979] animate-quillFloat" />
                </div>
                <h3 className="text-lg font-bold text-[#F0C979] mb-2">{item.title}</h3>
                <p className="text-sm text-[#F5E7C8]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnchantedDivider />

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl relative z-10">
          <h2 className="font-elegant mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5E7C8]">
            How We'll Work Together
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center relative group">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0C979]/20 border-2 border-[#F0C979]/30 relative group-hover:border-[#F0C979] transition-all">
                  <BookOpen className="w-8 h-8 text-[#F0C979]" />
                  <div className="absolute inset-0 rounded-full bg-[#F0C979]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#F0C979]">1. Discovery</h3>
              <p className="text-sm uppercase tracking-wider text-[#F0C979]/70 mb-3">Uncover Your Story</p>
              <p className="text-[#F5E7C8]/80">
                We start with a conversation—your vision, audience, goals, and tone. I'll ask the right questions to understand your story.
              </p>
            </div>

            <div className="text-center relative group">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#58B6B1]/20 border-2 border-[#58B6B1]/30 relative group-hover:border-[#58B6B1] transition-all">
                  <Feather className="w-8 h-8 text-[#58B6B1]" />
                  <div className="absolute inset-0 rounded-full bg-[#58B6B1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#58B6B1]">2. Craft & Refine</h3>
              <p className="text-sm uppercase tracking-wider text-[#58B6B1]/70 mb-3">Write & Iterate</p>
              <p className="text-[#F5E7C8]/80">
                I'll write the first draft, share it for feedback, and refine until it sounds unmistakably you.
              </p>
            </div>

            <div className="text-center relative group">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E9C97F]/20 border-2 border-[#E9C97F]/30 relative group-hover:border-[#E9C97F] transition-all">
                  <Sparkles className="w-8 h-8 text-[#E9C97F]" />
                  <div className="absolute inset-0 rounded-full bg-[#E9C97F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#E9C97F]">3. Deliver & Launch</h3>
              <p className="text-sm uppercase tracking-wider text-[#E9C97F]/70 mb-3">Publish & Shine</p>
              <p className="text-[#F5E7C8]/80">
                Receive polished, ready-to-publish work. For books, I'll guide you through self-publishing or trad-pub prep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnchantedDivider />

      {/* ═══════════════════════════════════════════════════════════════
          PACKAGES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="packages" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-[0.35em] text-[#F0C979] uppercase mb-3">Tiered Pricing</p>
            <h2 className="font-elegant mb-4 text-3xl font-bold text-[#F5E7C8] md:text-5xl">
              Choose Your Writing Path
            </h2>
            <p className="text-lg text-[#F5E7C8]/80">
              From quick blog posts to full-length books. Each tier is designed for different project scopes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* BLOG POSTS & CONTENT */}
            <WritingPackageCard
              title="Blog Posts & Content"
              tier="Essential"
              price="$400"
              features={[
                "1 blog post (800-1200 words)",
                "SEO keyword integration",
                "1 round of revisions",
                "Ready-to-publish formatting",
              ]}
              ideal="Founders, creators, ongoing content needs"
              color="from-[#58B6B1]/20 to-[#5B335F]/10"
              borderColor="border-[#58B6B1]/30"
              accentColor="text-[#58B6B1]"
              glowColor="shadow-[#58B6B1]/20"
            />

            <WritingPackageCard
              title="Blog Posts & Content"
              tier="Professional"
              price="$1,500"
              features={[
                "4 blog posts (800-1200 words each)",
                "SEO + content strategy",
                "2 rounds of revisions per post",
                "Social media snippets included",
              ]}
              ideal="Content marketers, thought leaders, monthly needs"
              color="from-[#58B6B1]/20 to-[#F0C979]/10"
              borderColor="border-[#58B6B1]/30"
              accentColor="text-[#58B6B1]"
              glowColor="shadow-[#58B6B1]/20"
              popular={true}
            />

            {/* NEWSLETTERS */}
            <WritingPackageCard
              title="Newsletter Writing"
              tier="Monthly"
              price="$1,200"
              features={[
                "4 newsletter issues per month",
                "500-800 words each",
                "Consistent voice and tone",
                "2 rounds of revisions total",
              ]}
              ideal="Founders, authors, community builders"
              color="from-[#F0C979]/20 to-[#E9C97F]/10"
              borderColor="border-[#F0C979]/30"
              accentColor="text-[#F0C979]"
              glowColor="shadow-[#F0C979]/20"
            />

            {/* WEBSITE COPY */}
            <WritingPackageCard
              title="Website Copy"
              tier="Essential"
              price="$1,500"
              features={[
                "Homepage + 2 pages",
                "Clear, conversion-focused messaging",
                "SEO foundations",
                "2 rounds of revisions",
              ]}
              ideal="New sites, landing pages, quick launches"
              color="from-[#5B335F]/20 to-[#F0C979]/10"
              borderColor="border-[#5B335F]/30"
              accentColor="text-[#E9C97F]"
              glowColor="shadow-[#E9C97F]/20"
            />

            <WritingPackageCard
              title="Website Copy"
              tier="Professional"
              price="$3,000"
              features={[
                "Homepage + 5 pages",
                "Brand voice guide",
                "Storytelling + conversion copy",
                "3 rounds of revisions",
              ]}
              ideal="Full site launches, rebrands, premium experiences"
              color="from-[#5B335F]/20 to-[#58B6B1]/10"
              borderColor="border-[#5B335F]/30"
              accentColor="text-[#E9C97F]"
              glowColor="shadow-[#E9C97F]/20"
              popular={true}
            />

            {/* COOKBOOKS */}
            <WritingPackageCard
              title="Cookbook Ghostwriting"
              tier="Full Book"
              price="$8,000"
              features={[
                "30-50 recipes with stories",
                "Chapter structure + introductions",
                "Voice coaching and refinement",
                "Recipe testing guidance",
                "3 rounds of revisions",
              ]}
              ideal="Chefs, food bloggers, culinary entrepreneurs"
              color="from-[#E9C97F]/20 to-[#F5E7C8]/10"
              borderColor="border-[#E9C97F]/30"
              accentColor="text-[#E9C97F]"
              glowColor="shadow-[#E9C97F]/20"
            />

            {/* MEMOIRS & CREATIVE NONFICTION */}
            <WritingPackageCard
              title="Memoir / Creative Nonfiction"
              tier="Essential"
              price="$12,000"
              features={[
                "40,000-50,000 words",
                "Developmental editing included",
                "Chapter outlines + structure",
                "4 rounds of revisions",
                "Self-publishing prep guidance",
              ]}
              ideal="First-time authors, personal stories, legacy projects"
              color="from-[#5B335F]/20 to-[#F0C979]/10"
              borderColor="border-[#5B335F]/30"
              accentColor="text-[#F0C979]"
              glowColor="shadow-[#F0C979]/20"
            />

            <WritingPackageCard
              title="Memoir / Creative Nonfiction"
              tier="Premium"
              price="$20,000"
              features={[
                "60,000-80,000 words",
                "Developmental + line editing",
                "Voice coaching sessions",
                "5 rounds of revisions",
                "Trad-pub query package included",
              ]}
              ideal="Authors ready for trad-pub, complex narratives, premium support"
              color="from-[#5B335F]/20 to-[#58B6B1]/10"
              borderColor="border-[#5B335F]/30"
              accentColor="text-[#F0C979]"
              glowColor="shadow-[#F0C979]/20"
              popular={true}
            />

            {/* BUSINESS BOOKS */}
            <WritingPackageCard
              title="Business / Leadership Books"
              tier="Full Book"
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
              color="from-[#F0C979]/20 to-[#5B335F]/10"
              borderColor="border-[#F0C979]/30"
              accentColor="text-[#F0C979]"
              glowColor="shadow-[#F0C979]/20"
            />
          </div>

          {/* ADD-ONS */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="rounded-2xl border border-[#E9C97F]/30 bg-gradient-to-br from-[#E9C97F]/10 via-[#F0C979]/5 to-transparent p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="font-elegant text-2xl font-bold text-[#F5E7C8] mb-2">Add-On Services</h3>
                <p className="text-sm text-[#F5E7C8]/70">Enhance your project with these extras</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { name: "Book Launch Strategy", price: "$1,500" },
                  { name: "Author Website Copy", price: "$2,000" },
                  { name: "Press Release + Media Kit", price: "$800" },
                  { name: "Monthly Retainer (4 posts)", price: "$1,500/mo" },
                ].map((addon, idx) => (
                  <div key={idx} className="rounded-lg border border-[#E9C97F]/20 bg-[#E9C97F]/5 p-4">
                    <p className="text-sm font-semibold text-[#E9C97F] mb-1">{addon.name}</p>
                    <p className="text-lg font-bold text-[#F0C979]">{addon.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnchantedDivider />

      {/* ═══════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-4xl relative z-10">
          <h2 className="font-elegant mb-12 text-center text-3xl font-bold text-[#F5E7C8] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How does ghostwriting work?",
                a: "You share your story, ideas, and voice with me through interviews and outlines. I write the manuscript in your voice, and you review and provide feedback. The final work is 100% yours to publish under your name."
              },
              {
                q: "What if I don't know exactly what I want to write?",
                a: "That's completely normal! Part of my process is helping you clarify your message, structure your ideas, and find your unique angle. We'll start with exploratory conversations to map out the best path forward."
              },
              {
                q: "Can you match my writing style?",
                a: "Yes. I study your existing content (if you have any), ask detailed questions about your preferences, and provide sample chapters early on so you can guide the tone and voice. The goal is for the final work to sound unmistakably like you."
              },
              {
                q: "Do I own the rights to the finished work?",
                a: "Absolutely. Once you've paid in full, you own all rights to the content. My name won't appear on it unless we agree otherwise (such as \"with\" credit for memoirs)."
              },
              {
                q: "How long does a book project take?",
                a: "Memoirs and creative nonfiction: 4-6 months. Business books: 6-9 months. Cookbooks: 3-5 months. Blog content and website copy: 2-4 weeks. Timelines depend on scope, interview availability, and revision rounds."
              },
              {
                q: "Can you help me get published?",
                a: "For self-publishing, yes—I'll guide you through formatting, cover design coordination, and platform setup. For traditional publishing, I can help craft query letters and book proposals, but I don't guarantee agent representation or publishing deals."
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[#F0C979]/30 transition-all">
                <summary className="cursor-pointer text-lg font-semibold text-[#F5E7C8] flex items-center justify-between">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-[#F0C979] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-[#F5E7C8]/80">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <EnchantedDivider />

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="relative rounded-2xl border border-[#F0C979]/30 bg-gradient-to-br from-[#F0C979]/10 via-[#E9C97F]/10 to-[#58B6B1]/10 p-12 backdrop-blur-sm overflow-hidden">
            <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#F0C979]/40 via-[#E9C97F]/20 to-[#F5E7C8]/10 blur-3xl opacity-40" />
            <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#E9C97F]/30 via-[#F0C979]/20 to-[#F5E7C8]/10 blur-3xl opacity-40" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#F0C979] via-[#E9C97F] to-[#58B6B1] mx-auto shadow-lg shadow-[#F0C979]/40">
                <Feather className="w-10 h-10 text-[#121528]" />
              </div>

              <h2 className="font-elegant text-3xl font-bold text-[#F5E7C8] md:text-4xl">
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
