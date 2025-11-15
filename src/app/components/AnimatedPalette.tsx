export function AnimatedPalette({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paletteWood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B7355', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#A0826D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6B5444', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Paint palette body */}
        <ellipse cx="0" cy="0" rx="60" ry="50" fill="url(#paletteWood)" stroke="#5C4033" strokeWidth="3" />

        {/* Thumb hole */}
        <ellipse cx="35" cy="-5" rx="12" ry="15" fill="#2C1810" stroke="#5C4033" strokeWidth="2" />

        {/* Paint dollops with animation */}
        <g className="paint-dollops">
          {/* Red/Phoenix Fire */}
          <ellipse cx="-30" cy="-20" rx="8" ry="10" fill="#FF6B6B">
            <animate attributeName="ry" values="10;12;10" dur="3s" repeatCount="indefinite" />
          </ellipse>

          {/* Coral Pink */}
          <ellipse cx="-10" cy="-25" rx="8" ry="10" fill="#FFB4A9">
            <animate attributeName="ry" values="10;12;10" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Lunar Gold */}
          <ellipse cx="10" cy="-25" rx="8" ry="10" fill="#D4AF37">
            <animate attributeName="ry" values="10;12;10" dur="3s" begin="1s" repeatCount="indefinite" />
          </ellipse>

          {/* Mermaid Teal */}
          <ellipse cx="-30" cy="5" rx="8" ry="10" fill="#4ECDC4">
            <animate attributeName="ry" values="10;12;10" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Starlight */}
          <ellipse cx="-10" cy="10" rx="8" ry="10" fill="#E6F7FF">
            <animate attributeName="ry" values="10;12;10" dur="3s" begin="2s" repeatCount="indefinite" />
          </ellipse>

          {/* Moonlight Silver */}
          <ellipse cx="10" cy="5" rx="8" ry="10" fill="#C0C0C0">
            <animate attributeName="ry" values="10;12;10" dur="3s" begin="2.5s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Paintbrush */}
        <g transform="rotate(-30)" className="paintbrush">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-30;-25;-30"
            dur="4s"
            repeatCount="indefinite"
          />
          {/* Handle */}
          <rect x="25" y="-2" width="40" height="4" rx="2" fill="#8B4513" />
          {/* Ferrule */}
          <rect x="20" y="-3" width="8" height="6" fill="#C0C0C0" />
          {/* Bristles */}
          <path d="M 15 -4 L 20 -3 L 20 3 L 15 4 Z" fill="#E6D5AC" />
        </g>

        {/* Sparkles around palette */}
        <g className="sparkles" opacity="0.7">
          <circle cx="-45" cy="-35" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="30" r="2" fill="#FFB4A9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="45" cy="-30" r="2" fill="#4ECDC4">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}
