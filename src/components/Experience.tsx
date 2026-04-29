"use client";

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
      "Architecting scalable, responsive web applications using React.js and Next.js, serving enterprise-level ERP solutions",
      "Integrating secure RESTful APIs with role-based access control (RBAC), ensuring data protection for multi-tenant systems",
      "Optimizing application performance, maintainability, and reliability — delivering measurable improvements in load times",
      "Collaborating with cross-functional teams to align technical solutions with business goals",
    ],
    tech: ["React.js", "Next.js", "RBAC", "REST API"],
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
      "Built responsive, high-performance UIs with React.js, Next.js, and Tailwind CSS for a bilingual platform",
      "Designed and integrated RESTful APIs with secure authentication and RBAC for enterprise data workflows",
      "Drove performance optimization and SEO improvements, boosting visibility and user engagement",
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    quest: "QUEST_03",
    type: "education",
    company: "ITI — Information Technology Institute",
    role: "Full-Stack Web Development (MERN Track)",
    period: "Feb 2025 — Jul 2025",
    status: "COMPLETED",
    accent: "#7c3aed",
    description: [
      "Completed intensive training covering the full MERN stack — React, Node.js, Express.js, MongoDB",
      "Built real-world projects with modern tooling: Next.js, Tailwind CSS, Zod, React Hook Form, Shadcn UI",
      "Served as MERN Stack Track Leader, guiding peers through complex concepts and fostering collaboration",
    ],
    tech: ["MERN", "Next.js", "Shadcn UI", "React Hook Form"],
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
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.025em",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
            }}
          >
            Quest <span className="gradient-text">Log</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            My professional journey — each role a new level unlocked.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-[26px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #00ff88, #00d4ff, #7c3aed)",
              opacity: 0.25,
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="flex gap-6 md:gap-8 group">
                  {/* Quest marker */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-10 h-10 md:w-13 md:h-13 rounded-xl flex items-center justify-center border transition-all duration-300 z-10"
                      style={{
                        background: `${exp.accent}12`,
                        borderColor: `${exp.accent}35`,
                        boxShadow: `0 0 0 0 ${exp.accent}20`,
                        transition:
                          "box-shadow 0.3s ease, border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = `0 0 20px ${exp.accent}30`;
                        el.style.borderColor = `${exp.accent}70`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = `0 0 0 0 ${exp.accent}20`;
                        el.style.borderColor = `${exp.accent}35`;
                      }}
                    >
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
                  <div className="glass-card p-6 flex-1 group-hover:border-opacity-50 transition-all duration-300">
                    {/* Card top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        {/* Quest badge + status */}
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-[10px] uppercase tracking-widest"
                            style={{
                              color: exp.accent,
                              fontFamily: "'JetBrains Mono', monospace",
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
                                  : "rgba(68,68,90,0.3)",
                              color:
                                exp.status === "ACTIVE" ? "#00ff88" : "#44445a",
                              border: `1px solid ${exp.status === "ACTIVE" ? "rgba(0,255,136,0.25)" : "rgba(68,68,90,0.4)"}`,
                              fontFamily: "'JetBrains Mono', monospace",
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
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
                        className="text-text-muted text-xs px-3 py-1.5 rounded-lg whitespace-nowrap self-start"
                        style={{
                          border: "1px solid #1a1a2e",
                          background: "rgba(4,4,10,0.6)",
                          fontFamily: "'JetBrains Mono', monospace",
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
                          className="text-[11px] px-2.5 py-1 rounded-md text-text-muted"
                          style={{
                            border: `1px solid ${exp.accent}25`,
                            background: `${exp.accent}08`,
                            fontFamily: "'JetBrains Mono', monospace",
                            color: exp.accent,
                          }}
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
