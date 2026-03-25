import type { Metadata } from "next";
import Link from "next/link";
import { clubs, WA_GENERAL_MESSAGE, SITE_URL, SITE_NAME } from "@/lib/constants";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title:
    "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
  description:
    "The definitive insider's guide to luxury nightlife in London. Expert reviews of Mayfair's most exclusive clubs, VIP table booking, celebrity hotspots, dress codes, and everything you need for an unforgettable VIP night out in London.",
  keywords: [
    "luxury nightlife London",
    "VIP night out London",
    "London luxury nightlife guide",
    "exclusive clubs London",
    "Mayfair clubs",
    "best nightclubs London",
    "celebrity clubs London",
    "high end clubs London",
    "London nightlife guide",
    "VIP table booking London",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
    description:
      "The definitive insider's guide to luxury nightlife in London. Expert reviews of Mayfair's most exclusive clubs, VIP table booking, and insider tips for an unforgettable night out.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
    description:
      "The definitive insider's guide to luxury nightlife in London. Expert reviews, VIP table booking, celebrity hotspots, and insider tips.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const guides = [
  {
    title: "The Complete Guide to London\u2019s Luxury Nightlife",
    description:
      "Everything you need to know about the city\u2019s most exclusive venues, from table minimums to the unwritten rules that separate insiders from outsiders.",
    href: "/guides/complete-guide-london-luxury-nightlife",
    label: "Read the full guide",
  },
  {
    title: "London Nightlife for International Visitors",
    description:
      "Flying in for the weekend? Our visitor\u2019s guide covers the essentials: which nights to target, where to stay for easy access to Mayfair, and how to navigate the door.",
    href: "/guides/london-nightlife-international-visitors",
    label: "Plan your visit",
  },
  {
    title: "Celebrity Clubs: Where London\u2019s Famous Faces Go",
    description:
      "A look at the venues that genuinely attract high-profile clientele \u2014 and how the best clubs keep things discreet enough that they keep coming back.",
    href: "/guides/celebrity-clubs-london",
    label: "See the clubs",
  },
  {
    title: "What to Wear to London\u2019s Best Clubs",
    description:
      "Dress codes in Mayfair are enforced, but rarely explained. We break down what each venue actually expects \u2014 and the mistakes that get people turned away.",
    href: "/guides/what-to-wear-london-clubs",
    label: "Read the dress code guide",
  },
  {
    title: "Dinner & Nightclub: The Perfect London Evening",
    description:
      "The best evenings in London start at the table. Our guide to pairing world-class restaurants with the right club for a seamless night that builds from first course to last call.",
    href: "/guides/dinner-and-nightclub-london",
    label: "Plan your evening",
  },
  {
    title: "Corporate Entertainment & Client Nights",
    description:
      "Hosting clients or rewarding a team? We cover the venues, formats, and logistics that make corporate evenings in London genuinely impressive.",
    href: "/guides/corporate-entertainment-london",
    label: "Explore corporate options",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight tracking-tight">
            The Insider&rsquo;s Guide to London&rsquo;s Most Exclusive Nightlife
          </h1>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto">
            Honest reviews, real insider knowledge, and direct access to
            Mayfair&rsquo;s finest clubs. We&rsquo;ve spent years in these rooms so you
            know exactly what to expect before you arrive.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA
              message={WA_GENERAL_MESSAGE}
              label="Plan Your Night"
              variant="primary"
            />
            <Link
              href="/guides/complete-guide-london-luxury-nightlife"
              className="text-gold hover:text-gold-light transition-colors text-sm font-medium tracking-wide uppercase"
            >
              Read the Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-xs mx-auto border-t border-dark-border" />

      {/* Editorial Introduction */}
      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-10 text-center">
            London After Dark
          </h2>
          <div className="space-y-6 text-foreground leading-[1.85]">
            <p>
              There is a version of London that only reveals itself after midnight.
              It exists behind unmarked doors on Mayfair side streets, in basement
              rooms beneath Georgian townhouses, and in the private corners of
              members&rsquo; clubs where the music is loud enough to feel but never loud
              enough to shout over. This is the London that draws royalty, film
              stars, and tech founders to the same banquettes on a Thursday night
              &mdash; not because anyone announced it, but because the right people
              simply know where to go.
            </p>
            <p>
              The geography matters more than most visitors realise. Mayfair sits at
              the centre of gravity: a square mile bounded by Oxford Street to the
              north, Piccadilly to the south, Park Lane to the west, and Regent
              Street to the east. Within that grid, a dozen world-class venues
              operate within walking distance of each other, each with its own
              identity, crowd, and set of unspoken rules. Soho, just east of Regent
              Street, adds a grittier creative energy. Fitzrovia brings a younger
              edge. And south of the river, a converted warehouse near Elephant
              &amp; Castle has been shaping electronic music culture for three decades.
              Understanding these neighbourhoods &mdash; and what each one offers after
              dark &mdash; is the first step to getting London nightlife right.
            </p>
            <p>
              This site exists because good information about London&rsquo;s luxury
              nightlife is surprisingly hard to find. Most of what&rsquo;s online is
              either pay-to-play advertising or surface-level listicles written by
              people who&rsquo;ve never actually walked through the door. We take a
              different approach. Every club reviewed here has been visited
              repeatedly. Every detail &mdash; from the real dress code expectations to
              the table minimums no one publishes &mdash; comes from direct experience.
              Think of us as the well-connected friend who&rsquo;ll tell you the truth
              about where to go, what to spend, and what to skip.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-20 sm:py-24 px-6 bg-dark-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
              Featured Clubs
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              Every venue reviewed in depth &mdash; honest assessments of the crowd,
              the music, the spend, and whether it&rsquo;s worth your evening.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club) => (
              <ClubCard key={club.slug} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
              Insider Guides
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              Deep-dive editorial guides covering everything from dress codes to
              corporate entertaining &mdash; written from genuine experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-gold/30 transition-all"
              >
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                  {guide.description}
                </p>
                <span className="text-sm text-gold group-hover:text-gold-light transition-colors font-medium">
                  {guide.label} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 sm:py-24 px-6 bg-dark-surface border-t border-dark-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
            Let Us Handle the Details
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8 max-w-lg mx-auto">
            Tell us when you&rsquo;re coming, how many are in your group, and what kind
            of night you&rsquo;re after. We&rsquo;ll come back with a plan &mdash; the right
            venue, the right table, and everything arranged before you land.
          </p>
          <WhatsAppCTA
            message={WA_GENERAL_MESSAGE}
            label="Start Planning on WhatsApp"
            variant="primary"
          />
          <p className="mt-6 text-xs text-warm-gray">
            Free &amp; no obligation. We respond within minutes during London hours.
          </p>
        </div>
      </section>

      {/* Sticky mobile WhatsApp CTA */}
      <WhatsAppCTA
        message={WA_GENERAL_MESSAGE}
        label="Plan Your Night on WhatsApp"
        variant="sticky"
      />
    </>
  );
}
