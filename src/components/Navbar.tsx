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

  /* Navbar background — rAF-throttled so we do at most one state write per frame. */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Active section — IntersectionObserver instead of querying the DOM on every
     scroll tick. The rootMargin band means "whatever crosses the viewport middle". */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock background scroll and wire Escape while the mobile overlay is open. */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

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
              style={{ fontFamily: "var(--font-mono)" }}
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
                style={{ fontFamily: "var(--font-mono)" }}
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
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(4, 4, 10, 0.97)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-text-muted hover:text-accent transition-colors duration-200 rounded-lg"
              style={{ border: "1px solid #1a1a2e" }}
              aria-label="Close menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M12.7 3.3a1 1 0 00-1.4 0L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 001.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4L9.4 8l3.3-3.3a1 1 0 000-1.4z" />
              </svg>
            </button>

            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 px-8">
              <div
                className="text-text-muted text-[10px] uppercase tracking-widest mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {"// navigation_menu.exe"}
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-5 px-6 py-4 rounded-xl border border-transparent text-text-secondary transition-all duration-300 group hover:text-accent hover:border-accent/20 hover:bg-accent/5 focus-visible:text-accent focus-visible:border-accent/20 focus-visible:bg-accent/5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span
                    className="text-accent text-xs opacity-60 group-hover:opacity-100 transition-opacity w-6 text-right flex-shrink-0"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {link.num}.
                  </span>
                  <span className="text-xl font-semibold">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
