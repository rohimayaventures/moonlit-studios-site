// Professional SVG icons for Kai personality modes (no emojis)

export function TeaCupIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Steam lines */}
      <path d="M7 4c0 1 0 2 1 2s1-1 1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M11 4c0 1 0 2 1 2s1-1 1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function OwlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Owl body */}
      <path d="M12 3c-4 0-7 3-7 7v5c0 3 2 5 5 5h4c3 0 5-2 5-5v-5c0-4-3-7-7-7z" fill="currentColor" opacity="0.2"/>
      <path d="M12 3c-4 0-7 3-7 7v5c0 3 2 5 5 5h4c3 0 5-2 5-5v-5c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="2"/>
      {/* Eyes */}
      <circle cx="9" cy="11" r="2" fill="currentColor"/>
      <circle cx="15" cy="11" r="2" fill="currentColor"/>
      <circle cx="9.5" cy="10.5" r="0.8" fill="white"/>
      <circle cx="15.5" cy="10.5" r="0.8" fill="white"/>
      {/* Beak */}
      <path d="M12 13v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Ears */}
      <path d="M8 3l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 3l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function SwordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blade */}
      <path d="M20 4l-16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 4l-16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      {/* Guard */}
      <path d="M6 18l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 18l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M3 19l1 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Blade shine */}
      <path d="M18 6l-2 2" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function StaffIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Staff */}
      <path d="M6 22l4-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Crystal top */}
      <path d="M12 2l-2 4 2 2 2-2-2-4z" fill="currentColor" opacity="0.3"/>
      <path d="M12 2l-2 4 2 2 2-2-2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Glow */}
      <circle cx="12" cy="5" r="3" fill="currentColor" opacity="0.1"/>
      {/* Rings */}
      <circle cx="9" cy="12" r="1" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7.5" cy="17" r="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Case body */}
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
      {/* Top handle */}
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
      {/* Lock */}
      <path d="M12 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Horizontal line */}
      <path d="M3 14h18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function ChaosIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spiral chaos */}
      <path d="M12 2c5 0 8 3 8 8s-3 8-8 8-8-3-8-8 3-8 8-8z" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
      <path d="M12 6c3 0 4 1 4 4s-1 4-4 4-4-1-4-4 1-4 4-4z" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.6"/>
      {/* Lightning bolts */}
      <path d="M15 4l-2 4h2l-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 4l2 4H9l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Sparkles */}
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="18" cy="6" r="1" fill="currentColor"/>
      <circle cx="18" cy="18" r="1" fill="currentColor"/>
      <circle cx="6" cy="18" r="1" fill="currentColor"/>
    </svg>
  );
}
