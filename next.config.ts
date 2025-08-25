import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r810983k-1337.euw.devtunnels.ms",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
