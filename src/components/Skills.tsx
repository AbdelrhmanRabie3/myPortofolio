import type { CSSProperties } from "react";
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
  SiMongoose,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiClaude,
  SiOpenai,
  SiPostman,
  SiNpm,
  SiJira,
  SiClickup,
  SiSlack,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiMui,
  SiGraphql,
  SiJsonwebtokens,
  SiSalla,
  SiShadcnui,
  SiReactquery,
  SiReacthookform,
  SiChartdotjs,
  SiZod,
} from "react-icons/si";
import {
  HiCube,
  HiTemplate,
  HiUserGroup,
  HiLightningBolt,
  HiDatabase,
  HiCloud,
  HiColorSwatch,
  HiShoppingCart,
  HiShieldCheck,
  HiServer,
  HiSearch,
  HiGlobeAlt,
  HiChip,
  HiBeaker,
  HiSparkles,
  HiDeviceMobile,
} from "react-icons/hi";

const skillCategories = [
  {
    num: "01",
    title: "Front-End",
    file: "frontend.ts",
    accent: "#00ff88",
    icon: HiTemplate,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: HiDatabase },
      { name: "Context API", icon: SiReact },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Zod", icon: SiZod },
      { name: "Chart.js", icon: SiChartdotjs },
    ],
  },
  {
    num: "02",
    title: "UI & Styling",
    file: "styling.css",
    accent: "#00d4ff",
    icon: HiColorSwatch,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Material UI", icon: SiMui },
      { name: "Bootstrap 5", icon: SiBootstrap },
      { name: "CSS3", icon: SiCss3 },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Responsive Design", icon: HiDeviceMobile },
    ],
  },
  {
    num: "03",
    title: "Back-End & Database",
    file: "backend.ts",
    accent: "#f97316",
    icon: HiCube,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API Design", icon: HiCloud },
      { name: "GraphQL", icon: SiGraphql },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
      { name: "Role-Based Access Control", icon: HiShieldCheck },
      { name: "MVC Architecture", icon: HiTemplate },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Schema Design", icon: HiDatabase },
    ],
  },
  {
    num: "04",
    title: "Engineering",
    file: "engineering.ts",
    accent: "#7c3aed",
    icon: HiLightningBolt,
    skills: [
      { name: "SSR / SSG / ISR", icon: HiServer },
      { name: "Performance Optimization", icon: HiLightningBolt },
      { name: "SEO", icon: HiSearch },
      { name: "i18n & RTL", icon: HiGlobeAlt },
      { name: "Design Patterns", icon: HiCube },
      { name: "OOP", icon: HiCube },
      { name: "Data Structures & Algorithms", icon: HiChip },
      { name: "Unit Testing", icon: HiBeaker },
    ],
  },
  {
    num: "05",
    title: "E-Commerce",
    file: "salla.js",
    accent: "#ff4f8b",
    icon: HiShoppingCart,
    skills: [
      { name: "Salla Platform", icon: SiSalla },
      { name: "Twilight Engine", icon: SiSalla },
      { name: "Theme Development", icon: HiTemplate },
      { name: "App Development", icon: HiCube },
      { name: "Storefront JS SDK", icon: SiJavascript },
      { name: "Arabic / RTL Storefronts", icon: HiGlobeAlt },
    ],
  },
  {
    num: "06",
    title: "Tools & AI",
    file: "toolchain.ts",
    accent: "#facc15",
    icon: HiSparkles,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "npm", icon: SiNpm },
      { name: "Jira", icon: SiJira },
      { name: "ClickUp", icon: SiClickup },
      { name: "Slack", icon: SiSlack },
      { name: "Agile / Scrum", icon: HiUserGroup },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Claude", icon: SiClaude },
      { name: "Codex", icon: SiOpenai },
      { name: "Antigravity", icon: HiSparkles },
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
              <AnimatedSection
                key={cat.title}
                delay={i * 0.08}
                from={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className="glass-card accent-card h-full overflow-hidden"
                  style={{ "--accent": cat.accent } as CSSProperties}
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
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                    <span
                      className="text-[11px] uppercase tracking-widest flex-shrink-0"
                      style={{
                        color: cat.accent,
                        fontFamily: "var(--font-mono)",
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
                          className="skill-chip inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-text-secondary text-xs sm:text-sm font-medium cursor-default select-none"
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
