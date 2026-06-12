"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "GitHub", url: "https://github.com/0xMoni" },
  { label: "LinkedIn", url: "https://linkedin.com/in/moni-kumari" },
  { label: "Twitter", url: "https://twitter.com/monii_k07" },
  { label: "Email", url: "mailto:monikumari04428@gmail.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 py-32 relative">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-accent-cream/[0.02] select-none">
          SAY HI
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-sm font-mono text-accent-mauve tracking-[0.3em] uppercase">
            04 / contact
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-7xl font-bold text-accent-cream mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Got an idea?
          <br />
          <span className="text-accent-blue">Let&apos;s talk.</span>
        </motion.h2>

        <motion.p
          className="text-accent-cream/50 text-lg mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Open to internships, collaborations, and hackathons. Or just wanna talk basketball and art? Hit me up.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {links.map((link) => (
            <MagneticButton key={link.label} href={link.url}>
              <span className="flex items-center gap-2 px-8 py-4 rounded-full border border-accent-cream/20 text-accent-cream hover:border-accent-blue hover:text-accent-blue hover:bg-accent-blue/5 transition-all duration-300 text-lg">
                {link.label}
                <span className="text-accent-blue">↗</span>
              </span>
            </MagneticButton>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 pt-8 border-t border-accent-cream/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-accent-cream/20 font-mono">
            designed & built by moni — with curiosity & a little chaos © 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
