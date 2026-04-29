import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelrahman Rabie — Full-Stack Developer",
  description:
    "Portfolio of Abdelrahman Rabie, a Full-Stack MERN Developer based in Cairo, Egypt. Specializing in React, Next.js, Node.js, and MongoDB.",
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
