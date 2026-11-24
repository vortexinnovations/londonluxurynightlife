import { safeJsonLd } from "@/lib/safe-output";
import { SITE_URL, SITE_NAME, TABLE_NUMBER } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";
import { PAGE_DATES } from "@/lib/page-dates";

// The site itself: a booking service with no premises of its own, so an
// Organization (not a LocalBusiness) and never an address. No FAQPage,
// HowTo, speakable or SearchAction markup: FAQ rich results ended in May
// 2026, HowTo and the sitelinks search box are retired, and speakable is
// only for news publishers. The visible FAQ sections stay on the pages.

/** The site's Organization, as the publisher of every page. */
export const ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
};

/** Every page is credited to the team; "How we write" is on the about page. */
export const AUTHOR = {
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/about`,
};

/** The full Organization node: the site-wide block and the about page's `about`. */
export function organizationNode() {
  return {
    ...ORGANIZATION,
    image: `${SITE_URL}/gallery/images/fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg`,
    description:
      "London nightlife booking team: VIP tables and guestlist places at London's luxury clubs, arranged on WhatsApp, with guides to the clubs we book.",
    telephone: `+${TABLE_NUMBER}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${TABLE_NUMBER}`,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
        url: `${SITE_URL}/contact`,
      },
    ],
    areaServed: {
      "@type": "City",
      name: "London",
    },
  };
}

/** A page's stored dates: code pages in lib/page-dates.ts, the original blog posts in lib/blog-data.ts. */
function storedDates(slug: string): { published?: string; modified?: string } {
  const page = PAGE_DATES[slug];
  if (page) return page;
  const post = slug.startsWith("/blog/") ? blogPosts.find((p) => `/blog/${p.slug}` === slug) : undefined;
  return post ? { published: post.publishDate, modified: post.modifiedDate } : {};
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  /** Only where the page states its own dates; otherwise the stored ones. Never a default. */
  datePublished?: string;
  dateModified?: string;
}) {
  const stored = storedDates(slug);
  const published = datePublished ?? stored.published;
  const modified = dateModified ?? stored.modified;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${slug}`,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: AUTHOR,
    publisher: ORGANIZATION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

/**
 * A club page's venue: the NightClub is what our page is about, so the page
 * (not the club) carries our URL; the club's own website is never given.
 * `alternateName` carries a former name (a renamed club), so searches for the
 * old name meet the venue. Opening hours only where the closing time is
 * confirmed: an hours entry without one is left out.
 */
export function NightClubSchema({
  name,
  alternateName,
  slug,
  description,
  image,
  streetAddress,
  postalCode,
  openingHours,
}: {
  name: string;
  alternateName?: string | string[];
  /** The page path, e.g. "/clubs/99-regent-street". */
  slug: string;
  description: string;
  image?: string;
  streetAddress: string;
  postalCode: string;
  /** schema.org openingHours, e.g. "We-Sa 23:00-04:00". */
  openingHours?: string;
}) {
  const pageUrl = `${SITE_URL}${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    about: {
      "@type": "NightClub",
      name,
      ...(alternateName ? { alternateName } : {}),
      description,
      ...(image ? { image: image.startsWith("/") ? `${SITE_URL}${image}` : image } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality: "London",
        postalCode,
        addressCountry: "GB",
      },
      ...(openingHours ? { openingHours } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    ...organizationNode(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Guides to London's luxury nightlife and the exclusive clubs of Mayfair, from a booking team that arranges VIP tables and guestlist places.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

export function SiteNavigationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    url: SITE_URL,
    hasPart: [
      { "@type": "WebPage", name: "Luxury Clubs", url: `${SITE_URL}/luxury-nightclubs-london` },
      { "@type": "WebPage", name: "Nightlife Guide", url: `${SITE_URL}/london-nightlife-guide` },
      { "@type": "WebPage", name: "Celebrity Clubs", url: `${SITE_URL}/celebrity-nightclubs-london` },
      { "@type": "WebPage", name: "Blog", url: `${SITE_URL}/blog` },
      { "@type": "WebPage", name: "Plan Your Night", url: `${SITE_URL}/contact` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
