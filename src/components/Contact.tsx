"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const transmissionLines = [
  {
    icon: HiOutlineMail,
    key: "EMAIL",
    value: "Abdelrhman.mohamed.rabie@gmail.com",
    href: "mailto:Abdelrhman.mohamed.rabie@gmail.com",
    accent: "#00ff88",
  },
  {
    icon: HiOutlinePhone,
    key: "PHONE",
    value: "+201011676929",
    href: "tel:+201011676929",
    accent: "#f97316",
  },
  {
    icon: HiOutlineLocationMarker,
    key: "LOCATION",
    value: "Cairo, Egypt",
    href: null,
    accent: "#00d4ff",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Chapter header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="chapter-badge">CHAPTER_05</span>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <h2
            className="font-bold text-text-primary"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.025em",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
            }}
          >
            Establish <span className="gradient-text">Connection</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            Ready to collaborate? Drop a transmission and I&apos;ll respond
            within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left — Terminal transmission */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="terminal h-full flex flex-col">
              <div className="terminal-header">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c840]" />
                <span
                  className="ml-4 text-text-muted text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  contact.sh — rabie3
                </span>
              </div>
              <div
                className="p-5 space-y-4 text-sm overflow-hidden"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <div className="text-text-muted text-xs">
                  <span className="text-accent">$</span> cat contact_info.json
                </div>
                <div className="space-y-0.5">
                  <div className="text-text-secondary">{`{`}</div>
                  {transmissionLines.map((line) => {
                    const Icon = line.icon;
                    const content = (
                      <div
                        key={line.key}
                        className="pl-4 flex items-start gap-2"
                      >
                        <Icon
                          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                          style={{ color: line.accent }}
                        />
                        <div className="min-w-0">
                          <span className="text-text-muted">
                            &quot;{line.key}&quot;
                          </span>
                          <span className="text-text-secondary">: </span>
                          <span
                            className="break-all"
                            style={{ color: line.accent }}
                          >
                            &quot;{line.value}&quot;
                          </span>
                          <span className="text-text-secondary">,</span>
                        </div>
                      </div>
                    );

                    return line.href ? (
                      <a
                        key={line.key}
                        href={line.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={line.key}>{content}</div>
                    );
                  })}
                  <div className="text-text-secondary">{`}`}</div>
                </div>

                <div className="pt-2 text-text-muted text-xs border-t border-border-subtle">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-secondary">
                    echo &quot;Ready to build something great&quot;
                  </span>
                  <div className="mt-1 text-accent">
                    Ready to build something great
                    <span
                      className="inline-block w-2 h-3.5 bg-accent ml-1 align-middle"
                      style={{ animation: "cursor-blink 1s infinite" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — CTA panel */}
          <AnimatedSection delay={0.2} className="h-full">
            <div className="glass-card p-5 sm:p-8 h-full flex flex-col gap-6">
              <div>
                <div
                  className="text-text-muted text-[11px] uppercase tracking-widest mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="text-accent">■</span> quick_actions.sh
                </div>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m open to{" "}
                  <span className="text-text-primary font-medium">
                    new opportunities
                  </span>
                  , freelance projects, and exciting collaborations. Let&apos;s
                  build something{" "}
                  <span className="text-accent font-medium">amazing</span>{" "}
                  together.
                </p>
              </div>

              {/* Big CTA */}
              <Link
                href="mailto:abdelrhman.mohamed.rabie@gmail.com"
                className="btn-game w-full justify-center text-center"
              >
                <HiOutlineMail className="w-4 h-4" />
                SEND TRANSMISSION
              </Link>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    label: "GitHub",
                    href: "https://github.com/AbdelrhmanRabie3",
                  },
                  {
                    icon: FaLinkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/abdelrhman-rabie/",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-text-secondary hover:text-accent transition-all duration-300 text-sm font-medium group"
                      style={{
                        border: "1px solid #1a1a2e",
                        background: "rgba(13,13,26,0.6)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = "rgba(0,255,136,0.3)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "rgba(0,255,136,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = "#1a1a2e";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "rgba(13,13,26,0.6)";
                      }}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {social.label}
                    </Link>
                  );
                })}
              </div>

              {/* Status line */}
              <div
                className="flex items-center gap-2 text-text-muted text-xs pt-2 border-t border-border-subtle"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span>Response time: &lt; 24 hours</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
