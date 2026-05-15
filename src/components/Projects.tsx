"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    name: "UniTrack",
    problem: "Helps college students track attendance without refreshing their ERP portal 47 times a day.",
    tech: ["React Native", "Expo", "Firebase", "Razorpay", "Gemini API", "Next.js"],
    features: [
      "Scrapes ERP portals and calculates safe bunk counts per subject",
      "AI-powered timetable extraction from photos (15 min → 30 sec)",
      "Razorpay payment gateway (₹19/mo) with role-based feature gating",
      "AES-GCM client-side encryption + real-time cross-device sync",
    ],
    role: "Solo developer — built the entire app, web version, backend, and payment integration.",
    github: "https://github.com/0xMoni/UniTrack-app",
    live: "https://unitrack-web.vercel.app",
    number: "01",
  },
  {
    name: "goIRL",
    problem: "Aggregates tech events, hackathons, and meetups across India so you never miss one.",
    tech: ["Next.js 16", "Supabase", "MapLibre GL", "Tailwind CSS", "Vercel"],
    features: [
      "3D map view of events across India with MapLibre GL",
      "Automated event ingestion via daily cron jobs (MLH, Lu.ma, Devfolio)",
      "Admin moderation panel, magic-link auth, calendar export (.ics)",
      "WhatsApp/Twitter sharing + filtering by city, date, type",
    ],
    role: "Solo developer — full-stack from database schema to deployment.",
    github: "https://github.com/0xMoni/goIRL",
    live: "https://goirl-tau.vercel.app",
    number: "02",
  },
  {
    name: "SahayakAI",
    problem: "AI-powered crisis co-pilot for hotels — handles emergencies in 12 Indian languages.",
    tech: ["Next.js 15", "Gemini 2.5 Flash", "Firebase", "Vercel"],
    features: [
      "Pre-crisis CCTV crowd density analysis with Gemini Vision",
      "Real-time SOS triage in 12 Indian languages (sub-2s classification)",
      "Auto-generated compliance reports for management",
      "Real-time Firestore staff coordination dashboard",
    ],
    role: "Built the full frontend, Gemini API integrations, and Firestore real-time coordination. Team of 2 (404 Coders — Google Solution Challenge 2026).",
    github: null,
    live: "https://sahayakai-one.vercel.app",
    number: "03",
  },
  {
    name: "LitterLens",
    problem: "Detects illegal garbage dumps from satellite imagery and notifies the government in under 30 seconds.",
    tech: ["React Native", "Expo", "YOLO/Roboflow", "Firebase", "Google Maps API"],
    features: [
      "YOLO object detection via Roboflow API on satellite tiles",
      "Color-coded severity pins with BBMP ward-level mapping",
      "WhatsApp/Email deep links for instant government notification",
    ],
    role: "Built the mobile app, map integration, and detection pipeline. Team of 2 (INNOVATEX 4.0 Hackathon).",
    github: "https://github.com/0xMoni/LitterLens",
    live: null,
    number: "04",
  },
  {
    name: "Shrimpin",
    problem: "Tracks your posture and yells at you every time you hunch. Your spine deserves better.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    features: [
      "Real-time posture detection using MediaPipe pose landmarks",
      "Audio alerts triggered when hunch angle exceeds threshold",
      "Configurable sensitivity and alert frequency",
    ],
    role: "Team of 2 — built the calibration system and the Chrome extension.",
    github: "https://github.com/0xMoni/Shrimpin",
    live: null,
    number: "05",
  },
  {
    name: "Fridge2Plate",
    problem: "AI-powered recipe suggestions from whatever's in your kitchen. No grocery runs needed.",
    tech: ["TypeScript", "Gemini API", "React"],
    features: [
      "Snap a photo of your fridge, get recipe suggestions",
      "Gemini API for ingredient recognition and recipe generation",
      "Filter by cuisine, dietary restrictions, and cook time",
    ],
    role: "Solo developer.",
    github: "https://github.com/0xMoni/Fridge2Plate",
    live: null,
    number: "06",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="border-b border-accent-cream/10 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-mono text-accent-mauve/60">
            {project.number}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-accent-cream">
            {project.name}
          </h3>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-mono rounded-full border border-accent-cream/20 text-accent-cream/60 hover:border-accent-blue hover:text-accent-blue transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-mono rounded-full border border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Problem statement */}
      <p className="text-accent-cream/60 text-base mb-5">
        {project.problem}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full border border-accent-green/20 text-accent-green/70 bg-accent-green/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expandable features */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-mono text-accent-blue/70 hover:text-accent-blue transition-colors mb-3"
      >
        {expanded ? "− hide details" : "+ show features & role"}
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="space-y-1.5 mb-4">
          {project.features.map((f) => (
            <li
              key={f}
              className="text-sm text-accent-cream/50 flex items-start gap-2"
            >
              <span className="text-accent-blue/50 mt-1">▸</span>
              {f}
            </li>
          ))}
        </ul>
        <p className="text-xs font-mono text-accent-cream/30 italic">
          {project.role}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="min-h-screen py-32 relative">
      {/* Big background text */}
      <motion.div
        className="absolute top-20 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ x }}
      >
        <span className="text-[12vw] font-bold text-accent-cream/[0.02] whitespace-nowrap">
          PROJECTS PROJECTS PROJECTS
        </span>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-sm font-mono text-accent-mauve tracking-[0.3em] uppercase">
            02 / work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-accent-cream mt-4">
            Selected
            <br />
            <span className="text-accent-blue">projects.</span>
          </h2>
        </motion.div>

        <div className="border-t border-accent-cream/10">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
