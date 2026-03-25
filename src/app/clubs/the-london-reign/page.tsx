import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs } from "@/lib/constants";
import Link from "next/link";

const club = clubs.find((c) => c.slug === "the-london-reign")!;

export const metadata: Metadata = {
  title:
    "The London Reign Review | What It's Really Like Inside | London Luxury Nightlife",
  description:
    "An honest The London Reign review from nightlife insiders. Discover what The London Reign experience is really like, what is The London Reign like inside, and whether this extravagant Piccadilly showclub delivers on its promises.",
};

export default function TheLondonReignPage() {
  return (
    <>
      <ArticleSchema
        title="The London Reign Review"
        description="An insider review of The London Reign, Piccadilly's most extravagant showclub featuring aerial acts, live performances, and cabaret entertainment."
        slug="/clubs/the-london-reign"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={waClubMessage(club.name)}
        ctaLabel="Book a Table at The London Reign"
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
          The London Reign occupies a peculiar and thrilling space in
          London&apos;s nightlife landscape. It is not quite a nightclub. It
          is not quite a cabaret. It is not quite a theatre. It is all three
          simultaneously, held together by sheer ambition and a Piccadilly
          address that places it at the geographic heart of the West End. If
          you have ever wanted your night out to feel like a production, with
          you seated front-row, The London Reign is the venue.
        </p>

        <h2>Arriving at The London Reign</h2>

        <p>
          The entrance on Piccadilly is deliberately grand. This is not a club
          that hides. The facade announces itself, and stepping inside confirms
          the intent. The interior unfolds across multiple levels, each with
          its own character and sightlines. The design language is opulent
          without tipping into gaudy: think rich fabrics, dramatic lighting,
          and a central performance space that draws your eye upward. The
          ceiling height is a revelation after the low-slung interiors of most
          Mayfair clubs. It gives the venue a theatrical scale that
          fundamentally changes the experience.
        </p>

        <h2>The Spectacle</h2>

        <p>
          This is what you come to The London Reign for, and the venue
          delivers. Aerial performers descend from the ceiling. Cabaret acts
          command the central stage. Dancers weave choreographed routines
          through the multi-level space. The production quality is high. These
          are not filler acts designed to distract you between drinks orders.
          They are crafted performances with genuine skill and genuine
          choreography, timed to build through the evening as the energy in the
          room escalates.
        </p>

        <p>
          The format is cleverly structured. Early in the evening, the
          performances are more cabaret in style, elegant and contained. As the
          night progresses and the crowd loosens, the acts become more
          audacious, more physical, more immersive. By midnight, the boundary
          between audience and performer has blurred considerably, and the
          whole room feels like it is part of the show.
        </p>

        <h2>The Atmosphere and Crowd</h2>

        <p>
          The London Reign attracts a different crowd to the members-only world
          of Mayfair. You will find groups on special occasions, couples on
          anniversary nights, international visitors who want a quintessentially
          London experience, and West End theatre-goers who are not ready for
          the night to end. The atmosphere is celebratory and inclusive in a
          way that the more exclusive Mayfair venues are not. There is less
          posturing here, less of the performative cool that defines places
          like <Link href="/clubs/tape-london">Tape London</Link>. People at
          The London Reign are openly, unapologetically having a good time.
        </p>

        <p>
          That said, the venue maintains standards. The dress code is smart and
          glamorous, heels are expected for ladies, and the door policy ensures
          the room stays curated. It is accessible without being casual. See
          our{" "}
          <Link href="/guides/what-to-wear-london-clubs">dress code guide</Link>{" "}
          for specific advice.
        </p>

        <h2>The Music</h2>

        <p>
          The musical programme at The London Reign is mixed and commercial,
          designed to complement the live performance elements rather than
          dominate them. Expect a blend of chart hits, hip-hop, and
          crowd-pleasing anthems. The DJs here are entertainers as much as
          curators, reading the room and responding to the energy of the live
          acts. It works well within the context of the evening, though
          dedicated music purists may find it secondary to the visual
          spectacle.
        </p>

        <h2>What Makes The London Reign Unique</h2>

        <p>
          The multi-level design is the first differentiator. Most London clubs
          are single-room experiences. The London Reign offers different
          vantage points, different energies on different floors, and the
          ability to move between them as your mood shifts. A table on the
          upper level gives you a commanding view of the performances below. A
          table near the stage puts you in the thick of the action.
        </p>

        <p>
          The second differentiator is the entertainment-first philosophy.
          While{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link> integrates
          performers into the crowd experience, The London Reign stages
          full-scale productions. The scale is bigger, the choreography more
          elaborate, and the overall impression more theatrical. It is the
          difference between an immersive experience and a spectacular one.
        </p>

        <h2>What to Expect</h2>

        <p>
          Tables start from {club.tablesFrom} and your position in the room
          significantly affects your experience. We strongly recommend
          discussing table placement when booking, as the best seats for the
          performances go quickly. The drinks list is comprehensive, bottle
          service is standard for VIP, and the staff are well-trained in
          managing the unique flow of a venue where live entertainment
          interrupts the typical nightclub rhythm.
        </p>

        <blockquote>
          The London Reign is the venue for people who want their night out to
          feel like an event. Not just a good party, but a full sensory
          production with them at the centre.
        </blockquote>

        <h2>Who The London Reign Is Best For</h2>

        <ul>
          <li>Groups celebrating milestone occasions who want real spectacle</li>
          <li>International visitors looking for a uniquely London experience</li>
          <li>Couples who want dinner-and-a-show energy without leaving the venue</li>
          <li>Anyone who loves theatre, cabaret, and nightlife in equal measure</li>
        </ul>

        <p>
          International visitors should read our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            visitor&apos;s guide to London nightlife
          </Link>{" "}
          for essential planning tips. And if you are considering a dinner-first
          evening, our{" "}
          <Link href="/guides/dinner-and-nightclub-london">
            dinner and nightclub guide
          </Link>{" "}
          pairs perfectly with a London Reign booking.
        </p>

        <h2>Is The London Reign Worth It?</h2>

        <p>
          For the right occasion, emphatically yes. The London Reign is not
          where you go for a quiet midweek drink or an understated evening with
          colleagues. It is where you go when you want your night to be an
          experience, when you want to be entertained, surprised, and swept up
          in something bigger than a dancefloor and a DJ. The {club.tablesFrom}{" "}
          table minimum is fair for the level of production you receive. If you
          want pure nightclub energy, look to{" "}
          <Link href="/clubs/libertine">Libertine</Link> or{" "}
          <Link href="/clubs/tabu-london">TABU</Link>. But if spectacle is
          what you are after, The London Reign is the best in the West End.
        </p>
      </ArticleLayout>
    </>
  );
}
