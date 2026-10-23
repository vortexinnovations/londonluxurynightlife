import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, NightClubSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs, SITE_URL, SITE_NAME } from "@/lib/constants";
import { CLUB_IMAGES } from "@/lib/images";

// Rumour opened in October 2026 as a full rebrand of Tabu (same ownership, new
// design and concept). The old URL /clubs/tabu-london redirects here
// permanently (next.config.ts).
const club = clubs.find((c) => c.slug === "rumour-london")!;
const images = CLUB_IMAGES["rumour-london"];
const [boothsWide, archedDoorway, boothDiscWall, bar, boothsLighting, tablesCurtains] = images.inline;

const PATH = "/clubs/rumour-london";
const TITLE = `${club.name} (formerly ${club.previousName}): Review, Booths and Guestlist`;
const DESCRIPTION =
  "Rumour (formerly Tabu), 1 Dover Street, Mayfair: one red velvet room, open Wednesday to Saturday, no photos. Booths from £1,000 and a ladies' guestlist.";

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
    images: [{ url: images.hero, alt: "Rumour (formerly Tabu): the DJ booth with Pioneer decks in front of a backlit disc wall" }],
  },
};

function Photo({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="editorial-img object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <figcaption className="font-prose italic text-sm text-warm-gray mt-3">{caption}</figcaption>
    </figure>
  );
}

