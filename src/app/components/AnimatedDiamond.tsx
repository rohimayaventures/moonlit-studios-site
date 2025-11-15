export function AnimatedDiamond({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4ECDC4', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#A8E6E1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2BA49C', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="diamondGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.9 }} />
          <stop offset="50%" style={{ stopColor: '#4ECDC4', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#4ECDC4', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Outer glow */}
        <circle cx="0" cy="0" r="60" fill="url(#diamondGlow)">
          <animate attributeName="r" values="55;65;55" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Diamond shape - top facets */}
        <g className="diamond" filter="url(#glow)">
          {/* Top point */}
          <path d="M 0 -40 L -25 -10 L -15 -10 Z" fill="#A8E6E1" stroke="#2BA49C" strokeWidth="1" opacity="0.9" />
          <path d="M 0 -40 L 15 -10 L 25 -10 Z" fill="#4ECDC4" stroke="#2BA49C" strokeWidth="1" opacity="0.9" />
          <path d="M 0 -40 L -15 -10 L 15 -10 Z" fill="url(#diamondGradient)" stroke="#2BA49C" strokeWidth="1" />

          {/* Middle belt */}
          <path d="M -25 -10 L -30 10 L -15 -10 Z" fill="#2BA49C" opacity="0.7" />
          <path d="M -15 -10 L -30 10 L 0 10 Z" fill="#4ECDC4" opacity="0.8" />
          <path d="M 0 -10 L -30 10 L 30 10 Z" fill="#A8E6E1" opacity="0.6" />
          <path d="M 15 -10 L 0 10 L 30 10 Z" fill="#4ECDC4" opacity="0.8" />
          <path d="M 25 -10 L 15 -10 L 30 10 Z" fill="#2BA49C" opacity="0.7" />

          {/* Bottom facets */}
          <path d="M -30 10 L 0 50 L 0 10 Z" fill="#2BA49C" opacity="0.8" />
          <path d="M 0 10 L 0 50 L 30 10 Z" fill="#4ECDC4" opacity="0.7" />

          {/* Center line belt */}
          <line x1="-25" y1="-10" x2="25" y2="-10" stroke="#2BA49C" strokeWidth="2" />
          <line x1="-30" y1="10" x2="30" y2="10" stroke="#2BA49C" strokeWidth="2" />
        </g>

        {/* Sparkle highlights */}
        <g className="sparkles">
          <circle cx="-8" cy="-20" r="3" fill="#FFFFFF" opacity="0.9">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="5" cy="-15" r="2" fill="#FFFFFF" opacity="0.8">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="-5" r="2" fill="#FFFFFF" opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Rotating shine effect */}
        <g className="shine" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0 0; 360 0 0"
            dur="4s"
            repeatCount="indefinite"
          />
          <line x1="-35" y1="0" x2="35" y2="0" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
          <line x1="0" y1="-45" x2="0" y2="45" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        </g>

        {/* Light rays emanating */}
        <g className="light-rays" opacity="0.4">
          <line x1="0" y1="-40" x2="0" y2="-60" stroke="#4ECDC4" strokeWidth="2">
            <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="-30" y1="-20" x2="-45" y2="-30" stroke="#4ECDC4" strokeWidth="2">
            <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </line>
          <line x1="30" y1="-20" x2="45" y2="-30" stroke="#4ECDC4" strokeWidth="2">
            <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </line>
          <line x1="-35" y1="10" x2="-50" y2="15" stroke="#4ECDC4" strokeWidth="2">
            <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.9s" repeatCount="indefinite" />
          </line>
          <line x1="35" y1="10" x2="50" y2="15" stroke="#4ECDC4" strokeWidth="2">
            <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="1.2s" repeatCount="indefinite" />
          </line>
        </g>
      </g>
    </svg>
  );
}
