"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Direction = "bottom" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Entry direction. Defaults to rising from below. */
  from?: Direction;
}

/* Cap the cascade. With an uncapped `index * step` delay the 6th card in a grid
   starts ~0.5s after it is already on screen, which reads as lag on fast scroll. */
const MAX_DELAY = 0.32;

/* The offsets and the reduced-motion branch both live in globals.css now
   (`.reveal-*`), so this component ships no animation logic — it flips one
   class when the element first crosses into view and nothing else. That keeps
   framer-motion, and the ~79KB gzipped it costs, off the critical path. */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Mirrors the previous `useInView(ref, { once: true, margin: "-60px" })`:
       fire once, then stop observing. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${from}${isInView ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={
        { "--reveal-delay": `${Math.min(delay, MAX_DELAY)}s` } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
