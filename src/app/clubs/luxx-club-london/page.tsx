import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = closedClubs.find((c) => c.slug === "luxx-club-london")!;

// Closed; its successor is Itzel (owner, 2026-10-07). Indexable: closed pages keep their search traffic.
export const metadata: Metadata = {
  title: "Luxx Club London Has Closed: Itzel and Mayfair Alternatives",
  description:
    "Luxx Club London in Mayfair has closed, and its successor is Itzel. What Luxx was, and the open London clubs to book instead.",
};

export default function LuxxClubLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Luxx Club London Has Closed: Itzel and Mayfair Alternatives"
        description="Luxx Club London in Mayfair has closed, and its successor is Itzel. What Luxx was, and the open London clubs to book instead."
        slug="/clubs/luxx-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Permanently closed"
        heroImage={CLUB_IMAGES["luxx-club-london"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">
            Luxx Club London has closed, and its successor is Itzel. Luxx no longer takes table bookings or guestlist names; the open alternatives below suit the same crowd.
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
            <strong>Status:</strong>{" "}Closed. Its successor is Itzel.
          </p>
        </div>

        <p>
          Luxx Club London was the Mayfair club built around light, and it has now closed. Its successor is Itzel. People still search for Luxx by name, so this page explains what it was and where to go now.
        </p>

        <h2>What Luxx Club Was</h2>

        <p>
          When it was open, Luxx wrapped its room in floor-to-ceiling LED panels that changed with the music, with open-format and hip-hop sets for a crowd that came for the visuals as much as the party.
        </p>

        <h2>Where to Go Instead</h2>

        <p>
          These open venues suit a crowd that wants production and spectacle.
        </p>

        <ul>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link>: aerial acts, big production and a mixed playlist on Piccadilly.
          </li>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: performers working the room all night, with hip-hop and RnB.
          </li>
          <li>
            <Link href="/clubs/the-box-london">The Box</Link>: late-night theatre in Walker&apos;s Court, Soho.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link>: a refined room just north of Oxford Circus with hip-hop, RnB and commercial sets.
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
