import type { MetadataRoute } from "next";
import { clubs } from "@/lib/constants";

const BASE_URL = "https://londonluxurynightlife.com";

const guideSlugs = [
  "complete-guide-london-luxury-nightlife",
  "celebrity-clubs-london",
  "corporate-entertainment-london",
  "dinner-and-nightclub-london",
  "london-nightlife-international-visitors",
  "what-to-wear-london-clubs",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const clubPages: MetadataRoute.Sitemap = clubs.map((club) => ({
    url: `${BASE_URL}/clubs/${club.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...clubPages,
    ...guidePages,
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
