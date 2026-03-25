import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "selene-london")!;

export const metadata: Metadata = {
  title:
    "Selene London Review | Sophisticated Mayfair Elegance | London Luxury Nightlife",
  description:
    "An insider review of Selene London. Discover why this sophisticated Mayfair club is the refined choice for discerning nightlife guests, what sets it apart from flashier venues, and whether its elegant approach delivers.",
};

export default function SeleneLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Selene London Review"
        description="An insider review of Selene London, the sophisticated Mayfair nightclub offering refined interiors, impeccable service, and an elevated nightlife experience for a discerning crowd."
        slug="/clubs/selene-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Selene"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> {club.location}
          </p>
          <p>
            <strong>Music:</strong> {club.musicStyle}
          </p>
          <p>
            <strong>Opening Nights:</strong> {club.openingNights}
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables From:</strong> {club.tablesFrom}
          </p>
        </div>

        <p>
          There is a particular kind of Mayfair club that confuses volume with
          quality, where the bottle presentations grow louder, the sparklers
          more numerous, and the entire evening becomes an exercise in who can
          make the most noise. Selene London exists as a deliberate counterpoint
          to all of that. Named to evoke the quiet luminosity of moonlight, this
          is a venue that has built its identity around a simple but
          increasingly rare proposition: genuine sophistication, executed
          without compromise.
        </p>

        <h2>The Art of Refined Design</h2>

        <p>
          Walking into Selene, the first impression is one of considered
          elegance. The interiors are tasteful in a way that suggests real
          investment in design rather than a hurried attempt to look expensive.
          Muted tones, thoughtful textures, and lighting that flatters both the
          room and the people in it. There is a softness to the space that most
          Mayfair clubs lack, a quality of light and material that makes the
          room feel intimate even when it is full. Every detail, from the
          seating fabrics to the glassware on the tables, communicates a
          specific point of view about what luxury should feel like.
        </p>

        <p>
          Where a venue like{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link> overwhelms
          the senses with visual spectacle, and{" "}
          <Link href="/clubs/the-box-london">The Box</Link> deliberately
          provokes, Selene seduces through understatement. The design draws
          inspiration from some of the world&apos;s finest hotel bars and
          private members&apos; clubs, spaces where the luxury is in what has
          been edited out rather than what has been added. The result is a room
          that feels expensive without ever feeling gaudy, which is a
          distinction that matters enormously to the clientele Selene attracts.
        </p>

        <h2>The Crowd</h2>

        <p>
          Selene draws a crowd that values discretion and taste over spectacle
          and status signalling. You will find successful professionals,
          well-travelled international visitors, established entrepreneurs, and
          couples who want a premium night out without the chaos that can
          accompany some of Mayfair&apos;s busier venues. The average age skews
          slightly older than{" "}
          <Link href="/clubs/luna-club-london">Luna Club London</Link>, and the
          overall energy is correspondingly more measured. This is not a room
          that erupts. It is a room that hums, steadily and satisfyingly, with
          the kind of quiet confidence that comes from everyone in the space
          being exactly where they want to be.
        </p>

        <p>
          The door policy reflects this ethos. Selene is selective but not
          performatively so. The emphasis is on guests who will complement the
          atmosphere rather than disrupt it. Groups that arrive with the right
          energy and appropriate attire will find a warm welcome. For guidance
          on meeting the expectations, our{" "}
          <Link href="/guides/what-to-wear-london-clubs">
            guide to what to wear at London clubs
          </Link>{" "}
          provides detailed recommendations for venues with this level of
          refinement.
        </p>

        <h2>Music</h2>

        <p>
          The music programme at Selene walks a careful line between commercial
          appeal and sonic sophistication. The foundation is hip-hop, RnB, and
          polished commercial tracks, but the DJs here play with a restraint
          that matches the room. Transitions are smooth, volume levels are
          managed so that conversation remains possible at the tables, and the
          overall energy builds gradually rather than hitting hard from the
          first beat. It is a music policy designed for a room that values
          atmosphere over intensity, and it works beautifully within that
          context.
        </p>

        <p>
          The sound system delivers clean, detailed audio that fills the space
          evenly. Bass is present but controlled, never the aggressive,
          chest-rattling output you find at music-forward venues like{" "}
          <Link href="/clubs/beat-london">BEAT London</Link>. Instead, the
          emphasis is on balance, creating a sonic environment that supports
          the evening rather than dominating it. For guests who prioritise
          conversation alongside their music, this calibration is exactly right.
        </p>

        <h2>Service and the Table Experience</h2>

        <p>
          This is where Selene truly distinguishes itself. The service at
          Selene is not just good, it is exemplary. Staff anticipate needs with
          a precision that suggests genuine hospitality training rather than
          simple nightclub experience. Bottles are presented with elegance, not
          theatre. Ice is refreshed before you think to ask. Recommendations
          are made with knowledge and confidence. The entire table experience
          feels closer to a Michelin-starred restaurant than a nightclub, and
          for guests who appreciate that level of attention, it transforms the
          evening from a night out into something more memorable.
        </p>

        <p>
          Tables start from {club.tablesFrom}, and at that price point, the
          quality of service alone represents strong value. The table layout
          offers privacy without isolation, and the best positions provide a
          commanding view of the room while maintaining the intimacy that
          defines the Selene experience. For corporate entertainment, where
          service quality can make or break the evening, Selene is an
          outstanding choice. See our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate entertainment guide
          </Link>{" "}
          for more recommendations.
        </p>

        <blockquote>
          Selene is the answer to a question that discerning guests have been
          asking for years: where in Mayfair can you experience genuine luxury
          without the noise, the flash, and the constant pressure to perform
          your enjoyment for the room? Here. The answer is here.
        </blockquote>

        <h2>Dinner and Selene</h2>

        <p>
          Selene&apos;s refined atmosphere makes it a natural partner for an
          upscale dinner earlier in the evening. The transition from a quality
          Mayfair restaurant into Selene&apos;s polished environment is
          seamless, maintaining the tone of the evening rather than jarring it
          into a different register. Our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          includes pairings specifically suited to this kind of elevated
          evening. For those making a night of it, arriving at Selene between
          eleven and midnight catches the room at its most atmospheric.
        </p>

        <h2>Who Selene London Is Best For</h2>

        <ul>
          <li>Guests who prioritise sophistication and refinement over spectacle</li>
          <li>Couples seeking an elegant, upscale evening in Mayfair</li>
          <li>Corporate hosts who need impeccable service and a polished setting</li>
          <li>International visitors accustomed to the world&apos;s best hotel bars and private clubs</li>
          <li>Anyone who finds mainstream Mayfair nightlife too loud and too flash</li>
        </ul>

        <p>
          If Selene&apos;s refined approach appeals to you, consider also
          exploring{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link> for a similarly
          elegant atmosphere with a cocktail-forward approach, or{" "}
          <Link href="/clubs/maddox">Maddox Club</Link> for a venue that
          combines dinner with late-night house music. Our{" "}
          <Link href="/guides/celebrity-clubs-london">
            guide to celebrity clubs in London
          </Link>{" "}
          offers a wider perspective on the city&apos;s premium venues.
        </p>

        <h2>Is Selene London Worth It?</h2>

        <p>
          For guests who value refinement, absolutely. Selene does not try to
          be everything to everyone, and that discipline is its greatest
          strength. The {club.tablesFrom} minimum spend delivers an evening of
          genuine sophistication, impeccable service, and an atmosphere that
          feels curated rather than manufactured. It will not suit those who
          want high-energy spectacle or a raucous dancefloor, but for its
          intended audience, Selene is one of the most satisfying experiences
          Mayfair has to offer. In a neighbourhood where excess is the default,
          Selene proves that restraint can be the most luxurious choice of all.
        </p>

        <p>
          For a comprehensive overview of London&apos;s luxury nightlife
          landscape, from the provocative to the refined, our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London luxury nightlife
          </Link>{" "}
          will help you find the perfect venue for your evening.
        </p>
      </ArticleLayout>
    </>
  );
}
