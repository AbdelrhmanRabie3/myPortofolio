import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Self-hosted at build time: no render-blocking request to Google, no FOUT,
   and `adjustFontFallback` removes the layout shift on swap. */
/* Weights are limited to the ones actually referenced (font-medium /
   font-semibold / font-bold plus body text). 300 was shipped but never used. */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* Defaults to the live deployment so OpenGraph/Twitter tags resolve to absolute
   URLs without any env config. Set NEXT_PUBLIC_SITE_URL to override — e.g. when
   moving to a custom domain. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portofolio-mu-swart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abdelrahman Rabie — Full-Stack Developer",
  description:
    "Portfolio of Abdelrahman Rabie, a Full-Stack MERN Developer based in Cairo, Egypt. Building enterprise ERP and e-commerce products with React, Next.js, Node.js and MongoDB — plus custom Salla storefront themes on the Twilight engine.",
  keywords: [
    "Abdelrahman Rabie",
    "Full-Stack Developer",
    "Front-End Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MongoDB",
    "Salla Platform",
    "Twilight Theme Development",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Abdelrahman Rabie" }],
  creator: "Abdelrahman Rabie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdelrahman Rabie — Portfolio",
    title: "Abdelrahman Rabie — Full-Stack Developer",
    description:
      "Full-Stack MERN Developer in Cairo, Egypt. React, Next.js, Node.js, MongoDB, and custom Salla storefront themes.",
    /* images omitted on purpose — app/opengraph-image.tsx supplies the card
       and its correct dimensions to both OpenGraph and Twitter. */
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Rabie — Full-Stack Developer",
    description:
      "Full-Stack MERN Developer in Cairo, Egypt. React, Next.js, Node.js, MongoDB, and custom Salla storefront themes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {/* Scroll reveals are driven by an IntersectionObserver, so without JS
            nothing would ever flip `.is-visible` and the page below the hero
            would stay blank. Show it all instead. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
