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
    <div className="mt-16 pt-10 border-t border-dark-border">
      <h3 className="eyebrow mb-6">Essential Guides</h3>
      <div>
        {guides.map((guide, i) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex items-baseline justify-between gap-4 py-3.5 border-b border-dark-border hover:bg-gold-wash transition-[background-color,border-color] duration-250 hover:border-hairline-gold"
          >
            <span className="flex items-baseline gap-4 min-w-0">
              <span className="index-num text-xs flex-shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif italic text-lg text-foreground group-hover:text-gold-light group-hover:translate-x-2 transition-[color,transform] duration-250 ease-[var(--ease-lux)]">
                {guide.label}
              </span>
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold flex-shrink-0">
              Read &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
