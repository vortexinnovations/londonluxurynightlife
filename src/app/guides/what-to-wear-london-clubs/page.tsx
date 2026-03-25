import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What to Wear to London's Exclusive Clubs | Dress Code Guide | London Luxury Nightlife",
  description:
    "The complete dress code guide for London's most exclusive clubs. What to wear, what gets you turned away, venue-specific rules, and practical tips for men and women dressing for Mayfair nightlife.",
  keywords:
    "London club dress code, what to wear Mayfair club, nightclub dress code London, dress code exclusive clubs London",
};

const faqs = [
  {
    question: "Can I wear trainers to London clubs?",
    answer:
      "At the vast majority of Mayfair clubs, no. Trainers — even expensive designer ones — will get you turned away at venues like Tape London, Maddox, Libertine, and most others on the Mayfair circuit. Ministry of Sound is an exception where clean, smart trainers may be acceptable. When in doubt, wear leather shoes.",
  },
  {
    question: "Do I need to wear a suit to London clubs?",
    answer:
      "A full suit is not required at most London clubs, but it will always be accepted. The minimum for men is typically tailored trousers, a collared shirt, smart shoes, and optionally a blazer or smart jacket. At Maddox, a jacket is preferred. Smart separates work perfectly well at most venues.",
  },
  {
    question: "What should women wear to Mayfair clubs?",
    answer:
      "Women have more flexibility than men, but the standard is high. A cocktail dress, stylish trouser suit, or elevated evening outfit with heels is the safest choice. Most Mayfair venues expect heels rather than flats. Avoid anything overly casual — jeans, flat sandals, and beachwear-inspired outfits will not pass the door.",
  },
  {
    question: "Are jeans allowed in London nightclubs?",
    answer:
      "Dark, well-fitted designer jeans can work at some London clubs when paired with smart shoes and a blazer, but they are risky at the stricter Mayfair venues. Tape London, Maddox, and Libertine generally expect trousers rather than denim. If in doubt, leave the jeans at home.",
  },
  {
    question: "What happens if I don't meet the dress code?",
    answer:
      "You will be turned away at the door, regardless of whether you have a table booking or are on the guestlist. Door staff at London's premium clubs are experienced and firm — there is no negotiating or talking your way past a dress code violation. This is why getting it right matters.",
  },
];

