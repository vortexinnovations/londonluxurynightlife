import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { ECOSYSTEM } from "@/lib/ecosystem";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "London Club Dress Code: What Actually Gets You In",
  description:
    "Mayfair dress codes decoded with specific advice per venue. What to wear, what gets you turned away, and why the jeans question depends on which club.",
  keywords:
    "london club dress code, dress code london clubs, what to wear london nightclub, mayfair club dress code, london nightclub dress code men, london nightclub dress code women",
  openGraph: {
    title: "London Club Dress Code Guide | What to Wear to London Nightclubs",
    description:
      "The definitive dress code guide for London's best nightclubs. Venue-by-venue strictness, men's and women's guides, and every common mistake to avoid.",
    url: "https://londonluxurynightlife.com/london-club-dress-code-guide",
    type: "article",
  },
  alternates: {
    canonical:
      "https://londonluxurynightlife.com/london-club-dress-code-guide",
  },
};

const faqs = [
  {
    question: "Can I wear jeans to a London nightclub?",
    answer:
      "It depends on the venue and the jeans. Dark, slim-fit designer jeans are accepted at most London clubs including many Mayfair venues. Distressed, ripped, baggy, or light-wash jeans will be refused at strict venues like Tape London, Funky Buddha, and Dear Darling. When in doubt, choose tailored trousers instead — they are never the wrong choice.",
  },
  {
    question: "What should men wear to Mayfair nightclubs?",
    answer:
      "The safe formula for Mayfair clubs is: smart shoes (leather or suede, never trainers), tailored trousers or dark designer jeans, a collared shirt or smart fitted top, and optionally a blazer. Avoid sportswear, branded streetwear, shorts, and any visible gym clothing. The standard is smart-casual with an emphasis on smart.",
  },
  {
    question: "What should women wear to London nightclubs?",
    answer:
      "Women have considerably more flexibility than men. Cocktail dresses, stylish jumpsuits, tailored separates, and elevated going-out tops with trousers or skirts all work at every London venue. Heels are common but not required — smart flats and fashion trainers are accepted at most clubs. The key is intentionality: your outfit should look considered, not accidental.",
  },
  {
    question: "Do London clubs have different dress codes for different nights?",
    answer:
      "Yes. Many venues relax their dress code slightly on quieter midweek nights (Monday-Wednesday) and enforce it more strictly on weekends and special events. However, the safest approach is to dress for the strictest interpretation — you will never be turned away for being overdressed, but you can absolutely be refused for being underdressed.",
  },
  {
    question: "Will I be turned away for wearing trainers to a London club?",
    answer:
      "At most Mayfair clubs, yes. Trainers — even expensive designer ones — are refused at venues like Tape London, Funky Buddha, Scotch of St James, and Dear Darling. Exceptions exist: BEAT London, Cuckoo Club, and some themed nights at other venues accept clean, fashion-forward trainers. If trainers are essential to your outfit, check with the venue or your promoter before arriving.",
  },
  {
    question: "What is the dress code for The Box London?",
    answer:
      "The Box encourages creative, expressive dressing rather than the traditional Mayfair smart-casual standard. Think fashion-forward, theatrical, or artistic rather than corporate. The venue rewards personality in clothing choices. However, the basic standard still applies: no sportswear, no flip-flops, and nothing that suggests you have not made an effort.",
  },
];

