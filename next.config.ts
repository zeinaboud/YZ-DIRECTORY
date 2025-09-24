// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignorBuildErrors:true
  },
  eslint: { ignoreDuringBuilda: true },
   experimental: {
    turbo: false, // disable Turbopack for production
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // add this
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
