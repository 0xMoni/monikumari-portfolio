"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-32 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-sm font-mono text-accent-mauve tracking-[0.3em] uppercase">
            01 / about
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-accent-cream mt-4">
            More than just
            <br />
            <span className="text-accent-blue">a developer.</span>
          </h2>
        </motion.div>

        {/* Clean grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Main intro - 2 cols */}
          <motion.div
            className="col-span-4 md:col-span-2 p-6 rounded-2xl border border-accent-cream/10 bg-accent-cream/[0.03] group hover:border-accent-blue/30 transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-accent-cream/80 leading-relaxed relative z-10 text-base md:text-lg">
              I&apos;m a full-stack developer and UI/UX designer who loves
              building AI-powered mobile and web apps. I&apos;ve shipped 4 live
              deployed products — including a monetized React Native app with
              real paying users. I also participated in the Google Solution
              Challenge 2026 where my team built an AI-powered crisis response
              system.
            </p>
          </motion.div>

          {/* Right column - 2x2 grid of stats */}
          <div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-3">
            {/* 4 live apps */}
            <motion.div
              className="p-5 rounded-2xl border border-accent-cream/10 bg-accent-blue/[0.06] flex flex-col items-center justify-center group hover:border-accent-blue/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl md:text-4xl font-bold text-accent-blue">4</span>
              <span className="text-xs text-accent-cream/40 font-mono mt-1">live apps</span>
            </motion.div>

            {/* CGPA */}
            <motion.div
              className="p-5 rounded-2xl border border-accent-cream/10 bg-accent-green/[0.06] flex flex-col items-center justify-center group hover:border-accent-green/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl md:text-4xl font-bold text-accent-green">8.86</span>
              <span className="text-xs text-accent-cream/40 font-mono mt-1">CGPA</span>
            </motion.div>

            {/* Monetized */}
            <motion.div
              className="p-5 rounded-2xl border border-accent-cream/10 bg-accent-mauve/[0.08] flex flex-col items-center justify-center group hover:border-accent-mauve/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl mb-1">💸</span>
              <span className="text-xs text-accent-cream/40 font-mono">paying users</span>
            </motion.div>

            {/* Basketball */}
            <motion.div
              className="p-5 rounded-2xl border border-accent-cream/10 bg-accent-green/[0.04] flex flex-col items-center justify-center group hover:border-accent-green/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <span className="text-3xl mb-1">🏀</span>
              <span className="text-xs text-accent-cream/40 font-mono">baller</span>
            </motion.div>
          </div>

          {/* Bottom row - achievements + resume */}
          <motion.div
            className="col-span-4 p-5 rounded-2xl border border-accent-cream/10 bg-accent-cream/[0.02] flex items-center justify-between group hover:border-accent-cream/20 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-wrap gap-3 text-xs font-mono text-accent-cream/40">
              <span>Google Solution Challenge &apos;26</span>
              <span>·</span>
              <span>INNOVATEX 4.0</span>
              <span>·</span>
              <span>NMIT Sparklab Designathon</span>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-accent-blue/30 text-accent-blue text-xs font-mono hover:bg-accent-blue/10 transition-colors shrink-0 ml-4"
            >
              resume ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
