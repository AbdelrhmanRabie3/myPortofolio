"use client";

import { HiArrowUp, HiHeart } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border-subtle/40 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
          <span
            className="text-2xl font-bold gradient-text pr-2"
            style={{ fontFamily: "'Caveat'" }}
          >
            rabie3
          </span>
          <span className="text-text-muted text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Built 
            by Abdelrahman Rabie
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="group p-2.5 rounded-xl glass-card text-text-secondary hover:text-accent transition-all duration-300"
          aria-label="Back to top"
        >
          <HiArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
