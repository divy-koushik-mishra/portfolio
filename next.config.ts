import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/under-construction",
        permanent: false
      },
      {
        source: "/projects",
        destination: "/under-construction",
        permanent: false
      },
      {
        source: "/blogs/:slug",
        destination: "/under-construction",
        permanent: false
      }
    ]
  },
};

export default nextConfig;
