import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /results (the Contractor Win-Logs page) was removed. It was indexed and
  // linked from the nav, so it redirects rather than 404s.
  redirects: async () => [
    { source: "/results", destination: "/", permanent: true },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
