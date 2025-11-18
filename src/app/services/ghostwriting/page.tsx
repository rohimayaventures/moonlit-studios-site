'use client';

import { useState } from 'react';
import { Check, Sparkles, BookOpen, Feather, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// 🦉 HOGWARTS CASTLE LIBRARY - IMMERSIVE SVG COMPONENTS

// Floating Candle with realistic flicker
const FloatingCandle = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-candleFlicker`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative">
      {/* Candle glow aura - Warm Owlery Gold */}
      <div className="absolute -inset-8 rounded-full bg-gradient-radial from-[#F0C979]/40 via-[#E9C97F]/20 to-transparent blur-2xl animate-goldShimmer" />

      {/* Candle SVG */}
      <svg className="relative z-10" width="24" height="60" viewBox="0 0 24 60" xmlns="http://www.w3.org/2000/svg">
        {/* Flame - Owlery Gold */}
        <ellipse cx="12" cy="8" rx="6" ry="10" fill="#F0C979" className="animate-candleFlicker" />
        <ellipse cx="12" cy="8" rx="4" ry="7" fill="#F5E7C8" opacity="0.9" />
        <ellipse cx="12" cy="8" rx="2" ry="4" fill="#FFFBEB" opacity="0.8" />

        {/* Wick */}
        <line x1="12" y1="14" x2="12" y2="18" stroke="#5B335F" strokeWidth="1" />

        {/* Candle body - Warm Parchment */}
        <rect x="8" y="18" width="8" height="35" fill="#F5E7C8" rx="1" />
        <rect x="9" y="20" width="6" height="30" fill="#E9C97F" opacity="0.3" />

        {/* Dripping wax */}
        <path d="M10 25 Q9 28, 9.5 30" stroke="#F0C979" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="9.5" cy="30" rx="1" ry="1.5" fill="#F0C979" opacity="0.7" />

        {/* Base */}
        <ellipse cx="12" cy="54" rx="8" ry="3" fill="#C9A86A" />
        <rect x="10" y="53" width="4" height="6" fill="#B8935A" />
      </svg>
    </div>
  </div>
);

// Magic Quill - Floating and writing
const MagicQuill = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-quillFloat`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="40" height="80" viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">
      {/* Feather shaft - Ink Plum */}
      <path d="M20 10 Q18 40, 20 70" stroke="#5B335F" strokeWidth="2" fill="none" />

      {/* Feather barbs - Teal Enchantment */}
      <path d="M20 15 Q10 20, 8 25" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 20 Q12 24, 10 28" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 25 Q14 28, 12 32" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 30 Q15 32, 14 35" stroke="#58B6B1" strokeWidth="1" opacity="0.6" fill="none" />

      <path d="M20 15 Q30 20, 32 25" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 20 Q28 24, 30 28" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 25 Q26 28, 28 32" stroke="#58B6B1" strokeWidth="1" opacity="0.7" fill="none" />
      <path d="M20 30 Q25 32, 26 35" stroke="#58B6B1" strokeWidth="1" opacity="0.6" fill="none" />

      {/* Pointed nib - Midnight Stacks */}
      <path d="M19 68 L20 78 L21 68 Z" fill="#121528" />

      {/* Magical shimmer */}
      <circle cx="20" cy="40" r="2" fill="#F0C979" opacity="0.4" className="animate-goldShimmer" />
    </svg>
  </div>
);

// Floating Book
const FloatingBook = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none`}
    style={{
      animation: 'pageFloat 5s ease-in-out infinite',
      animationDelay: `${delay}s`
    }}
  >
    <div className="relative w-16 h-20">
      {/* Book cover - Ink Plum */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B335F] to-[#3A2140] rounded-r-sm shadow-lg border-l-2 border-[#F0C979]/40" />

      {/* Book spine highlights */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F0C979]/60 via-[#F0C979]/30 to-[#F0C979]/60" />

      {/* Pages */}
      <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-[#F5E7C8]/80" />
      <div className="absolute right-0.5 top-2 bottom-2 w-0.5 bg-[#F5E7C8]/60" />
      <div className="absolute right-1 top-2 bottom-2 w-0.5 bg-[#F5E7C8]/40" />

      {/* Title decoration */}
      <div className="absolute top-4 left-2 right-2 h-0.5 bg-[#F0C979]/40" />
      <div className="absolute top-6 left-2 right-2 h-0.5 bg-[#F0C979]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#F0C979]/10 rounded-sm" />
    </div>
  </div>
);

// Dust Mote - Tiny floating particles
const DustMote = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} pointer-events-none animate-dustMotes`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-1 h-1 rounded-full bg-[#F0C979] opacity-50" />
  </div>
);

