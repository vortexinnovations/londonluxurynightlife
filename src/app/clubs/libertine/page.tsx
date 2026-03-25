import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";

const club = closedClubs.find((c) => c.slug === "libertine")!;

export const metadata: Metadata = {
  title:
    "Libertine London (Permanently Closed) | Find Alternative Mayfair Clubs",
  description:
    "Libertine in Mayfair has permanently closed. Discover what made this futuristic venue special and find the best alternative clubs still open in London.",
  robots: { index: false, follow: true },
};

export default function LibertinePage() {
  return (
    <>
      <ArticleSchema
        title="Libertine Review"
        description="An insider review of Libertine, the futuristic Mayfair nightclub where cutting-edge design meets fashion-forward nightlife."
        slug="/clubs/libertine"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">Libertine has permanently closed. This review is kept for reference. Looking for open venues? See our <Link href="/guides/complete-guide-london-luxury-nightlife">complete guide to London&apos;s luxury nightlife</Link> for current recommendations.</p>
        </div>

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
          Libertine has always understood that the way a nightclub looks
          changes the way a nightclub feels. While much of Mayfair trades on
          heritage, tradition, and the reassuring weight of dark wood and deep
          leather, Libertine went in the opposite direction. This is a venue
          built for the future: LED-lit surfaces, geometric lines, reflective
          materials that fragment and multiply the energy in the room. It is
          sleek, cold in the best sense, and utterly deliberate. Walking into
          Libertine feels like walking into a nightclub designed by someone who
          just returned from Tokyo, Berlin, and Milan in the same week.
        </p>

        <h2>First Impressions</h2>

        <p>
          The design hits you immediately. Libertine&apos;s interior is a
          masterclass in LED integration. Not the garish, fairground approach
          that lesser venues attempt, but a precise, architectural use of
          light as a material. The lighting shifts through the night,
          responding to the music and the mood, transforming the same physical
          space into something that feels different at midnight than it did at
          eleven. Mirrored surfaces amplify the effect. The room seems to
          pulse, expand, and contract with the beat. It is genuinely
          immersive without resorting to the circus-act approach of venues
          like <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>.
        </p>

        <p>
          The layout is smart. The main room is anchored by a prominent DJ
          booth and a dancefloor that serves as the gravitational centre.
          Tables line the perimeter and occupy raised sections, offering clear
          sightlines to the floor while maintaining a degree of privacy. The
          VIP area is elevated both literally and figuratively, with premium
          table positions that command the room.
        </p>

        <h2>The Crowd</h2>

        <p>
          Libertine attracts what can only be described as Mayfair&apos;s
          fashion crowd. The clientele here takes personal style seriously.
          Where other clubs reward generic smartness, Libertine rewards
          statement dressing. You will see designer pieces, bold colour
          choices, and outfits that were clearly planned with intention. The
          crowd skews young, affluent, and internationally diverse. There is a
          strong contingent of fashion industry professionals, models, and the
          social media-adjacent creative class that gravitates toward
          photogenic environments.
        </p>

        <p>
          This makes the atmosphere sharp and energetic rather than laid-back.
          People at Libertine are switched on. They are here to be seen, to
          dance, to perform their own version of the night. The energy is
          competitive in a way that is exciting rather than exhausting, driven
          by a crowd that genuinely wants to be there and has dressed for the
          occasion.
        </p>

        <h2>The Music</h2>

        <p>
          Hip-hop, RnB, and commercial tracks form the core playlist, but
          Libertine&apos;s DJs have more latitude than most Mayfair
          counterparts. The futuristic setting invites musical adventurousness.
          You will hear tracks here that you will not hear at{" "}
          <Link href="/clubs/tape-london">Tape London</Link> or{" "}
          <Link href="/clubs/tabu-london">TABU</Link>, mixed with the Mayfair
          staples that keep the dancefloor full. The sound system is powerful
          and well-tuned to the room. Bass is prominent without being
          overwhelming, and the mids cut through clearly. On peak nights, the
          synergy between the lighting programme and the DJ creates moments
          that are genuinely transcendent.
        </p>

        <h2>What Makes Libertine Unique</h2>

        <p>
          The design is the headline, but the real differentiator is the
          atmosphere it creates. Libertine occupies a space between the
          exclusive intimacy of a members&apos; club and the high-energy
          spectacle of a super club. It is sophisticated enough for a
          discerning crowd but dynamic enough to generate real dancefloor
          energy. That balance is remarkably hard to strike, and most venues
          in London fail at it. Libertine succeeds because every element, from
          the lighting to the music to the door policy, is calibrated toward
          the same target.
        </p>

        <p>
          It is also one of the more consistent clubs in Mayfair. Where some
          venues fluctuate wildly between brilliant Saturdays and mediocre
          midweek sessions, Libertine maintains a reliable standard across its
          Wednesday-to-Saturday programme. That consistency earns loyalty from
          a crowd that has options every night of the week.
        </p>

        <h2>What to Expect</h2>

        <p>
          Tables start from {club.tablesFrom}. The table experience at
          Libertine is well-managed, with attentive hosts and a bottle service
          that runs smoothly even on the busiest nights. The cocktail and
          champagne selection is extensive, and the presentation carries the
          same attention to detail as the venue design. Sparklers and bottle
          parades are available for those who want them, but are not forced on
          every table in the way some Mayfair clubs insist upon.
        </p>

        <p>
          Dress code is smart and fashionable, no trainers. This is one of the
          few Mayfair clubs where underdressing will genuinely stand out,
          because the crowd sets a high bar. Consult our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          for recommendations.
        </p>

        <blockquote>
          Libertine is the club for people who believe a night out should look
          as good as it feels. The design is world-class, the crowd matches
          it, and the result is a nightclub experience that feels distinctly
          twenty-first century.
        </blockquote>

        <h2>Who Libertine Is Best For</h2>

        <ul>
          <li>Fashion-conscious guests who want an environment that matches their effort</li>
          <li>Groups who want high-energy nightlife with a sophisticated edge</li>
          <li>Design enthusiasts who appreciate architecture and lighting as art</li>
          <li>Anyone who finds traditional Mayfair club interiors tired and predictable</li>
        </ul>

        <p>
          If you are comparing Mayfair options, Libertine pairs well with{" "}
          <Link href="/clubs/luxx-club-london">Luxx Club</Link> for a
          visually driven night, or contrasts sharply with the moody,
          underground atmosphere of{" "}
          <Link href="/clubs/tabu-london">TABU London</Link>. Our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete nightlife guide
          </Link>{" "}
          helps you choose between them.
        </p>

        <h2>Is Libertine Worth It?</h2>

        <p>
          For anyone who cares about design, fashion, and nightlife as
          experience rather than just entertainment, Libertine is essential.
          It does not offer the raw exclusivity of{" "}
          <Link href="/clubs/tape-london">Tape London</Link> or the theatrical
          madness of{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>, but it
          delivers something neither can: a nightclub that feels genuinely
          modern. The {club.tablesFrom} minimum spend gets you into a room
          that most cities in the world would struggle to match, and on a good
          Saturday night, Libertine is as good as nightlife gets.
        </p>
        <h2>Libertine Has Closed — Where to Go Instead</h2>

        <p>
          Libertine is permanently closed, but London&apos;s luxury nightlife scene
          continues to thrive. If you loved what Libertine offered, here are the
          best alternatives currently open:
        </p>

        <ul>
          <li>
            <Link href="/clubs/tabu-london">TABU London</Link> — A design-forward
            Mayfair venue with a bold aesthetic and fashion-conscious crowd that
            captures a similar energy to what Libertine delivered.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link> — A sleek,
            modern Mayfair club with striking interiors and a sophisticated
            atmosphere for those who appreciate cutting-edge venue design.
          </li>
        </ul>

        <p>
          For a full overview of what is currently open, see our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London&apos;s luxury nightlife
          </Link>.
        </p>
      </ArticleLayout>
    </>
  );
}
