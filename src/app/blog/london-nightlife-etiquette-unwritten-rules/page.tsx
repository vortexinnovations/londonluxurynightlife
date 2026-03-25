import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "London Nightlife Etiquette: The Unwritten Rules Nobody Tells You | London Luxury Nightlife",
  description:
    "The unwritten rules of London's luxury club scene. Phone etiquette, tipping protocol, VIP section behaviour, how to handle the door, and the social codes that separate insiders from tourists.",
  keywords:
    "London nightlife etiquette, London club etiquette, nightclub manners London, unwritten rules London clubs, how to behave at London clubs, London VIP etiquette",
  openGraph: {
    title: "London Nightlife Etiquette: The Unwritten Rules Nobody Tells You",
    description:
      "Phone etiquette, tipping protocol, VIP behaviour, and the social codes that define London's luxury nightlife scene. Everything the dress code guide doesn't cover.",
    url: "https://londonluxurynightlife.com/blog/london-nightlife-etiquette-unwritten-rules",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Nightlife Etiquette: The Unwritten Rules Nobody Tells You",
    description:
      "Phone etiquette, tipping protocol, VIP behaviour, and the social codes that define London's luxury nightlife scene.",
  },
  alternates: {
    canonical:
      "https://londonluxurynightlife.com/blog/london-nightlife-etiquette-unwritten-rules",
  },
};

const faqs = [
  {
    question: "Can I take photos inside London nightclubs?",
    answer:
      "Policies vary by venue. Most luxury clubs discourage flash photography and filming of other guests. Taking photos of your own group or table is generally acceptable, but pointing cameras at strangers or celebrities is a serious breach of etiquette and may result in removal. At the most exclusive venues like Tape London and The Box, discretion around phones is essential — the appeal of these clubs is partly that people can relax without being filmed.",
  },
  {
    question: "How much should I tip at a London nightclub?",
    answer:
      "Service charge (12.5-15%) is typically included in your table bill. Beyond this, £20-50 in cash to your table host is appreciated for good service. For exceptional attention, tip more generously. Bar staff do not expect tips in London clubs, though rounding up is a courteous gesture. Tipping door staff is unnecessary and can appear gauche — save your generosity for the people serving you inside.",
  },
  {
    question: "What behaviour will get you thrown out of a London club?",
    answer:
      "Aggressive behaviour, excessive intoxication, filming other guests without consent, harassing staff or other patrons, and attempting to move into VIP sections without a booking are the most common reasons for removal. Drug use, if observed by staff, results in immediate ejection at every reputable venue. Being argumentative with security or staff will also end your evening quickly.",
  },
  {
    question: "Is it acceptable to approach people at other tables in London clubs?",
    answer:
      "You may approach people socially, but respect boundaries. Making eye contact and receiving a welcoming response before walking over is basic protocol. Never sit down at another group's table uninvited, never touch bottles or drinks at tables that are not yours, and if your approach is not reciprocated, return to your own space gracefully. Persistence after a polite decline is the fastest way to involve security.",
  },
  {
    question: "What is the etiquette for leaving a London nightclub?",
    answer:
      "Close your tab before leaving — do not make your host chase you. Thank your table host and tip if warranted. Leave with your full group rather than in fragments if possible. Outside the venue, keep noise levels reasonable and do not congregate directly outside the entrance. Order your transport from within the club or move away from the door. A clean exit is remembered positively and improves your reception on future visits.",
  },
];

