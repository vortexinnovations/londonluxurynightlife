import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import { GUIDE_IMAGES } from "@/lib/images";
import { safeJsonLd } from "@/lib/safe-output";
import { organizationNode } from "@/components/SchemaMarkup";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const TITLE = "About London Luxury Nightlife: Who We Are and How We Write";
const DESCRIPTION =
  "Who runs London Luxury Nightlife, how we earn a commission on bookings, how we write and check our club guides with AI tools, and how to report an error.";
const URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: GUIDE_IMAGES["about"], alt: "Champagne bottles with sparklers held up in a crowd" }],
  },
  alternates: {
    canonical: URL,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: TITLE,
            description: DESCRIPTION,
            url: URL,
            about: organizationNode(),
          }),
        }}
      />
      <ArticleLayout
        title={`About ${SITE_NAME}`}
        subtitle="Who runs this site, how it makes money, and how our guides are written and checked."
      >
        <h2>Who Runs London Luxury Nightlife</h2>

        <p>
          London Luxury Nightlife is run by a London nightlife booking team. We
          arrange VIP tables and guestlist places at London clubs, and we
          handle enquiries on <Link href="/contact">WhatsApp</Link>. Our focus is
          luxury nightlife: the most exclusive clubs in Mayfair, Soho and
          Fitzrovia, and a few other London venues.
        </p>

        <p>
          <strong>How we make money:</strong> we earn a commission when a table
          or guestlist place we arrange goes ahead. That makes us a booking
          service, not an independent review site, so read our
          recommendations with that in mind.
        </p>

        <h2 id="how-we-write" className="scroll-mt-28">How We Write</h2>

        <p>
          We write and update our guides with the help of AI tools. They are
          based on what venues announce, published listings and news reports,
          and the prices and door policies our booking desk works with.
        </p>

        <p>
          Automated checks look for closed venues, broken links and
          house-style problems before a page goes live. From 25 November 2026,
          a member of our team reads and approves every new article before it
          is published.
        </p>

        <p>
          We credit pages to the London Luxury Nightlife team rather than to
          individual writers.
        </p>

        <p>
          Prices, opening nights and door policies change often.{" "}
          <Link href="/contact">Message us</Link> before you go and we will
          confirm the details for your night.
        </p>

        <h2>What We Cover</h2>

        <p>
          We cover London&apos;s luxury clubs, from the most exclusive
          members&apos; clubs to theatrical showclubs and sound-system-first
          nightclubs. Our coverage includes:
        </p>

        <ul>
          <li>
            <strong>Club guides</strong>: the door policy, music, nights and
            table prices of each venue we cover
          </li>
          <li>
            <strong>Editorial guides</strong>: from{" "}
            <Link href="/london-club-dress-code-guide">dress codes</Link>{" "}to{" "}
            <Link href="/how-london-nightclub-door-policy-works">door policies</Link>,{" "}
            <Link href="/guestlist-vs-table-booking-london">booking strategy</Link>{" "}to{" "}
            <Link href="/how-to-plan-a-luxury-night-out-in-london">evening planning</Link>
          </li>
          <li>
            <strong>Pillar guides</strong>: comprehensive resources on{" "}
            <Link href="/luxury-nightclubs-london">luxury nightclubs</Link>,{" "}
            <Link href="/celebrity-nightclubs-london">celebrity venues</Link>, and{" "}
            <Link href="/london-nightlife-guide">the full London scene</Link>
          </li>
          <li>
            <strong>Bookings</strong>: table bookings and guestlist places
            through our <Link href="/contact">WhatsApp concierge</Link>
          </li>
        </ul>

        <h2>Corrections</h2>

        <p>
          If something on a page is wrong or out of date, tell us on WhatsApp
          through our <Link href="/contact">contact page</Link> and we will
          correct it.
        </p>
      </ArticleLayout>
    </>
  );
}
