"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Sales Hero",
    status: "Live",
    description:
      "A comprehensive sales management platform designed to streamline customer relationships, track leads, and boost team productivity. Features real-time analytics, automated workflows, and intuitive dashboard interfaces.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "Chart.js",
      "Zod",
      "React Hook Form",
      "Zustand",
      "react-query",
    ],
    gradient: "from-emerald-500 via-teal-400 to-cyan-400",
    iconBg: "bg-emerald-500/10",
    link: "https://sales-hero-fe.vercel.app/ar",
  },
  {
    title: "Thimar",
    status: "Live",
    description:
      "A full-stack responsive bilingual (Arabic & English) company platform built for performance, accessibility, and modern UX. Features server-side rendering, form validation, and a complete RESTful API backend.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    gradient: "from-amber-500 via-yellow-400 to-orange-400",
    iconBg: "bg-amber-500/10",
    link: "https://thimarln.com",
  },
  {
    title: "DrCorp",
    status: "Live",
    description:
      "A bilingual corporate website delivering a polished, accessible experience in both Arabic and English. Focused on performance optimization with SSR, modern component architecture, and seamless API integration.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    gradient: "from-sky-500 via-blue-400 to-indigo-400",
    iconBg: "bg-sky-500/10",
    link: "https://drcorp.co/ar",
  },
  {
    title: "EasyLink",
    status: "Live",
    description:
      "A responsive company website focused on performance and modern UX, featuring dynamic routing, clean design patterns, and optimized SEO for maximum discoverability.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Shadcn UI",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    gradient: "from-rose-500 via-pink-400 to-fuchsia-400",
    iconBg: "bg-rose-500/10",
    link: "https://www.easylink-ksa.com/ar",
  },
  {
    title: "Df3a",
    status: "Demo",
    description:
      "A full-stack mentorship platform connecting students with mentors through real-time chat, session booking, and interactive workshops. Features real-time communication via Socket.IO, LiveKit integration, and AI-powered features.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Tanstack Query",
      "Socket.IO",
      "LiveKit",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    gradient: "from-amber-500 via-orange-400 to-rose-400",
    iconBg: "bg-amber-500/10",
    link: "https://df3a.vercel.app/",
  },
  {
    title: "Fresh Cart",
    status: "Demo",
    description:
      "A feature-rich e-commerce web application with full shopping cart functionality, secure payment processing via Stripe, protected routes, and toast notifications for a polished user experience.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "Formik",
      "Yup",
      "Stripe API",
    ],
    gradient: "from-teal-500 via-emerald-400 to-green-400",
    iconBg: "bg-teal-500",
    link: "https://fresh-cart-blush.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="gradient-blob w-[500px] h-[500px] bg-accent-cyan bottom-0 left-[-200px]" />
      <div className="gradient-blob w-[400px] h-[400px] bg-accent-rose top-[10%] right-[-150px]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've designed and built from the ground up"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="glass-card p-6 h-full overflow-hidden flex  flex-col group relative">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0  right-0 h-[2px] ${project.iconBg.replace("/10", "")} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex items-center justify-between mb-4 relative">
                  <h3
                    className="text-xl font-bold text-text-primary group-hover:text-accent transition-all duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {project.status === "Live" ? (
                      <span className="relative flex h-2 w-2">
                        <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                    ) : (
                      <HiExternalLink className="w-3 h-3" />
                    )}
                    {project.status}
                  </Link>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-primary/80 border border-border-subtle/60 text-text-muted hover:text-text-secondary hover:border-border-hover transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
