import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clubs, WA_GENERAL_MESSAGE, WA_GUESTLIST_MESSAGE, GUESTLIST_NUMBER, SITE_URL, SITE_NAME } from "@/lib/constants";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";
import { HOME_IMAGES, SECTION_IMAGES } from "@/lib/images";

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
    images: [
      {
        url: `${SITE_URL}/gallery/images/DSC_7988.jpg`,
        alt: "Luxury nightclub interior in Mayfair, London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
    description:
      "The definitive insider's guide to luxury nightlife in London. Expert reviews, VIP table booking, celebrity hotspots, and insider tips.",
    images: [`${SITE_URL}/gallery/images/DSC_7988.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const guides = [
  {
    title: "Luxury Nightclubs in London",
    description:
      "The definitive guide to London’s most exclusive clubs. What makes a venue truly luxury, the tiers of exclusivity, and which rooms justify the spend.",
    href: "/luxury-nightclubs-london",
    label: "Explore luxury clubs",
  },
  {
    title: "London Nightlife Guide",
    description:
      "The complete insider’s guide to going out in London. From Mayfair luxury to Soho’s creative underground — everything you need to know.",
    href: "/london-nightlife-guide",
    label: "Read the guide",
  },
  {
    title: "Celebrity Nightclubs in London",
    description:
      "Which clubs do celebrities actually go to? An insider’s guide to the venues where A-listers, musicians, and athletes spend their nights.",
    href: "/celebrity-nightclubs-london",
    label: "See the clubs",
  },
  {
    title: "What to Wear to London’s Best Clubs",
    description:
      "Dress codes in Mayfair are enforced, but rarely explained. We break down what each venue actually expects — and the mistakes that get people turned away.",
    href: "/london-club-dress-code-guide",
    label: "Read the dress code guide",
  },
  {
    title: "Dinner & Nightclub: The Perfect London Evening",
    description:
      "The best evenings in London start at the table. Our guide to pairing world-class restaurants with the right club for a seamless night.",
    href: "/guides/dinner-and-nightclub-london",
    label: "Plan your evening",
  },
  {
    title: "London Nightlife for International Visitors",
    description:
      "Flying in for the weekend? Our visitor’s guide covers the essentials: which nights to target, where to stay, and how to navigate the door.",
    href: "/guides/london-nightlife-international-visitors",
    label: "Plan your visit",
  },
  {
    title: "How to Get Into Tape London",
    description:
      "The complete entry guide to Mayfair’s most exclusive club. Guestlist strategies, door policy decoded, best nights, and what the team is really looking for.",
    href: "/how-to-get-into-tape-london",
    label: "Read the entry guide",
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
      {/* Hero — the cover */}
      <section aria-labelledby="hero-heading" className="relative min-h-[88svh] flex items-end overflow-hidden">
        <Image
          src={HOME_IMAGES.hero}
          alt="Luxury nightclub interior in Mayfair, London"
          fill
          className="editorial-img object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/20" />

        {/* Vertical masthead label */}
        <span
          aria-hidden
          className="hidden lg:block absolute right-8 bottom-24 z-10 font-sans text-[10px] uppercase tracking-[0.4em] text-warm-gray/70 [writing-mode:vertical-rl]"
        >
          Issue &mdash; London &middot; Est. After Midnight
        </span>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6">Mayfair &middot; London &middot; After Dark</span>
            <h1 id="hero-heading" className="font-serif text-[clamp(2.75rem,7.5vw,6rem)] font-normal text-cream leading-[0.98] tracking-[-0.01em]">
              The Insider&rsquo;s Guide to London&rsquo;s Most Exclusive{" "}
              <span className="accent-word">Nightlife</span>
            </h1>
            <p className="mt-7 font-prose italic text-lg sm:text-xl text-cream/80 leading-relaxed max-w-xl">
              Honest reviews, real insider knowledge, and direct access to
              Mayfair&rsquo;s finest clubs. We&rsquo;ve spent years in these rooms so you
              know exactly what to expect before you arrive.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <WhatsAppCTA
                message={WA_GENERAL_MESSAGE}
                label="Plan Your Night"
                variant="primary"
                className="items-start"
              />
              <Link
                href="/guides/complete-guide-london-luxury-nightlife"
                className="link-luxe"
              >
                Read the Guide &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-hairline-gold z-10" />
      </section>

      {/* Editorial Introduction */}
      <section aria-labelledby="london-after-dark" className="py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow mb-6">The City &middot; No. 01</span>
            <h2 id="london-after-dark" className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight mb-12">
              London After <span className="accent-word">Dark</span>
            </h2>
          </Reveal>
          <div className="space-y-7 font-prose text-lg text-foreground leading-[1.8]">
            <p className="italic text-[1.375rem] leading-[1.55] text-cream">
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

      {/* Featured Clubs — the magazine well */}
      <section aria-labelledby="featured-clubs" className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-surface border-y border-dark-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <span className="eyebrow mb-6">The Clubs &middot; No. 02</span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 id="featured-clubs" className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight">
                Featured <span className="accent-word">Clubs</span>
              </h2>
              <p className="font-prose italic text-lg text-warm-gray max-w-md lg:text-right">
                Every venue reviewed in depth &mdash; honest assessments of the crowd,
                the music, the spend, and whether it&rsquo;s worth your evening.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-16">
            {clubs.map((club, i) => (
              <Reveal
                key={club.slug}
                delay={(i % 3) * 80}
                className={i < 2 ? "md:col-span-3" : "md:col-span-2"}
              >
                <ClubCard club={club} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section break image */}
      <div className="relative h-[280px] sm:h-[340px] overflow-hidden">
        <Image
          src={SECTION_IMAGES.vipArea}
          alt="VIP table service at a London nightclub"
          fill
          className="editorial-img object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
      </div>

      {/* Guides — text-first editorial index */}
      <section aria-labelledby="insider-guides" className="py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-14">
            <span className="eyebrow mb-6">The Knowledge &middot; No. 03</span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 id="insider-guides" className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight">
                Insider <span className="accent-word">Guides</span>
              </h2>
              <p className="font-prose italic text-lg text-warm-gray max-w-md lg:text-right">
                Deep-dive editorial guides covering everything from dress codes to
                corporate entertaining &mdash; written from genuine experience.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="border-t border-dark-border">
              {guides.map((guide, i) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 px-2 border-b border-dark-border hover:bg-gold-wash hover:border-hairline-gold transition-[background-color,border-color] duration-250"
                >
                  <span className="index-num text-sm w-12 flex-shrink-0">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif italic font-normal text-2xl text-foreground group-hover:text-gold-light group-hover:translate-x-2 transition-[color,transform] duration-250 ease-[var(--ease-lux)] mb-1.5">
                      {guide.title}
                    </h3>
                    <span className="block font-prose text-[0.9375rem] text-warm-gray leading-relaxed max-w-xl">
                      {guide.description}
                    </span>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold flex-shrink-0">
                    {guide.label} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section aria-labelledby="concierge" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden border-y border-hairline-gold">
        <Image
          src={HOME_IMAGES.ctaBackground}
          alt="Champagne service at an exclusive London nightclub"
          fill
          className="editorial-img object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow justify-center mb-6">The Concierge</span>
            <h2 id="concierge" className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight mb-6">
              Let Us Handle the <span className="accent-word">Details</span>
            </h2>
            <p className="font-prose text-lg text-foreground/80 leading-relaxed mb-10 max-w-lg mx-auto">
              Tell us when you&rsquo;re coming, how many are in your group, and what kind
              of night you&rsquo;re after. We&rsquo;ll come back with a plan &mdash; the right
              venue, the right table, and everything arranged before you land.
            </p>
            <WhatsAppCTA
              message={WA_GENERAL_MESSAGE}
              label="Start Planning on WhatsApp"
              variant="primary"
            />
            <div className="mt-6">
              <WhatsAppCTA
                message={WA_GUESTLIST_MESSAGE}
                label="Or join the guestlist"
                variant="inline"
                number={GUESTLIST_NUMBER}
              />
            </div>
            <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray">
              Free &amp; no obligation. We respond within minutes during London hours.
            </p>
          </Reveal>
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
