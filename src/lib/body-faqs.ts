// FAQs written in a database post's Markdown body (a "## Frequently Asked
// Questions" section of "### Question?" headings), for the FAQPage schema.
// The questions stay visible on the page, as Google requires.
const plain = (md: string) =>
  md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export function bodyFaqs(md: string): { question: string; answer: string }[] {
  const section = md.split(/^## /m).find((s) => /^(faqs?|frequently asked questions)\b/i.test(s));
  if (!section) return [];
  return section
    .split(/^### /m)
    .slice(1)
    .map((block) => {
      const [question, ...answer] = block.split("\n");
      return { question: plain(question), answer: plain(answer.join("\n")) };
    })
    .filter((f) => f.question.endsWith("?") && f.answer.length > 0);
}
