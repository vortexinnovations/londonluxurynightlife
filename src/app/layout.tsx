import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, WebSiteSchema, SiteNavigationSchema } from "@/components/SchemaMarkup";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { SITE_OPEN_GRAPH } from "@/lib/metadata";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
  // No og:url here, for the same reason as the canonical below: each page sets
  // `openGraph.url` to its own URL (pages without Open Graph fields of their
  // own spread SITE_OPEN_GRAPH and add it).
  openGraph: SITE_OPEN_GRAPH,
  twitter: {
    card: "summary_large_image",
    title: "London Luxury Nightlife | The Insider's Guide",
    description:
      "The definitive guide to London's luxury nightlife. Expert reviews, VIP table booking, and insider tips.",
    images: [`${SITE_URL}/gallery/images/fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  // No canonical here: a layout's canonical is inherited by every page that
  // does not set its own, which pointed the whole site at the home page. Each
  // page sets `alternates.canonical` to its own URL (the home page in page.tsx).
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${bodoni.variable} ${newsreader.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <LocalBusinessSchema />
        <WebSiteSchema />
        <SiteNavigationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
