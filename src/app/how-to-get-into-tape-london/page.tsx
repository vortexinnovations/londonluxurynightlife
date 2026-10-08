import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import { waClubMessage } from "@/lib/constants";
import { GUIDE_IMAGES } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "How to Get Into Tape London: Guestlist, Tables, Dress Code",
  },
  description:
    "Tape London, 17 Hanover Square: open Tuesday, Friday, Saturday and Sunday, 11pm to 3.45am as of October 2026. Guestlist, tables, door policy and dress code.",
  keywords:
    "how to get into Tape London, Tape London guestlist, Tape London door policy, Tape London entry, Tape London table booking, Tape London dress code",
  openGraph: {
    title: "How to Get Into Tape London: Guestlist, Tables, Dress Code",
    description:
      "Getting into Tape London at 17 Hanover Square: opening nights, guestlist through the members' app, table bookings, door policy, ID and dress code.",
    url: "https://londonluxurynightlife.com/how-to-get-into-tape-london",
    type: "article",
  },
  alternates: {
    canonical: "https://londonluxurynightlife.com/how-to-get-into-tape-london",
  },
};

const faqs = [
  {
    question: "Can you walk into Tape London without a booking?",
    answer: "Walk-in entry at Tape London is extremely unlikely. The venue operates primarily through table bookings and managed guestlists. Without either, the door team will almost certainly turn you away regardless of how well-dressed you are.",
  },
  {
    question: "How much does a table at Tape London cost?",
    answer: "Table minimum spends at Tape London start from £1,500, the highest in Mayfair. This covers your table reservation and is spent on bottles and drinks. On premium nights (bank holidays, special events), minimums can increase significantly.",
  },
  {
    question: "What should I wear to Tape London?",
    answer: "Stylish and elegant is the standard. The club's published dress code (as of October 2026) turns away sportswear and gym wear, gym, dirty or everyday trainers, denim shorts, hot pants, visible underwear, flat open-toe shoes or sliders, and sunglasses. Jeans are not on that list, but tailored trousers, a collared shirt and smart shoes are the safer choice for men on a busy night. For women: cocktail-appropriate attire, heels recommended, nothing overly revealing. The door team values effort and style over specific brands.",
  },
  {
    question: "Where is Tape London?",
    answer: "Tape London is at 17 Hanover Square, Mayfair, London W1S 1HU, a few minutes' walk from Oxford Circus station.",
  },
  {
    question: "What are the opening nights and hours at Tape London?",
    answer: "As of October 2026, Tape London opens on Tuesday, Friday, Saturday and Sunday from 11pm to 3.45am. The Little Tape after party runs on Friday and Saturday from 3am to 5.30am. Saturday is the biggest night, with the highest energy and the most selective door, and Friday is close behind. For a first visit with a table, Saturday is recommended.",
  },
  {
    question: "Is Tape London a members' club?",
    answer: "Tape describes itself as primarily a private members' club, with membership handled through the Tape Members app. Non-members get in through table bookings and guestlists, which can be requested through the app, a promoter or a concierge. Either way, the door team makes the final call on the night.",
  },
  {
    question: "Do I need ID to get into Tape London?",
    answer: "Yes. Every guest must show physical ID at the door, and the club states that photographs of ID are not accepted.",
  },
];

