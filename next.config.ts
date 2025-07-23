import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "https://5jdfg3-3000.csb.app",
  ],
};

export default nextConfig;
