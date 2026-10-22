import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, NightClubSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs, SITE_URL, SITE_NAME } from "@/lib/constants";
import { CLUB_IMAGES } from "@/lib/images";

// Luna has rebranded as Maya (owner, 2026-10-22; the 2026-10-07 closure was
// wrong). The page keeps its URL because people still search for Luna; it is
// an open, bookable club page that names both. Table prices are confirmed at
// booking, so the page never quotes a figure, and Luna's old prices, music and
// nights are not presented as Maya's.
const club = clubs.find((c) => c.slug === "luna-club-london")!;
const images = CLUB_IMAGES["luna-club-london"];

const PATH = "/clubs/luna-club-london";
const TITLE = "Luna Club London Is Now Maya: Tables and Guestlist";
const DESCRIPTION =
  "Luna Club London is now Maya, the lounge club beneath Inca London on Argyll Street. Open Friday and Saturday, 11pm to 3am. Tables and guestlist with us.";

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: [{ url: images.hero, alt: "Maya (formerly Luna Club London) beneath Inca London" }],
  },
};

export default function MayaLondonPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={PATH}
        datePublished="2026-10-22"
        dateModified="2026-10-22"
      />
      <NightClubSchema
        name={club.name}
        alternateName={club.previousName}
        slug={PATH}
        description="Luxury lounge and members'-style club inspired by ancient Mayan culture, beneath Inca London at 8-9 Argyll Street, formerly Luna Club London. Open Friday and Saturday, 11pm to 3am. 18+ with photo ID."
        image={images.hero}
        streetAddress="8-9 Argyll Street"
        postalCode="W1F 7TF"
        openingHours="Fr-Sa 23:00-03:00"
      />
      <ArticleLayout
        title={club.name}
        previousName={club.previousName}
        subtitle={club.tagline}
        heroImage={images.hero}
        heroAlt="Maya (formerly Luna Club London), the lounge club beneath Inca London on Argyll Street"
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Maya"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> Beneath Inca London, 8-9 Argyll Street,
            London W1F 7TF, next to the London Palladium. Oxford Circus is the
            nearest tube.
          </p>
          <p>
            <strong>Opening Nights:</strong> Friday and Saturday, 11pm to 3am
          </p>
          <p>
            <strong>Age:</strong> 18+ with photo ID
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables and Guestlist:</strong> By request through us; table
            prices are confirmed when you book
          </p>
        </div>

        <p>
          <strong>In short:</strong>{" "}Luna Club London is now Maya. The club
          beneath Inca London on Argyll Street, searched for as Luna London,
          Luna Mayfair or Luna by INCA, has rebranded and trades as Maya (also
          written MAYA): a luxury lounge and members&apos;-style club inspired by
          ancient Mayan culture, open on Friday and Saturday from 11pm to 3am.
          It is open, and we book Maya tables and guestlist.
        </p>

        <h2>From Luna to Maya</h2>

        <p>
          Maya occupies the space that was Luna, below Inca London at 8-9
          Argyll Street. It is a new concept rather than Luna under another
          name, so Luna&apos;s old prices, music and club nights belong to the
          previous venue and should not be read as Maya&apos;s. Anything you
          read elsewhere about Luna&apos;s table minimums or weeknight parties
          describes a club that no longer trades under that name.
        </p>

        <h2>Dinner at Inca, Then Maya</h2>

        <p>
          Inca London upstairs is open: a South American (Nikkei) restaurant
          with a dinner show of dancers, acrobats and singers, and DJs as the
          evening turns into a late lounge. Dinner at Inca and a table at Maya
          downstairs make a complete Friday or Saturday at one address, and we
          can arrange both in the same message. Our{" "}
          <Link href="/how-to-plan-a-luxury-night-out-in-london">
            guide to planning a luxury night out
          </Link>{" "}
          covers how to pace dinner and a club in one evening.
        </p>

        <h2>The Door and the Dress Code</h2>

        <p>
          Maya is 18+ with photo ID. The dress code is smart: heels for ladies,
          smart shoes and shirts for men, and no sportswear. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          covers the rest of the West End for comparison.
        </p>

        <h2>Tables and Guestlist</h2>

        <p>
          Guestlist and tables at Maya are by request through us. Message us
          with the night, the size of your group and whether you want a table
          or guestlist, and we confirm the table price and the night&apos;s
          terms before you commit. With only Friday and Saturday to choose
          from, ask early in the week for the best choice of tables. Our{" "}
          <Link href="/guestlist-vs-table-booking-london">
            guestlist versus table guide
          </Link>{" "}
          sets out when each route makes sense.
        </p>

        <h2>Who Maya Is Best For</h2>

        <ul>
          <li>A dressed-up Friday or Saturday after dinner at Inca London</li>
          <li>Groups who want a lounge setting rather than a packed dance floor</li>
          <li>Anyone who knew Luna and wants to see what the space has become</li>
        </ul>

        <h2>Other Clubs Nearby</h2>

        <p>
          <Link href="/clubs/selene-london">Selene London</Link>{" "}on Winsley
          Street and{" "}
          <Link href="/clubs/99-regent-street">99 Regent Street</Link>{" "}
          (formerly Cuckoo Club) are both a short walk away, and{" "}
          <Link href="/clubs/the-box-london">The Box</Link>{" "}is in Soho. Our{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs guide</Link>{" "}
          ranks every club we cover.
        </p>
      </ArticleLayout>
    </>
  );
}
