"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const experiences = [
  {
    type: "work",
    company: "Qusah Stores",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    description: [
      "Architecting scalable, responsive web applications using React.js and Next.js, serving enterprise-level ERP solutions",
      "Integrating secure RESTful APIs with role-based access control (RBAC), ensuring data protection for multi-tenant systems",
      "Optimizing application performance, maintainability, and reliability — delivering measurable improvements in load times",
      "Collaborating with cross-functional teams to align technical solutions with business goals and deliver robust features",
    ],
  },
  {
    type: "work",
    company: "DrCorp",
    role: "Full-Stack Developer",
    period: "Aug 2025 — Jan 2026",
    description: [
      "Built responsive, high-performance UIs with React.js, Next.js, and Tailwind CSS for a bilingual platform",
      "Designed and integrated RESTful APIs with secure authentication and RBAC for enterprise data workflows",
      "Drove performance optimization and SEO improvements, boosting visibility and user engagement",
    ],
  },
  {
    type: "work",
    company: "ITI — Information Technology Institute",
    role: "Full-Stack Web Development (MERN Track)",
    period: "Feb 2025 — Jul 2025",
    description: [
      "Completed intensive training program covering the full MERN stack — React, Node.js, Express.js, MongoDB",
      "Built real-world projects with modern tooling: Next.js, Tailwind CSS, Zod, React Hook Form, Shadcn UI",
      "Served as MERN Stack Track Leader, guiding peers through complex concepts and fostering collaboration",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="gradient-blob w-[500px] h-[400px] bg-accent top-[20%] right-[-200px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Experience "
          subtitle="My professional journey and academic background"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-accent/30" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 group">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        exp.type === "work"
                          ? "bg-accent/10 border-accent/30 group-hover:border-accent/60 group-hover:bg-accent/20"
                          : "bg-amber-500/10 border-amber-500/30 group-hover:border-amber-500/60 group-hover:bg-amber-500/20"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <HiBriefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      ) : (
                        <HiAcademicCap className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="glass-card p-6 flex-1 group-hover:border-accent/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <div>
                        <h3
                          className="text-lg font-semibold text-text-primary"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-text-muted text-sm font-medium px-3 py-1 rounded-full bg-bg-primary/60 border border-border-subtle whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm leading-relaxed flex gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
