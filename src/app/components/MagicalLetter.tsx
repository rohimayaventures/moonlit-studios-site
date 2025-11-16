'use client';

import React from "react";

export function MagicalLetter() {
  return (
    <div
      className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40"
      aria-label="Animated magical letter"
      role="img"
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full magical-letter-float"
      >
        <defs>
          {/* Parchment gradient */}
          <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="50%" stopColor="#F4E4C1" />
            <stop offset="100%" stopColor="#E8D5B0" />
          </linearGradient>

          {/* Wax seal gradient */}
          <radialGradient id="waxGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DC143C" />
            <stop offset="60%" stopColor="#C41230" />
            <stop offset="100%" stopColor="#8B0000" />
          </radialGradient>

          {/* Golden glow */}
          <radialGradient id="goldenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Golden magical glow */}
        <circle cx="60" cy="60" r="45" fill="url(#goldenGlow)" className="magical-pulse" />

        {/* Envelope body */}
        <g className="magical-letter-bob">
          <rect
            x="25"
            y="40"
            width="70"
            height="50"
            rx="3"
            fill="url(#parchmentGrad)"
            stroke="#D4C5A0"
            strokeWidth="1.5"
          />

          {/* Envelope flap shadow */}
          <path
            d="M25 40 L60 65 L95 40"
            fill="#E8D5B0"
            opacity="0.4"
          />

          {/* Envelope flap */}
          <path
            d="M25 40 L60 65 L95 40 Z"
            fill="#FFF9E6"
            stroke="#D4C5A0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Address lines */}
          <line x1="35" y1="75" x2="70" y2="75" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
          <line x1="35" y1="80" x2="85" y2="80" stroke="#8B7355" strokeWidth="1" opacity="0.5" />

          {/* Red wax seal */}
          <g className="magical-seal-pulse">
            <circle cx="60" cy="65" r="9" fill="url(#waxGrad)" />
            <circle cx="60" cy="65" r="7" fill="#B91226" opacity="0.7" />

            {/* Hogwarts-style emblem (H) */}
            <text
              x="60"
              y="69"
              fontSize="8"
              fontWeight="bold"
              fill="#F6E0B3"
              textAnchor="middle"
              opacity="0.9"
            >
              H
            </text>
          </g>
        </g>

        {/* Magical sparkles */}
        <g className="magical-sparkles">
          <circle cx="20" cy="30" r="1.5" fill="#FFD700" opacity="0" className="sparkle-1" />
          <circle cx="100" cy="35" r="1.2" fill="#FFF4CC" opacity="0" className="sparkle-2" />
          <circle cx="30" cy="95" r="1" fill="#FFD700" opacity="0" className="sparkle-3" />
          <circle cx="90" cy="90" r="1.3" fill="#FFA500" opacity="0" className="sparkle-4" />
          <circle cx="60" cy="20" r="1.1" fill="#FFF4CC" opacity="0" className="sparkle-5" />
          <circle cx="15" cy="65" r="1.2" fill="#FFD700" opacity="0" className="sparkle-6" />
          <circle cx="105" cy="70" r="1" fill="#FFA500" opacity="0" className="sparkle-7" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes magicalFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }

        @keyframes letterBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes magicalPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes sealPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .magical-letter-float {
          animation: magicalFloat 4s ease-in-out infinite;
        }

        .magical-letter-bob {
          animation: letterBob 2.5s ease-in-out infinite;
          transform-origin: 60px 65px;
        }

        .magical-pulse {
          animation: magicalPulse 3s ease-in-out infinite;
        }

        .magical-seal-pulse {
          animation: sealPulse 2s ease-in-out infinite;
          transform-origin: 60px 65px;
        }

        .sparkle-1 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 0s; }
        .sparkle-2 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 0.4s; }
        .sparkle-3 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 0.8s; }
        .sparkle-4 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 1.2s; }
        .sparkle-5 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 1.6s; }
        .sparkle-6 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 2s; }
        .sparkle-7 { animation: sparkle 2.5s ease-in-out infinite; animation-delay: 2.4s; }
      `}</style>
    </div>
  );
}

export default MagicalLetter;
