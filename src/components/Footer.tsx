"use client";

import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-8 overflow-hidden"
      style={{ borderTop: "1px solid #1a1a2e" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span
            className="text-accent text-lg font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &gt;_ rabie3
          </span>
          <span className="hidden sm:block w-px h-4 bg-border-subtle" />
          <span
            className="text-text-muted text-xs text-center sm:text-left"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} — built by Abdelrahman Rabie
          </span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="pill-link group flex items-center gap-2 px-4 py-2 text-text-muted text-xs"
          style={{ fontFamily: "var(--font-mono)" }}
          aria-label="Back to top"
        >
          BACK TO TOP
          <HiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
