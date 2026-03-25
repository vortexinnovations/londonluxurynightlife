import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import {
  WA_GENERAL_MESSAGE,
  WA_CORPORATE_MESSAGE,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plan Your Night | London Luxury Nightlife Concierge",
  description:
    "Our personalised nightlife concierge service handles everything — from choosing the perfect venue to securing VIP tables. Tell us what kind of night you're looking for and we'll handle the rest.",
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
    title: "Tell Us What You\u2019re Looking For",
    description:
      "Send us a message with your dates, group size, budget, and the kind of night you have in mind.",
  },
  {
    number: "02",
    title: "We Recommend the Perfect Venue",
    description:
      "Based on your preferences, we\u2019ll suggest the clubs and experiences that are the best fit.",
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
      "Walk in knowing everything is sorted. No queues, no uncertainty \u2014 just an exceptional night out.",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Plan Your Night
            </h1>
            <p className="text-warm-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Tell us what kind of night you&apos;re looking for and we&apos;ll
              handle the rest. Our concierge service is personal, discreet, and
              completely free.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        <section className="pb-20 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Night Out */}
            <div className="bg-dark-surface border border-dark-border rounded-lg p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                Planning a Night Out
              </h2>
              <p className="text-warm-gray leading-relaxed mb-3">
                Whether you&apos;re visiting London for the first time, celebrating
                a birthday, or organising a stag or hen night, we&apos;ll find the
                right club, secure the best table, and make sure the evening runs
                smoothly.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                We work with every major venue in Mayfair, Soho, and beyond.
                Just tell us your dates, group size, and what kind of atmosphere
                you&apos;re after &mdash; we&apos;ll take it from there.
              </p>
              <WhatsAppCTA
                message={WA_GENERAL_MESSAGE}
                label="Plan Your Night Out"
              />
            </div>

            {/* Corporate */}
            <div className="bg-dark-surface border border-dark-border rounded-lg p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                Corporate &amp; Client Entertainment
              </h2>
              <p className="text-warm-gray leading-relaxed mb-3">
                For PAs, executive assistants, and business professionals who
                need to organise a memorable evening for clients or colleagues.
                We understand the nuances of corporate entertainment &mdash;
                discretion, quality, and reliability are guaranteed.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                From private dining followed by a VIP table to exclusive venue
                hire, we&apos;ll arrange an evening that reflects the standard your
                clients expect.
              </p>
              <WhatsAppCTA
                message={WA_CORPORATE_MESSAGE}
                label="Arrange Corporate Entertainment"
              />
            </div>

            {/* Recommendation */}
            <div className="bg-dark-surface border border-dark-border rounded-lg p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                Need a Recommendation?
              </h2>
              <p className="text-warm-gray leading-relaxed mb-8">
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
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-dark-surface-2">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center md:text-left">
                  <span className="text-gold font-serif text-3xl block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-cream font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research First */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Prefer to Research First?
            </h2>
            <p className="text-warm-gray leading-relaxed mb-10 max-w-2xl mx-auto">
              If you&apos;d like to explore the options before getting in touch,
              our guides cover everything from dress codes and table prices to
              which clubs suit different occasions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="block bg-dark-surface border border-dark-border rounded-lg px-5 py-4 text-cream hover:text-gold hover:border-gold/30 transition-all text-sm font-medium text-left"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA
        message={WA_GENERAL_MESSAGE}
        label="Plan Your Night"
        variant="sticky"
      />
    </>
  );
}
