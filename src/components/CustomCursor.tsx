"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // A custom cursor is a pointing-device affordance. It is useless on touch
  // screens and disorienting for anyone who has asked their OS to reduce
  // motion, so it stays off in both cases rather than being always-on.
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values rather than state: setState on every mousemove re-renders
  // this component ~60x a second. Motion values write straight to the DOM
  // node and never touch the React render cycle.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 800, damping: 35 });
  const dotY = useSpring(y, { stiffness: 800, damping: 35 });
  const ringX = useSpring(x, { stiffness: 300, damping: 20 });
  const ringY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    sync();
    finePointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest("a") || target?.closest("button")));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
          * {
            cursor: none !important;
          }
          /* Keyboard users get the real cursor back the moment they tab, so
             focus is never invisible. */
          :focus-visible,
          :focus-visible * {
            cursor: auto !important;
          }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 pointer-events-none z-[10000] rounded-full bg-accent-cream"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          opacity: isHovering ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
      />

      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 pointer-events-none z-[9998] rounded-full border border-accent-blue/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: 40,
          height: 40,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
