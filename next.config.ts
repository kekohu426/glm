import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bigmodel.cn",
      },
    ],
  },
};

export default nextConfig;
