import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = closedClubs.find((c) => c.slug === "lio-club-london")!;

// Closed. Indexable: closed pages keep their search traffic.
export const metadata: Metadata = {
  title: "Lio Club London Has Closed: Dinner and Club Alternatives",
  description:
    "Lio Club London in Mayfair has closed. What the dinner, show and club concept was, and the open London venues to book for a similar night.",
};

export default function LioClubLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Lio Club London Has Closed: Dinner and Club Alternatives"
        description="Lio Club London in Mayfair has closed. What the dinner, show and club concept was, and the open London venues to book for a similar night."
        slug="/clubs/lio-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Permanently closed"
        heroImage={CLUB_IMAGES["lio-club-london"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">
            Lio Club London has closed and no longer takes table bookings or guestlist names. The open alternatives below suit a dinner-to-club night.
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
          Lio Club London brought the Ibiza dinner-and-show concept to Mayfair, and it has now closed. People still search for Lio London by name, so this page explains what it was and where to go for a similar night.
        </p>

        <h2>What Lio Club London Was</h2>

        <p>
          When it was open, Lio ran an evening as a production: dinner in a lavish room with a central stage, performers through the meal, and a late-night club once the tables cleared.
        </p>

        <h2>Where to Go Instead</h2>

        <p>
          These open venues cover dinner, a show and a late night.
        </p>

        <ul>
          <li>
            <Link href="/clubs/maddox">Maddox Club</Link>: Italian dining followed by house music into the early hours, in one Mayfair building.
          </li>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link>: dinner, aerial acts and a club on Piccadilly.
          </li>
          <li>
            <Link href="/clubs/the-box-london">The Box</Link>: late-night theatre in Walker&apos;s Court, Soho.
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
