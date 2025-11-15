export function AnimatedOwl({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Owl Body */}
      <g className="animate-bounce" style={{ animationDuration: '3s' }}>
        {/* Main body gradient */}
        <defs>
          <linearGradient id="owlBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B7355', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5C4033', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="owlWing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4A3728', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="owlEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
          </radialGradient>
        </defs>

        {/* Body */}
        <ellipse cx="100" cy="120" rx="50" ry="60" fill="url(#owlBody)" />

        {/* Wings */}
        <g className="wing-left" style={{ transformOrigin: '60px 110px' }}>
          <ellipse cx="60" cy="110" rx="25" ry="45" fill="url(#owlWing)" opacity="0.9" />
          <path
            d="M 45 90 Q 35 110 45 130"
            stroke="#4A3728"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <animate
            attributeName="rx"
            values="25;30;25"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>

        <g className="wing-right" style={{ transformOrigin: '140px 110px' }}>
          <ellipse cx="140" cy="110" rx="25" ry="45" fill="url(#owlWing)" opacity="0.9" />
          <path
            d="M 155 90 Q 165 110 155 130"
            stroke="#4A3728"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <animate
            attributeName="rx"
            values="25;30;25"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>

        {/* Head */}
        <circle cx="100" cy="80" r="40" fill="url(#owlBody)" />

        {/* Ear tufts */}
        <path
          d="M 70 50 L 65 35 L 75 45 Z"
          fill="#6B5444"
          opacity="0.8"
        />
        <path
          d="M 130 50 L 135 35 L 125 45 Z"
          fill="#6B5444"
          opacity="0.8"
        />

        {/* Eyes - with blink animation */}
        <g className="eyes">
          <circle cx="85" cy="75" r="15" fill="url(#owlEye)" />
          <circle cx="115" cy="75" r="15" fill="url(#owlEye)" />

          {/* Pupils */}
          <circle cx="85" cy="75" r="8" fill="#2C1810">
            <animate
              attributeName="cy"
              values="75;75;75;75"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="115" cy="75" r="8" fill="#2C1810">
            <animate
              attributeName="cy"
              values="75;75;75;75"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Eye shine */}
          <circle cx="88" cy="72" r="4" fill="#FFF" opacity="0.8" />
          <circle cx="118" cy="72" r="4" fill="#FFF" opacity="0.8" />

          {/* Blink */}
          <rect x="70" y="60" width="30" height="0" fill="#6B5444">
            <animate
              attributeName="height"
              values="0;30;0;0;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="100" y="60" width="30" height="0" fill="#6B5444">
            <animate
              attributeName="height"
              values="0;30;0;0;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* Beak */}
        <path
          d="M 100 85 L 95 95 L 105 95 Z"
          fill="#D4AF37"
          opacity="0.9"
        />

        {/* Chest feather pattern */}
        <g opacity="0.3">
          <ellipse cx="100" cy="130" rx="20" ry="15" fill="#F5DEB3" />
          <path d="M 90 125 Q 100 135 110 125" stroke="#8B7355" strokeWidth="1" fill="none" />
          <path d="M 90 135 Q 100 145 110 135" stroke="#8B7355" strokeWidth="1" fill="none" />
        </g>

        {/* Talons */}
        <g transform="translate(85, 175)">
          <path d="M 0 0 L -3 8 M 5 0 L 5 8 M 10 0 L 13 8" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(105, 175)">
          <path d="M 0 0 L -3 8 M 5 0 L 5 8 M 10 0 L 13 8" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>

      {/* Flying sparkles around owl */}
      <g className="sparkles" opacity="0.6">
        <circle cx="40" cy="60" r="2" fill="#D4AF37">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="160" cy="80" r="2" fill="#D4AF37">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="140" r="2" fill="#D4AF37">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
