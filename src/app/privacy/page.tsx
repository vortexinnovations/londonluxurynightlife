import { Metadata } from "next/types";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How London Luxury Nightlife handles your data: what we collect (very little), how WhatsApp enquiries are used to arrange bookings, and your rights under UK GDPR.",
  openGraph: {
    title: "Privacy Policy | London Luxury Nightlife",
    description:
      "How London Luxury Nightlife handles your data: what we collect, how WhatsApp enquiries are used, and your rights.",
    url: `${SITE_URL}/privacy`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <ArticleLayout
      title="Privacy Policy"
      subtitle="What we collect (very little), what we do with it, and the choices you have"
    >
      <p>
        London Luxury Nightlife is an editorial guide and concierge service
        for London&apos;s luxury club scene, operated from London, United
        Kingdom. This policy explains what personal data we handle when you
        browse this site or contact us, and the rights you have over it. The
        short version: we run no user accounts, set no tracking cookies, and
        use no advertising or analytics trackers. The only personal data we
        ever receive is what you choose to send us when you message our team.
      </p>

      <h2>Browsing this site</h2>

      <p>
        You can read every page on this site without creating an account or
        accepting any cookies, and we do not set any. Our hosting provider,
        Vercel Inc., processes standard technical request data &mdash; IP
        address, browser user agent, requested URL, and timestamps &mdash; in
        short-lived server logs used for security, abuse prevention, and
        keeping the site online. We do not use this data to identify or
        profile visitors. Photography on the site is served through our own
        domain from a cloud storage provider; no personal data is attached to
        image requests beyond the technical data described above.
      </p>

      <h2>Contacting us on WhatsApp</h2>

      <p>
        Booking enquiries happen over WhatsApp, which you start by tapping a
        button on this site. When you do, we receive whatever you send us
        &mdash; typically your name, phone number, dates, group size, and what
        kind of night you are planning. We use that information for one
        purpose: arranging your booking. Where a reservation requires it, we
        share only the details a venue needs (typically a name, group size,
        and arrival time) with that venue. We do not sell or rent your
        details, and we do not add you to marketing lists. WhatsApp messages
        are also processed by WhatsApp&apos;s operator, Meta Platforms, under{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp&apos;s own privacy policy
        </a>
        , which applies to your use of that app.
      </p>

      <h2>How long we keep things</h2>

      <p>
        Conversation history is kept only as long as it is useful for
        arranging your booking and handling any follow-up, after which it is
        deleted. Hosting logs are retained by our provider on a short rolling
        window and are not archived by us.
      </p>

      <h2>Your rights</h2>

      <p>
        Under the UK General Data Protection Regulation, you can ask us for a
        copy of the personal data we hold about you, ask us to correct it, ask
        us to delete it, or object to our processing of it. Because we hold so
        little, the usual answer is a quick one. To exercise any of these
        rights, message us through the{" "}
        <Link href="/contact">contact page</Link> and tell us what you need.
        If you are unhappy with how we have handled your data, you have the
        right to complain to the Information Commissioner&apos;s Office
        (ico.org.uk).
      </p>

      <h2>Changes to this policy</h2>

      <p>
        If how we handle data changes &mdash; for example, if we ever add
        analytics &mdash; we will update this page and change the date below
        before the change takes effect.
      </p>

      <p>
        <strong>Last updated:</strong> 21 July 2026
      </p>
    </ArticleLayout>
  );
}
