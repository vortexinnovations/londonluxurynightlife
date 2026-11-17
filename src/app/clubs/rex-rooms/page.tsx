import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, NightClubSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs, SITE_URL, SITE_NAME } from "@/lib/constants";
import { CLUB_IMAGES } from "@/lib/images";

// The Rex Rooms, 151 King's Road, Chelsea (owner facts, 2026-11-17). Table
// minimum spends are not confirmed, so the page never quotes one; drinks prices
// are the owner's November 2026 menu and are confirmed when you book. The
// photos are the owner's own and are used only on Rex Rooms pages.
const club = clubs.find((c) => c.slug === "rex-rooms")!;
const images = CLUB_IMAGES["rex-rooms"];
const [velvetBooths, entrance, floorPlan] = images.inline;

const PATH = "/clubs/rex-rooms";
const TITLE = "The Rex Rooms Chelsea: King's Room and Champagne List";
const DESCRIPTION =
  "The Rex Rooms, 151 King's Road, Chelsea: a sculpted bar, the VIP King's Room and champagne from £350. Open Monday and Wednesday to Saturday, 11:30pm to 3am.";

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
    images: [
      {
        url: images.hero,
        alt: "The bar at The Rex Rooms, Chelsea: a hand-carved wooden counter lit from within, over a black-and-white wave floor",
      },
    ],
  },
};

