"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };
    const handleOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      {/* Simple small dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] rounded-full bg-accent-cream"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          opacity: isHovering ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
      {/* Ring only appears on hoverable elements */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-accent-blue/60"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: 40,
          height: 40,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
