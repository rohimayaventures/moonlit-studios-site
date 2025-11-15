export function AnimatedTrophy({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="trophyGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8960A', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="shine" cx="50%" cy="30%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Glow effect */}
        <circle cx="0" cy="-10" r="65" fill="url(#shine)" opacity="0.4">
          <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Trophy base */}
        <rect x="-35" y="50" width="70" height="8" rx="2" fill="url(#trophyGold)" stroke="#B8960A" strokeWidth="2" />
        <rect x="-30" y="45" width="60" height="5" fill="#D4AF37" opacity="0.8" />

        {/* Trophy stem */}
        <rect x="-8" y="30" width="16" height="20" fill="url(#trophyGold)" stroke="#B8960A" strokeWidth="2" />

        {/* Trophy cup body */}
        <path
          d="M -40 -35 L -35 30 L 35 30 L 40 -35 Z"
          fill="url(#trophyGold)"
          stroke="#B8960A"
          strokeWidth="2"
        />

        {/* Trophy rim */}
        <ellipse cx="0" cy="-35" rx="40" ry="8" fill="#FFD700" stroke="#B8960A" strokeWidth="2" />
        <ellipse cx="0" cy="-35" rx="35" ry="6" fill="#FFA500" opacity="0.6" />

        {/* Left handle */}
        <path
          d="M -40 -30 Q -55 -20 -55 0 Q -55 15 -40 20"
          stroke="url(#trophyGold)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M -40 -30 Q -53 -20 -53 0 Q -53 15 -40 20"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Right handle */}
        <path
          d="M 40 -30 Q 55 -20 55 0 Q 55 15 40 20"
          stroke="url(#trophyGold)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 40 -30 Q 53 -20 53 0 Q 53 15 40 20"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Trophy details - decorative bands */}
        <ellipse cx="0" cy="-10" rx="35" ry="3" fill="#FFA500" opacity="0.6" />
        <ellipse cx="0" cy="5" rx="30" ry="3" fill="#FFA500" opacity="0.6" />

        {/* Star emblem */}
        <path
          d="M 0 -25 L -3 -18 L -10 -18 L -5 -13 L -7 -6 L 0 -11 L 7 -6 L 5 -13 L 10 -18 L 3 -18 Z"
          fill="#654321"
          opacity="0.8"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Shine highlights */}
        <ellipse cx="-15" cy="-25" rx="8" ry="12" fill="#FFFFFF" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* Sparkles */}
        <g className="sparkles">
          <circle cx="-50" cy="-40" r="2" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="-30" r="2" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="-50" r="2" fill="#FFFFFF">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="-60" cy="0" r="2" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="10" r="2" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}
