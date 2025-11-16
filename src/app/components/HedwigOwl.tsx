'use client';

import React from "react";

export function HedwigOwl() {
  return (
    <div
      className="relative mx-auto h-52 w-52 sm:h-60 sm:w-60"
      aria-label="Animated snowy owl carrying a letter"
      role="img"
    >
      <svg
        viewBox="0 0 260 260"
        className="w-full h-full owl-float"
      >
        {/* Soft glow behind owl */}
        <defs>
          <radialGradient id="owlGlow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FDF8E4" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F1E3B8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0B1024" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="owlWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7FAFC" />
            <stop offset="100%" stopColor="#D3D8E6" />
          </linearGradient>
          <linearGradient id="owlBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D7DEEE" />
          </linearGradient>
          <linearGradient id="waxSeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C53030" />
            <stop offset="100%" stopColor="#7B1E1E" />
          </linearGradient>
        </defs>

        {/* Background glow */}
        <circle cx="130" cy="115" r="110" fill="url(#owlGlow)" />

        {/* Left wing */}
        <g className="owl-wing owl-wing-left">
          <path
            d="M45 125 C25 105 22 80 40 65 C65 45 105 55 125 70 C110 85 95 105 82 135 Z"
            fill="url(#owlWing)"
            stroke="#C4CCDD"
            strokeWidth="2"
          />
          {/* Feather markings */}
          <path
            d="M52 100 C60 95 68 95 76 98"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M52 112 C60 108 69 108 77 111"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>

        {/* Right wing */}
        <g className="owl-wing owl-wing-right">
          <path
            d="M215 125 C235 105 238 80 220 65 C195 45 155 55 135 70 C150 85 165 105 178 135 Z"
            fill="url(#owlWing)"
            stroke="#C4CCDD"
            strokeWidth="2"
          />
          {/* Feather markings */}
          <path
            d="M204 100 C196 95 188 95 180 98"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M204 112 C196 108 187 108 179 111"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>

        {/* Body */}
        <g>
          <ellipse
            cx="130"
            cy="145"
            rx="52"
            ry="64"
            fill="url(#owlBody)"
            stroke="#C4CCDD"
            strokeWidth="2"
          />
          {/* Chest speckles */}
          {[
            [118, 130],
            [142, 132],
            [124, 144],
            [136, 148],
            [120, 158],
            [140, 160],
          ].map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={2.3}
              fill="#A0AEC0"
              opacity="0.7"
            />
          ))}
        </g>

        {/* Head */}
        <g>
          <circle
            cx="130"
            cy="102"
            r="38"
            fill="url(#owlBody)"
            stroke="#C4CCDD"
            strokeWidth="2"
          />

          {/* Eyes */}
          <g className="owl-eyes">
            <circle cx="112" cy="100" r="8.5" fill="#1A202C" />
            <circle cx="148" cy="100" r="8.5" fill="#1A202C" />
            {/* Golden iris rings */}
            <circle
              cx="112"
              cy="100"
              r="11"
              stroke="#ECC94B"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="148"
              cy="100"
              r="11"
              stroke="#ECC94B"
              strokeWidth="2"
              fill="none"
            />
            {/* Eye highlights */}
            <circle cx="109" cy="97" r="2.2" fill="#EDF2F7" />
            <circle cx="145" cy="97" r="2.2" fill="#EDF2F7" />
          </g>

          {/* Face mask */}
          <path
            d="M108 96 C114 88 122 84 130 84 C138 84 146 88 152 96 C146 101 138 104 130 104 C122 104 114 101 108 96 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />

          {/* Beak base */}
          <path
            d="M122 108 L130 122 L138 108"
            fill="#2D3748"
          />
        </g>

        {/* Letter in beak */}
        <g className="owl-letter">
          {/* Envelope */}
          <rect
            x="104"
            y="123"
            width="52"
            height="32"
            rx="3"
            fill="#F7FAFC"
            stroke="#CBD5E0"
            strokeWidth="2"
          />
          {/* Envelope flap */}
          <path
            d="M104 123 L130 140 L156 123"
            fill="#E2E8F0"
          />

          {/* Wax seal */}
          <circle cx="130" cy="140" r="6.5" fill="url(#waxSeal)" />
          <circle
            cx="130"
            cy="140"
            r="3"
            fill="#F6E0B3"
            opacity="0.9"
          />

          {/* Subtle Hogwarts-style hint (no logo) */}
          <path
            d="M123 132 L130 136 L137 132"
            stroke="#A0AEC0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* Little tail feathers */}
        <g>
          <path
            d="M118 198 C119 208 122 214 126 220"
            stroke="#A0AEC0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M130 199 C131 210 132 216 134 222"
            stroke="#A0AEC0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M142 198 C141 208 138 214 134 220"
            stroke="#A0AEC0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default HedwigOwl;
