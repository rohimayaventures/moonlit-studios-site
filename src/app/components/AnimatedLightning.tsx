export function AnimatedLightning({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lightningGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="electricGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0 }} />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(100, 100)">
        {/* Electric glow pulse */}
        <circle cx="0" cy="0" r="50" fill="url(#electricGlow)">
          <animate attributeName="r" values="40;60;40" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Main lightning bolt */}
        <path
          d="M 0 -60 L -10 -10 L 5 -10 L -5 30 L -10 30 L 10 75 L 12 20 L 0 20 L 8 -15 L -5 -15 Z"
          fill="url(#lightningGold)"
          stroke="#FFA500"
          strokeWidth="2"
          strokeLinejoin="miter"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1;0.9;1"
            dur="0.3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Lightning inner highlight */}
        <path
          d="M 2 -55 L -7 -10 L 5 -10 L -3 30 L 10 70"
          stroke="#FFFACD"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5;0.8;0.5"
            dur="0.3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Electric sparks */}
        <g className="sparks">
          {/* Left spark */}
          <line x1="-15" y1="-5" x2="-25" y2="-10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
          </line>
          <line x1="-15" y1="-5" x2="-22" y2="2" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
          </line>

          {/* Right spark */}
          <line x1="12" y1="15" x2="22" y2="10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
          </line>
          <line x1="12" y1="15" x2="20" y2="22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.15s" repeatCount="indefinite" />
          </line>

          {/* Bottom sparks */}
          <line x1="-5" y1="25" x2="-12" y2="28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="0.25s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Energy particles */}
        <g className="energy-particles">
          <circle cx="-20" cy="-30" r="2" fill="#FFD700">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -5,-10; 0,0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>

          <circle cx="25" cy="0" r="2" fill="#FFA500">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,5; 0,0"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </circle>

          <circle cx="15" cy="50" r="2" fill="#FFFACD">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 8,10; 0,0"
              dur="2s"
              begin="1.3s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.3s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}