// Flying Owl - Crossing the screen
const FlyingOwl = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute ${className} w-full left-0 pointer-events-none animate-owlFly z-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg width="60" height="50" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
      {/* Owl body - Midnight Stacks */}
      <ellipse cx="30" cy="25" rx="12" ry="15" fill="#2A3A52" />

      {/* Wings - spread */}
      <ellipse cx="15" cy="25" rx="10" ry="8" fill="#3A4A62" className="animate-pulse" />
      <ellipse cx="45" cy="25" rx="10" ry="8" fill="#3A4A62" className="animate-pulse" />

      {/* Eyes - Golden */}
      <circle cx="26" cy="22" r="4" fill="#F0C979" />
      <circle cx="34" cy="22" r="4" fill="#F0C979" />
      <circle cx="26" cy="22" r="2" fill="#121528" />
      <circle cx="34" cy="22" r="2" fill="#121528" />

      {/* Beak */}
      <path d="M30 26 L28 30 L32 30 Z" fill="#C9A86A" />
    </svg>
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

// Glowing Divider
const EnchantedDivider = () => (
  <div className="relative my-12 h-px overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0C979] to-transparent opacity-40" />
    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0C979] shadow-lg shadow-[#F0C979]/50 animate-goldShimmer" />
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

      {/* Card Header */}
      <div className="border-b border-white/10 bg-[#121528]/40 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[#F0C979]/30 to-[#58B6B1]/20 flex items-center justify-center border ${borderColor}`}>
            <span className={`text-xs font-bold ${accentColor}`}>{tier.slice(0,3).toUpperCase()}</span>
          </div>
          <div>
            <h3 className={`text-lg font-bold ${accentColor}`}>
              {title}
            </h3>
            <p className="text-xs text-[#F5E7C8]/70">{tier}</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-[#F5E7C8]">
          {price}+
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#F0C979]">
            What's Included:
          </p>
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
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#F5E7C8]/70">
            Perfect For:
          </p>
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
    <main className="relative min-h-screen bg-gradient-to-b from-[#121528] via-[#1A1832] to-[#0D0F1E] text-[#F5E7C8] overflow-hidden">
      {/* 🏰 MASSIVE TOWERING LIBRARY ATMOSPHERE - LIKE SAO NEON GRID */}

      {/* DRAMATIC WARM GOLDEN CANDLELIGHT FILLING THE ENTIRE SPACE */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Massive warm golden orbs - Like SAO's cyber glow orbs */}
        <div className="absolute -right-32 top-10 h-[40rem] w-[40rem] rounded-full bg-gradient-radial from-[#F0C979]/50 via-[#E9C97F]/30 to-[#F5E7C8]/10 blur-3xl opacity-60 animate-candleGlow" />
        <div className="absolute -left-40 bottom-20 h-[35rem] w-[35rem] rounded-full bg-gradient-radial from-[#E9C97F]/40 via-[#F0C979]/25 to-[#F5E7C8]/10 blur-3xl opacity-60 animate-candleGlow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full bg-gradient-radial from-[#F0C979]/30 via-[#F5E7C8]/15 to-transparent blur-3xl opacity-50 animate-goldShimmer" />
      </div>

      {/* TOWERING BOOKSHELVES - MASSIVE AND VISIBLE */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* LEFT WALL - Full height towering shelves - MUCH MORE VISIBLE */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-50">
          {/* 8 Massive Shelf Units */}
          {Array.from({ length: 8 }).map((_, shelfIndex) => (
            <div
              key={`left-shelf-${shelfIndex}`}
              className="absolute top-0 bottom-0"
              style={{
                left: `${shelfIndex * 12}%`,
                width: '11%',
                background: 'linear-gradient(to right, rgba(91, 51, 95, 0.7), rgba(91, 51, 95, 0.4), rgba(91, 51, 95, 0.7))',
                borderRight: '1px solid rgba(240, 201, 121, 0.3)'
              }}
            >
              {/* 10 Shelves per unit - more densely packed */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`shelf-${i}`}
                  className="absolute w-full"
                  style={{
                    top: `${i * 10}%`,
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, rgba(240, 201, 121, 0.6), transparent)'
                  }}
                />
              ))}

              {/* 50 Books per shelf unit - MUCH MORE VISIBLE */}
              {Array.from({ length: 50 }).map((_, bookIdx) => {
                const shelfLevel = Math.floor(bookIdx / 5);
                const posInShelf = (bookIdx % 5) * 19;
                const bookColors = ['#F0C979', '#5B335F', '#58B6B1', '#F5E7C8', '#E9C97F', '#8B6F47'];
                const randomHeight = 12 + Math.random() * 8;
                return (
                  <div
                    key={`book-${bookIdx}`}
                    className="absolute rounded-sm border-l border-[#121528]/20"
                    style={{
                      left: `${posInShelf + 2}%`,
                      top: `${shelfLevel * 10 + 1}%`,
                      width: '17%',
                      height: `${randomHeight}%`,
                      background: `linear-gradient(to bottom, ${bookColors[bookIdx % 6]}, ${bookColors[(bookIdx + 1) % 6]})`,
                      opacity: 0.7 + Math.random() * 0.3,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 0 2px rgba(240, 201, 121, 0.2)',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* RIGHT WALL - Full height towering shelves - MUCH MORE VISIBLE */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-50">
          {/* 8 Massive Shelf Units */}
          {Array.from({ length: 8 }).map((_, shelfIndex) => (
            <div
              key={`right-shelf-${shelfIndex}`}
              className="absolute top-0 bottom-0"
              style={{
                right: `${shelfIndex * 12}%`,
                width: '11%',
                background: 'linear-gradient(to left, rgba(91, 51, 95, 0.7), rgba(91, 51, 95, 0.4), rgba(91, 51, 95, 0.7))',
                borderLeft: '1px solid rgba(240, 201, 121, 0.3)'
              }}
            >
              {/* 10 Shelves per unit */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`shelf-${i}`}
                  className="absolute w-full"
                  style={{
                    top: `${i * 10}%`,
                    height: '2px',
                    background: 'linear-gradient(to left, transparent, rgba(240, 201, 121, 0.6), transparent)'
                  }}
                />
              ))}

              {/* 50 Books per shelf unit - MUCH MORE VISIBLE */}
              {Array.from({ length: 50 }).map((_, bookIdx) => {
                const shelfLevel = Math.floor(bookIdx / 5);
                const posInShelf = (bookIdx % 5) * 19;
                const bookColors = ['#F0C979', '#5B335F', '#58B6B1', '#F5E7C8', '#E9C97F', '#8B6F47'];
                const randomHeight = 12 + Math.random() * 8;
                return (
                  <div
                    key={`book-${bookIdx}`}
                    className="absolute rounded-sm border-r border-[#121528]/20"
                    style={{
                      left: `${posInShelf + 2}%`,
                      top: `${shelfLevel * 10 + 1}%`,
                      width: '17%',
                      height: `${randomHeight}%`,
                      background: `linear-gradient(to bottom, ${bookColors[bookIdx % 6]}, ${bookColors[(bookIdx + 1) % 6]})`,
                      opacity: 0.7 + Math.random() * 0.3,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 0 2px rgba(240, 201, 121, 0.2)',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* GOTHIC ARCHES - MUCH LARGER AND MORE VISIBLE */}
        <div className="absolute top-0 left-1/4 w-1/2 h-80 opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Arch - thicker and more dramatic */}
            <path d="M50 300 L50 80 Q50 20, 100 20 Q150 20, 150 80 L150 300" stroke="#F0C979" strokeWidth="4" fill="none" opacity="0.6" />
            <path d="M55 300 L55 85 Q55 30, 100 30 Q145 30, 145 85 L145 300" stroke="#E9C97F" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Right Arch */}
            <path d="M250 300 L250 80 Q250 20, 300 20 Q350 20, 350 80 L350 300" stroke="#F0C979" strokeWidth="4" fill="none" opacity="0.6" />
            <path d="M255 300 L255 85 Q255 30, 300 30 Q345 30, 345 85 L345 300" stroke="#E9C97F" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Decorative elements */}
            <circle cx="100" cy="20" r="8" stroke="#F0C979" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="300" cy="20" r="8" stroke="#F0C979" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Dark vignette to create depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-radial from-transparent via-[#121528]/30 to-[#121528]/90" />

      {/* Parchment texture overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='5'/%3E%3CfeColorMatrix values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      {/* 🦉 HOGWARTS LIBRARY AMBIENT ELEMENTS - 100+ ELEMENTS LIKE AI PAGE */}

      {/* 15 Floating Candles - scattered throughout (matching AI page's holograms) */}
      <FloatingCandle className="top-24 left-[5%] hidden lg:block" delay={0} />
      <FloatingCandle className="top-32 right-[8%] hidden lg:block" delay={0.8} />
      <FloatingCandle className="top-48 left-[12%] hidden lg:block" delay={1.5} />
      <FloatingCandle className="top-56 right-[15%] hidden lg:block" delay={2.2} />
      <FloatingCandle className="top-1/3 left-[7%] hidden lg:block" delay={3} />
      <FloatingCandle className="top-1/3 right-[18%] hidden lg:block" delay={0.5} />
      <FloatingCandle className="top-1/2 left-[9%] hidden lg:block" delay={1.8} />
      <FloatingCandle className="top-1/2 right-[10%] hidden lg:block" delay={2.5} />
      <FloatingCandle className="top-2/3 left-[15%] hidden lg:block" delay={1.2} />
      <FloatingCandle className="top-2/3 right-[12%] hidden lg:block" delay={3.5} />
      <FloatingCandle className="bottom-1/3 left-[11%] hidden lg:block" delay={2.8} />
      <FloatingCandle className="bottom-1/3 right-[16%] hidden lg:block" delay={0.3} />
      <FloatingCandle className="bottom-48 left-[14%] hidden lg:block" delay={1.9} />
      <FloatingCandle className="bottom-32 left-[6%] hidden lg:block" delay={3.2} />
      <FloatingCandle className="bottom-32 right-[14%] hidden lg:block" delay={0.7} />

      {/* 12 Magic Quills (matching AI page's data streams) */}
      <MagicQuill className="top-28 right-[22%] hidden md:block" delay={0} />
      <MagicQuill className="top-40 left-[18%] hidden md:block" delay={1.5} />
      <MagicQuill className="top-1/3 right-[12%] hidden md:block" delay={2.5} />
      <MagicQuill className="top-1/3 left-[24%] hidden md:block" delay={0.8} />
      <MagicQuill className="top-1/2 left-[10%] hidden md:block" delay={3.2} />
      <MagicQuill className="top-1/2 right-[25%] hidden md:block" delay={1.8} />
      <MagicQuill className="top-2/3 left-[22%] hidden md:block" delay={2.2} />
      <MagicQuill className="top-2/3 right-[20%] hidden md:block" delay={0.5} />
      <MagicQuill className="bottom-1/3 right-[18%] hidden md:block" delay={3.8} />
      <MagicQuill className="bottom-48 left-[20%] hidden md:block" delay={1.2} />
      <MagicQuill className="bottom-40 right-[15%] hidden md:block" delay={2.9} />
      <MagicQuill className="bottom-28 left-[12%] hidden md:block" delay={0.4} />

      {/* 10 Floating Books */}
      <FloatingBook className="top-36 left-[8%] hidden lg:block" delay={0} />
      <FloatingBook className="top-44 right-[20%] hidden lg:block" delay={1.8} />
      <FloatingBook className="top-1/3 left-[25%] hidden lg:block" delay={2.5} />
      <FloatingBook className="top-1/2 right-[8%] hidden lg:block" delay={0.5} />
      <FloatingBook className="top-1/2 left-[30%] hidden lg:block" delay={3.2} />
      <FloatingBook className="top-2/3 left-[18%] hidden lg:block" delay={1.5} />
      <FloatingBook className="top-2/3 right-[28%] hidden lg:block" delay={2.8} />
      <FloatingBook className="bottom-1/3 right-[22%] hidden lg:block" delay={0.8} />
      <FloatingBook className="bottom-40 left-[14%] hidden lg:block" delay={3.5} />
      <FloatingBook className="bottom-32 right-[16%] hidden lg:block" delay={1.3} />

      {/* 8 Floating Scrolls */}
      <FloatingScroll className="top-32 right-[28%] hidden lg:block" delay={0} />
      <FloatingScroll className="top-1/3 left-[20%] hidden lg:block" delay={2} />
      <FloatingScroll className="top-1/2 right-[32%] hidden lg:block" delay={1.5} />
      <FloatingScroll className="top-1/2 left-[28%] hidden lg:block" delay={3} />
      <FloatingScroll className="top-2/3 left-[28%] hidden lg:block" delay={0.8} />
      <FloatingScroll className="top-2/3 right-[26%] hidden lg:block" delay={2.5} />
      <FloatingScroll className="bottom-48 right-[24%] hidden lg:block" delay={1.7} />
      <FloatingScroll className="bottom-36 left-[24%] hidden lg:block" delay={3.3} />

      {/* 30 Dust Motes - scattered everywhere (matching AI page's light particles) */}
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

      {/* 25 Magic Sparkles */}
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
      <MagicSparkle className="top-[85%] left-[38%]" delay={2.4} />
      <MagicSparkle className="top-[15%] right-[50%]" delay={0.6} />
      <MagicSparkle className="top-[45%] left-[16%]" delay={3.6} />
      <MagicSparkle className="top-[75%] right-[16%]" delay={1.9} />
      <MagicSparkle className="top-[35%] left-[54%]" delay={2.3} />

      {/* 12 Ink Splatters */}
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
      <InkSplatter className="top-[15%] left-[50%]" delay={0.9} />
      <InkSplatter className="top-[55%] right-[50%]" delay={3.7} />

      {/* 7 Flying Owls - crossing at different times */}
      <FlyingOwl className="top-16" delay={0} />
      <FlyingOwl className="top-1/4" delay={5} />
      <FlyingOwl className="top-1/3" delay={10} />
      <FlyingOwl className="top-1/2" delay={15} />
      <FlyingOwl className="top-2/3" delay={20} />
      <FlyingOwl className="top-3/4" delay={25} />
      <FlyingOwl className="top-5/6" delay={30} />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        {/* EXTRA WARM GOLDEN GLOW behind headline - matching AI page's cyber glow orbs */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#F0C979]/60 via-[#E9C97F]/40 to-[#F5E7C8]/20 blur-3xl opacity-50 animate-candleGlow" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#E9C97F]/50 via-[#F0C979]/30 to-[#F5E7C8]/20 blur-3xl opacity-50 animate-candleGlow" style={{ animationDelay: '1s' }} />

        <div className="relative mx-auto max-w-5xl z-10">
          {/* 🌙 Hogwarts Moon Phases - EXACT PALETTE */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F0C979] via-[#E9C97F] to-[#F5E7C8] border-2 border-[#F0C979] hover:border-[#F5E7C8] transition-all cursor-pointer shadow-lg shadow-[#F0C979]/60 flex-shrink-0 animate-goldShimmer"
              title="Full Moon - Ghostwriting Studio"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F0C979]/60 to-[#5B335F]/50 flex-shrink-0" />
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#5B335F] to-[#58B6B1] border border-[#5B335F] hover:border-[#F0C979] transition-all cursor-pointer shadow-md shadow-[#5B335F]/40 flex-shrink-0"
              title="Waning Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#5B335F]/50 to-[#58B6B1]/40 flex-shrink-0" />
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#58B6B1] to-[#F5E7C8] border border-[#58B6B1]/60 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#58B6B1]/30 flex-shrink-0"
              title="Half Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#58B6B1]/40 to-[#F5E7C8]/30 flex-shrink-0" />
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#F5E7C8] border border-[#F5E7C8]/40 hover:border-[#F0C979] transition-all cursor-pointer shadow-sm shadow-[#F5E7C8]/20 flex-shrink-0"
              title="Crescent Moon"
            />
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#F5E7C8]/30 to-[#121528]/20 flex-shrink-0" />
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#121528] border border-[#F0C979]/30 hover:border-[#F0C979] transition-all cursor-pointer flex-shrink-0"
              title="New Moon"
            />
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#F0C979] uppercase font-medium">
              🦉 Service Suite · Author & Ghostwriting
            </p>
            <h1 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#58B6B1] bg-clip-text text-transparent leading-tight px-4">
              Author & Ghostwriting Studio
            </h1>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-[#F5E7C8] max-w-3xl mx-auto leading-relaxed px-4 italic">
              Books, cookbooks, launch flows, and ongoing content engines. A blend of clinical clarity and
              creative storytelling—every word feels human and intentional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact?service=ghostwriting"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#58B6B1] px-8 py-4 text-base font-bold text-[#121528] shadow-xl shadow-[#F0C979]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E9C97F]/70 overflow-hidden"
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

      {/* ═══════════════════════════════════════════════════════════════════
          WHO THIS IS FOR
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          PACKAGES
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="relative rounded-2xl border border-[#F0C979]/30 bg-gradient-to-br from-[#F0C979]/10 via-[#E9C97F]/10 to-[#58B6B1]/10 p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-[#F0C979]/40 via-[#E9C97F]/20 to-[#F5E7C8]/10 blur-3xl opacity-40 animate-candleGlow" />
            <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#E9C97F]/30 via-[#F0C979]/20 to-[#F5E7C8]/10 blur-3xl opacity-40 animate-candleGlow" style={{ animationDelay: '1s' }} />

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
                  className="rounded-full bg-gradient-to-r from-[#F0C979] via-[#E9C97F] to-[#58B6B1] px-8 py-4 font-semibold text-[#121528] transition-all hover:shadow-lg hover:shadow-[#F0C979]/50"
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
