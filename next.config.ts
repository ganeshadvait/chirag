import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxhospitals.com",
      },
      {
        protocol: "https",
        hostname: "test.luxhospitals.com",
      },
      {
        protocol: "https",
        hostname: "www.chiragglobalhospitals.com",
      },
    ],
  },
};

export default nextConfig;