export default function WhatToWearPage() {
  return (
    <>
      <ArticleSchema
        title="What to Wear to London's Exclusive Clubs: The Complete Dress Code Guide"
        description="Specific, practical dress code advice for London's most prestigious nightlife venues — from door-policy realities to style inspiration for men and women."
        slug="/guides/what-to-wear-london-clubs"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="What to Wear to London's Exclusive Clubs: The Complete Dress Code Guide"
        subtitle="Specific, practical advice on dressing for Mayfair's most prestigious venues — from door-policy realities to style inspiration"
      >
        <p>
          Dress code is the single most common reason people are turned away
          from London&apos;s exclusive clubs. Not guestlist issues, not
          group composition, not attitude — clothing. Every weekend, well-
          intentioned guests who have booked tables, arranged transport, and
          planned their entire evening are stopped at the door because they
          misjudged what a particular venue requires. It is frustrating, it
          is embarrassing, and it is entirely avoidable.
        </p>

        <p>
          This guide gives you everything you need to get it right. Not
          vague advice about &quot;looking smart&quot; but specific,
          practical guidance on what works, what does not, and how different
          venues approach the question of what you are wearing. Treat this
          as your insurance policy against the worst possible start to an
          evening.
        </p>

        <h2>The Door Policy Reality</h2>

        <p>
          Before we talk about specific garments, it is worth understanding
          how door policies actually work at London&apos;s premium clubs.
          The door team is not looking for a specific designer label or a
          particular style. They are looking for effort, intention, and an
          understanding that you are entering a space with standards. The
          question they are implicitly asking is: does this person look like
          they belong in this room?
        </p>

        <p>
          Door staff at Mayfair venues are experienced professionals who
          make these judgements hundreds of times per night. They are not
          arbitrary, and they are not trying to be difficult. They are
          protecting the atmosphere that every guest inside the venue is
          paying to enjoy. A room full of well-dressed people creates an
          entirely different energy than one where anything goes, and
          maintaining that standard is part of what makes these venues
          premium.
        </p>

        <p>
          The crucial thing to understand is that dress code decisions are
          final. There is no amount of negotiation, name-dropping, or money
          that overrides a door team&apos;s assessment. If you are not
          dressed appropriately, you are not coming in. Full stop.
        </p>

        <h2>Dress Code for Men</h2>

        <h3>What Works</h3>

        <p>
          The foundation of a successful outfit for any London club is
          straightforward: smart shoes, tailored trousers, a collared shirt,
          and a jacket or blazer. This combination will gain you entry at
          every premium venue in the city. Build your outfit around these
          four pillars and you cannot go wrong.
        </p>

        <ul>
          <li>
            <strong>Shoes:</strong> Leather shoes are non-negotiable at
            Mayfair clubs. Polished Oxfords, brogues, Chelsea boots, or
            clean leather loafers all work. The shoes are the first thing
            door staff look at — if your shoes are wrong, nothing else
            matters. Suede shoes can work at some venues but are riskier.
            Stick with leather.
          </li>
          <li>
            <strong>Trousers:</strong> Tailored trousers in navy, black,
            charcoal, or dark grey. Slim or regular fit — not baggy, not
            skin-tight. Chinos in dark colours can work at less formal
            venues but are not recommended for the stricter Mayfair clubs.
          </li>
          <li>
            <strong>Shirt:</strong> A collared shirt, either buttoned-up
            or open one or two buttons at the neck. White, light blue,
            black, and dark tones all work. The shirt should be pressed and
            well-fitted. A quality knit polo can work at some venues, but a
            proper shirt is always the safer choice.
          </li>
          <li>
            <strong>Jacket:</strong> A blazer or smart jacket elevates any
            outfit and is explicitly preferred at{" "}
            <Link href="/clubs/maddox">Maddox</Link>. At other venues it
            is not mandatory, but it immediately signals that you understand
            the environment. A navy or charcoal blazer is the most
            versatile piece in your wardrobe for London nightlife.
          </li>
        </ul>

        <h3>What Gets You Turned Away</h3>

        <p>
          The list of things that will result in rejection at the door is
          depressingly consistent, and yet people continue to test it every
          weekend:
        </p>

        <ul>
          <li>
            <strong>Trainers and sneakers.</strong> This is the single most
            common reason men are turned away. It does not matter that your
            trainers cost three hundred pounds or that they are a limited
            edition collaboration. They are still trainers. The door team
            does not care about the retail price — they care about the
            category.
          </li>
          <li>
            <strong>Shorts.</strong> Under no circumstances, regardless of
            how warm the evening is.
          </li>
          <li>
            <strong>Sportswear.</strong> Track pants, joggers, athletic
            wear, anything with visible sports branding. Even expensive
            athleisure is a no.
          </li>
          <li>
            <strong>Hoodies and sweatshirts.</strong> Even under a jacket.
            If the door team spots it, you are not getting in.
          </li>
          <li>
            <strong>Sleeveless tops and vests.</strong> Not appropriate for
            any premium London club.
          </li>
          <li>
            <strong>Flip-flops or open-toed shoes.</strong> This should go
            without saying, but apparently it does not.
          </li>
          <li>
            <strong>Ripped jeans.</strong> Even if the rips are
            &quot;designer,&quot; most Mayfair door teams view them as
            casual wear.
          </li>
          <li>
            <strong>Caps, hats, and headwear.</strong> With very few
            exceptions, headwear is not accepted at Mayfair clubs.
          </li>
        </ul>

        <div className="info-box">
          <p>
            <strong>The grey area: designer jeans.</strong> Dark, well-
            fitted jeans paired with smart shoes and a blazer can work at
            some venues —{" "}
            <Link href="/clubs/cuckoo-club">Cuckoo Club</Link>,{" "}
            <Link href="/clubs/beat-london">BEAT London</Link>, and{" "}
            <Link href="/clubs/scotch-of-st-james">
              Scotch of St James
            </Link>{" "}
            are generally more lenient on denim. However, at stricter venues
            like{" "}
            <Link href="/clubs/tape-london">Tape London</Link>,{" "}
            <Link href="/clubs/maddox">Maddox</Link>, and{" "}
            <Link href="/clubs/libertine">Libertine</Link>, trousers are
            expected. Our advice: if there is any doubt, wear trousers. You
            will never be turned away for being too smart.
          </p>
        </div>

        <h2>Dress Code for Women</h2>

        <h3>Greater Flexibility, But Standards Exist</h3>

        <p>
          Women have significantly more latitude than men at London&apos;s
          clubs, but this does not mean anything goes. The expectation is
          glamorous evening wear — the kind of outfit where it is clear you
          have made an effort and that you are dressed for a premium
          environment.
        </p>

        <ul>
          <li>
            <strong>Dresses:</strong> Cocktail dresses, midi dresses,
            bodycon styles, and elegant maxi dresses all work. This is
            the most reliable choice and the one most women at Mayfair clubs
            opt for. Black remains a safe and popular choice, but colour
            and pattern are welcomed — the goal is to look polished and
            intentional.
          </li>
          <li>
            <strong>Separates:</strong> A sharp pair of tailored trousers
            with a structured top or blouse works beautifully. Jumpsuits
            are also popular and make a strong impression. The key is that
            everything should be fitted and intentional rather than casual.
          </li>
          <li>
            <strong>Shoes:</strong> Heels are expected at most Mayfair
            venues. This is a reality, not a recommendation — flats will
            be scrutinised at the door of stricter clubs, and some venues
            have an explicit heels policy. Stilettos, block heels, heeled
            boots, and strappy heels are all appropriate. If you genuinely
            cannot wear heels, elegant pointed-toe flats or dressy mules
            may pass at less strict venues, but it is a risk.
          </li>
          <li>
            <strong>Bags:</strong> A clutch or small crossbody bag is
            ideal. Large bags and totes look out of place and create
            practical problems at a crowded club. If you need to carry more,
            use the cloakroom.
          </li>
        </ul>

        <h3>What Will Not Work</h3>

        <ul>
          <li>
            <strong>Very casual wear:</strong> Jeans with a basic top,
            casual sandals, flat boots with no structure, or anything you
            might describe as &quot;daytime&quot; wear.
          </li>
          <li>
            <strong>Beachwear-inspired outfits:</strong> Kaftans, cover-ups,
            flat sandals, or resort wear. London clubs are not Ibiza beach
            clubs (even if{" "}
            <Link href="/clubs/lio-club-london">Lio Club</Link> channels
            some of that spirit).
          </li>
          <li>
            <strong>Sportswear and athleisure:</strong> The same rules apply
            to women as to men. Leggings, trainers, and hoodies are not
            club attire.
          </li>
        </ul>

        <blockquote className="pull-quote">
          The best-dressed people at London clubs are never the most
          expensively dressed. They are the most appropriately dressed —
          people who understand the room and dress for it.
        </blockquote>

        <h2>Venue-Specific Dress Codes</h2>

        <p>
          While the principles above apply broadly, individual venues have
          their own nuances. Here is a practical breakdown:
        </p>

        <h3>Strictest Door Policies</h3>

        <ul>
          <li>
            <Link href="/clubs/tape-london">Tape London</Link>: Smart and
            stylish is the mandate. No trainers, no sportswear, no
            exceptions. Tape&apos;s compact, exclusive environment means
            every person in the room is visible, and the standard is
            consistently high. Men should wear a blazer; women should lean
            toward their most polished evening look.
          </li>
          <li>
            <Link href="/clubs/maddox">Maddox</Link>: Jacket preferred for
            gentlemen is the stated policy, and it is enforced. This is one
            of the few London clubs where a blazer is functionally required
            for men. The dining element raises the bar — you are dressing
            for a fine dining restaurant as much as a club.
          </li>
          <li>
            <Link href="/clubs/libertine">Libertine</Link>: Smart and
            fashionable. Libertine attracts a fashion-conscious crowd, and
            the door team reflects that. Looking sharp is essential; looking
            interesting is a bonus.
          </li>
          <li>
            <Link href="/clubs/lio-club-london">Lio Club London</Link>:
            Smart glamorous, high-end evening wear. The theatrical dining
            environment calls for outfits with genuine presence. This is
            a venue where going slightly over-the-top is appropriate.
          </li>
        </ul>

        <h3>Smart but With Some Flexibility</h3>

        <ul>
          <li>
            <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>: Smart
            glamorous. Cirque appreciates creative, head-turning looks —
            the theatrical environment means bold fashion choices are not
            just accepted but celebrated. Still, the baseline is smart
            dress.
          </li>
          <li>
            <Link href="/clubs/the-london-reign">The London Reign</Link>:
            Smart and glamorous with heels expected for women. The showclub
            format means the audience is part of the spectacle, and
            dressing accordingly is part of the experience.
          </li>
          <li>
            <Link href="/clubs/tabu-london">TABU London</Link>: Smart, no
            sportswear or casual wear. The underground Japanese aesthetic
            suits darker, more refined outfits.
          </li>
          <li>
            <Link href="/clubs/luxx-club-london">Luxx Club</Link>: Smart,
            no casual wear. Standard Mayfair expectations apply.
          </li>
          <li>
            <Link href="/clubs/dear-darling">Dear Darling</Link>: Elegant.
            The cocktail bar atmosphere calls for sophistication —
            think drinks at the Ritz rather than a standard night out.
          </li>
          <li>
            <Link href="/clubs/cuckoo-club">Cuckoo Club</Link>: Smart and
            stylish. Slightly more relaxed than the strictest venues,
            well-fitted dark jeans can work for men here if paired with the
            right shoes and jacket.
          </li>
          <li>
            <Link href="/clubs/scotch-of-st-james">
              Scotch of St James
            </Link>
            : Smart but not overly formal, with individuality welcomed.
            Scotch&apos;s rock heritage means fashion-forward and slightly
            unconventional looks are appreciated. Still, the baseline
            remains smart.
          </li>
        </ul>

        <h3>More Relaxed</h3>

        <ul>
          <li>
            <Link href="/clubs/beat-london">BEAT London</Link>: Smart
            casual, no sportswear. BEAT&apos;s music-first ethos means the
            dress code is less about fashion and more about not being
            obviously casual. Smart jeans with proper shoes can work here.
          </li>
          <li>
            <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link>:
            Relaxed but smart. As a dedicated music venue rather than a
            Mayfair club, Ministry has the most lenient dress code on this
            list. Clean trainers may be accepted, smart casual is the norm.
            That said, turning up in gym gear will still get you turned
            away.
          </li>
        </ul>

        <h2>Seasonal Adjustments</h2>

        <h3>Winter</h3>

        <p>
          London winters are cold, and you will be queuing outside, even
          briefly, in temperatures that make a thin shirt inadequate. Layer
          smartly: a good overcoat over your club outfit adds warmth and
          elegance. Wool, cashmere, and structured coats look appropriate;
          puffer jackets and parkas do not. Use the cloakroom once inside —
          every premium club has one, typically charging a modest fee per
          item. Plan for this: factor in the two minutes at the cloakroom
          when you arrive and again when you leave.
        </p>

        <h3>Summer</h3>

        <p>
          The temptation to dress lighter in summer is understandable but
          dangerous. The dress code does not change with the season. Men
          still need trousers and smart shoes — no loafers without socks
          (some door teams will pull you on this), no linen that looks
          crumpled after five minutes. For women, lighter fabrics and
          brighter colours are natural, but the structural expectations
          remain. The cloakroom is less of a concern in summer, but if you
          are bringing a jacket, check it in — carrying a blazer around a
          packed club is not a good look.
        </p>

        <h2>Practical Tips and Common Mistakes</h2>

        <ul>
          <li>
            <strong>Bring your outfit to the office.</strong> If you are
            heading out after work, do not assume your office attire will
            work. Bring your evening outfit and change. A suit fresh from
            an eight-hour workday with loosened tie and scuffed shoes is
            not the same as a crisp evening look.
          </li>
          <li>
            <strong>Check your shoes.</strong> Seriously. The number of
            people who build an excellent outfit and then undermine it with
            wrong shoes is remarkable. Your shoes are the first and last
            thing the door team assesses.
          </li>
          <li>
            <strong>Iron your shirt.</strong> A creased shirt looks careless,
            and careless is the opposite of what you want to project at the
            door of a Mayfair club.
          </li>
          <li>
            <strong>Dress for the strictest venue on your route.</strong> If
            your evening involves multiple stops, dress for the most formal
            one. You will never be turned away from a relaxed venue for
            being too smart, but the reverse is disastrous.
          </li>
          <li>
            <strong>Cloakroom strategy.</strong> Use it. Carrying coats,
            bags, and accessories through a crowded club is impractical and
            looks untidy. Collect a cloakroom ticket, store what you do not
            need, and retrieve it at the end of the night. Keep your phone,
            ID, and payment method on your person.
          </li>
          <li>
            <strong>Avoid fancy dress.</strong> Unless it is a themed event
            at the venue, costume elements will not get you through the
            door. Even on Halloween, many Mayfair clubs maintain standard
            dress codes.
          </li>
        </ul>

        <h2>When You Are Not Sure</h2>

        <p>
          If you are uncertain about a specific venue&apos;s dress code, you
          have two reliable options. First, check the individual club pages
          on this site — each one lists the specific dress code. Second,{" "}
          <Link href="/contact">contact us</Link> and ask. We will give you
          a straight answer based on what we know works at that particular
          venue on that particular night.
        </p>

        <p>
          For broader guidance on planning your London nightlife experience,
          including restaurant recommendations, timing, and transport, see
          our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>
          . If you are visiting from abroad, our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            international visitors&apos; guide
          </Link>{" "}
          covers everything you need to know, including dress code
          expectations for visitors who may be unfamiliar with British
          nightlife norms.
        </p>

        <p>
          The simplest rule of all: when in doubt, overdress. Nobody in the
          history of London nightlife has ever been turned away for looking
          too good.
        </p>

        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </ArticleLayout>
    </>
  );
}
