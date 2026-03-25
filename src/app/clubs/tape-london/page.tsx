import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "tape-london")!;

export const metadata: Metadata = {
  title:
    "Tape London Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest Tape London review from nightlife insiders. Discover what the Tape London experience is really like, what is Tape London like inside, and whether this exclusive Mayfair members' club lives up to the hype.",
};

export default function TapeLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Tape London Review"
        description="An insider review of Tape London, the exclusive Mayfair members' club on Hanover Square favoured by celebrities and music industry insiders."
        slug="/clubs/tape-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Tape"
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
          There are exclusive clubs in London, and then there is Tape. Tucked
          behind an unmarked door on Hanover Square, this is the venue that
          genuinely operates on a different level of access. You will not find
          Tape advertising on Instagram. You will not stumble across it on a
          Friday night walk through Mayfair. It exists for people who already
          know about it, and that deliberate invisibility is precisely what
          makes it magnetic.
        </p>

        <h2>Walking Into Tape London</h2>

        <p>
          The entrance sets the tone immediately. There is no velvet rope
          theatre, no queue snaking down the pavement. A discreet doorway, a
          brief exchange with security who clearly know every face they are
          expecting, and then a descent into one of London&apos;s most intimate
          nightclub interiors. The staircase is narrow, deliberately so. It
          funnels you downward into a space that feels closer to a private
          recording studio lounge than a traditional club.
        </p>

        <p>
          The room itself is compact, dark, and meticulously designed. Rich
          leather seating, low ceilings that trap the bass, and a sound system
          that was clearly specified by someone who actually cares about music.
          Every surface absorbs light. The overall impression is of being
          inside something private, something not meant for the general public.
          That impression is accurate.
        </p>

        <h2>The Atmosphere and Crowd</h2>

        <p>
          Tape attracts a crowd that skews heavily toward the music industry,
          professional athletes, and actors who want to be off-duty. This is
          not a place where people come to be seen. It is a place where people
          come specifically because they will not be photographed, will not be
          tagged, and will not end up on someone&apos;s story. The phone-away
          culture here is real and enforced, and it creates an atmosphere that
          is almost impossible to replicate elsewhere in London.
        </p>

        <p>
          On a good night, you might recognise several faces from music, sport,
          or film. But the unwritten rule is clear: nobody acknowledges it. The
          energy is relaxed, convivial, conspiratorial. Groups lean into each
          other across tables. The dancefloor is small but intense. People
          actually dance here, properly, because the self-consciousness that
          plagues most Mayfair clubs simply does not exist at Tape.
        </p>

        <h2>The Music</h2>

        <p>
          The sound system at Tape deserves special mention. In a city where
          most clubs treat audio as an afterthought, Tape invested seriously in
          acoustic engineering. The bass is physical without being punishing.
          The mids are warm. You can feel the music in your chest, but you can
          still hold a conversation at your table. The DJs lean heavily into
          hip-hop, RnB, and afrobeats, with sets that feel curated rather than
          algorithmic. Expect deep cuts alongside the anthems. The musical
          knowledge in the DJ booth matches the musical knowledge in the crowd.
        </p>

        <h2>What Makes Tape Unique</h2>

        <p>
          Every club in Mayfair claims exclusivity. Tape actually delivers it.
          The capacity is deliberately kept low. The membership list is
          genuinely vetted. And the result is an atmosphere that feels less like
          a nightclub and more like a very well-connected house party. The staff
          are exceptional too, striking that rare balance between attentive and
          invisible. Your table will be looked after without anyone hovering.
        </p>

        <p>
          The other factor that separates Tape from competitors like{" "}
          <Link href="/clubs/libertine">Libertine</Link> or{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link> is the
          absence of spectacle. There are no performers, no LED shows, no
          theatrical elements. The entertainment is the room itself, the people
          in it, and the music. It is nightlife stripped back to its most
          essential ingredients, and it works precisely because every ingredient
          is best-in-class.
        </p>

        <h2>What to Expect</h2>

        <p>
          Tables at Tape start from {club.tablesFrom}, which places it at the
          higher end of London&apos;s nightlife pricing. But the minimum spend
          reflects the exclusivity of the space. You are not paying for
          fireworks or a stage show. You are paying for access to a room that
          most people in London will never enter. Bottles are premium, service
          is seamless, and the table experience feels personal rather than
          transactional.
        </p>

        <p>
          Dress code is smart and stylish but not stiff. Think designer, think
          considered, but leave the three-piece suit at home. The crowd dresses
          like people who spend real money on clothes but do not need to prove
          it. For more detail, read our{" "}
          <Link href="/guides/what-to-wear-london-clubs">
            guide to what to wear at London clubs
          </Link>
          .
        </p>

        <blockquote>
          Tape is not the club you go to for a big, loud, theatrical night out.
          It is the club you go to when you want to feel like you have been let
          into something that most people do not even know exists.
        </blockquote>

        <h2>Who Tape London Is Best For</h2>

        <ul>
          <li>Music industry professionals and creatives</li>
          <li>High-net-worth individuals who value genuine privacy</li>
          <li>Groups who want an intimate, high-quality night without spectacle</li>
          <li>Anyone who has outgrown the flashier side of Mayfair nightlife</li>
        </ul>

        <p>
          If you are visiting London and want the celebrity club experience,
          check our{" "}
          <Link href="/guides/celebrity-clubs-london">
            guide to celebrity clubs in London
          </Link>
          . Tape sits at the very top of that list, but venues like{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link> and{" "}
          <Link href="/clubs/the-london-reign">The London Reign</Link> offer a
          completely different flavour of high-end nightlife.
        </p>

        <h2>Is Tape London Worth It?</h2>

        <p>
          If exclusivity, privacy, and world-class music are your priorities,
          Tape London is unmatched in London. It is not the right choice if you
          want visual spectacle, a large dancefloor, or a party atmosphere
          driven by performers and production. But for those who understand what
          it offers, Tape is the gold standard. The {club.tablesFrom} minimum
          spend buys you entry into a genuinely rarefied world, and the
          experience justifies every penny.
        </p>

        <p>
          For first-time visitors to London&apos;s luxury nightlife scene, our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London luxury nightlife
          </Link>{" "}
          covers everything you need to know before booking.
        </p>
      </ArticleLayout>
    </>
  );
}
