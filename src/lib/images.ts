/**
 * Image mapping for all pages.
 * All paths are proxied through /gallery/images/ → Supabase bucket.
 * NEVER use the raw Supabase URL in components.
 */

const img = (filename: string) => `/gallery/images/${filename}`;

// ── Homepage ────────────────────────────────────────────────────────
export const HOME_IMAGES = {
  hero: img("DSC_7400.jpg"),
  editorial: img("DSC_7612.jpg"),
  ctaBackground: img("DSC_8282.jpg"),
};

// ── Club page hero images ───────────────────────────────────────────
export const CLUB_IMAGES: Record<string, { hero: string; inline: string[] }> = {
  "tape-london": {
    hero: img("DSC_6873.jpg"),
    inline: [img("DSC_6899.jpg"), img("DSC_6920.jpg")],
  },
  "cirque-le-soir": {
    hero: img("DSC_7056.jpg"),
    inline: [img("DSC_7066.jpg"), img("DSC_7081.jpg")],
  },
  "reign-london": {
    hero: img("DSC_7154.jpg"),
    inline: [img("DSC_7164.jpg"), img("DSC_7176.jpg")],
  },
  "tabu-london": {
    hero: img("DSC_7230.jpg"),
    inline: [img("DSC_7252.jpg"), img("DSC_7260.jpg")],
  },
  "funky-buddha": {
    hero: img("DSC_7331.jpg"),
    inline: [img("DSC_7341.jpg"), img("DSC_7350.jpg")],
  },
  "cuckoo-club": {
    hero: img("DSC_7399.jpg"),
    inline: [img("DSC_7404.jpg"), img("DSC_7420.jpg")],
  },
  "scotch-of-st-james": {
    hero: img("DSC_7447.jpg"),
    inline: [img("DSC_7453.jpg"), img("DSC_7457.jpg")],
  },
  "dear-darling": {
    hero: img("DSC_7507.jpg"),
    inline: [img("DSC_7511.jpg"), img("DSC_7537.jpg")],
  },
  maddox: {
    hero: img("DSC_7610.jpg"),
    inline: [img("DSC_7611.jpg"), img("DSC_7616.jpg")],
  },
  "the-box-london": {
    hero: img("DSC_7671.jpg"),
    inline: [img("DSC_7676.jpg"), img("DSC_7679.jpg")],
  },
  "luna-club-london": {
    hero: img("DSC_7715.jpg"),
    inline: [img("DSC_7717.jpg"), img("DSC_7737.jpg")],
  },
  "selene-london": {
    hero: img("DSC_7767.jpg"),
    inline: [img("DSC_7787.jpg"), img("DSC_7810.jpg")],
  },
  "beat-london": {
    hero: img("DSC_7821.jpg"),
    inline: [img("DSC_7828.jpg"), img("DSC_7830.jpg")],
  },
  // Closed clubs
  libertine: {
    hero: img("DSC_7852.jpg"),
    inline: [img("DSC_7854.jpg")],
  },
  "luxx-club-london": {
    hero: img("DSC_7860.jpg"),
    inline: [img("DSC_7863.jpg")],
  },
  "lio-club-london": {
    hero: img("DSC_7877.jpg"),
    inline: [img("DSC_7884.jpg")],
  },
  "ministry-of-sound": {
    hero: img("DSC_7900.jpg"),
    inline: [img("DSC_7916.jpg")],
  },
};

// ── Club card thumbnails (for homepage grid + listings) ─────────────
export const CLUB_THUMBNAILS: Record<string, string> = {
  "tape-london": img("DSC_6882.jpg"),
  "cirque-le-soir": img("DSC_7058.jpg"),
  "reign-london": img("DSC_7155.jpg"),
  "tabu-london": img("DSC_7257.jpg"),
  "funky-buddha": img("DSC_7333.jpg"),
  "cuckoo-club": img("DSC_7422.jpg"),
  "scotch-of-st-james": img("DSC_7454.jpg"),
  "dear-darling": img("DSC_7496.jpg"),
  maddox: img("DSC_7613.jpg"),
  "the-box-london": img("DSC_7672.jpg"),
  "luna-club-london": img("DSC_7740.jpg"),
  "selene-london": img("DSC_7812.jpg"),
  "beat-london": img("DSC_7823.jpg"),
};

