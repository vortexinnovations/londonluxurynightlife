import Link from "next/link";

interface GuideLink {
  href: string;
  label: string;
}

const defaultGuides: GuideLink[] = [
  { href: "/luxury-nightclubs-london", label: "Luxury Nightclubs London" },
  { href: "/london-club-dress-code-guide", label: "London Club Dress Code Guide" },
  { href: "/guestlist-vs-table-booking-london", label: "Guestlist vs Table Booking" },
  { href: "/how-london-nightclub-door-policy-works", label: "How London Door Policy Works" },
  { href: "/london-nightlife-guide", label: "London Nightlife Guide 2026" },
];

export default function RelatedGuides({ guides = defaultGuides }: { guides?: GuideLink[] }) {
  return (
    <div className="mt-12 pt-8 border-t border-dark-border">
      <h3 className="font-serif text-lg font-bold text-cream mb-4">
        Essential Guides
      </h3>
      <div className="flex flex-wrap gap-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="text-sm px-3 py-1.5 bg-dark-surface border border-dark-border rounded text-warm-gray hover:text-gold hover:border-gold/30 transition-colors"
          >
            {guide.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
