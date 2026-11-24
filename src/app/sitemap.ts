import type { MetadataRoute } from "next";
import { clubs, closedClubs } from "@/lib/constants";
import { getListingPosts } from "@/lib/blog-data";
import { PAGE_DATES } from "@/lib/page-dates";

const BASE_URL = "https://londonluxurynightlife.com";

const guideSlugs = [
  "complete-guide-london-luxury-nightlife",
  "celebrity-clubs-london",
  "corporate-entertainment-london",
  "dinner-and-nightclub-london",
  "london-nightlife-international-visitors",
];

const pillarSlugs = [
  "luxury-nightclubs-london",
  "london-nightlife-guide",
  "celebrity-nightclubs-london",
  "how-to-get-into-tape-london",
  "exclusive-clubs-london",
  "vip-nightlife-london",
];

const editorialSlugs = [
  "london-club-dress-code-guide",
  "guestlist-vs-table-booking-london",
  "how-london-nightclub-door-policy-works",
  "best-hip-hop-clubs-london",
  "best-house-music-clubs-london",
  "best-nightclubs-for-high-spenders-london",
  "how-to-plan-a-luxury-night-out-in-london",
  "romantic-nightlife-london-couples",
  "london-vs-dubai-nightlife",
  "london-vs-new-york-nightlife",
  "london-vs-paris-nightlife",
];

// Rendered per request from a cached post list (marked stale on every
// content-API publish): on Vercel a prerendered sitemap is never refreshed.
export const dynamic = "force-dynamic";

// lastmod is a page's real last substantial change, never the request time:
// a code page's recorded date (lib/page-dates.ts), a post's own modified
// date. A page with no recorded date gets no lastmod.
const lastModified = (path: string) => {
  const modified = PAGE_DATES[path]?.modified;
  return modified ? { lastModified: modified } : {};
};

// Libertine (closed, Selene now operates in its place) is linked from no page
// and has no search impressions: left out until the owner decides whether it
// stays as its own page.
const SITEMAP_CLOSED_CLUBS = closedClubs.filter((club) => club.slug !== "libertine");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getListingPosts();
  const clubPages: MetadataRoute.Sitemap = clubs.map((club) => ({
    url: `${BASE_URL}/clubs/${club.slug}`,
    ...lastModified(`/clubs/${club.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Closed club pages kept for SEO but lower priority
  const closedClubPages: MetadataRoute.Sitemap = SITEMAP_CLOSED_CLUBS.map((club) => ({
    url: `${BASE_URL}/clubs/${club.slug}`,
    ...lastModified(`/clubs/${club.slug}`),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    ...lastModified(`/guides/${slug}`),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pillarPages: MetadataRoute.Sitemap = pillarSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    ...lastModified(`/${slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  const editorialPages: MetadataRoute.Sitemap = editorialSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    ...lastModified(`/${slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...pillarPages,
    ...editorialPages,
    ...clubPages,
    ...closedClubPages,
    ...guidePages,
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPages,
    {
      url: `${BASE_URL}/about`,
      ...lastModified("/about"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
