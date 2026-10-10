import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { BLOG_IMAGES } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cuckoo Club Mayfair (Now 99 Regent Street): Two Floors, One Night",
  description:
    "Cuckoo Club on Swallow Street is now 99 Regent Street, open Wednesday to Saturday. Our review of the venue as Cuckoo Club: two floors, two genres, and a famously consistent night.",
  keywords:
    "Cuckoo Club London, Cuckoo Club Mayfair, Cuckoo Club review, Swallow Street nightclub, Cuckoo Club nights",
  openGraph: {
    title: "Cuckoo Club Mayfair (Now 99 Regent Street): Two Floors, One Night",
    description:
      "Cuckoo Club is now 99 Regent Street. Our review of the two-floor Swallow Street venue as Cuckoo Club.",
    url: "https://londonluxurynightlife.com/blog/cuckoo-club-mayfair-two-floors-one-night",
    type: "article",
  },
  alternates: {
    canonical:
      "https://londonluxurynightlife.com/blog/cuckoo-club-mayfair-two-floors-one-night",
  },
};

export default function CuckooClubMayfairPage() {
  return (
    <>
      <ArticleSchema
        title="Cuckoo Club Mayfair (Now 99 Regent Street): Two Floors, One Night"
        description="Cuckoo Club is now 99 Regent Street. Our review of the two-floor Swallow Street venue as Cuckoo Club."
        slug="/blog/cuckoo-club-mayfair-two-floors-one-night"
      />
      <ArticleLayout
        title="Cuckoo Club Mayfair (Now 99 Regent Street): Two Floors, One Night"
        subtitle="Cuckoo Club is now 99 Regent Street: our review of the Swallow Street venue as Cuckoo Club"
        heroImage={BLOG_IMAGES["cuckoo-club-mayfair-two-floors-one-night"]}
        heroAlt="Cuckoo Club Mayfair dual-floor nightclub on Swallow Street"
      >

        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">Now 99 Regent Street</p>
          <p className="text-warm-gray text-sm">
            Cuckoo Club is now 99 Regent Street, open Wednesday to Saturday. Tables and guestlist are booked under the new name. This review describes the venue as Cuckoo Club; the music policy, minimums and door policy may have changed, so message us for 99 Regent Street&apos;s current terms.
          </p>
        </div>
        <p>
          Every group has the same argument.{" "}
          Half want hip-hop. Half want house. Someone suggests a compromise
          venue that satisfies nobody. The night starts with tension and ends
          with regret.{" "}
          <Link href="/clubs/cuckoo-club">Cuckoo Club</Link>{" "}on Swallow
          Street existed to eliminate this problem entirely. Two floors, two
          genres, one venue. House music downstairs, hip-hop upstairs. Your
          group migrates freely between them all night. Problem solved.
        </p>

        <h2>The Two-Floor Concept</h2>

        <p>
          The genius of Cuckoo&apos;s layout is its simplicity. The
          ground-level room plays house music: proper house, not the
          commercial EDM that passes for it in lesser venues. The lower floor
          runs hip-hop and R&amp;B with a programming quality that competes
          with dedicated hip-hop clubs. The two rooms share the same door
          policy, the same service standard, and the same crowd, but offer
          completely different sonic experiences. You can start your evening
          with deep house cocktails and end it with hip-hop on the dance
          floor without ever reaching for your coat.
        </p>

        <p>
          This flexibility made Cuckoo uniquely practical for groups with
          mixed musical tastes, which is to say most groups. If you are
          planning a night for more than four people, the statistical
          likelihood of genre consensus is near zero. Cuckoo respected this
          reality and built the solution into its architecture.
        </p>

        <h2>The Consistency Factor</h2>

        <p>
          Cuckoo Club did not have the celebrity magnetism of{" "}
          <Link href="/clubs/tape-london">Tape London</Link>{" "}or the
          theatrical spectacle of{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>. What it
          had, and what matters more than most people realise, is consistency.
          Wednesday through Saturday, Cuckoo delivered a strong night. Not
          spectacular peaks followed by disappointing troughs: a reliable,
          high-quality experience every time you walk through the door. In a
          scene where even the best venues have off nights, this reliability
          is undervalued and significant.
        </p>

        <p className="pull-quote">
          Cuckoo Club was the venue that Mayfair regulars recommended to friends
          who were visiting for the first time. That endorsement, the personal
          recommendation, not the marketing campaign, tells you everything.
        </p>

        <h2>The Practical Details</h2>

        <div className="info-box">
          <h4>99 Regent Street (formerly Cuckoo Club): Key Details</h4>
          <ul>
            <li><strong>Now called:</strong>{" "}99 Regent Street</li>
            <li><strong>Location:</strong>{" "}Swallow Street, Mayfair</li>
            <li><strong>Music (as Cuckoo Club):</strong>{" "}House (upstairs), Hip-Hop &amp; R&amp;B (downstairs)</li>
            <li><strong>Open:</strong>{" "}Wednesday to Saturday</li>
            <li><strong>Tables (as Cuckoo Club):</strong>{" "}from &pound;1,000; ask us for current minimums</li>
            <li><strong>Dress code:</strong>{" "}Smart and stylish, no sportswear</li>
          </ul>
        </div>

        <p>
          The dress code is smart but approachable: less formal than{" "}
          <Link href="/clubs/maddox">Maddox</Link>, less creative than{" "}
          <Link href="/clubs/the-box-london">The Box</Link>, solidly in the
          Mayfair mainstream. Our{" "}
          <Link href="/london-club-dress-code-guide">
            dress code guide
          </Link>{" "}
          has specific advice. Table bookings are recommended on Friday and
          Saturday but not essential on midweek nights. For group bookings,
          Cuckoo Club was one of our top recommendations; our{" "}
          <Link href="/blog/best-clubs-london-large-groups">
            group night out guide
          </Link>{" "}
          explains why.
        </p>

        <h2>Who Cuckoo Club Was For</h2>

        <p>
          First-time Mayfair visitors who want a safe, strong introduction.
          Groups with mixed musical tastes who refuse to compromise. Corporate
          entertainment where the venue needs to work for everyone: our{" "}
          <Link href="/guides/corporate-entertainment-london">
            corporate guide
          </Link>{" "}
          covers this in detail. Regular Mayfair goers who value consistency
          over novelty. And anyone who simply wants a great night out without
          the anxiety of whether the venue will deliver.
        </p>

        <p>
          If you want something with more edge, consider{" "}
          <Link href="/clubs/tabu-london">Rumour</Link>{" "}(formerly TABU) or{" "}
          <Link href="/clubs/selene-london">Selene</Link>{" "}for a newer
          refined experience.{" "}
          <Link href="/contact">Contact our team</Link>{" "}for bookings and
          advice on the best floor and table position for your group.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/clubs/cuckoo-club">
              99 Regent Street (formerly Cuckoo Club)
            </Link>
          </li>
          <li>
            <Link href="/blog/best-clubs-mayfair-complete-ranking">
              Every Mayfair Club Ranked
            </Link>
          </li>
          <li>
            <Link href="/best-hip-hop-clubs-london">
              Best Clubs in London for Hip-Hop and R&amp;B
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
