/**
 * Agent-readiness tests.
 *
 * Verifies the behaviors behind the Is Agentic audit fixes: real 404s with
 * recovery pointers, no-JS content with heading hierarchy, markdown content
 * negotiation (acceptmarkdown.com), llms.txt, metadata completeness,
 * Organization schema, and the /privacy trust page.
 *
 * Run against a server:
 *   npm run build && npx next start -p 3105 &
 *   BASE_URL=http://localhost:3105 node --test scripts/agent-readiness.test.mjs
 * or against production:
 *   BASE_URL=https://londonluxurynightlife.com node --test scripts/agent-readiness.test.mjs
 */

import { test } from "node:test";
import assert from "node:assert/strict";

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");

const get = (path, headers = {}) => fetch(`${BASE}${path}`, { headers, redirect: "manual" });

const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// ── 1. Agent-friendly 404 ───────────────────────────────────────────

test("nonexistent path returns HTTP 404 with recovery pointers", async () => {
  const res = await get("/some-path-that-does-not-exist-98765");
  assert.equal(res.status, 404, "must return a real 404 status");
  const body = await res.text();
  assert.match(body, /sitemap\.xml/i, "404 body must point at the sitemap");
  assert.match(body, /llms\.txt/i, "404 body must point at llms.txt");
});

test("nonexistent path with Accept: text/markdown returns markdown 404", async () => {
  const res = await get("/some-path-that-does-not-exist-98765", {
    Accept: "text/markdown",
  });
  assert.equal(res.status, 404);
  assert.match(res.headers.get("content-type") || "", /text\/markdown/);
  const body = await res.text();
  assert.match(body, /# 404/, "markdown 404 must have a heading");
  assert.match(body, /sitemap\.xml/, "markdown 404 must link the sitemap");
  assert.match(body, /llms\.txt/, "markdown 404 must link llms.txt");
});

// ── 2. Content without JavaScript ───────────────────────────────────

test("homepage serves meaningful no-JS content with heading hierarchy", async () => {
  const res = await get("/");
  assert.equal(res.status, 200);
  const html = await res.text();
  const h1s = html.match(/<h1[\s>]/g) || [];
  assert.equal(h1s.length, 1, "exactly one h1");
  assert.ok((html.match(/<h2[\s>]/g) || []).length >= 3, "multiple h2 sections");
  assert.ok((html.match(/<h3[\s>]/g) || []).length >= 5, "h3 subheadings (non-flat hierarchy)");
  assert.ok(stripTags(html).length >= 500, "500+ chars of raw text without JS");
});

// ── 3. Markdown content negotiation (acceptmarkdown.com) ────────────

test("Accept: text/markdown on homepage returns compliant markdown", async () => {
  const res = await get("/", { Accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.match(res.headers.get("vary") || "", /\baccept\b/i, "Vary must include Accept");
  const body = await res.text();
  assert.match(body, /^#{1,2} /m, "body must contain markdown headings");
  assert.ok(!/<html|<body|<div/i.test(body), "body must not be HTML");
});

test("Accept: text/markdown on a club page returns markdown of that page", async () => {
  const res = await get("/clubs/tape-london", { Accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.match(res.headers.get("vary") || "", /\baccept\b/i);
  const body = await res.text();
  assert.match(body, /Tape/i, "markdown must contain the page content");
});

test("browser-style Accept still returns HTML", async () => {
  const res = await get("/", {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /text\/html/);
});

test("q-values are respected (html preferred over markdown)", async () => {
  const res = await get("/", { Accept: "text/markdown;q=0.5,text/html" });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /text\/html/);
});

// ── 4. llms.txt with when-to-use guidance ───────────────────────────

test("llms.txt exists and follows the llmstxt.org format", async () => {
  const res = await get("/llms.txt");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /text\/plain/);
  const body = await res.text();
  assert.match(body, /^# /, "must start with an H1");
  assert.match(body, /^> /m, "must contain a blockquote summary");
  assert.match(body, /^## /m, "must contain H2 link sections");
  assert.match(body, /When to use/i, "must contain when-to-use guidance");
  assert.match(body, /- \[.+\]\(https?:\/\/.+\): /, "sections must be markdown link lists");
});

// ── 5. Metadata completeness ────────────────────────────────────────

test("homepage carries all four metadata signals", async () => {
  const res = await get("/");
  const html = await res.text();
  assert.match(html, /<html[^>]+lang="en"/, "html lang");
  assert.match(html, /rel="canonical"/, "canonical link");
  assert.match(html, /property="og:type"/, "og:type");
  assert.match(html, /property="og:image"/, "og:image");
});

// ── 6. Organization schema completeness ─────────────────────────────

test("Organization/LocalBusiness schema includes contactPoint and address", async () => {
  const res = await get("/");
  const html = await res.text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1].replace(/&amp;/g, "&")));
  const org = blocks.find((b) => b["@type"] === "LocalBusiness" || b["@type"] === "Organization");
  assert.ok(org, "Organization schema present");
  assert.ok(org.contactPoint, "contactPoint present");
  const cp = Array.isArray(org.contactPoint) ? org.contactPoint[0] : org.contactPoint;
  assert.ok(cp.telephone, "contactPoint.telephone");
  assert.equal(cp.contactType, "customer service");
  assert.equal(org.address?.["@type"], "PostalAddress", "PostalAddress present");
});

// ── 7. Trust anchor pages ───────────────────────────────────────────

for (const page of ["/about", "/contact", "/privacy"]) {
  test(`trust page ${page} serves 200 with 500+ chars of content`, async () => {
    const res = await get(page);
    assert.equal(res.status, 200);
    const text = stripTags(await res.text());
    assert.ok(text.length >= 500, `${page} must have 500+ chars (got ${text.length})`);
  });
}
