import Link from "next/link";
import { clubs, WA_GENERAL_MESSAGE } from "@/lib/constants";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-dark-border mt-24 relative overflow-hidden">
      {/* Conversion row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] text-cream leading-tight max-w-md">
            Still deciding? Message the <span className="accent-word">desk</span>.
          </h2>
          <WhatsAppCTA message={WA_GENERAL_MESSAGE} label="Book via WhatsApp" />
        </div>
      </div>

      <div className="h-px bg-hairline-gold max-w-7xl mx-auto" />

      {/* Colophon columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-xl text-cream mb-3">
              London Luxury <span className="italic">Nightlife</span>
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed mb-4">
              The insider&apos;s guide to London&apos;s most exclusive clubs and luxury nightlife experiences. Curated for discerning visitors and locals alike.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-medium text-gold-dark uppercase tracking-[0.35em] mb-5">Guides</h4>
            <ul className="space-y-3">
              <li><Link href="/luxury-nightclubs-london" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Luxury Nightclubs London</Link></li>
              <li><Link href="/london-nightlife-guide" className="text-[13px] text-warm-gray hover:text-cream transition-colors">London Nightlife Guide</Link></li>
              <li><Link href="/celebrity-nightclubs-london" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Celebrity Nightclubs</Link></li>
              <li><Link href="/guides/complete-guide-london-luxury-nightlife" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Complete Luxury Guide</Link></li>
              <li><Link href="/guides/london-nightlife-international-visitors" className="text-[13px] text-warm-gray hover:text-cream transition-colors">International Visitors</Link></li>
              <li><Link href="/guides/dinner-and-nightclub-london" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Dinner &amp; Nightclub</Link></li>
              <li><Link href="/guides/corporate-entertainment-london" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Corporate Entertainment</Link></li>
              <li><Link href="/london-club-dress-code-guide" className="text-[13px] text-warm-gray hover:text-cream transition-colors">What to Wear</Link></li>
              <li><Link href="/blog" className="text-[13px] text-warm-gray hover:text-cream transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-medium text-gold-dark uppercase tracking-[0.35em] mb-5">Club Reviews</h4>
            <ul className="space-y-3">
              {clubs.slice(0, 7).map((club) => (
                <li key={club.slug}>
                  <Link href={`/clubs/${club.slug}`} className="text-[13px] text-warm-gray hover:text-cream transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-medium text-gold-dark uppercase tracking-[0.35em] mb-5">More Clubs</h4>
            <ul className="space-y-3">
              {clubs.slice(7).map((club) => (
                <li key={club.slug}>
                  <Link href={`/clubs/${club.slug}`} className="text-[13px] text-warm-gray hover:text-cream transition-colors">
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-xs text-warm-gray/70">
            &copy; {new Date().getFullYear()} London Luxury Nightlife. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/about" className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray hover:text-cream transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray hover:text-cream transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray hover:text-cream transition-colors">
              Privacy
            </Link>
            <Link href="/guides/complete-guide-london-luxury-nightlife" className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray hover:text-cream transition-colors">
              Nightlife Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Ghost wordmark — masthead as architecture */}
      <div aria-hidden className="pointer-events-none select-none -mb-[0.28em] leading-none text-center whitespace-nowrap overflow-hidden">
        <span className="font-serif text-[clamp(3rem,10vw,9rem)] text-foreground/[0.06]">
          London Luxury <span className="italic">Nightlife</span>
        </span>
      </div>
    </footer>
  );
}
