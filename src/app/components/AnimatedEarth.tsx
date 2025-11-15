export function AnimatedEarth({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B7355', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4A3829', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="earthCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#A0826D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Earth mound - main body */}
        <path
          d="M -50 30 Q -40 10 -20 0 Q 0 -5 20 0 Q 40 10 50 30 L 50 40 Q 30 50 0 50 Q -30 50 -50 40 Z"
          fill="url(#earthGradient)"
          stroke="#4A3829"
          strokeWidth="2"
        >
          <animate attributeName="d"
            values="M -50 30 Q -40 10 -20 0 Q 0 -5 20 0 Q 40 10 50 30 L 50 40 Q 30 50 0 50 Q -30 50 -50 40 Z;
                    M -50 30 Q -42 8 -20 -2 Q 0 -7 20 -2 Q 42 8 50 30 L 50 40 Q 30 50 0 50 Q -30 50 -50 40 Z;
                    M -50 30 Q -40 10 -20 0 Q 0 -5 20 0 Q 40 10 50 30 L 50 40 Q 30 50 0 50 Q -30 50 -50 40 Z"
            dur="3s"
            repeatCount="indefinite"/>
        </path>

        {/* Rock details */}
        <ellipse cx="-15" cy="15" rx="12" ry="10" fill="#6B5444" opacity="0.7" />
        <ellipse cx="20" cy="20" rx="15" ry="12" fill="#6B5444" opacity="0.7" />
        <ellipse cx="0" cy="5" rx="10" ry="8" fill="#8B7355" opacity="0.8" />

        {/* Cracks/texture */}
        <path d="M -30 25 L -20 15 L -15 25" stroke="#4A3829" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 10 15 L 15 5 L 20 15" stroke="#4A3829" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Floating rock particles */}
        <g className="particles">
          <rect x="-5" y="-25" width="4" height="4" fill="#8B7355" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -10,-20; 0,0"
              dur="4s"
              repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite"/>
          </rect>
          <rect x="10" y="-20" width="3" height="3" fill="#6B5444" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 15,-25; 0,0"
              dur="5s"
              begin="1s"
              repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.7;0" dur="5s" begin="1s" repeatCount="indefinite"/>
          </rect>
          <rect x="-15" y="-15" width="3" height="3" fill="#A0826D" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -12,-18; 0,0"
              dur="4.5s"
              begin="0.5s"
              repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.6;0" dur="4.5s" begin="0.5s" repeatCount="indefinite"/>
          </rect>
        </g>

        {/* Ground tremor lines */}
        <g className="tremor-lines" opacity="0.4">
          <line x1="-60" y1="55" x2="60" y2="55" stroke="#8B7355" strokeWidth="2">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="-55" y1="60" x2="55" y2="60" stroke="#6B5444" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin="0.3s" repeatCount="indefinite"/>
          </line>
        </g>
      </g>
    </svg>
  );
}
