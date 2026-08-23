import TurndownService from "turndown";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

/**
 * Serves a text/markdown rendition of any page on the site.
 *
 * Requests never hit this path directly: src/proxy.ts rewrites page
 * requests here when the Accept header prefers text/markdown
 * (acceptmarkdown.com content negotiation). The public URL stays the
 * page's own URL, so responses carry `Vary: Accept`.
 */

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

function turndown(): TurndownService {
  const service = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });
  service.remove(["script", "style", "noscript"]);
  service.addRule("drop-svg", {
    filter: (node) => node.nodeName.toLowerCase() === "svg",
    replacement: () => "",
  });
  return service;
}

function notFoundMarkdown(path: string): string {
  return `# 404 — Page Not Found

\`${path}\` does not exist on ${SITE_NAME}.

## Where to look next

- [Homepage](${SITE_URL}/)
- [Sitemap (every page)](${SITE_URL}/sitemap.xml)
- [llms.txt (machine-readable site guide)](${SITE_URL}/llms.txt)
- [All luxury clubs](${SITE_URL}/luxury-nightclubs-london)
- [London nightlife guide](${SITE_URL}/london-nightlife-guide)
- [Blog index](${SITE_URL}/blog)
- [Contact / plan a night](${SITE_URL}/contact)
`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const segments = path.join("/");
  const pagePath = segments === "index" ? "/" : `/${segments}`;
  const origin = new URL(request.url).origin;

  const upstream = await fetch(`${origin}${pagePath}`, {
    headers: { Accept: "text/html" },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response(notFoundMarkdown(pagePath), {
      status: upstream.status === 404 ? 404 : upstream.status,
      headers: MARKDOWN_HEADERS,
    });
  }

  const html = await upstream.text();
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const body = turndown().turndown(main).trim();

  const canonical = `${SITE_URL}${pagePath === "/" ? "" : pagePath}`;
  const markdown = `${body}

---

*Markdown rendition of ${canonical} — HTML available at the same URL. Site guide for agents: ${SITE_URL}/llms.txt*
`;

  return new Response(markdown, { status: 200, headers: MARKDOWN_HEADERS });
}
