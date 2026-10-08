import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, renamedClubs } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = renamedClubs.find((c) => c.slug === "cuckoo-club")!;

// Cuckoo Club is now 99 Regent Street (owner, 2026-10-07). Same URL, both names kept; booked under the new name.
export const metadata: Metadata = {
  title: "Cuckoo Club Is Now 99 Regent Street: Book a Table",
  description:
    "Cuckoo Club on Swallow Street is now 99 Regent Street. What changed, and how to book a table or guestlist at 99 Regent Street.",
};

export default function CuckooClubPage() {
  return (
    <>
      <ArticleSchema
        title="Cuckoo Club Is Now 99 Regent Street: Book a Table"
        description="Cuckoo Club on Swallow Street is now 99 Regent Street. What changed, and how to book a table or guestlist at 99 Regent Street."
        slug="/clubs/cuckoo-club"
      />
      <ArticleLayout
        title={club.name}
        subtitle="Cuckoo Club is now 99 Regent Street"
        heroImage={CLUB_IMAGES["cuckoo-club"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={waClubMessage("99 Regent Street (formerly Cuckoo Club)")}
        ctaLabel="Book a Table at 99 Regent Street"
      >
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">Now 99 Regent Street</p>
          <p className="text-warm-gray text-sm">
            Cuckoo Club is now 99 Regent Street. The venue on Swallow Street trades under its new name, and tables and guestlist are booked as 99 Regent Street. Message us with your date and group for current minimums and door policy.
          </p>
        </div>

        <div className="info-box">
          <p>
            <strong>Now called:</strong>{" "}99 Regent Street
          </p>
          <p>
            <strong>Formerly:</strong>{" "}Cuckoo Club
          </p>
          <p>
            <strong>Location:</strong> {club.location}
          </p>
        </div>

        <p>
          Cuckoo Club is now 99 Regent Street. People still search for Cuckoo Club, so this page explains the change and how to book the venue under its new name.
        </p>

        <h2>Booking 99 Regent Street</h2>

        <p>
          Tables and guestlist are booked as 99 Regent Street. Message us on WhatsApp with your date, group size and budget, and we confirm the current table minimums, nights and door policy before you commit. Details from the Cuckoo Club era should not be read as 99 Regent Street&apos;s terms.
        </p>

        <h2>History: Cuckoo Club</h2>

        <p>
          As Cuckoo Club, the venue on Swallow Street, just off Piccadilly, ran two floors: a cocktail lounge turning to house upstairs, and hip-hop and RnB in the basement. Those were Cuckoo Club&apos;s details under the old name.
        </p>

        <h2>Other Clubs Nearby to Book</h2>

        <p>
          If you want options near Piccadilly Circus, these open venues are also booked through us.
        </p>

        <ul>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link>: a big showclub on Piccadilly with aerial acts and a mixed playlist.
          </li>
          <li>
            <Link href="/clubs/the-box-london">The Box</Link>: late-night theatre in Walker&apos;s Court, Soho.
          </li>
          <li>
            <Link href="/clubs/dear-darling">Dear Darling</Link>: opulent cocktails that turn into a late night in Mayfair.
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
