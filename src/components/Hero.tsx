"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Next.js Specialist",
  "Salla Theme Developer",
];

function useTypewriter(
  words: string[],
  { speed = 75, pause = 2200, enabled = true } = {},
) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const current = words[index % words.length];
    const atEnd = !deleting && count === current.length;
    const atStart = deleting && count === 0;
    const delay = atEnd ? pause : atStart ? 400 : deleting ? speed / 2 : speed;

    /* Every state write happens inside the timer rather than synchronously in
       the effect body — the synchronous version triggered cascading renders. */
    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setCount((c) => c + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, index, words, speed, pause, enabled]);

  if (!enabled) return words[0];
  return words[index % words.length].slice(0, count);
}

const codeLines = [
  { key: "  name", value: '"Abdelrahman Rabie"', color: "#00ff88" },
  { key: "  role", value: '"Full-Stack Developer"', color: "#00ff88" },
  { key: "  company", value: '"Qusah Stores"', color: "#f97316" },
  { key: "  location", value: '"Cairo, Egypt 🌍"', color: "#00d4ff" },
  { key: "  status", value: '"Available 🟢"', color: "#00ff88" },
];

const stackItems = ["React", "Next.js", "Node.js", "MongoDB", "Salla"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const role = useTypewriter(ROLES, { enabled: !reduceMotion });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.55 }} />

      {/* Center radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.055) 0%, transparent 68%)",
        }}
      />
      {/* Secondary purple glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* ── LEFT — Main Content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span className="chapter-badge flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                SYSTEM ONLINE — AVAILABLE FOR HIRE
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold leading-none mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.025em",
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              }}
            >
              <span
                className="gradient-text glitch-text block"
                data-text="Abdelrahman"
              >
                Abdelrahman
              </span>
              <span className="text-text-primary">Rabie</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-7"
            >
              <span
                className="text-text-muted text-sm select-none"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ~/career $
              </span>
              <span
                className="text-accent text-lg sm:text-xl md:text-2xl font-semibold min-h-[1.5em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {role}
                <span
                  className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
                  style={{ animation: "cursor-blink 1s infinite" }}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="text-text-secondary text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              Building enterprise ERP and e-commerce products with the{" "}
              <span className="text-text-primary font-medium">MERN stack</span>{" "}
              and Next.js — plus custom{" "}
              <span className="text-accent font-medium">Salla storefronts</span>{" "}
              for Saudi retail brands. Obsessed with clean architecture,
              performance, and bilingual Arabic/English UX.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
            >
              <Link href="#projects" className="btn-game">
                VIEW PROJECTS
                <span className="text-base">▶</span>
              </Link>
              <a
                href="/Abdelrahman-Rabie-CV.pdf"
                download="Abdelrahman-Rabie-CV.pdf"
                className="btn-game-outline"
              >
                <HiDownload className="w-4 h-4" />
                DOWNLOAD CV
              </a>
              <Link href="#contact" className="btn-game-outline">
                ESTABLISH CONTACT
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start flex-wrap"
            >
              {[
                {
                  href: "https://github.com/AbdelrhmanRabie3",
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/abdelrhman-rabie/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:abdelrhman.mohamed.rabie@gmail.com",
                  icon: HiOutlineMail,
                  label: "Email",
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={s.label}
                    className="pill-link group flex items-center gap-2 px-4 py-2 text-text-primary text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {s.label}
                  </Link>
                );
              })}
              <span
                className="text-text-muted text-xs ml-1 hidden sm:block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {"// Cairo, Egypt"}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT — Terminal Display ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex-shrink-0 w-full max-w-[360px] lg:max-w-[400px] float-y"
          >
            <div
              className="terminal shadow-2xl"
              style={{
                boxShadow:
                  "0 0 60px rgba(0,255,136,0.06), 0 30px 80px rgba(0,0,0,0.6)",
              }}
            >
              {/* Terminal title bar */}
              <div className="terminal-header">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c840]" />
                <span
                  className="ml-4 text-text-muted text-xs"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  developer.ts — rabie3
                </span>
              </div>

              {/* Code body */}
              <div
                className="p-5 text-sm leading-7"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div>
                  <span className="text-accent-purple">const</span>{" "}
                  <span className="text-accent-cyan">developer</span>{" "}
                  <span className="text-text-secondary">= {"{"}</span>
                </div>

                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.13 }}
                  >
                    <span className="text-text-muted">{line.key}</span>
                    <span className="text-text-secondary">: </span>
                    <span style={{ color: line.color }}>{line.value}</span>
                    <span className="text-text-secondary">,</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <span className="text-text-muted"> stack</span>
                  <span className="text-text-secondary">: [</span>
                </motion.div>

                {stackItems.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.72 + i * 0.1 }}
                    className="pl-8"
                  >
                    <span className="text-accent-orange">
                      &quot;{tech}&quot;
                    </span>
                    <span className="text-text-secondary">,</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.18 }}
                >
                  <span className="text-text-secondary"> ]</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                >
                  <span className="text-text-secondary">{"}"}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="pt-3 flex items-center gap-2"
                >
                  <span className="text-accent">▶</span>
                  <span className="text-text-muted">Running in production</span>
                  <span
                    className="inline-block w-2 h-[1.1em] bg-accent align-middle"
                    style={{ animation: "cursor-blink 1s infinite" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Mini stat pills below terminal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-3 gap-3 mt-4"
            >
              {[
                { label: "EXP", value: "2+ YRS", color: "#00ff88" },
                { label: "PROJECTS", value: "6", color: "#00d4ff" },
                { label: "TECH", value: "20+", color: "#7c3aed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-3 text-center"
                  style={{ borderColor: `${s.color}22` }}
                >
                  <div
                    className="text-xl font-bold"
                    style={{
                      color: s.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-wider mt-0.5"
                    style={{
                      color: s.color,
                      opacity: 0.75,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-text-muted text-[10px] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center p-1"
          style={{ border: "1px solid #1a1a2e" }}
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
