export function AnimatedMedical({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="medicalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4ECDC4', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#45B7AA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3EACA0', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#4ECDC4', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#4ECDC4', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Pulsing glow effect */}
        <circle cx="0" cy="0" r="60" fill="url(#pulseGlow)">
          <animate attributeName="r" values="50;65;50" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Medical cross - vertical bar */}
        <rect
          x="-12"
          y="-45"
          width="24"
          height="90"
          rx="4"
          fill="url(#medicalGlow)"
          stroke="#3EACA0"
          strokeWidth="2"
        />

        {/* Medical cross - horizontal bar */}
        <rect
          x="-45"
          y="-12"
          width="90"
          height="24"
          rx="4"
          fill="url(#medicalGlow)"
          stroke="#3EACA0"
          strokeWidth="2"
        />

        {/* Center circle */}
        <circle cx="0" cy="0" r="15" fill="#FAFAFA" opacity="0.9" />

        {/* Heartbeat line in center */}
        <path
          d="M -8 0 L -5 0 L -3 -5 L -1 5 L 1 0 L 8 0"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Corner accents - top left */}
        <circle cx="-35" cy="-35" r="3" fill="#FAFAFA" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Corner accents - top right */}
        <circle cx="35" cy="-35" r="3" fill="#FAFAFA" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>

        {/* Corner accents - bottom left */}
        <circle cx="-35" cy="35" r="3" fill="#FAFAFA" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* Corner accents - bottom right */}
        <circle cx="35" cy="35" r="3" fill="#FAFAFA" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Floating medical particles */}
        <circle cx="-50" cy="-20" r="2" fill="#4ECDC4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-15; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="20" r="2" fill="#4ECDC4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,15; 0,0"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
