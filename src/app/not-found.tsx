import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="eyebrow justify-center mb-6">404</p>
        <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal text-cream leading-tight mb-5">
          Page Not <span className="accent-word">Found</span>
        </h1>
        <p className="font-prose text-lg text-warm-gray leading-relaxed mb-10">
          This page may have moved or no longer exists. Let us point you
          in the right direction.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <Link href="/" className="link-luxe">
            Back to Homepage
          </Link>
          <Link
            href="/london-nightlife-guide"
            className="link-luxe !text-warm-gray hover:!text-cream"
          >
            Nightlife Guide &rarr;
          </Link>
        </div>
        <div className="mt-14 pt-8 border-t border-dark-border">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-warm-gray/70 mb-4">Popular pages</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/luxury-nightclubs-london" className="font-sans text-xs text-warm-gray hover:text-gold-light transition-colors px-1 py-1">
              Luxury Clubs
            </Link>
            <Link href="/celebrity-nightclubs-london" className="font-sans text-xs text-warm-gray hover:text-gold-light transition-colors px-1 py-1">
              Celebrity Clubs
            </Link>
            <Link href="/london-club-dress-code-guide" className="font-sans text-xs text-warm-gray hover:text-gold-light transition-colors px-1 py-1">
              Dress Code
            </Link>
            <Link href="/contact" className="font-sans text-xs text-warm-gray hover:text-gold-light transition-colors px-1 py-1">
              Plan Your Night
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
