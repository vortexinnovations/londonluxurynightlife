import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import { waClubMessage } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Selene London Guide | What to Expect, Atmosphere & Complete Experience",
  description:
    "The complete visitor's guide to Selene London — a newer Mayfair venue offering sophistication over volume. The crowd, the music, how it compares, and who it's designed for.",
  keywords:
    "selene london guide, selene london experience, selene london what to expect, guide to selene london, selene mayfair club, selene london review",
  openGraph: {
    title: "Selene London Guide | The Complete Visitor's Experience",
    description:
      "Everything you need to know about Selene London — the refined Mayfair newcomer gaining a serious following among discerning nightlife visitors.",
    url: "https://londonluxurynightlife.com/selene-london-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://londonluxurynightlife.com/selene-london-guide",
  },
};

const faqs = [
  {
    question: "Is Selene London a new club?",
    answer:
      "Selene is one of Mayfair's newer nightlife additions, having established itself as a serious contender in the luxury nightclub space. While it lacks the decades of history that venues like Tape or Funky Buddha carry, it has built a loyal following quickly through consistent quality, refined design, and a focus on the experience rather than hype.",
  },
  {
    question: "What music does Selene London play?",
    answer:
      "Selene's music policy centres on hip-hop and RnB, played at levels that allow conversation at your table without shouting. The programming prioritises quality selection over maximum volume — expect a sophisticated mix of current releases and well-chosen classics rather than constant peak-time bangers. The atmosphere is social first, dancefloor second.",
  },
  {
    question: "Is Selene London good for couples?",
    answer:
      "Selene is one of Mayfair's best options for couples. The refined atmosphere, conversational volume levels, elegant interiors, and intimate scale create an environment that works exceptionally well for two people. Unlike larger venues where couples can feel lost without a group, Selene's design makes smaller parties feel comfortable and well-catered for.",
  },
  {
    question: "How does Selene compare to established Mayfair clubs?",
    answer:
      "Selene positions itself as the sophisticated alternative to Mayfair's louder, more established venues. Where Tape is exclusive and music-focused, and Cirque Le Soir is theatrical, Selene occupies a space defined by understated elegance. It appeals to guests who want a premium night without the intensity or the scene. Think of it as Mayfair nightlife for people who have outgrown the need to be at the biggest name in the room.",
  },
  {
    question: "What is the dress code at Selene London?",
    answer:
      "The dress code is smart and elegant. Selene's crowd takes presentation seriously — for women, well-chosen dresses or sophisticated separates with heels. For men, tailored trousers, a quality shirt, and smart shoes are expected. The overall aesthetic is refined rather than flashy. Quality and taste are valued over labels and logos.",
  },
];

