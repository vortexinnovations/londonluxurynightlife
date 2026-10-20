import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, NightClubSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs, SITE_URL, SITE_NAME } from "@/lib/constants";
import { CLUB_IMAGES } from "@/lib/images";

// 99 Regent Street opened in October 2026 on the floors the Cuckoo Club used;
// the Cuckoo Club name is no longer used. The old URL /clubs/cuckoo-club
// redirects here permanently (next.config.ts).
const club = clubs.find((c) => c.slug === "99-regent-street")!;
const images = CLUB_IMAGES["99-regent-street"];
const [entrance, staircase, bar, downstairs] = images.inline;

const PATH = "/clubs/99-regent-street";
const TITLE = `${club.name} (formerly ${club.previousName}): Review and Tables`;
const DESCRIPTION =
  "99 Regent Street (formerly Cuckoo Club) reviewed: two floors off Swallow Street, hip-hop and RnB upstairs, house downstairs, a 19+ door and tables from £600. Open Wednesday to Saturday.";

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
    images: [{ url: images.hero, alt: "99 Regent Street (formerly Cuckoo Club): the upstairs main room" }],
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

export default function NinetyNineRegentStreetPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={PATH}
        datePublished="2026-10-20"
        dateModified="2026-10-20"
      />
      <NightClubSchema
        name={club.name}
        alternateName={club.previousName}
        slug={PATH}
        description="Two-floor nightclub at the Piccadilly Circus end of Regent Street, formerly the Cuckoo Club: open-format hip-hop and RnB upstairs, house downstairs, 19+ with photo ID."
        image={images.hero}
        streetAddress="99 Regent Street"
        postalCode="W1B 4EZ"
        openingHours="We-Sa 23:00-04:00"
      />
      <ArticleLayout
        title={club.name}
        previousName={club.previousName}
        subtitle={club.tagline}
        heroImage={images.hero}
        heroAlt="99 Regent Street (formerly Cuckoo Club): the upstairs main room, with banquette seating, the bar and the DJ booth"
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at 99 Regent Street"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> 99 Regent Street, London W1B 4EZ. Entrance on
            Swallow Street, two minutes from Piccadilly Circus; Oxford Circus and
            Green Park are walkable.
          </p>
          <p>
            <strong>Music:</strong> Open-format hip-hop and RnB upstairs, house downstairs
          </p>
          <p>
            <strong>Opening Nights:</strong> Wednesday to Saturday, 11pm to 4am. Both
            floors on Friday and Saturday; one floor on Wednesday and Thursday.
          </p>
          <p>
            <strong>Age:</strong> 19+ with physical photo ID
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables From:</strong> {club.tablesFrom} minimum spend, spent on
            drinks and covering entry for the whole group
          </p>
          <p>
            <strong>Guestlist:</strong> By request, mixed groups welcome. Entry from
            free to about &pound;50, depending on the night and arrival time.
          </p>
        </div>

        <p>
          <strong>In short:</strong>{" "}99 Regent Street (formerly Cuckoo Club) is
          the two-floor club at the Piccadilly Circus end of Regent Street,
          entered through the Swallow Street door the Cuckoo Club used for the
          best part of two decades. The Cuckoo founders have reunited on the
          same floors with a new concept, styled NinetyNine or simply 99:
          open-format hip-hop and RnB in the upstairs main room, house
          downstairs, a 19+ door and tables from &pound;600 minimum spend. It
          opened in October 2026 and runs Wednesday to Saturday, 11pm to 4am.
          This review covers the rooms, the door, what a table or the guestlist
          costs, and how to book either through us.
        </p>

        <h2>An Address With a Past</h2>

        <p>
          Few London clubs can claim a lineage like this one. The rooms at 99
          Regent Street have been a nightlife address since 1954, the era of Al
          Burnett&apos;s Stork Club, whose guests ran from Harold Macmillan to
          Frank Sinatra and Elizabeth Taylor. The Cuckoo Club followed and held
          the floor for the best part of two decades. 99 is the next chapter
          rather than a repaint: the Cuckoo founders, the same floors, a new
          name and a new concept. Our{" "}
          <Link href="/blog/cuckoo-club-mayfair-two-floors-one-night">
            earlier piece on the Cuckoo Club and what changed
          </Link>{" "}
          keeps the history; everything below describes the club as it trades
          today.
        </p>

        <Photo
          src={entrance}
          alt="99 Regent Street (formerly Cuckoo Club): the reception at the Swallow Street entrance, under the NinetyNine Regent Street sign"
          caption="The reception inside the Swallow Street entrance. The images on this page are renders of the new interiors."
        />

        <h2>Two Floors, Two Sounds</h2>

        <p>
          The layout is the club&apos;s strongest card. Two floors, each with a
          capacity of around 200, run as different rooms rather than one room
          split in half. Upstairs is the main room, where most of the tables
          sit: open-format hip-hop and RnB, dark panelling, warm low lighting,
          banquette seating and a long bar. Downstairs is darker and more
          dance-focused, built around house. A staircase connects the two, and
          on a Friday or Saturday a group can move between them all night
          without leaving the building. On Wednesday and Thursday one floor
          opens, so midweek nights run in a single room.
        </p>

        <Photo
          src={staircase}
          alt="99 Regent Street: the staircase between the two floors, with a lit handrail beside a terrazzo corridor"
          caption="The staircase between the floors. Both run on Friday and Saturday; one opens on Wednesday and Thursday."
        />

        <p>
          Most of the tables are upstairs in the main room, set along the
          banquettes within reach of the long bar. The lighting is low and warm
          throughout, closer to a members&apos; lounge than a production club,
          and it suits a group that wants to talk between tracks as much as one
          that wants to dance.
        </p>

        <Photo
          src={bar}
          alt="99 Regent Street: the bar in the upstairs main room, lit from below, with backlit shelves"
          caption="The bar upstairs. A table's minimum spend goes on drinks rather than being charged on top."
        />

        <Photo
          src={downstairs}
          alt="99 Regent Street: the downstairs room, the house floor, with its own bar, curtains and velvet banquettes"
          caption="Downstairs, the house floor: darker and more dance-focused than the main room above."
        />

        <h2>The Door: 19+ and Properly Dressed</h2>

        <p>
          99 asks for 19+ with physical photo ID, a year older than most London
          doors, so bring the card or passport itself rather than a picture of
          it. The dress code is elegant and it is enforced: no sportswear, no
          running trainers, no shorts, no caps, no fancy dress. Clean, minimal
          trainers are at the door&apos;s discretion, which in practice means
          not relying on them. Black is the safe choice. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          covers the rest of the Mayfair circuit for comparison.
        </p>

        <h2>Tables and Guestlist</h2>

        <p>
          Tables start from &pound;600 minimum spend. The figure is spent on
          drinks rather than charged as a fee on top, and it covers entry for
          the whole group, which makes 99 one of the gentler first tables in
          Mayfair. Minimums rise with the night, the size of the group and the
          position of the table; VIP and larger tables are arranged on request.
          Halloween 2026 falls on Saturday 31 October and New Year&apos;s Eve on
          Thursday 31 December; both are regular opening nights, and tables for
          those dates are worth booking early.
        </p>

        <p>
          The guestlist is by request and mixed groups are welcome; it is not a
          ladies-only list. Entry runs from free to about &pound;50, depending
          on the night and the time you arrive. We confirm names and the
          night&apos;s terms before you go, so nothing is decided on the
          pavement. If you are weighing the two routes, our{" "}
          <Link href="/guestlist-vs-table-booking-london">
            guestlist versus table guide
          </Link>{" "}
          explains the trade-off.
        </p>

        <h2>Private Hire, Corporate Nights and Membership</h2>

        <p>
          Membership exists at the venue. Its details are not published, and you
          do not need it to book through us: we arrange tables and guestlist for
          non-members. We also take private event and hire enquiries, corporate
          nights included, with capacities, minimums and terms on request. For a
          client evening that has to work for a mixed group, our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate entertainment guide
          </Link>{" "}
          sets out how to plan it.
        </p>

        <blockquote>
          99 Regent Street is the rare Mayfair club that can be two different
          nights at once. Pick a floor, or pick both.
        </blockquote>

        <h2>Who 99 Regent Street Is Best For</h2>

        <ul>
          <li>Groups that cannot agree on a genre: hip-hop and RnB upstairs, house downstairs on Friday and Saturday</li>
          <li>Anyone who wants an elegant room and a proper door rather than a spectacle</li>
          <li>A first Mayfair table without a four-figure minimum, with entry included for the group</li>
          <li>Mixed groups on the guestlist (it is not a ladies-only list)</li>
        </ul>

        <h2>Is 99 Regent Street Worth It?</h2>

        <p>
          For the right group, yes. A &pound;600 minimum is one of the lower
          starting points in Mayfair, the door is stricter than most, and on
          Friday and Saturday the two floors give a group options that a single
          room cannot. Treat the 19+ rule and the dress code as fixed and the
          rest of the night is straightforward. If you would rather have one
          intimate room than two floors,{" "}
          <Link href="/clubs/rumour-london">Rumour</Link>{" "}(formerly Tabu) on
          Dover Street is the natural comparison: around 200 capacity, red
          velvet booths and no photography on the floor. For the music-industry
          room,{" "}
          <Link href="/clubs/tape-london">Tape London</Link>; for a dressed-up
          night that begins with cocktails,{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link>; for the
          showclub on Piccadilly,{" "}
          <Link href="/clubs/reign-london">Reign London</Link>. Our{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs guide</Link>{" "}
          ranks every club we cover, and our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London&apos;s luxury nightlife
          </Link>{" "}
          covers the rest.
        </p>
      </ArticleLayout>
    </>
  );
}
