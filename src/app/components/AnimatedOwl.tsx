export function AnimatedOwl({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hedwig - Elegant Snowy Owl in Flight */}

      <defs>
        {/* Gradients for feathers */}
        <radialGradient id="snowyWhite" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#F8F8F8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E8E8E8', stopOpacity: 1 }} />
        </radialGradient>

        <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#F0F0F0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E0E0E0', stopOpacity: 0.95 }} />
        </linearGradient>

        <radialGradient id="goldenEye" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
        </radialGradient>
      </defs>

      {/* Body - elegant snowy white */}
      <g className="animate-[float_3s_ease-in-out_infinite]">
        {/* Main body */}
        <ellipse cx="60" cy="65" rx="22" ry="28" fill="url(#snowyWhite)" />

        {/* Chest - brighter white */}
        <ellipse cx="60" cy="70" rx="16" ry="20" fill="#FFFFFF" opacity="0.9" />

        {/* Head */}
        <circle cx="60" cy="40" r="18" fill="url(#snowyWhite)" />

        {/* Facial disc - characteristic heart shape */}
        <ellipse cx="60" cy="42" rx="16" ry="15" fill="#FAFAFA" opacity="0.8" />

        {/* Eyes - large, golden, wise */}
        <g className="eyes">
          <ellipse cx="53" cy="38" rx="5" ry="6" fill="url(#goldenEye)" />
          <ellipse cx="67" cy="38" rx="5" ry="6" fill="url(#goldenEye)" />

          {/* Pupils - blinking */}
          <ellipse cx="53" cy="38" rx="2.5" ry="3" fill="#1A1A1A" className="animate-[blink_4s_ease-in-out_infinite]" />
          <ellipse cx="67" cy="38" rx="2.5" ry="3" fill="#1A1A1A" className="animate-[blink_4s_ease-in-out_infinite]" />

          {/* Eye highlights */}
          <circle cx="54" cy="36" r="1.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="68" cy="36" r="1.5" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Beak - small, dark */}
        <path d="M58 44 L60 48 L62 44 Z" fill="#4A4A4A" />

        {/* Subtle feather markings - dark spots characteristic of snowy owls */}
        <g opacity="0.15">
          <circle cx="50" cy="48" r="1.5" fill="#2A2A2A" />
          <circle cx="70" cy="48" r="1.5" fill="#2A2A2A" />
          <circle cx="55" cy="65" r="1" fill="#2A2A2A" />
          <circle cx="65" cy="65" r="1" fill="#2A2A2A" />
          <circle cx="52" cy="75" r="1.2" fill="#2A2A2A" />
          <circle cx="68" cy="75" r="1.2" fill="#2A2A2A" />
        </g>
      </g>

      {/* LEFT WING - majestic spread */}
      <g className="origin-[40px_55px] animate-[flapLeft_2s_ease-in-out_infinite]" style={{ transformBox: 'fill-box' }}>
        {/* Wing base */}
        <ellipse cx="40" cy="55" rx="28" ry="35" fill="url(#wingGradient)" opacity="0.95" />

        {/* Primary feathers */}
        <path d="M15 50 Q12 55 15 60 Q18 65 20 70" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M18 48 Q15 53 18 58 Q21 63 23 68" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M21 46 Q18 51 21 56 Q24 61 26 66" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />

        {/* Feather details */}
        <g opacity="0.12">
          <circle cx="25" cy="55" r="1.5" fill="#2A2A2A" />
          <circle cx="30" cy="50" r="1" fill="#2A2A2A" />
          <circle cx="28" cy="60" r="1" fill="#2A2A2A" />
        </g>
      </g>

      {/* RIGHT WING - majestic spread */}
      <g className="origin-[80px_55px] animate-[flapRight_2s_ease-in-out_infinite]" style={{ transformBox: 'fill-box' }}>
        {/* Wing base */}
        <ellipse cx="80" cy="55" rx="28" ry="35" fill="url(#wingGradient)" opacity="0.95" />

        {/* Primary feathers */}
        <path d="M105 50 Q108 55 105 60 Q102 65 100 70" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M102 48 Q105 53 102 58 Q99 63 97 68" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M99 46 Q102 51 99 56 Q96 61 94 66" stroke="#E8E8E8" strokeWidth="3" fill="none" opacity="0.7" />

        {/* Feather details */}
        <g opacity="0.12">
          <circle cx="95" cy="55" r="1.5" fill="#2A2A2A" />
          <circle cx="90" cy="50" r="1" fill="#2A2A2A" />
          <circle cx="92" cy="60" r="1" fill="#2A2A2A" />
        </g>
      </g>

      {/* LETTER IN TALONS - rolled parchment */}
      <g className="animate-[sway_2s_ease-in-out_infinite]" style={{ transformOrigin: '60px 90px' }}>
        {/* Parchment scroll */}
        <rect x="52" y="88" width="16" height="20" rx="2" fill="#F4E4C1" stroke="#D4C5A0" strokeWidth="1" />

        {/* Scroll ends */}
        <ellipse cx="60" cy="87" rx="8" ry="2" fill="#E8D5B0" />
        <ellipse cx="60" cy="109" rx="8" ry="2" fill="#E8D5B0" />

        {/* Red wax seal */}
        <circle cx="60" cy="98" r="3" fill="#DC143C" opacity="0.9" />
        <circle cx="60" cy="98" r="2.5" fill="#B91226" opacity="0.5" />

        {/* Address lines on scroll */}
        <line x1="55" y1="92" x2="65" y2="92" stroke="#8B7355" strokeWidth="0.5" opacity="0.4" />
        <line x1="55" y1="95" x2="65" y2="95" stroke="#8B7355" strokeWidth="0.5" opacity="0.4" />
        <line x1="55" y1="103" x2="65" y2="103" stroke="#8B7355" strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* Talons gripping letter */}
      <g fill="#4A4A4A" opacity="0.7">
        <path d="M56 86 L54 88 M58 86 L58 88 M60 86 L62 88" stroke="#3A3A3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 86 L64 88 M64 86 L66 88" stroke="#3A3A3A" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Magical sparkles */}
      <g className="sparkles">
        <circle cx="25" cy="35" r="1.5" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" />
        <circle cx="95" cy="40" r="1.5" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }} />
        <circle cx="60" cy="15" r="1" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '1.3s' }} />
        <circle cx="45" cy="85" r="1" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '1.8s' }} />
        <circle cx="75" cy="85" r="1" fill="#FFD700" opacity="0" className="animate-[sparkle_2s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
      </g>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes flapLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-25deg); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes blink {
          0%, 48%, 52%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
    </svg>
  );
}
