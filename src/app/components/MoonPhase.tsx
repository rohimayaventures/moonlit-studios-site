'use client';

import { useEffect, useState } from 'react';

export type MoonTheme = 'default' | 'hp' | 'atla' | 'mermaid' | 'phoenix';

interface MoonPhaseProps {
  theme?: MoonTheme;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  animated?: boolean;
}

// Calculate actual moon phase based on current date
function calculateMoonPhase(): number {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Simplified moon phase calculation
  let c, e, jd, b;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; // Julian date relative to Jan 1, 2000
  jd /= 29.5305882; // Divide by the Moon's period
  b = parseInt(jd.toString()); // Integer part
  jd -= b; // Decimal part

  // Round to nearest phase
  return Math.round(jd * 8) / 8;
}

const themeColors: Record<MoonTheme, { primary: string; secondary: string; glow: string }> = {
  default: {
    primary: 'from-lunarGold via-moonlightSilver to-starlight',
    secondary: 'from-midnight to-deepOcean',
    glow: 'shadow-lunarGold/30'
  },
  hp: {
    primary: 'from-yellow-400 via-amber-300 to-yellow-500',
    secondary: 'from-purple-900 to-indigo-950',
    glow: 'shadow-amber-400/40'
  },
  atla: {
    primary: 'from-cyan-400 via-blue-300 to-cyan-500',
    secondary: 'from-blue-900 to-cyan-950',
    glow: 'shadow-cyan-400/40'
  },
  mermaid: {
    primary: 'from-emerald-400 via-teal-300 to-cyan-400',
    secondary: 'from-teal-900 to-emerald-950',
    glow: 'shadow-teal-400/40'
  },
  phoenix: {
    primary: 'from-orange-400 via-red-400 to-yellow-500',
    secondary: 'from-red-900 to-orange-950',
    glow: 'shadow-orange-400/40'
  }
};

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const moonPhaseNames = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent'
];

export function MoonPhase({
  theme = 'default',
  size = 'md',
  showLabel = false,
  animated = true
}: MoonPhaseProps) {
  const [phase, setPhase] = useState(0.5); // Default to full moon
  const [phaseName, setPhaseName] = useState('Full Moon');

  useEffect(() => {
    const moonPhase = calculateMoonPhase();
    setPhase(moonPhase);

    // Determine phase name
    const phaseIndex = Math.round(moonPhase * 8) % 8;
    setPhaseName(moonPhaseNames[phaseIndex]);
  }, []);

  const colors = themeColors[theme];
  const sizeClass = sizeClasses[size];

  // Calculate illumination percentage
  const illumination = phase < 0.5
    ? phase * 2  // Waxing (0 to 1)
    : (1 - phase) * 2; // Waning (1 to 0)

  // Determine if waxing or waning
  const isWaxing = phase < 0.5;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClass} ${animated ? 'animate-pulse' : ''}`}>
        {/* Moon base (dark side) */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.secondary} border-2 border-moonlightSilver/20`}
        />

        {/* Illuminated portion */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.primary} border-2 border-transparent ${colors.glow} shadow-lg`}
          style={{
            clipPath: phase === 0
              ? 'circle(0%)'
              : phase === 0.5
              ? 'circle(50%)'
              : isWaxing
              ? `ellipse(${illumination * 100}% 100% at ${illumination * 100}% 50%)`
              : `ellipse(${illumination * 100}% 100% at ${100 - illumination * 100}% 50%)`
          }}
        />

        {/* Glow effect for full moon */}
        {phase >= 0.4 && phase <= 0.6 && (
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.primary} opacity-30 blur-md ${colors.glow}`}
            style={{ transform: 'scale(1.2)' }}
          />
        )}
      </div>

      {showLabel && (
        <span className="text-xs text-moonlightSilver font-medium">
          {phaseName}
        </span>
      )}
    </div>
  );
}

export default MoonPhase;
