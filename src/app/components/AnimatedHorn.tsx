export function AnimatedHorn({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gandalf's Staff - You Shall Not Pass! */}

      <defs>
        {/* Wood grain gradient */}
        <linearGradient id="woodGrain" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B7355', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5C4033', stopOpacity: 1 }} />
        </linearGradient>

        {/* Crystal glow */}
        <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: '#E0E0FF', stopOpacity: 0.9 }} />
          <stop offset="80%" style={{ stopColor: '#9B9BFF', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: '#6A6AFF', stopOpacity: 0 }} />
        </radialGradient>

        {/* Magic aura */}
        <radialGradient id="magicAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
          <stop offset="60%" style={{ stopColor: '#FFA500', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Main staff shaft - gnarled ancient wood */}
      <g className="animate-[sway_4s_ease-in-out_infinite]" style={{ transformOrigin: '50px 60px' }}>
        {/* Staff body */}
        <path
          d="M48 10 Q47 30 48 50 Q49 70 48 90 Q47 100 48 110"
          stroke="url(#woodGrain)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M52 10 Q53 30 52 50 Q51 70 52 90 Q53 100 52 110"
          stroke="url(#woodGrain)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Wood grain details */}
        <path d="M48 25 Q52 26 48 27" stroke="#5C4033" strokeWidth="1" opacity="0.4" />
        <path d="M48 45 Q52 46 48 47" stroke="#5C4033" strokeWidth="1" opacity="0.4" />
        <path d="M48 65 Q52 66 48 67" stroke="#5C4033" strokeWidth="1" opacity="0.4" />
        <path d="M48 85 Q52 86 48 87" stroke="#5C4033" strokeWidth="1" opacity="0.4" />

        {/* Gnarled knots in wood */}
        <circle cx="49" cy="35" r="2" fill="#4A3728" opacity="0.6" />
        <circle cx="51" cy="55" r="1.5" fill="#4A3728" opacity="0.6" />
        <circle cx="49" cy="75" r="2" fill="#4A3728" opacity="0.6" />

        {/* Top ornament - crystalline head */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
          {/* Crystal base ring */}
          <ellipse cx="50" cy="8" rx="6" ry="2" fill="#8B8B8B" />

          {/* Main crystal - glowing white */}
          <path
            d="M45 8 L47 3 L50 0 L53 3 L55 8 Z"
            fill="url(#crystalGlow)"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          />

          {/* Crystal facets */}
          <path d="M47 3 L50 5 L53 3" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.6" />
          <path d="M47 6 L50 4 L53 6" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.6" />

          {/* Crystal highlight */}
          <circle cx="50" cy="3" r="1.5" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Magical glow around crystal */}
        <g opacity="0" className="animate-[pulse_2s_ease-in-out_infinite]">
          <circle cx="50" cy="4" r="10" fill="url(#magicAura)" />
        </g>

        {/* Runes carved into staff */}
        <g opacity="0.3" stroke="#3A2817" strokeWidth="0.5" fill="none">
          <path d="M46 18 L48 20 L46 22" /> {/* Elvish rune 1 */}
          <path d="M52 38 L54 40 L52 42" /> {/* Elvish rune 2 */}
          <path d="M46 58 L48 60 L46 62" /> {/* Elvish rune 3 */}
        </g>

        {/* Bottom end - worn grip area */}
        <ellipse cx="50" cy="110" rx="3" ry="1.5" fill="#3A2817" />
      </g>

      {/* Magical sparkles emanating */}
      <g className="sparkles">
        <circle cx="35" cy="10" r="1" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" />
        <circle cx="65" cy="15" r="1.5" fill="#FFFFFF" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }} />
        <circle cx="42" cy="5" r="1" fill="#FFA500" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '1.3s' }} />
        <circle cx="58" cy="8" r="1.2" fill="#FFFFFF" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
      </g>

      {/* Magical energy bursts */}
      <g className="energy" opacity="0" className="animate-[flash_4s_ease-in-out_infinite]">
        <path d="M50 0 L48 -5 L50 -3 L52 -8 L50 -4" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        <path d="M50 0 L52 -5 L50 -3 L48 -8 L50 -4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      </g>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes flash {
          0%, 90%, 100% { opacity: 0; }
          95% { opacity: 0.8; }
        }
      `}</style>
    </svg>
  );
}