export default function LondonNightlifeEtiquettePage() {
  return (
    <>
      <ArticleSchema
        title="London Nightlife Etiquette: The Unwritten Rules Nobody Tells You"
        description="The unwritten rules of London's luxury club scene — phone etiquette, tipping, VIP behaviour, door protocol, and the social codes that separate insiders from tourists."
        slug="/blog/london-nightlife-etiquette-unwritten-rules"
      />
      <FAQSchema faqs={faqs} />
      <ArticleLayout
        title="London Nightlife Etiquette: The Unwritten Rules"
        subtitle="Everything the dress code guide doesn't cover — the behavioural codes that define London's luxury club scene"
      >
        <p>
          Dress codes are published. Door policies can be researched. But the
          behavioural expectations inside London&apos;s premium clubs exist
          almost entirely as oral tradition — passed between regulars, learned
          through observation, and occasionally discovered through the
          mortifying experience of getting it wrong. This guide covers the
          unwritten rules: the etiquette that nobody publishes but everyone
          who matters in these rooms understands.
        </p>

        <p>
          This is not about what you wear — our{" "}
          <Link href="/london-club-dress-code-guide">dress code guide</Link>{" "}
          handles that. This is about how you conduct yourself once you are
          inside.
        </p>

        <h2>Phone and Photography Etiquette</h2>

        <p>
          The single fastest way to mark yourself as someone who does not
          belong in a premium venue is to treat it like a content creation
          opportunity. London&apos;s luxury clubs — particularly the most
          exclusive ones — derive much of their value from discretion. People
          come to these rooms precisely because they can exist without being
          filmed, photographed, and uploaded.
        </p>

        <p>
          A quick photo of your own table, your group, your bottles — this is
          fine. What is not fine: filming the room, pointing your camera at
          strangers, attempting to photograph or film celebrities, recording
          performances without permission, or having your phone out on the
          dance floor with the camera rolling. At venues like{" "}
          <Link href="/clubs/tape-london">Tape London</Link>, where music
          industry figures and celebrities are genuinely present, phone
          discretion is not just etiquette — it is the price of admission to
          that world.
        </p>

        <p>
          The rule is simple: capture your own evening, not anyone
          else&apos;s.
        </p>

        <h2>How to Handle the Door</h2>

        <p>
          Your interaction with door staff sets the tone for your entire
          evening, and the etiquette here is more nuanced than simply meeting
          the dress code. Approach with confidence but not arrogance. Have
          your booking reference or guestlist name ready. Do not argue if
          asked to wait — capacity management sometimes requires a brief hold
          even for confirmed bookings. Never name-drop unless you genuinely
          know the person and they are genuinely expecting you. Invented
          connections are identified instantly and remembered permanently.
        </p>

        <p>
          If refused entry, ask politely whether there is something specific
          — group composition, a dress code issue, capacity. Accept the
          answer. Arguing, offering cash, or raising your voice will not
          reverse the decision and will ensure you are remembered for the
          wrong reasons on any future attempt. For a deeper understanding of
          how door policies actually work, read our{" "}
          <Link href="/how-london-nightclub-door-policy-works">
            door policy guide
          </Link>
          .
        </p>

        <h2>Interacting with Staff and Hosts</h2>

        <p>
          Your table host is your concierge for the evening. Treat them
          accordingly. They are professionals working in a demanding
          environment, not servants. A host who likes you will quietly
          upgrade your experience in ways you will not even notice — better
          positioning, faster service, complimentary touches. A host who
          finds you rude or entitled will provide exactly the minimum
          required service and nothing more.
        </p>

        <p>
          Use their name. Make eye contact when ordering. Say please and
          thank you. These are not revolutionary concepts, yet the number of
          people who abandon basic courtesy the moment they sit at an
          expensive table is remarkable. Your host will also be your ally if
          anything goes wrong during the evening — a lost item, a problem
          with another group, a need to change tables. Invest in that
          relationship.
        </p>

        <h2>Tipping Protocol</h2>

        <div className="info-box">
          <h4>Tipping Guide for London Clubs</h4>
          <ul>
            <li>
              <strong>Table host:</strong> &pound;20&ndash;&pound;50 in cash
              for good service. More for exceptional attention. Service charge
              is already on the bill, so this is discretionary but noticed.
            </li>
            <li>
              <strong>Bar staff:</strong> Not expected in London. Rounding up
              or leaving a pound is a courteous gesture but not obligatory.
            </li>
            <li>
              <strong>Door staff:</strong> Do not tip. This is not the custom
              in London and can appear as an attempted bribe, which creates
              the opposite of the impression you want.
            </li>
            <li>
              <strong>Cloakroom:</strong> &pound;1&ndash;&pound;2 is
              customary when collecting your coat.
            </li>
          </ul>
        </div>

        <p>
          The key distinction for international visitors: London is not Las
          Vegas. Tipping is appreciated but not assumed, and excessive tipping
          does not buy preferential treatment in the way it might elsewhere.
          What buys preferential treatment is being pleasant, respectful, and
          a guest that staff genuinely enjoy serving. For more on navigating
          London nightlife as an international visitor, see our{" "}
          <Link href="/guides/london-nightlife-international-visitors">
            international visitors&apos; guide
          </Link>
          .
        </p>

        <h2>Table Etiquette</h2>

        <p>
          When you book a table with{" "}
          <Link href="/blog/bottle-service-london-explained">
            bottle service
          </Link>
          , you are renting a small piece of real estate for the evening.
          Treat it with the same respect you would any shared social space.
        </p>

        <ul>
          <li>
            <strong>Your bottles, your table.</strong> Do not pour from
            bottles at neighbouring tables, and do not allow strangers to help
            themselves to yours. Your host will manage this if it becomes an
            issue — a quiet word to them is more effective than a
            confrontation.
          </li>
          <li>
            <strong>Guest management.</strong> If friends want to join you at
            your table, clear it with your host first. Every additional person
            affects the space and potentially the minimum spend. Surprises are
            unwelcome.
          </li>
          <li>
            <strong>Ordering rounds.</strong> Within your own group, establish
            early whether you are splitting the bill or whether one person is
            hosting. The table host needs a clear point of contact for orders
            and billing. Confusion at the end of the night about who is
            paying is genuinely embarrassing at these venues.
          </li>
          <li>
            <strong>Keep your area presentable.</strong> Your host clears
            glasses and keeps things tidy, but they cannot compensate for
            active mess. Spilled drinks, overflowing ashtrays on the terrace,
            and general disorder reflect on you and on the venue.
          </li>
        </ul>

        <h2>Behaviour in VIP Sections</h2>

        <p className="pull-quote">
          A VIP section is not a social free-for-all. It is someone&apos;s
          private space within a public venue. The rules of a private space
          apply.
        </p>

        <p>
          If you have booked a table in a VIP area, you are sharing that
          elevated space with other groups who have done the same. Respect
          their space as you would want yours respected. Do not wander into
          areas that are clearly reserved for other parties. Do not approach
          other VIP tables uninvited. If you make eye contact with people at
          another table and receive a welcoming gesture, then social
          interaction is appropriate — but the invitation must come from them.
        </p>

        <p>
          For those on general admission who can see the VIP section: do not
          attempt to enter without a booking. This seems obvious, but it
          happens constantly. Security will stop you, your host will not
          vouch for you, and the interaction creates a small scene that
          benefits nobody. Read our{" "}
          <Link href="/vip-nightlife-london">VIP nightlife guide</Link> to
          understand how the VIP system works and how to access it properly.
        </p>

        <h2>Meeting New People</h2>

        <p>
          London&apos;s club scene is social by nature, and meeting people
          is part of the experience. The etiquette is straightforward:
          read signals before acting on them. Eye contact, a smile, proximity
          on the dance floor — these are invitations. Arms crossed, turned
          shoulders, a group deep in conversation — these are not.
        </p>

        <p>
          When you do approach someone, introduce yourself normally. No
          pickup lines, no ostentatious displays, no leading with what you
          do for a living or how much you spent on your table. London&apos;s
          premium club crowd tends to be sophisticated enough to find
          these tactics transparent and tedious. Be genuinely interested,
          be yourself, and accept gracefully if the interest is not mutual.
        </p>

        <p>
          The dance floor is the most natural social space in any club.
          Dancing near someone and allowing a connection to develop
          organically is the London way. Grabbing, pulling, or forcing
          proximity is not — and at well-managed venues, security is
          trained to notice and intervene.
        </p>

        <h2>Managing Intoxication</h2>

        <p>
          There is a clear line between enjoying your evening and becoming a
          liability, and London&apos;s premium venues have a very low
          tolerance for the latter. Staff are trained to identify guests who
          have crossed the line, and intervention ranges from a quiet word to
          removal. The etiquette expectation is self-regulation — pace
          yourself, eat before you arrive, alternate alcohol with water, and
          know your limits. Being cut off by your host or asked to leave is
          not just embarrassing in the moment; at venues with membership
          elements or regular clientele, it can affect your welcome on
          future visits.
        </p>

        <h2>Knowing When to Leave</h2>

        <p>
          The best evenings end on a high note rather than trailing into a
          diminishing return. When the energy in the room starts to drop,
          when your group starts fragmenting, or when you find yourself
          staying out of inertia rather than enjoyment — that is the moment
          to close your tab, thank your host, and make a clean exit. Lingering
          past your own peak rarely improves the evening and often detracts
          from an otherwise excellent night.
        </p>

        <p>
          Practically: settle your bill inside the venue rather than creating
          a situation at the door. Arrange transport before you need it — have
          the car app open or a cab booked. Leave together as a group where
          possible. Outside, move away from the entrance rather than
          congregating on the pavement. The venue&apos;s neighbours and
          reputation depend on a quiet exit, and your cooperation is both
          noticed and appreciated.
        </p>

        <h2>The Underlying Principle</h2>

        <p>
          Every point in this guide reduces to a single principle: these
          venues exist to create an atmosphere, and your behaviour either
          contributes to that atmosphere or detracts from it. The guests who
          are welcomed back, who receive the best tables, who find doors
          opening effortlessly — they are the ones who understand that they
          are not merely consuming an experience but participating in its
          creation. Conduct yourself as someone who elevates the room, and
          the room will reward you.
        </p>

        <h2>Related Reading</h2>

        <ul>
          <li>
            <Link href="/how-london-nightclub-door-policy-works">
              How London Nightclub Door Policy Works
            </Link>
          </li>
          <li>
            <Link href="/london-club-dress-code-guide">
              London Club Dress Code Guide
            </Link>
          </li>
          <li>
            <Link href="/vip-nightlife-london">
              VIP Nightlife London: The Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/guides/london-nightlife-international-visitors">
              London Nightlife for International Visitors
            </Link>
          </li>
          <li>
            <Link href="/blog/bottle-service-london-explained">
              Bottle Service in London Explained
            </Link>
          </li>
        </ul>
      </ArticleLayout>
    </>
  );
}
