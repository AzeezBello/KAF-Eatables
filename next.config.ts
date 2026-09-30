import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // No source maps or framework fingerprint in production responses.
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Keep Turbopack scoped to this repo even if a stray lockfile exists higher up.
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
