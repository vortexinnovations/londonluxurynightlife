import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "London Nightlife Guide 2026: Mayfair, Soho and Beyond",
  description:
    "The complete London nightlife guide. Where to go, what to wear, when to arrive, and how much to spend — from first-timers to seasoned visitors.",
  keywords:
    "London nightlife guide, London nightlife, guide to London nightlife, London clubs guide, going out in London, London nightlife 2025, best nightlife London",
  openGraph: {
    title: "London Nightlife Guide 2025 | The Complete Insider's Guide",
    description:
      "The ultimate London nightlife guide — Mayfair, Soho, Fitzrovia, and beyond. Everything you need to know.",
    url: "https://londonluxurynightlife.com/london-nightlife-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://londonluxurynightlife.com/london-nightlife-guide",
  },
};

const faqs = [
  {
    question: "What time do London nightclubs open and close?",
    answer: "Most London nightclubs open between 10pm and 11pm and close at 3am. Some venues with late licences, particularly in South London and Shoreditch, operate until 6am or later on weekends. Mayfair clubs typically close at 3am.",
  },
  {
    question: "How much does a night out in London cost?",
    answer: "A luxury night out in Mayfair with table service typically costs £200-500 per person including minimum spend, drinks, and transport. General admission at standard clubs costs £15-30 entry plus £8-15 per drink. Our full cost breakdown covers every element.",
  },
  {
    question: "Do you need to book tables at London clubs?",
    answer: "For luxury and exclusive clubs in Mayfair, table bookings are strongly recommended on Friday and Saturday. They guarantee entry and a reserved seating area. Many top venues require table bookings for groups. Guestlist entry is an alternative but does not guarantee admission.",
  },
  {
    question: "What is the dress code for London nightclubs?",
    answer: "Mayfair clubs enforce smart dress codes: tailored trousers, collared shirts, and smart shoes for men; cocktail attire for women. No sportswear, trainers, or casual denim anywhere in the luxury club circuit. Soho venues like The Box allow more creative expression.",
  },
  {
    question: "Which area of London is best for nightlife?",
    answer: "Mayfair is the centre of London's luxury nightlife with the highest concentration of premium clubs. Soho offers more creative and theatrical venues. Fitzrovia has emerging options like BEAT London. South London (Elephant & Castle area) is home to the electronic music scene.",
  },
  {
    question: "Can tourists get into London's exclusive clubs?",
    answer: "Yes. International visitors are welcomed at all London clubs. The most reliable approach is booking a table through a concierge or promoter. Guestlist entry is available but subject to door policy. Well-dressed mixed groups fare better than single-gender groups.",
  },
];

