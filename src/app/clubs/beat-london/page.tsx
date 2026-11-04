import { Metadata } from "next/types";
import { fitTitle } from "@/lib/metadata";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { waClubMessage, clubs, SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { CLUB_IMAGES } from "@/lib/images";

const club = clubs.find((c) => c.slug === "beat-london")!;

const TITLE = "BEAT London Review | What It's Really Like Inside";
const DESCRIPTION =
  "BEAT London review: house music at 48 Margaret Street, Fitzrovia, 1am to 6am on Friday, Saturday and select Thursdays, with tables from £1,000.";

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: DESCRIPTION,
  alternates: {
    canonical: "https://londonluxurynightlife.com/clubs/beat-london",
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://londonluxurynightlife.com/clubs/beat-london",
    images: [{ url: CLUB_IMAGES["beat-london"].hero, alt: "A guest dancing under a spotlight" }],
  },
};

export default function BeatLondonReview() {
  return (
    <>
      <ArticleSchema
        title="BEAT London Review | What It's Really Like Inside"
        description="A review of BEAT London, the after-hours house music club on Margaret Street in Fitzrovia: the hours, the music, the table booking and the venue's sound system claim."
        slug="/clubs/beat-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        heroImage={CLUB_IMAGES["beat-london"]?.hero}
        heroAlt={`${club.name} nightclub in ${club.location}`}
        ctaMessage={waClubMessage("BEAT London")}
        ctaLabel="Book BEAT London"
        noGuestlist
      >
        <div className="info-box">
          <p><strong>Location:</strong> {club.location}</p>
          <p><strong>Music:</strong> {club.musicStyle}</p>
          <p><strong>Opening Nights:</strong> {club.openingNights}</p>
          <p><strong>Age:</strong> 18+ with photo ID</p>
          <p><strong>Dress Code:</strong> {club.dressCode}</p>
          <p><strong>Tables From:</strong> {club.tablesFrom}</p>
          <p><strong>Guestlist:</strong> None. BEAT doesn&apos;t run a guestlist. Entry is by table booking.</p>
        </div>

        <p>
          Strip away the chandeliers. Forget the Instagram-ready interiors. Remove the dinner menu, the cocktail theatre, the celebrity sightings, and the performative luxury. What remains when you reduce a night out to its essential components? Music, a sound system that does it justice, and a room full of people who came to dance. That is the case for BEAT London: an after-hours house music club at 48 Margaret Street in Fitzrovia, open from 1am to 6am on Friday, Saturday and select Thursdays, with entry by table booking from £1,000. Our short review: worth it if you want house music and a very late night, and the wrong choice if you want an early start. This is a nightclub for people who actually like nightclubs.
        </p>

        <h2>The Experience</h2>
        <p>
          The venue announces its priorities in its own account of itself. BEAT describes its sound system as one of London&apos;s finest, and that is the claim to hold it to. With a capacity of about 250, this is a small enough room to be judged on what you hear rather than on how much of it there is. For anyone accustomed to the volume-over-quality approach of most central London clubs, it is a refreshing thing for a venue to lead with.
        </p>
        <p>
          The other thing that defines the experience is the clock. BEAT is an after-hours club, and the doors are at 1am. The evening starts somewhere else, with dinner or a bar, and this is where it ends: most of the clubs we book have closed well before BEAT&apos;s 6am finish. Everything here is in service of the late part of the night.
        </p>

        <h2>Atmosphere and Crowd</h2>
        <p>
          The crowd at BEAT is shaped by that hour. Nobody arrives at a 1am door by accident, and nobody gets in without a table, so the room is made up of people who chose this night on purpose. This is not a free-for-all: entry is by table booking only, with tables from £1,000 and VIP tables from £2,000, so the room has a table structure like any Mayfair club. The difference is what the night is for, which is house music, late.
        </p>
        <p>
          The dress code is smart casual with no sportswear, which in practice means you should look like you made an effort without looking like you tried too hard. Trainers only work if they are clean and smart, and that is at the door&apos;s discretion. BEAT is 18+, and you will need photo ID.
        </p>

        <h2>The Music</h2>
        <p>
          The music at BEAT is house. There is no need to read the listings looking for a different sound on a different night: this is the policy, and it is what the review turns on. If a long night of house music is what you are after, the venue is built for it. If you want a mix of genres to keep a mixed group happy, look elsewhere.
        </p>
        <p>
          The pairing with the sound system makes sense. A well-produced house track is exactly the kind of record that rewards a capable system, where the sub-bass and the detail in the mix are the whole point. If the venue&apos;s account of its own system holds up on your night, this is the music that will show it.
        </p>

        <h2>What Makes It Unique</h2>
        <p>
          BEAT&apos;s position in the London nightlife landscape is distinctive for two reasons, and the first is its hours. The second is its past. By the venue&apos;s own account, it opened in 1966 as The Speakeasy Club, known as The Speak, which hosted Jimi Hendrix, The Beatles, Bob Marley and David Bowie, as well as King Crimson&apos;s debut. It says the building has since been extensively renovated. Few rooms of this size can tell that story, and it gives a late house night on Margaret Street an unusual sense of lineage.
        </p>
        <p>
          The Fitzrovia location also contributes to the venue&apos;s character. Removed from Mayfair&apos;s gravitational pull but still firmly central, with Oxford Circus the nearest tube and Mayfair a short walk away, Margaret Street occupies neutral territory without the postcode expectations that come with a W1K address. BEAT has members, and non-members can book a table.
        </p>

        <h2>What to Expect on a Typical Night</h2>
        <p>
          Doors open at 1am and the club closes at 6am. Plan dinner or a bar first, have your table confirmed before you set off, and bring photo ID. There is no earlier door to aim for, so there is nothing to gain from arriving ahead of time.
        </p>
        <p>
          Your table is your way in, not an optional extra. There is no guestlist and there are no tickets. As of November 2026, tables start from £1,000 minimum spend, spent on drinks, and VIP tables from £2,000. Bottles start from £750, in line with other clubs. If you are celebrating, tables can be booked for birthdays, with extras on request.
        </p>

        <h2>Who It&apos;s Best For</h2>
        <p>
          BEAT London is for anyone who prioritises house music and dancing over everything else. If you have ever left a Mayfair club feeling like the night looked better than it sounded, this is the alternative worth trying. It suits groups who want to keep going after dinner and drinks, and who are happy for the club part of the night to start at 1am.
        </p>
        <p>
          It is less suited to those whose ideal night revolves around people-watching or being photographed, anyone hoping to walk up without a booking, and anyone who would rather be home by three. BEAT will not give you the most glamorous evening of your London trip, but it may well give you the latest.
        </p>

        <h2>Is BEAT London Worth It?</h2>
        <p>
          If you care about house music and nightclub culture, and you are comfortable with a table from £1,000 and a 1am start, yes. The sound system is the venue&apos;s own headline, the hours are what truly set it apart, and the history gives it a story few rooms can match. In a city where too many clubs have sacrificed substance for surface, BEAT offers a reminder of what a nightclub is supposed to feel like, and you may well leave with the satisfied exhaustion of someone who danced until 6am.
        </p>
        <p>
          For those who want to pair a BEAT night with something different before the doors open, <Link href="/clubs/dear-darling">Dear Darling</Link>{" "}offers cocktail-bar elegance that makes a perfect precursor. If BEAT&apos;s music-first philosophy resonates, <Link href="/clubs/ministry-of-sound">Ministry of Sound</Link>{" "}in South London operates on a similar frequency at a much larger scale. And for a St James&apos;s contrast, <Link href="/clubs/scotch-of-st-james">Scotch of St James</Link>{" "}delivers intimacy and heritage with equally strong musical credentials.
        </p>
      </ArticleLayout>
    </>
  );
}
