export function AnimatedOwl({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flying Owl with Letter - Elegant Line Art */}

      {/* Owl body */}
      <path
        d="M50 20 C35 20, 25 30, 25 45 L25 60 C25 70, 35 75, 50 75 C65 75, 75 70, 75 60 L75 45 C75 30, 65 20, 50 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="animate-[float_3s_ease-in-out_infinite]"
      />

      {/* Left Wing - flapping */}
      <path
        d="M25 45 Q10 35, 5 45 Q3 50, 5 55 Q10 65, 25 55"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-[25px_50px] animate-[flap_1.5s_ease-in-out_infinite]"
        style={{ transformBox: 'fill-box' }}
      />

      {/* Right Wing - flapping */}
      <path
        d="M75 45 Q90 35, 95 45 Q97 50, 95 55 Q90 65, 75 55"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-[75px_50px] animate-[flap_1.5s_ease-in-out_infinite]"
        style={{ transformBox: 'fill-box', animationDelay: '0.1s' }}
      />

      {/* Wing detail feathers - left */}
      <path d="M15 48 L8 52 M15 52 L8 56" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeLinecap="round" />

      {/* Wing detail feathers - right */}
      <path d="M85 48 L92 52 M85 52 L92 56" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeLinecap="round" />

      {/* Eyes - wise circles */}
      <circle cx="42" cy="38" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="58" cy="38" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Pupils - blinking */}
      <circle cx="42" cy="38" r="2.5" fill="currentColor" className="animate-[blink_4s_ease-in-out_infinite]" />
      <circle cx="58" cy="38" r="2.5" fill="currentColor" className="animate-[blink_4s_ease-in-out_infinite]" />

      {/* Beak */}
      <path d="M48 45 L50 50 L52 45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ear tufts */}
      <path d="M32 23 L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="animate-[sway_3s_ease-in-out_infinite]" style={{ transformOrigin: '32px 23px' }} />
      <path d="M68 23 L72 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="animate-[sway_3s_ease-in-out_infinite]" style={{ transformOrigin: '68px 23px', animationDelay: '0.5s' }} />

      {/* Chest feather details */}
      <path d="M40 60 Q50 65 60 60" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" />
      <path d="M42 65 Q50 68 58 65" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" />

      {/* Talons */}
      <path d="M45 73 L43 78 M48 73 L48 78 M51 73 L53 78" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M49 73 L47 78 M52 73 L52 78 M55 73 L57 78" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* LETTER IN BEAK - The Star Feature */}
      <g className="animate-[bounce_2s_ease-in-out_infinite]">
        {/* Envelope */}
        <rect x="38" y="52" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Envelope flap */}
        <path d="M38 52 L50 62 L62 52" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Wax seal */}
        <circle cx="50" cy="60" r="2.5" fill="currentColor" opacity="0.6" />
        {/* Address lines */}
        <path d="M42 56 L48 56" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path d="M42 58 L55 58" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* Motion lines - suggesting flight */}
      <g opacity="0.3" className="animate-pulse">
        <path d="M10 30 Q8 32 6 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M10 40 Q8 42 6 40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M90 30 Q92 32 94 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M90 40 Q92 42 94 40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      </g>

      {/* Sparkles around letter */}
      <circle cx="34" cy="54" r="1" fill="currentColor" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" />
      <circle cx="66" cy="54" r="1" fill="currentColor" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }} />
      <circle cx="50" cy="48" r="1" fill="currentColor" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '1.4s' }} />

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes flap {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-20deg); }
        }
        @keyframes blink {
          0%, 48%, 52%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </svg>
  );
}
