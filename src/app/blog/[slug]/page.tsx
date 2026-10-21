import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import { FAQSchema } from "@/components/SchemaMarkup";
import { getMergedPostBySlug, getMergedPosts } from "@/lib/blog-data";
import { bodyFaqs } from "@/lib/body-faqs";
import { SITE_NAME, SITE_URL, TABLE_NUMBER } from "@/lib/constants";
import { postImage } from "@/lib/images";
import { fitTitle } from "@/lib/metadata";
import { legacyPosts } from "@/legacy-posts";

// Every post: the site's original posts (one module each in src/legacy-posts)
// and posts published through the dashboard content API (Supabase
// site_posts), a database row superseding the original with the same slug.
// Prerendered at build and refreshed by /api/revalidate when the content API
// publishes; this daily regeneration is only a safety net.
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getMergedPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMergedPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  const image = postImage(post);
  if (post.source !== "db") {
    const metadata = (await legacyPosts[slug]?.())?.metadata ?? {};
    // The original modules carry no dates: add the post's dates and category
    // from blog-data as article:* tags (read by the content API's editor).
    // Every module sets its own canonical and og:url; the fallbacks keep a
    // post from ever having none now that the root layout sets neither.
    // Nor do they set an image: the post's hero (lib/images.ts) is its
    // og:image, which Next also uses for twitter:image.
    return {
      ...metadata,
      ...(typeof metadata.title === "string" ? { title: fitTitle(metadata.title) } : {}),
      alternates: metadata.alternates ?? { canonical: url },
      openGraph: {
        ...(image ? { images: [{ url: image, alt: post.imageAlt ?? post.title }] } : {}),
        ...metadata.openGraph,
        url: metadata.openGraph?.url ?? url,
        type: "article",
        publishedTime: post.publishDate,
        modifiedTime: post.modifiedDate,
        section: post.category,
      },
    };
  }
  return {
    title: fitTitle(post.metaTitle),
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      section: post.category,
      ...(image ? { images: [{ url: image, alt: post.imageAlt ?? post.title }] } : {}),
    },
    alternates: { canonical: url },
  };
}

// Post bodies may link WhatsApp with any number; send them to the live one.
const withLiveWhatsApp = (md: string) =>
  md.replace(/(wa\.me\/|api\.whatsapp\.com\/send\?phone=)\d+/g, `$1${TABLE_NUMBER}`);

// Each table sits in a scroll box (styled in globals.css) so a wide table
// scrolls sideways on mobile instead of widening the page.
marked.use({
  hooks: {
    postprocess: (html) =>
      html.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, "</table></div>"),
  },
});

// Database posts carry the editor byline and Person authorship the site's
// recent posts use (the content API rejects a byline in the body).
const EDITOR = { name: "Isabella Marsh", jobTitle: "Luxury Lifestyle Editor", url: `${SITE_URL}/about-the-editor/` };

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Posts about clubs that run no guestlist: no guestlist button. */
const NO_GUESTLIST_POSTS = new Set([
  "the-box-london-what-to-expect",
  "scotch-of-st-james-history-legacy",
  "beat-london-sound-system-fitzrovia",
]);

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getMergedPostBySlug(slug);
  if (!post) notFound();

  if (post.source !== "db") {
    const legacy = await legacyPosts[slug]?.();
    if (!legacy) notFound();
    const LegacyPost = legacy.default;
    return <LegacyPost />;
  }

  const body = post.bodyMd ?? "";
  const faqs = bodyFaqs(body);
  const image = postImage(post);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: { "@type": "Person", ...EDITOR },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(image ? { image: image.startsWith("/") ? `${SITE_URL}${image}` : image } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <ArticleLayout
        title={post.title}
        subtitle={post.excerpt}
        heroImage={image}
        heroAlt={post.imageAlt}
        noGuestlist={NO_GUESTLIST_POSTS.has(slug)}
      >
        <p className="text-sm text-warm-gray mb-1">
          By <Link href="/about-the-editor">{EDITOR.name}</Link>, {EDITOR.jobTitle}
        </p>
        <p className="text-sm text-warm-gray mb-8">Last updated: {longDate(post.modifiedDate)}</p>
        <div
          className="db-body"
          dangerouslySetInnerHTML={{ __html: marked.parse(withLiveWhatsApp(body), { async: false }) }}
        />
      </ArticleLayout>
    </>
  );
}
