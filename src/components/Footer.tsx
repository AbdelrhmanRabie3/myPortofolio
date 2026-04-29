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
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span
            className="text-accent text-lg font-semibold"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            &gt;_ rabie3
          </span>
          <span className="w-px h-4 bg-border-subtle" />
          <span
            className="text-text-muted text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} — built by Abdelrahman Rabie
          </span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-lg text-text-muted hover:text-accent transition-all duration-300 text-xs"
          style={{
            border: "1px solid #1a1a2e",
            background: "rgba(13,13,26,0.5)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(0,255,136,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#1a1a2e";
          }}
          aria-label="Back to top"
        >
          BACK TO TOP
          <HiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
