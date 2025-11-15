export function AnimatedWaterDrop({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4ECDC4', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2BA49C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1B7A75', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="waterShine" cx="30%" cy="30%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#4ECDC4', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Water drop shape */}
        <path
          d="M 0 -60 Q 30 -30 40 10 Q 40 50 0 60 Q -40 50 -40 10 Q -30 -30 0 -60 Z"
          fill="url(#waterGradient)"
          stroke="#2BA49C"
          strokeWidth="2"
        >
          <animate attributeName="d"
            values="M 0 -60 Q 30 -30 40 10 Q 40 50 0 60 Q -40 50 -40 10 Q -30 -30 0 -60 Z;
                    M 0 -60 Q 35 -25 42 10 Q 42 48 0 60 Q -42 48 -42 10 Q -35 -25 0 -60 Z;
                    M 0 -60 Q 30 -30 40 10 Q 40 50 0 60 Q -40 50 -40 10 Q -30 -30 0 -60 Z"
            dur="2s"
            repeatCount="indefinite"/>
        </path>

        {/* Shine highlight */}
        <ellipse cx="-15" cy="-20" rx="20" ry="25" fill="url(#waterShine)">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite"/>
        </ellipse>

        {/* Water ripples inside */}
        <ellipse cx="0" cy="10" rx="25" ry="8" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.3">
          <animate attributeName="ry" values="8;10;8" dur="2s" repeatCount="indefinite"/>
        </ellipse>

        {/* Splash particles */}
        <g className="splash" opacity="0.6">
          <circle cx="0" cy="-70" r="3" fill="#4ECDC4">
            <animate attributeName="cy" values="-70;-85;-70" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-10" cy="-65" r="2" fill="#4ECDC4">
            <animate attributeName="cy" values="-65;-75;-65" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="10" cy="-65" r="2" fill="#4ECDC4">
            <animate attributeName="cy" values="-65;-75;-65" dur="3s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </g>
      </g>
    </svg>
  );
}
