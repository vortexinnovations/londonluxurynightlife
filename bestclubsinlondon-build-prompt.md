# Build bestclubsinlondon.com — Complete One-Shot Prompt

## Project Overview

Build a complete Next.js (App Router) website for **bestclubsinlondon.com** — a premium London nightclub review and editorial site. This is a WordPress migration to Next.js deployed on Vercel. The site currently has **159 blog posts** that MUST be migrated with identical content and URL slug preservation.

This site is **NOT a booking funnel site**. It's a review-first, editorial blog about London nightlife. Think of it as a trustworthy club review magazine — readers come for honest reviews, guides, and nightlife advice. WhatsApp CTAs exist but are secondary and subtle — not aggressive conversion funnels.

## Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Fonts:** Google Fonts — Inter (body/sans) + Playfair Display (headings/serif), loaded via `next/font/google` with `display: "swap"`
- **Deployment:** Vercel
- **Images:** Supabase public bucket (proxied through the site's own domain)

## CRITICAL — URL Preservation

This site currently uses WordPress date-based URLs: `/YYYY/MM/DD/slug/`

The new site MUST use flat blog URLs: `/blog/slug`

Every old WordPress URL MUST have a 301 redirect to its new location in `next.config.ts`. There are **159 blog posts** — every single one needs a redirect. Example:

```ts
{ source: "/2024/04/08/tape-london-review", destination: "/blog/tape-london-review", permanent: true },
{ source: "/2024/04/08/tape-london-review/", destination: "/blog/tape-london-review", permanent: true },
```

Include BOTH with and without trailing slash for each redirect.

Also redirect:
- `/387-2/` → `/` (WordPress artifact)
- `/category/all-posts/` → `/blog`
- `/category/guides/` → `/blog`
- `/category/night-clubs/` → `/blog`

Static pages keep their slugs:
- `/about/` stays at `/about`
- `/faq/` stays at `/faq`
- `/contact/` stays at `/contact`
- `/privacy-policy/` stays at `/privacy-policy`

## Image System — Supabase Proxy

All images are hosted in a Supabase public bucket. **NEVER** use the Supabase URL directly in code — proxy through the site's own domain.

### Step 1 — Rewrite in next.config.ts:
```ts
async rewrites() {
  return [
    {
      source: "/gallery/images/:path*",
      destination: "https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/public/gallery/:path*",
    },
  ];
},
```

### Step 2 — Reference images as:
```
/gallery/images/{filename}
```

### Step 3 — Browse available images:

The project root must contain a `.env` file (gitignored) with:
```
SUPABASE_SECRET_KEY=<the secret key>
```

Then run:
```js
// Run with: node list-bucket.js
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env','utf8').trim().split('\n').map(l=>l.split('=')).map(([k,...v])=>[k,v.join('=')]));
const https = require('https');
const url = 'https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/list/gallery';
const options = {
  method: 'POST',
  headers: {
    'apikey': env.SUPABASE_SECRET_KEY,
    'Authorization': 'Bearer ' + env.SUPABASE_SECRET_KEY,
    'Content-Type': 'application/json',
  },
};
const req = https.request(url, options, (res) => {
  let body = '';
  res.on('data', (c) => body += c);
  res.on('end', () => {
    const files = JSON.parse(body);
    console.log(`${files.length} images available:\n`);
    files.forEach(f => console.log(f.name));
  });
});
req.write(JSON.stringify({ prefix: '', limit: 1000, offset: 0 }));
req.end();
```

There are 900+ nightclub/nightlife images available. Do NOT use `<img>` — always use `next/image` with proper `sizes`, `priority` on above-fold images, and dark overlays where text sits on top.

### Step 4 — For blog post images, fetch the current images from the live WordPress site

For each blog post being migrated, check what images the current WordPress post uses. The live site's images are at URLs like:
```
https://bestclubsinlondon.com/wp-content/uploads/YYYY/MM/filename.jpg
```

Find the closest matching image in the Supabase bucket, or use a thematically appropriate one. Create an image mapping in `src/lib/images.ts` that maps each blog slug to its featured image.

## Design Direction

**Premium review site / magazine feel.** NOT a booking site. NOT a funnel. This is where people come to read honest reviews and guides about London nightlife.

### Visual Style
- **Dark theme** — deep blacks (#0a0a0a), warm grays, cream text, gold accents (#c9a96e)
- **Editorial magazine feel** — spacious, clean, excellent typography
- Serif font (Playfair Display) for article headings, sans-serif (Inter) for body
- Cards with thumbnail images, hover effects, category badges
- Full-bleed hero images with gradient overlays on article pages
- Premium but approachable — not pretentious

### Homepage Layout (Blog-First)
The homepage should feel like a premium nightlife blog/magazine, NOT a booking landing page:

1. **Hero section** — Full-width image with site title "Best Clubs in London" and a subtitle like "Honest reviews, insider guides, and everything you need for London's best nights out." No aggressive CTA in the hero.
2. **Featured article** — Large card with image, title, excerpt for the latest/best review
3. **Latest articles grid** — 3-column grid of recent posts with thumbnail images, category tags, titles, excerpts. Each card should have: image (aspect-[3/2]), category badge, title, short excerpt, "Read more" link
4. **Club reviews section** — Curated grid of the main club review pages
5. **Popular guides section** — Cards linking to the most useful guides (dress code, area guides, etc.)
6. **Subtle WhatsApp CTA** — A soft "Need help choosing a club?" section with WhatsApp link, NOT a giant "BOOK NOW" banner
7. **Footer** — About blurb, links to key pages, social media (Instagram: @bestclubsinlondon, TikTok: @mfnights)

### Article Pages
- Hero image at top (full-width with gradient overlay, title on top)
- Clean readable body with proper heading hierarchy
- Inline images breaking up content
- Related posts at the bottom
- Subtle WhatsApp CTA at the end ("Still deciding? We can help — message us on WhatsApp")

### Mobile
- Mobile-first responsive design
- Sticky subtle WhatsApp button at bottom on mobile (not aggressive)
- Cards stack to single column
- Good touch targets, comfortable reading experience

## WhatsApp Integration

WhatsApp number: **447880662708**

Use `wa.me` link format with pre-filled messages. The CTAs should feel like a helpful concierge, NOT a sales pitch.

### CTA Messages:
- **General (homepage, guides):** "Hi, I found you on bestclubsinlondon.com and I'd like some advice on where to go out. Here are my details:\n\nDate:\nGroup size:\nWhat kind of night I'm looking for:\nBudget:"
- **Club review pages:** "Hi, I read your review of {CLUB_NAME} on bestclubsinlondon.com and I'd like to know more. Here are my details:\n\nDate:\nGroup size:\nBudget:\nAny preferences:"

### CTA Language:
Use soft, editorial language: "Need help choosing?" / "Still deciding? Ask us" / "Message us for advice" — NOT "Book Now" / "Reserve Your Table" / "Get VIP Access"

## Content Migration — ALL 159 Blog Posts

**THIS IS CRITICAL:** Every blog post from the current site must be migrated with its content preserved IDENTICALLY. Do NOT summarise, truncate, or rewrite the content. You may expand on it or improve formatting, but the original content must remain intact.

### How to migrate each blog:
1. Fetch the content from the live WordPress URL using WebFetch
2. Extract the full article body, all headings, all internal links
3. Create the page at `src/app/blog/{slug}/page.tsx`
4. Preserve the exact heading structure (H1, H2s, H3s)
5. Preserve all internal links (update WordPress URLs to new Next.js URLs)
6. Add proper SEO metadata (title, description, keywords, OG tags, canonical)
7. Add ArticleSchema structured data
8. Add a featured image from the Supabase bucket
9. Add the post to `src/lib/blog-data.ts` for the listing page

### Internal Link Updates:
When migrating, update all internal links from WordPress format to Next.js format:
- `/2024/04/08/tape-london-review/` → `/blog/tape-london-review`
- `/2024/04/09/cirque-le-soir-review/` → `/blog/cirque-le-soir-review`
- etc.

Also update any links to `mfnights.com` or `clubsinlondon.com` — keep them as-is (external links).

## Complete URL List — All 159 Posts to Migrate

### Restaurant Reviews
| Old Slug | New Path |
|----------|----------|
| /2026/03/31/crisp-pizza-at-the-marlborough-review/ | /blog/crisp-pizza-at-the-marlborough-review |
| /2026/03/29/fonda-restaurant-review/ | /blog/fonda-restaurant-review |
| /2026/03/31/ambassadors-clubhouse-review/ | /blog/ambassadors-clubhouse-review |
| /2026/03/30/74-duke-restaurant-review/ | /blog/74-duke-restaurant-review |
| /2026/03/29/the-dover-restaurant-review/ | /blog/the-dover-restaurant-review |
| /2026/03/28/mister-nice-london-restaurant-review/ | /blog/mister-nice-london-restaurant-review |

### Area/Location Guides
| Old Slug | New Path |
|----------|----------|
| /2026/02/28/exclusive-clubs-near-oxford-circus-regent-street/ | /blog/exclusive-clubs-near-oxford-circus-regent-street |
| /2026/02/27/top-nightlife-spots-around-soho-carnaby/ | /blog/top-nightlife-spots-around-soho-carnaby |
| /2026/02/26/luxury-clubs-around-covent-garden-the-strand/ | /blog/luxury-clubs-around-covent-garden-the-strand |
| /2026/02/25/high-end-clubs-around-park-lane-hyde-park-corner/ | /blog/high-end-clubs-around-park-lane-hyde-park-corner |
| /2026/02/24/best-nightclubs-near-leicester-square-piccadilly/ | /blog/best-nightclubs-near-leicester-square-piccadilly |
| /2026/02/23/where-to-party-near-park-lane-london/ | /blog/where-to-party-near-park-lane-london |

### FAQ / Table Booking Guides
| Old Slug | New Path |
|----------|----------|
| /2026/01/31/are-london-club-table-prices-per-person-or-per-table/ | /blog/are-london-club-table-prices-per-person-or-per-table |
| /2026/01/31/do-you-need-a-london-club-promoter-to-get-into-mayfair-clubs/ | /blog/do-you-need-a-london-club-promoter-to-get-into-mayfair-clubs |
| /2026/01/26/are-tables-seated-or-standing-in-london-clubs/ | /blog/are-tables-seated-or-standing-in-london-clubs |
| /2026/01/30/is-it-worth-going-clubbing-midweek-in-london/ | /blog/is-it-worth-going-clubbing-midweek-in-london |
| /2026/01/28/can-i-pick-my-own-table-placement-in-a-london-club/ | /blog/can-i-pick-my-own-table-placement-in-a-london-club |
| /2026/01/27/can-you-change-table-size-after-booking-in-a-london-club/ | /blog/can-you-change-table-size-after-booking-in-a-london-club |

### Funky Buddha Cluster
| Old Slug | New Path |
|----------|----------|
| /2025/12/26/is-funky-buddha-nightclub-good/ | /blog/is-funky-buddha-nightclub-good |
| /2025/12/25/funky-buddha-nightclub-vip-table/ | /blog/funky-buddha-nightclub-vip-table |
| /2025/12/24/funky-buddha-nightclub-vip-guestlist/ | /blog/funky-buddha-nightclub-vip-guestlist |
| /2025/12/23/funky-buddha-nightclub-faq/ | /blog/funky-buddha-nightclub-faq |
| /2025/12/22/funky-buddha-nightclub-review/ | /blog/funky-buddha-nightclub-review |
| /2025/12/29/can-guys-join-the-funky-buddha-nightclub-guestlist/ | /blog/can-guys-join-the-funky-buddha-nightclub-guestlist |

### NYE 2025 Events
| Old Slug | New Path |
|----------|----------|
| /2025/11/17/luxx-london-nye-party-2025/ | /blog/luxx-london-nye-party-2025 |
| /2025/11/15/dear-darling-nye-party-2025/ | /blog/dear-darling-nye-party-2025 |
| /2025/11/14/cuckoo-club-nye-party-2025/ | /blog/cuckoo-club-nye-party-2025 |
| /2025/11/13/london-reign-nye-party-2025/ | /blog/london-reign-nye-party-2025 |
| /2025/11/12/cirque-le-soir-nye-party-2025/ | /blog/cirque-le-soir-nye-party-2025 |
| /2025/11/11/tape-london-nye-party-2025/ | /blog/tape-london-nye-party-2025 |

### Halloween 2025 Events
| Old Slug | New Path |
|----------|----------|
| /2025/10/14/rex-rooms-halloween-party-2025/ | /blog/rex-rooms-halloween-party-2025 |
| /2025/10/16/cuckoo-club-halloween-party-2025/ | /blog/cuckoo-club-halloween-party-2025 |
| /2025/10/15/tabu-london-halloween-party-2025/ | /blog/tabu-london-halloween-party-2025 |
| /2025/10/15/reign-showclub-halloween-party-2025/ | /blog/reign-showclub-halloween-party-2025 |
| /2025/10/14/cirque-le-soir-halloween-party-2025/ | /blog/cirque-le-soir-halloween-party-2025 |
| /2025/10/14/tape-club-halloween-party-2025/ | /blog/tape-club-halloween-party-2025 |

### Rex Rooms Cluster
| Old Slug | New Path |
|----------|----------|
| /2025/10/03/can-guys-join-the-rex-rooms-guestlist/ | /blog/can-guys-join-the-rex-rooms-guestlist |
| /2025/10/01/how-to-book-a-rex-rooms-vip-table/ | /blog/how-to-book-a-rex-rooms-vip-table |
| /2025/09/30/rex-rooms-vip-guestlist/ | /blog/rex-rooms-vip-guestlist |
| /2025/09/30/rex-rooms-nightclub-faq/ | /blog/rex-rooms-nightclub-faq |
| /2025/09/29/rex-rooms-nightclub-chelsea-review/ | /blog/rex-rooms-nightclub-chelsea-review |

### Occasion Guides
| Old Slug | New Path |
|----------|----------|
| /2025/09/06/corporate-party-venues-in-london/ | /blog/corporate-party-venues-in-london |
| /2025/09/05/where-to-celebrate-a-big-promotion-in-london/ | /blog/where-to-celebrate-a-big-promotion-in-london |
| /2025/09/04/best-clubs-in-london-for-entertaining-vip-clients/ | /blog/best-clubs-in-london-for-entertaining-vip-clients |
| /2025/09/01/best-london-club-birthday-packages/ | /blog/best-london-club-birthday-packages |
| /2025/08/31/best-clubs-for-couples-in-london/ | /blog/best-clubs-for-couples-in-london |
| /2025/08/30/best-clubs-for-a-girls-night-out-in-london/ | /blog/best-clubs-for-a-girls-night-out-in-london |

### Day-of-Week Guides
| Old Slug | New Path |
|----------|----------|
| /2025/07/31/best-events-on-the-weekend-in-london/ | /blog/best-events-on-the-weekend-in-london |
| /2025/07/31/best-events-on-thursday-in-london/ | /blog/best-events-on-thursday-in-london |
| /2025/07/30/best-events-on-wednesday-in-london/ | /blog/best-events-on-wednesday-in-london |
| /2025/07/29/best-events-on-tuesday-in-london/ | /blog/best-events-on-tuesday-in-london |
| /2025/07/29/best-events-on-monday-in-london/ | /blog/best-events-on-monday-in-london |
| /2025/07/29/best-events-on-sunday-in-london/ | /blog/best-events-on-sunday-in-london |

### VIP Table Booking Guides
| Old Slug | New Path |
|----------|----------|
| /2025/06/28/how-to-book-a-luxx-club-vip-table/ | /blog/how-to-book-a-luxx-club-vip-table |
| /2025/06/27/how-to-book-a-green-room-maddox-table/ | /blog/how-to-book-a-green-room-maddox-table |
| /2025/06/30/how-to-book-a-maddox-london-vip-table/ | /blog/how-to-book-a-maddox-london-vip-table |
| /2025/06/28/how-to-book-a-luna-london-vip-table/ | /blog/how-to-book-a-luna-london-vip-table |
| /2025/06/27/how-to-book-a-selene-club-vip-table/ | /blog/how-to-book-a-selene-club-vip-table |
| /2025/06/28/how-to-book-a-dear-darling-vip-table/ | /blog/how-to-book-a-dear-darling-vip-table |

### Club Reviews & FAQ (2025 Early)
| Old Slug | New Path |
|----------|----------|
| /2025/05/28/green-room-maddox-review/ | /blog/green-room-maddox-review |
| /2025/05/27/how-old-do-you-have-to-be-to-get-into-a-club-in-london/ | /blog/how-old-do-you-have-to-be-to-get-into-a-club-in-london |
| /2025/05/25/tape-london-vip-table/ | /blog/tape-london-vip-table |
| /2025/05/26/scotch-of-st-james-vip-table/ | /blog/scotch-of-st-james-vip-table |
| /2025/05/25/beat-london-vip-table/ | /blog/beat-london-vip-table |
| /2025/05/29/tabu-london-vip-table/ | /blog/tabu-london-vip-table |

### Guestlist, Table & Booking Guides (2025)
| Old Slug | New Path |
|----------|----------|
| /2025/04/26/cirque-le-soir-vip-guestlist/ | /blog/cirque-le-soir-vip-guestlist |
| /2025/04/28/how-to-book-a-cuckoo-club-vip-table/ | /blog/how-to-book-a-cuckoo-club-vip-table |
| /2025/04/26/how-to-book-a-cirque-le-soir-vip-table/ | /blog/how-to-book-a-cirque-le-soir-vip-table |
| /2025/04/30/how-to-get-a-vip-table-booking-at-reign-club/ | /blog/how-to-get-a-vip-table-booking-at-reign-club |
| /2025/04/26/club-bookers-in-london/ | /blog/club-bookers-in-london |
| /2025/04/29/best-bars-near-maddox-street/ | /blog/best-bars-near-maddox-street |
| /2025/10/02/best-bars-near-kings-road/ | /blog/best-bars-near-kings-road |

### Club Reviews & Pricing (March 2025)
| Old Slug | New Path |
|----------|----------|
| /2025/03/30/koko-club-table-prices-and-faq/ | /blog/koko-club-table-prices-and-faq |
| /2025/03/30/luna-inca-london-review/ | /blog/luna-inca-london-review |
| /2025/03/31/koko-london-club-review/ | /blog/koko-london-club-review |
| /2025/03/28/selene-london-table-prices-and-faq/ | /blog/selene-london-table-prices-and-faq |
| /2025/03/28/selene-london-club-review/ | /blog/selene-london-club-review |
| /2025/03/30/clubhouse-dover-st-table-prices-and-faq/ | /blog/clubhouse-dover-st-table-prices-and-faq |
| /2025/03/28/clubhouse-london-review/ | /blog/clubhouse-london-review |
| /2025/03/29/luna-by-inca-london-table-prices-and-faq/ | /blog/luna-by-inca-london-table-prices-and-faq |

### Valentine's Day 2025 Events
| Old Slug | New Path |
|----------|----------|
| /2025/02/11/the-cuckoo-club-valentine-day-event-2025/ | /blog/the-cuckoo-club-valentine-day-event-2025 |
| /2025/02/11/luxx-london-valentine-day-event-2025/ | /blog/luxx-london-valentine-day-event-2025 |
| /2025/02/11/dear-darling-valentine-day-event-2025/ | /blog/dear-darling-valentine-day-event-2025 |
| /2025/02/11/scotch-of-st-james-valentine-day-event-2025/ | /blog/scotch-of-st-james-valentine-day-event-2025 |
| /2025/02/10/tabu-mayfair-valentine-day-event-2025/ | /blog/tabu-mayfair-valentine-day-event-2025 |
| /2025/02/10/cirque-club-valentine-day-event-2025/ | /blog/cirque-club-valentine-day-event-2025 |
| /2025/02/10/reign-london-valentine-day-event-2025/ | /blog/reign-london-valentine-day-event-2025 |
| /2025/02/10/tape-london-valentine-day-event-2025/ | /blog/tape-london-valentine-day-event-2025 |

### Location Guides (Jan 2025)
| Old Slug | New Path |
|----------|----------|
| /2025/01/09/best-nightclubs-near-piccadilly-circus/ | /blog/best-nightclubs-near-piccadilly-circus |
| /2025/01/07/best-nightclubs-near-covent-garden/ | /blog/best-nightclubs-near-covent-garden |
| /2025/01/08/best-nightclubs-near-grosvenor-square-london/ | /blog/best-nightclubs-near-grosvenor-square-london |
| /2025/01/08/best-nightclubs-in-london-central/ | /blog/best-nightclubs-in-london-central |
| /2025/01/07/the-best-clubs-in-soho-london/ | /blog/the-best-clubs-in-soho-london |
| /2025/01/07/the-9-best-clubs-in-mayfair-london/ | /blog/the-9-best-clubs-in-mayfair-london |
| /2025/01/07/best-nightclubs-near-regent-street/ | /blog/best-nightclubs-near-regent-street |

### NYE 2024 Events
| Old Slug | New Path |
|----------|----------|
| /2024/12/05/dear-darling-mayfair-nye-party-2024/ | /blog/dear-darling-mayfair-nye-party-2024 |
| /2024/12/06/luxx-club-london-nye-party-2024/ | /blog/luxx-club-london-nye-party-2024 |
| /2024/12/06/scotch-mayfair-nye-party-2024/ | /blog/scotch-mayfair-nye-party-2024 |
| /2024/12/05/tabu-london-nye-party-2024/ | /blog/tabu-london-nye-party-2024 |
| /2024/12/04/cuckoo-london-nye-party-2024/ | /blog/cuckoo-london-nye-party-2024 |
| /2024/12/04/london-reign-nye-party-2024/ | /blog/london-reign-nye-party-2024 |
| /2024/12/03/cirque-le-soir-nye-party-2024/ | /blog/cirque-le-soir-nye-party-2024 |
| /2024/12/03/tape-london-nye-party-2024/ | /blog/tape-london-nye-party-2024 |

### Halloween 2024 & Area Guides
| Old Slug | New Path |
|----------|----------|
| /2024/10/19/top-halloween-events-in-london/ | /blog/top-halloween-events-in-london |
| /2024/10/11/best-clubs-near-bond-street-mayfair/ | /blog/best-clubs-near-bond-street-mayfair |
| /2024/10/11/best-clubs-near-the-maine-mayfair/ | /blog/best-clubs-near-the-maine-mayfair |
| /2024/10/11/best-clubs-near-pirana-london/ | /blog/best-clubs-near-pirana-london |

### Restaurant Reviews (2024)
| Old Slug | New Path |
|----------|----------|
| /2024/10/11/pirana-london-restaurant-review/ | /blog/pirana-london-restaurant-review |
| /2024/10/11/gymkhana-london-restaurant-review/ | /blog/gymkhana-london-restaurant-review |
| /2024/10/11/helene-darroze-at-the-connaught-restaurant-review/ | /blog/helene-darroze-at-the-connaught-restaurant-review |
| /2024/10/11/isabel-mayfair-restaurant-review/ | /blog/isabel-mayfair-restaurant-review |
| /2024/10/11/wiltons-restaurant-review/ | /blog/wiltons-restaurant-review |
| /2024/10/11/ormer-mayfair-restaurant-review/ | /blog/ormer-mayfair-restaurant-review |
| /2024/10/11/amazonico-mayfair-restaurant-review/ | /blog/amazonico-mayfair-restaurant-review |
| /2024/08/23/sketch-london-review/ | /blog/sketch-london-review |
| /2024/08/23/45-jermyn-st-restaurant-review/ | /blog/45-jermyn-st-restaurant-review |
| /2024/08/23/hide-restaurant-mayfair-review/ | /blog/hide-restaurant-mayfair-review |

### Core Club Reviews & FAQ (2024 Original Content)
| Old Slug | New Path |
|----------|----------|
| /2024/08/23/the-box-club-london-table-prices-guestlist-dress-code-and-faq/ | /blog/the-box-club-london-table-prices-guestlist-dress-code-and-faq |
| /2024/08/10/the-box-mayfair-review/ | /blog/the-box-mayfair-review |
| /2024/07/23/beat-london-club-table-prices/ | /blog/beat-london-club-table-prices |
| /2024/07/23/lio-nightclub-table-prices/ | /blog/lio-nightclub-table-prices |
| /2024/07/23/lio-london-review/ | /blog/lio-london-review |
| /2024/07/02/dear-darling-london-table-prices-and-faq/ | /blog/dear-darling-london-table-prices-and-faq |
| /2024/07/02/dear-darling-club-review/ | /blog/dear-darling-club-review |
| /2024/06/25/maddox-nightclub-table-prices-and-faq/ | /blog/maddox-nightclub-table-prices-and-faq |
| /2024/06/25/maddox-club-london-review/ | /blog/maddox-club-london-review |
| /2024/06/18/cirque-club-table-prices-and-faq/ | /blog/cirque-club-table-prices-and-faq |
| /2024/06/18/tape-club-table-prices-and-faq/ | /blog/tape-club-table-prices-and-faq |
| /2024/06/07/luxx-club-mayfair-review/ | /blog/luxx-club-mayfair-review |
| /2024/06/07/luxx-mayfair-table-prices-guestlist-dress-code-and-faq/ | /blog/luxx-mayfair-table-prices-guestlist-dress-code-and-faq |
| /2024/06/07/cuckoo-london-review/ | /blog/cuckoo-london-review |
| /2024/06/07/scotch-club-review/ | /blog/scotch-club-review |
| /2024/05/28/scotch-of-st-james-table-prices-and-faq/ | /blog/scotch-of-st-james-table-prices-and-faq |
| /2024/05/24/tabu-london-nightclub-review/ | /blog/tabu-london-nightclub-review |
| /2024/05/19/bars-near-mayfair-london/ | /blog/bars-near-mayfair-london |
| /2024/05/19/halloween-event-london-the-box-soho-halloween/ | /blog/halloween-event-london-the-box-soho-halloween |
| /2024/05/19/clubs-in-london-for-students/ | /blog/clubs-in-london-for-students |
| /2024/05/18/where-to-spot-celebrities-in-london/ | /blog/where-to-spot-celebrities-in-london |
| /2024/05/18/london-clubs-tonight/ | /blog/london-clubs-tonight |
| /2024/05/18/best-nightlife-in-london/ | /blog/best-nightlife-in-london |
| /2024/05/18/where-to-go-dancing-in-london-tabu-mayfair/ | /blog/where-to-go-dancing-in-london-tabu-mayfair |
| /2024/05/28/cuckoo-nightclub-table-prices-and-faq/ | /blog/cuckoo-nightclub-table-prices-and-faq |
| /2024/05/12/libertine-nightclub-review/ | /blog/libertine-nightclub-review |
| /2024/04/30/london-reign-review/ | /blog/london-reign-review |
| /2024/04/30/reign-club-table-prices-and-faq/ | /blog/reign-club-table-prices-and-faq |
| /2024/04/16/what-to-wear-to-the-best-london-nightclubs/ | /blog/what-to-wear-to-the-best-london-nightclubs |
| /2024/04/15/tabu-london-table-prices/ | /blog/tabu-london-table-prices |
| /2024/04/15/libertine-london-table-prices/ | /blog/libertine-london-table-prices |
| /2024/04/13/five-best-clubs-for-an-after-party-in-london/ | /blog/five-best-clubs-for-an-after-party-in-london |
| /2024/04/11/what-is-a-london-club-promoter/ | /blog/what-is-a-london-club-promoter |
| /2024/04/09/cirque-le-soir-review/ | /blog/cirque-le-soir-review |
| /2024/04/08/tape-london-review/ | /blog/tape-london-review |
| /2024/04/06/tabu-london-review/ | /blog/tabu-london-review |
| /2024/04/06/best-nightclubs-in-london-with-shows/ | /blog/best-nightclubs-in-london-with-shows |
| /2024/04/05/cuckoo-london-club-review/ | /blog/cuckoo-london-club-review |
| /2024/04/05/beat-london/ | /blog/beat-london |
| /2024/04/05/libertine-club-review/ | /blog/libertine-club-review |
| /2024/03/27/london-nightlife-exploring-diverse-venues/ | /blog/london-nightlife-exploring-diverse-venues |

## Static Pages

### /about
About page — brief description of the site, the team's experience in London nightlife, editorial independence. Premium but friendly tone.

### /faq
General FAQ about London nightlife, club entry, dress codes, booking, etc. Use FAQ schema markup.

### /contact
Contact page with WhatsApp CTA. "Ask us anything" concierge feel. No forms — WhatsApp only.

### /privacy-policy
Standard privacy policy page.

## SEO Requirements

- Every page: unique title tag, meta description, canonical URL, Open Graph tags
- Proper heading hierarchy (one H1, H2s for sections, H3s for subsections)
- FAQ schema on FAQ-format posts and the /faq page
- Article schema on all blog posts
- LocalBusiness schema in the root layout
- WebSite schema in the root layout
- Dynamic sitemap.ts covering ALL pages
- robots.txt allowing full crawling
- Internal linking between related posts
- Blog listing page with category filtering
- Mobile-first, fast loading

## Architecture Summary

```
src/
  app/
    page.tsx                    # Homepage (blog-first layout)
    layout.tsx                  # Root layout with fonts, schema, header, footer
    sitemap.ts                  # Dynamic sitemap
    not-found.tsx               # Custom 404
    about/page.tsx
    faq/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
    blog/
      page.tsx                  # Blog listing with category filters
      [slug]/page.tsx           # OR individual page.tsx per slug
      tape-london-review/page.tsx
      cirque-le-soir-review/page.tsx
      ... (all 159 posts)
  components/
    Header.tsx
    Footer.tsx
    BlogCard.tsx                # Card component for blog listing
    ArticleLayout.tsx           # Shared article page wrapper
    WhatsAppCTA.tsx             # WhatsApp button component
    SchemaMarkup.tsx            # JSON-LD schema components
  lib/
    constants.ts                # Site config, WhatsApp number, messages
    blog-data.ts                # Blog post metadata (titles, dates, categories, excerpts)
    images.ts                   # Image mapping for all pages
```

## Important Notes

- **DO NOT** push to GitHub automatically — only push when explicitly asked
- **DO NOT** link to other sites in the portfolio (londonluxurynightlife.com, londonbottleservice.com, etc.) in the footer or navigation — keep sites independent to avoid Google seeing a link network
- **DO NOT** make this site feel like a booking funnel — it's a review/editorial site
- **DO NOT** summarise or truncate blog content during migration — keep it identical
- **DO NOT** lose any URL slugs — every old URL must redirect to its new home
- **DO** fetch each blog's content from the live site before creating the page
- **DO** use the Supabase image bucket for all images
- **DO** make the design premium, trustworthy, and magazine-like
- **DO** prioritize readability and editorial quality in the design
- Social links: Instagram @bestclubsinlondon, TikTok @mfnights
