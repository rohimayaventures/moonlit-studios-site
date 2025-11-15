export function AnimatedGamepad({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gamepadBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A5568', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2D3748', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1A202C', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="buttonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#4ECDC4', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#4ECDC4', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <g transform="translate(100, 100)">
        {/* Controller body */}
        <path
          d="M -60 -15 L -50 -25 L 50 -25 L 60 -15 L 60 25 L 50 35 L -50 35 L -60 25 Z"
          fill="url(#gamepadBody)"
          stroke="#1A202C"
          strokeWidth="3"
        />

        {/* Left grip */}
        <path
          d="M -60 -15 L -70 0 L -70 30 L -60 35"
          fill="#2D3748"
          stroke="#1A202C"
          strokeWidth="3"
        />

        {/* Right grip */}
        <path
          d="M 60 -15 L 70 0 L 70 30 L 60 35"
          fill="#2D3748"
          stroke="#1A202C"
          strokeWidth="3"
        />

        {/* D-pad (left side) */}
        <g className="dpad">
          {/* Horizontal bar */}
          <rect x="-40" y="-3" width="24" height="6" rx="1" fill="#1A202C" stroke="#4ECDC4" strokeWidth="1" />
          {/* Vertical bar */}
          <rect x="-31" y="-12" width="6" height="24" rx="1" fill="#1A202C" stroke="#4ECDC4" strokeWidth="1" />

          {/* Button press animation */}
          <circle cx="-28" cy="0" r="3" fill="#4ECDC4" opacity="0">
            <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Action buttons (right side) - ABXY style */}
        <g className="action-buttons">
          {/* Button Y (top) */}
          <circle cx="28" cy="-12" r="6" fill="#FFD700" stroke="#1A202C" strokeWidth="2">
            <animate attributeName="r" values="6;7;6" dur="3s" begin="0s" repeatCount="indefinite" />
          </circle>
          <text x="28" y="-9" fontSize="8" fill="#1A202C" textAnchor="middle" fontWeight="bold">Y</text>

          {/* Button B (right) */}
          <circle cx="40" cy="0" r="6" fill="#DC143C" stroke="#1A202C" strokeWidth="2">
            <animate attributeName="r" values="6;7;6" dur="3s" begin="0.75s" repeatCount="indefinite" />
          </circle>
          <text x="40" y="3" fontSize="8" fill="#FAFAFA" textAnchor="middle" fontWeight="bold">B</text>

          {/* Button A (bottom) */}
          <circle cx="28" cy="12" r="6" fill="#32CD32" stroke="#1A202C" strokeWidth="2">
            <animate attributeName="r" values="6;7;6" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="28" y="15" fontSize="8" fill="#1A202C" textAnchor="middle" fontWeight="bold">A</text>

          {/* Button X (left) */}
          <circle cx="16" cy="0" r="6" fill="#4169E1" stroke="#1A202C" strokeWidth="2">
            <animate attributeName="r" values="6;7;6" dur="3s" begin="2.25s" repeatCount="indefinite" />
          </circle>
          <text x="16" y="3" fontSize="8" fill="#FAFAFA" textAnchor="middle" fontWeight="bold">X</text>
        </g>

        {/* Start/Select buttons */}
        <ellipse cx="-8" cy="8" rx="6" ry="4" fill="#1A202C" stroke="#4ECDC4" strokeWidth="1" opacity="0.7" />
        <ellipse cx="8" cy="8" rx="6" ry="4" fill="#1A202C" stroke="#4ECDC4" strokeWidth="1" opacity="0.7" />

        {/* Analog stick indicators */}
        <circle cx="-25" cy="18" r="8" fill="#2D3748" stroke="#4ECDC4" strokeWidth="2" opacity="0.8" />
        <circle cx="-25" cy="18" r="4" fill="#4ECDC4" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 2,2; 0,0; -2,-2; 0,0"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* LED indicators */}
        <g className="leds">
          <circle cx="-5" cy="-15" r="1.5" fill="#4ECDC4">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="-15" r="1.5" fill="#4ECDC4">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="5" cy="-15" r="1.5" fill="#4ECDC4">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Glow effects */}
        <ellipse cx="0" cy="0" rx="80" ry="50" fill="url(#buttonGlow)" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </ellipse>
      </g>
    </svg>
  );
}
