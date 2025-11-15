export function AnimatedFlame({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FF8C42', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#DC143C', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="flameCore" cx="50%" cy="70%" r="40%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C42', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 120)">
        {/* Outer flame */}
        <path
          d="M 0 -80 Q -25 -50 -30 -20 Q -35 10 -20 30 Q -10 45 0 50 Q 10 45 20 30 Q 35 10 30 -20 Q 25 -50 0 -80 Z"
          fill="url(#flameGradient)"
          opacity="0.9"
        >
          <animate attributeName="d"
            values="M 0 -80 Q -25 -50 -30 -20 Q -35 10 -20 30 Q -10 45 0 50 Q 10 45 20 30 Q 35 10 30 -20 Q 25 -50 0 -80 Z;
                    M 0 -85 Q -30 -48 -28 -18 Q -32 12 -22 32 Q -12 43 0 50 Q 12 43 22 32 Q 32 12 28 -18 Q 30 -48 0 -85 Z;
                    M 0 -80 Q -25 -50 -30 -20 Q -35 10 -20 30 Q -10 45 0 50 Q 10 45 20 30 Q 35 10 30 -20 Q 25 -50 0 -80 Z"
            dur="1.5s"
            repeatCount="indefinite"/>
        </path>

        {/* Middle flame layer */}
        <path
          d="M 0 -60 Q -18 -40 -20 -15 Q -22 5 -15 20 Q -8 30 0 35 Q 8 30 15 20 Q 22 5 20 -15 Q 18 -40 0 -60 Z"
          fill="#FF8C42"
          opacity="0.8"
        >
          <animate attributeName="d"
            values="M 0 -60 Q -18 -40 -20 -15 Q -22 5 -15 20 Q -8 30 0 35 Q 8 30 15 20 Q 22 5 20 -15 Q 18 -40 0 -60 Z;
                    M 0 -65 Q -20 -38 -18 -12 Q -20 8 -17 22 Q -10 28 0 35 Q 10 28 17 22 Q 20 8 18 -12 Q 20 -38 0 -65 Z;
                    M 0 -60 Q -18 -40 -20 -15 Q -22 5 -15 20 Q -8 30 0 35 Q 8 30 15 20 Q 22 5 20 -15 Q 18 -40 0 -60 Z"
            dur="1.2s"
            repeatCount="indefinite"/>
        </path>

        {/* Inner core */}
        <ellipse cx="0" cy="0" rx="12" ry="25" fill="url(#flameCore)">
          <animate attributeName="ry" values="25;28;25" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite"/>
        </ellipse>

        {/* Sparks */}
        <g className="sparks">
          <circle cx="0" cy="-85" r="2" fill="#FFD700">
            <animate attributeName="cy" values="-85;-100;-85" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-15" cy="-70" r="1.5" fill="#FF8C42">
            <animate attributeName="cy" values="-70;-85;-70" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="15" cy="-70" r="1.5" fill="#FF8C42">
            <animate attributeName="cy" values="-70;-85;-70" dur="2.5s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* Heat waves */}
        <g opacity="0.3">
          <path d="M -20 -90 Q -10 -95 0 -90 Q 10 -95 20 -90" stroke="#FFD700" strokeWidth="2" fill="none">
            <animate attributeName="d"
              values="M -20 -90 Q -10 -95 0 -90 Q 10 -95 20 -90;
                      M -20 -90 Q -10 -85 0 -90 Q 10 -85 20 -90;
                      M -20 -90 Q -10 -95 0 -90 Q 10 -95 20 -90"
              dur="1s"
              repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    </svg>
  );
}
