export const WHATSAPP_NUMBER = "447880662708";
export const SITE_URL = "https://londonluxurynightlife.com";
export const SITE_NAME = "London Luxury Nightlife";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
}

export const clubs: Club[] = [
  {
    name: "Tape London",
    slug: "tape-london",
    tagline: "Where music industry royalty meets Mayfair exclusivity",
    location: "Hanover Square, Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB, Commercial",
    tablesFrom: "£1,500",
    openingNights: "Thursday – Saturday",
    dressCode: "Smart & stylish. No sportswear, no trainers.",
    shortDescription: "An exclusive members' club on Hanover Square favoured by celebrities and music industry insiders. Tape London is where A-listers come to let their guard down.",
  },
  {
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    tagline: "London's most theatrical nightlife experience",
    location: "Ganton Street, Soho",
    area: "Soho",
    musicStyle: "Hip-Hop, RnB",
    tablesFrom: "£1,000",
    openingNights: "Wednesday – Saturday",
    dressCode: "Smart glamorous. Dress to impress.",
    shortDescription: "A circus-themed nightclub where live performers, fire breathers, and contortionists share the floor with celebrity clientele. Nothing in London compares.",
  },
  {
    name: "The London Reign",
    slug: "the-london-reign",
    tagline: "Piccadilly's most extravagant showclub",
    location: "Piccadilly, West End",
    area: "West End",
    musicStyle: "Mixed, Commercial, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Friday – Saturday",
    dressCode: "Smart and glamorous. Heels for ladies.",
    shortDescription: "An extravagant showclub on Piccadilly featuring aerial acts, live performances, and a crowd that comes as much for the spectacle as the party.",
  },
  {
    name: "TABU London",
    slug: "tabu-london",
    tagline: "Mayfair's underground Japanese-inspired nightclub",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB",
    tablesFrom: "£1,000",
    openingNights: "Thursday – Saturday",
    dressCode: "Smart. No sportswear or casual wear.",
    shortDescription: "A Japanese-inspired underground venue in the heart of Mayfair. TABU blends Eastern aesthetics with West End energy for something genuinely different.",
  },
  {
    name: "Libertine",
    slug: "libertine",
    tagline: "Futuristic sophistication in the heart of Mayfair",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Hip-Hop, RnB, Commercial",
    tablesFrom: "£1,000",
    openingNights: "Wednesday – Saturday",
    dressCode: "Smart and fashionable. No trainers.",
    shortDescription: "A sophisticated, futuristic venue that attracts Mayfair's most fashionable crowd. Libertine is where cutting-edge design meets classic nightclub energy.",
  },
  {
    name: "Luxx Club London",
    slug: "luxx-club-london",
    tagline: "Mayfair's electric light show experience",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Open Format, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Friday – Saturday",
    dressCode: "Smart. No casual wear.",
    shortDescription: "A premium Mayfair venue where LED installations and electric light shows create an immersive visual experience that transforms the night.",
  },
  {
    name: "Maddox",
    slug: "maddox",
    tagline: "Where Mayfair dining meets late-night house music",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "House, Deep House",
    tablesFrom: "£1,000",
    openingNights: "Tuesday – Saturday",
    dressCode: "Smart elegant. Jacket preferred for gentlemen.",
    shortDescription: "A restaurant-nightclub hybrid in Mayfair offering Italian dining followed by house music into the early hours. The perfect dinner-to-club transition.",
  },
  {
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    tagline: "A historic Mayfair club with legendary credentials",
    location: "Mason's Yard, Mayfair",
    area: "Mayfair",
    musicStyle: "Mixed, Rock, Indie, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Thursday – Saturday",
    dressCode: "Smart but not overly formal. Individuality welcomed.",
    shortDescription: "One of London's most storied nightclubs, dating back to the 1960s when Jimi Hendrix played here. Scotch of St James carries decades of legend.",
  },
  {
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    tagline: "Mayfair's stylish two-floor nightclub",
    location: "Swallow Street, Mayfair",
    area: "Mayfair",
    musicStyle: "House, Hip-Hop",
    tablesFrom: "£1,000",
    openingNights: "Wednesday – Saturday",
    dressCode: "Smart and stylish. No sportswear.",
    shortDescription: "A stylish two-floor venue on Swallow Street offering house downstairs and hip-hop upstairs. Cuckoo Club is a Mayfair staple for good reason.",
  },
  {
    name: "Dear Darling",
    slug: "dear-darling",
    tagline: "Opulent cocktails and late nights in Mayfair",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Mixed, Lounge, House",
    tablesFrom: "£1,000",
    openingNights: "Wednesday – Saturday",
    dressCode: "Elegant. Smart dress essential.",
    shortDescription: "An opulent Mayfair bar draped in chandeliers and velvet, where world-class cocktails give way to late-night revelry in the most elegant setting.",
  },
  {
    name: "BEAT London",
    slug: "beat-london",
    tagline: "Pure nightclub energy on Margaret Street",
    location: "Margaret Street, Fitzrovia",
    area: "Fitzrovia",
    musicStyle: "Mixed, Hip-Hop, House, Electronic",
    tablesFrom: "£1,000",
    openingNights: "Friday – Saturday",
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
    openingNights: "Friday – Saturday, special events",
    dressCode: "Relaxed but smart. Club-appropriate.",
    shortDescription: "An iconic super club with multiple rooms, a world-class sound system, and three decades of electronic music heritage. Ministry of Sound needs no introduction.",
  },
  {
    name: "Lio Club London",
    slug: "lio-club-london",
    tagline: "Gourmet dining meets glamorous nightlife",
    location: "Mayfair",
    area: "Mayfair",
    musicStyle: "Mixed, Commercial, House",
    tablesFrom: "£1,000",
    openingNights: "Thursday – Saturday",
    dressCode: "Smart glamorous. High-end evening wear.",
    shortDescription: "An elegant Mayfair venue combining gourmet dining with live entertainment and a glamorous party atmosphere. Lio brings the spirit of Ibiza to London.",
  },
];
