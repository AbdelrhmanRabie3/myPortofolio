"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { HiExternalLink, HiArrowRight } from "react-icons/hi";

const projects = [
  {
    file: "FILE_01",
    title: "Sales Hero",
    status: "ACTIVE",
    accent: "#00ff88",
    description:
      "A comprehensive sales management platform designed to streamline customer relationships, track leads, and boost team productivity. Features real-time analytics and intuitive dashboard interfaces.",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Chart.js",
      "Zustand",
      "React Query",
      "Zod",
    ],
    link: "https://sales-hero-fe.vercel.app/ar",
  },
  {
    file: "FILE_02",
    title: "Thimar",
    status: "ACTIVE",
    accent: "#f97316",
    description:
      "A full-stack responsive bilingual (Arabic & English) company platform built for performance, accessibility, and modern UX. Features SSR, form validation, and a complete RESTful API backend.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://thimarln.com",
  },
  {
    file: "FILE_03",
    title: "DrCorp",
    status: "ACTIVE",
    accent: "#00d4ff",
    description:
      "A bilingual corporate website delivering a polished, accessible experience in both Arabic and English. Focused on performance optimization with SSR, modern component architecture.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://drcorp.co/ar",
  },
  {
    file: "FILE_04",
    title: "EasyLink",
    status: "ACTIVE",
    accent: "#ff4f8b",
    description:
      "A responsive company website focused on performance and modern UX, featuring dynamic routing, clean design patterns, and optimized SEO for maximum discoverability.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "MongoDB", "Node.js"],
    link: "https://www.easylink-ksa.com/ar",
  },
  {
    file: "FILE_05",
    title: "Df3a",
    status: "ARCHIVED",
    accent: "#7c3aed",
    description:
      "A full-stack mentorship platform connecting students with mentors through real-time chat, session booking, and interactive workshops. Features Socket.IO, LiveKit, and AI-powered features.",
    tech: [
      "React",
      "Tanstack Query",
      "Socket.IO",
      "LiveKit",
      "MongoDB",
      "Node.js",
    ],
    link: "https://df3a.vercel.app/",
  },
  {
    file: "FILE_06",
    title: "Fresh Cart",
    status: "ARCHIVED",
    accent: "#00d4ff",
    description:
      "A feature-rich e-commerce web application with full shopping cart functionality, secure payment processing via Stripe, protected routes, and toast notifications.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "Stripe API",
    ],
    link: "https://fresh-cart-blush.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Chapter header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="chapter-badge">CHAPTER_04</span>
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
            Mission <span className="gradient-text">Files</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            Real-world applications I&apos;ve architected and shipped from the
            ground up.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <div
                className="glass-card h-full flex flex-col overflow-hidden relative group"
                style={{
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${project.accent}35`;
                  el.style.boxShadow = `0 0 40px ${project.accent}08`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#1a1a2e";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                  }}
                />

                {/* Card header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{
                        color: project.accent,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {project.file}
                    </span>
                  </div>

                  {/* Status + Link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105"
                    style={{
                      background:
                        project.status === "ACTIVE"
                          ? "rgba(0,255,136,0.1)"
                          : "rgba(68,68,90,0.2)",
                      color:
                        project.status === "ACTIVE" ? "#00ff88" : "#7a7a9a",
                      border: `1px solid ${project.status === "ACTIVE" ? "rgba(0,255,136,0.25)" : "rgba(68,68,90,0.3)"}`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {project.status === "ACTIVE" ? (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                      </span>
                    ) : (
                      <HiExternalLink className="w-3 h-3" />
                    )}
                    {project.status}
                  </Link>
                </div>

                {/* Title */}
                <div className="px-5 pb-3">
                  <h3
                    className="text-text-primary font-bold text-lg group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed px-5 pb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded text-text-secondary"
                      style={{
                        border: `1px solid ${project.accent}30`,
                        background: `${project.accent}08`,
                        color: "#b0b0c8",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div
                  className="border-t px-5 py-3 flex items-center justify-between"
                  style={{
                    borderColor: `${project.accent}18`,
                    background: "rgba(4,4,10,0.4)",
                  }}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all duration-200 group/link"
                    style={{
                      color: project.accent,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    VIEW MISSION
                    <HiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span
                    className="text-[10px] text-text-muted"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.tech.length} DEPS
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
