import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Editor — Isabella Marsh | London Luxury Nightlife",
  description:
    "Meet Isabella Marsh, Luxury Lifestyle Editor. She covers London's high-end nightlife: members' clubs, celebrity-spotted venues, and the season's most exclusive parties.",
  openGraph: {
    title: "About the Editor — Isabella Marsh | London Luxury Nightlife",
    description:
      "Isabella Marsh covers London's high-end nightlife: members' clubs, celebrity-spotted venues, and the most exclusive parties.",
    url: "https://londonluxurynightlife.com/about-the-editor",
    type: "profile",
  },
  alternates: {
    canonical: "https://londonluxurynightlife.com/about-the-editor",
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": "https://londonluxurynightlife.com/about-the-editor/#author-isabella",
              name: "Isabella Marsh",
              jobTitle: "Luxury Lifestyle Editor",
              url: "https://londonluxurynightlife.com/about-the-editor/",
              description:
                "Isabella covers London's high-end nightlife - members' clubs, celebrity-spotted venues, and the most exclusive parties. She writes for readers seeking the upper end of the scene.",
              worksFor: {
                "@type": "Organization",
                name: "London Luxury Nightlife",
                url: "https://londonluxurynightlife.com",
              },
              knowsAbout: [
                "London members' clubs",
                "Luxury and celebrity nightlife",
                "The London social season",
                "Private events and exclusive parties",
              ],
            },
          }),
        }}
      />
      <ArticleLayout
        title="Isabella Marsh"
        subtitle="Luxury Lifestyle Editor, London Luxury Nightlife"
      >
        <p>
          Isabella covers London&apos;s high-end nightlife: the members&apos; clubs, the
          celebrity-spotted venues, and the parties that define the upper end of the scene. Her
          beat runs from Mayfair&apos;s discreet rooms to the social season&apos;s great fixtures,
          written for readers who want the city at its most polished.
        </p>
        <p>
          She comes from a long-form luxury journalism background, and it shows in the work: every
          guide is grounded in firsthand visits, every event piece in being in the room, and every
          date-sensitive detail carries the month it was checked. When the season moves, from
          Ascot to Henley to the Grand Prix, her guides move with it.
        </p>

        <h2>What Isabella Covers</h2>

        <ul>
          <li>Members&apos; clubs and London&apos;s most exclusive rooms</li>
          <li>The social season: where the luxury crowd goes after the day&apos;s events</li>
          <li>Celebrity nightlife and the venues that host it</li>
          <li>Private events and high-end party culture</li>
        </ul>

        <h2>Recent Guides by Isabella</h2>

        <ul>
          <li>
            <Link href="/blog/henley-regatta-london-nightlife">
              Henley Royal Regatta Nightlife: How London Does Regatta Week
            </Link>
          </li>
          <li>
            <Link href="/blog/british-grand-prix-london-nightlife">
              British Grand Prix Nightlife: Where the F1 Crowd Parties in London
            </Link>
          </li>
          <li>
            <Link href="/blog/wimbledon-season-nightlife-london">
              Wimbledon Season Nightlife: Where London Goes After the Tennis
            </Link>
          </li>
          <li>
            <Link href="/blog/royal-ascot-week-nightlife-london">
              Royal Ascot Week Nightlife: Where the Luxury Crowd Goes After the Races
            </Link>
          </li>
        </ul>

        <p>
          Browse the full library on the <Link href="/blog">editorial blog</Link>, learn{" "}
          <Link href="/about">how this site works</Link>, or start with our guide to{" "}
          <Link href="/how-to-plan-a-luxury-night-out-in-london">
            planning a luxury night out in London
          </Link>
          .
        </p>
      </ArticleLayout>
    </>
  );
}
