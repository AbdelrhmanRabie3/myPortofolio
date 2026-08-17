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
      "Sales management platform with real-time analytics dashboards and automated workflows. Chart-driven reporting, server-state caching with TanStack Query, and validated multi-step forms.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Chart.js",
      "Zustand",
      "React Hook Form",
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
      "Full-stack bilingual (Arabic & English) company platform with complete RTL support — layout mirroring, locale-aware routing, and font switching — on top of a custom Express REST API.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
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
      "Bilingual corporate platform delivering a polished, accessible experience in Arabic and English. Server-rendered for SEO, with a single Zod schema shared across client and server.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
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
      "Full-stack corporate platform backed by a custom content API, with server-rendered pages, dynamic routing, and a sharp focus on performance, accessibility, and SEO.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Node.js",
      "MongoDB",
    ],
    link: "https://www.easylink-ksa.com/ar",
  },
  {
    file: "FILE_05",
    title: "Qusah Store",
    status: "ACTIVE",
    accent: "#7c3aed",
    description:
      "Custom Salla e-commerce theme built from scratch on the Twilight engine — full Arabic/RTL storefront covering product, cart, and checkout flows for a Saudi household-goods retailer.",
    tech: [
      "Salla Platform",
      "Twilight Engine",
      "JavaScript",
      "Tailwind CSS",
      "CSS3",
    ],
    link: "https://qusahstore.com/",
  },
  {
    file: "FILE_06",
    title: "Bareq",
    status: "ACTIVE",
    accent: "#facc15",
    description:
      "Salla storefront for one of Saudi Arabia's leading cleaning-product brands. Custom Twilight theme work across category, product, and checkout journeys, tuned for mobile-first Arabic shoppers.",
    tech: ["Salla Platform", "Twilight Engine", "JavaScript", "CSS3"],
    link: "https://bareq.sa/",
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