export default function LondonNightlifeGuidePage() {
  return (
    <>
      <ArticleSchema
        title="London Nightlife Guide 2025: The Complete Insider's Guide"
        description="The ultimate London nightlife guide — everything you need to know about going out in London."
        slug="/london-nightlife-guide"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="London Nightlife Guide"
        subtitle="The complete insider's guide to going out in London — from luxury Mayfair to Soho's creative underground"
      >
        <p>
          London&apos;s nightlife is the most diverse in the world. Not the
          biggest — New York, Berlin, and Ibiza all have legitimate claims
          to scale. Not the cheapest — almost anywhere else wins that
          comparison. But no other city offers the range that London does:
          from the most exclusive members&apos; clubs in Mayfair to
          boundary-pushing performance venues in Soho, from
          state-of-the-art sound systems in Fitzrovia to legendary
          electronic music institutions south of the river. Understanding
          this landscape is the first step to having an exceptional night
          out. This guide provides that understanding.
        </p>

        <h2>The Geography of London Nightlife</h2>

        <p>
          London&apos;s nightlife is organised by neighbourhood, and each
          neighbourhood has a distinct character. Choosing the right area
          is often more important than choosing the right venue.
        </p>

        <h3>Mayfair — The Luxury Centre</h3>

        <p>
          Mayfair contains the highest concentration of luxury nightclubs
          in Europe. Within a fifteen-minute walk of Green Park station,
          you can choose between{" "}
          <Link href="/clubs/tape-london">Tape London</Link> (the most
          exclusive),{" "}
          <Link href="/clubs/funky-buddha">Funky Buddha</Link> (the most
          enduring),{" "}
          <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>{" "}
          (the most historic),{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link> (the most
          elegant),{" "}
          <Link href="/clubs/tabu-london">TABU</Link> (the most
          atmospheric),{" "}
          <Link href="/clubs/maddox">Maddox</Link> (the best for dinner
          and dancing),{" "}
          <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> (the most
          reliable),{" "}
          <Link href="/clubs/selene-london">Selene</Link> (the most
          refined newcomer), and{" "}
          <Link href="/clubs/luna-club-london">Luna Club</Link> (the
          freshest energy). Our{" "}
          <Link href="/luxury-nightclubs-london">
            luxury nightclubs guide
          </Link>{" "}
          ranks every venue. For what&apos;s on tonight,{" "}
          <a
            href={ECOSYSTEM.mayfairTonight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            Mayfair Tonight
          </a>{" "}
          tracks all current events.
        </p>

        <h3>Soho — The Creative Scene</h3>

        <p>
          Soho is where London&apos;s nightlife gets interesting beyond the
          luxury formula.{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link> on
          Ganton Street delivers circus-themed spectacle with genuine
          celebrity magnetism.{" "}
          <Link href="/clubs/the-box-london">The Box</Link> on
          Walker&apos;s Court is the most provocative nightclub in London,
          built around boundary-pushing live performances. Soho&apos;s
          character is creative, unpredictable, and more varied than
          Mayfair&apos;s polished consistency.
        </p>

        <h3>Fitzrovia — The Emerging District</h3>

        <p>
          Fitzrovia sits between Mayfair and Soho, drawing from both without
          belonging to either.{" "}
          <Link href="/clubs/beat-london">BEAT London</Link> on Margaret
          Street has established itself as the area&apos;s flagship venue,
          with a sound system that prioritises audio quality over everything
          else. The scene is smaller but growing, attracting a crowd that
          values substance over postcode.
        </p>

        <h3>West End — The Entertainment Hub</h3>

        <p>
          Piccadilly and the broader West End offer{" "}
          <Link href="/clubs/reign-london">Reign London</Link>, the
          capital&apos;s premier showclub with aerial performances and
          theatrical production. The West End works well for visitors who
          want to combine theatre or dinner with a club visit.
        </p>

        <h2>How London Clubs Work</h2>

        <h3>The Entry System</h3>

        <p>
          London clubs operate three entry systems: table bookings
          (guaranteed entry, reserved seating, minimum spend required),
          guestlist (reduced or waived cover, but entry at the door
          team&apos;s discretion), and general admission (queue at the door,
          pay cover, subject to capacity and door policy). For luxury
          venues, table bookings are the recommended approach. Our{" "}
          <Link href="/blog/bottle-service-london-explained">
            bottle service guide
          </Link>{" "}
          explains the system in detail. For bookings across all venues,{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          handles reservations directly.
        </p>

        <h3>Dress Code</h3>

        <p>
          Dress code in London is non-negotiable at luxury venues. Mayfair
          clubs require smart dress: tailored trousers, collared shirts,
          and smart shoes for men; cocktail-appropriate attire for women.
          No sportswear, no trainers, no casual denim. Soho venues like
          The Box allow more creative expression. Our{" "}
          <Link href="/london-club-dress-code-guide">
            dress code guide
          </Link>{" "}
          covers every venue specifically.
        </p>

        <h3>Timing</h3>

        <p>
          London&apos;s luxury clubs open at 10-11pm. Arriving before
          midnight is advisable for guestlist entry. The energy peaks
          between midnight and 2am. Most Mayfair venues close at 3am
          (licensing restrictions). If you want to continue past 3am, our{" "}
          <Link href="/blog/london-late-night-venues-open-past-3am">
            late-night venues guide
          </Link>{" "}
          covers the options.
        </p>

        <h2>Planning Your Night</h2>

        <div className="info-box">
          <h4>Quick Guide by Preference</h4>
          <ul>
            <li><strong>First time in London:</strong> <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> or <Link href="/clubs/funky-buddha">Funky Buddha</Link></li>
            <li><strong>Celebrity atmosphere:</strong> <Link href="/clubs/tape-london">Tape London</Link> or <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link></li>
            <li><strong>Dinner + club:</strong> <Link href="/clubs/maddox">Maddox</Link></li>
            <li><strong>Something different:</strong> <Link href="/clubs/tabu-london">TABU</Link> or <Link href="/clubs/the-box-london">The Box</Link></li>
            <li><strong>Music quality:</strong> <Link href="/clubs/tape-london">Tape London</Link> or <Link href="/clubs/beat-london">BEAT</Link></li>
            <li><strong>Celebration/birthday:</strong> <Link href="/clubs/reign-london">Reign</Link> or <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link></li>
            <li><strong>Corporate entertainment:</strong> <Link href="/clubs/maddox">Maddox</Link> or <Link href="/clubs/scotch-of-st-james">Scotch</Link></li>
          </ul>
        </div>

        <p>
          For a complete evening itinerary including dinner, our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          maps out timing, restaurants, and the transition strategy. For
          corporate events, our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate entertainment guide
          </Link>{" "}
          covers venue selection, budgeting, and logistics.
        </p>

        <h2>For International Visitors</h2>

        <p>
          London welcomes international visitors across all its nightlife
          venues. The key differences from other cities: clubs close earlier
          than in most European capitals (3am in Mayfair); tipping is
          appreciated but not expected; card payment is universal; the tube
          stops around midnight on most nights (Night Tube on Friday and
          Saturday on select lines). Our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            international visitors&apos; guide
          </Link>{" "}
          covers everything specific to visiting London&apos;s clubs from
          abroad.
        </p>

        <h2>The London Nightlife Ecosystem</h2>

        <p>
          This guide is part of a network of specialist London nightlife
          resources. For table bookings and bottle service pricing,{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          provides direct reservations. For tonight&apos;s events and
          what&apos;s on in Mayfair,{" "}
          <a
            href={ECOSYSTEM.mayfairTonight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            Mayfair Tonight
          </a>{" "}
          tracks current listings. And for everything else —{" "}
          <Link href="/contact">contact our concierge team</Link> and
          we will plan your night from start to finish.
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/luxury-nightclubs-london">
              Luxury Nightclubs in London: The Definitive Guide
            </Link>
          </li>
          <li>
            <Link href="/celebrity-nightclubs-london">
              Celebrity Nightclubs in London
            </Link>
          </li>
          <li>
            <Link href="/guides/complete-guide-london-luxury-nightlife">
              The Complete Guide to London&apos;s Luxury Nightlife
            </Link>
          </li>
          <li>
            <Link href="/blog/how-much-does-night-out-mayfair-cost">
              How Much Does a Night Out in Mayfair Cost?
            </Link>
          </li>
          <li>
            <Link href="/blog/best-clubs-mayfair-complete-ranking">
              Every Mayfair Club Ranked
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
