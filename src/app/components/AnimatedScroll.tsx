export function AnimatedScroll({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="scrollPaper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFEF7', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#F5E6D3', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E8D5B7', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="scrollRod" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B7355', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Scroll rolled section - top */}
        <g className="top-roll">
          <ellipse cx="0" cy="-45" rx="35" ry="8" fill="url(#scrollPaper)" stroke="#D4A574" strokeWidth="2" />
          <rect x="-35" y="-45" width="70" height="5" fill="url(#scrollPaper)" />
          <ellipse cx="0" cy="-40" rx="35" ry="8" fill="#E8D5B7" opacity="0.7" />
        </g>

        {/* Scroll paper - main body */}
        <rect x="-35" y="-40" width="70" height="80" fill="url(#scrollPaper)" stroke="#D4A574" strokeWidth="2" />

        {/* Decorative text lines */}
        <g className="text-lines" opacity="0.4">
          <line x1="-25" y1="-25" x2="25" y2="-25" stroke="#8B7355" strokeWidth="1" />
          <line x1="-25" y1="-15" x2="25" y2="-15" stroke="#8B7355" strokeWidth="1" />
          <line x1="-25" y1="-5" x2="25" y2="-5" stroke="#8B7355" strokeWidth="1" />
          <line x1="-25" y1="5" x2="15" y2="5" stroke="#8B7355" strokeWidth="1" />
        </g>

        {/* Decorative seal/emblem */}
        <circle cx="15" cy="20" r="10" fill="#DC143C" opacity="0.7">
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <path
          d="M 15 13 L 13 18 L 17 18 Z M 10 20 L 20 20 M 13 22 L 17 22"
          stroke="#FFFEF7"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* Scroll rolled section - bottom */}
        <g className="bottom-roll">
          <ellipse cx="0" cy="40" rx="35" ry="8" fill="#E8D5B7" opacity="0.7" />
          <rect x="-35" y="40" width="70" height="5" fill="url(#scrollPaper)" />
          <ellipse cx="0" cy="45" rx="35" ry="8" fill="url(#scrollPaper)" stroke="#D4A574" strokeWidth="2" />
        </g>

        {/* Wooden rods on sides */}
        <g className="scroll-rods">
          {/* Left rod */}
          <rect x="-38" y="-50" width="5" height="100" rx="2" fill="url(#scrollRod)" />
          <ellipse cx="-35.5" cy="-50" rx="2.5" ry="3" fill="#A0826D" />
          <ellipse cx="-35.5" cy="50" rx="2.5" ry="3" fill="#6B5444" />

          {/* Right rod */}
          <rect x="33" y="-50" width="5" height="100" rx="2" fill="url(#scrollRod)" />
          <ellipse cx="35.5" cy="-50" rx="2.5" ry="3" fill="#A0826D" />
          <ellipse cx="35.5" cy="50" rx="2.5" ry="3" fill="#6B5444" />
        </g>

        {/* Magical shimmer */}
        <g className="shimmer">
          <circle cx="-20" cy="-30" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,0; 0,0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
