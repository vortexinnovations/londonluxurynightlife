import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { WA_GENERAL_MESSAGE, closedClubs } from "@/lib/constants";
import Link from "next/link";

const club = closedClubs.find((c) => c.slug === "luxx-club-london")!;

export const metadata: Metadata = {
  title:
    "Luxx Club London (Permanently Closed) | Find Alternative Clubs",
  description:
    "Luxx Club London has permanently closed. Discover what made this LED-themed Mayfair venue unique and find the best alternative clubs still open.",
  robots: { index: false, follow: true },
};

export default function LuxxClubLondonPage() {
  return (
    <>
      <ArticleSchema
        title="Luxx Club London Review"
        description="An insider review of Luxx Club London, the premium Mayfair venue where electric light shows and immersive LED installations create a nightclub experience unlike anything else."
        slug="/clubs/luxx-club-london"
      />
      <ArticleLayout
        title={club.name}
        subtitle={club.tagline}
        ctaMessage={WA_GENERAL_MESSAGE}
        ctaLabel="Find an Alternative Venue"
      >
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-1">Permanently Closed</p>
          <p className="text-warm-gray text-sm">Luxx Club London has permanently closed. This review is kept for reference. Looking for open venues? See our <Link href="/guides/complete-guide-london-luxury-nightlife">complete guide to London&apos;s luxury nightlife</Link> for current recommendations.</p>
        </div>

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
          Luxx Club London has taken a simple idea, that light can transform a
          room as dramatically as any performer or architectural feature, and
          executed it with more ambition than any other venue in the city. This
          is a club where the walls are alive. Where the ceiling shifts colour
          and pattern in response to the music. Where LED installations are
          not decoration but the defining feature of the space. If you have
          ever walked into an immersive art exhibition and wished it served
          champagne and played hip-hop until three in the morning, Luxx is
          the answer.
        </p>

        <h2>Walking Into Luxx</h2>

        <p>
          The first thing you notice is not the bar, not the tables, not the
          crowd. It is the light. Luxx has invested heavily in LED technology
          that wraps the interior in moving imagery. Think floor-to-ceiling
          panels displaying abstract patterns, shifting landscapes of colour
          that respond to the bassline. The effect is genuinely immersive.
          Within minutes of sitting down, the visual programme has altered your
          sense of the space. A room that might feel modest by Mayfair
          standards suddenly feels vast, kinetic, and otherworldly.
        </p>

        <p>
          The design is smart enough to avoid sensory fatigue. The lighting
          programme evolves through the night, shifting in palette and
          intensity as the energy in the room changes. Early evening is
          ambient, warm tones washing the walls in slow transitions. By peak
          hours, the tempo accelerates, the colours sharpen, and the room
          becomes a strobing, pulsing environment that amplifies the music
          and the dancefloor energy.
        </p>

        <h2>The Atmosphere</h2>

        <p>
          Luxx operates at a slightly different frequency to the ultra-exclusive
          end of Mayfair nightlife. The atmosphere is less about status
          signalling and more about collective enjoyment. The light show
          creates a shared focal point that draws the room together. People
          look up, look around, respond to the visual shifts. It generates
          conversation and connection in a way that a static interior simply
          cannot. On a busy Friday night, there is a genuine buzz at Luxx
          that feels organic rather than manufactured.
        </p>

        <p>
          The crowd is well-dressed and enthusiastic. Luxx attracts a mix of
          Mayfair regulars, groups on nights out, and visitors who have heard
          about the light show and want to see it for themselves. The energy
          is high but not aggressive. There is a playfulness to the atmosphere,
          partly generated by the ever-changing visual environment, that
          keeps the mood buoyant throughout the night.
        </p>

        <h2>The Music</h2>

        <p>
          Luxx operates an open format policy with a strong hip-hop lean. This
          gives the DJs freedom to move between genres, matching the visual
          programme and the crowd energy. On a typical night, expect hip-hop
          to dominate, with detours into commercial dance, afrobeats, and the
          occasional deep cut that rewards the attentive listener. The
          relationship between the music and the lighting is the secret
          ingredient. When both are synchronised, which happens frequently,
          the effect is genuinely euphoric. The bass drops and the room
          transforms simultaneously. It is nightlife as synesthesia.
        </p>

        <h2>What Makes Luxx Club Unique</h2>

        <p>
          The obvious comparison is with{" "}
          <Link href="/clubs/libertine">Libertine</Link>, which also uses LED
          technology as a design feature. But Luxx takes the concept further.
          Where Libertine integrates lighting into an architectural design
          vision, Luxx makes the lighting the architecture. The LED panels are
          not accent features. They are the walls. This level of commitment to
          a single concept creates a purity of experience that hybrid
          approaches cannot match.
        </p>

        <p>
          The other distinguishing factor is the visual programme itself. Luxx
          does not simply cycle through colour gradients. The content on the
          panels is curated, updated, and designed to create specific emotional
          responses at specific moments in the night. It is closer to VJing
          than interior design, and the skill involved is evident. On the best
          nights, the light show at Luxx is the best piece of live visual art
          in London.
        </p>

        <h2>What to Expect</h2>

        <p>
          Tables start from {club.tablesFrom} and every position in the room
          benefits from the visual installations. That said, certain tables
          offer more immersive sightlines than others, so it is worth
          specifying your preference when booking. The bottle service is
          polished, the drinks list is comprehensive, and the staff understand
          that the light show is the main attraction and manage service
          accordingly, never obstructing sightlines or breaking the visual
          flow.
        </p>

        <p>
          Smart dress is required with no casual wear. The venue&apos;s visual
          drama rewards guests who dress with similar intention. Dark
          clothing shows beautifully under the LED lighting. Our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          has more specific recommendations.
        </p>

        <blockquote>
          Luxx Club London turns the nightclub into a canvas. The light show
          is not a gimmick. It is the reason to be there, and on a good
          night, it elevates the entire experience into something you will not
          find anywhere else in the city.
        </blockquote>

        <h2>Who Luxx Club London Is Best For</h2>

        <ul>
          <li>Visual art enthusiasts who want their nightclub to be an experience</li>
          <li>Groups looking for something genuinely different from standard Mayfair clubs</li>
          <li>Photographers and creatives drawn to immersive environments</li>
          <li>Anyone who values atmosphere and ambiance alongside good music and drinks</li>
        </ul>

        <p>
          If you enjoy visually driven venues, compare Luxx with{" "}
          <Link href="/clubs/libertine">Libertine</Link> for a futuristic
          take, or{" "}
          <Link href="/clubs/tabu-london">TABU London</Link> for a
          design-forward venue with a completely different aesthetic. For the
          full picture, our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete nightlife guide
          </Link>{" "}
          covers every major venue in the scene.
        </p>

        <h2>Is Luxx Club London Worth It?</h2>

        <p>
          If the idea of a nightclub that doubles as an immersive light
          installation appeals to you, Luxx is absolutely worth it. The
          {" "}{club.tablesFrom} table minimum is standard for Mayfair and gives
          you access to a visual experience that no other London club can
          match. It does not have the exclusivity of{" "}
          <Link href="/clubs/tape-london">Tape London</Link> or the live
          entertainment of{" "}
          <Link href="/clubs/cirque-le-soir">Cirque Le Soir</Link>, but it
          offers something neither can: a night where the venue itself is the
          performance. For visual people, for creative people, for anyone who
          believes a nightclub should stimulate more than just the ears, Luxx
          delivers.
        </p>
        <h2>Luxx Club Has Closed — Where to Go Instead</h2>

        <p>
          Luxx Club London is permanently closed, but if you were drawn to its
          immersive, visually driven nightlife experience, these open venues
          offer the closest alternatives:
        </p>

        <ul>
          <li>
            <Link href="/clubs/luna-club-london">Luna Club London</Link> — An
            atmospheric Mayfair venue with striking visual design and an
            immersive environment that carries forward the spirit of visually
            ambitious nightlife.
          </li>
          <li>
            <Link href="/clubs/selene-london">Selene London</Link> — A sleek,
            design-led club with a modern aesthetic and sophisticated atmosphere
            for those who appreciate venues where the setting is part of the
            experience.
          </li>
        </ul>

        <p>
          For a full overview of what is currently open, see our{" "}
          <Link href="/guides/complete-guide-london-luxury-nightlife">
            complete guide to London&apos;s luxury nightlife
          </Link>.
        </p>
      </ArticleLayout>
    </>
  );
}
