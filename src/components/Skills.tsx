"use client";

import AnimatedSection from "./AnimatedSection";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiBootstrap,
  SiReactrouter,
  SiSocketdotio,
  SiStripe,
  SiRadixui,
  SiChartdotjs,
  SiZod,
} from "react-icons/si";
import {
  HiCube,
  HiTemplate,
  HiUserGroup,
  HiLightningBolt,
  HiDatabase,
  HiRefresh,
  HiCloud,
} from "react-icons/hi";

const skillCategories = [
  {
    num: "01",
    title: "Frontend",
    file: "frontend.ts",
    accent: "#00ff88",
    glow: "rgba(0,255,136,0.08)",
    icon: HiTemplate,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiRadixui },
      { name: "Redux", icon: SiRedux },
      { name: "React Query", icon: HiRefresh },
      { name: "Zustand", icon: HiDatabase },
      { name: "React Router", icon: SiReactrouter },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Zod", icon: SiZod },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    num: "02",
    title: "Backend",
    file: "backend.ts",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.08)",
    icon: HiCube,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: HiCloud },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Stripe", icon: SiStripe },
    ],
  },
  {
    num: "03",
    title: "Tools & Workflow",
    file: "toolchain.ts",
    accent: "#00d4ff",
    glow: "rgba(0,212,255,0.08)",
    icon: HiLightningBolt,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    num: "04",
    title: "Concepts & Practices",
    file: "concepts.ts",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.08)",
    icon: HiUserGroup,
    skills: [
      { name: "Responsive Design", icon: HiTemplate },
      { name: "Design Patterns", icon: HiCube },
      { name: "OOP", icon: HiCube },
      { name: "Agile / Scrum", icon: HiUserGroup },
      { name: "MVC Architecture", icon: HiTemplate },
      { name: "Component Architecture", icon: SiReact },
      { name: "Performance Optimization", icon: HiLightningBolt },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Chapter header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="chapter-badge">CHAPTER_02</span>
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
            The <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            Tools and technologies I wield to ship great products.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div
                  className="glass-card h-full overflow-hidden group"
                  style={{
                    boxShadow: `0 0 0 0 ${cat.glow}`,
                    transition: "box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 0 40px ${cat.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 0 0 0 ${cat.glow}`;
                  }}
                >
                  {/* Card header */}
                  <div
                    className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-border-subtle"
                    style={{ background: `${cat.accent}08` }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${cat.accent}18`,
                          border: `1px solid ${cat.accent}30`,
                        }}
                      >
                        <CatIcon
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          style={{ color: cat.accent }}
                        />
                      </div>
                      <h3
                        className="font-semibold text-text-primary text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-widest flex-shrink-0"
                      style={{
                        color: cat.accent,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {cat.num}
                    </span>
                  </div>

                  {/* Skill slots */}
                  <div className="p-4 sm:p-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-text-secondary text-xs sm:text-sm font-medium transition-all duration-300 cursor-default select-none"
                          style={{
                            background: "rgba(13,13,26,0.8)",
                            border: "1px solid #1a1a2e",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLSpanElement;
                            el.style.borderColor = `${cat.accent}50`;
                            el.style.color = "#e8e8f2";
                            el.style.background = `${cat.accent}0a`;
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLSpanElement;
                            el.style.borderColor = "#1a1a2e";
                            el.style.color = "";
                            el.style.background = "rgba(13,13,26,0.8)";
                          }}
                        >
                          <SkillIcon
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
                            style={{ color: cat.accent }}
                          />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
