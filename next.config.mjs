/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Vercel-optimized settings
  poweredByHeader: false,
  compress: true,

  // Image optimization for Vercel
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables that should be available client-side
  // (Vercel automatically handles NEXT_PUBLIC_ prefixed vars)
  env: {
    // Add any custom env vars here if needed
  },
};

export default nextConfig;