export default function RumourLondonPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={PATH}
        datePublished="2026-10-20"
        dateModified="2026-10-23"
      />
      <NightClubSchema
        name={club.name}
        alternateName={club.previousName}
        slug={PATH}
        description="Mayfair nightclub at 1 Dover Street, formerly Tabu: one intimate room of around 200 built around red velvet booths, open-format music and no photography on the floor. 18+ with photo ID."
        image={images.hero}
        streetAddress="1 Dover Street"
        postalCode="W1S 4LD"
        openingHours="We-Sa 23:00-04:00"
      />
      <ArticleLayout
        title={club.name}
        previousName={club.previousName}
        subtitle={club.tagline}
        heroImage={images.hero}
        heroAlt="Rumour (formerly Tabu), Mayfair: the DJ booth with Pioneer decks in front of a backlit gold disc wall and red velvet booths"
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Rumour"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> 1 Dover Street, Mayfair, London W1S 4LD. A
            few minutes from Green Park; Piccadilly Circus and Bond Street are
            walkable.
          </p>
          <p>
            <strong>Music:</strong> Open format: hip-hop, RnB and house, read to the
            room on the night
          </p>
          <p>
            <strong>Opening Nights:</strong> Wednesday to Saturday, 11pm to 4am
          </p>
          <p>
            <strong>Age:</strong> 18+ with photo ID
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Booths From:</strong> {club.tablesFrom} minimum spend, covering
            entry for the whole group
          </p>
          <p>
            <strong>Guestlist:</strong>{" "}Ladies, free to &pound;20 on the door
            depending on the night and how busy it is
          </p>
          <p>
            <strong>Photography:</strong> None in the main room or on the dance floor
          </p>
        </div>

        <p>
          <strong>In short:</strong>{" "}Rumour (formerly Tabu) is the club at 1
          Dover Street, Mayfair: one intimate room of around 200, built around
          booths in deep red velvet, with a no-photography policy on the floor
          that the floor team enforces. It opened in October 2026 as a full
          rebrand of Tabu under the same ownership, with a new design and a new
          concept, and it runs Wednesday to Saturday, 11pm to 4am. Booths start
          from &pound;1,000 minimum spend and cover entry for the whole group;
          the guestlist is for ladies. This review covers the room, the door,
          the booths and how to book through us.
        </p>

        <h2>One Red Room</h2>

        <p>
          Rumour is a single room, and it is built to feel like one. Booths in
          deep red velvet line the room beneath walls of backlit gold discs,
          under dark timber beams, with red velvet curtains, an arched doorway
          and low red lighting.
          With a capacity of around 200, the room fills early by design, and the
          booths are the point of the place: this is a club for a group that
          wants its own corner of one room. Dover Street sits between Piccadilly
          and Grafton Street, a few minutes&apos; walk from Green Park.
        </p>

        <Photo
          src={boothsWide}
          alt="A row of red velvet booths beneath the backlit disc wall at Rumour, Mayfair"
          caption="Red velvet booths beneath the disc wall."
        />

        <Photo
          src={archedDoorway}
          alt="The lit arched doorway and steps between two backlit disc walls at Rumour, Mayfair"
          caption="The arched doorway between two disc walls."
        />

        <h2>No Photos on the Floor</h2>

        <p>
          The clearest difference between Rumour and the rooms around it is the
          camera policy. There are no photos and no video in the main room or on
          the dance floor, and the floor team enforces it. For guests who would
          rather their night stayed off someone else&apos;s story, that one rule
          does more for privacy than any velvet rope, and it changes the feel of
          the room: people are there for the night, not for the record of it.
          The photos on this page are the venue&apos;s own; guests cannot take
          photos inside.
          For more on discretion as the new status symbol, see our piece on{" "}
          <Link href="/blog/quiet-luxury-london-nightlife">
            quiet luxury in London nightlife
          </Link>
          .
        </p>

        <Photo
          src={boothDiscWall}
          alt="A curved red velvet booth with ice buckets on the tables beneath the gold disc wall at Rumour, Mayfair"
          caption="A curved booth beneath the disc wall, with ice buckets on the tables."
        />

        <h2>The Music</h2>

        <p>
          Rumour plays open format: hip-hop, RnB and house, read to the room on
          the night rather than locked to one genre. In a room this size,
          reading the room is the job, and a set that moves between RnB and
          house keeps a mixed crowd together. If one genre is the whole point of
          your night, our{" "}
          <Link href="/best-hip-hop-clubs-london">hip-hop club ranking</Link>{" "}
          and{" "}
          <Link href="/best-house-music-clubs-london">house music guide</Link>{" "}
          sort the rest of London by sound.
        </p>

        <Photo
          src={bar}
          alt="The bar and its backlit bottle display at Rumour, Mayfair"
          caption="The bar, with its backlit bottle display."
        />

        <h2>The Door and the Dress Code</h2>

        <p>
          Rumour is 18+ with photo ID. The dress code is smart and dressed up:
          heels for ladies, a considered look for men, no sportswear and no
          fancy dress. Trainers are at the door&apos;s discretion, which means
          not relying on them. The guestlist is a ladies&apos; list and men are
          not added to it, so men and mixed groups come in on a booth, which
          covers entry for the whole group. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          covers the rest of Mayfair for comparison.
        </p>

        <h2>Booths and Guestlist</h2>

        <p>
          Booths start from &pound;1,000 minimum spend, and a booth is the route
          in for men and mixed groups. The minimum covers entry for the whole
          group: across eight people it works out at roughly &pound;125 each.
          We confirm the booth, the minimum and the night&apos;s terms before
          you commit.
        </p>

        <p>
          The ladies&apos; guestlist runs from free to &pound;20 on the door,
          depending on the night and how busy the room is. Wednesday and
          Thursday are the more relaxed nights and the easiest for guestlist
          entry; Friday and Saturday fill out and are worth arranging in
          advance. Halloween 2026 falls on Saturday 31 October and New
          Year&apos;s Eve on Thursday 31 December; both are regular opening
          nights, and booths for those dates should be booked early. Our{" "}
          <Link href="/guestlist-vs-table-booking-london">
            guestlist versus table guide
          </Link>{" "}
          sets out when each route makes sense.
        </p>

        <Photo
          src={tablesCurtains}
          alt="Tables set with glassware and ice buckets in front of red velvet curtains at Rumour, Mayfair"
          caption="Tables set with glassware and ice buckets. A booth's minimum spend goes on drinks."
        />

        <h2>Private Hire and Membership</h2>

        <p>
          Rumour presents itself as a members&apos; club, but membership is not
          needed to book through us: we arrange booths and guestlist for
          non-members. The 200-capacity room also suits a takeover, for a
          private party or a corporate night, and we handle private hire
          enquiries with terms on request. Our guide to{" "}
          <Link href="/blog/host-private-event-london-nightclub">
            hosting a private event in a London nightclub
          </Link>{" "}
          covers how a takeover works.
        </p>

        <h2>From Tabu to Rumour</h2>

        <p>
          Rumour is not a new coat of paint on Tabu. The ownership is the same,
          but the rebrand is complete: a new name, a new design and a new
          concept, opened in October 2026. Where Tabu was known for its
          Japanese-inspired minimalism, Rumour went the other way, into red
          velvet, backlit disc walls and red light. Our{" "}
          <Link href="/blog/tabu-london-japanese-underground-nightclub">
            earlier piece on Tabu and what changed
          </Link>{" "}
          keeps the history; everything on this page describes the club as it
          trades today.
        </p>

        <Photo
          src={boothsLighting}
          alt="Booths around the room with red LED underlighting at Rumour, Mayfair"
          caption="Booths around the room, lit red from below."
        />

        <blockquote>
          Rumour&apos;s best feature is the one you cannot photograph: one red
          room, around two hundred people and no cameras on the floor.
        </blockquote>

        <h2>Who Rumour Is Best For</h2>

        <ul>
          <li>Guests who value privacy: no photos or video on the floor</li>
          <li>Groups who want a booth at the centre of one intimate room rather than a table at the edge of a big one</li>
          <li>Ladies on the guestlist, especially on a relaxed Wednesday or Thursday</li>
          <li>A private party or corporate takeover in a room of around 200</li>
        </ul>

        <h2>Is Rumour Worth It?</h2>

        <p>
          If privacy and atmosphere matter more to you than spectacle, yes. A
          booth from &pound;1,000 buys a seat in one of the most distinctive
          rooms in Mayfair, entry for the whole group and a night that stays off
          social media. It is not the place for a big-room production or for a
          group that wants to spread across two floors; for that,{" "}
          <Link href="/clubs/99-regent-street">99 Regent Street</Link>{" "}(formerly
          Cuckoo Club) runs hip-hop and RnB upstairs and house downstairs a short
          walk away, with tables from &pound;600. For the hardest door in
          Mayfair,{" "}
          <Link href="/clubs/tape-london">Tape London</Link>; for dinner that
          turns into house music,{" "}
          <Link href="/clubs/maddox">Maddox</Link>; for chandeliers and
          cocktails,{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link>. Our{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs guide</Link>{" "}
          ranks every club we cover.
        </p>
      </ArticleLayout>
    </>
  );
}
