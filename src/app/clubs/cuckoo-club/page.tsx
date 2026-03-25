import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "cuckoo-club")!;

export const metadata: Metadata = {
  title:
    "Cuckoo Club Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest Cuckoo Club review from London nightlife insiders. Discover what the Cuckoo Club experience is really like, its two-floor setup, and what to expect. What is Cuckoo Club like? We cover everything.",
};

export default function CuckooClubReview() {
  return (
    <>
      <ArticleSchema
        title="Cuckoo Club Review | What It's Really Like Inside"
        description="An insider review of Cuckoo Club, Mayfair's reliable two-floor nightclub on Swallow Street. House downstairs, hip-hop upstairs, and everything you need to know."
        slug="/clubs/cuckoo-club"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage("Cuckoo Club")}
        ctaLabel="Book Cuckoo Club"
      >
        <div className="info-box">
          <p><strong>Location:</strong> {club.location}</p>
          <p><strong>Music:</strong> {club.musicStyle}</p>
          <p><strong>Opening Nights:</strong> {club.openingNights}</p>
          <p><strong>Dress Code:</strong> {club.dressCode}</p>
          <p><strong>Tables From:</strong> {club.tablesFrom}</p>
        </div>

        <p>
          Swallow Street sits just off Piccadilly, a narrow lane that holds more nightlife per square metre than most neighbourhoods manage across entire postcodes. Cuckoo Club has occupied its spot here for long enough to have outlasted dozens of competitors that opened with more fanfare and closed with less dignity. There is something to be said for a venue that simply keeps delivering good nights, year after year, without reinventing itself every season or chasing whatever trend is dominating social media this month. Cuckoo Club is not the most talked-about club in Mayfair. It might be the most consistently enjoyable.
        </p>

        <h2>The Experience</h2>
        <p>
          The concept is straightforward and well-executed: two floors, two distinct musical identities, one cohesive evening. The ground floor operates as a sleek cocktail lounge that transitions into a house and deep house dance floor as the night progresses. Below, the basement delivers a more aggressive energy with hip-hop, RnB, and the kind of crowd-pleasing anthems that get tables on their feet. The genius of this arrangement is choice. Rather than committing your entire evening to a single mood, Cuckoo lets you migrate between vibes as the night demands. Start upstairs with something sophisticated, descend when the mood strikes, return when you need a breather. The staircase between floors becomes a kind of reset button.
        </p>
        <p>
          The interior strikes a balance between polished and approachable. This is unmistakably a Mayfair venue, with the calibre of design and service that implies, but it avoids the cold, museum-like grandeur that makes some neighbouring clubs feel like you need an invitation just to sit down. Booth seating wraps around the edges, the bar is accessible without a twenty-minute wait, and the proportions of both rooms allow for movement without feeling cavernous.
        </p>

        <h2>Atmosphere and Crowd</h2>
        <p>
          The crowd at Cuckoo skews young, international, and well-dressed without being excessively formal. You will find groups of friends celebrating birthdays, visitors from the Gulf states and Southern Europe, City workers decompressing on a Friday, and the occasional cluster of media types who have migrated from a Soho dinner. The ratio tends to be well-balanced, which keeps the atmosphere social rather than territorial. There is genuine mingling here, particularly around the bars and on the staircase between floors.
        </p>
        <p>
          Wednesday nights draw a slightly more industry-leaning crowd and tend to be more relaxed, making them an excellent introduction to the venue. Fridays and Saturdays are the main events, when both floors fill to capacity and the energy reaches its peak. Saturday in particular can feel electric, with the basement floor generating the kind of heat and volume that separates a night out from a proper party.
        </p>

        <h2>The Music</h2>
        <p>
          The two-floor format allows Cuckoo to cater to divergent tastes without compromise. Upstairs, the house music programming is solid and sometimes inspired. The DJs lean into deep house and tech house territory, building sets that reward patience rather than demanding immediate gratification. It is the kind of music that accompanies conversation early in the evening and commands the dance floor by one in the morning.
        </p>
        <p>
          Downstairs is a different proposition entirely. The hip-hop and RnB programming is crowd-focused, pulling from both contemporary hits and the classics that have soundtracked a thousand nights out. The bass hits harder, the vocals are louder, and the crowd responds accordingly. If you are the kind of person who splits their Spotify between Disclosure and Drake, Cuckoo Club was essentially designed for you.
        </p>

        <h2>What Makes It Unique</h2>
        <p>
          Consistency is underrated in nightlife. Venues chase novelty because it generates press coverage, but the clubs that actually earn loyalty are the ones where you know what you are getting and it is always good. Cuckoo occupies this territory with confidence. The door policy is firm but not hostile. The staff remember regulars. The drinks are properly made. The sound is well-tuned for each floor. None of these things individually are remarkable, but their collective reliability night after night is genuinely rare.
        </p>
        <p>
          The dual-floor concept also provides a practical advantage that single-room venues cannot match. If the energy on one floor does not suit your mood, you simply relocate. This flexibility means Cuckoo has a higher batting average for good nights than venues where your experience depends entirely on a single DJ and a single room.
        </p>

        <h2>What to Expect on a Typical Night</h2>
        <p>
          The evening begins upstairs with a lounge atmosphere that feels polished but unpressured. Groups arrive, settle into booths or cluster at the bar, and the house music provides a sophisticated backdrop. By eleven thirty, the ground floor has warmed considerably, and the first waves of energy begin to build on the dance floor. Around midnight, the basement opens and the crowd divides according to taste. From this point, the venue operates as two distinct parties under one roof.
        </p>
        <p>
          Table service is efficient and well-managed. Bottle packages are competitive by Mayfair standards, and the tables themselves are positioned to provide both visibility and access to the dance floor. The staff are professional without being performative, and there is a refreshing absence of the sparkler-and-flag routines that dominate more theatrical venues.
        </p>

        <h2>Who It&apos;s Best For</h2>
        <p>
          Cuckoo Club is particularly well-suited to groups with mixed musical tastes. If half your party wants house and the other half wants hip-hop, this is your answer. It works brilliantly for birthday celebrations, visitors experiencing Mayfair nightlife for the first time, and regulars who want a dependable anchor in their rotation. The Wednesday nights are ideal for a more relaxed outing, while weekends deliver full-throttle energy.
        </p>
        <p>
          It is less ideal for those seeking an extreme experience at either end of the spectrum. If you want the raw, underground edge of a warehouse party, or the ultra-exclusive intimacy of a members-only salon, Cuckoo is not that. It occupies the substantial middle ground of premium nightlife done properly, and it does so better than almost anyone.
        </p>

        <h2>Is Cuckoo Club Worth It?</h2>
        <p>
          Absolutely. Cuckoo Club will not give you the wildest story of your London trip, but it will give you one of the most reliably excellent nights. The two-floor format, competitive pricing, and consistently strong crowd make it one of the smartest choices in Mayfair. It is the club that locals recommend when friends visit, and there is no higher endorsement than that.
        </p>
        <p>
          If you want to explore other Mayfair options, <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link> offers a more intimate, heritage-rich experience, while <Link href="/clubs/lio-club-london">Lio Club London</Link> brings dinner-show theatrics into the mix. For something outside the Mayfair bubble entirely, <Link href="/clubs/beat-london">BEAT London</Link> in Fitzrovia delivers pure nightclub energy, and <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link> remains the gold standard for electronic music devotees.
        </p>
      </ArticleLayout>
    </>
  );
}
