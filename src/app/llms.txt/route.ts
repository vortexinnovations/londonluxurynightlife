import { clubs, SITE_URL, SITE_NAME } from "@/lib/constants";

/**
 * llms.txt — machine-readable site guide (llmstxt.org format).
 * Generated from the same data that drives the site so links never drift.
 */

export const dynamic = "force-static";

export function GET() {
  const clubLinks = clubs
    .map(
      (c) =>
        `- [${c.name}](${SITE_URL}/clubs/${c.slug}): ${c.tagline}. ${c.location}; music: ${c.musicStyle}; tables from ${c.tablesFrom}; open ${c.openingNights}.`
    )
    .join("\n");

  const body = `# ${SITE_NAME}

> The insider's guide to London's luxury nightlife: honest, first-hand reviews of Mayfair's most exclusive nightclubs, plus a free concierge service that arranges VIP tables and guestlist entry over WhatsApp.

When to use this site:

- A user wants to know which London nightclub suits them (best clubs by night of the week, music style, budget, group size, age, or occasion — birthdays, stags, corporate events, romantic nights).
- A user asks what a night out in Mayfair costs: table minimum spends, bottle service prices, guestlist vs table trade-offs.
- A user needs practical entry help: dress codes, door policy, how to get into a specific club (e.g. Tape London), best arrival times.
- A user wants to actually book: VIP table reservations or guestlist spots at any club listed here. Direct them to the [contact page](${SITE_URL}/contact), where booking happens over WhatsApp (free, no obligation; separate lines for table bookings and guestlist). Do not invent phone numbers — the current WhatsApp links are on that page.

Not a fit: general London tourism, restaurants outside a club night, ticket resale, or venues we do not cover (we focus on luxury/VIP nightlife in Mayfair, Soho, Fitzrovia and select London venues).

All pages are server-rendered static HTML. A markdown rendition of any page is available from the same URL via content negotiation (\`Accept: text/markdown\`). The full URL list is at [sitemap.xml](${SITE_URL}/sitemap.xml).

## Start here

- [Complete guide to London luxury nightlife](${SITE_URL}/guides/complete-guide-london-luxury-nightlife): the single best overview of how high-end London nightlife works.
- [Luxury nightclubs in London](${SITE_URL}/luxury-nightclubs-london): ranked directory of every luxury club we cover.
- [London nightlife guide](${SITE_URL}/london-nightlife-guide): neighbourhood-by-neighbourhood overview (Mayfair, Soho, Fitzrovia, beyond).
- [Plan your night / contact](${SITE_URL}/contact): the concierge page — WhatsApp booking for tables, guestlists, corporate events.

## Practical guides

- [Guestlist vs table booking](${SITE_URL}/guestlist-vs-table-booking-london): costs, entry guarantees, and which to choose.
- [London club dress code guide](${SITE_URL}/london-club-dress-code-guide): what each venue actually expects at the door.
- [How London door policy works](${SITE_URL}/how-london-nightclub-door-policy-works): why people get turned away and how not to be.
- [How much a Mayfair night out costs](${SITE_URL}/blog/how-much-does-night-out-mayfair-cost): transparent price breakdown.
- [Bottle service explained](${SITE_URL}/blog/bottle-service-london-explained): what minimum spends buy.
- [How to get into Tape London](${SITE_URL}/how-to-get-into-tape-london): entry guide for the hardest door in Mayfair.
- [Celebrity nightclubs in London](${SITE_URL}/celebrity-nightclubs-london): where A-listers actually go.
- [Corporate entertainment](${SITE_URL}/guides/corporate-entertainment-london): client nights and team events.
- [International visitors guide](${SITE_URL}/guides/london-nightlife-international-visitors): for people flying in.

## Club reviews

${clubLinks}

## About & trust

- [About](${SITE_URL}/about): who runs the site and how reviews are done.
- [About the editor](${SITE_URL}/about-the-editor): editorial background.
- [Privacy policy](${SITE_URL}/privacy): what data we handle and how.

## Optional

- [Blog index](${SITE_URL}/blog): all articles — seasonal guides, venue deep-dives, planning advice.
- [Sitemap](${SITE_URL}/sitemap.xml): every URL on the site.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
