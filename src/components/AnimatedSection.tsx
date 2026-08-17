"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Direction = "bottom" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Entry direction. Defaults to rising from below. */
  from?: Direction;
}

const OFFSETS: Record<Direction, Record<string, number>> = {
  bottom: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.94 },
};

/* Cap the cascade. With an uncapped `index * step` delay the 6th card in a grid
   starts ~0.5s after it is already on screen, which reads as lag on fast scroll. */
const MAX_DELAY = 0.32;

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...OFFSETS[from] };
  const shown = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        delay: Math.min(delay, MAX_DELAY),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
