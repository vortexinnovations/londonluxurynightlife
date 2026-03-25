import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { WA_GENERAL_MESSAGE } from "@/lib/constants";

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
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <div className="pt-28 lg:pt-36 pb-16">
        {/* Header */}
        <header className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
            The London Nightlife Blog
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Insider knowledge, honest advice, and everything you need to navigate
            London&apos;s luxury club scene with confidence.
          </p>
        </header>

        {/* Category filters */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-warm-gray bg-dark-surface border border-dark-border rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Featured post */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-gold/30 transition-all"
          >
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  Featured
                </span>
                <span className="text-xs text-warm-gray">{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-cream group-hover:text-gold transition-colors mb-4">
                {featured.title}
              </h2>
              <p className="text-warm-gray leading-relaxed max-w-2xl mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                Read article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Post grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-gold/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-gold/70">
                    {post.category}
                  </span>
                  <span className="text-xs text-warm-gray">{post.readTime}</span>
                </div>
                <h2 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm">
                  Read more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-20 text-center">
          <div className="border-t border-dark-border pt-12">
            <p className="font-serif text-xl text-cream mb-3">
              Done reading? Let us plan your night.
            </p>
            <p className="text-warm-gray mb-6">
              Our team knows every club on this list personally. Tell us what you&apos;re looking for.
            </p>
            <WhatsAppCTA message={WA_GENERAL_MESSAGE} label="Speak to Our Team" />
          </div>
        </div>
      </div>

      <WhatsAppCTA message={WA_GENERAL_MESSAGE} label="Plan Your Night" variant="sticky" />
    </>
  );
}
