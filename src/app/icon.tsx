import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
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
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(244, 227, 181, 0.3) 0%, transparent 70%)',
          }}
        />

        {/* Crescent Moon */}
        <div
          style={{
            position: 'absolute',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FAFAFA 0%, #E8E4E4 50%, #D4AF37 100%)',
            clipPath: 'path("M 13 2 A 11 11 0 1 1 13 24 A 9 9 0 1 0 13 2 Z")',
          }}
        />

        {/* Avatar Arrow */}
        <div
          style={{
            position: 'absolute',
            width: '8px',
            height: '18px',
            background: 'linear-gradient(180deg, #4FD1C5 0%, #2C7A7B 100%)',
            clipPath: 'polygon(50% 0%, 0% 30%, 35% 30%, 35% 100%, 65% 100%, 65% 30%, 100% 30%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
