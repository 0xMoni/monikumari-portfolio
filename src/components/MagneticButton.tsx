"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Tag = href ? "a" : "div";
  // mailto: and tel: links should open in the user's mail client, not a new
  // browser tab, so only real web links get target="_blank".
  const opensNewTab = Boolean(href && /^https?:/i.test(href));

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <Tag
        href={href}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
        {/* Screen readers otherwise give no warning that focus is about to
            jump to a new tab. */}
        {opensNewTab && <span className="sr-only"> (opens in a new tab)</span>}
      </Tag>
    </motion.div>
  );
}
