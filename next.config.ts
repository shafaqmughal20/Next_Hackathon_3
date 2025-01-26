import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's strict mode for better debugging
  swcMinify: true, // Enable SWC-based minification for faster builds
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds (optional)
  },
};

export default nextConfig;
