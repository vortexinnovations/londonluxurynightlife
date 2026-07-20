import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";
import { WA_GENERAL_MESSAGE } from "@/lib/constants";
import { BLOG_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "London Nightlife Blog | Insider Tips, Guides & Club Reviews",
  description:
    "Expert articles on London's luxury nightlife scene. Insider tips on Mayfair clubs, bottle service costs, dress codes, birthday planning, and everything you need for a world-class night out.",
  keywords: [
    "London nightlife blog",
    "Mayfair club guide",
    "London club tips",
    "luxury nightlife advice",
    "London nightlife insider",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: "London Nightlife Blog | Insider Tips, Guides & Club Reviews",
    description:
      "Expert articles on London's luxury nightlife scene. Insider tips, real costs, and everything you need for a world-class night out.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const categories = [...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <div className="pt-28 lg:pt-36 pb-16">
        {/* Header */}
        <header className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 text-center">
          <span className="eyebrow justify-center mb-6">The Journal</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-normal text-cream leading-[1.05] mb-6">
            The London Nightlife <span className="accent-word">Blog</span>
          </h1>
          <p className="font-prose italic text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Insider knowledge, honest advice, and everything you need to navigate
            London&apos;s luxury club scene with confidence.
          </p>
        </header>

        {/* Category filters */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-14">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-warm-gray border border-dark-border"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Featured post */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              {BLOG_IMAGES[featured.slug] && (
                <div className="relative aspect-[21/9] overflow-hidden">
                  <Image
                    src={BLOG_IMAGES[featured.slug]}
                    alt={featured.title}
                    fill
                    className="editorial-img object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[var(--ease-lux)]"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </div>
              )}
              <div className="pt-6 border-t border-dark-border mt-[1px]">
                <div className="flex items-center gap-5 mb-5">
                  <span className="eyebrow">Featured</span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-normal text-cream group-hover:text-gold-light transition-colors duration-200 leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="font-prose text-lg text-warm-gray leading-relaxed max-w-2xl mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-gold">
                  Read article
                  <span
                    aria-hidden
                    className="group-hover:translate-x-1 transition-transform duration-200 ease-[var(--ease-lux)]"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Post grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  {BLOG_IMAGES[post.slug] && (
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={BLOG_IMAGES[post.slug]}
                        alt={post.title}
                        fill
                        className="editorial-img object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[var(--ease-lux)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    </div>
                  )}
                  <div className="pt-4 border-t border-dark-border mt-[1px]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
                        {post.category}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-medium text-foreground group-hover:text-gold-light transition-colors duration-200 mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="font-prose text-sm text-warm-gray leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
                      Read more
                      <span
                        aria-hidden
                        className="group-hover:translate-x-1 transition-transform duration-200 ease-[var(--ease-lux)]"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-24 text-center">
          <Reveal>
            <div className="border-t border-dark-border pt-14">
              <span className="eyebrow justify-center mb-6">The Concierge</span>
              <p className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-cream leading-tight mb-4">
                Done reading? Let us plan your <span className="accent-word">night</span>.
              </p>
              <p className="font-prose italic text-lg text-warm-gray leading-relaxed mb-8">
                Our team knows every club on this list personally. Tell us what you&apos;re looking for.
              </p>
              <WhatsAppCTA message={WA_GENERAL_MESSAGE} label="Speak to Our Team" />
            </div>
          </Reveal>
        </div>
      </div>

      <WhatsAppCTA message={WA_GENERAL_MESSAGE} label="Plan Your Night" variant="sticky" />
    </>
  );
}
