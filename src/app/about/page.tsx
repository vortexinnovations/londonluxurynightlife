import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ECOSYSTEM } from "@/lib/ecosystem";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About London Luxury Nightlife | Our Editorial Team",
  description:
    "Who we are, how we review, and why we built the most trusted luxury nightlife guide in London. Independent editorial, no pay-to-play, every venue visited in person.",
  alternates: {
    canonical: "https://londonluxurynightlife.com/about",
  },
};

export default function AboutPage() {
  return (
    <ArticleLayout
      title="About London Luxury Nightlife"
      subtitle="Independent editorial. Every venue visited. No pay-to-play."
    >
      <p>
        London Luxury Nightlife is the editorial authority on the
        capital&apos;s premium club scene. We exist because good
        information about London&apos;s nightlife is surprisingly hard to
        find. Most of what ranks on Google is either pay-to-play
        advertising disguised as editorial, or surface-level listicles
        written by people who have never actually been through the door.
        We take a different approach.
      </p>

      <h2>How We Work</h2>

      <p>
        Every venue reviewed on this site has been visited multiple times
        by our editorial team. We do not accept payment from clubs in
        exchange for coverage or favourable reviews. Our recommendations
        are based entirely on the quality of the experience — the music,
        the crowd, the service, the atmosphere, and whether the evening
        justifies the spend. When a venue falls short, we say so. When
        it exceeds expectations, we explain precisely why.
      </p>

      <p>
        Our team has collectively spent over a decade inside London&apos;s
        luxury nightlife scene. We know the promoters, the door staff, the
        venue managers, and the DJs. That network gives us access to
        information that press releases and Instagram accounts do not
        provide. It also means our advice comes from genuine experience
        rather than second-hand research.
      </p>

      <h2>What We Cover</h2>

      <p>
        We cover 13 active venues across Mayfair, Soho, Fitzrovia, and
        the West End — from the most exclusive members&apos; clubs to
        theatrical showclubs and sound-system-first nightclubs. Our
        coverage includes:
      </p>

      <ul>
        <li>
          <strong>In-depth club reviews</strong> — honest assessments of
          every venue we cover, updated as experiences change
        </li>
        <li>
          <strong>Editorial guides</strong> — from{" "}
          <Link href="/london-club-dress-code-guide">dress codes</Link> to{" "}
          <Link href="/how-london-nightclub-door-policy-works">door policies</Link>,{" "}
          <Link href="/guestlist-vs-table-booking-london">booking strategy</Link> to{" "}
          <Link href="/how-to-plan-a-luxury-night-out-in-london">evening planning</Link>
        </li>
        <li>
          <strong>Pillar guides</strong> — comprehensive resources on{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs</Link>,{" "}
          <Link href="/celebrity-nightclubs-london">celebrity venues</Link>, and{" "}
          <Link href="/london-nightlife-guide">the full London scene</Link>
        </li>
        <li>
          <strong>Concierge service</strong> — direct table booking and
          guestlist access at every venue through our{" "}
          <Link href="/contact">WhatsApp concierge</Link>
        </li>
      </ul>

      <h2>Our Network</h2>

      <p>
        London Luxury Nightlife is the editorial arm of a specialist
        nightlife network. For direct table bookings and bottle service,{" "}
        <a
          href={ECOSYSTEM.bottleService.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80"
        >
          London Bottle Service
        </a>{" "}
        handles reservations across all venues. For tonight&apos;s events
        and live listings,{" "}
        <a
          href={ECOSYSTEM.mayfairTonight.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80"
        >
          Mayfair Tonight
        </a>{" "}
        tracks what&apos;s happening in real time. Each site serves a
        distinct purpose — this one provides the editorial depth and
        independent guidance that booking sites cannot.
      </p>

      <h2>Editorial Independence</h2>

      <p>
        We are transparent about our business model. We earn from
        concierge bookings when readers choose to plan their evenings
        through us. This does not influence which venues we recommend or
        how we review them. A venue that delivers an exceptional
        experience receives an exceptional review regardless of whether
        they have a commercial relationship with us. A venue that
        disappoints gets an honest assessment. Our credibility depends
        on this independence, and we protect it accordingly.
      </p>

      <p>
        All content on this site is original and written by our editorial
        team. We do not use AI-generated copy, syndicated press releases,
        or recycled content from other publications. Every sentence
        reflects direct experience and genuine editorial judgement.
      </p>

      <h2>Contact</h2>

      <p>
        For nightlife enquiries, table bookings, and guestlist access,{" "}
        <Link href="/contact">contact our concierge team</Link>. For
        editorial enquiries, corrections, or venue submissions, reach us
        via the same channel.
      </p>
    </ArticleLayout>
  );
}
