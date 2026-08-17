import type { CSSProperties } from "react";
import AnimatedSection from "./AnimatedSection";
import { HiBriefcase, HiAcademicCap, HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    quest: "QUEST_01",
    type: "work",
    company: "Qusah Stores",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    status: "ACTIVE",
    accent: "#00ff88",
    description: [
      "Building and shipping scalable React.js and Next.js applications for enterprise ERP and e-commerce products, working across the front end and the API layer",
      "Developing custom Salla storefront themes and apps on the Twilight engine — product, cart, and checkout flows — for Saudi retail clients",
      "Consuming REST APIs with JWT authentication and role-based access control, gating both data fetching and client-side UI by user role",
      "Improving performance, reliability, and maintainability through component refactoring, image optimization, and deliberate rendering strategy (SSR / ISR)",
      "Collaborating with cross-functional teams to deliver features aligned with business requirements, in an Agile workflow using Jira and ClickUp",
    ],
    tech: ["Next.js", "React.js", "Salla / Twilight", "RBAC", "SSR / ISR"],
  },
  {
    quest: "QUEST_02",
    type: "work",
    company: "DrCorp",
    role: "Full-Stack Developer",
    period: "Aug 2025 — Jan 2026",
    status: "COMPLETED",
    accent: "#00d4ff",
    description: [
      "Designed and built REST APIs in Node.js and Express following an MVC architecture, with MongoDB / Mongoose schema modelling and validation",
      "Implemented JWT authentication and role-based access control, protecting API routes by role and mirroring the same permissions in the UI",
      "Built bilingual (Arabic / English) Next.js front ends with full RTL support — layout mirroring, locale-aware routing, and font switching",
      "Shared a single Zod schema across client and server to validate forms in one place instead of two",
      "Improved SEO and page load through server-side rendering, structured metadata, and image optimization",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Zod", "i18n / RTL"],
  },
  {
    quest: "QUEST_03",
    type: "education",
    company: "ITI — Information Technology Institute, Mansoura",
    role: "Intensive Training Program — Full-Stack Web Development (MERN)",
    period: "Feb 2025 — Jul 2025",
    status: "COMPLETED",
    accent: "#7c3aed",
    description: [
      "Completed intensive training covering the full MERN stack — React, Node.js, Express.js, MongoDB",
      "Built real-world projects with modern tooling: Next.js, Tailwind CSS, Zod, React Hook Form, Shadcn UI",
      "Selected as MERN Stack Track Leader for the cohort, guiding peers through complex concepts and fostering collaboration",
    ],
    tech: ["MERN", "Next.js", "Shadcn UI", "React Hook Form"],
  },
  {
    quest: "QUEST_04",
    type: "education",
    company: "Route Academy",
    role: "Front-End Diploma",
    period: "Sep 2024 — Feb 2025",
    status: "COMPLETED",
    accent: "#f97316",
    description: [
      "Built a rigorous front-end foundation — HTML5, CSS3, JavaScript (ES6+), Bootstrap, and React.js",
      "Shipped hands-on projects covering responsive layouts, component architecture, and API integration",
    ],
    tech: ["JavaScript", "React.js", "CSS3", "Bootstrap"],
  },
  {
    quest: "QUEST_05",
    type: "education",
    company: "Mansoura University",
    role: "B.Sc. Electronics & Communications Engineering",
    period: "2019 — 2024",
    status: "COMPLETED",
    accent: "#ff4f8b",
    description: [
      "Graduated with Excellent honours — cumulative grade 88.67%, graduation project rated Excellent",
      "Served as ECE Department Administrative Coordinator (2020–2024), organising departmental activities alongside full-time study",
    ],
    tech: ["Engineering", "Problem Solving", "Leadership"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Chapter header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="chapter-badge">CHAPTER_03</span>
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
            Quest <span className="gradient-text">Log</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            My professional journey and training — each role a new level
            unlocked.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-[26px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #00ff88, #00d4ff, #7c3aed, #f97316, #ff4f8b)",
              opacity: 0.25,
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.08} from="left">
                <div
                  className="quest-item flex gap-3 sm:gap-6 md:gap-8"
                  style={{ "--accent": exp.accent } as CSSProperties}
                >
                  {/* Quest marker */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className="quest-marker w-10 h-10 md:w-13 md:h-13 rounded-xl flex items-center justify-center z-10">
                      {exp.type === "work" ? (
                        <HiBriefcase
                          className="w-4 h-4 md:w-5 md:h-5"
                          style={{ color: exp.accent }}
                        />
                      ) : (
                        <HiAcademicCap
                          className="w-4 h-4 md:w-5 md:h-5"
                          style={{ color: exp.accent }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Quest card */}
                  <div className="glass-card p-4 sm:p-6 flex-1 min-w-0">
                    {/* Card top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        {/* Quest badge + status */}
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-[10px] uppercase tracking-widest"
                            style={{
                              color: exp.accent,
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {exp.quest}
                          </span>
                          <span
                            className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded"
                            style={{
                              background:
                                exp.status === "ACTIVE"
                                  ? "rgba(0,255,136,0.1)"
                                  : "rgba(68,68,90,0.2)",
                              color:
                                exp.status === "ACTIVE" ? "#00ff88" : "#7a7a9a",
                              border: `1px solid ${exp.status === "ACTIVE" ? "rgba(0,255,136,0.25)" : "rgba(120,120,160,0.25)"}`,
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {exp.status === "COMPLETED" ? (
                              <HiCheckCircle className="w-2.5 h-2.5" />
                            ) : (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                              </span>
                            )}
                            {exp.status}
                          </span>
                        </div>

                        <h3
                          className="text-text-primary font-semibold text-base"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: exp.accent }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <span
                        className="text-text-muted text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap self-start flex-shrink-0"
                        style={{
                          border: "1px solid #1a1a2e",
                          background: "rgba(4,4,10,0.6)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm leading-relaxed flex gap-2.5"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: exp.accent, opacity: 0.6 }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="accent-chip text-[11px] px-2.5 py-1"
                          style={{ color: exp.accent }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
