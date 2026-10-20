import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// The site-wide Open Graph fields, set by the root layout. Next merges
// metadata shallowly, so a page that sets `openGraph` replaces the layout's
// whole object: every page sets its own title, description, url and image,
// and pages with no picture of their own use these `images`. There is no url
// here: a layout's og:url is inherited by every page that does not set one,
// which told crawlers every page was the home page.
export const SITE_OPEN_GRAPH = {
  type: "website",
  locale: "en_GB",
  siteName: SITE_NAME,
  title: "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
  description:
    "The definitive guide to London's luxury nightlife. Expert reviews of Mayfair's most exclusive clubs, VIP table booking, and insider tips for an unforgettable night out.",
  images: [
    {
      url: `${SITE_URL}/gallery/images/fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg`,
      alt: "Luxury nightclub interior in Mayfair, London",
    },
  ],
} satisfies Metadata["openGraph"];

// The layout's title.template appends " | London Luxury Nightlife" (26
// characters) to every page title. Google cuts titles off at about 60
// characters, so the site name is added only when the whole title still fits;
// otherwise the page's own title (its "body") stands alone. Pass the body
// without the site name.
export const TITLE_SUFFIX = ` | ${SITE_NAME}`;
export const MAX_TITLE_LENGTH = 60;

export function fitTitle(body: string): string | { absolute: string } {
  return body.length + TITLE_SUFFIX.length <= MAX_TITLE_LENGTH ? body : { absolute: body };
}
