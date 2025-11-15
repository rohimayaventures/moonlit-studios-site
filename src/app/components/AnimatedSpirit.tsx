export function AnimatedSpirit({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spiritGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#4FD1C5', stopOpacity: 0.8 }} />
          <stop offset="70%" style={{ stopColor: '#38B2AC', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#2C7A7B', stopOpacity: 0 }} />
        </radialGradient>
        <radialGradient id="waterDrop" cx="30%" cy="30%" r="70%">
          <stop offset="0%" style={{ stopColor: '#B2F5EA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4FD1C5', stopOpacity: 1 }} />
        </radialGradient>
      </defs>

      {/* Outer glow ring */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="url(#spiritGlow)"
      >
        <animate
          attributeName="r"
          values="75;85;75"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Water symbol - circle with wave */}
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="#4FD1C5"
        strokeWidth="3"
        opacity="0.8"
      >
        <animate
          attributeName="r"
          values="48;52;48"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Rotating water drops/orbs */}
      <g transform="translate(100, 100)">
        {/* Drop 1 */}
        <g transform="rotate(0)">
          <ellipse
            cx="0"
            cy="-40"
            rx="8"
            ry="12"
            fill="url(#waterDrop)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 40"
              to="360 0 40"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Drop 2 */}
        <g transform="rotate(120)">
          <ellipse
            cx="0"
            cy="-40"
            rx="8"
            ry="12"
            fill="url(#waterDrop)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="120 0 40"
              to="480 0 40"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Drop 3 */}
        <g transform="rotate(240)">
          <ellipse
            cx="0"
            cy="-40"
            rx="8"
            ry="12"
            fill="url(#waterDrop)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="240 0 40"
              to="600 0 40"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </g>

      {/* Center water wave symbol */}
      <g transform="translate(100, 100)">
        <path
          d="M -20 0 Q -10 -8 0 0 T 20 0"
          stroke="#4FD1C5"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M -20 0 Q -10 -8 0 0 T 20 0;
                    M -20 0 Q -10 8 0 0 T 20 0;
                    M -20 0 Q -10 -8 0 0 T 20 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M -20 10 Q -10 2 0 10 T 20 10"
          stroke="#4FD1C5"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            values="M -20 10 Q -10 2 0 10 T 20 10;
                    M -20 10 Q -10 18 0 10 T 20 10;
                    M -20 10 Q -10 2 0 10 T 20 10"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M -20 -10 Q -10 -18 0 -10 T 20 -10"
          stroke="#4FD1C5"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            values="M -20 -10 Q -10 -18 0 -10 T 20 -10;
                    M -20 -10 Q -10 -2 0 -10 T 20 -10;
                    M -20 -10 Q -10 -18 0 -10 T 20 -10"
            dur="2s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Floating sparkles */}
      <g className="sparkles">
        <circle cx="60" cy="60" r="2" fill="#B2F5EA">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="140" cy="80" r="2" fill="#B2F5EA">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="80" cy="140" r="2" fill="#B2F5EA">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
