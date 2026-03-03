"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "Abdelrhman.mohamed.rabie@gmail.com",
    href: "mailto:Abdelrhman.mohamed.rabie@gmail.com",
    color: "bg-emerald-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+201011676929",
    href: "tel:+201011676929",
    color: "bg-amber-500",
    glow: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
    color: "bg-sky-500",
    glow: "rgba(14, 165, 233, 0.2)",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/AbdelrhmanRabie3",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelrhman-rabie/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="gradient-blob w-[600px] h-[500px] bg-accent bottom-[-200px] right-[-200px]" />
      <div className="gradient-blob w-[400px] h-[400px] bg-accent-cyan top-[10%] left-[-200px]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-accent">Amazing</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, and
            interesting projects. Feel free to reach out!
          </p>
          <div className="mt-6 flex justify-center gap-1.5">
            <span className="w-10 h-1 rounded-full bg-accent" />
            <span className="w-3 h-1 rounded-full bg-accent opacity-70" />
            <span className="w-2 h-1 rounded-full bg-accent opacity-40" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            const Wrapper = info.href ? "a" : "div";
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Wrapper
                  {...(info.href ? { href: info.href } : {})}
                  className="glass-card p-6 text-center group block h-full"
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 4px 20px ${info.glow}` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-muted text-xs uppercase tracking-wider font-medium mb-1.5">
                    {info.label}
                  </p>
                  <p className="text-text-primary text-sm font-medium break-all">
                    {info.value}
                  </p>
                </Wrapper>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="flex justify-center gap-4" delay={0.3}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass-card text-text-secondary hover:text-text-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{social.label}</span>
              </Link>
            );
          })}
        </AnimatedSection>

        <AnimatedSection className="mt-12 text-center" delay={0.4}>
          <Link
            href="mailto:abdelrhman.mohamed.rabie@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105"
          >
            <HiOutlineMail className="w-5 h-5" />
            Send Me a Message
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
