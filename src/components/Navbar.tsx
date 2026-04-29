"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Projects", href: "#projects", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
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
      const scrollPos = window.scrollY + 140;
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(4, 4, 10, 0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid #1a1a2e"
            : "1px solid transparent",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex items-center">
            <span
              className="text-accent text-xl font-semibold tracking-tight transition-opacity group-hover:opacity-75"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              &gt;_ <span className="text-text-primary">rabie3</span>
              <span
                className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle"
                style={{ animation: "cursor-blink 1.2s infinite" }}
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-all duration-200 rounded-md group ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-accent text-[10px] mr-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  {link.num}.
                </span>
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-current origin-center"
              style={{ transition: "transform 0.3s ease" }}
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              className="block w-5 h-0.5 bg-current origin-center"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-current origin-center"
              style={{ transition: "transform 0.3s ease" }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden scanlines"
            style={{
              background: "rgba(4, 4, 10, 0.97)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
              <div
                className="text-text-muted text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // navigation_menu.exe
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-semibold text-text-secondary hover:text-accent transition-all duration-300 group"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span
                    className="text-accent text-sm group-hover:opacity-100 opacity-50 transition-opacity"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {link.num}.
                  </span>
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
