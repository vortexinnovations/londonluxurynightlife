import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
