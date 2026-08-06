import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow testing the local dev server from a phone on the same Wi‑Fi
  allowedDevOrigins: ["192.168.8.126"],
};

export default nextConfig;
