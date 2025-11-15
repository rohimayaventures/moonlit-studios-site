export function AnimatedWizard({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wizardHat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A148C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7B1FA2', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="starGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Wizard hat cone */}
        <path
          d="M 0 -60 L -40 20 L 40 20 Z"
          fill="url(#wizardHat)"
          stroke="#6A1B9A"
          strokeWidth="2"
        />

        {/* Hat brim */}
        <ellipse cx="0" cy="20" rx="50" ry="12" fill="#6A1B9A" stroke="#4A148C" strokeWidth="2" />

        {/* Moon on hat */}
        <circle cx="0" cy="-10" r="10" fill="#D4AF37" opacity="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="3" cy="-10" r="8" fill="url(#wizardHat)" />

        {/* Stars on hat */}
        <g className="stars">
          {/* Star 1 */}
          <path
            d="M -20 -25 L -18 -20 L -13 -20 L -17 -16 L -15 -11 L -20 -15 L -25 -11 L -23 -16 L -27 -20 L -22 -20 Z"
            fill="url(#starGlow)"
            opacity="0.9"
          >
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Star 2 */}
          <path
            d="M 20 -25 L 22 -20 L 27 -20 L 23 -16 L 25 -11 L 20 -15 L 15 -11 L 17 -16 L 13 -20 L 18 -20 Z"
            fill="url(#starGlow)"
            opacity="0.8"
          >
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </path>

          {/* Star 3 - small */}
          <path
            d="M 0 -40 L 1 -38 L 3 -38 L 1.5 -36 L 2 -34 L 0 -35.5 L -2 -34 L -1.5 -36 L -3 -38 L -1 -38 Z"
            fill="url(#starGlow)"
            opacity="0.7"
          >
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1.3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Magical sparkles floating around */}
        <g className="magic-sparkles">
          <circle cx="-45" cy="-30" r="2" fill="#D4AF37">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 5,-10; 0,0"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>

          <circle cx="45" cy="-20" r="2" fill="#FFD700">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -5,-10; 0,0"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>

          <circle cx="0" cy="-70" r="2" fill="#E6F7FF">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-5; 0,0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Floating wand */}
        <g transform="translate(55, -40)" className="wand">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 55 -40; 15 55 -40; 0 55 -40"
            dur="4s"
            repeatCount="indefinite"
          />

          {/* Wand stick */}
          <line x1="0" y1="0" x2="15" y2="15" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />

          {/* Wand tip sparkle */}
          <path
            d="M 0 -2 L -1 0 L 0 2 L 1 0 Z"
            fill="#D4AF37"
          >
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </svg>
  );
}
