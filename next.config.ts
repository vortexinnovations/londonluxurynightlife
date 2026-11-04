import type { NextConfig } from "next";

// Enforced: these cannot block a page's own scripts, images or forms.
const CSP = "frame-ancestors 'self'; base-uri 'self'; object-src 'none'";
// Watch only, nothing is blocked: browsers log what a full policy would stop.
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com https://www.google.com https://maps.google.com",
  "media-src 'self' https:",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: CSP },
          { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
        ],
      },
    ];
  },
  experimental: {
    inlineCss: true,
  },
  async rewrites() {
    return [
      {
        source: "/gallery/images/:path*",
        destination:
          "https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/public/gallery/:path*",
      },
    ];
  },
  async redirects() {
    return [
      // Legacy rename
      {
        source: "/clubs/the-london-reign",
        destination: "/clubs/reign-london",
        permanent: true,
      },
      // Renamed venues (October 2026): the old club pages move to the new
      // names' pages. Markdown renditions use the same URLs (content
      // negotiation in src/proxy.ts runs after these redirects).
      {
        source: "/clubs/cuckoo-club",
        destination: "/clubs/99-regent-street",
        permanent: true,
      },
      {
        source: "/clubs/tabu-london",
        destination: "/clubs/rumour-london",
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
