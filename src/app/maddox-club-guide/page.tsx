import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import { waClubMessage } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Maddox Club Guide | Dinner to Club, House Music & Complete Experience",
  description:
    "The complete visitor's guide to Maddox Club London — the unique dinner-to-club format, Italian restaurant quality, house music programming, and who the seamless evening concept suits best.",
  keywords:
    "maddox club guide, maddox london guide, maddox club what to expect, guide to maddox club, maddox dinner and club, maddox house music, maddox mayfair",
  openGraph: {
    title: "Maddox Club Guide | The Complete Dinner-to-Club Experience",
    description:
      "Everything you need to know about Maddox Club — the dinner-to-club format, the house music, the date night potential, and how the seamless evening works.",
    url: "https://londonluxurynightlife.com/maddox-club-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://londonluxurynightlife.com/maddox-club-guide",
  },
};

const faqs = [
  {
    question: "How does the dinner-to-club format work at Maddox?",
    answer:
      "Maddox operates as a full Italian restaurant in the early evening, serving a quality dining menu. As the evening progresses — typically from around 10:30pm — the space transitions into a nightclub with house music and a dancefloor. Dinner guests can seamlessly stay for the club portion without leaving, changing venue, or paying separately for club entry. The transition is gradual rather than abrupt.",
  },
  {
    question: "What kind of music does Maddox play?",
    answer:
      "Maddox is one of the few Mayfair venues that programmes house music as its primary genre — deep house, tech house, and soulful house dominate the playlist. This distinguishes it from the hip-hop and RnB focus of most Mayfair clubs. The music quality is a genuine draw for house music enthusiasts who want the Mayfair experience without compromising on their preferred sound.",
  },
  {
    question: "Is Maddox good for a date night?",
    answer:
      "Maddox is arguably the best date night venue in Mayfair. The dinner-to-club format creates a complete evening in one venue — no awkward transitions, no queuing at a second location, no separate bills. The Italian restaurant is genuinely good, the atmosphere is intimate, and the house music provides a sophisticated soundtrack. Couples consistently rate it among London's finest evening experiences.",
  },
  {
    question: "What is the dress code at Maddox Club?",
    answer:
      "The dress code is smart elegant, leaning more formal than most Mayfair clubs. Jackets are preferred for men (not strictly required but strongly recommended). Quality shirts, tailored trousers, and smart shoes are minimum. For women, elegant cocktail attire works perfectly. The restaurant setting elevates the dress expectations — think dinner at a top restaurant rather than a nightclub.",
  },
  {
    question: "Is Maddox suitable for corporate entertainment?",
    answer:
      "Maddox is exceptionally well-suited for corporate entertainment. The dinner-to-club format solves the logistics problem of client entertaining — one venue, one booking, one seamless experience that covers both the formal dinner and the social after-hours portion. The Italian restaurant provides a professional dining environment, and the club transition offers a natural progression without the awkwardness of suggesting a second venue.",
  },
];