export default function SeleneLondonGuidePage() {
  return (
    <>
      <ArticleSchema
        title="Selene London Guide: The Complete Visitor's Experience"
        description="Everything you need to know about Selene London — the refined Mayfair newcomer that prioritises sophistication over volume."
        slug="/selene-london-guide"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="Selene London Guide"
        subtitle="The complete insider's guide to Mayfair's refined newcomer — why the discerning crowd is choosing sophistication over spectacle"
        ctaMessage={waClubMessage("Selene London")}
        ctaLabel="Book Selene London"
      >
        <p>
          Mayfair&apos;s nightlife establishment does not welcome newcomers
          easily. Venues open and close with predictable regularity, most
          failing to distinguish themselves from the existing furniture.{" "}
          <Link href="/clubs/selene-london">Selene London</Link> has done
          something quietly remarkable: it has built a genuine following not by
          being the loudest, the most exclusive, or the most theatrical, but by
          being the most considered. This guide explains what that means in
          practice and who it makes Selene right for.
        </p>

        <h2>The Design Philosophy</h2>

        <p>
          Selene&apos;s interiors communicate its identity immediately. Where
          many Mayfair clubs pursue opulence through excess — chandeliers, gold
          leaf, marble surfaces competing for attention — Selene opts for
          restraint. The palette is muted and warm. The materials are quality
          without being ostentatious. The lighting is carefully calibrated to
          flatter rather than dazzle. The overall effect is of a space designed
          by someone who has spent many nights in Mayfair clubs and decided to
          build the antidote to everything that irritates them.
        </p>

        <p>
          The layout favours intimacy. Tables are positioned to create
          semi-private spaces within the broader room, with enough separation
          to hold a conversation and enough proximity to feel the collective
          energy. The dancefloor exists but does not dominate — this is a venue
          where the table experience is the primary offering and the
          dancefloor supplements rather than defines the evening.
        </p>

        <h2>Sophistication Over Volume</h2>

        <p>
          This is Selene&apos;s defining principle and the thing that either
          attracts or repels depending on what you want from a night out. The
          music — hip-hop and RnB — is played at levels that prioritise social
          interaction over dancefloor intensity. You can hold a conversation
          at your table without leaning in and shouting. You can hear the
          person across from you. You can enjoy the music as an accompaniment
          to the evening rather than the sole purpose of it.
        </p>

        <p>
          For some, this is precisely what they have been looking for — a
          premium venue where you can actually talk to the people you came
          with while enjoying quality music and service. For others
          accustomed to the peak-time intensity of Tape or Cirque Le Soir, it
          may feel understated. Neither reaction is wrong; they reflect
          different priorities. Selene has chosen its lane and committed to it.
        </p>

        <p className="pull-quote">
          Selene does not compete with Mayfair&apos;s loudest clubs. It offers
          an alternative for people who have realised loud was never the point.
        </p>

        <h2>The Crowd</h2>

        <p>
          Selene attracts what might be described as the grown-up segment of
          Mayfair&apos;s nightlife audience. The crowd skews slightly older than
          venues like Reign or Funky Buddha — predominantly late twenties
          through forties — and carries an air of quiet confidence. These are
          people who have been to every major Mayfair club and have chosen
          Selene because it offers something the established venues do not:
          space to breathe.
        </p>

        <p>
          The demographic includes well-dressed professionals, couples on
          genuinely premium date nights, small groups of close friends, and
          international visitors who have done their research. The crowd is
          discerning without being exclusionary, fashionable without being
          competitive, and social without being performative. It is one of the
          few Mayfair venues where the crowd improves the experience rather
          than merely populating the room.
        </p>

        <h2>The Music</h2>

        <p>
          Selene&apos;s music policy centres on hip-hop and RnB with a
          programming approach that favours sophistication over chart-chasing.
          The DJ selections lean towards quality — well-chosen tracks that
          create atmosphere without demanding your full attention. The volume
          is calibrated to complement the room rather than dominate it, which
          means the music serves the overall experience rather than
          subordinating everything else to itself.
        </p>

        <p>
          If your primary criterion for a night out is the quality and intensity
          of the music, venues like{" "}
          <Link href="/tape-london-guide">Tape London</Link> or{" "}
          <Link href="/clubs/beat-london">BEAT London</Link> may be stronger
          options. But if you want music that enhances a social evening without
          overwhelming it, Selene&apos;s approach is among the best in Mayfair.
          For a broader look at London&apos;s music scenes, our{" "}
          <Link href="/blog/best-clubs-london-hip-hop-rnb">
            hip-hop and RnB club guide
          </Link>{" "}
          ranks the options.
        </p>

        <h2>Best for Couples and Small Groups</h2>

        <p>
          This is where Selene genuinely distinguishes itself. Many Mayfair
          clubs are designed for groups of eight or more — the table minimums,
          the layouts, and the energy all assume a larger party. Selene works
          beautifully for two people. The intimate scale, the conversational
          volume, the elegant surroundings, and the attentive-without-intrusive
          service create one of the finest date-night club experiences in
          London. Couples who feel awkward or out of place at high-energy
          mega-clubs will find Selene refreshingly comfortable.
        </p>

        <p>
          Small groups of four to six also find an excellent experience here.
          The table configurations suit smaller parties well, and the
          atmosphere does not depend on having fifteen people to generate
          energy. The evening feels complete without needing to supplement
          it with external stimulus.
        </p>

        <h2>How Selene Compares</h2>

        <p>
          Understanding where Selene sits in Mayfair&apos;s landscape helps
          you decide if it is right for you. Against{" "}
          <Link href="/tape-london-guide">Tape London</Link>, Selene is less
          exclusive and less music-focused but more comfortable and more social.
          Against{" "}
          <Link href="/cirque-le-soir-guide">Cirque Le Soir</Link>, Selene
          offers none of the theatrical entertainment but all of the refinement
          that Cirque&apos;s circus energy does not allow. Against{" "}
          <Link href="/maddox-club-guide">Maddox</Link>, Selene shares the
          sophisticated ethos but without the dinner component or the house
          music programming.
        </p>

        <p>
          Selene&apos;s closest comparison may be{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link> — both venues
          prioritise elegance and atmosphere over intensity. But where Dear
          Darling operates primarily as a cocktail bar that extends into
          late-night territory, Selene is unambiguously a nightclub, just
          one that has decided sophistication and volume are not mutually
          exclusive. For a full ranking of Mayfair options, our{" "}
          <Link href="/blog/best-clubs-mayfair-complete-ranking">
            complete Mayfair club ranking
          </Link>{" "}
          provides context.
        </p>

        <h2>Why It Is Gaining a Following</h2>

        <p>
          Selene&apos;s growing reputation rests on a simple insight: a
          significant portion of London&apos;s luxury nightlife audience has
          been underserved. Not everyone wants maximum volume, maximum
          exclusivity, or maximum spectacle. Some people — often the most
          affluent and most experienced — simply want a beautiful room, good
          music, excellent service, and the ability to enjoy the company of the
          people they came with. Selene delivers this consistently, and word
          has spread through exactly the kind of organic recommendation that
          money cannot buy.
        </p>

        <p>
          For more on Selene and other newcomers reshaping Mayfair, our{" "}
          <Link href="/blog/luna-selene-new-mayfair-clubs-2025">
            editorial on Mayfair&apos;s new wave
          </Link>{" "}
          covers the broader trend.
        </p>

        <h2>Practical Details</h2>

        <div className="info-box">
          <h4>At a Glance</h4>
          <ul>
            <li>
              <strong>Location:</strong> Mayfair
            </li>
            <li>
              <strong>Open:</strong> Thursday to Saturday
            </li>
            <li>
              <strong>Music:</strong> Hip-Hop, RnB, Commercial — at
              conversational levels
            </li>
            <li>
              <strong>Tables from:</strong> &pound;1,000 minimum spend
            </li>
            <li>
              <strong>Dress code:</strong> Smart and elegant. No sportswear.
            </li>
            <li>
              <strong>Best for:</strong> Couples, small groups, date nights,
              refined evenings
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
            bottle service guide
          </Link>{" "}
          explains what table bookings include.
        </p>

        <h2>Who Selene London Is For</h2>

        <p>
          Selene is for the guest who has been everywhere and wants something
          different — not louder, not more exclusive, not more theatrical, but
          more refined. It suits couples on date nights, professionals who want
          a premium evening without the next-day recovery, small groups who
          value conversation as much as music, and anyone who has looked at
          Mayfair&apos;s established lineup and thought: I want all of that,
          but calmer.
        </p>

        <h2>Who Should Consider Somewhere Else</h2>

        <p>
          If you want high-energy dancefloor intensity, Selene will feel too
          restrained. If you need entertainment and spectacle, look at{" "}
          <Link href="/cirque-le-soir-guide">Cirque Le Soir</Link> or{" "}
          <Link href="/reign-london-guide">Reign</Link>. If maximum exclusivity
          and a no-phones, music-first environment is your priority,{" "}
          <Link href="/tape-london-guide">Tape London</Link> is the answer. And
          if you are a large group looking for a big celebratory night, Selene&apos;s
          intimate scale may feel limiting.
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Ready to Book Selene London?</h2>

        <p>
          <Link href="/contact">Contact our team</Link> for Selene London table
          bookings and guestlist. For the full venue review, see our{" "}
          <Link href="/clubs/selene-london">Selene London profile</Link>. For
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

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/clubs/selene-london">
              Selene London: Full Venue Profile
            </Link>
          </li>
          <li>
            <Link href="/blog/luna-selene-new-mayfair-clubs-2025">
              Luna &amp; Selene: Mayfair&apos;s New Wave
            </Link>
          </li>
          <li>
            <Link href="/luxury-nightclubs-london">
              Luxury Nightclubs in London
            </Link>
          </li>
          <li>
            <Link href="/blog/best-clubs-mayfair-complete-ranking">
              Best Clubs in Mayfair: Complete Ranking
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
