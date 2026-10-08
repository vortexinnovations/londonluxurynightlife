import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = closedClubs.find((c) => c.slug === "libertine")!;

// Closed; Selene now operates in its place (owner, 2026-10-07). Indexable: closed pages keep their search traffic.
export const metadata: Metadata = {
  title: "Libertine London Has Closed: Selene Now Operates in Its Place",
  description:
    "Libertine on Winsley Street, Fitzrovia, has closed, and Selene London now operates in its place. What Libertine was, and the open clubs nearby to book instead.",
};

export default function LibertinePage() {
  return (
    <>
      <ArticleSchema
        title="Libertine London Has Closed: Selene Now Operates in Its Place"
        description="Libertine on Winsley Street, Fitzrovia, has closed, and Selene London now operates in its place. What Libertine was, and the open clubs nearby to book instead."
        slug="/clubs/libertine"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Permanently closed"
        heroImage={CLUB_IMAGES["libertine"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">
            Libertine has closed, and Selene London now operates in its place. Libertine no longer takes table bookings or guestlist names.
          </p>
        </div>

        <div className="info-box">
          <p>
            <strong>Location:</strong> {club.location}
          </p>
          <p>
            <strong>Music (when open):</strong> {club.musicStyle}
          </p>
          <p>
            <strong>Status:</strong>{" "}Closed. Selene London now operates in its place.
          </p>
        </div>

        <p>
          Libertine, at 4 Winsley Street in Fitzrovia just north of Oxford Circus, was one of the more design-led clubs in the West End, and it has now closed. Selene London now operates in its place. People still search for Libertine by name, so this page explains what it was and where to book now.
        </p>

        <h2>What Libertine Was</h2>

        <p>
          When it was open, Libertine went for a futuristic look: LED-lit surfaces, geometric lines and mirrored materials, with hip-hop, RnB and commercial music for a fashion-conscious West End crowd.
        </p>

        <h2>Where to Go Instead</h2>

        <p>
          Selene London is first on the list as the venue now in Libertine&apos;s place; the others suit the same crowd.
        </p>

        <ul>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link>: now operating in Libertine&apos;s place at 4 Winsley Street: a refined room just north of Oxford Circus with hip-hop, RnB and commercial sets.
          </li>
          <li>
            <Link href="/clubs/tape-london">Tape London</Link>: hip-hop and RnB on Hanover Square, with one of the hardest doors in London.
          </li>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: hip-hop and RnB with performers working the room all night.
          </li>
          <li>
            <Link href="/clubs/dear-darling">Dear Darling</Link>: opulent cocktails that turn into a late night in Mayfair.
          </li>
        </ul>

        <p>
          For a full overview of what is open, see our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London&apos;s luxury nightlife
          </Link>.
        </p>
      </ArticleLayout>
    </>
  );
}
