export function AnimatedSword({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="swordBlade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#E8E8E8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#A8A8A8', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="swordHandle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A90A4', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2C5F77', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Sword with animation */}
      <g transform="translate(100, 100)" className="sword-container">
        <g transform="rotate(-45)" filter="url(#glow)">
          {/* Blade */}
          <rect
            x="-8"
            y="-90"
            width="16"
            height="100"
            fill="url(#swordBlade)"
            stroke="#909090"
            strokeWidth="1"
          />

          {/* Blade edge highlight */}
          <rect
            x="-6"
            y="-90"
            width="4"
            height="100"
            fill="#FFF"
            opacity="0.4"
          />

          {/* Cross guard */}
          <rect
            x="-30"
            y="8"
            width="60"
            height="8"
            fill="#D4AF37"
            stroke="#B8960A"
            strokeWidth="1"
            rx="2"
          />

          {/* Handle */}
          <rect
            x="-6"
            y="16"
            width="12"
            height="30"
            fill="url(#swordHandle)"
            stroke="#2C5F77"
            strokeWidth="1"
            rx="3"
          />

          {/* Handle grip lines */}
          <line x1="-6" y1="22" x2="6" y2="22" stroke="#1A3A4A" strokeWidth="1" />
          <line x1="-6" y1="28" x2="6" y2="28" stroke="#1A3A4A" strokeWidth="1" />
          <line x1="-6" y1="34" x2="6" y2="34" stroke="#1A3A4A" strokeWidth="1" />
          <line x1="-6" y1="40" x2="6" y2="40" stroke="#1A3A4A" strokeWidth="1" />

          {/* Pommel */}
          <circle
            cx="0"
            cy="50"
            r="7"
            fill="#D4AF37"
            stroke="#B8960A"
            strokeWidth="1"
          />

          {/* Blade shine effect */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-45 0 0"
            to="-45 0 0"
            dur="3s"
            repeatCount="indefinite"
          />

          {/* Glowing tip */}
          <circle
            cx="0"
            cy="-85"
            r="4"
            fill="#4FD1C5"
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Energy particles */}
        <g className="energy-particles">
          <circle cx="20" cy="-40" r="2" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,-10; 0,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="-20" cy="-50" r="2" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -10,-10; 0,0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
