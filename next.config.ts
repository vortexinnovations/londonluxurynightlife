import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      // Legacy rename
      {
        source: "/clubs/the-london-reign",
        destination: "/clubs/reign-london",
        permanent: true,
      },
      // Fix 1: Celebrity cannibalization
      {
        source: "/where-celebrities-party-in-london",
        destination: "/celebrity-nightclubs-london",
        permanent: true,
      },
      // Fix 2: Dress code cannibalization
      {
        source: "/guides/what-to-wear-london-clubs",
        destination: "/london-club-dress-code-guide",
        permanent: true,
      },
      // Fix 3: Hip-hop clubs cannibalization
      {
        source: "/blog/best-clubs-london-hip-hop-rnb",
        destination: "/best-hip-hop-clubs-london",
        permanent: true,
      },
      // Fix 4: Venue guide consolidation → club review pages
      {
        source: "/tape-london-guide",
        destination: "/clubs/tape-london",
        permanent: true,
      },
      {
        source: "/cirque-le-soir-guide",
        destination: "/clubs/cirque-le-soir",
        permanent: true,
      },
      {
        source: "/reign-london-guide",
        destination: "/clubs/reign-london",
        permanent: true,
      },
      {
        source: "/selene-london-guide",
        destination: "/clubs/selene-london",
        permanent: true,
      },
      {
        source: "/maddox-club-guide",
        destination: "/clubs/maddox",
        permanent: true,
      },
      {
        source: "/the-box-london-guide",
        destination: "/clubs/the-box-london",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
