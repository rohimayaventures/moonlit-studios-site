export function AnimatedHorn({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#F4E4C1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8960A', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="soundWave" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#F4E4C1', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Horn of Gondor */}
      <g transform="translate(100, 100)">
        {/* Main horn body - curved */}
        <path
          d="M -60 20 Q -40 0 -20 -10 Q 0 -15 20 -10 Q 40 -5 55 10"
          stroke="url(#hornGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />

        {/* Horn details/bands */}
        <g opacity="0.7">
          <ellipse cx="-45" cy="12" rx="6" ry="8" fill="#8B7355" transform="rotate(-20 -45 12)" />
          <ellipse cx="-20" cy="-5" rx="6" ry="8" fill="#8B7355" transform="rotate(-10 -20 -5)" />
          <ellipse cx="10" cy="-12" rx="6" ry="8" fill="#8B7355" transform="rotate(5 10 -12)" />
          <ellipse cx="35" cy="-5" rx="6" ry="8" fill="#8B7355" transform="rotate(15 35 -5)" />
        </g>

        {/* Mouthpiece */}
        <circle cx="-60" cy="20" r="8" fill="url(#hornGradient)" stroke="#8B7355" strokeWidth="2" />
        <circle cx="-60" cy="20" r="4" fill="#5C4033" />

        {/* Bell end */}
        <g transform="translate(55, 10) rotate(25)">
          <ellipse cx="0" cy="0" rx="12" ry="16" fill="url(#hornGradient)" stroke="#8B7355" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#3A2817" opacity="0.6" />
        </g>

        {/* Decorative elvish pattern */}
        <g opacity="0.4">
          <path
            d="M -50 15 Q -48 18 -46 15"
            stroke="#3A2817"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M -25 -8 Q -23 -5 -21 -8"
            stroke="#3A2817"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 5 -14 Q 7 -11 9 -14"
            stroke="#3A2817"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Sound waves emanating from bell */}
        <g className="sound-waves">
          <ellipse cx="70" cy="15" rx="15" ry="20" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0">
            <animate
              attributeName="rx"
              values="15;30;45"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="20;35;50"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.3;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </ellipse>

          <ellipse cx="70" cy="15" rx="15" ry="20" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0">
            <animate
              attributeName="rx"
              values="15;30;45"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="20;35;50"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.3;0"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
          </ellipse>

          <ellipse cx="70" cy="15" rx="15" ry="20" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0">
            <animate
              attributeName="rx"
              values="15;30;45"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="20;35;50"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.3;0"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Glowing particles */}
        <g className="particles">
          <circle cx="65" cy="10" r="2" fill="#F4E4C1">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 20,5; 0,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="70" cy="20" r="2" fill="#F4E4C1">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 15,-5; 0,0"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
