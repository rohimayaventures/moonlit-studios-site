export function OwlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simple owl icon for buttons */}
      <defs>
        <linearGradient id="owlIconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Body */}
      <ellipse cx="12" cy="14" rx="6" ry="8" fill="url(#owlIconGrad)" />

      {/* Head */}
      <circle cx="12" cy="8" r="5" fill="url(#owlIconGrad)" />

      {/* Eyes */}
      <circle cx="10" cy="8" r="1.5" fill="currentColor" opacity="0.9" />
      <circle cx="14" cy="8" r="1.5" fill="currentColor" opacity="0.9" />

      {/* Beak */}
      <path d="M11 10 L12 11.5 L13 10" fill="currentColor" opacity="0.8" />

      {/* Wings - simple curves */}
      <path
        d="M6 13 Q4 11 5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M18 13 Q20 11 19 9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
