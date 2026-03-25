import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import { waClubMessage } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Get Into Tape London | Guestlist, Door Policy & Entry Guide",
  description:
    "The complete guide to getting into Tape London — Mayfair's most exclusive nightclub. Guestlist tips, table booking advice, door policy, what to wear, and the best nights to visit.",
  keywords:
    "how to get into Tape London, Tape London guestlist, Tape London door policy, Tape London entry, Tape London table booking, Tape London dress code",
  openGraph: {
    title: "How to Get Into Tape London | The Complete Entry Guide",
    description:
      "Everything you need to know about getting into Tape London — guestlist, door policy, and table bookings.",
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
    answer: "Smart and stylish is the standard. For men: tailored trousers, a quality collared shirt, smart shoes — no trainers, no sportswear, no casual denim. For women: cocktail-appropriate attire, heels recommended. The door team values effort and style over specific brands.",
  },
  {
    question: "What are the best nights at Tape London?",
    answer: "Tape London operates Thursday through Saturday. Saturday is the biggest night with the highest energy and most exclusive crowd. Thursday attracts a strong music industry crowd. Friday sits between the two. For the best experience on a first visit, Saturday is recommended.",
  },
  {
    question: "Is Tape London a members' club?",
    answer: "Tape London operates as an exclusive nightclub with members' club sensibilities rather than a traditional members' club with annual fees. Access is through table bookings and curated guestlists rather than membership cards, but the selectivity is comparable to the most exclusive private clubs.",
  },
];

export default function HowToGetIntoTapeLondonPage() {
  return (
    <>
      <ArticleSchema
        title="How to Get Into Tape London: The Complete Entry Guide"
        description="Everything you need to know about getting into Tape London — guestlist, door policy, and table bookings."
        slug="/how-to-get-into-tape-london"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="How to Get Into Tape London"
        subtitle="The complete guide to accessing Mayfair's most exclusive nightclub — from guestlist to table booking"
        ctaMessage={waClubMessage("Tape London")}
        ctaLabel="Book Tape London"
      >
        <p>
          <Link href="/clubs/tape-london">Tape London</Link> is the most
          selective nightclub in Mayfair, and getting through the door
          requires more than simply showing up well-dressed. The Hanover
          Square venue operates at a level of exclusivity that frustrates
          many and rewards those who understand how the system works. This
          guide explains that system clearly — the entry routes, the door
          policy, the dress code, the timing, and the strategies that
          maximise your chances of experiencing what is genuinely London&apos;s
          finest nightclub.
        </p>

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
          <Link href="/contact">Our concierge team</Link> books Tape
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
          Guestlist entry at Tape is managed through promoters and
          concierges — there is no website form or sign-up page. Being on
          the guestlist removes the cover charge and gets you to the front
          of any queue, but it does not override the door policy. The door
          team makes the final decision based on the crowd balance, your
          group composition, your appearance, and the night&apos;s capacity.
          Guestlist is viable on Thursday nights and earlier in the evening
          on Fridays, but on Saturday — when Tape is at its most exclusive —
          guestlist entry is significantly harder to achieve.
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
            <li><strong>Group composition:</strong> Mixed groups (men and women) are strongly preferred. All-male groups without a booking face near-certain rejection.</li>
            <li><strong>Dress standard:</strong> Smart, stylish, and considered. The team can tell the difference between someone who dressed for the occasion and someone who dressed for work.</li>
            <li><strong>Sobriety:</strong> Anyone appearing excessively intoxicated will be turned away regardless of booking status.</li>
            <li><strong>Attitude:</strong> Entitlement, aggression, or trying to name-drop your way in are immediate disqualifiers.</li>
            <li><strong>Capacity:</strong> Even legitimate guestlist entries are subject to the room&apos;s capacity on any given night.</li>
          </ul>
        </div>

        <h2>What to Wear</h2>

        <p>
          Tape London&apos;s dress code is smart and stylish — not smart
          casual, not business formal, but a considered level of effort
          that signals you understand where you are going.
        </p>

        <p>
          <strong>Men:</strong> Tailored trousers (not jeans), a quality
          shirt or smart polo, and leather shoes. A blazer or tailored
          jacket elevates the look further. Avoid: trainers of any kind
          (including designer), sportswear, casual denim, shorts, open-toe
          shoes.
        </p>

        <p>
          <strong>Women:</strong> Cocktail-appropriate attire. A well-chosen
          dress, tailored separates, or a smart jumpsuit with heels. Tape&apos;s
          crowd is fashionable without being ostentatious — quality over
          logos. Avoid: overly casual looks, flip-flops, beachwear.
        </p>

        <p>
          For specific advice on dressing for Tape and every other London
          club, our{" "}
          <Link href="/guides/what-to-wear-london-clubs">
            dress code guide
          </Link>{" "}
          covers everything in detail.
        </p>

        <h2>The Best Nights to Visit</h2>

        <p>
          <strong>Thursday:</strong> The music industry night. Slightly
          easier guestlist entry, a crowd heavy with people who work in
          music, and a more intimate atmosphere. The best night for first
          visits if you are on guestlist rather than a table.
        </p>

        <p>
          <strong>Friday:</strong> A strong transitional night between
          Thursday&apos;s industry vibe and Saturday&apos;s peak exclusivity.
          Good energy, strong music, slightly more accessible than Saturday.
        </p>

        <p>
          <strong>Saturday:</strong> The main event. The most exclusive
          crowd, the highest energy, and the most selective door. Table
          booking is essentially required. If you want the definitive Tape
          experience, this is the night.
        </p>

        <h2>Arrival Timing</h2>

        <p>
          Tape opens at 11pm. For guestlist entry, arrive between 11pm and
          midnight — the door is most accommodating early. For table
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
          <Link href="/contact">Contact our team</Link> for Tape London
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
            <Link href="/guides/what-to-wear-london-clubs">
              What to Wear to London&apos;s Exclusive Clubs
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
