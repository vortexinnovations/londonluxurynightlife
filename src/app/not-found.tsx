import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
          Page Not Found
        </h1>
        <p className="text-warm-gray leading-relaxed mb-8">
          This page may have moved or no longer exists. Let us point you
          in the right direction.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gold/10 border border-gold/30 text-gold text-sm font-medium rounded hover:bg-gold/20 transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/london-nightlife-guide"
            className="text-sm text-warm-gray hover:text-gold transition-colors"
          >
            Nightlife Guide &rarr;
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-dark-border">
          <p className="text-xs text-warm-gray mb-3">Popular pages</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/luxury-nightclubs-london" className="text-xs text-warm-gray hover:text-gold transition-colors px-2 py-1">
              Luxury Clubs
            </Link>
            <Link href="/celebrity-nightclubs-london" className="text-xs text-warm-gray hover:text-gold transition-colors px-2 py-1">
              Celebrity Clubs
            </Link>
            <Link href="/london-club-dress-code-guide" className="text-xs text-warm-gray hover:text-gold transition-colors px-2 py-1">
              Dress Code
            </Link>
            <Link href="/contact" className="text-xs text-warm-gray hover:text-gold transition-colors px-2 py-1">
              Plan Your Night
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