// ── Guide / editorial page hero images ──────────────────────────────
export const GUIDE_IMAGES: Record<string, string> = {
  // Guides section
  "complete-guide-london-luxury-nightlife": img("DSC_7940.jpg"),
  "celebrity-clubs-london": img("DSC_7942.jpg"),
  "corporate-entertainment-london": img("DSC_7943.jpg"),
  "dinner-and-nightclub-london": img("DSC_7952.jpg"),
  "london-nightlife-international-visitors": img("DSC_7984.jpg"),
  // Pillar pages
  "luxury-nightclubs-london": img("DSC_7988.jpg"),
  "exclusive-clubs-london": img("DSC_7990.jpg"),
  "vip-nightlife-london": img("DSC_7993.jpg"),
  "celebrity-nightclubs-london": img("DSC_7995.jpg"),
  "london-nightlife-guide": img("DSC_7999.jpg"),
  "how-to-get-into-tape-london": img("DSC_8000.jpg"),
  // Editorial pages
  "london-club-dress-code-guide": img("DSC_8002.jpg"),
  "guestlist-vs-table-booking-london": img("DSC_8017.jpg"),
  "how-london-nightclub-door-policy-works": img("DSC_8026.jpg"),
  "best-hip-hop-clubs-london": img("DSC_8129.jpg"),
  "best-house-music-clubs-london": img("DSC_8155.jpg"),
  "best-nightclubs-for-high-spenders-london": img("DSC_8160.jpg"),
  "how-to-plan-a-luxury-night-out-in-london": img("DSC_8163.jpg"),
  "romantic-nightlife-london-couples": img("DSC_8169.jpg"),
  "london-vs-dubai-nightlife": img("DSC_8179.jpg"),
  "london-vs-new-york-nightlife": img("DSC_6749.jpg"),
  "london-vs-paris-nightlife": img("DSC_6754.jpg"),
  // Utility
  about: img("DSC_6755.jpg"),
  contact: img("DSC_6757.jpg"),
};

// ── Blog post featured images ───────────────────────────────────────
export const BLOG_IMAGES: Record<string, string> = {
  "how-much-does-night-out-mayfair-cost": img("DSC_6763.jpg"),
  "bottle-service-london-explained": img("DSC_6767.jpg"),
  "new-years-eve-london-luxury-guide": img("DSC_6773.jpg"),
  "birthday-night-out-london-planning-guide": img("DSC_6776.jpg"),
  "best-clubs-london-large-groups": img("DSC_6780.jpg"),
  "mayfair-vs-shoreditch-nightlife-compared": img("DSC_6795.jpg"),
  "saturday-night-mayfair-guide": img("DSC_6797.jpg"),
  "london-late-night-venues-open-past-3am": img("DSC_6800.jpg"),
  "london-nightlife-2025-whats-new": img("DSC_6802.jpg"),
  "funky-buddha-london-review": img("DSC_6808.jpg"),
  "the-box-london-what-to-expect": img("DSC_6810.jpg"),
  "best-clubs-mayfair-complete-ranking": img("DSC_6820.jpg"),
  "reign-london-showclub-experience": img("DSC_6827.jpg"),
  "scotch-of-st-james-history-legacy": img("DSC_6830.jpg"),
  "dear-darling-maddox-cocktail-clubs-mayfair": img("DSC_6837.jpg"),
  "tape-london-inside-mayfairs-most-exclusive-club": img("DSC_6847.jpg"),
  "cirque-le-soir-circus-nightclub-london": img("DSC_6848.jpg"),
  "tabu-london-japanese-underground-nightclub": img("DSC_6849.jpg"),
  "cuckoo-club-mayfair-two-floors-one-night": img("DSC_6852.jpg"),
  "beat-london-sound-system-fitzrovia": img("DSC_6868.jpg"),
  "luna-selene-new-mayfair-clubs-2025": img("DSC_6874.jpg"),
};

// ── Section break / atmospheric images ──────────────────────────────
export const SECTION_IMAGES = {
  neonLights: img("DSC_6890.jpg"),
  danceFloor: img("DSC_6892.jpg"),
  vipArea: img("DSC_6895.jpg"),
  djBooth: img("DSC_6902.jpg"),
  champagne: img("DSC_6903.jpg"),
  entrance: img("DSC_6910.jpg"),
  crowd: img("DSC_6919.jpg"),
  bottles: img("DSC_6922.jpg"),
  interior: img("DSC_6929.jpg"),
  lighting: img("DSC_6930.jpg"),
};
