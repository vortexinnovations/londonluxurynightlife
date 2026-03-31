import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";
import RelatedGuides from "./RelatedGuides";
import { WA_GENERAL_MESSAGE } from "@/lib/constants";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroAlt?: string;
  children: React.ReactNode;
  ctaMessage?: string;
  ctaLabel?: string;
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
        {heroImage ? (
          <header className="relative h-[50vh] min-h-[400px] flex items-end justify-center overflow-hidden">
            <Image
              src={heroImage}
              alt={heroAlt || title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pb-12 lg:pb-16 text-center">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4 drop-shadow-lg">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow">
                  {subtitle}
                </p>
              )}
            </div>
          </header>
        ) : (
          <header className="pt-28 lg:pt-36 max-w-3xl mx-auto px-4 sm:px-6 mb-12 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </header>
        )}

        <div className={`max-w-3xl mx-auto px-4 sm:px-6 article-content ${heroImage ? "pt-12" : ""}`}>
          {children}
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RelatedGuides />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 text-center">
          <div className="border-t border-dark-border pt-12">
            <p className="font-serif text-xl text-cream mb-6">
              Ready to experience London&apos;s luxury nightlife?
            </p>
            <WhatsAppCTA message={ctaMessage} label={ctaLabel} />
          </div>
        </div>
      </article>

      <WhatsAppCTA message={ctaMessage} label={ctaLabel} variant="sticky" />
    </>
  );
}
