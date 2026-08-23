import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Markdown content negotiation (acceptmarkdown.com).
 *
 * Requests that prefer `text/markdown` over `text/html` (per Accept
 * q-values) are rewritten to the /api/markdown handler, which serves a
 * markdown rendition of the same URL with `Content-Type: text/markdown`
 * and `Vary: Accept`. Everything else passes through untouched.
 */

/** Parse an Accept header and return the q-value for a media type. */
function qValue(accept: string, type: string): number {
  let best = -1;
  for (const part of accept.split(",")) {
    const [rawType, ...params] = part.trim().split(";");
    const mediaType = rawType.trim().toLowerCase();
    if (mediaType !== type && mediaType !== "*/*" && mediaType !== type.split("/")[0] + "/*") {
      continue;
    }
    let q = 1;
    for (const p of params) {
      const [k, v] = p.trim().split("=");
      if (k === "q") {
        const parsed = parseFloat(v);
        if (!Number.isNaN(parsed)) q = parsed;
      }
    }
    // Exact match outranks wildcard at equal q
    const specificity = mediaType === type ? 2 : mediaType.endsWith("/*") && mediaType !== "*/*" ? 1 : 0;
    const score = q + specificity * 0.0001;
    if (score > best) best = score;
  }
  return best < 0 ? 0 : best;
}

function prefersMarkdown(accept: string | null): boolean {
  if (!accept || !accept.toLowerCase().includes("text/markdown")) return false;
  const md = qValue(accept, "text/markdown");
  const html = qValue(accept, "text/html");
  return md > 0 && md >= html;
}

export function proxy(request: NextRequest) {
  if (
    (request.method === "GET" || request.method === "HEAD") &&
    prefersMarkdown(request.headers.get("accept"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${url.pathname === "/" ? "/index" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  // Pages only: skip API routes, Next internals, the image proxy, and any
  // path with a file extension (sitemap.xml, robots.txt, llms.txt, assets).
  matcher: ["/((?!api|_next|gallery|.*\\..*).*)"],
};
