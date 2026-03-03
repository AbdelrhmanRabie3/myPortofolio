import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelrahman Rabie - Full-Stack Developer",
  description: "Portfolio of Abdelrahman Rabie, a Full-Stack MERN Developer based in Cairo, Egypt. Specializing in React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
