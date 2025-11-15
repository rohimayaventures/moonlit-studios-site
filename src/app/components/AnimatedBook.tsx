export function AnimatedBook({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#654321', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FFFEF7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F5E6D3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Book shadow */}
        <ellipse cx="5" cy="55" rx="45" ry="8" fill="#000000" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* Book floating animation wrapper */}
        <g className="book-float">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-5; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />

          {/* Book back cover */}
          <rect
            x="-45"
            y="-50"
            width="90"
            height="100"
            rx="4"
            fill="url(#bookCover)"
            stroke="#654321"
            strokeWidth="2"
          />

          {/* Book spine */}
          <rect
            x="-48"
            y="-50"
            width="8"
            height="100"
            fill="#654321"
          />

          {/* Spine details */}
          <line x1="-45" y1="-45" x2="-45" y2="45" stroke="#8B4513" strokeWidth="1" opacity="0.5" />

          {/* Pages */}
          <g className="pages">
            {/* Page stack effect */}
            <rect x="-42" y="-48" width="84" height="96" fill="url(#pageGradient)" />
            <rect x="-41" y="-47" width="82" height="94" fill="url(#pageGradient)" opacity="0.9" />
            <rect x="-40" y="-46" width="80" height="92" fill="url(#pageGradient)" opacity="0.8" />

            {/* Page lines */}
            <line x1="-35" y1="-35" x2="30" y2="-35" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="-25" x2="30" y2="-25" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="-15" x2="30" y2="-15" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="-5" x2="30" y2="-5" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="5" x2="30" y2="5" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="15" x2="30" y2="15" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
            <line x1="-35" y1="25" x2="30" y2="25" stroke="#8B7355" strokeWidth="0.5" opacity="0.3" />
          </g>

          {/* Decorative emblem on cover */}
          <circle cx="0" cy="0" r="15" fill="#D4AF37" opacity="0.7" />
          <path
            d="M 0 -10 L -3 -3 L -10 -2 L -5 3 L -6 10 L 0 6 L 6 10 L 5 3 L 10 -2 L 3 -3 Z"
            fill="#654321"
            opacity="0.9"
          />

          {/* Cover title area */}
          <rect x="-35" y="-40" width="70" height="3" fill="#D4AF37" opacity="0.6" />
          <rect x="-35" y="37" width="70" height="3" fill="#D4AF37" opacity="0.6" />

          {/* Ribbon bookmark */}
          <rect x="35" y="-50" width="8" height="70" fill="#DC143C" opacity="0.8">
            <animate attributeName="height" values="70;75;70" dur="3s" repeatCount="indefinite" />
          </rect>
          <path d="M 35 20 L 39 25 L 43 20" fill="#DC143C" opacity="0.8">
            <animate attributeName="transform" type="translate" values="0,0; 0,5; 0,0" dur="3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Magical sparkles around book */}
        <g className="sparkles">
          <circle cx="-55" cy="-30" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="-20" r="2" fill="#FFD700">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="-50" cy="20" r="2" fill="#F5E6D3">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="30" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Floating letters/words */}
        <g className="letters" opacity="0.5">
          <text x="-60" y="-40" fontSize="8" fill="#8B7355" fontFamily="serif">
            <animate attributeName="y" values="-40;-50;-40" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" />
            A
          </text>
          <text x="55" y="35" fontSize="8" fill="#8B7355" fontFamily="serif">
            <animate attributeName="y" values="35;25;35" dur="4s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.5;0" dur="4s" begin="1s" repeatCount="indefinite" />
            Z
          </text>
        </g>
      </g>
    </svg>
  );
}
