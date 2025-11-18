// Subtle candle glow for Hogwarts Library ambiance
// Designed to sit in background - never overlap content

export function CandleGlow({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="
          w-2
          h-96
          bg-gradient-to-t
          from-[#F0C979]/20
          via-[#F0C979]/10
          to-transparent
          blur-2xl
          opacity-30
          animate-candleFlicker
        "
      />
    </div>
  );
}
