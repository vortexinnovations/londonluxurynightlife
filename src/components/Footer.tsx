import Link from "next/link";
import { clubs } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold text-cream mb-2">
              London Luxury Nightlife
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed mb-4">
              The insider&apos;s guide to London&apos;s most exclusive clubs and luxury nightlife experiences. Curated for discerning visitors and locals alike.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">Guides</h4>
            <ul className="space-y-2.5">
              <li><Link href="/guides/complete-guide-london-luxury-nightlife" className="text-sm text-warm-gray hover:text-gold transition-colors">Complete Nightlife Guide</Link></li>
              <li><Link href="/guides/london-nightlife-international-visitors" className="text-sm text-warm-gray hover:text-gold transition-colors">International Visitors</Link></li>
              <li><Link href="/guides/dinner-and-nightclub-london" className="text-sm text-warm-gray hover:text-gold transition-colors">Dinner &amp; Nightclub</Link></li>
              <li><Link href="/guides/celebrity-clubs-london" className="text-sm text-warm-gray hover:text-gold transition-colors">Celebrity Clubs</Link></li>
              <li><Link href="/guides/corporate-entertainment-london" className="text-sm text-warm-gray hover:text-gold transition-colors">Corporate Entertainment</Link></li>
              <li><Link href="/guides/what-to-wear-london-clubs" className="text-sm text-warm-gray hover:text-gold transition-colors">What to Wear</Link></li>
              <li><Link href="/blog" className="text-sm text-warm-gray hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">Club Reviews</h4>
            <ul className="space-y-2.5">
              {clubs.slice(0, 7).map((club) => (
                <li key={club.slug}>
                  <Link href={`/clubs/${club.slug}`} className="text-sm text-warm-gray hover:text-gold transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">More Clubs</h4>
            <ul className="space-y-2.5">
              {clubs.slice(7).map((club) => (
                <li key={club.slug}>
                  <Link href={`/clubs/${club.slug}`} className="text-sm text-warm-gray hover:text-gold transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} London Luxury Nightlife. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-warm-gray hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/guides/complete-guide-london-luxury-nightlife" className="text-xs text-warm-gray hover:text-gold transition-colors">
              Nightlife Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
