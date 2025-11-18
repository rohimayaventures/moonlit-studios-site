// Floating open book with warm golden glow
// Simple, elegant, magical

export function FloatingOpenBook({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className} animate-bookFloat`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Warm glow underneath */}
      <div className="absolute inset-0 blur-2xl bg-[#F0C979]/20 scale-125" />

      <svg width="80" height="50" viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
        {/* Left page */}
        <path
          d="M 10 12 Q 15 8 20 10 L 38 14 L 38 42 Q 25 40 10 44 Z"
          fill="#F5E7C8"
          stroke="#E1D0B1"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Right page */}
        <path
          d="M 42 14 L 60 10 Q 65 8 70 12 L 70 44 Q 55 40 42 42 Z"
          fill="#F5E7C8"
          stroke="#E1D0B1"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Center spine */}
        <line
          x1="40"
          y1="14"
          x2="40"
          y2="42"
          stroke="#C9A45C"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Text lines on left page */}
        <line x1="16" y1="20" x2="34" y2="22" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
        <line x1="16" y1="25" x2="32" y2="27" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
        <line x1="16" y1="30" x2="34" y2="32" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />

        {/* Text lines on right page */}
        <line x1="46" y1="22" x2="64" y2="20" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
        <line x1="48" y1="27" x2="64" y2="25" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
        <line x1="46" y1="32" x2="64" y2="30" stroke="#F0C979" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}
