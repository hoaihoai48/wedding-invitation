import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow local public images (default)
    formats: ['image/webp'],
  },
};

export default nextConfig;