function Photo({
  src,
  alt,
  caption,
  aspect = "aspect-[3/2]",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure className="my-10">
      <div className={`relative ${aspect} overflow-hidden`}>
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

export default function RexRoomsPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={PATH}
        datePublished="2026-11-17"
        dateModified="2026-11-17"
      />
      <NightClubSchema
        name={club.name}
        alternateName="Rex Rooms Chelsea"
        slug={PATH}
        description="Chelsea nightclub at 151 King's Road, on the site of the former 151 Club, opened in March 2025. Two rooms: the Main Room with the DJ and the bar, and the VIP King's Room. House, Latin and commercial music. Open Monday and Wednesday to Saturday, 11:30pm to 3am, last entry 2am. 18+ with photo ID."
        image={images.hero}
        streetAddress="151 King's Road"
        postalCode="SW3 5TX"
        openingHours="Mo,We,Th,Fr,Sa 23:30-03:00"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        heroImage={images.hero}
        heroAlt="The bar at The Rex Rooms, Chelsea: a hand-carved wooden counter lit from within, over a black-and-white wave floor"
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book The Rex Rooms"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> 151 King&apos;s Road, Chelsea, London
            SW3 5TX. Nearest tubes: Sloane Square and South Kensington.
          </p>
          <p>
            <strong>Music:</strong> House and Latin, with commercial sets
          </p>
          <p>
            <strong>Opening Nights:</strong> Monday, Wednesday, Thursday,
            Friday and Saturday, 11:30pm to 3am, last entry 2am. Closed
            Tuesday and Sunday.
          </p>
          <p>
            <strong>Age:</strong> 18+ with photo ID
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables:</strong> In the Main Room and the VIP King&apos;s
            Room. The minimum spend is confirmed when you book.
          </p>
          <p>
            <strong>Drinks:</strong> Each room has its own menu. Packages from
            &pound;1,100 in both rooms. Main Room: champagne from &pound;350,
            spirits from &pound;550. King&apos;s Room: champagne from
            &pound;500, spirits from &pound;650 (as of November 2026)
          </p>
          <p>
            <strong>Entry:</strong> Free for mixed groups before 11:30pm (as
            of November 2026). Otherwise guestlist and entry are by request,
            and any door charge is confirmed when you book.
          </p>
        </div>

        <p>
          <strong>In short:</strong>{" "}The Rex Rooms is a two-room nightclub
          at 151 King&apos;s Road in Chelsea, on the site of the former 151
          Club, open since March 2025. It is one of the most richly designed rooms on
          the King&apos;s Road: a hand-carved bar, a black-and-white wave floor
          and purple velvet booths. The VIP King&apos;s Room is where many of
          its VIP guests spend the night. Each room has its own menu:
          champagne starts at &pound;350 in the Main Room and &pound;500 in
          the King&apos;s Room, and climbs to a thirty-litre bottle. It opens on Monday
          and Wednesday to Saturday, 11:30pm to 3am, with last entry at 2am.
          This page covers the design, the two rooms, the champagne list and
          how to book a table through us.
        </p>

        <h2>The Design: A Room That Leans Towards the Surreal</h2>

        <p>
          The Rex Rooms does not look like a Mayfair club, and it does not try
          to. The centrepiece is the bar: a counter of hand-carved wood, cut
          through with organic openings and lit from within, standing on a
          black-and-white wave floor under a ceiling traced in violet light.
          Mushroom-shaped ornaments sit along the bar top. It reads less like
          a nightclub fit-out than a stage set from a slightly unreal dream,
          and that is the point of it.
        </p>

        <p>
          The seating continues the theme. Purple velvet booths run beneath
          sculpted dark-wood arches, branches and moss trail along the walls,
          amber glass globes glow between them, and silver ice buckets wait
          on every table. Where most London rooms at this level choose
          chandeliers and mirrored walls, The Rex Rooms has chosen something
          closer to an enchanted wood, and it is the reason to go.
        </p>

        <Photo
          src={velvetBooths}
          alt="Purple velvet booths beneath sculpted dark-wood arches and trailing branches at The Rex Rooms, Chelsea, with silver ice buckets on the tables"
          caption="Purple velvet booths and silver ice buckets beneath the sculpted arches."
        />

        <p>
          The theatre begins on the pavement. At 151 King&apos;s Road a neon
          sign reading &ldquo;The Rex Rooms&rdquo; hangs above a scalloped
          awning, and the door opens onto a stair lit in violet. The nearest
          tubes are Sloane Square and South Kensington.
        </p>

        <Photo
          src={entrance}
          alt="The King's Road entrance of The Rex Rooms, Chelsea, with the neon The Rex Rooms sign above a scalloped awning"
          caption="The King's Road entrance and its neon sign."
          aspect="aspect-[3/4] max-w-md"
        />

        <h2>Two Rooms: The Main Room and the King&apos;s Room</h2>

        <p>
          The club is built as two rooms with two moods. The Main Room is
          where the DJ and the bar are: open to everyone, it is where guests
          dance and mingle. The VIP King&apos;s Room is the more exclusive
          space, where many of the club&apos;s VIP guests spend their time,
          and it has the feel of a private party rather than a public room.
        </p>

        <p>
          Tables are bookable in both. On the floor plan, the King&apos;s Room
          tables, K2 to K7, sit around their own VIP bar, while the Main Room
          tables, numbered 1 to 14, are arranged around the main bar. Which
          room suits your group comes down to the night you want: the Main
          Room for being in the middle of it, the King&apos;s Room for a night
          among your own guests. We confirm the table and its minimum spend
          when you book; the minimum is not published.
        </p>

        <Photo
          src={floorPlan}
          alt="Floor plan of The Rex Rooms, Chelsea: King's Room tables K2 to K7 around the VIP bar, and Main Room tables 1 to 14 around the main bar"
          caption="The table plan: the King's Room above, the Main Room below."
          aspect="aspect-square max-w-lg"
        />

        <h2>The Champagne List, Room by Room</h2>

        <p>
          For a luxury night, the list is the second reason to book, and each
          room has its own menu. The signature packages start at
          &pound;1,100 in both rooms. In the Main Room, champagne starts at
          &pound;350 for Moët and spirits at &pound;550; in the King&apos;s
          Room, champagne starts at &pound;500 for Ruinart Brut and spirits at
          &pound;650. These are the prices as of November 2026; they can
          change and are confirmed when you book.
        </p>

        <h3>Champagne in Both Rooms</h3>

        <p>The champagne list is the same in the Main Room and the King&apos;s Room (75cl, magnums and larger bottles in brackets):</p>

        <ul>
          <li>Ruinart Brut: &pound;500</li>
          <li>Ruinart Blanc de Blancs: &pound;550 (magnum &pound;950)</li>
          <li>Krug Grande Cuvée: &pound;650</li>
          <li>Dom Pérignon Luminous: &pound;650 (magnum &pound;1,300)</li>
          <li>Armand de Brignac Brut Gold: &pound;890 (magnum &pound;1,690, jeroboam &pound;5,900, methuselah &pound;24,900)</li>
          <li>Dom Pérignon P2: &pound;1,290</li>
          <li>Dom Pérignon Rosé Luminous: &pound;1,490 (magnum &pound;3,500)</li>
          <li>Armand de Brignac Rosé: &pound;1,490 (magnum &pound;3,500, jeroboam &pound;6,900, methuselah &pound;32,900)</li>
        </ul>

        <p>
          Armand de Brignac goes further still: a nine-litre Salmanazar at
          &pound;34,900, a nine-litre Salmanazar Rosé at &pound;59,900, a
          twelve-litre Balthazar at &pound;49,500 and, at the summit, the
          Midas, thirty litres by special order, at &pound;170,000.
        </p>

        <h3>Main Room Only: Moët</h3>

        <ul>
          <li>Moët &amp; Chandon Brut Impérial: &pound;350</li>
          <li>Moët &amp; Chandon Rosé Impérial: &pound;400</li>
        </ul>

        <h3>Signature Packages in Both Rooms</h3>

        <ul>
          <li>Rex Royal Duo: &pound;1,100 (Belvedere 10 and Dom Pérignon Luminous)</li>
          <li>Rex Rosé Affair: &pound;1,900 (Belvedere 10 and Dom Pérignon Rosé Luminous)</li>
          <li>Rex Rampage: &pound;4,900 (six Dom Pérignon Luminous and a Belvedere 10 magnum)</li>
        </ul>

        <h3>Main Room Spirits</h3>

        <p>70cl, with the 1.75L magnum in brackets:</p>

        <ul>
          <li>Vodka: Belvedere 10 &pound;650 (&pound;1,390), Belvedere Pure &pound;550 (&pound;750), Meili &pound;590, Dirty Brew &pound;550</li>
          <li>Tequila: Clase Azul Ultra Añejo &pound;10,995, Clase Azul Reposado &pound;1,590 (&pound;2,100), Volcán X.A. &pound;750 (&pound;1,200), Volcán Reposado &pound;580, Volcán Blanco &pound;550</li>
          <li>Gin: 71 Gin &pound;700, Palmarae &pound;650, Tanqueray No. Ten &pound;550</li>
          <li>Rum: Eminente 7 Year Old &pound;600, Eminente Ámbar Claro &pound;550</li>
          <li>Cognac: Hennessy Paradis &pound;3,500, Hennessy XO &pound;850, Hennessy V.S. &pound;650</li>
          <li>Whisky: Glenmorangie Signet &pound;650, Sir Davis &pound;550</li>
        </ul>

        <h3>King&apos;s Room Spirits</h3>

        <p>70cl, with the magnum in brackets:</p>

        <ul>
          <li>Vodka: Belvedere 10 &pound;650 (&pound;1,390), Meili &pound;650</li>
          <li>Tequila: Clase Azul Ultra Añejo &pound;10,995, Clase Azul Reposado magnum only &pound;2,100, Volcán X.A. &pound;750 (&pound;1,200), Volcán Reposado &pound;700, Volcán Blanco &pound;650</li>
          <li>Gin: 71 Gin &pound;700, Palmarae &pound;650</li>
          <li>Rum: Eminente 7 Year Old &pound;650</li>
          <li>Cognac: Louis XIII &pound;11,900, Hennessy Paradis &pound;3,500, Hennessy XO &pound;850</li>
          <li>Whisky: Glenmorangie Signet &pound;850, Sir Davis &pound;650</li>
        </ul>

        <p>
          Louis XIII is on the King&apos;s Room menu only, and the same bottle
          can be priced differently in each room, so we confirm the menu for
          your table when you book.
        </p>

        <blockquote>
          The Rex Rooms is a room you book for the way it looks, and a list
          you book for the way the night can end: with a thirty-litre Midas.
        </blockquote>

        <h2>The Nights and the Music</h2>

        <p>
          The Rex Rooms opens five nights a week, from 11:30pm to 3am, with
          last entry at 2am:
        </p>

        <ul>
          <li>Monday: Industry Mondays</li>
          <li>Wednesday: House Wednesday</li>
          <li>Thursday</li>
          <li>Friday: Scandi Fridays</li>
          <li>Saturday: Brazilian Saturdays</li>
        </ul>

        <p>
          It is closed on Tuesday and Sunday. The music is house and Latin,
          with commercial sets: the resident, DJ Tiempo, usually plays house
          and Latin, and DJ Dan usually plays more commercial sets. If house
          is the whole point of your night, our{" "}
          <Link href="/best-house-music-clubs-london">house music guide</Link>{" "}
          sets The Rex Rooms against the rest of London.
        </p>

        <h2>The Door and the Dress Code</h2>

        <p>
          The Rex Rooms is 18+, and you need photo ID. The dress code is smart
          and stylish: avoid sportswear, and the door has the final say. As of
          November 2026, entry is free for mixed groups before 11:30pm;
          otherwise guestlist and entry are by request, and any door charge is
          confirmed when you book. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          covers what the other rooms we book expect.
        </p>

        <h2>Who The Rex Rooms Is Best For</h2>

        <ul>
          <li>Anyone who chooses a room for its design: this is one of the most distinctive interiors in London nightlife</li>
          <li>Groups who want a table in the VIP King&apos;s Room and a private-party feel</li>
          <li>A champagne celebration, from a &pound;1,100 package to a large-format bottle</li>
          <li>A night in Chelsea rather than Mayfair, with house and Latin on the decks</li>
        </ul>

        <h2>Is The Rex Rooms Worth It?</h2>

        <p>
          If design and champagne matter to you as much as the music, yes. The
          Rex Rooms is the rare London club where the room itself is the
          luxury, and the King&apos;s Room gives a group the private-party
          version of it. It is a Chelsea night, so it is not the place for
          moving between clubs on foot: for that, Mayfair&apos;s{" "}
          <Link href="/clubs/rumour-london">Rumour</Link>{" "}has one red velvet
          room on Dover Street, and{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link>{" "}pairs
          chandeliers with cocktails in St James&apos;s. Our{" "}
          <Link href="/luxury-nightclubs-london">luxury nightclubs guide</Link>{" "}
          ranks every club we cover, and our{" "}
          <Link href="/vip-nightlife-london">VIP nightlife guide</Link>{" "}
          explains how a table booking works.
        </p>
      </ArticleLayout>
    </>
  );
}
