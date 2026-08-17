"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import AnimatedSection from "./AnimatedSection";
import { HiArrowRight } from "react-icons/hi";

type Project = {
  file: string;
  title: string;
  status: string;
  accent: string;
  description: string;
  tech: string[];
  link: string;
  /** Drop a screenshot in /public/projects and set the path here. */
  image?: string;
};

const projects: Project[] = [
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
    link: "https://sales-hero-fe.qusah.workers.dev/ar",
    image: "/projects/sales-hero.webp",
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
    image: "/projects/thimar.webp",
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
    image: "/projects/drcorp.webp",
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
    image: "/projects/easylink.webp",
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
    image: "/projects/qusah-store.webp",
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
    image: "/projects/bareq.webp",
  },
];

/** First letters of the project name — the placeholder mark until a real
 *  screenshot exists at `image`. */
function monogram(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Renders the screenshot, falling back to the accent monogram when the file
 *  is missing or fails to load — so an absent or misnamed image degrades to
 *  the placeholder instead of a broken card. */
function ThumbMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (!project.image || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="project-monogram">{monogram(project.title)}</span>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}

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
              fontFamily: "var(--font-heading)",
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
            <AnimatedSection key={project.title} delay={i * 0.08} from="scale">
              <article
                className="glass-card accent-card h-full flex flex-col overflow-hidden"
                style={{ "--accent": project.accent } as CSSProperties}
              >
                {/* Thumbnail — screenshot when present, accent placeholder otherwise */}
                <div className="project-thumb">
                  <ThumbMedia project={project} />

                  {/* Overlay chrome — pointer-events off so the whole card
                      stays clickable through the stretched link beneath it. */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3 z-[3] pointer-events-none">
                    <span
                      className="text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                      style={{
                        color: project.accent,
                        background: "rgba(4,4,10,0.72)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {project.file}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(4,4,10,0.72)",
                        color: "#00ff88",
                        border: "1px solid rgba(0,255,136,0.25)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                      </span>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title — the single link, stretched over the whole card */}
                <div className="px-5 pt-4 pb-2">
                  <h3
                    className="text-text-primary font-bold text-lg"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link transition-colors duration-300 hover:text-accent focus-visible:text-accent"
                    >
                      {project.title}
                      <span className="sr-only"> — open live site</span>
                    </Link>
                  </h3>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed px-5 pb-4 flex-1">
                  {project.description}
                </p>

                <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="accent-chip text-[11px] px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer affordance — visual only, the card link covers it */}
                <div
                  className="border-t px-5 py-3 flex items-center justify-between"
                  style={{
                    borderColor: `${project.accent}18`,
                    background: "rgba(4,4,10,0.4)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="flex items-center gap-1.5 text-xs font-semibold"
                    style={{
                      color: project.accent,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    VIEW MISSION
                    <HiArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span
                    className="text-[10px] text-text-muted"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.tech.length} DEPS
                  </span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
