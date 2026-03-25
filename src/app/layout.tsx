import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/SchemaMarkup";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The definitive guide to London's luxury nightlife. Expert reviews of Mayfair's most exclusive clubs, VIP table booking, celebrity hotspots, and insider tips for an unforgettable night out.",
  keywords: [
    "luxury nightlife London",
    "VIP night out London",
    "exclusive clubs London",
    "best nightlife London",
    "Mayfair clubs",
    "London nightlife guide",
    "high end clubs London",
    "celebrity clubs London",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "London Luxury Nightlife | The Insider's Guide to Exclusive Clubs & VIP Experiences",
    description:
      "The definitive guide to London's luxury nightlife. Expert reviews of Mayfair's most exclusive clubs, VIP table booking, and insider tips for an unforgettable night out.",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Luxury Nightlife | The Insider's Guide",
    description:
      "The definitive guide to London's luxury nightlife. Expert reviews, VIP table booking, and insider tips.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <LocalBusinessSchema />
        <WebSiteSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
