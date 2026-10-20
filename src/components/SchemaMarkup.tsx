import { SITE_URL, SITE_NAME, TABLE_NUMBER } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/gallery/images/fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg`,
  description: "Independent editorial authority on London's luxury nightlife. Every venue visited, no pay-to-play.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mayfair",
    addressLocality: "London",
    postalCode: "W1K",
    addressRegion: "Greater London",
    addressCountry: "GB",
  },
};

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished = "2025-01-15",
  dateModified = "2026-03-25",
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${slug}`,
    datePublished,
    dateModified,
    author: ORGANIZATION,
    publisher: ORGANIZATION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * A club page's venue as a schema.org NightClub. `alternateName` carries a
 * former name (a renamed club), so searches for the old name meet the venue.
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
  alternateName?: string;
  /** The page path, e.g. "/clubs/99-regent-street". */
  slug: string;
  description: string;
  image?: string;
  streetAddress: string;
  postalCode: string;
  /** schema.org openingHours, e.g. "We-Sa 23:00-04:00". */
  openingHours: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: `${SITE_URL}${slug}`,
    ...(image ? { image: image.startsWith("/") ? `${SITE_URL}${image}` : image } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: "London",
      postalCode,
      addressCountry: "GB",
    },
    openingHours,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: "London's premier luxury nightlife concierge and guide. Expert recommendations for VIP table bookings, exclusive clubs, and luxury evenings in Mayfair and beyond.",
    url: SITE_URL,
    image: `${SITE_URL}/gallery/images/fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg`,
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mayfair",
      addressLocality: "London",
      postalCode: "W1K",
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    priceRange: "£££",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "The definitive insider's guide to London's luxury nightlife. Expert reviews of exclusive Mayfair clubs, VIP experiences, and premium nightlife for discerning visitors.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
