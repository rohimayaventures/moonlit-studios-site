export function AnimatedWind({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#E8E8E8', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#C9D3D8', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: '#E8E8E8', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Wind swirls - top */}
        <path
          d="M -60 -30 Q -30 -35 0 -30 Q 30 -25 60 -30"
          stroke="url(#windGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="d"
            values="M -60 -30 Q -30 -35 0 -30 Q 30 -25 60 -30;
                    M -60 -30 Q -30 -25 0 -30 Q 30 -35 60 -30;
                    M -60 -30 Q -30 -35 0 -30 Q 30 -25 60 -30"
            dur="2s"
            repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
        </path>

        {/* Wind swirls - middle */}
        <path
          d="M -50 0 Q -20 -5 10 0 Q 40 5 70 0"
          stroke="url(#windGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="d"
            values="M -50 0 Q -20 -5 10 0 Q 40 5 70 0;
                    M -50 0 Q -20 5 10 0 Q 40 -5 70 0;
                    M -50 0 Q -20 -5 10 0 Q 40 5 70 0"
            dur="2.5s"
            repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
        </path>

        {/* Wind swirls - bottom */}
        <path
          d="M -60 30 Q -30 25 0 30 Q 30 35 60 30"
          stroke="url(#windGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="d"
            values="M -60 30 Q -30 25 0 30 Q 30 35 60 30;
                    M -60 30 Q -30 35 0 30 Q 30 25 60 30;
                    M -60 30 Q -30 25 0 30 Q 30 35 60 30"
            dur="3s"
            repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
        </path>

        {/* Spiral wind effect */}
        <g className="spiral">
          <path
            d="M 0 0 Q 10 -10 20 -15 Q 35 -20 45 -15"
            stroke="#C9D3D8"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0; 360 0 0"
              dur="4s"
              repeatCount="indefinite"/>
          </path>
        </g>

        {/* Air particles flowing */}
        <g className="particles">
          <circle cx="-70" cy="-30" r="3" fill="#C9D3D8" opacity="0.7">
            <animate attributeName="cx" values="-70;70" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-70" cy="0" r="4" fill="#E8E8E8" opacity="0.8">
            <animate attributeName="cx" values="-70;70" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-70" cy="30" r="3" fill="#C9D3D8" opacity="0.6">
            <animate attributeName="cx" values="-70;70" dur="3.2s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.6;0" dur="3.2s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* Gust effect lines */}
        <g className="gusts" opacity="0.5">
          <line x1="-80" y1="-20" x2="-40" y2="-20" stroke="#C9D3D8" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="x1" values="-80;80" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="-40;120" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="-80" y1="10" x2="-50" y2="10" stroke="#E8E8E8" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="x1" values="-80;80" dur="2.3s" begin="0.3s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="-50;130" dur="2.3s" begin="0.3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.7;0" dur="2.3s" begin="0.3s" repeatCount="indefinite"/>
          </line>
          <line x1="-80" y1="40" x2="-45" y2="40" stroke="#C9D3D8" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="x1" values="-80;80" dur="2.7s" begin="0.7s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="-45;125" dur="2.7s" begin="0.7s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.6;0" dur="2.7s" begin="0.7s" repeatCount="indefinite"/>
          </line>
        </g>
      </g>
    </svg>
  );
}
