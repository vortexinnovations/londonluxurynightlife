import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = closedClubs.find((c) => c.slug === "funky-buddha")!;

// Closed (owner, 2026-10-07); Itzel now operates at its Berkeley Street address (owner-confirmed). The page stays live and indexable.
export const metadata: Metadata = {
  title: "Funky Buddha London Has Closed: Itzel and Mayfair Alternatives",
  description:
    "Funky Buddha on Berkeley Street, Mayfair, has closed, and Itzel now operates at its address. What the club was, and the open Mayfair clubs to book instead.",
};

export default function FunkyBuddhaPage() {
  return (
    <>
      <ArticleSchema
        title="Funky Buddha London Has Closed: Itzel and Mayfair Alternatives"
        description="Funky Buddha on Berkeley Street, Mayfair, has closed, and Itzel now operates at its address. What the club was, and the open Mayfair clubs to book instead."
        slug="/clubs/funky-buddha"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Permanently closed"
        heroImage={CLUB_IMAGES["funky-buddha"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">
            Funky Buddha has closed. Itzel now operates at its Berkeley Street address in Mayfair. Funky Buddha no longer takes table bookings or guestlist names; the open alternatives below suit the same crowd.
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
            <strong>Status:</strong> Closed. Itzel now operates at this address.
          </p>
        </div>

        <p>
          Funky Buddha was one of the best-known names in Mayfair nightlife, and it has now closed. Itzel now operates at its Berkeley Street address. People still search for Funky Buddha by name, so this page explains what it was and where its crowd goes now.
        </p>

        <h2>What Funky Buddha Was</h2>

        <p>
          When it was open, Funky Buddha on Berkeley Street was a deliberately intimate room with dark woods and ambient lighting, a hip-hop, RnB and funky house music policy, and a long celebrity following. It was known as one of the friendlier doors in Mayfair.
        </p>

        <h2>Where to Go Instead</h2>

        <p>
          These open venues cover the same ground: hip-hop and RnB, a dressed-up crowd and a proper late night.
        </p>

        <ul>
          <li>
            <Link href="/clubs/tape-london">Tape London</Link>: the closest match on music, with hip-hop and RnB on Hanover Square.
          </li>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: hip-hop and RnB with performers working the room all night.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link>: a refined room just north of Oxford Circus with hip-hop, RnB and commercial sets.
          </li>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link>: production, aerial acts and a mixed playlist on Piccadilly for bigger groups.
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
