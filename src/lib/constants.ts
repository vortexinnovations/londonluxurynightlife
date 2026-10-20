// Set NEXT_PUBLIC_TABLE_NUMBER / NEXT_PUBLIC_GUESTLIST_NUMBER on Vercel to
// override these (redeploy required — values are inlined at build time).
export const TABLE_NUMBER =
  process.env.NEXT_PUBLIC_TABLE_NUMBER || "447880662708";
export const GUESTLIST_NUMBER =
  process.env.NEXT_PUBLIC_GUESTLIST_NUMBER || "447348644054";
export const SITE_URL = "https://londonluxurynightlife.com";
export const SITE_NAME = "London Luxury Nightlife";

export function whatsappLink(message: string, number: string = TABLE_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function guestlistLink(message: string = WA_GUESTLIST_MESSAGE): string {
  return whatsappLink(message, GUESTLIST_NUMBER);
}

export const WA_GUESTLIST_MESSAGE = `Hi, I found you on londonluxurynightlife.com and I'd like to join the guestlist. Here are my details:\n\nClub:\nDate:\nGroup size (girls/guys):\nArrival time:`;

export const WA_GENERAL_MESSAGE = `Hi, I found you on londonluxurynightlife.com and I'd like to plan a night out. Here are my details:\n\nDate(s) I'll be in London:\nGroup size:\nWhat kind of night I'm looking for:\nBudget:\nAny preferences:`;

export const WA_CORPORATE_MESSAGE = `Hi, I found you on londonluxurynightlife.com and I'd like to arrange a corporate/client entertainment evening. Here are my details:\n\nCompany:\nDate:\nNumber of guests:\nBudget:\nType of evening (dinner + club / club only / other):\nAny specific requirements:`;

export function waClubMessage(clubName: string): string {
  return `Hi, I read your review of ${clubName} on londonluxurynightlife.com and I'd like to book. Here are my details:\n\nDate:\nGroup size:\nBudget:\nAny preferences:`;
}

export interface Club {
  name: string;
  slug: string;
  tagline: string;
  location: string;
  area: string;
  musicStyle: string;
  tablesFrom: string;
  openingNights: string;
  dressCode: string;
  shortDescription: string;
  /** "rebranded": the same venue trading under a new name. */
  status?: "open" | "closed" | "rebranded";
  /** Rebranded venues: the old name people still search for. */
  formerName?: string;
  /** Closed or rebranded venues: the venue now at that address (owner-confirmed). */
  successor?: string;
  /** The successor's page on this site, when the site covers it. */
  successorSlug?: string;
  /**
   * Open clubs that trade under a new name: the name they used before. The
   * club page shows it in the title, as a "Formerly ..." line under the H1 and
   * as the JSON-LD alternateName; it does not change the open-club layout.
   */
  previousName?: string;
}

/** Active, currently open venues — shown in all listings and navigation */
export const clubs: Club[] = [
  {
    name: "Tape London",
    slug: "tape-london",
    tagline: "Where music industry royalty meets Mayfair exclusivity",
    location: "17 Hanover Square, Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB, Commercial",
    tablesFrom: "£1,500",
    openingNights: "Tuesday, Friday, Saturday and Sunday",
    dressCode: "Smart & stylish. No sportswear, no trainers.",
    shortDescription: "An exclusive members' club on Hanover Square favoured by celebrities and music industry insiders. Tape London is where A-listers come to let their guard down.",
  },
  {
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    tagline: "London's most theatrical nightlife experience",
    location: "15-21 Ganton Street, Soho",
    area: "Soho",
    musicStyle: "Hip-Hop, RnB",
    tablesFrom: "£1,000",
    openingNights: "Monday, Wednesday, Friday and Saturday",
    dressCode: "Smart glamorous. Dress to impress.",
    shortDescription: "A circus-themed nightclub where live performers, fire breathers, and contortionists share the floor with celebrity clientele. Nothing in London compares.",
  },
  {
    name: "Reign London",
    slug: "reign-london",
    tagline: "Piccadilly's most extravagant showclub",
    location: "Piccadilly, West End",
    area: "West End",
    musicStyle: "Mixed, Commercial, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Tuesday, Thursday, Friday and Saturday",
    dressCode: "Smart and glamorous. Heels for ladies.",
    shortDescription: "An extravagant showclub on Piccadilly featuring aerial acts, live performances, and a crowd that comes as much for the spectacle as the party.",
  },
  {
    name: "Rumour",
    slug: "rumour-london",
    tagline: "One intimate red room on Dover Street, and no cameras on the floor",
    location: "1 Dover Street, Mayfair",
    area: "Mayfair",
    musicStyle: "Open Format, Hip-Hop, RnB, House",
    tablesFrom: "£1,000",
    openingNights: "Wednesday to Saturday",
    dressCode: "Smart and dressed up. Heels for ladies, no sportswear, no fancy dress.",
    shortDescription: "Formerly Tabu: one room of around 200 built around red velvet booths, with no photos or video on the floor. Booths from £1,000 cover entry for the whole group.",
    previousName: "Tabu",
  },
  {
    name: "99 Regent Street",
    slug: "99-regent-street",
    tagline: "Two floors behind the Swallow Street door, hip-hop above and house below",
    location: "99 Regent Street, Mayfair (entrance on Swallow Street)",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB (upstairs), House (downstairs)",
    tablesFrom: "£600",
    openingNights: "Wednesday to Saturday",
    dressCode: "Elegant and enforced. No sportswear, running trainers, shorts, caps or fancy dress.",
    shortDescription: "Formerly the Cuckoo Club: two floors at the Piccadilly Circus end of Regent Street, a 19+ door and tables from £600, spent on drinks.",
    previousName: "Cuckoo Club",
  },
  {
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    tagline: "A historic Mayfair club with legendary credentials",
    location: "13 Mason's Yard, St James's",
    area: "Mayfair",
    musicStyle: "Mixed, Rock, Indie, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Thursday to Saturday",
    dressCode: "Smart but not overly formal. Individuality welcomed.",
    shortDescription: "One of London's most storied nightclubs, dating back to the 1960s when Jimi Hendrix played here. Scotch of St James carries decades of legend.",
  },
  {
    name: "Dear Darling",
    slug: "dear-darling",
    tagline: "Opulent cocktails and late nights in Mayfair",
    location: "91 Jermyn Street, St James's",
    area: "Mayfair",
    musicStyle: "Mixed, Lounge, House",
    tablesFrom: "£1,000",
    openingNights: "Thursday to Sunday",
    dressCode: "Elegant. Smart dress essential.",
    shortDescription: "An opulent Mayfair bar draped in chandeliers and velvet, where world-class cocktails give way to late-night revelry in the most elegant setting.",
  },
  {
    name: "Maddox Club",
    slug: "maddox",
    tagline: "Where Mayfair dining meets late-night house music",
    location: "3-5 Mill Street, Mayfair",
    area: "Mayfair",
    musicStyle: "House, Deep House",
    tablesFrom: "£1,000",
    openingNights: "Thursday to Saturday",
    dressCode: "Smart elegant. Jacket preferred for gentlemen.",
    shortDescription: "A restaurant-nightclub hybrid in Mayfair offering Italian dining followed by house music into the early hours. The perfect dinner-to-club transition.",
  },
  {
    name: "The Box",
    slug: "the-box-london",
    tagline: "Soho's most daring and provocative nightclub",
    location: "Walker's Court, Soho",
    area: "Soho",
    musicStyle: "Mixed, Hip-Hop, House",
    tablesFrom: "£1,000",
    openingNights: "Wednesday to Saturday",
    dressCode: "Smart and fashionable. Creativity encouraged.",
    shortDescription: "London's most provocative and boundary-pushing nightclub, where theatrical performances push every limit and the crowd comes expecting the unexpected.",
  },
  {
    name: "Selene London",
    slug: "selene-london",
    tagline: "Sophisticated elegance just north of Oxford Circus",
    location: "4 Winsley Street, Fitzrovia",
    area: "Fitzrovia",
    musicStyle: "Hip-Hop, RnB, Commercial",
    tablesFrom: "£1,000",
    openingNights: "Thursday to Sunday",
    dressCode: "Smart and elegant. No sportswear.",
    shortDescription: "A sophisticated Fitzrovia venue, just north of Oxford Circus, offering an elevated nightlife experience with refined interiors, premium bottle service, and a discerning crowd.",
  },
  {
    name: "BEAT London",
    slug: "beat-london",
    tagline: "Pure nightclub energy on Margaret Street",
    location: "48 Margaret Street, Fitzrovia",
    area: "Fitzrovia",
    musicStyle: "Mixed, Hip-Hop, House, Electronic",
    tablesFrom: "£1,000",
    openingNights: "Thursday (select nights), Friday and Saturday",
    dressCode: "Smart casual. No sportswear.",
    shortDescription: "A high-energy nightclub on Margaret Street with one of London's best sound systems. BEAT strips away the pretence and focuses on the music.",
  },
  {
    name: "Ministry of Sound",
    slug: "ministry-of-sound",
    tagline: "London's iconic temple of electronic music",
    location: "Elephant & Castle, South London",
    area: "South London",
    musicStyle: "House, Techno, Electronic, Dance",
    tablesFrom: "£1,000",
    openingNights: "Friday to Saturday, special events",
    dressCode: "Relaxed but smart.",
    shortDescription: "An iconic super club with multiple rooms, a world-class sound system, and three decades of electronic music heritage.",
  },
];

/** Permanently closed venues — pages kept for SEO but excluded from active listings */
export const closedClubs: Club[] = [
  {
    name: "Funky Buddha",
    slug: "funky-buddha",
    tagline: "The Berkeley Street club, now closed",
    location: "Berkeley Street, Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB, Funky House",
    tablesFrom: "Closed",
    openingNights: "Permanently Closed",
    dressCode: "Smart and stylish.",
    shortDescription: "Funky Buddha has closed. Itzel now operates at its Berkeley Street address in Mayfair.",
    status: "closed",
    successor: "Itzel",
  },
  {
    name: "Luna Club London",
    slug: "luna-club-london",
    tagline: "The Mayfair club with a celestial edge, now closed",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB, Open Format",
    tablesFrom: "£1,000",
    openingNights: "Permanently Closed",
    dressCode: "Smart and stylish.",
    shortDescription: "A contemporary Mayfair club with sleek interiors and an open-format hip-hop and RnB policy. Luna Club London has closed.",
    status: "closed",
  },
  {
    name: "Libertine",
    slug: "libertine",
    tagline: "Futuristic sophistication just north of Oxford Circus",
    location: "4 Winsley Street, Fitzrovia",
    area: "Fitzrovia",
    musicStyle: "Hip-Hop, RnB, Commercial",
    tablesFrom: "£1,000",
    openingNights: "Permanently Closed",
    dressCode: "Smart and fashionable.",
    shortDescription: "A sophisticated, futuristic venue in Fitzrovia, just north of Oxford Circus, that attracted a fashionable West End crowd. Libertine has closed, and Selene now operates in its place.",
    status: "closed",
    successor: "Selene London",
    successorSlug: "selene-london",
  },
  {
    name: "Luxx Club London",
    slug: "luxx-club-london",
    tagline: "Mayfair's electric light show experience",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Open Format, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Permanently Closed",
    dressCode: "Smart.",
    shortDescription: "A premium Mayfair venue known for LED installations and electric light shows. Luxx Club has closed, and its successor is Itzel.",
    status: "closed",
    successor: "Itzel",
  },
  {
    name: "Lio Club London",
    slug: "lio-club-london",
    tagline: "Gourmet dining meets glamorous nightlife",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Mixed, Commercial, House",
    tablesFrom: "£1,000",
    openingNights: "Permanently Closed",
    dressCode: "Smart glamorous.",
    shortDescription: "An elegant Mayfair venue that combined gourmet dining with live entertainment. Lio Club London has permanently closed.",
    status: "closed",
  },
];

// Renamed venues now live in `clubs` under their new names (99 Regent Street,
// formerly Cuckoo Club; Rumour, formerly Tabu), with `previousName` set. The
// old URLs /clubs/cuckoo-club and /clubs/tabu-london redirect permanently
// (next.config.ts).
