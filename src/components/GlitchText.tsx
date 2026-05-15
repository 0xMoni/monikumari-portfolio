"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`abcdefghijklmnopqrstuvwxyz";

export default function GlitchText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState(text.replace(/./g, " "));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iteration += 1 / 2;
        if (iteration >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      className={`${className} inline-block`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay / 1000 }}
    >
      {displayed}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-accent-blue ml-1 animate-pulse" />
      )}
    </motion.span>
  );
}
