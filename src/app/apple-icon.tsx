import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0A1128',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Moon glow */}
        <div
          style={{
            position: 'absolute',
            width: '160px',
            height: '160px',
            background: 'radial-gradient(circle, rgba(244, 227, 181, 0.3) 0%, transparent 70%)',
          }}
        />

        {/* Crescent Moon */}
        <svg width="140" height="140" viewBox="0 0 140 140">
          <defs>
            <linearGradient id="moon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FAFAFA' }} />
              <stop offset="50%" style={{ stopColor: '#E8E4E4' }} />
              <stop offset="100%" style={{ stopColor: '#D4AF37' }} />
            </linearGradient>
            <linearGradient id="arrow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4FD1C5' }} />
              <stop offset="100%" style={{ stopColor: '#2C7A7B' }} />
            </linearGradient>
          </defs>

          {/* Moon shape */}
          <path
            d="M 70 15 A 55 55 0 1 1 70 125 A 45 45 0 1 0 70 15 Z"
            fill="url(#moon)"
            stroke="#D4AF37"
            strokeWidth="2"
          />

          {/* Avatar arrow */}
          <path
            d="M 70 35 L 55 55 L 63 55 L 63 105 L 77 105 L 77 55 L 85 55 Z"
            fill="url(#arrow)"
            stroke="#2C7A7B"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
