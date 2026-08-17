"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/* Replaces framer-motion's `useReducedMotion`. The server snapshot is `false`,
   so SSR and the first client render agree and hydration stays clean; React
   re-renders with the real preference immediately afterwards. */
function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function useTypewriter(
  words: string[],
  { speed = 75, pause = 2200, enabled = true } = {},
) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const current = words[index % words.length];
    const atEnd = !deleting && count === current.length;
    const atStart = deleting && count === 0;
    const delay = atEnd ? pause : atStart ? 400 : deleting ? speed / 2 : speed;

    /* Every state write happens inside the timer rather than synchronously in
       the effect body — the synchronous version triggered cascading renders. */
    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setCount((c) => c + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, index, words, speed, pause, enabled]);

  if (!enabled) return words[0];
  return words[index % words.length].slice(0, count);
}

function Cursor() {
  return (
    <span
      className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
      style={{ animation: "cursor-blink 1s infinite" }}
    />
  );
}

/**
 * The only interactive part of the hero, split out so the surrounding 400 lines
 * of markup can stay a server component and never ship to the browser.
 */
export default function TypewriterRole({ words }: { words: string[] }) {
  const reduceMotion = useReducedMotion();
  const role = useTypewriter(words, { enabled: !reduceMotion });

  /* An invisible copy of the longest role reserves the row's final width.
     Without it the line re-flowed on every keystroke — and because the row is
     `justify-center` below `lg`, that dragged the `~/career $` prompt sideways
     too. Roughly all of the page's 0.253 CLS came from this one animation. */
  const longest = words.reduce((a, b) => (b.length >= a.length ? b : a));

  return (
    <span
      className="grid justify-items-start text-accent text-lg sm:text-xl md:text-2xl font-semibold min-h-[1.5em]"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span aria-hidden="true" className="col-start-1 row-start-1 invisible">
        {longest}
        <Cursor />
      </span>
      <span className="col-start-1 row-start-1">
        {role}
        <Cursor />
      </span>
    </span>
  );
}
