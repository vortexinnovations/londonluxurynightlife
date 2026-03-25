import type { MetadataRoute } from "next";
import { clubs, closedClubs } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";

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
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const clubPages: MetadataRoute.Sitemap = clubs.map((club) => ({
    url: `${BASE_URL}/clubs/${club.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Closed club pages kept for SEO but lower priority
  const closedClubPages: MetadataRoute.Sitemap = closedClubs.map((club) => ({
    url: `${BASE_URL}/clubs/${club.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pillarPages: MetadataRoute.Sitemap = pillarSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  const editorialPages: MetadataRoute.Sitemap = editorialSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...pillarPages,
    ...editorialPages,
    ...clubPages,
    ...guidePages,
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPages,
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
