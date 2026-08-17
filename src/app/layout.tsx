import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
    images: [{ url: "/me.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Rabie — Full-Stack Developer",
    description:
      "Full-Stack MERN Developer in Cairo, Egypt. React, Next.js, Node.js, MongoDB, and custom Salla storefront themes.",
    images: ["/me.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
