"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-mauve/20 blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-[80px] animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent-cream) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cream) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Small intro */}
        <motion.p
          className="text-sm font-mono text-accent-blue/80 tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          portfolio / 2026
        </motion.p>

        {/* Photo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          className="mb-10 relative"
        >
          <div className="w-40 h-40 rounded-full border-2 border-accent-blue/30 overflow-hidden bg-accent-mauve/10 flex items-center justify-center relative">
            <img
              src="/moni.jpeg"
              alt="Moni Kumari"
              className="w-full h-full object-cover"
            />
            {/* Rotating ring */}
            <div className="absolute inset-[-4px] rounded-full border border-dashed border-accent-green/30 animate-[spin_20s_linear_infinite]" />
          </div>
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-accent-green border-2 border-background animate-pulse" />
        </motion.div>

        {/* Name with glitch effect */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none flex gap-4 md:gap-6">
          <GlitchText
            text="MONI"
            className="text-accent-cream"
            delay={500}
          />
          <GlitchText
            text="KUMARI"
            className="text-accent-blue"
            delay={1200}
          />
        </h1>

        {/* Tagline with typewriter */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-accent-cream/60 font-mono max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Shipping code & shooting hoops.
        </motion.p>

        {/* Roles */}
        <motion.p
          className="mt-10 text-sm md:text-base text-accent-cream/40 font-mono tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          student · full-stack dev · UI/UX designer · AI builder · basketball player
        </motion.p>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <Marquee
          items={["DEVELOPER", "CREATOR", "ARTIST", "BUILDER", "•"]}
          speed={25}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-mono text-accent-cream/30 tracking-widest">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent-cream/50 to-transparent" />
      </motion.div>
    </section>
  );
}
