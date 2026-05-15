"use client";

import { motion } from "framer-motion";

export default function Marquee({
  items,
  speed = 20,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" },
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-bold text-accent-cream/5 select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
