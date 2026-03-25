import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";

const club = closedClubs.find((c) => c.slug === "lio-club-london")!;

export const metadata: Metadata = {
  title:
    "Lio Club London Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "Lio Club London is permanently closed. Read our honest Lio Club London review from London nightlife insiders. Discover what the Lio Club London experience was really like, and find alternative venues still open.",
};

export default function LioClubLondonReview() {
  return (
    <>
      <ArticleSchema
        title="Lio Club London Review | What It's Really Like Inside"
        description="An insider review of Lio Club London, the glamorous Mayfair venue combining gourmet dining with live entertainment and nightlife. Everything you need to know before booking."
        slug="/clubs/lio-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">Lio Club London has permanently closed. This review is kept for reference. Looking for open venues? See our <Link href="/guides/complete-guide-london-luxury-nightlife">complete guide to London&apos;s luxury nightlife</Link> for current recommendations.</p>
        </div>

        <div className="info-box">
          <p><strong>Location:</strong> {club.location}</p>
          <p><strong>Music:</strong> {club.musicStyle}</p>
          <p><strong>Opening Nights:</strong> {club.openingNights}</p>
          <p><strong>Dress Code:</strong> {club.dressCode}</p>
          <p><strong>Tables From:</strong> {club.tablesFrom}</p>
        </div>

        <p>
          Every summer, on the southern tip of Ibiza, a venue called Lio draws a crowd that expects the extraordinary as a minimum. Dinner is not merely served but performed. Entertainment is not confined to a stage but woven through the entire evening. The boundary between audience and spectacle dissolves over the course of hours until every guest becomes part of the production. When the team behind Lio decided to bring this concept to London, they chose Mayfair, and they chose to be ambitious. Lio Club London is the result: a venue that attempts to compress the magic of a Mediterranean summer night into a Mayfair address, and does so with considerably more success than the premise might suggest.
        </p>

        <h2>The Experience</h2>
        <p>
          The evening at Lio is structured as a journey, and the structure is part of the appeal. You do not arrive at a nightclub. You arrive at a dining room, albeit one that has been designed with a theatrical sensibility that signals from the first moment that this will not be an ordinary meal. The space is lavish without being heavy: gold accents, dramatic floral arrangements, and a stage that occupies the room&apos;s centre of gravity. Tables radiate outward from this focal point, and the seating plan ensures that every position has a clear view of the performers who will appear throughout the evening.
        </p>
        <p>
          Dinner is genuinely good, which is not a given for venues that split their identity between food and nightlife. The menu draws from Mediterranean and international influences, with dishes that are plated with the same attention to spectacle that governs the rest of the evening. This is not a restaurant that happens to have entertainment. The food and the performance are designed as complementary elements of a single experience. Courses arrive between acts. Performers circulate between tables. The energy builds incrementally, each successive act raising the temperature a degree or two until, by the time the plates are cleared, the room is primed for what comes next.
        </p>

        <h2>The Entertainment</h2>
        <p>
          The live entertainment is Lio&apos;s defining feature, and it is executed with a production quality that most dedicated performance venues would envy. Dancers, singers, acrobats, and speciality acts move through the space with choreographed precision, transforming the dining room into a cabaret stage and then into a party floor over the course of the evening. The performances are polished, frequently surprising, and calibrated to an audience that is sophisticated enough to demand genuine artistry rather than novelty.
        </p>
        <p>
          What distinguishes Lio&apos;s entertainment from the theatrical nightlife offered elsewhere in London is its integration. At many show-clubs, the performances interrupt the evening: the music stops, the lights change, everyone watches, applause, music resumes. At Lio, the entertainment is threaded through the fabric of the night so that the transitions between watching, eating, drinking, and eventually dancing feel continuous rather than segmented. The performers do not just appear on stage. They emerge from between tables, interact with guests, and blur the line between the show and the party with a confidence that speaks to years of refinement in Ibiza.
        </p>

        <h2>Atmosphere and Crowd</h2>
        <p>
          The crowd at Lio is unambiguously glamorous. The dress code is high-end evening wear, and the clientele takes it seriously. This is a room of silk, statement jewellery, and the particular confidence that comes with knowing you look exceptional. International visitors make up a significant portion of the audience, many of them already familiar with the Ibiza original and curious to see how it translates to London. You will hear several languages at neighbouring tables and observe a level of grooming and presentation that is elevated even by Mayfair standards.
        </p>
        <p>
          The atmosphere progresses through distinct phases. Early evening has the buzzing anticipation of a theatre before curtain up, with champagne flowing and conversation animated by the knowledge that something spectacular is about to begin. As dinner progresses and the entertainment intensifies, the energy shifts from appreciative to participatory. By the time the dining room transforms into a dance floor, typically around midnight, the crowd has been warmed, connected, and elevated into a collective readiness to celebrate that makes the subsequent party feel effortless.
        </p>

        <h2>The Late Night</h2>
        <p>
          When the tables are cleared and the room reconfigures for dancing, Lio reveals its second identity. The music shifts from the curated soundtrack of dinner into a full nightclub programme, with DJs playing a mix of commercial house, party anthems, and the kind of high-energy sets that keep a dressed-up crowd moving. The production values that defined the dinner show carry through into the late-night hours: the lighting is spectacular, the sound is powerful, and intermittent live performances punctuate the DJ sets to maintain the sense that anything could happen at any moment.
        </p>
        <p>
          The dance floor at Lio is not the heaving, anonymous mass of a super club. It retains the intimacy and glamour of the dining room from which it emerged, and there is a festive, celebratory quality to the dancing that feels more like the best party you have ever attended than a conventional club night. Table service continues throughout, and some of the evening&apos;s most memorable moments happen when a champagne delivery coincides with a peak-time track and a live performer descending from the ceiling simultaneously.
        </p>

        <h2>What Makes It Unique</h2>
        <p>
          Lio&apos;s uniqueness lies in the completeness of its offering. Most venues do one thing well: great food, or great entertainment, or great nightlife. Lio attempts all three and delivers each at a level that would be respectable even in isolation. The combination produces an evening that is genuinely unlike anything else in London. You eat well, you are entertained brilliantly, and you dance until the small hours, all without leaving your seat until the moment you choose to. The entire production is designed to eliminate the logistical friction that normally accompanies a multi-venue evening. There is no cab between the restaurant and the club, no queue at a second door, no loss of momentum during the transition. Everything happens in one room, and the room reinvents itself around you.
        </p>
        <p>
          The Ibiza heritage gives Lio a confidence and expertise that newer dinner-show concepts cannot replicate. This team has spent years perfecting the format in one of the world&apos;s most demanding nightlife markets. The London iteration benefits from that accumulated knowledge, and it shows in the seamlessness of the execution and the calibre of the talent on display.
        </p>

        <h2>Who It&apos;s Best For</h2>
        <p>
          Lio Club London is perfect for special occasions that deserve an entire evening rather than a single venue. Milestone birthdays, anniversaries, and celebrations find their ideal setting here, where the investment of a table booking returns an experience that covers dinner, entertainment, and nightlife in one extraordinary package. It suits couples seeking a date night that will be remembered for years, groups who want to feel like the main characters in their own evening, and international visitors who want the single most complete luxury night London can offer.
        </p>
        <p>
          It is less suited to those who prioritise underground music credibility or who prefer their nightlife stripped of spectacle. Lio is proudly, unapologetically theatrical, and if that sensibility does not appeal, there are excellent alternatives nearby. But for those who want to surrender to an evening where every detail has been choreographed for maximum impact, Lio delivers at a level that few London venues can approach.
        </p>

        <h2>Is Lio Club London Worth It?</h2>
        <p>
          For the right occasion, Lio Club London is worth every penny. The combined value of a gourmet dinner, world-class live entertainment, and a full nightclub experience in a single evening represents something genuinely rare in London. The price point reflects the ambition, and the ambition is matched by the execution. If you are looking for one night that encapsulates everything London luxury nightlife can be at its most extravagant and accomplished, Lio is the answer.
        </p>
        <p>
          For those who want to experience Mayfair nightlife in a different register, <Link href="/clubs/dear-darling">Dear Darling</Link> offers cocktail-led sophistication without the dinner-show format, while <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> delivers a reliable two-floor party. If Lio&apos;s entertainment angle appeals but you want something edgier, <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link> wraps its musical heritage in an intimate Mayfair setting. And for the complete opposite end of the spectrum, <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link> proves that the greatest nights sometimes need nothing more than a sound system and a crowd.
        </p>
        <h2>Lio Club London Has Closed — Where to Go Instead</h2>

        <p>
          Lio Club London is permanently closed, but if you were looking for a
          venue that combines dining, entertainment, and nightlife, these open
          venues offer the best alternatives:
        </p>

        <ul>
          <li>
            <Link href="/clubs/maddox">Maddox</Link> — A refined Mayfair venue
            offering a seamless dinner-to-club experience with excellent food,
            live entertainment, and a vibrant late-night atmosphere.
          </li>
          <li>
            <Link href="/clubs/reign-london">Reign London</Link> — A glamorous
            entertainment-led venue with live performances, spectacular
            production values, and the kind of showmanship that Lio fans will
            appreciate.
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
