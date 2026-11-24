import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, NightClubSchema } from "@/components/SchemaMarkup";
import {
  waClubTableMessage,
  waClubGuestlistMessage,
  clubs,
  SITE_URL,
  SITE_NAME,
} from "@/lib/constants";
import { CLUB_IMAGES } from "@/lib/images";

// Bisou, 9 Swallow Street, Mayfair (the club's own site and the owner,
// 2026-11-22). The club publishes no closing time, age limit, dress code or
// menu, so the page states none: hours are "11pm until late" and the
// structured data carries the opening time only. There are no photos of the
// club yet; the hero is a general club photograph and the page says so.
const club = clubs.find((c) => c.slug === "bisou-mayfair")!;
const images = CLUB_IMAGES["bisou-mayfair"];

const PATH = "/clubs/bisou-mayfair";
const TITLE = "Bisou Mayfair: What the Swallow Street Club Is Like";
const DESCRIPTION =
  "Bisou Mayfair, 9 Swallow Street: an audiophile bar and nightclub playing house on a Void Acoustics system. Open Thursday to Saturday, 11pm until late.";
const HERO_ALT =
  "A crowd on a dance floor in amber haze beneath stage lights and ceiling-hung speakers: a general club photograph";

const faqs = [
  {
    question: "Where is Bisou Mayfair?",
    answer:
      "Bisou is at 9 Swallow Street, Mayfair, London W1B 4DF. Swallow Street is the short lane between Regent Street and Piccadilly, and the nearest tube is Piccadilly Circus.",
  },
  {
    question: "What nights is Bisou open?",
    answer:
      "Bisou opens on Thursday, Friday and Saturday, from 11pm until late. It is closed from Sunday to Wednesday. The club publishes no closing time, so we do not state one.",
  },
  {
    question: "What music does Bisou play?",
    answer:
      "House. Bisou describes itself as an audiophile space, and the room runs on a Void Acoustics sound system tuned to it.",
  },
  {
    question: "What sound system does Bisou have?",
    answer:
      "A Void Acoustics system tuned to the room: Airten V3, Air 8.1, Tri Motion V2 and Stasys Xair loudspeakers with Bias Q1.5+, Q2+ and Q5 amplifiers, most of it finished in red.",
  },
  {
    question: "Is there a guestlist at Bisou?",
    answer:
      "Yes, by request through us. Send the date and the size of your group and we put the request in. Any entry charge is confirmed when you book.",
  },
  {
    question: "How much is a table at Bisou?",
    answer:
      "Tables start from £1,000 minimum spend. No menu is published, so we confirm the details of your table when you book.",
  },
  {
    question: "How old do you have to be to get into Bisou?",
    answer:
      "The club publishes no age limit. Bring valid photo ID, a passport or a driving licence, and expect the door to have the final say.",
  },
  {
    question: "What was at 9 Swallow Street before Bisou?",
    answer:
      "The address was Sibylla's, the 1966 club part-owned by George Harrison. Most recently it was Maison Close, which has closed. Bisou opened at the same address in 2026.",
  },
];

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
    images: [{ url: images.hero, alt: HERO_ALT }],
  },
};

