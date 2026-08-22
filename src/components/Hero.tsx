import type { CSSProperties } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import TypewriterRole from "./TypewriterRole";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Next.js Specialist",
  "Salla Theme Developer",
];

const codeLines = [
  { key: "  name", value: '"Abdelrahman Rabie"', color: "#00ff88" },
  { key: "  role", value: '"Full-Stack Developer"', color: "#00ff88" },
  { key: "  company", value: '"Qusah Stores"', color: "#f97316" },
  { key: "  location", value: '"Cairo, Egypt 🌍"', color: "#00d4ff" },
  { key: "  status", value: '"Available 🟢"', color: "#00ff88" },
];

const stackItems = ["React", "Next.js", "Node.js", "MongoDB", "Salla"];

/** Entry-animation tuning, passed to the `.enter` classes in globals.css. */
const entry = (
  delay: number,
  duration?: number,
  offset?: { x?: number; y?: number },
): CSSProperties =>
  ({
    "--enter-delay": `${delay}s`,
    ...(duration ? { "--enter-dur": `${duration}s` } : {}),
    ...(offset?.x ? { "--enter-x": `${offset.x}px` } : {}),
    ...(offset?.y ? { "--enter-y": `${offset.y}px` } : {}),
  }) as CSSProperties;

/* Server component. The entry animations that used to be framer-motion props
   are now the `.enter*` CSS classes, so this entire subtree renders as visible
   HTML on the first paint — only <TypewriterRole /> ships any JS.

   Choreography budget: the whole hero settles by ~1.6s. The old schedule ran
   past 2.5s, which left the terminal still assembling itself long after the
   visitor had finished reading the bio. */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div
        aria-hidden
        className="absolute inset-0 grid-bg"
        style={{ opacity: 0.55 }}
      />

      {/* Center radial glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.055) 0%, transparent 68%)",
        }}
      />
      {/* Secondary purple glow */}
      <div
        aria-hidden
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
            {/* Name — the LCP element, so it paints on frame one */}
            <h1
              id="hero-heading"
              className="enter enter-up font-bold leading-none mb-4"
              style={{
                ...entry(0.08, 0.6, { y: 26 }),
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
            </h1>

            {/* Typewriter role */}
            <div
              className="enter enter-up flex items-center gap-3 justify-center lg:justify-start mb-7"
              style={entry(0.18, 0.6)}
            >
              <span
                className="text-text-muted text-sm select-none"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ~/career $
              </span>
              <TypewriterRole words={ROLES} />
            </div>

            {/* Bio */}
            <p
              className="enter enter-up text-text-secondary text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-9 leading-relaxed"
              style={{ ...entry(0.26, 0.6), textWrap: "pretty" }}
            >
              Building enterprise ERP and e-commerce products with the{" "}
              <span className="text-text-primary font-medium">MERN stack</span>{" "}
              and Next.js — plus custom{" "}
              <span className="text-accent font-medium">Salla storefronts</span>{" "}
              for Saudi retail brands. Obsessed with clean architecture,
              performance, and multilingual.
            </p>

            {/* CTA row — two actions, both things a scroll cannot do.
                "VIEW PROJECTS" lived here until Projects became the section
                directly below: it then pointed at the same place as the scroll
                cue 150px under it, and asked for a click to do what the wheel
                already does. The work sells itself one screen down; the hero
                asks for the CV and the conversation instead. */}
            <div
              className="enter enter-up flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-5 justify-center lg:justify-start mb-10"
              style={entry(0.34, 0.6)}
            >
              {/* Plain anchors, not next/link: every link on this page is an
                  in-page hash, a mailto, or an external URL, so client-side
                  routing buys nothing — and next/link was prefetching a 35KB
                  RSC payload for the route we are already on. */}
              <a
                href="/Abdelrahman-Rabie-CV.pdf"
                download="Abdelrahman-Rabie-CV.pdf"
                className="btn-game"
              >
                <HiDownload aria-hidden className="w-4 h-4" />
                DOWNLOAD CV
              </a>
              <a href="#contact" className="btn-game-outline">
                ESTABLISH CONTACT
              </a>
            </div>

            {/* Social links */}
            <div
              className="enter enter-fade flex items-center gap-3 justify-center lg:justify-start flex-wrap"
              style={entry(0.42)}
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
                  <a
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
                    <Icon
                      aria-hidden
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                    />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT — Terminal Display ──
              Entry and float live on separate elements: one `animation-name`
              per element, and the perpetual float must not restart the entry.

              The three mini stat tiles that used to sit under this terminal
              were the same 2+ / 6 / 20+ figures the About section renders one
              screen below — the same fact twice, under two different labels.
              About owns them now. */}
          <div
            className="enter enter-right flex-shrink-0 w-full max-w-[360px] lg:max-w-[400px]"
            style={entry(0.3, 0.8, { x: 40 })}
          >
            <div className="float-y">
              <div
                className="terminal shadow-2xl"
                style={{
                  boxShadow:
                    "0 0 60px rgba(0,255,136,0.06), 0 30px 80px rgba(0,0,0,0.6)",
                }}
              >
                {/* Terminal title bar */}
                <div className="terminal-header">
                  <span
                    aria-hidden
                    className="w-3 h-3 rounded-full bg-[#ff5f56]"
                  />
                  <span
                    aria-hidden
                    className="w-3 h-3 rounded-full bg-[#febc2e]"
                  />
                  <span
                    aria-hidden
                    className="w-3 h-3 rounded-full bg-[#27c840]"
                  />
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
                    <div
                      key={i}
                      className="enter enter-left"
                      style={entry(0.55 + i * 0.08, 0.4, { x: 12 })}
                    >
                      <span className="text-text-muted">{line.key}</span>
                      <span className="text-text-secondary">: </span>
                      <span style={{ color: line.color }}>{line.value}</span>
                      <span className="text-text-secondary">,</span>
                    </div>
                  ))}

                  <div
                    className="enter enter-left"
                    style={entry(0.95, 0.4, { x: 12 })}
                  >
                    <span className="text-text-muted"> stack</span>
                    <span className="text-text-secondary">: [</span>
                  </div>

                  {stackItems.map((tech, i) => (
                    <div
                      key={tech}
                      className="enter enter-left pl-8"
                      style={entry(1.02 + i * 0.06, 0.4, { x: 12 })}
                    >
                      <span className="text-accent-orange">
                        &quot;{tech}&quot;
                      </span>
                      <span className="text-text-secondary">,</span>
                    </div>
                  ))}

                  <div className="enter enter-fade" style={entry(1.32)}>
                    <span className="text-text-secondary"> ]</span>
                  </div>

                  <div className="enter enter-fade" style={entry(1.4)}>
                    <span className="text-text-secondary">{"}"}</span>
                  </div>

                  <div
                    className="enter enter-fade pt-3 flex items-center gap-2"
                    style={entry(1.48)}
                  >
                    <span aria-hidden className="text-accent">
                      ▶
                    </span>
                    <span className="text-text-muted">
                      Running in production
                    </span>
                    <span
                      aria-hidden
                      className="inline-block w-2 h-[1.1em] bg-accent align-middle"
                      style={{ animation: "cursor-blink 1s infinite" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — a real link now, not decoration. It looked
          clickable, sat in the exact spot a visitor aims at, and did nothing.
          Hidden below `sm`, where a thumb reaches it before the content. */}
      <a
        href="#projects"
        aria-label="Scroll to the projects"
        className="scroll-cue enter enter-fade absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        style={entry(1.55)}
      >
        <span
          className="text-[11px] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          scroll to explore
        </span>
        <span
          aria-hidden
          className="scroll-cue-mouse w-5 h-8 rounded-full flex items-start justify-center p-1"
        >
          <span className="w-1 h-2 rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
