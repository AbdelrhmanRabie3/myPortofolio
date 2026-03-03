"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
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
  SiGraphql,
  SiSlack,
} from "react-icons/si";
import {
  HiCube,
  HiTemplate,
  HiUserGroup,
  HiLightningBolt,
} from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend",
    icon: HiTemplate,
    color: "bg-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    icon: HiCube,
    color: "bg-amber-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: SiGraphql },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: HiLightningBolt,
    color: "bg-sky-500",
    glowColor: "rgba(14, 165, 233, 0.15)",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Slack", icon: SiSlack },
    ],
  },
  {
    title: "Concepts",
    icon: HiUserGroup,
    color: "bg-rose-500",
    glowColor: "rgba(244, 63, 94, 0.15)",
    skills: [
      { name: "Responsive Design", icon: HiTemplate },
      { name: "Design Patterns", icon: HiCube },
      { name: "OOP", icon: HiCube },
      { name: "Agile / Scrum", icon: HiUserGroup },
      { name: "MVC Architecture", icon: HiTemplate },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="gradient-blob w-[600px] h-[400px] bg-accent-violet top-0 left-[-200px]" />
      <div className="gradient-blob w-[400px] h-[300px] bg-accent-cyan bottom-0 right-[-150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const CategoryIcon = category.icon;
            return (
              <AnimatedSection key={category.title} delay={i * 0.12}>
                <div
                  className="glass-card p-6 h-full group"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-2.5 rounded-xl ${category.color} shadow-lg`}
                      style={{ boxShadow: `0 4px 20px ${category.glowColor}` }}
                    >
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-bg-primary/80 border border-border-subtle text-text-secondary text-sm font-medium hover:border-accent/40 hover:text-text-primary hover:bg-accent/5 hover:shadow-lg hover:shadow-accent-glow transition-all duration-300 cursor-default"
                        >
                          <SkillIcon className="w-4 h-4" />
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
