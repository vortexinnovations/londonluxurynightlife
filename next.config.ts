import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/clubs/the-london-reign",
        destination: "/clubs/reign-london",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
