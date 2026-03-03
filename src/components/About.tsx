"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { HiCode, HiBriefcase, HiLightningBolt } from "react-icons/hi";

const stats = [
  {
    label: "Years Experience",
    value: "2+",
    icon: HiBriefcase,
    color: "bg-emerald-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    label: "Projects Built",
    value: "5+",
    icon: HiCode,
    color: "bg-amber-500",
    glow: "rgba(245, 158, 11, 0.2)",
  },
  {
    label: "Technologies",
    value: "15+",
    icon: HiLightningBolt,
    color: "bg-sky-500",
    glow: "rgba(14, 165, 233, 0.2)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative aurora-bg">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate engineer turning ideas into impactful digital experiences"
        />

        <div className="flex flex-col gap-12">
          {/* Story */}
          <AnimatedSection className="space-y-6" delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              I&apos;m a{" "}
              <span className="text-text-primary font-semibold">
                Full-Stack MERN Developer
              </span>{" "}
              based in Cairo, Egypt, with a deep passion for building web
              applications that are not only functional but genuinely delightful
              to use.
            </p>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Through intensive training at{" "}
              <span className="text-text-primary font-semibold">ITI</span>{" "}
              (Information Technology Institute) and hands-on experience at
              companies like{" "}
              <span className="text-text-primary font-semibold">
                Qusah Stores
              </span>{" "}
              and{" "}
              <span className="text-text-primary font-semibold">DrCorp</span>,
              I&apos;ve honed my ability to architect scalable, enterprise-grade
              applications — from responsive React frontends to secure Node.js
              APIs and MongoDB databases.
            </p>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Beyond code, I&apos;m driven by{" "}
              <span className="text-accent font-semibold">leadership</span>. As
              the MERN Stack Track Leader at ITI, I guided peers through complex
              full-stack concepts, reinforcing my belief that great engineering
              thrives on collaboration and knowledge sharing.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="glass-card p-8 text-center group hover:border-accent/30 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 8px 24px ${stat.glow}` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className="text-4xl font-bold text-accent mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
