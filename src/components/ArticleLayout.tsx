import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";
import RelatedGuides from "./RelatedGuides";
import { WA_GENERAL_MESSAGE, WA_GUESTLIST_MESSAGE, GUESTLIST_NUMBER } from "@/lib/constants";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroAlt?: string;
  children: React.ReactNode;
  ctaMessage?: string;
  ctaLabel?: string;
}

/** Italicize the final word of a headline — the typographic signature */
function Headline({ text }: { text: string }) {
  const words = text.trim().split(" ");
  if (words.length < 2) return <>{text}</>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span className="accent-word">{last}</span>
    </>
  );
}

export default function ArticleLayout({
  title,
  subtitle,
  heroImage,
  heroAlt,
  children,
  ctaMessage = WA_GENERAL_MESSAGE,
  ctaLabel = "Plan Your Night",
}: ArticleLayoutProps) {
  return (
    <>
      <article>
        {/* Masthead-order header: eyebrow → headline → dek → rule → plate */}
        <header className="pt-28 lg:pt-40 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow justify-center mb-6">London &middot; After Dark</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-normal text-cream leading-[1.05] tracking-[-0.01em] mb-6">
            <Headline text={title} />
          </h1>
          {subtitle && (
            <p className="font-prose italic text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        {heroImage ? (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
            <div className="h-px bg-hairline-gold mb-12" />
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={heroImage}
                alt={heroAlt || title}
                fill
                className="editorial-img object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
            <div className="h-px bg-hairline-gold" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 article-content pt-14">
          {children}
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RelatedGuides />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-20 text-center">
          <div className="border-t border-dark-border pt-14">
            <span className="eyebrow justify-center mb-5">Tables &middot; Guestlists &middot; Advice</span>
            <p className="font-serif text-2xl text-cream mb-8 leading-snug">
              Ready to experience London&apos;s luxury <span className="accent-word">nightlife</span>?
            </p>
            <WhatsAppCTA message={ctaMessage} label={ctaLabel} />
            <div className="mt-6">
              <WhatsAppCTA
                message={WA_GUESTLIST_MESSAGE}
                label="Or join the guestlist"
                variant="inline"
                number={GUESTLIST_NUMBER}
              />
            </div>
          </div>
        </div>
      </article>

      <WhatsAppCTA message={ctaMessage} label={ctaLabel} variant="sticky" />
    </>
  );
}
