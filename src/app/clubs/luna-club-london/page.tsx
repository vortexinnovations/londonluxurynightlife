import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "luna-club-london")!;

export const metadata: Metadata = {
  title:
    "Luna Club London Review | Mayfair's Newest Luxury Club | London Luxury Nightlife",
  description:
    "An insider review of Luna Club London. Discover why this sleek new Mayfair nightclub is attracting a younger affluent crowd, what to expect from the experience, and how it compares to established venues.",
};

export default function LunaClubLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Luna Club London Review"
        description="An insider review of Luna Club London, the sleek new addition to Mayfair's luxury nightlife scene bringing contemporary design and fresh energy to the established club circuit."
        slug="/clubs/luna-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at Luna"
      >
        <div className="info-box">
          <p>
            <strong>Location:</strong> {club.location}
          </p>
          <p>
            <strong>Music:</strong> {club.musicStyle}
          </p>
          <p>
            <strong>Opening Nights:</strong> {club.openingNights}
          </p>
          <p>
            <strong>Dress Code:</strong> {club.dressCode}
          </p>
          <p>
            <strong>Tables From:</strong> {club.tablesFrom}
          </p>
        </div>

        <p>
          Mayfair&apos;s nightlife circuit has always rewarded longevity. The
          clubs that survive here do so by building reputations over years, even
          decades, of consistent delivery. So when a new venue arrives and
          immediately begins drawing the kind of crowd that established
          institutions spend years cultivating, it is worth paying attention.
          Luna Club London is that venue. It has entered the Mayfair landscape
          with a clarity of purpose that suggests its founders studied exactly
          what was missing from the neighbourhood and built precisely that.
        </p>

        <h2>A Contemporary Vision for Mayfair</h2>

        <p>
          The first thing you notice about Luna is the design. Where many
          Mayfair clubs lean into traditional opulence, dark woods and heavy
          fabrics and the general atmosphere of an aristocratic drawing room
          that has been repurposed for revelry, Luna takes a markedly different
          approach. The interiors are sleek, modern, and confident in their
          restraint. Clean lines, considered lighting, and materials that feel
          contemporary without straying into cold minimalism. The space manages
          to feel both luxurious and current, which is a balance that
          surprisingly few London clubs achieve.
        </p>

        <p>
          The layout is thoughtfully arranged to create distinct zones without
          hard barriers. The dancefloor flows naturally into the table areas,
          the bar is accessible without being in the way, and there are corners
          of relative quiet for groups who want to talk between songs. Compared
          to the intimate, compressed energy of{" "}
          <Link href="/clubs/funky-buddha">Funky Buddha</Link> or the layered
          theatricality of{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>, Luna
          offers a sense of space and breathing room that feels intentional
          rather than empty.
        </p>

        <h2>The Crowd</h2>

        <p>
          Luna has positioned itself as the modern alternative for a younger
          affluent crowd, and the room reflects that ambition. You will find
          entrepreneurs in their late twenties, fashion-conscious professionals,
          visiting international clientele, and the kind of social media
          presence that translates into genuine cultural influence rather than
          mere follower counts. The energy is aspirational without being
          desperate, confident without being aggressive. It is a crowd that
          wants quality but has no interest in stuffiness.
        </p>

        <p>
          The door policy strikes an effective balance. It is selective enough
          to maintain the calibre of the room but not so restrictive that
          getting in becomes a performance in itself. If you are dressed well
          and carry yourself with the right energy, Luna will welcome you. For
          specific guidance on what to wear, our{" "}
          <Link href="/london-club-dress-code-guide">
            guide to what to wear at London clubs
          </Link>{" "}
          covers the expectations at contemporary Mayfair venues in detail.
        </p>

        <h2>Music and Energy</h2>

        <p>
          The music policy is open format with a strong foundation in hip-hop
          and RnB, which places Luna comfortably within the mainstream of
          Mayfair&apos;s sonic identity. What distinguishes the programming here
          is a willingness to venture further than the expected playlist. DJs
          weave in afrobeats, amapiano, and contemporary pop remixes alongside
          the hip-hop staples, creating a sonic texture that feels relevant to
          the crowd in the room rather than dictated by tradition.
        </p>

        <p>
          The sound system is modern and precisely calibrated. Bass is present
          and physical without dominating, and the high-end is crisp enough to
          give vocal tracks their full impact. The overall sound design reflects
          the same contemporary sensibility as the visual design: everything
          feels considered, nothing feels accidental. On a busy Saturday, the
          energy on the dancefloor builds steadily from midnight onward,
          reaching a peak somewhere around two in the morning that holds
          impressively through to close.
        </p>

        <h2>Table Service and Pricing</h2>

        <p>
          Tables at Luna start from {club.tablesFrom}, which is standard for
          Mayfair and represents solid value given the quality of the
          experience. The service team is young, sharp, and trained to deliver
          the premium bottle service that this neighbourhood demands. Bottles
          arrive with appropriate presentation, ice buckets are kept full, and
          your server maintains a presence that is attentive without being
          overbearing. It is a clean, professional operation that avoids the
          transactional feeling you sometimes encounter at newer venues still
          finding their rhythm.
        </p>

        <p>
          The best tables offer clear views of the dancefloor and the DJ booth,
          and the raised seating areas provide a sense of separation without
          isolation. For groups who want the full experience, arriving by
          midnight on a Saturday secures the best atmosphere and ensures your
          table becomes part of the peak energy rather than arriving after it
          has settled.
        </p>

        <blockquote>
          Luna does not carry decades of legacy. What it carries instead is a
          vision for what Mayfair nightlife looks like when you strip away the
          tradition and focus purely on what a modern, discerning audience
          actually wants.
        </blockquote>

        <h2>How Luna Compares</h2>

        <p>
          In the context of Mayfair&apos;s broader nightlife offering, Luna
          occupies interesting territory. It is more polished and design-led
          than <Link href="/clubs/beat-london">BEAT London</Link>, more
          contemporary than{" "}
          <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>,
          and less theatrical than{" "}
          <Link href="/clubs/reign-london">Reign London</Link>. Its closest
          comparison is perhaps{" "}
          <Link href="/clubs/selene-london">Selene London</Link>, another
          newer entrant that targets a similar demographic but with a more
          refined aesthetic. Between them, these venues represent the future
          direction of Mayfair nightlife, and both are worth experiencing.
        </p>

        <h2>Who Luna Club London Is Best For</h2>

        <ul>
          <li>Younger affluent professionals who want luxury without formality</li>
          <li>International visitors seeking a contemporary Mayfair experience</li>
          <li>Groups who appreciate modern design and curated atmospheres</li>
          <li>Music enthusiasts who want open-format programming done well</li>
          <li>Anyone who finds established Mayfair clubs too traditional</li>
        </ul>

        <p>
          For visitors exploring London&apos;s nightlife for the first time,
          Luna makes an excellent introduction to the Mayfair scene. Pair it
          with a nearby dinner reservation using our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          for a complete evening.
        </p>

        <h2>Is Luna Club London Worth It?</h2>

        <p>
          For the right crowd, absolutely. Luna does not yet carry the
          legendary status of{" "}
          <Link href="/clubs/funky-buddha">Funky Buddha</Link> or the cultural
          cachet of <Link href="/clubs/tape-london">Tape London</Link>, but
          it is not trying to. What it offers is a fresh, well-executed
          nightlife experience that feels genuinely of the moment. The{" "}
          {club.tablesFrom} minimum spend delivers a premium evening in a
          venue that understands exactly what its audience wants, and that
          focused clarity is its greatest asset. If contemporary luxury is your
          preference, Luna delivers it with confidence.
        </p>

        <p>
          To understand how Luna fits within the broader landscape, explore
          our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London luxury nightlife
          </Link>{" "}
          for a full overview of the city&apos;s best venues and how to
          navigate them.
        </p>
      </ArticleLayout>
    </>
  );
}
