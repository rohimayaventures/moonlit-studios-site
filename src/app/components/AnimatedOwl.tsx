export function AnimatedOwl({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hedwig - Majestic Snowy Owl in Flight */}

      <defs>
        {/* Body gradient - natural owl coloring */}
        <radialGradient id="snowyBody" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: '#F5F5F5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E8E8E8', stopOpacity: 1 }} />
        </radialGradient>

        {/* Wing feather gradient */}
        <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#F8F8F8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E5E5E5', stopOpacity: 0.98 }} />
        </linearGradient>

        {/* Golden eyes */}
        <radialGradient id="goldenEye" cx="40%" cy="40%" r="60%">
          <stop offset="0%" style={{ stopColor: '#FFE55C', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 0.9 }} />
        </radialGradient>
      </defs>

      {/* LEFT WING - Spread wide with realistic feathers, ATTACHED TO BODY */}
      <g className="origin-[58px_55px] animate-[flapLeft_2.5s_ease-in-out_infinite]" style={{ transformBox: 'fill-box' }}>
        {/* Wing silhouette - connects to body at shoulder */}
        <path
          d="M62 58 L50 50 Q40 45 30 40 Q20 35 12 30 Q18 45 25 55 Q32 65 42 72 Q50 68 58 62 Z"
          fill="url(#featherGrad)"
          opacity="0.95"
        />

        {/* Primary flight feathers - distinct, angular */}
        <path d="M12 30 L16 33 L20 45 L17 42 Z" fill="#F0F0F0" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M16 33 L20 36 L24 48 L20 45 Z" fill="#F4F4F4" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M20 36 L25 39 L30 52 L24 48 Z" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M25 39 L32 42 L38 56 L30 52 Z" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />

        {/* Secondary feathers - closer to body */}
        <path d="M38 48 L44 52 L48 64 L42 60 Z" fill="#FCFCFC" stroke="#E8E8E8" strokeWidth="0.5" opacity="0.85" />
        <path d="M44 52 L52 56 L56 66 L48 64 Z" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="0.5" opacity="0.85" />

        {/* Subtle feather markings */}
        <g opacity="0.12">
          <circle cx="20" cy="38" r="1" fill="#2A2A2A" />
          <circle cx="30" cy="45" r="0.8" fill="#2A2A2A" />
          <circle cx="42" cy="54" r="1" fill="#2A2A2A" />
        </g>
      </g>

      {/* RIGHT WING - Spread wide with realistic feathers, ATTACHED TO BODY */}
      <g className="origin-[82px_55px] animate-[flapRight_2.5s_ease-in-out_infinite]" style={{ transformBox: 'fill-box' }}>
        {/* Wing silhouette - connects to body at shoulder */}
        <path
          d="M78 58 L90 50 Q100 45 110 40 Q120 35 128 30 Q122 45 115 55 Q108 65 98 72 Q90 68 82 62 Z"
          fill="url(#featherGrad)"
          opacity="0.95"
        />

        {/* Primary flight feathers - distinct, angular */}
        <path d="M128 30 L124 33 L120 45 L123 42 Z" fill="#F0F0F0" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M124 33 L120 36 L116 48 L120 45 Z" fill="#F4F4F4" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M120 36 L115 39 L110 52 L116 48 Z" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />
        <path d="M115 39 L108 42 L102 56 L110 52 Z" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.9" />

        {/* Secondary feathers - closer to body */}
        <path d="M102 48 L96 52 L92 64 L98 60 Z" fill="#FCFCFC" stroke="#E8E8E8" strokeWidth="0.5" opacity="0.85" />
        <path d="M96 52 L88 56 L84 66 L92 64 Z" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="0.5" opacity="0.85" />

        {/* Subtle feather markings */}
        <g opacity="0.12">
          <circle cx="120" cy="38" r="1" fill="#2A2A2A" />
          <circle cx="110" cy="45" r="0.8" fill="#2A2A2A" />
          <circle cx="98" cy="54" r="1" fill="#2A2A2A" />
        </g>
      </g>

      {/* BODY - Natural bird shape, not egg-like */}
      <g className="animate-[float_3s_ease-in-out_infinite]">
        {/* Main body - teardrop/bird shape */}
        <path
          d="M70 45 Q65 50 62 58 Q60 65 60 72 Q60 78 65 82 Q70 85 70 85 Q70 85 75 82 Q80 78 80 72 Q80 65 78 58 Q75 50 70 45 Z"
          fill="url(#snowyBody)"
        />

        {/* Chest feathers - lighter */}
        <path
          d="M70 55 Q67 60 66 67 Q65 72 68 76 Q70 78 70 78 Q70 78 72 76 Q75 72 74 67 Q73 60 70 55 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />

        {/* Head - round but proportional */}
        <circle cx="70" cy="38" r="16" fill="url(#snowyBody)" />

        {/* Facial disc - heart-shaped characteristic of owls */}
        <path
          d="M70 32 Q62 34 58 40 Q56 44 58 48 Q62 52 70 52 Q78 52 82 48 Q84 44 82 40 Q78 34 70 32 Z"
          fill="#FAFAFA"
          opacity="0.7"
        />

        {/* Eyes - large, golden, intense */}
        <g className="eyes">
          {/* Left eye */}
          <circle cx="64" cy="38" r="5.5" fill="url(#goldenEye)" />
          <circle cx="64" cy="38" r="2.5" fill="#1A1A1A" className="animate-[blink_4.5s_ease-in-out_infinite]" />
          <circle cx="65" cy="36.5" r="1.5" fill="#FFFFFF" opacity="0.95" />

          {/* Right eye */}
          <circle cx="76" cy="38" r="5.5" fill="url(#goldenEye)" />
          <circle cx="76" cy="38" r="2.5" fill="#1A1A1A" className="animate-[blink_4.5s_ease-in-out_infinite]" />
          <circle cx="77" cy="36.5" r="1.5" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Beak - hooked, small, dark */}
        <path d="M69 44 L70 48 L71 44 Q70 43 69 44 Z" fill="#3A3A3A" />

        {/* Subtle feather patterns - characteristic snowy owl spots */}
        <g opacity="0.15">
          <circle cx="60" cy="48" r="1.5" fill="#2A2A2A" />
          <circle cx="80" cy="48" r="1.5" fill="#2A2A2A" />
          <circle cx="58" cy="42" r="1" fill="#2A2A2A" />
          <circle cx="82" cy="42" r="1" fill="#2A2A2A" />
          <circle cx="64" cy="65" r="1.2" fill="#2A2A2A" />
          <circle cx="76" cy="65" r="1.2" fill="#2A2A2A" />
          <circle cx="62" cy="75" r="1" fill="#2A2A2A" />
          <circle cx="78" cy="75" r="1" fill="#2A2A2A" />
        </g>

        {/* Tail feathers - spread in flight */}
        <g opacity="0.9">
          <path d="M65 84 L63 92 L66 90 Z" fill="#F0F0F0" stroke="#E0E0E0" strokeWidth="0.5" />
          <path d="M68 85 L67 94 L70 92 Z" fill="#F4F4F4" stroke="#E0E0E0" strokeWidth="0.5" />
          <path d="M72 85 L73 94 L70 92 Z" fill="#F4F4F4" stroke="#E0E0E0" strokeWidth="0.5" />
          <path d="M75 84 L77 92 L74 90 Z" fill="#F0F0F0" stroke="#E0E0E0" strokeWidth="0.5" />
        </g>
      </g>

      {/* LETTER IN TALONS - Hogwarts acceptance letter */}
      <g className="animate-[sway_2.5s_ease-in-out_infinite]" style={{ transformOrigin: '70px 100px' }}>
        {/* Parchment scroll */}
        <rect x="62" y="95" width="16" height="22" rx="2" fill="#F4E4C1" stroke="#D4C5A0" strokeWidth="1" />

        {/* Scroll rolled edges */}
        <ellipse cx="70" cy="94" rx="8" ry="2" fill="#E8D5B0" />
        <ellipse cx="70" cy="118" rx="8" ry="2" fill="#E8D5B0" />

        {/* Red wax seal - Hogwarts H */}
        <circle cx="70" cy="106" r="3.5" fill="#DC143C" opacity="0.95" />
        <circle cx="70" cy="106" r="3" fill="#B91226" opacity="0.6" />
        <text x="70" y="108.5" fontSize="5" fontWeight="bold" fill="#8B0000" textAnchor="middle" opacity="0.4">H</text>

        {/* Address lines */}
        <line x1="65" y1="99" x2="75" y2="99" stroke="#8B7355" strokeWidth="0.5" opacity="0.5" />
        <line x1="65" y1="102" x2="75" y2="102" stroke="#8B7355" strokeWidth="0.5" opacity="0.5" />
        <line x1="65" y1="111" x2="75" y2="111" stroke="#8B7355" strokeWidth="0.5" opacity="0.4" />
        <line x1="65" y1="114" x2="75" y2="114" stroke="#8B7355" strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* Talons gripping the letter - realistic bird feet */}
      <g fill="none" stroke="#3A3A3A" strokeWidth="1.8" strokeLinecap="round" opacity="0.75">
        <path d="M66 93 L64 95" />
        <path d="M68 93 L67 95" />
        <path d="M70 93 L70 96" />
        <path d="M72 93 L73 95" />
        <path d="M74 93 L76 95" />
      </g>

      {/* Magical sparkles - subtle and elegant */}
      <g className="sparkles">
        <circle cx="20" cy="30" r="1.5" fill="#FFD700" opacity="0" className="animate-[sparkle_3s_ease-in-out_infinite]" />
        <circle cx="120" cy="35" r="1.2" fill="#FFE55C" opacity="0" className="animate-[sparkle_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <circle cx="70" cy="15" r="1" fill="#FFF4CC" opacity="0" className="animate-[sparkle_3s_ease-in-out_infinite]" style={{ animationDelay: '1.8s' }} />
        <circle cx="40" cy="80" r="1.2" fill="#FFD700" opacity="0" className="animate-[sparkle_3s_ease-in-out_infinite]" style={{ animationDelay: '2.4s' }} />
        <circle cx="100" cy="80" r="1" fill="#FFE55C" opacity="0" className="animate-[sparkle_3s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
      </g>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes flapLeft {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(-35deg); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotate(5deg); }
          50% { transform: rotate(35deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 47%, 53%, 100% { opacity: 1; }
          50% { opacity: 0.1; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.9; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </svg>
  );
}
