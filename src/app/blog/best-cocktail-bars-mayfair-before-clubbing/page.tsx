import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Cocktail Bars in Mayfair Before Clubbing: Pre-Drinks Guide | London Luxury Nightlife",
  description:
    "Where to drink before hitting Mayfair's clubs. The best cocktail bars near Tape London, Maddox, Cuckoo Club, and more — with timing, dress code, and price guidance.",
  keywords:
    "best cocktail bars Mayfair before clubbing, pre-drinks Mayfair, cocktail bars near Mayfair clubs, where to drink before clubbing London, pre-club bars Mayfair",
  openGraph: {
    title: "Best Cocktail Bars in Mayfair Before Clubbing",
    description:
      "The insider's guide to pre-club drinks in Mayfair and Soho. Where to go, when to arrive, and how to transition seamlessly into your evening.",
    url: "https://londonluxurynightlife.com/blog/best-cocktail-bars-mayfair-before-clubbing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cocktail Bars in Mayfair Before Clubbing",
    description:
      "The insider's guide to pre-club drinks in Mayfair and Soho. Where to go, when to arrive, and how to transition seamlessly into your evening.",
  },
  alternates: {
    canonical:
      "https://londonluxurynightlife.com/blog/best-cocktail-bars-mayfair-before-clubbing",
  },
};

const faqs = [
  {
    question: "What time should I start pre-drinks before going to a Mayfair club?",
    answer:
      "Arrive at your cocktail bar between 8:30pm and 9:30pm. This gives you a comfortable two hours for drinks and conversation before heading to the club at 10:30-11:30pm, which is the ideal arrival window for both guestlist and table bookings at most Mayfair venues.",
  },
  {
    question: "What should I drink at a cocktail bar before clubbing?",
    answer:
      "Start with cocktails you enjoy but pace yourself — the evening is a marathon, not a sprint. Classic cocktails (Negroni, Old Fashioned, Espresso Martini) are reliable choices at quality bars. Avoid heavy, cream-based drinks that sit in the stomach. Switch to champagne or lighter serves towards the end of pre-drinks to keep your energy up for the club.",
  },
  {
    question: "Do I need to dress for the club at the cocktail bar?",
    answer:
      "Yes. Dress for your final destination from the start of the evening. Mayfair cocktail bars have smart dress codes that align with club standards, so there is no conflict. Changing outfits between venues is impractical and unnecessary. Wear your club outfit to the bar — you will fit in perfectly at both.",
  },
  {
    question: "How much do cocktails cost in Mayfair?",
    answer:
      "Cocktails at Mayfair's premium bars typically range from £16 to £25 each. A comfortable pre-drinks session of two to three cocktails per person will cost £35-75 per person before any food. Champagne by the glass ranges from £15-30. Budget approximately £50-80 per person for a civilised pre-club drinks session.",
  },
];

