import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: true,
  images: {
    // Use Vercel's image optimization
    domains: ['themoonexports.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Stable optimizations only
  experimental: {
    optimizeServerReact: true,
  },
  // Enhance SEO and performance
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
};

export default nextConfig;
