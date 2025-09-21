import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Optional: Change output directory name (default is 'out')
  // distDir: 'dist',
};

export default nextConfig;