export default function BestCocktailBarsMayfairPage() {
  return (
    <>
      <ArticleSchema
        title="Best Cocktail Bars in Mayfair Before Clubbing: Pre-Drinks Guide"
        description="Where to drink before hitting Mayfair's clubs. The best cocktail bars near Tape London, Maddox, Cuckoo Club, and more — with timing and price guidance."
        slug="/blog/best-cocktail-bars-mayfair-before-clubbing"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="Best Cocktail Bars Near Mayfair Clubs for Pre-Drinks"
        subtitle="Where to set the tone before the main event — the best bars within walking distance of London's top clubs"
      >
        <p>
          The difference between a good night out and a great one often comes
          down to what happens before the club. Pre-drinks in the right
          cocktail bar set the pace, gather the group, and establish the
          atmosphere for the evening ahead. In Mayfair and the surrounding
          streets of Soho, some of London&apos;s finest cocktail bars sit
          within a short walk of the clubs you will be heading to later — and
          choosing the right one is as much a part of planning the evening as
          choosing the club itself.
        </p>

        <h2>Why Pre-Drinks Matter</h2>

        <p>
          Arriving at a club directly from home or a hotel is a common
          mistake. You walk into a venue that is still warming up, your group
          may not have fully assembled, and the transition from everyday life
          to nightlife feels abrupt. A cocktail bar bridges that gap. It
          allows everyone to arrive on their own schedule, settle into the
          evening&apos;s energy, and walk into the club as a cohesive group
          already in the right frame of mind. For visitors planning a{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            full dinner-to-club evening
          </Link>
          , the cocktail bar serves as the perfect interlude between the two.
        </p>

        <h2>The Best Pre-Club Cocktail Bars</h2>

        <h3>Connaught Bar</h3>
        <p>
          Widely considered one of the finest cocktail bars in the world, the
          Connaught Bar on Carlos Place is the ultimate pre-club warm-up for
          a special occasion. The David Collins-designed interior is a
          masterclass in art deco elegance, and the signature martini trolley
          service is an experience in itself. Cocktails start around
          &pound;22. The Connaught is a five-minute walk from{" "}
          <Link href="/clubs/maddox">Maddox Club</Link> and within easy
          reach of most Mayfair venues. Best for groups who want pre-drinks
          to feel like an event rather than a warm-up.
        </p>

        <h3>Kwant</h3>
        <p>
          Hidden below ground on Piccadilly, Kwant brings North African
          opulence to Mayfair&apos;s cocktail scene. The Moroccan-inspired
          interior is dramatic without being theatrical, and the cocktail menu
          balances familiar spirits with unexpected flavour combinations.
          Cocktails range from &pound;17 to &pound;23. Its Piccadilly
          location makes it particularly convenient for{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link> and the
          Berkeley Street clubs. Best for groups who want something visually
          distinctive.
        </p>

        <h3>The Fumoir at Claridge&apos;s</h3>
        <p>
          Claridge&apos;s needs no introduction, and The Fumoir is its
          intimate cocktail lounge — all leather banquettes, low lighting,
          and impeccable service. The cocktail list is classically oriented
          with modern technique, and the atmosphere is one of quiet
          confidence. Cocktails from &pound;20. Located on Brook Street, it
          is equidistant from most Mayfair clubs. Best for groups who want
          understated luxury before a bigger evening.
        </p>

        <h3>Nightjar Carnaby</h3>
        <p>
          The Carnaby Street outpost of the legendary Nightjar brings
          speakeasy energy to the edge of Soho. The cocktail programme is
          among London&apos;s most ambitious — theatrical presentations,
          house-made ingredients, and combinations you will not find
          elsewhere. Cocktails from &pound;16. Located between Soho and
          Mayfair, it works well as a pre-club stop before heading to{" "}
          <Link href="/clubs/cuckoo-club">Cuckoo Club</Link> or the Soho
          venues. Best for groups who take cocktails seriously.
        </p>

        <h3>Mr Fogg&apos;s Residence</h3>
        <p>
          On Bruton Lane in the heart of Mayfair, Mr Fogg&apos;s Residence
          is an immersive Victorian-themed cocktail bar stuffed with
          antiques and curiosities. The experience is theatrical — every
          surface tells a story, and the cocktails are crafted to match the
          aesthetic. Cocktails from &pound;15. The location is central to
          nearly every Mayfair club, and the atmosphere is lively enough to
          energise a group before the main event. Best for birthday
          celebrations and groups who want pre-drinks with personality.
        </p>

        <h3>Sexy Fish Bar</h3>
        <p>
          The bar at Sexy Fish on Berkeley Square is a destination in itself
          — the Frank Gehry crocodile sculptures, the Damien Hirst artwork,
          and the overall excess of the design create an atmosphere that
          primes you perfectly for Mayfair&apos;s club scene. Cocktails are
          well-executed and range from &pound;18 to &pound;25. The Berkeley
          Square location puts you within two minutes of Funky Buddha and
          five minutes of most other Mayfair venues. Best for groups who
          want the full Mayfair experience from the first drink.
        </p>

        <h3>Bassoon at the Corinthia</h3>
        <p>
          For those heading to West End venues like the Soho clubs or
          crossing towards Fitzrovia for{" "}
          <Link href="/clubs/beat-london">BEAT London</Link>, Bassoon at the
          Corinthia on Whitehall Place offers a grand hotel bar experience.
          Live music on certain evenings adds another dimension, and the
          cocktail programme is consistently excellent. Cocktails from
          &pound;18. Best for groups combining pre-drinks with a sense of
          occasion.
        </p>

        <h2>Timing Your Pre-Drinks</h2>

        <div className="info-box">
          <h4>The Ideal Pre-Club Timeline</h4>
          <ul>
            <li>
              <strong>8:30pm &ndash; 9:00pm:</strong> Arrive at the cocktail
              bar. Secure your spot before the later rush.
            </li>
            <li>
              <strong>9:00pm &ndash; 10:15pm:</strong> Enjoy two to three
              cocktails. This is the social heart of pre-drinks.
            </li>
            <li>
              <strong>10:15pm &ndash; 10:30pm:</strong> Settle the bill,
              regroup, freshen up.
            </li>
            <li>
              <strong>10:30pm &ndash; 11:00pm:</strong> Walk to the club.
              Arrive within the ideal entry window.
            </li>
          </ul>
        </div>

        <p>
          The temptation is to linger. Resist it. Pre-drinks should enhance
          your evening, not consume it. Two to three cocktails over ninety
          minutes is the sweet spot — enough to set the mood, not enough to
          compromise your evening at the club.
        </p>

        <h2>What to Drink</h2>

        <p>
          Start with whatever you enjoy — a Negroni, an Old Fashioned, or
          whatever the bar does best. For your final drink, consider
          switching to champagne or a lighter cocktail. An Espresso Martini
          as your last pre-club drink is a well-worn strategy for a reason:
          the caffeine provides a useful bridge between the relaxed bar
          atmosphere and the club&apos;s higher energy.
        </p>

        <p className="pull-quote">
          The best pre-drinks session leaves you perfectly primed — sociable,
          energised, and ready for the main event. Not three cocktails past
          the point of no return.
        </p>

        <h2>Dressing for Both Venues</h2>

        <p>
          Dress for the club from the start. Every cocktail bar on this list
          operates a smart dress code that aligns with Mayfair&apos;s club
          standards. There is no need to change between venues, and attempting
          to do so introduces unnecessary logistics. Smart, elegant attire
          works seamlessly from a 9pm cocktail to a 2am dance floor. Our{" "}
          <Link href="/how-to-plan-a-luxury-night-out-in-london">
            night out planning guide
          </Link>{" "}
          covers the full evening logistics, and our{" "}
          <Link href="/blog/how-much-does-night-out-mayfair-cost">
            Mayfair cost guide
          </Link>{" "}
          breaks down the financial picture for the complete evening.
        </p>

        <h2>Matching Bars to Clubs</h2>

        <div className="info-box">
          <h4>Proximity Pairings</h4>
          <ul>
            <li>
              <strong>Before Maddox Club:</strong> Connaught Bar or
              Claridge&apos;s Fumoir (both under 5 minutes walk)
            </li>
            <li>
              <strong>Before Cuckoo Club:</strong> Nightjar Carnaby or Kwant
              (both under 10 minutes walk)
            </li>
            <li>
              <strong>Before Funky Buddha:</strong> Sexy Fish Bar (2 minutes
              walk on Berkeley Square)
            </li>
            <li>
              <strong>Before Dear Darling:</strong> Kwant or Mr Fogg&apos;s
              Residence
            </li>
            <li>
              <strong>Before Tape London:</strong> Connaught Bar or Mr
              Fogg&apos;s Residence
            </li>
          </ul>
        </div>

        <p>
          Walking between your cocktail bar and club should take no more than
          ten minutes. Mayfair is compact, and the proximity of these bars to
          the clubs is deliberate — the entire area is designed for evenings
          that flow between venues. Our{" "}
          <Link href="/blog/saturday-night-mayfair-guide">
            Saturday night Mayfair guide
          </Link>{" "}
          covers the broader evening landscape.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/guides/dinner-and-nightclub-london">
              Dinner and Nightclub: Planning a Full Luxury Evening
            </Link>
          </li>
          <li>
            <Link href="/how-to-plan-a-luxury-night-out-in-london">
              How to Plan a Luxury Night Out in London
            </Link>
          </li>
          <li>
            <Link href="/blog/how-much-does-night-out-mayfair-cost">
              How Much Does a Night Out in Mayfair Really Cost?
            </Link>
          </li>
          <li>
            <Link href="/blog/saturday-night-mayfair-guide">
              Saturday Night in Mayfair: The Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/clubs/dear-darling">
              Dear Darling: Opulent Cocktails and Late Nights
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
