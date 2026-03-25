import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "dear-darling")!;

export const metadata: Metadata = {
  title:
    "Dear Darling Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest Dear Darling review from London nightlife insiders. Discover what the Dear Darling experience is really like, from opulent cocktails to late-night revelry. What is Dear Darling like? Our full review.",
};

export default function DearDarlingReview() {
  return (
    <>
      <ArticleSchema
        title="Dear Darling Review | What It's Really Like Inside"
        description="An insider review of Dear Darling, Mayfair's opulent cocktail bar with chandeliers, velvet booths, and late-night energy. Everything you need to know before visiting."
        slug="/clubs/dear-darling"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage("Dear Darling")}
        ctaLabel="Book Dear Darling"
      >
        <div className="info-box">
          <p><strong>Location:</strong> {club.location}</p>
          <p><strong>Music:</strong> {club.musicStyle}</p>
          <p><strong>Opening Nights:</strong> {club.openingNights}</p>
          <p><strong>Dress Code:</strong> {club.dressCode}</p>
          <p><strong>Tables From:</strong> {club.tablesFrom}</p>
        </div>

        <p>
          Not every evening in Mayfair needs to end in a nightclub. Sometimes the best nights are the ones that begin with exceptional cocktails in a room so beautiful you do not want to leave, and then slowly, imperceptibly, the room transforms around you until you realise you are dancing and it is two in the morning and you have not once considered going anywhere else. Dear Darling understands this trajectory intimately. It is a venue built for the long evening, the kind that unfolds in chapters rather than arriving all at once.
        </p>

        <h2>The Experience</h2>
        <p>
          The first thing you notice is the room itself. Dear Darling is genuinely stunning. Crystal chandeliers throw fractured light across velvet-upholstered booths in deep jewel tones. The ceiling feels ornate without tipping into gaudy. Every surface has been considered with the kind of obsessive attention to detail that separates a beautiful bar from a decorated one. There is gold, but it is burnished rather than bright. There is opulence, but it is the sort that invites you to settle in rather than stand back and admire from a distance.
        </p>
        <p>
          The space is designed around intimacy. Booths are positioned to create pockets of privacy within a social room. The bar itself is a centrepiece, backlit and stocked with the kind of depth that signals serious intent. The seating flows naturally, guiding you from arrival through cocktails through the gradual escalation of the evening without any awkward transitions between zones or moods. Dear Darling does not have a distinct moment where it switches from bar to club. The transformation is seamless, driven by music that builds in tempo and a crowd that responds organically.
        </p>

        <h2>Atmosphere and Crowd</h2>
        <p>
          The crowd at Dear Darling is polished, elegant, and overwhelmingly well-dressed. This is a venue where the dress code is not merely enforced but embraced. Women arrive in cocktail dresses and statement pieces. Men wear tailored jackets without being asked. The atmosphere is flirtatious and social without the aggressive energy that pervades some late-night venues. Conversations happen easily here, facilitated by a room that is loud enough to feel alive but restrained enough to permit actual dialogue.
        </p>
        <p>
          The demographic leans toward late twenties through forties, with a strong contingent of professionals, creatives, and international visitors who have sought out something more refined than the standard nightclub experience. There is a noticeable absence of the stag-do energy and bottle-popping theatrics that characterise some Mayfair venues. People come to Dear Darling to feel good, not to be seen performing.
        </p>

        <h2>The Cocktails</h2>
        <p>
          If cocktails are an afterthought at most nightlife venues, at Dear Darling they are the main event, at least for the first half of the evening. The menu is ambitious and well-executed, with a range that moves from reimagined classics to house creations that justify the price point. The bartenders work with precision and evident pride. Ingredients are fresh, presentations are considered, and there is a genuine depth of knowledge behind the bar that elevates the experience beyond simple drinks service.
        </p>
        <p>
          Standout offerings tend toward the aromatic and complex, with creative use of infusions, smoke, and unusual flavour pairings that reward adventurous ordering. The champagne and spirits list is extensive, catering to table bookings and celebrations without neglecting those who prefer to explore the cocktail programme one glass at a time. This dual commitment to both bottle service and craft bartending is rare and speaks to Dear Darling&apos;s hybrid identity.
        </p>

        <h2>The Late Night</h2>
        <p>
          The transition from cocktail bar to late-night venue is Dear Darling&apos;s signature move, and it executes it with remarkable grace. Around eleven, the music shifts from ambient lounge to something with more pulse. The lighting dims further. The energy in the room tilts from conversational to kinetic. By midnight, people are on their feet, the DJ is in full command, and the room that two hours ago felt like a sophisticated salon now throbs with a contained but palpable electricity.
        </p>
        <p>
          The music programming reflects the venue&apos;s character: house-inflected, melodic, and sophisticated. There is no jarring genre switch or sudden volume assault. The build is gradual and intentional, and the result is a late-night experience that feels like a natural extension of the evening rather than a separate event requiring a costume change. This continuity is Dear Darling&apos;s greatest strength. You never feel like you have left one venue and entered another.
        </p>

        <h2>What Makes It Unique</h2>
        <p>
          Dear Darling fills a specific gap in the Mayfair landscape: the venue for people who love going out but have grown tired of nightclubs. It offers all the energy, social electricity, and late-night momentum of a club night within the framework of a world-class cocktail bar. The result is an experience that feels mature without being boring, lively without being chaotic. For anyone who has ever left a beautiful restaurant wishing they could keep the evening going without stepping into a thumping, impersonal nightclub, Dear Darling is the answer.
        </p>
        <p>
          The table experience reinforces this philosophy. Minimum spends are present but proportionate. Service is attentive and warm, with staff who treat guests as regulars-in-waiting rather than walking credit cards. The booths themselves are among the most comfortable in Mayfair, designed for lingering rather than perching.
        </p>

        <h2>Who It&apos;s Best For</h2>
        <p>
          Dear Darling is perfect for couples seeking a romantic evening that does not end at eleven. It excels for small groups who want to celebrate in style without the sensory overload of a full-scale nightclub. Date nights find their ideal home here, as do milestone birthdays for those who prefer sophistication over spectacle. International visitors who want to experience Mayfair&apos;s elegance without committing to a high-energy club environment will find exactly what they are looking for.
        </p>
        <p>
          It is less suited to large groups seeking a high-volume party, or anyone whose primary objective is a heavy dance floor session. Dear Darling delivers movement and energy, but the dance floor is a feature of the evening rather than its sole purpose.
        </p>

        <h2>Is Dear Darling Worth It?</h2>
        <p>
          Emphatically yes, particularly for anyone who has felt caught between wanting to go out and wanting something more refined than a conventional nightclub. Dear Darling occupies a unique position in London nightlife: genuinely beautiful, genuinely fun, and genuinely sophisticated all at once. The cocktails alone justify the visit, and the seamless transition into late-night energy makes it one of the most complete evenings Mayfair has to offer.
        </p>
        <p>
          For those who want a full-scale nightclub experience afterward, <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> is nearby and delivers reliably. <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link> offers a similarly intimate but more music-forward alternative. And for a dining-led evening with entertainment, <Link href="/clubs/lio-club-london">Lio Club London</Link> takes the dinner-to-nightlife concept in a more theatrical direction.
        </p>
      </ArticleLayout>
    </>
  );
}
