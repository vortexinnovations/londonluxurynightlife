import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import { getMergedPostBySlug, getMergedPosts } from "@/lib/blog-data";
import { bodyFaqs } from "@/lib/body-faqs";
import { SITE_URL, TABLE_NUMBER } from "@/lib/constants";
import { postImage } from "@/lib/images";
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
  if (post.source !== "db") return (await legacyPosts[slug]?.())?.metadata ?? {};
  const url = `${SITE_URL}/blog/${slug}`;
  const image = postImage(post);
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      ...(image ? { images: [{ url: image, alt: post.imageAlt ?? post.title }] } : {}),
    },
    alternates: { canonical: url },
  };
}

// Post bodies may link WhatsApp with any number; send them to the live one.
const withLiveWhatsApp = (md: string) =>
  md.replace(/(wa\.me\/|api\.whatsapp\.com\/send\?phone=)\d+/g, `$1${TABLE_NUMBER}`);

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
  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        slug={`/blog/${slug}`}
        datePublished={post.publishDate}
        dateModified={post.modifiedDate}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <ArticleLayout
        title={post.title}
        subtitle={post.excerpt}
        heroImage={postImage(post)}
        heroAlt={post.imageAlt}
      >
        <div
          className="db-body"
          dangerouslySetInnerHTML={{ __html: marked.parse(withLiveWhatsApp(body), { async: false }) }}
        />
      </ArticleLayout>
    </>
  );
}
