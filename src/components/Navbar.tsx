"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href),
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-primary/60 backdrop-blur-2xl border-b border-border-subtle/50 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="text-2xl  font-bold tracking-tight group"
            style={{ fontFamily: "'Caveat', cursive", fontStyle: "italic" }}
          >
            <span className="gradient-text text-3xl  group-hover:opacity-80  transition-opacity pr-2">
              rabie3
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* <a
              href="/Abdelrahman_Rabie_Resume.pdf"
              target="_blank"
              className="relative px-5 py-2 text-sm font-semibold rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-cyan rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="absolute inset-0 rounded-full border border-accent/40 group-hover:border-accent/70 transition-colors" />
              <span className="relative text-accent group-hover:text-text-primary transition-colors">Resume</span>
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(5,5,16,0.98), rgba(12,12,29,0.98))",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
