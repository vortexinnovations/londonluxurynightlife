import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";
import {
  WA_GENERAL_MESSAGE,
  WA_CORPORATE_MESSAGE,
  WA_GUESTLIST_MESSAGE,
  GUESTLIST_NUMBER,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plan Your Night | London Luxury Nightlife Concierge",
  description:
    "Our personalised nightlife concierge service handles everything — from choosing the perfect venue to securing VIP tables. Tell us what kind of night you're looking for and we'll handle the rest.",
  openGraph: {
    title: "Plan Your Night | London Luxury Nightlife Concierge",
    description:
      "Our personalised nightlife concierge service handles everything — from choosing the perfect venue to securing VIP tables.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

const guides = [
  {
    title: "The Complete Guide to London Luxury Nightlife",
    href: "/guides/complete-guide-london-luxury-nightlife",
  },
  {
    title: "Celebrity Clubs in London",
    href: "/guides/celebrity-clubs-london",
  },
  {
    title: "Corporate Entertainment in London",
    href: "/guides/corporate-entertainment-london",
  },
  {
    title: "Dinner & Nightclub Experiences",
    href: "/guides/dinner-and-nightclub-london",
  },
  {
    title: "London Nightlife for International Visitors",
    href: "/guides/london-nightlife-international-visitors",
  },
  {
    title: "London Club Dress Code Guide",
    href: "/london-club-dress-code-guide",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us What You’re Looking For",
    description:
      "Send us a message with your dates, group size, budget, and the kind of night you have in mind.",
  },
  {
    number: "02",
    title: "We Recommend the Perfect Venue",
    description:
      "Based on your preferences, we’ll suggest the clubs and experiences that are the best fit.",
  },
  {
    number: "03",
    title: "We Handle the Booking",
    description:
      "We take care of reservations, table arrangements, and any special requests on your behalf.",
  },
  {
    number: "04",
    title: "You Arrive and Enjoy",
    description:
      "Walk in knowing everything is sorted. No queues, no uncertainty — just an exceptional night out.",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow justify-center mb-6">The Concierge</span>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-normal text-cream leading-[1.05] mb-7">
              Plan Your <span className="accent-word">Night</span>
            </h1>
            <p className="font-prose italic text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto">
              Tell us what kind of night you&apos;re looking for and we&apos;ll
              handle the rest. Our concierge service is personal, discreet, and
              completely free.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        <section className="pb-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Night Out */}
            <Reveal>
              <div className="bg-dark-surface border border-dark-border border-t-2 border-t-gold p-8 md:p-10">
                <span className="index-num text-sm block mb-3">No. 01</span>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-cream mb-4">
                  Planning a Night Out
                </h2>
                <p className="font-prose text-warm-gray leading-relaxed mb-3">
                  Whether you&apos;re visiting London for the first time, celebrating
                  a birthday, or organising a stag or hen night, we&apos;ll find the
                  right club, secure the best table, and make sure the evening runs
                  smoothly.
                </p>
                <p className="font-prose text-warm-gray leading-relaxed mb-8">
                  We work with every major venue in Mayfair, Soho, and beyond.
                  Just tell us your dates, group size, and what kind of atmosphere
                  you&apos;re after &mdash; we&apos;ll take it from there.
                </p>
                <WhatsAppCTA
                  message={WA_GENERAL_MESSAGE}
                  label="Plan Your Night Out"
                />
              </div>
            </Reveal>

            {/* Guestlist */}
            <Reveal delay={80}>
              <div className="bg-dark-surface border border-dark-border border-t-2 border-t-gold p-8 md:p-10">
                <span className="index-num text-sm block mb-3">No. 02</span>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-cream mb-4">
                  Join a Guestlist
                </h2>
                <p className="font-prose text-warm-gray leading-relaxed mb-3">
                  Not looking for a table? We run guestlists at London&apos;s best
                  clubs for reduced or free entry. Send us the club, the date, and
                  your group size and we&apos;ll add you to the list.
                </p>
                <p className="font-prose text-warm-gray leading-relaxed mb-8">
                  Guestlist spots fill quickly at the most popular venues, so
                  message us early in the week for weekend nights. Not sure
                  whether guestlist or a table is right for you? Read our{" "}
                  <Link
                    href="/guestlist-vs-table-booking-london"
                    className="text-gold hover:text-gold-light transition-colors duration-250"
                  >
                    guestlist vs table booking guide
                  </Link>
                  .
                </p>
                <WhatsAppCTA
                  message={WA_GUESTLIST_MESSAGE}
                  label="Join the Guestlist"
                  number={GUESTLIST_NUMBER}
                />
              </div>
            </Reveal>

            {/* Corporate */}
            <Reveal delay={80}>
              <div className="bg-dark-surface border border-dark-border border-t-2 border-t-gold p-8 md:p-10">
                <span className="index-num text-sm block mb-3">No. 03</span>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-cream mb-4">
                  Corporate &amp; Client Entertainment
                </h2>
                <p className="font-prose text-warm-gray leading-relaxed mb-3">
                  For PAs, executive assistants, and business professionals who
                  need to organise a memorable evening for clients or colleagues.
                  We understand the nuances of corporate entertainment &mdash;
                  discretion, quality, and reliability are guaranteed.
                </p>
                <p className="font-prose text-warm-gray leading-relaxed mb-8">
                  From private dining followed by a VIP table to exclusive venue
                  hire, we&apos;ll arrange an evening that reflects the standard your
                  clients expect.
                </p>
                <WhatsAppCTA
                  message={WA_CORPORATE_MESSAGE}
                  label="Arrange Corporate Entertainment"
                />
              </div>
            </Reveal>

            {/* Recommendation */}
            <Reveal delay={80}>
              <div className="bg-dark-surface border border-dark-border border-t-2 border-t-gold p-8 md:p-10">
                <span className="index-num text-sm block mb-3">No. 04</span>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-cream mb-4">
                  Need a Recommendation?
                </h2>
                <p className="font-prose text-warm-gray leading-relaxed mb-8">
                  Not sure which club is right for you? No commitment needed
                  &mdash; just send us a quick message with what you&apos;re looking
                  for and we&apos;ll point you in the right direction. We know every
                  venue inside out and we&apos;re happy to help.
                </p>
                <WhatsAppCTA
                  message={WA_GENERAL_MESSAGE}
                  label="Ask for a Recommendation"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 bg-dark-surface-2 border-y border-dark-border">
          <div className="max-w-5xl mx-auto">
            <Reveal className="text-center mb-16">
              <span className="eyebrow justify-center mb-6">The Process</span>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight">
                How It <span className="accent-word">Works</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={(i % 4) * 80}>
                  <div className="h-full border-t border-dark-border pt-6 text-left">
                    <span className="index-num text-4xl block mb-4">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-cream mb-3">
                      {step.title}
                    </h3>
                    <p className="font-prose text-warm-gray text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research First */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-12">
              <span className="eyebrow justify-center mb-6">The Library</span>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight mb-6">
                Prefer to <span className="accent-word">Research</span> First?
              </h2>
              <p className="font-prose italic text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
                If you&apos;d like to explore the options before getting in touch,
                our guides cover everything from dress codes and table prices to
                which clubs suit different occasions.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-t border-dark-border">
                {guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group flex items-baseline justify-between gap-6 py-5 px-2 border-b border-dark-border hover:bg-gold-wash hover:border-hairline-gold transition-[background-color,border-color] duration-250"
                  >
                    <span className="font-serif italic text-xl text-foreground group-hover:text-gold-light group-hover:translate-x-2 transition-[color,transform] duration-250 ease-[var(--ease-lux)]">
                      {guide.title}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold flex-shrink-0">
                      Read &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA
        message={WA_GENERAL_MESSAGE}
        label="Plan Your Night"
        variant="sticky"
      />
    </>
  );
}