export default function LondonClubDressCodeGuidePage() {
  return (
    <>
      <ArticleSchema
        title="London Club Dress Code Guide: What to Wear to London Nightclubs"
        description="The definitive dress code guide for London's best nightclubs — men's and women's guides, venue-by-venue strictness tiers, Mayfair expectations, and every common mistake to avoid."
        slug="/london-club-dress-code-guide"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="London Club Dress Code Guide"
        subtitle="What to actually wear to London's best nightclubs — venue by venue, gender by gender, and mistake by mistake"
      >
        <p>
          More people are turned away from London&apos;s best nightclubs for
          dress code violations than for any other reason. Not for being too
          drunk, not for arriving too late, not for having the wrong attitude
          — for wearing the wrong shoes. It is a remarkably avoidable problem,
          yet it ruins evenings with depressing regularity because the
          information available online is either too vague to be useful or
          too outdated to be accurate.
        </p>

        <p>
          This guide is specific. It names which venues enforce which
          standards, explains precisely what works and what does not for both
          men and women, addresses the grey areas that cause confusion, and
          ranks every major London club by dress code strictness. If you are
          visiting London for the first time or simply tired of guessing,
          this is the only guide you need. For even deeper detail on specific
          items and seasonal considerations, our{" "}
          <Link href="/london-club-dress-code-guide">
            complete wardrobe guide
          </Link>{" "}
          goes further.
        </p>

        <h2>The Universal Rule</h2>

        <p>
          Every London club, regardless of its specific dress code, operates
          on a single underlying principle: intentionality. Your outfit should
          look like a decision, not an afterthought. Door staff are not
          checking labels or measuring hemlines — they are assessing whether
          you have made an effort that matches the standard of the venue. A
          well-fitted outfit from the high street will outperform an expensive
          outfit worn carelessly every time.
        </p>

        <p>
          This principle explains why dress codes in London feel inconsistent
          to visitors. The same jeans that gained entry on Wednesday get
          refused on Saturday. The same trainers that worked at one venue fail
          at another. It is not inconsistency — it is context. Dress codes
          flex with the night, the crowd, and the energy the venue is
          curating. Understanding that context is more useful than memorising
          rules.
        </p>

        <h2>Men&apos;s Dress Code Guide</h2>

        <p>
          Men face stricter scrutiny than women at London nightclubs. This is
          simply a fact of the industry, and arguing the point at the door has
          never once changed an outcome. The standard for men at London&apos;s
          premium clubs is smart-casual with the emphasis firmly on smart.
        </p>

        <div className="info-box">
          <h4>Men&apos;s Safe Formula</h4>
          <ul>
            <li>
              <strong>Shoes:</strong> Leather or suede shoes — loafers, Chelsea
              boots, smart brogues, or dress shoes. This is the single most
              important item. Wrong shoes guarantee refusal at strict venues.
            </li>
            <li>
              <strong>Trousers:</strong> Tailored trousers, chinos, or dark
              slim-fit designer jeans. No joggers, no cargo trousers, no
              shorts under any circumstances.
            </li>
            <li>
              <strong>Top:</strong> Collared shirt (not necessarily formal —
              an open-collar shirt works), smart fitted knitwear, or a
              well-chosen polo. No t-shirts at strict venues.
            </li>
            <li>
              <strong>Optional:</strong> A blazer elevates any outfit and is
              the fastest way to shift from borderline to comfortable. Even
              an unstructured blazer over a simple shirt changes the
              impression entirely.
            </li>
          </ul>
        </div>

        <p>
          The items that will get you refused at the door without discussion:
          sportswear of any kind (including designer), visible gym clothing,
          shorts, flip-flops or sandals, heavily branded streetwear, and
          anything that looks like it was chosen for comfort rather than
          appearance. Hats and caps are refused at most Mayfair venues. Heavy
          chains and overtly flashy jewellery work against you at the most
          refined doors.
        </p>

        <h2>Women&apos;s Dress Code Guide</h2>

        <p>
          Women enjoy considerably more flexibility in London&apos;s club
          dress codes. The range of acceptable outfits spans from cocktail
          dresses and heels to fashion-forward separates with statement
          trainers. The underlying rule remains intentionality — your outfit
          should look considered and appropriate for a premium evening out.
        </p>

        <p>
          Cocktail dresses and smart jumpsuits work universally. Tailored
          trousers with an elevated top are reliable at every venue.
          Co-ordinated sets — matching top and skirt or trouser — read as
          polished and intentional. Heels are common but not compulsory;
          smart flats, elegant mules, and even clean fashion trainers are
          accepted at most venues. The key distinction for women is between
          daytime casual (which will be refused) and evening-appropriate
          (which will not). Denim is acceptable for women at more venues
          than for men, provided it is styled as a deliberate outfit choice.
        </p>

        <p>
          Items that cause problems: athletic wear, beachwear,
          excessively casual daytime outfits, and anything that reads as
          festival-wear rather than evening-wear. These are rare refusals
          for women but they do occur at the strictest venues.
        </p>

        <p className="pull-quote">
          The door is not checking your labels. It is checking your effort.
          A well-fitted outfit from Zara will outperform a carelessly worn
          outfit from Gucci at every venue on this list.
        </p>

        <h2>Venue-by-Venue Strictness Tiers</h2>

        <h3>Tier 1: Strict — Dress Impeccably</h3>

        <p>
          <Link href="/clubs/tape-london">Tape London</Link>,{" "}
          <Link href="/clubs/funky-buddha">Funky Buddha</Link>,{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link>, and{" "}
          <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>.
          These venues enforce the highest standard. Smart shoes mandatory,
          no trainers, no jeans on peak nights (dark designer jeans may pass
          midweek), collared shirts expected for men. These are the venues
          where a blazer is not optional — it is insurance. Tape&apos;s door
          is the strictest in London and will refuse designer trainers that
          every other club would accept.
        </p>

        <h3>Tier 2: Smart — Effort Required</h3>

        <p>
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>,{" "}
          <Link href="/clubs/tabu-london">TABU</Link>,{" "}
          <Link href="/clubs/selene-london">Selene</Link>,{" "}
          <Link href="/clubs/luna-club-london">Luna Club</Link>,{" "}
          <Link href="/clubs/maddox">Maddox</Link>, and{" "}
          <Link href="/clubs/reign-london">Reign London</Link>.
          Smart-casual standard enforced. Dark jeans acceptable, smart shoes
          strongly preferred, trainers a risk on weekends. These venues want
          you to look good but allow more individual expression than Tier 1.
          Cirque rewards creative dressing that matches its theatrical energy.
        </p>

        <h3>Tier 3: Relaxed Smart — Personality Welcome</h3>

        <p>
          <Link href="/clubs/cuckoo-club">Cuckoo Club</Link>,{" "}
          <Link href="/clubs/beat-london">BEAT London</Link>,{" "}
          <Link href="/clubs/the-box-london">The Box</Link>,{" "}
          <Link href="/clubs/libertine">Libertine</Link>,{" "}
          <Link href="/clubs/lio-club-london">LIO London</Link>,{" "}
          <Link href="/clubs/luxx-club-london">LUXX</Link>, and{" "}
          <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link>.
          These venues welcome more personality in dress. Clean designer
          trainers are generally accepted, dark jeans work comfortably, and
          the emphasis shifts from formality to style. The Box actively
          encourages creative and expressive outfits. BEAT accepts the
          fashion trainer with open arms. The basic rule remains: no
          sportswear, no flip-flops, no effort-free clothing.
        </p>

        <h2>The Jeans Grey Area</h2>

        <p>
          No single item causes more door-related disappointment than jeans.
          The rules are genuinely inconsistent because they depend on the
          jeans, the venue, the night, and the rest of your outfit. Here is
          the most honest guidance possible: dark, slim-fit, well-maintained
          designer jeans (Acne, APC, Saint Laurent, similar) will gain entry
          at most London clubs on most nights. Light wash, distressed, ripped,
          baggy, or obviously casual jeans will be refused at any venue in
          Tier 1 and most in Tier 2. If your evening depends on getting in,
          wear tailored trousers and eliminate the variable entirely.
        </p>

        <h2>Seasonal Adjustments</h2>

        <p>
          Summer creates specific challenges. Men cannot wear shorts to any
          venue on this list — no exceptions, regardless of temperature. Open
          shoes for men remain prohibited. Women gain more options in summer
          — open-toe heels, lighter fabrics, and more relaxed silhouettes
          work well. Winter is simpler: coat check exists at every venue, so
          what you wear over your outfit is irrelevant. Dress for the club,
          not the commute.
        </p>

        <p>
          For table bookings at any venue on this list, book through{" "}
          <a
            href={ECOSYSTEM.bottleService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            London Bottle Service
          </a>{" "}
          and mention any dress code concerns — the team can confirm current
          standards for your specific night. For event schedules and themed
          nights that may have different dress requirements, check{" "}
          <a
            href={ECOSYSTEM.mayfairTonight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80"
          >
            Mayfair Tonight
          </a>
          .
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/london-club-dress-code-guide">
              What to Wear to London Clubs: The Complete Wardrobe Guide
            </Link>
          </li>
          <li>
            <Link href="/luxury-nightclubs-london">
              Luxury Nightclubs in London: The Definitive Guide
            </Link>
          </li>
          <li>
            <Link href="/exclusive-clubs-london">
              Most Exclusive Clubs in London
            </Link>
          </li>
          <li>
            <Link href="/how-to-get-into-tape-london">
              How to Get Into Tape London
            </Link>
          </li>
          <li>
            <Link href="/blog/best-clubs-mayfair-complete-ranking">
              Every Mayfair Club Ranked
            </Link>
          </li>
          <li>
            <Link href="/blog/how-much-does-night-out-mayfair-cost">
              How Much Does a Night Out in Mayfair Cost?
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
