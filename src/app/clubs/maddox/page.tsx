import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "maddox")!;

export const metadata: Metadata = {
  title:
    "Maddox Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest Maddox review from nightlife insiders. Discover what the Maddox experience is really like, what is Maddox like inside, and why this Italian restaurant-nightclub hybrid is Mayfair's best dinner-to-club destination.",
};

export default function MaddoxPage() {
  return (
    <>
      <ArticleSchema
        title="Maddox Review"
        description="An insider review of Maddox, the Mayfair restaurant-nightclub hybrid where Italian dining transitions seamlessly into house music until the early hours."
        slug="/clubs/maddox"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Maddox"
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
          The eternal problem with a big night out in Mayfair is the awkward
          gap between dinner and the club. You finish a beautiful meal at nine,
          the club does not get going until midnight, and the hours in between
          are a purgatory of overpriced cocktails in hotel bars. Maddox solves
          this with an elegance that makes you wonder why more venues have not
          tried it. Start your evening with genuinely excellent Italian food.
          Stay for the transition. End on the dancefloor at two in the morning
          to deep house that would not sound out of place in Ibiza. One
          venue, one bill, one seamless arc from aperitivo to after-dark.
        </p>

        <h2>The Restaurant</h2>

        <p>
          Let us be clear: Maddox&apos;s restaurant is not a nightclub that
          bolted on a kitchen as an afterthought. The Italian menu is
          legitimate. The pasta is handmade, the seafood is fresh, and the
          wine list reflects a genuine understanding of Italian producers
          beyond the predictable Tuscan names. The dining room is warm and
          refined, with an ambiance that owes more to a serious Mayfair
          Italian than a club antechamber. You could eat here and leave before
          the music starts and feel satisfied with your evening. That is the
          standard.
        </p>

        <p>
          Tables are dressed properly. Service is knowledgeable and unhurried.
          The risotto is excellent. The tiramisu is better than it needs to be.
          It is the kind of restaurant where you linger over a second bottle of
          wine and lose track of time, which is exactly the point. Because at
          Maddox, losing track of time means you are still there when the
          restaurant transforms into a club.
        </p>

        <h2>The Transition</h2>

        <p>
          This is where Maddox does something genuinely clever. The shift from
          restaurant to nightclub is not a hard cut. It is a gradual evolution.
          The lighting dims incrementally. The music, which has been present as
          sophisticated background throughout dinner, begins to assert itself.
          The tempo increases. The bass deepens. Staff clear the dining
          configuration with choreographed efficiency, and the room reshapes
          around the dancefloor. By the time you realise you are in a
          nightclub, you have been in a nightclub for twenty minutes. The
          transition is so smooth that it bypasses the self-conscious moment
          of walking through a club door.
        </p>

        <h2>The Nightclub</h2>

        <p>
          Once the club is in full swing, Maddox reveals its second identity.
          And this is where it genuinely surprises. The house music programme
          is serious. In a Mayfair landscape dominated by hip-hop and RnB,
          Maddox stands almost alone in championing house and deep house as
          its primary sound. The DJs are selected for their musical knowledge,
          not their celebrity. Sets are long, building, and layered. The bass
          is warm and physical. On the right night, the dancefloor at Maddox
          has an energy that rivals dedicated house music venues elsewhere in
          the city.
        </p>

        <p>
          The crowd reflects the musical choice. You will find fewer of the
          bottle-sparkler, Instagram-story crowd here and more people who
          actually want to dance. The house music audience tends to be slightly
          older, slightly more musically engaged, and far less concerned with
          being seen. The result is a dancefloor that feels authentic rather
          than performative.
        </p>

        <h2>The Crowd</h2>

        <p>
          Maddox attracts a sophisticated, slightly older crowd compared to
          pure nightclub venues like{" "}
          <Link href="/clubs/libertine">Libertine</Link> or{" "}
          <Link href="/clubs/luxx-club-london">Luxx Club</Link>. The
          dinner-first format naturally filters for people who appreciate a
          slower build and a more refined evening. You will find couples on
          date nights, groups of friends who started with the intention of a
          quiet dinner and happily abandoned that plan, and a strong
          international contingent who appreciate the European sensibility.
          The dress code is smart elegant with jackets preferred for
          gentlemen, which sets a tone that persists throughout the evening.
        </p>

        <h2>What Makes Maddox Unique</h2>

        <p>
          Two things. First, the dinner-to-club format is executed better here
          than anywhere else in London. Other venues offer dining before
          nightlife, but none manage the transition with Maddox&apos;s grace.
          The meal is not a prelude. It is the first act. And the club is not
          an afterthought. It is the second act. Together, they create a
          complete evening that makes standalone restaurants and standalone
          clubs feel like they are only offering half the experience.
        </p>

        <p>
          Second, the house music. In Mayfair, this is a genuinely
          distinctive choice. If you have spent nights at{" "}
          <Link href="/clubs/tape-london">Tape London</Link>,{" "}
          <Link href="/clubs/tabu-london">TABU</Link>, or{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>, you have
          heard excellent hip-hop and RnB. Maddox offers a completely
          different sonic landscape. For house music lovers who also want the
          Mayfair experience, there is essentially nowhere else to go.
        </p>

        <h2>What to Expect</h2>

        <p>
          Dinner reservations are separate from nightclub table bookings, and
          we recommend booking both. Club tables start from {club.tablesFrom}.
          The ideal Maddox evening begins with a dinner reservation around
          eight or nine, transitioning naturally into the nightclub from
          eleven onward. If you arrive for the club only, you miss the magic
          of the transition, which is half the experience.
        </p>

        <p>
          The dress code is the most formal on this list: smart elegant with
          jackets preferred for gentlemen. This is not the place for
          streetwear or fashion-forward experimentation. Think Italian
          refinement. Think well-tailored. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          has specific recommendations, and our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          covers the logistics of planning this kind of evening.
        </p>

        <blockquote>
          Maddox is the only venue in Mayfair where you can start with
          handmade pasta, finish on a house music dancefloor, and never
          change buildings. It makes every other night out feel like it is
          missing a chapter.
        </blockquote>

        <h2>Who Maddox Is Best For</h2>

        <ul>
          <li>Couples who want a complete evening without venue-hopping</li>
          <li>House music enthusiasts who also appreciate fine dining</li>
          <li>Corporate entertainment where you need dinner and nightlife in one booking</li>
          <li>Anyone who has grown tired of the hip-hop monopoly in Mayfair nightlife</li>
        </ul>

        <p>
          For corporate entertainment options, see our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate entertainment guide
          </Link>
          . Maddox is one of our top recommendations for client entertaining,
          precisely because the dinner-to-club format removes the logistical
          complexity of a multi-venue evening.
        </p>

        <h2>Is Maddox Worth It?</h2>

        <p>
          For the right guest, Maddox is not just worth it. It is the best
          possible use of an evening in Mayfair. The combination of genuine
          Italian dining and genuine house music nightlife, in a single
          refined setting, is unique in London. The {club.tablesFrom} club
          minimum is fair, and the dinner pricing is reasonable for Mayfair
          Italian of this quality. If you want spectacle, go to{" "}
          <Link href="/clubs/the-london-reign">The London Reign</Link>. If
          you want exclusivity, go to{" "}
          <Link href="/clubs/tape-london">Tape London</Link>. But if you want
          the most complete evening in Mayfair, from first course to last
          dance, Maddox is the only answer.
        </p>

        <p>
          First time in London? Our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London luxury nightlife
          </Link>{" "}
          will help you plan your visit and decide which venues suit your
          style.
        </p>
      </ArticleLayout>
    </>
  );
}
