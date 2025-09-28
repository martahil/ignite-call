import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx',
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
