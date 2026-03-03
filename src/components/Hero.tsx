"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background gradient blobs */}
      <div className="gradient-blob w-[500px] h-[500px] bg-accent-violet top-[-100px] left-[-200px]" />
      <div className="gradient-blob w-[400px] h-[400px] bg-accent top-[200px] right-[-150px]" />
      <div className="gradient-blob w-[300px] h-[300px] bg-accent-cyan bottom-[-50px] left-[30%]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-accent/30 text-accent bg-accent/5 mb-6">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hi, I&apos;m <span className="text-accent">Abdelrahman</span>
            <br />
            <span className="text-text-secondary text-3xl sm:text-4xl md:text-5xl">
              Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            I craft high-performance, scalable web applications with the MERN
            stack. Passionate about clean code, intuitive UX, and turning
            complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10"
          >
            <Link
              href="#projects"
              className="px-7 py-3.5 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <span className="flex items-center gap-2">
                View My Work
                <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3.5 rounded-full font-semibold text-text-primary border border-border-subtle hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <Link
              href="https://github.com/AbdelrhmanRabie3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdelrhman-rabie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:abdelrhman.mohamed.rabie@gmail.com"
              className="p-3 rounded-full border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              aria-label="Email"
            >
              <HiOutlineMail className="w-5 h-5" />
            </Link>
            <span className="ml-2 w-12 h-px bg-border-subtle" />
            <span className="text-text-muted text-sm">Cairo, Egypt</span>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
            {/* Border ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/30">
              <div className="w-full h-full rounded-full bg-bg-primary overflow-hidden">
                <Image
                  src="/me.jpeg"
                  alt="Abdelrahman Rabie"
                  width={310}
                  height={310}
                  priority
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 glass-card px-3 py-1.5 text-xs font-semibold text-accent"
            >
              MERN Stack
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 glass-card px-3 py-1.5 text-xs font-semibold text-amber-500"
            >
              2+ Years Exp
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-border-subtle flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
