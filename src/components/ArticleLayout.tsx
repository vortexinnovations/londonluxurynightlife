import WhatsAppCTA from "./WhatsAppCTA";
import RelatedGuides from "./RelatedGuides";
import { WA_GENERAL_MESSAGE } from "@/lib/constants";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ctaMessage?: string;
  ctaLabel?: string;
}

export default function ArticleLayout({
  title,
  subtitle,
  children,
  ctaMessage = WA_GENERAL_MESSAGE,
  ctaLabel = "Plan Your Night",
}: ArticleLayoutProps) {
  return (
    <>
      <article className="pt-28 lg:pt-36 pb-16">
        <header className="max-w-3xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 article-content">
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