export default function HowToGetIntoTapeLondonPage() {
  return (
    <>
      <ArticleSchema
        title="How to Get Into Tape London: The Complete Entry Guide"
        description="Getting into Tape London at 17 Hanover Square: opening nights, guestlist through the members' app, table bookings, door policy, ID and dress code."
        slug="/how-to-get-into-tape-london"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="How to Get Into Tape London"
        subtitle="The complete guide to accessing Mayfair's most exclusive nightclub — from guestlist to table booking"
        heroImage={GUIDE_IMAGES["how-to-get-into-tape-london"]}
        heroAlt="Tape London nightclub entrance in Mayfair with exclusive door policy"
        ctaMessage={waClubMessage("Tape London")}
        ctaLabel="Book Tape London"
      >
        <p>
          <Link href="/clubs/tape-london">Tape London</Link>{" "}is the most
          selective nightclub in Mayfair, and getting through the door
          requires more than simply showing up well-dressed. The Hanover
          Square venue operates at a level of exclusivity that frustrates
          many and rewards those who understand how the system works. This
          guide explains that system clearly — the entry routes, the door
          policy, the dress code, the timing, and the strategies that
          maximise your chances of experiencing what is genuinely London&apos;s
          finest nightclub.
        </p>

        <div className="info-box">
          <h4>Tape London at a Glance (as of October 2026)</h4>
          <ul>
            <li><strong>Address:</strong>{" "}17 Hanover Square, Mayfair, London W1S 1HU, a few minutes&apos; walk from Oxford Circus station</li>
            <li><strong>Open:</strong>{" "}Tuesday, Friday, Saturday and Sunday, 11pm to 3.45am</li>
            <li><strong>After party:</strong>{" "}Little Tape, Friday and Saturday, 3am to 5.30am</li>
            <li><strong>Getting in:</strong>{" "}a table booking, or a guestlist place requested through a promoter, a concierge or the Tape Members app</li>
            <li><strong>ID:</strong>{" "}physical ID for every guest; photographs of ID are not accepted</li>
            <li><strong>Tables:</strong>{" "}minimum spends from &pound;1,500</li>
          </ul>
        </div>

        <h2>The Three Routes In</h2>

        <h3>1. Table Booking — The Guaranteed Route</h3>

        <p>
          A table booking is the only way to guarantee entry to Tape London.
          Minimum spends start from &pound;1,500, which is the highest in
          Mayfair and a deliberate filter. This spend is on bottles and
          drinks, not a cover charge — your &pound;1,500 buys you premium
          spirits, mixers, ice, and dedicated service throughout the night.
          Table bookings also give you the best position in the room and the
          attention of the hosting team.
        </p>

        <p>
          The most effective way to book a table is through a promoter or
          concierge with a genuine relationship with the venue. This ensures
          you get the best available table position rather than whatever is
          left. It also means your host knows your arrival time, your group
          size, and any specific requirements.{" "}
          <Link href="/contact">Our concierge team</Link>{" "}books Tape
          regularly and can secure the right table for your evening. For
          direct table reservations,{" "}
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

        <h3>2. Guestlist — The Conditional Route</h3>

        <p>
          Guestlist entry at Tape is managed through promoters, concierges
          and the club&apos;s own Tape Members app, where you can request a
          place for the night you want to attend. Being on
          the guestlist removes the cover charge and gets you to the front
          of any queue, but it does not override the door policy. The door
          team makes the final decision based on the crowd balance, your
          group composition, your appearance, and the night&apos;s capacity.
          Guestlist is most viable early in the evening, and on Saturday,
          when Tape is at its most exclusive, guestlist entry is
          significantly harder to achieve.
        </p>

        <h3>3. Walk-Up — The Improbable Route</h3>

        <p>
          Walking up to Tape London without a booking or guestlist placement
          is not a viable strategy. The door team is polite but firm, and
          the rejection rate for unannounced arrivals is extremely high.
          Even well-dressed, attractive groups with the right demographic
          are routinely turned away without prior arrangements. Do not
          rely on this approach.
        </p>

        <p className="pull-quote">
          The single best piece of advice for getting into Tape London:
          book a table. Everything else is a gamble, and the house always
          wins.
        </p>

        <h2>The Door Policy Decoded</h2>

        <div className="info-box">
          <h4>What the Door Team Is Looking For</h4>
          <ul>
            <li><strong>Group composition:</strong>{" "}Mixed groups (men and women) are strongly preferred. All-male groups without a booking face near-certain rejection.</li>
            <li><strong>Dress standard:</strong>{" "}Smart, stylish, and considered. The team can tell the difference between someone who dressed for the occasion and someone who dressed for work.</li>
            <li><strong>ID:</strong>{" "}Every guest must show physical ID. The club states that photographs of ID are not accepted, so bring the card itself.</li>
            <li><strong>Sobriety:</strong>{" "}Anyone appearing excessively intoxicated will be turned away regardless of booking status.</li>
            <li><strong>Attitude:</strong>{" "}Entitlement, aggression, or trying to name-drop your way in are immediate disqualifiers.</li>
            <li><strong>Capacity:</strong>{" "}Even legitimate guestlist entries are subject to the room&apos;s capacity on any given night.</li>
          </ul>
        </div>

        <h2>What to Wear</h2>

        <p>
          Tape London&apos;s dress code is smart and stylish — not smart
          casual, not business formal, but a considered level of effort
          that signals you understand where you are going.
        </p>

        <p>
          <strong>What the club bans:</strong>{" "}Tape&apos;s published dress
          code (as of October 2026) asks for stylish, elegant attire and
          lists what is not allowed: sportswear and gym wear; gym, dirty or
          everyday trainers; denim shorts; hot pants; visible underwear;
          overly revealing or casual outfits; flat open-toe shoes or
          sliders; and sunglasses. Tailored smart shorts are allowed.
        </p>

        <p>
          <strong>Men:</strong>{" "}Tailored trousers, a quality shirt or smart
          polo, and leather shoes. A blazer or tailored jacket elevates the
          look further. Jeans are not on the banned list, but on a busy
          night tailored trousers are the safer choice. Avoid: sportswear,
          gym or everyday trainers, denim shorts, open-toe shoes.
        </p>

        <p>
          <strong>Women:</strong>{" "}Cocktail-appropriate attire. A well-chosen
          dress, tailored separates, or a smart jumpsuit with heels. Tape&apos;s
          crowd is fashionable without being ostentatious: quality over
          logos. Avoid: overly revealing or casual looks, hot pants, flat
          sliders or flip-flops, beachwear.
        </p>

        <p>
          For specific advice on dressing for Tape and every other London
          club, our{" "}
          <Link href="/london-club-dress-code-guide">
            dress code guide
          </Link>{" "}
          covers everything in detail.
        </p>

        <h2>The Best Nights to Visit</h2>

        <p>
          As of October 2026, Tape opens on Tuesday, Friday, Saturday and
          Sunday, from 11pm to 3.45am. It does not open on Thursday.
        </p>

        <p>
          <strong>Tuesday and Sunday:</strong>{" "}The nights either side of
          the weekend. If you are hoping for a guestlist place rather than a
          table, ask your promoter or concierge, or request through the Tape
          Members app, which nights have space that week.
        </p>

        <p>
          <strong>Friday:</strong>{" "}The start of the weekend at Tape. Good
          energy, strong music, slightly more accessible than Saturday, and
          followed by the Little Tape after party from 3am to 5.30am.
        </p>

        <p>
          <strong>Saturday:</strong>{" "}The main event. The most exclusive
          crowd, the highest energy, and the most selective door. Table
          booking is essentially required. If you want the definitive Tape
          experience, this is the night, and Little Tape carries it on from
          3am to 5.30am.
        </p>

        <h2>Arrival Timing</h2>

        <p>
          Tape opens at 11pm and closes at 3.45am (as of October 2026). For
          guestlist entry, arrive between 11pm and midnight, when the door is
          most accommodating. For table
          bookings, arriving between 11:30pm and 12:30am hits the sweet
          spot where the room has energy but your table is ready and
          waiting. Arriving after 1am on a table booking is fine but you
          miss the build-up. Arriving after 1am on guestlist is risky as
          capacity limits tighten.
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Ready to Book?</h2>

        <p>
          <Link href="/contact">Contact our team</Link>{" "}for Tape London
          table bookings and guestlist. We work with the venue weekly and
          can advise on the best night, the best table position, and what
          to expect. For the full Tape London experience review, read
          our{" "}
          <Link href="/blog/tape-london-inside-mayfairs-most-exclusive-club">
            in-depth Tape article
          </Link>{" "}
          and{" "}
          <Link href="/clubs/tape-london">venue profile</Link>. For
          direct bookings across all London venues,{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          handles reservations.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/clubs/tape-london">
              Tape London: Full Venue Profile
            </Link>
          </li>
          <li>
            <Link href="/luxury-nightclubs-london">
              Luxury Nightclubs in London
            </Link>
          </li>
          <li>
            <Link href="/celebrity-nightclubs-london">
              Celebrity Nightclubs in London
            </Link>
          </li>
          <li>
            <Link href="/blog/bottle-service-london-explained">
              Bottle Service in London Explained
            </Link>
          </li>
          <li>
            <Link href="/london-club-dress-code-guide">
              What to Wear to London&apos;s Exclusive Clubs
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
