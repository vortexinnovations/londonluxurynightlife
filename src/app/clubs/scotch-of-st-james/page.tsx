import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "scotch-of-st-james")!;

export const metadata: Metadata = {
  title:
    "Scotch of St James Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest Scotch of St James review from London nightlife insiders. Discover what the Scotch of St James experience is really like, from the 1960s heritage to the modern crowd. What is Scotch of St James like? We break it all down.",
};

export default function ScotchOfStJamesReview() {
  return (
    <>
      <ArticleSchema
        title="Scotch of St James Review | What It's Really Like Inside"
        description="An insider review of Scotch of St James, London's legendary Mayfair nightclub dating back to the 1960s. Everything you need to know before booking."
        slug="/clubs/scotch-of-st-james"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage("Scotch of St James")}
        ctaLabel="Book Scotch of St James"
      >
        <div className="info-box">
          <p><strong>Location:</strong> {club.location}</p>
          <p><strong>Music:</strong> {club.musicStyle}</p>
          <p><strong>Opening Nights:</strong> {club.openingNights}</p>
          <p><strong>Dress Code:</strong> {club.dressCode}</p>
          <p><strong>Tables From:</strong> {club.tablesFrom}</p>
        </div>

        <p>
          There is a small courtyard tucked behind a gallery in Mason&apos;s Yard where, if you know where to look, a staircase descends into one of the most significant nightlife venues London has ever produced. Scotch of St James does not announce itself. There is no velvet rope spectacle, no queue snaking around the block for photographers to capture. The entrance is discreet because the club has never needed to shout. When your history includes Jimi Hendrix performing on your stage and The Beatles drinking at your bar, you have nothing left to prove.
        </p>

        <h2>The Experience</h2>
        <p>
          Walking into Scotch of St James feels like stepping into a venue that exists slightly outside of time. The interior is dark, intimate, and layered with textures that speak to decades of careful evolution rather than a single designer&apos;s vision executed last year. Low ceilings press the energy downward. Leather banquettes line the walls. The lighting is the kind of amber warmth that makes everyone look their best without trying. It is a room designed for proximity, for conversation that leans in close, for a night that builds gradually rather than hitting you the moment you walk through the door.
        </p>
        <p>
          The space is deliberately compact. This is not a super club with multiple rooms and labyrinthine corridors. Scotch trades in concentration rather than scale. The dance floor is tight, the tables are close to the action, and there is a tangible sense that everyone in the room is sharing the same evening rather than occupying separate VIP bubbles. On a strong Saturday night, when the DJ has read the room well and the crowd has reached that particular tipping point, the energy inside Scotch is extraordinary precisely because there is nowhere for it to dissipate.
        </p>

        <h2>Atmosphere and Crowd</h2>
        <p>
          The crowd at Scotch skews slightly older and more self-assured than many Mayfair venues. You will find creative directors, musicians, people from the fashion world, and a smattering of international visitors who have done their homework. There is less of the performative wealth display that characterises some neighbouring clubs. People come here because they genuinely enjoy the atmosphere, not because they need to be seen at the latest opening. The dress code reflects this: smart but not stiff, individual rather than uniform. A well-cut blazer sits comfortably beside a vintage leather jacket. The door team values character over conformity.
        </p>
        <p>
          What sets the atmosphere apart is the counterculture DNA that still pulses through the venue. Scotch was born in the 1960s as a hangout for rock royalty and creative mavericks, and that spirit has never fully left. Even after renovations and ownership changes over the decades, the place retains a sense of rebellion dressed in sophistication. It is Mayfair, certainly, but it is Mayfair with an edge that most of its neighbours cannot replicate because they never had it in the first place.
        </p>

        <h2>The Music</h2>
        <p>
          Scotch programmes an eclectic range that reflects its mixed heritage. On any given night you might move through hip-hop, indie, rock, and electronic without the transitions feeling jarring. The DJs who play here tend to be music enthusiasts rather than playlist merchants, and the venue gives them room to take risks. The sound system is robust without being overwhelming, calibrated for a space where conversation and dancing coexist rather than compete. There is a particular Friday night format that leans more heavily into indie and rock, which draws a crowd that would never set foot in a standard Mayfair nightclub. This versatility is one of Scotch&apos;s greatest strengths.
        </p>

        <h2>What Makes It Unique</h2>
        <p>
          Heritage is the word that comes to mind, but heritage alone does not fill a room on a wet Thursday in February. What keeps Scotch relevant is the way it wears its history lightly. The venue does not trade on nostalgia or plaster its walls with memorabilia. Instead, it channels the spirit of its origins into a contemporary experience that feels earned rather than manufactured. Every surface has absorbed decades of stories, and that accumulation of lived experience gives the space a warmth and authenticity that no amount of interior design budget can fabricate.
        </p>
        <p>
          The table service strikes a similar balance. This is not the bottle parade, sparkler-wielding theatre you might encounter at flashier venues. Your champagne arrives without ceremony. The staff are knowledgeable, attentive, and refreshingly devoid of attitude. Minimum spends are present but not punishing by Mayfair standards, and the tables themselves are positioned to feel like part of the room rather than cordoned-off fortresses.
        </p>

        <h2>What to Expect on a Typical Night</h2>
        <p>
          Arrive around eleven and the room will be settling into its rhythm. The early portion of the evening has a cocktail bar ambience, with small groups gathered around tables and the music providing atmosphere rather than dictation. By midnight, the dynamic shifts. The dance floor fills, the volume rises, and the intimacy of the space transforms into something electric. The transition is organic rather than abrupt, which is part of Scotch&apos;s charm. By one in the morning, you are in a proper nightclub. By two, you will not want to leave.
        </p>
        <p>
          The cocktail programme deserves mention. This is not a venue that treats drinks as an afterthought to bottle service. The bar team produces genuinely excellent cocktails, and ordering at the bar is a perfectly legitimate way to spend your evening if tables are not your preference.
        </p>

        <h2>Who It&apos;s Best For</h2>
        <p>
          Scotch of St James is ideal for those who want a Mayfair night out without the Mayfair cliches. If you find most West End clubs formulaic and interchangeable, Scotch offers a genuine alternative. It suits groups who value atmosphere over spectacle, music over volume, and character over flash. Couples will find the intimacy appealing. Music industry visitors will feel at home. International guests looking for something authentically London rather than generically luxury will be richly rewarded.
        </p>
        <p>
          It is less suited to large groups seeking a high-energy, high-volume party environment or anyone whose primary motivation is being photographed. Scotch is a club for people who are there because they want to be, not because they need others to know they were.
        </p>

        <h2>Is Scotch of St James Worth It?</h2>
        <p>
          Without question. In a city saturated with nightlife options that blur into one another, Scotch of St James occupies a category of its own. It is one of the very few London clubs where you can feel the weight of genuine history in the walls while dancing to a DJ who is playing for the joy of it. The minimum spends are reasonable, the atmosphere is magnetic, and the crowd is the kind of company that makes a night memorable. If you only visit one Mayfair club during your time in London, there is a strong argument that Scotch should be the one.
        </p>
        <p>
          For a different Mayfair experience, explore <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> for its two-floor setup, or <Link href="/clubs/dear-darling">Dear Darling</Link> if you want cocktail-forward elegance. Those drawn to Scotch&apos;s music-first philosophy will also appreciate <Link href="/clubs/beat-london">BEAT London</Link> in Fitzrovia or the legendary <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link> in South London.
        </p>
      </ArticleLayout>
    </>
  );
}
