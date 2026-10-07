import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, renamedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = renamedClubs.find((c) => c.slug === "tabu-london")!;

// TABU is now Rumour (owner, 2026-10-07). Same URL, both names kept; booked under the new name.
export const metadata: Metadata = {
  title: "TABU London Is Now Rumour: Book a Table at Rumour",
  description:
    "TABU London in Mayfair is now Rumour. What changed, and how to book a table or guestlist at Rumour on WhatsApp.",
};

export default function TabuLondonPage() {
  return (
    <>
      <ArticleSchema
        title="TABU London Is Now Rumour: Book a Table at Rumour"
        description="TABU London in Mayfair is now Rumour. What changed, and how to book a table or guestlist at Rumour on WhatsApp."
        slug="/clubs/tabu-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle="TABU London is now Rumour"
        heroImage={CLUB_IMAGES["tabu-london"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={waClubMessage("Rumour (formerly TABU)")}
        ctaLabel="Book a Table at Rumour"
      >
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">Now Rumour</p>
          <p className="text-warm-gray text-sm">
            TABU London is now Rumour. The Mayfair club trades under its new name, and tables and guestlist are booked as Rumour. Message us with your date and group for current minimums and door policy.
          </p>
        </div>

        <div className="info-box">
          <p>
            <strong>Now called:</strong> Rumour
          </p>
          <p>
            <strong>Formerly:</strong> TABU London
          </p>
          <p>
            <strong>Location:</strong> {club.location}
          </p>
        </div>

        <p>
          TABU London is now Rumour. People still search for TABU, Tabu club and Tabu Mayfair, so this page explains the change and how to book the venue under its new name.
        </p>

        <h2>Booking Rumour</h2>

        <p>
          Tables and guestlist are booked as Rumour. Message us on WhatsApp with your date, group size and budget, and we confirm the current table minimums, nights and door policy for Rumour before you commit. Details from the TABU era should not be read as Rumour&apos;s terms.
        </p>

        <h2>History: TABU London</h2>

        <p>
          As TABU, the venue was a below-street-level Mayfair club with Japanese-inspired interiors, dark timber and paper-screen dividers, and a hip-hop and RnB music policy. Those were TABU&apos;s details under the old name.
        </p>

        <h2>Other Mayfair Clubs to Book</h2>

        <p>
          If you want something with a similar crowd, these open venues are also booked through us.
        </p>

        <ul>
          <li>
            <Link href="/clubs/tape-london">Tape London</Link>: hip-hop and RnB on Hanover Square, with one of the hardest doors in London.
          </li>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: hip-hop and RnB with performers working the room all night.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link>: a refined Mayfair room with hip-hop, RnB and commercial sets.
          </li>
          <li>
            <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>: a small, storied club in Mason&apos;s Yard.
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
