// Harry Potter inspired flying skeleton key with dragonfly wings
// Subtle animation - floats gently in background

export function WingedKey({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className} animate-wingFloat`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gold gradient for key */}
          <linearGradient id={`goldShade-${delay}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0C979" />
            <stop offset="100%" stopColor="#C9A45C" />
          </linearGradient>
        </defs>

        {/* LEFT WING - dragonfly style */}
        <ellipse
          cx="20"
          cy="35"
          rx="12"
          ry="20"
          fill="#F5E7C8"
          fillOpacity="0.3"
          stroke="#58B6B1"
          strokeWidth="1"
          transform="rotate(-25 20 35)"
        />
        {/* Inner wing vein */}
        <ellipse
          cx="20"
          cy="35"
          rx="7"
          ry="13"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.5"
          opacity="0.6"
          transform="rotate(-25 20 35)"
        />

        {/* RIGHT WING - dragonfly style */}
        <ellipse
          cx="50"
          cy="35"
          rx="12"
          ry="20"
          fill="#F5E7C8"
          fillOpacity="0.3"
          stroke="#58B6B1"
          strokeWidth="1"
          transform="rotate(25 50 35)"
        />
        {/* Inner wing vein */}
        <ellipse
          cx="50"
          cy="35"
          rx="7"
          ry="13"
          fill="none"
          stroke="#58B6B1"
          strokeWidth="0.5"
          opacity="0.6"
          transform="rotate(25 50 35)"
        />

        {/* KEY BODY */}
        {/* Key head (bow) */}
        <circle
          cx="35"
          cy="30"
          r="8"
          fill="none"
          stroke={`url(#goldShade-${delay})`}
          strokeWidth="2.5"
        />
        <circle
          cx="35"
          cy="30"
          r="4"
          fill="none"
          stroke={`url(#goldShade-${delay})`}
          strokeWidth="1.5"
        />

        {/* Key shaft */}
        <line
          x1="35"
          y1="38"
          x2="35"
          y2="55"
          stroke={`url(#goldShade-${delay})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Key teeth */}
        <path
          d="M35 53 L32 53 L32 56 L35 56 M35 50 L38 50 L38 53 L35 53"
          fill={`url(#goldShade-${delay})`}
          stroke="#5B335F"
          strokeWidth="0.5"
        />

        {/* Subtle glow around key */}
        <circle
          cx="35"
          cy="40"
          r="15"
          fill="#F0C979"
          opacity="0.05"
          className="blur-md"
        />
      </svg>
    </div>
  );
}
