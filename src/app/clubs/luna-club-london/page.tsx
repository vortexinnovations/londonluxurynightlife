import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = closedClubs.find((c) => c.slug === "luna-club-london")!;

// Closed (owner, 2026-10-07). The page stays live and indexable: people still
// search for Luna by name, and it now answers them honestly.
export const metadata: Metadata = {
  title: "Luna Club London Has Closed: Mayfair Alternatives",
  description:
    "Luna Club London in Mayfair has closed. What the club was, and the open Mayfair and West End clubs with the same hip-hop, RnB and stylish crowd.",
};

export default function LunaClubLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Luna Club London Has Closed: Mayfair Alternatives"
        description="Luna Club London in Mayfair has closed. What the club was, and the open clubs that suit the same crowd."
        slug="/clubs/luna-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Permanently closed"
        heroImage={CLUB_IMAGES["luna-club-london"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">
            Luna Club London has closed. The Mayfair club, also known as Luna
            Mayfair or Club Luna, no longer takes table bookings or guestlist
            names. The open alternatives below suit the same crowd.
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
            <strong>Status:</strong> {club.openingNights}
          </p>
        </div>

        <p>
          Luna Club London was one of the newer names on the Mayfair circuit,
          and it has now closed. People still search for it as Luna club, Luna
          Mayfair or Club Luna, so this page explains what it was and where the
          same crowd goes now.
        </p>

        <h2>What Luna Club London Was</h2>

        <p>
          Where many Mayfair clubs lean into dark woods and heavy fabrics, Luna
          went for sleek, modern interiors with considered lighting and a
          celestial touch. The music was open format built on hip-hop and RnB,
          with Afrobeats, amapiano and pop remixes woven in, and the crowd was
          young, affluent and well dressed: entrepreneurs, fashion-conscious
          professionals and international visitors.
        </p>

        <h2>Where to Go Instead</h2>

        <p>
          These open venues cover the same ground: hip-hop and RnB, a
          dressed-up crowd and a proper late night.
        </p>

        <ul>
          <li>
            <Link href="/clubs/tape-london">Tape London</Link>: the closest
            match on music, with hip-hop and RnB on Hanover Square and one of
            the hardest doors in London.
          </li>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: hip-hop
            and RnB with performers working the room all night, for a night
            that feels like an event.
          </li>
          <li>
            <Link href="/clubs/beat-london">BEAT London</Link>: the most
            relaxed door of the group, with a sound system built for the
            dancefloor.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link>: the other
            newer Mayfair opening, more refined and a little older in crowd.
          </li>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link>: production,
            aerial acts and a mixed playlist on Piccadilly for bigger groups.
          </li>
        </ul>

        <p>
          For a full overview of what is open, see our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London&apos;s luxury nightlife
          </Link>{" "}
          and the{" "}
          <Link href="/best-hip-hop-clubs-london">best hip-hop clubs in London</Link>.
        </p>
      </ArticleLayout>
    </>
  );
}