export default function MaddoxClubGuidePage() {
  return (
    <>
      <ArticleSchema
        title="Maddox Club Guide: The Complete Dinner-to-Club Experience"
        description="Everything you need to know about Maddox Club — the dinner-to-club format, the house music, and who the seamless evening concept suits best."
        slug="/maddox-club-guide"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="Maddox Club Guide"
        subtitle="The complete insider's guide to Mayfair's dinner-to-club experience — how the format works, why the house music matters, and who it's perfect for"
        ctaMessage={waClubMessage("Maddox Club")}
        ctaLabel="Book Maddox Club"
      >
        <p>
          Every nightlife city has a version of the same problem: how do you
          move from dinner to dancing without the friction of changing venues,
          queuing in the cold, and resetting the energy? Most people accept
          the logistics as inevitable.{" "}
          <Link href="/clubs/maddox">Maddox Club</Link> decided to solve them.
          The Mayfair venue operates as a genuine Italian restaurant that
          transforms into a house music nightclub as the evening progresses —
          and both halves are good enough to stand alone. This guide explains
          how the format works and who it works best for.
        </p>

        <h2>The Dinner-to-Club Format</h2>

        <p>
          Maddox opens for dinner service in the early evening, operating as
          a full-service Italian restaurant with a menu that takes the food
          seriously. This is not nightclub catering with pretensions — the
          kitchen produces genuinely quality Italian cuisine: handmade pasta,
          well-sourced proteins, a considered wine list, and the kind of
          attention to preparation that would hold its own in a restaurant
          review context.
        </p>

        <p>
          As the evening progresses, typically from around 10:30pm, the space
          begins its transition. The lighting shifts. The music, which has been
          atmospheric during dinner, begins to build in tempo and volume. The
          restaurant furniture reconfigures to open up dancefloor space. By
          11:30pm, Maddox is operating as a full nightclub — but you have not
          moved. Your table, your drinks, your evening have continued without
          interruption. The transition is gradual rather than a hard switch,
          which means the energy escalates naturally rather than arriving
          abruptly.
        </p>

        <p className="pull-quote">
          Maddox does not ask you to choose between a good dinner and a good
          night out. It assumes you want both and delivers accordingly.
        </p>

        <h2>The Restaurant</h2>

        <p>
          The Italian menu deserves specific attention because it elevates
          Maddox from a novelty format into a genuine proposition. The pasta
          is handmade. The dishes balance authenticity with the kind of
          refinement expected at Mayfair price points. The wine list is curated
          with more care than most nightclub-adjacent dining venues bother with.
          If you approached Maddox purely as a restaurant, ignoring the club
          entirely, the food would still justify the visit.
        </p>

        <p>
          This matters because it makes the dinner portion of the evening
          genuinely enjoyable rather than a tolerated preamble to the main
          event. Groups that book for dinner at 8pm and stay through to
          2am report the highest satisfaction because they experience the
          full arc of what Maddox offers. For a broader look at venues that
          combine dining with nightlife, our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          ranks the London options.
        </p>

        <h2>The House Music</h2>

        <p>
          This is Maddox&apos;s other distinguishing feature and the one that
          surprises people most familiar with Mayfair&apos;s nightlife. While
          virtually every other premium club in the area programmes hip-hop and
          RnB as their primary genres, Maddox runs house music — deep house,
          tech house, and soulful house that reflects genuine taste rather than
          commercial calculation. The DJs are given room to build sets that
          develop over hours rather than chasing instant gratification.
        </p>

        <p>
          For house music enthusiasts, this makes Maddox uniquely valuable. It
          delivers the Mayfair experience — the table service, the crowd, the
          interiors, the service standard — wrapped around music that most
          Mayfair venues ignore entirely. If you love house but find the
          typical Mayfair soundtrack unlistenable, Maddox is your venue. If you
          come to Mayfair specifically for hip-hop, you should look elsewhere —
          our{" "}
          <Link href="/blog/best-clubs-london-hip-hop-rnb">
            hip-hop and RnB guide
          </Link>{" "}
          has you covered.
        </p>

        <h2>The Transition Period</h2>

        <p>
          The window between roughly 10pm and 11:30pm is when Maddox is at its
          most distinctive. Dinner is winding down for early arrivals, the
          music is building, and the room is transitioning between its two
          identities. This liminal period has a unique energy — conversational
          but increasingly charged, social but anticipatory. For guests who
          dined early, this is the portion where the evening shifts gears. For
          guests arriving purely for the club, this is when the atmosphere
          begins to crystallise.
        </p>

        <p>
          By midnight, the transition is complete. The dancefloor is populated,
          the house music is in full command, and Maddox operates as a
          conventional premium nightclub — albeit one with a distinctive
          soundtrack and a crowd that has often been together since dinner.
          This continuity of crowd is part of what makes the late-night
          atmosphere at Maddox feel more cohesive than at venues where
          everyone arrives from different starting points.
        </p>

        <h2>Corporate Entertainment</h2>

        <p>
          Maddox solves the single biggest challenge of corporate client
          entertainment: the transition. Taking clients to dinner is
          straightforward. Taking them to a nightclub is straightforward. The
          gap between the two — suggesting a second venue, managing transport,
          navigating door policies with a group that includes varying levels
          of nightlife enthusiasm — is where corporate evenings typically
          stumble.
        </p>

        <p>
          At Maddox, none of this exists. You book dinner for 8pm, the food is
          excellent and the setting is appropriate for any business context, and
          when the evening naturally evolves into its nightclub phase, your
          clients are already there, already comfortable, already in the spirit
          of the evening. No one needs to suggest anything awkward. The venue
          does the work for you. For comprehensive corporate planning, our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate entertainment guide
          </Link>{" "}
          covers all options.
        </p>

        <h2>Date Night Potential</h2>

        <p>
          Maddox is, in our assessment, the strongest date-night venue in
          Mayfair. The format creates a complete evening without any of the
          logistical friction that can undermine a date. Dinner is intimate
          and the food is genuinely good — you are not compromising quality
          for convenience. The transition to club mode happens around you
          rather than requiring you to leave and start again elsewhere. And
          the house music provides a sophisticated, danceable soundtrack that
          enhances the evening without overwhelming conversation.
        </p>

        <p>
          The dress code — smart elegant, jackets preferred — also works in
          the date context: both parties arrive dressed for an occasion, which
          sets the tone from the start. For more date-night options alongside
          Maddox, our{" "}
          <Link href="/blog/dear-darling-maddox-cocktail-clubs-mayfair">
            editorial on Mayfair&apos;s cocktail clubs
          </Link>{" "}
          explores venues with similar sophistication.
        </p>

        <h2>Dress Code</h2>

        <p>
          Maddox&apos;s dress code is smart elegant, pitched slightly more
          formally than many Mayfair clubs. For men, a jacket is strongly
          recommended — not strictly enforced, but the crowd expectation makes
          jacketed guests look right and shirtsleeve-only guests look slightly
          underdressed. Tailored trousers and smart shoes are required. For
          women, elegant cocktail attire — the kind of outfit that works for
          both a quality dinner and a night of dancing. Our comprehensive{" "}
          <Link href="/guides/what-to-wear-london-clubs">
            dress code guide
          </Link>{" "}
          covers every venue&apos;s expectations.
        </p>

        <h2>Tables and Pricing</h2>

        <div className="info-box">
          <h4>Booking Options</h4>
          <ul>
            <li>
              <strong>Dinner only:</strong> Reserve a table for the restaurant
              portion of the evening. No minimum spend beyond your meal.
            </li>
            <li>
              <strong>Dinner + club:</strong> Dine and stay through the
              transition. Your dinner spend may count towards any club minimum
              depending on the night and your booking.
            </li>
            <li>
              <strong>Club table:</strong> Arrive for the nightclub portion
              only. Minimum spends start from &pound;1,000.
            </li>
            <li>
              <strong>Full evening package:</strong> The ideal format. Book
              dinner from 8pm and stay through to close. Best value and the
              complete Maddox experience.
            </li>
          </ul>
        </div>

        <p>
          For table reservations,{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          handles bookings across all premium London venues. Our{" "}
          <Link href="/blog/bottle-service-london-explained">
            bottle service explainer
          </Link>{" "}
          covers what club table bookings include.
        </p>

        <h2>Best Nights</h2>

        <p>
          <strong>Tuesday &ndash; Wednesday:</strong> More intimate, restaurant-
          focused. The club transition happens but with a smaller crowd.
          Excellent for couples and smaller groups who want the format without
          the weekend intensity.
        </p>

        <p>
          <strong>Thursday:</strong> A strong transitional night. The club phase
          carries genuine energy, the crowd is sociable, and the music
          programming is excellent. The best night for experiencing the full
          format without Saturday pricing.
        </p>

        <p>
          <strong>Friday &ndash; Saturday:</strong> Peak nights. The club phase
          is at its most energetic, the house music is at its best, and the
          crowd is at its most glamorous. Saturday is the flagship. Table
          booking is strongly recommended for both evenings.
        </p>

        <h2>Who Maddox Club Is For</h2>

        <p>
          Maddox is for anyone who wants a seamless evening rather than a
          fragmented one. It excels for couples on date nights, professionals
          entertaining clients, house music devotees who want the Mayfair
          experience, and anyone who values the elimination of friction
          between dinner and nightlife. It is also excellent for international
          visitors who want to maximise a single evening — see our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            international visitor&apos;s guide
          </Link>{" "}
          for broader planning context.
        </p>

        <h2>Who Should Consider Somewhere Else</h2>

        <p>
          If you want hip-hop, Maddox&apos;s house music programming will
          disappoint — try{" "}
          <Link href="/tape-london-guide">Tape London</Link> or{" "}
          <Link href="/clubs/funky-buddha">Funky Buddha</Link>. If you want
          theatrical entertainment,{" "}
          <Link href="/cirque-le-soir-guide">Cirque Le Soir</Link> and{" "}
          <Link href="/reign-london-guide">Reign</Link> deliver spectacle that
          Maddox does not attempt. If you want maximum exclusivity and the
          cachet of London&apos;s most selective door,{" "}
          <Link href="/tape-london-guide">Tape</Link> is the answer. And if
          you have no interest in dining and simply want to arrive at a club
          at midnight, the dinner-to-club format offers value you will not use.
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Ready to Book Maddox Club?</h2>

        <p>
          <Link href="/contact">Contact our team</Link> for Maddox Club dinner
          reservations, club table bookings, and full evening packages. For the
          venue review, see our{" "}
          <Link href="/clubs/maddox">Maddox Club profile</Link> and{" "}
          <Link href="/blog/dear-darling-maddox-cocktail-clubs-mayfair">
            in-depth editorial
          </Link>
          . For direct table reservations,{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          handles bookings across all premium venues.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/clubs/maddox">Maddox Club: Full Venue Profile</Link>
          </li>
          <li>
            <Link href="/guides/dinner-and-nightclub-london">
              Dinner and Nightclub London: The Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/luxury-nightclubs-london">
              Luxury Nightclubs in London
            </Link>
          </li>
          <li>
            <Link href="/guides/corporate-entertainment-london">
              Corporate Entertainment in London
            </Link>
          </li>
          <li>
            <Link href="/blog/saturday-night-mayfair-guide">
              Saturday Night in Mayfair: Planning Guide
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
