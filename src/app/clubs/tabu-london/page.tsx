import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "tabu-london")!;

export const metadata: Metadata = {
  title:
    "TABU London Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest TABU London review from nightlife insiders. Discover what the TABU London experience is really like, what is TABU London like inside, and why this Japanese-inspired Mayfair club stands apart.",
};

export default function TabuLondonPage() {
  return (
    <>
      <ArticleSchema
        title="TABU London Review"
        description="An insider review of TABU London, the Japanese-inspired underground nightclub in Mayfair that delivers one of London's most atmospheric nights out."
        slug="/clubs/tabu-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at TABU"
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
          Mayfair nightlife has a sameness problem. Walk into most clubs in the
          postcode and you will find variations on a familiar formula: dark
          leather, bottle sparklers, a DJ playing hip-hop, and a crowd that
          looks like it was assembled from the same casting brief. TABU London
          breaks that pattern with a commitment to aesthetic that feels
          genuinely different. This is Mayfair nightlife reimagined through a
          Japanese lens, and the result is one of London&apos;s most atmospheric
          nights out.
        </p>

        <h2>Descending Into TABU</h2>

        <p>
          TABU is underground in both senses. The venue sits below street level,
          accessed via a staircase that descends away from the Mayfair
          pavement and into a world that owes more to a Tokyo speakeasy than a
          W1 nightclub. The transition is immediate and deliberate. The
          stairwell is designed to strip away the outside world with each step
          downward. By the time you reach the main room, Mayfair feels very
          far away.
        </p>

        <p>
          The interior is striking. Japanese-inspired design elements are woven
          throughout the space with restraint and intelligence. Dark timber,
          paper-screen dividers, carefully positioned lighting that casts
          dramatic shadows, and decorative details that reward attention. This
          is not a Western caricature of Japanese culture. It is a thoughtful
          translation that creates a mood: mysterious, sensual, and slightly
          dangerous. The colour palette is dominated by deep blacks and reds,
          punctuated by warm amber light. It feels like walking into a scene
          from a film that has not been made yet.
        </p>

        <h2>The Atmosphere</h2>

        <p>
          TABU thrives on mood. Where other Mayfair clubs aim for high energy
          from the moment you walk in, TABU builds slowly. The early part of
          the evening is almost lounge-like: low lighting, intimate
          conversation, the bass gently present but not dominating. As the
          night deepens, the energy builds. The DJ increases the tempo. The
          crowd loosens. The intimate space becomes charged. By peak hours,
          TABU has one of the most electric atmospheres in Mayfair, made more
          intense by the compact dimensions and the immersive design.
        </p>

        <p>
          The mood is enhanced by the underground location. There are no
          windows, no reminders of the world above. Time becomes irrelevant.
          The Japanese aesthetic creates a sense of otherness that liberates
          people from the social scripts they follow in more conventional
          venues. People at TABU behave differently because the space gives
          them permission to.
        </p>

        <h2>The Crowd</h2>

        <p>
          TABU attracts a crowd that values style and individuality. You will
          find the fashion-conscious here, the creatives, the people who have
          done the rounds of Mayfair clubs and want something that does not
          feel like everywhere else. The crowd tends to be well-dressed but
          not uniformly so. There is a diversity of style that you do not often
          find in the Mayfair bubble. Compared to the celebrity-heavy crowd at{" "}
          <Link href="/clubs/tape-london">Tape London</Link> or the theatrical
          audience at{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>, TABU&apos;s
          crowd is more about individual expression than collective spectacle.
        </p>

        <h2>The Music</h2>

        <p>
          Hip-hop and RnB form the backbone, as they do in much of Mayfair,
          but TABU&apos;s DJs tend to dig deeper than the mainstream playlist.
          The moody, atmospheric setting calls for a moodier, more atmospheric
          soundtrack, and the DJs respond accordingly. Expect slow-building
          hip-hop, dark RnB, and moments of unexpected genre-blending that
          match the venue&apos;s cross-cultural identity. The sound system is
          well-calibrated for the space: clear, forceful, and felt in the
          body without overwhelming conversation.
        </p>

        <h2>What Makes TABU Unique</h2>

        <p>
          The design is the obvious answer. No other club in London looks or
          feels like TABU. But the deeper answer is that TABU offers a
          genuinely different emotional register. Most Mayfair clubs operate
          on a spectrum between high-energy party and exclusive cool. TABU
          occupies a third space: atmospheric, mysterious, seductive. It is the
          club for people who want their environment to create a mood rather
          than simply facilitate a party.
        </p>

        <p>
          The intimate scale also matters. TABU is not large. Tables are close.
          The dancefloor is tight. And that proximity creates an intensity that
          larger venues struggle to match. When TABU is at capacity on a
          Saturday night, the energy in the room is almost tangible.
        </p>

        <h2>What to Expect</h2>

        <p>
          Tables start from {club.tablesFrom}. The compact layout means that
          every table feels close to the action, though corner booths offer
          more privacy for those who want it. Bottle service is attentive, and
          the cocktail programme is worth exploring before committing to
          bottles. The staff understand the venue&apos;s aesthetic and maintain
          it in their service style: precise, unhurried, slightly enigmatic.
        </p>

        <p>
          The dress code is smart with no sportswear or casual wear. Dark,
          considered outfits work best here. Think about how you would dress
          for an evening in Roppongi, not a night in Mayfair, and you will be
          on the right track. Our{" "}
          <Link href="/guides/what-to-wear-london-clubs">dress code guide</Link>{" "}
          covers the essentials.
        </p>

        <blockquote>
          TABU London is the antidote to Mayfair sameness. It replaces the
          familiar with something genuinely atmospheric, and the result is a
          night out that lingers in the memory.
        </blockquote>

        <h2>Who TABU London Is Best For</h2>

        <ul>
          <li>Design-conscious guests who care about their surroundings</li>
          <li>Couples looking for a date-night venue with serious atmosphere</li>
          <li>Groups who have done the Mayfair circuit and want a fresh experience</li>
          <li>Anyone drawn to moody, intimate spaces over bright spectacle</li>
        </ul>

        <p>
          For a full overview of the Mayfair scene, including how TABU
          compares to neighbours like{" "}
          <Link href="/clubs/libertine">Libertine</Link> and{" "}
          <Link href="/clubs/luxx-club-london">Luxx Club</Link>, read our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London luxury nightlife
          </Link>
          .
        </p>

        <h2>Is TABU London Worth It?</h2>

        <p>
          If atmosphere and design are high on your priority list, TABU is one
          of the best choices in Mayfair. It will not give you the live
          entertainment of{" "}
          <Link href="/clubs/the-london-reign">The London Reign</Link> or the
          celebrity magnetism of{" "}
          <Link href="/clubs/tape-london">Tape London</Link>. What it will
          give you is a mood, a setting, and an experience that stays with you
          long after the night ends. At {club.tablesFrom} for a table, it
          represents excellent value for a venue of this quality, and it is one
          of the few clubs in London where the design alone is worth the visit.
        </p>
      </ArticleLayout>
    </>
  );
}
