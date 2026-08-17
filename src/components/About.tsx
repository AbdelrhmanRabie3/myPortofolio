"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const storyCards = [
  {
    file: "// character_intro.md",
    borderColor: "#00ff88",
    text: (
      <>
        I&apos;m a{" "}
        <span className="text-text-primary font-semibold">
          Full-Stack MERN Developer
        </span>{" "}
        based in <span className="text-accent font-semibold">Cairo, Egypt</span>
        , currently a Software Engineer at{" "}
        <span className="text-text-primary font-semibold">Qusah Stores</span>. I
        build{" "}
        <span className="text-accent-cyan font-semibold">
          scalable, high-performance
        </span>{" "}
        web applications end to end — from responsive React interfaces to the
        secure APIs behind them.
      </>
    ),
  },
  {
    file: "// training_arc.md",
    borderColor: "#7c3aed",
    text: (
      <>
        My path ran from a{" "}
        <span className="text-text-primary font-semibold">
          B.Sc. in Electronics &amp; Communications Engineering
        </span>{" "}
        at Mansoura University (Excellent with Honors) through the{" "}
        <span className="text-text-primary font-semibold">Route Academy</span>{" "}
        front-end diploma and the intensive MERN program at{" "}
        <span className="text-text-primary font-semibold">ITI</span> — then
        straight into shipping production systems at{" "}
        <span className="text-text-primary font-semibold">DrCorp</span> and{" "}
        <span className="text-text-primary font-semibold">Qusah Stores</span>.
      </>
    ),
  },
  {
    file: "// commerce_module.md",
    borderColor: "#ff4f8b",
    text: (
      <>
        Day to day I work across enterprise{" "}
        <span className="text-text-primary font-semibold">ERP</span> products
        and{" "}
        <span className="text-accent font-semibold">
          custom Salla storefronts
        </span>{" "}
        — building themes from scratch on the Twilight engine for Saudi retail
        brands, covering product, cart, and checkout flows in fully{" "}
        <span className="text-accent-cyan font-semibold">Arabic / RTL</span>{" "}
        interfaces.
      </>
    ),
  },
  {
    file: "// leadership_module.md",
    borderColor: "#00d4ff",
    text: (
      <>
        Beyond code, I&apos;m driven by{" "}
        <span className="text-accent font-semibold">leadership</span>. As the{" "}
        <span className="text-text-primary font-semibold">
          MERN Stack Track Leader
        </span>{" "}
        at ITI, I guided peers through complex full-stack concepts, reinforcing
        my belief that great engineering thrives on collaboration and knowledge
        sharing.
      </>
    ),
  },
];

const profileStats = [
  { key: "Name", value: "Abdelrahman Rabie", color: "#e8e8f2" },
  { key: "Role", value: "Full-Stack Dev", color: "#00ff88" },
  { key: "Specialty", value: "MERN + Salla", color: "#00d4ff" },
  { key: "Location", value: "Cairo, Egypt", color: "#8888aa" },
  { key: "Status", value: "🟢 Available for hire", color: "#00ff88" },
];

const xpBars = [
  { skill: "Frontend", xp: 92 },
  { skill: "Backend", xp: 80 },
  { skill: "Salla / Twilight", xp: 85 },
  { skill: "UI / UX", xp: 85 },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Chapter header */}
        <AnimatedSection className="mb-14">
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
            Origin <span className="gradient-text">Story</span>
          </h2>
          <p className="text-text-secondary mt-2 text-lg max-w-2xl">
            Every great developer has a story. Here&apos;s mine.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* ── Story Cards (3/5) ── */}
          <div className="lg:col-span-3 space-y-5">
            {storyCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div
                  className="glass-card p-6 relative"
                  style={{ borderLeft: `3px solid ${card.borderColor}` }}
                >
                  <div
                    className="text-text-muted text-[11px] uppercase tracking-widest mb-3"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {card.file}
                  </div>
                  <p className="text-text-secondary text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}

            {/* Stats row */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                {[
                  { value: "2+", label: "Years Exp", color: "#00ff88" },
                  { value: "6", label: "Live Projects", color: "#00d4ff" },
                  { value: "20+", label: "Technologies", color: "#7c3aed" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card p-3 sm:p-4 text-center"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold"
                      style={{
                        color: stat.color,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* ── Character Card (2/5) ── */}
          <AnimatedSection className="lg:col-span-2" delay={0.3}>
            <div
              className="glass-card p-6 sticky top-24"
              style={{ boxShadow: "0 0 40px rgba(0,255,136,0.04)" }}
            >
              {/* Header */}
              <div
                className="text-text-muted text-[11px] uppercase tracking-widest mb-5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="text-accent">■</span> CHARACTER_PROFILE.json
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div
                    className="w-44 h-44 rounded-2xl overflow-hidden"
                    style={{
                      border: "2px solid rgba(0,255,136,0.4)",
                      boxShadow: "0 0 40px rgba(0,255,136,0.15)",
                    }}
                  >
                    <Image
                      src="/me.jpeg"
                      alt="Abdelrahman Rabie"
                      width={176}
                      height={176}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{
                      background: "#00ff88",
                      color: "#04040a",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    LVL 2
                  </div>
                </div>
              </div>

              {/* Profile Stats */}
              <div
                className="space-y-2.5 text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {profileStats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-text-muted text-xs">{item.key}</span>
                    <span
                      style={{ color: item.color }}
                      className="text-xs text-right"
                    >
                      {item.value}
                    </span>
                  </div>
                ))}

                <div className="h-px bg-border-subtle my-3" />

                {/* XP Bars */}
                <div className="space-y-3">
                  <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">
                    Skill Levels
                  </div>
                  {xpBars.map((bar) => (
                    <div key={bar.skill}>
                      <div className="flex justify-between text-[11px] mb-1.5">
                        <span className="text-text-secondary">{bar.skill}</span>
                        <span className="text-accent">{bar.xp} XP</span>
                      </div>
                      <div className="xp-bar">
                        <motion.div
                          className="xp-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.xp}%` }}
                          transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.4,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
