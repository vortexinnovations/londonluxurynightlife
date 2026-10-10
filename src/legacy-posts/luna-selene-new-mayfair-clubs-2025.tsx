import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { BLOG_IMAGES } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Luna Club and Selene London Reviewed: Luna Has Closed",
  description:
    "Luna Club London in Mayfair has closed. Our review of Luna as it was, and of Selene London, just north of Oxford Circus, which is open Thursday to Sunday.",
  keywords:
    "Luna Club London, Selene London, new Mayfair clubs, new clubs London 2025, Luna Club review, Selene London review",
  openGraph: {
    title: "Luna Club and Selene London Reviewed: Luna Has Closed",
    description:
      "Luna Club London has closed. Our review of Luna as it was, and of Selene London, which is open Thursday to Sunday.",
    url: "https://londonluxurynightlife.com/blog/luna-selene-new-mayfair-clubs-2025",
    type: "article",
  },
  alternates: {
    canonical:
      "https://londonluxurynightlife.com/blog/luna-selene-new-mayfair-clubs-2025",
  },
};

export default function LunaSeleneNewMayfairClubsPage() {
  return (
    <>
      <ArticleSchema
        title="Luna Club and Selene London Reviewed: Luna Has Closed"
        description="Luna Club London has closed. Our review of Luna as it was, and of Selene London, which is open Thursday to Sunday."
        slug="/blog/luna-selene-new-mayfair-clubs-2025"
      />
      <ArticleLayout
        title="Luna Club and Selene London Reviewed: Luna Has Closed"
        subtitle="Luna Club London has closed; Selene, just north of Oxford Circus, is open Thursday to Sunday"
        heroImage={BLOG_IMAGES["luna-selene-new-mayfair-clubs-2025"]}
        heroAlt="Luna Club and Selene London new luxury nightclub interiors"
      >

        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">Luna has closed</p>
          <p className="text-warm-gray text-sm">
            Luna Club London has closed. Selene London, at 4 Winsley Street just north of Oxford Circus, is open Thursday to Sunday, 11pm to 4am. The Luna sections below describe the club as it was.
          </p>
        </div>
        <p>
          Mayfair&apos;s nightclub scene is not static. While iconic venues
          like{" "}
          <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>{" "}
          continue to draw loyal crowds, a new generation of venues is
          emerging with fresh design, contemporary programming, and a younger
          affluent audience.{" "}
          <Link href="/clubs/luna-club-london">Luna Club London</Link>{" "}and{" "}
          <Link href="/clubs/selene-london">Selene London</Link>{" "}were the
          most notable additions. Luna has since closed; Selene is worth
          understanding if you are planning a night in Mayfair. One note on geography: Selene is
          not in Mayfair itself. It is at 4 Winsley Street in Fitzrovia, in
          Libertine&apos;s former space just north of Oxford Circus, a short
          walk from the Mayfair clubs.
        </p>

        <h2>Luna Club London: The Contemporary Energy</h2>

        <p>
          Luna Club positioned itself as the sleek, contemporary
          alternative to Mayfair&apos;s more traditional offerings. The
          design language is modern and clean: polished surfaces, considered
          lighting, a colour palette that feels current without chasing
          trends. If the established Mayfair clubs sometimes feel like they
          are trading on reputation, Luna felt like it was earning its place
          in real time.
        </p>

        <p>
          The music policy was open format with a hip-hop and R&amp;B centre
          of gravity. This positioned Luna alongside Mayfair&apos;s hip-hop
          rooms rather than the house music territory occupied by{" "}
          <Link href="/clubs/maddox">Maddox</Link>. The DJs lean younger
          and more contemporary, which attracted a crowd that matched: late
          twenties, well-dressed, there to dance and socialise with energy
          rather than cool detachment.
        </p>

        <p>
          The table service was polished and attentive. Minimum spends started
          from &pound;1,000, competitive with the Mayfair standard. The
          layout accommodated both table bookings and a genuine dance floor,
          avoiding the common trap of venues that are all tables and no
          energy. Thursday through Saturday was the active schedule, with
          Saturday consistently the strongest night.
        </p>

        <h2>Selene London: The Refined Elegance</h2>

        <p>
          Where Luna brought energy and contemporary design, Selene brings
          refinement. This is a venue that prioritises sophistication above
          all: the interiors are among the most considered in the West End, with
          a design sensibility that whispers rather than shouts. Selene feels
          like a venue built for people who have been to every club in
          Mayfair and want something that operates at a quieter, more
          elevated frequency.
        </p>

        <p>
          The crowd reflects this positioning. Selene attracts a discerning,
          well-dressed clientele that values elegance and atmosphere over
          volume and spectacle. The music, hip-hop, R&amp;B, and commercial
          tracks, is delivered at a level that fills the room without
          overwhelming conversation, which makes Selene particularly strong
          for the early evening and for groups where not everyone is a
          committed clubber. Like{" "}
          <Link href="/clubs/dear-darling">Dear Darling</Link>, Selene
          understands that sophistication and nightlife are not mutually
          exclusive.
        </p>

        <p className="pull-quote">
          Luna brought energy to Mayfair before it closed. Selene brings the
          restraint that West End regulars respect, and it is the one of the
          two you can still visit.
        </p>

        <h2>How They Compare</h2>

        <div className="info-box">
          <h4>Luna Club vs Selene: At a Glance</h4>
          <ul>
            <li><strong>Energy level:</strong>{" "}Luna = higher, more dynamic / Selene = lower, more refined</li>
            <li><strong>Design:</strong>{" "}Luna = contemporary, sleek / Selene = elegant, considered</li>
            <li><strong>Crowd:</strong>{" "}Luna = younger, energetic / Selene = older, discerning</li>
            <li><strong>Music:</strong>{" "}Both hip-hop/R&amp;B focused. Luna louder, Selene more curated</li>
            <li><strong>Best for:</strong>{" "}Luna = groups wanting energy / Selene = couples and smaller groups wanting sophistication</li>
            <li><strong>Tables from:</strong>{" "}Selene from &pound;1,000 (Luna has closed)</li>
            <li><strong>Location:</strong>{" "}Luna = Mayfair / Selene = 4 Winsley Street, Fitzrovia, just north of Oxford Circus</li>
            <li><strong>Open:</strong>{" "}Luna = closed / Selene = Thursday to Sunday, 11pm to 4am</li>
          </ul>
        </div>

        <h2>Can They Compete With the Established Names?</h2>

        <p>
          The honest answer is: in some ways yes, in some ways not yet.
          What Selene offers that established venues cannot is
          freshness: new design, new energy, the excitement of a venue that
          is still finding its identity. What it lacks, and can only build
          with time, is the institutional confidence that comes from years
          of proven execution.{" "}
          <Link href="/clubs/tape-london">Tape London</Link>{" "}has
          relationships with artists and a reputation for privacy that cannot
          be manufactured overnight.
        </p>

        <p>
          The smart approach is to experience both the established and the
          new. Try <Link href="/clubs/tape-london">Tape</Link>{" "}on one night
          and Selene on another. The contrast is instructive and enjoyable.
          For a full ranking of the Mayfair venues, and where Selene sits
          alongside them, see our{" "}
          <Link href="/blog/best-clubs-mayfair-complete-ranking">
            complete Mayfair club ranking
          </Link>
          .
        </p>

        <p>
          <Link href="/contact">Contact our team</Link>{" "}for bookings at
          Selene or for a recommendation based on your group and
          preferences. For international visitors planning their London
          nightlife itinerary, our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            visitors&apos; guide
          </Link>{" "}
          provides the broader context.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/clubs/luna-club-london">
              Luna Club London Has Closed: Alternatives
            </Link>
          </li>
          <li>
            <Link href="/clubs/selene-london">
              Selene London: Full Venue Profile
            </Link>
          </li>
          <li>
            <Link href="/blog/best-clubs-mayfair-complete-ranking">
              Every Mayfair Club Ranked
            </Link>
          </li>
          <li>
            <Link href="/blog/london-nightlife-2025-whats-new">
              London Nightlife 2025: What&apos;s New
            </Link>
          </li>
          <li>
            <Link href="/guides/complete-guide-london-luxury-nightlife">
              The Complete Guide to London Luxury Nightlife
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
