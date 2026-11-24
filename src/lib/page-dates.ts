/**
 * The real dates of the site's code pages (src/app), read by their Article
 * markup (components/SchemaMarkup.tsx) and by the sitemap.
 *
 * - `published`: the day the page went live. The domain went live on
 *   25 March 2026, so no page is older than that; otherwise it is the day the
 *   page's file was first committed.
 * - `modified`: the day of the page's last substantial change, only where one
 *   was recorded. Leave it out when unknown: no date is better than a made-up
 *   one. Set it when you rewrite a page, never for small fixes.
 *
 * Blog posts carry their own dates (lib/blog-data.ts for the original posts,
 * the database for content-API posts).
 */
export type PageDates = { published: string; modified?: string };

const LAUNCH = "2026-03-25";

export const PAGE_DATES: Record<string, PageDates> = {
  "/about": { published: LAUNCH, modified: "2026-11-24" },

  "/luxury-nightclubs-london": { published: LAUNCH },
  "/london-nightlife-guide": { published: LAUNCH },
  "/celebrity-nightclubs-london": { published: LAUNCH },
  "/how-to-get-into-tape-london": { published: LAUNCH },
  "/exclusive-clubs-london": { published: LAUNCH },
  "/vip-nightlife-london": { published: LAUNCH },
  "/london-club-dress-code-guide": { published: LAUNCH },
  "/guestlist-vs-table-booking-london": { published: LAUNCH },
  "/how-london-nightclub-door-policy-works": { published: LAUNCH },
  "/best-hip-hop-clubs-london": { published: LAUNCH },
  "/best-house-music-clubs-london": { published: LAUNCH },
  "/best-nightclubs-for-high-spenders-london": { published: LAUNCH },
  "/how-to-plan-a-luxury-night-out-in-london": { published: LAUNCH },
  "/romantic-nightlife-london-couples": { published: LAUNCH },
  "/london-vs-dubai-nightlife": { published: LAUNCH },
  "/london-vs-new-york-nightlife": { published: LAUNCH },
  "/london-vs-paris-nightlife": { published: LAUNCH },

  "/guides/complete-guide-london-luxury-nightlife": { published: LAUNCH },
  "/guides/celebrity-clubs-london": { published: LAUNCH },
  "/guides/corporate-entertainment-london": { published: LAUNCH },
  "/guides/dinner-and-nightclub-london": { published: LAUNCH },
  "/guides/london-nightlife-international-visitors": { published: LAUNCH },

  "/clubs/tape-london": { published: LAUNCH, modified: "2026-11-22" },
  "/clubs/cirque-le-soir": { published: LAUNCH },
  "/clubs/reign-london": { published: LAUNCH },
  "/clubs/rumour-london": { published: "2026-10-20", modified: "2026-10-23" },
  "/clubs/99-regent-street": { published: "2026-10-20", modified: "2026-10-20" },
  "/clubs/scotch-of-st-james": { published: LAUNCH },
  "/clubs/dear-darling": { published: LAUNCH },
  "/clubs/maddox": { published: LAUNCH },
  "/clubs/the-box-london": { published: LAUNCH },
  "/clubs/selene-london": { published: LAUNCH },
  "/clubs/luna-club-london": { published: "2026-10-22", modified: "2026-10-22" },
  "/clubs/beat-london": { published: LAUNCH },
  "/clubs/rex-rooms": { published: "2026-11-17", modified: "2026-11-17" },
  "/clubs/bisou-mayfair": { published: "2026-11-22", modified: "2026-11-22" },
  "/clubs/ministry-of-sound": { published: LAUNCH },
  "/clubs/funky-buddha": { published: LAUNCH },
  "/clubs/libertine": { published: LAUNCH },
  "/clubs/luxx-club-london": { published: LAUNCH },
  "/clubs/lio-club-london": { published: LAUNCH },
};
