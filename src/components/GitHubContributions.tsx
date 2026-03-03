"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";
import { HiCode, HiStar, HiUserGroup } from "react-icons/hi";

const stats = [
  {
    label: "Total Contributions",
    value: "1,247",
    icon: HiCode,
    color: "bg-emerald-500",
  },
  {
    label: "Repositories",
    value: "24",
    icon: HiStar,
    color: "bg-amber-500",
  },
  {
    label: "Pull Requests",
    value: "89",
    icon: HiUserGroup,
    color: "bg-sky-500",
  },
];

// Generate sample contribution data (in a real app, fetch from GitHub API)
const generateContributionData = () => {
  const data = [];
  const weeks = 53;
  const daysPerWeek = 7;

  for (let week = 0; week < weeks; week++) {
    const weekData = [];
    for (let day = 0; day < daysPerWeek; day++) {
      const contributions = Math.floor(Math.random() * 15); // 0-14 contributions
      weekData.push({
        date: new Date(
          Date.now() -
            (weeks - week) * 7 * 24 * 60 * 60 * 1000 +
            day * 24 * 60 * 60 * 1000,
        ),
        count: contributions,
        level:
          contributions === 0
            ? 0
            : contributions < 3
              ? 1
              : contributions < 6
                ? 2
                : contributions < 10
                  ? 3
                  : 4,
      });
    }
    data.push(weekData);
  }
  return data;
};

export default function GitHubContributions() {
  const [hoveredCell, setHoveredCell] = useState<{
    date: Date;
    count: number;
    level: number;
  } | null>(null);
  const contributionData = generateContributionData();

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-bg-secondary/40 hover:bg-bg-secondary/60";
      case 1:
        return "bg-emerald-500/25 hover:bg-emerald-500/40";
      case 2:
        return "bg-emerald-500/50 hover:bg-emerald-500/65";
      case 3:
        return "bg-emerald-500/75 hover:bg-emerald-500/90";
      case 4:
        return "bg-emerald-500 hover:bg-emerald-400";
      default:
        return "bg-bg-secondary/40 hover:bg-bg-secondary/60";
    }
  };

  return (
    <section id="github" className="py-24 md:py-32 relative">
      <div className="gradient-blob w-[500px] h-[400px] bg-accent-violet top-[20%] left-[-200px]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="GitHub Activity"
          subtitle="My open-source contributions and coding activity"
        />

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="glass-card p-6 text-center group h-full"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="text-3xl font-bold text-accent mb-2"
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

        {/* GitHub Contribution Graph */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                  <FaGithub className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Contribution Activity
                  </h3>
                  <p className="text-text-muted text-sm">
                    Last 12 months of coding activity
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Contribution Calendar */}
            <div className="rounded-xl overflow-hidden bg-bg-primary/30 p-6 md:p-8 relative border border-border-subtle/50">
              <div className="w-full">
                <div className="flex gap-[3px] justify-center">
                  {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm ${getColorClass(day.level)} transition-colors duration-200 cursor-pointer`}
                          onMouseEnter={() => setHoveredCell(day)}
                          onMouseLeave={() => setHoveredCell(null)}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Tooltip */}
              {hoveredCell && (
                <div
                  className="fixed z-[9999] pointer-events-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="bg-bg-primary border-2 border-emerald-500/30 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-emerald-400">
                        {hoveredCell.count}
                      </span>
                      <span className="text-text-secondary text-sm">
                        {hoveredCell.count === 1
                          ? "contribution"
                          : "contributions"}
                      </span>
                    </div>
                    <div className="text-text-muted text-xs mt-1">
                      {hoveredCell.date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Legend */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-subtle/30">
                <span className="text-xs text-text-muted font-medium">
                  Less
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm bg-bg-secondary/40" />
                  <div className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm bg-emerald-500/25" />
                  <div className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm bg-emerald-500/50" />
                  <div className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm bg-emerald-500/75" />
                  <div className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-3 md:h-3 rounded-sm bg-emerald-500" />
                </div>
                <span className="text-xs text-text-muted font-medium">
                  More
                </span>
              </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="mt-8 text-center">
              <a
                href="https://github.com/AbdelrhmanRabie3"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Full GitHub Profile</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