export default function BisouMayfairPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={PATH}
      />
      <NightClubSchema
        name="Bisou"
        alternateName={["Bisou Mayfair", "Bisou London", "Bisou Club Mayfair"]}
        slug={PATH}
        description="Bar and nightclub at 9 Swallow Street, Mayfair, opened in 2026. House music on a Void Acoustics sound system tuned to the room. Open Thursday to Saturday from 11pm until late. Guestlist by request; tables from £1,000 minimum spend. Photo ID required."
        streetAddress="9 Swallow Street"
        postalCode="W1B 4DF"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        heroImage={images.hero}
        heroAlt={HERO_ALT}
        ctaMessage={waClubTableMessage(club.name)}
        ctaLabel="Book a Table at Bisou"
        guestlistMessage={waClubGuestlistMessage(club.name)}
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> 9 Swallow Street, Mayfair, London W1B
            4DF. Nearest tube: Piccadilly Circus.
          </p>
          <p>
            <strong>Music:</strong> House, on a Void Acoustics sound system
          </p>
          <p>
            <strong>Opening Nights:</strong> Thursday, Friday and Saturday,
            from 11pm until late. Closed Sunday to Wednesday.
          </p>
          <p>
            <strong>ID:</strong> Valid photo ID (passport or driving licence).
            The club publishes no age limit, and the door has the final say.
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables:</strong> From &pound;1,000 minimum spend
          </p>
          <p>
            <strong>Guestlist:</strong> By request through us. Any entry
            charge is confirmed when you book.
          </p>
        </div>

        <p className="text-sm text-warm-gray">
          No photographs of Bisou have been published here yet. The image at
          the top of this page is a general club photograph, not the room at 9
          Swallow Street.
        </p>

        <p>
          <strong>In short:</strong>{" "}Bisou is a bar and nightclub at 9
          Swallow Street in Mayfair, on the short lane between Regent Street
          and Piccadilly, and it opened in 2026. It describes itself as an
          audiophile space: the music is house, and the room runs on a Void
          Acoustics sound system tuned to it. It opens on Thursday, Friday and
          Saturday from 11pm until late. Guestlist is by request and tables
          start from &pound;1,000 minimum spend, both arranged through us.
          This page sets out what kind of club Bisou is, the sound system it
          is built around, its nights, the door and how to book.
        </p>

        <h2>What Kind of Club Bisou Is</h2>

        <p>
          Bisou calls itself a bar and nightclub, and it describes itself as
          an audiophile space. Most Mayfair clubs introduce themselves through
          the door, the tables or the crowd. &ldquo;Audiophile&rdquo; is
          Bisou&apos;s own word, and it puts what you hear at the centre. That
          points to a particular kind of night, with one music policy, house,
          played on a system tuned to the room.
        </p>

        <p>
          People also search for it as Bisou London and Bisou Club Mayfair;
          it is the same room. Nothing on this page is a rating, and we have
          not written up a night there. What follows is what the club says
          about itself and what we can confirm as the service that books it.
        </p>

        <h2>The Sound System</h2>

        <p>
          The room runs on a Void Acoustics system: Airten V3, Air 8.1, Tri
          Motion V2 and Stasys Xair loudspeakers, driven by Bias Q1.5+, Q2+
          and Q5 amplifiers, with most of it finished in red. The club says
          the system is tuned to the room, which is the part that matters:
          the same loudspeakers behave differently in every space, and the
          tuning is what fits them to this one.
        </p>

        <p>
          Our piece on{" "}
          <Link href="/blog/bisou-mayfair-sound-system">
            Bisou&apos;s sound system
          </Link>{" "}
          looks at the system and at what &ldquo;audiophile&rdquo; means in a
          nightclub. For the wider picture, our{" "}
          <Link href="/best-house-music-clubs-london">house music guide</Link>{" "}
          sets Bisou beside the other house rooms we book.
        </p>

        <blockquote>
          Bisou is the Mayfair club that calls itself an audiophile space,
          and a Void Acoustics system is what it offers as proof.
        </blockquote>

        <h2>The Address: 9 Swallow Street</h2>

        <p>
          Swallow Street is the short lane between Regent Street and
          Piccadilly, and the nearest tube is Piccadilly Circus. The room has
          a past: the address was Sibylla&apos;s, the 1966 club part-owned by
          George Harrison. Most recently it was Maison Close, which has
          closed, and Bisou opened at the same address in 2026.
        </p>

        <p>
          Bisou is not the only club on the lane.{" "}
          <Link href="/clubs/99-regent-street">99 Regent Street</Link>{" "}
          (formerly Cuckoo Club) has its entrance on Swallow Street too, so
          two of the clubs we book share the same street.
        </p>

        <h2>Nights and Hours</h2>

        <p>
          Bisou opens three nights a week: Thursday, Friday and Saturday, from
          11pm until late. It is closed from Sunday to Wednesday. The club
          publishes no closing time, so we do not state one. If the end of the
          night matters to your plans, ask when you book and we will tell you
          what the club confirms.
        </p>

        <h2>Guestlist and Tables</h2>

        <p>
          Guestlist at Bisou is by request through us: send the date and the
          size of your group and we put the request in. Any entry charge is
          confirmed when you book. Tables start from &pound;1,000 minimum
          spend. No menu is published, so we confirm the details of your table
          when you book. Both requests go through the WhatsApp buttons on this
          page, and our{" "}
          <Link href="/guestlist-vs-table-booking-london">
            guestlist or table guide
          </Link>{" "}
          explains how to choose between the two.
        </p>

        <h2>The Door and What to Wear</h2>

        <p>
          Bring valid photo ID: a passport or a driving licence. The club
          publishes no age limit, and the door has the final say. It publishes
          no dress code either. Our guidance is ours, as the service that
          books it, and not the club&apos;s rule: dress smart, as for any
          Mayfair club, and leave sportswear at home. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          covers what the other rooms we book expect.
        </p>

        <h2>Who Bisou Suits</h2>

        <ul>
          <li>Anyone who chooses a club for what it sounds like</li>
          <li>Groups who want house for the whole night</li>
          <li>A Thursday, Friday or Saturday in Mayfair that starts at 11pm</li>
          <li>A table from &pound;1,000 minimum spend, or a guestlist request</li>
        </ul>

        <p>
          It is the wrong choice from Sunday to Wednesday, when it is closed.
          If you want a different sound on the same lane,{" "}
          <Link href="/clubs/99-regent-street">99 Regent Street</Link>{" "}runs
          two floors with two music policies. If the sound system is the
          reason you are reading,{" "}
          <Link href="/clubs/beat-london">BEAT London</Link>{" "}in Fitzrovia is
          the other house room we book that leads with its system, and it
          opens after hours. Our{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs guide</Link>{" "}
          covers every club on the site.
        </p>

        <h2>Bisou Mayfair: Questions and Answers</h2>

        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </ArticleLayout>
    </>
  );
}
