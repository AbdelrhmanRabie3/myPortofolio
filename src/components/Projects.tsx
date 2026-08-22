import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import AnimatedSection from "./AnimatedSection";
import ProjectScreens from "./ProjectScreens";
import { HiArrowUpRight } from "react-icons/hi2";

/* Captures are imported rather than referenced by path so Next reads their
   intrinsic dimensions at build time — the browser frame then reserves exact
   space (no layout shift) and each screenshot is shown uncropped. */
import salesHeroShot from "../../public/projects/sales-hero.webp";
import salesHeroTablet from "../../public/projects/sales-hero-tablet.webp";
import salesHeroPhone from "../../public/projects/sales-hero-mobile.webp";
import thimarShot from "../../public/projects/thimar.webp";
import thimarTablet from "../../public/projects/thimar-tablet.webp";
import thimarPhone from "../../public/projects/thimar-mobile.webp";
import drcorpShot from "../../public/projects/drcorp.webp";
import drcorpTablet from "../../public/projects/drcorp-tablet.webp";
import drcorpPhone from "../../public/projects/drcorp-mobile.webp";
import easylinkShot from "../../public/projects/easylink.webp";
import easylinkTablet from "../../public/projects/easylink-tablet.webp";
import easylinkPhone from "../../public/projects/easylink-mobile.webp";
import qusahShot from "../../public/projects/qusah-store.webp";
import qusahTablet from "../../public/projects/qusah-store-tablet.webp";
import qusahPhone from "../../public/projects/qusah-store-mobile.webp";
import bareqShot from "../../public/projects/bareq.webp";
import bareqTablet from "../../public/projects/bareq-tablet.webp";
import bareqPhone from "../../public/projects/bareq-mobile.webp";

type Project = {
  file: string;
  title: string;
  status: string;
  /** The project's own brand colour, lifted to a tonal variant that clears
   *  WCAG AA (>=4.5:1) on the near-black page. Drives every tinted edge,
   *  chip and glow on the row, so each card reads in its product's palette. */
  accent: string;
  description: string;
  tech: string[];
  link: string;
  /** What the mock browser's address bar reads. */
  domain: string;
  shot: StaticImageData;
  /** Same page at the two narrower breakpoints. Optional: a project with no
   *  capture at a given size simply doesn't draw that device. */
  tablet?: StaticImageData;
  phone?: StaticImageData;
};

const projects: Project[] = [
  {
    file: "FILE_01",
    title: "Sales Hero",
    status: "ACTIVE",
    accent: "#3386e6", // SalesHero blue
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
    domain: "sales-hero-fe.qusah.workers.dev",
    shot: salesHeroShot,
    tablet: salesHeroTablet,
    phone: salesHeroPhone,
  },
  {
    file: "FILE_02",
    title: "Thimar",
    status: "ACTIVE",
    accent: "#2b9491", // Thimar teal
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
    domain: "thimarln.com",
    shot: thimarShot,
    tablet: thimarTablet,
    phone: thimarPhone,
  },
  {
    file: "FILE_03",
    title: "DrCorp",
    status: "ACTIVE",
    accent: "#d449d2", // DrCorp magenta
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
    domain: "drcorp.co/ar",
    shot: drcorpShot,
    tablet: drcorpTablet,
    phone: drcorpPhone,
  },
  {
    file: "FILE_04",
    title: "EasyLink",
    status: "ACTIVE",
    accent: "#239761", // EasyLink mint green
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
    domain: "easylink-ksa.com/ar",
    shot: easylinkShot,
    tablet: easylinkTablet,
    phone: easylinkPhone,
  },
  {
    file: "FILE_05",
    title: "Qusah Store",
    status: "ACTIVE",
    accent: "#677ee4", // Qusah indigo
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
    domain: "qusahstore.com",
    shot: qusahShot,
    tablet: qusahTablet,
    phone: qusahPhone,
  },
  {
    file: "FILE_06",
    title: "Bareq",
    status: "ACTIVE",
    accent: "#e35459", // Bareq red
    description:
      "Salla storefront for one of Saudi Arabia's leading cleaning-product brands. Custom Twilight theme work across category, product, and checkout journeys, tuned for mobile-first Arabic shoppers.",
    tech: ["Salla Platform", "Twilight Engine", "JavaScript", "CSS3"],
    link: "https://bareq.sa/",
    domain: "bareq.sa",
    shot: bareqShot,
    tablet: bareqTablet,
    phone: bareqPhone,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Chapter header */}
        <AnimatedSection className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="chapter-badge">CHAPTER_01</span>
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

        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {projects.map((project, i) => {
            /* Odd rows mirror: mock-up on the right, brief on the left. The
               phone follows to the outer edge so it never crowds the copy. */
            const mirrored = i % 2 === 1;

            return (
              <AnimatedSection
                key={project.title}
                from={mirrored ? "right" : "left"}
              >
                <article
                  className="mission-row grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  style={{ "--accent": project.accent } as CSSProperties}
                >
                  {/* Device mock-up. The link here is a mouse convenience —
                      hidden from the a11y tree so the CTA below stays the one
                      announced link to this project. */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    tabIndex={-1}
                    className={`block lg:col-span-7 ${
                      mirrored ? "lg:order-2" : ""
                    }`}
                  >
                    <ProjectScreens
                      title={project.title}
                      url={project.domain}
                      desktop={project.shot}
                      tablet={project.tablet}
                      mobile={project.phone}
                      side={mirrored ? "right" : "left"}
                    />
                  </a>

                  {/* Brief */}
                  <div
                    className={`lg:col-span-5 ${mirrored ? "lg:order-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="file-tag">{project.file}</span>
                      <span className="h-px flex-1 bg-border-subtle" />
                      <span
                        className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full"
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

                    <h3
                      className="text-text-primary font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.02em",
                        fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="accent-chip text-[11px] px-2.5 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-xs font-semibold transition-opacity duration-300 hover:opacity-75"
                        style={{
                          color: project.accent,
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        VIEW MISSION
                        <span className="sr-only">
                          {" "}
                          — open {project.title} live site
                        </span>
                        <HiArrowUpRight
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                      <span
                        className="text-[11px] text-text-muted"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.tech.length} DEPS
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
