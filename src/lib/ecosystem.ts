export const ECOSYSTEM = {
  bottleService: {
    url: "https://londonbottleservice.com",
    name: "London Bottle Service",
    description: "VIP table bookings and bottle service across London's best clubs",
  },
  mayfairTonight: {
    url: "https://mayfairtonight.com",
    name: "Mayfair Tonight",
    description: "Tonight's events and what's on at Mayfair's top venues",
  },
  londonBirthdayClub: {
    url: "https://londonbirthdayclub.com",
    name: "London Birthday Club",
    description: "Birthday packages and celebration planning at London clubs",
  },
  londonClubsTonight: {
    url: "https://londonclubstonight.com",
    name: "London Clubs Tonight",
    description: "What's happening tonight at London's clubs and venues",
  },
};

export function ecosystemBookingLink(clubName?: string): string {
  if (clubName) {
    return `${ECOSYSTEM.bottleService.url}`;
  }
  return ECOSYSTEM.bottleService.url;
}
