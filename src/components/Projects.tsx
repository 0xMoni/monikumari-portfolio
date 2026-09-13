"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    name: "RetryRight",
    impact: ["99.5% accuracy over 208 payments", "0 unsafe actions", "1,040 → 145 inference calls"],
    problem: "Failed-payment recovery for Razorpay subscriptions. An LLM reads the gateway error; deterministic policy decides whether money actually moves.",
    tech: ["TypeScript", "Vercel AI SDK", "Groq", "Zod", "Razorpay", "Vitest"],
    features: [
      "Seven ordered policy gates authorise retries on state, confidence, mandate, class, attempts, economics and budget",
      "Confidence comes from 5-sample agreement, not model self-report, which returns ~0.9 regardless of ambiguity",
      "Execution-time state re-check catches decisions that were correct when made and stale when they run",
      "37 tests, adversarial suite, ablation, sensitivity analysis and 40-run variance testing",
    ],
    role: "Solo — shortlisted for the Razorpay AI Buildathon 2026.",
    github: "https://github.com/0xMoni/retryright",
    live: null,
    number: "01",
  },
  {
    name: "UniTrack",
    impact: ["20+ active users", "Paying subscribers", "15 min → 30 sec onboarding"],
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
    number: "02",
  },
  {
    name: "Quarry",
    impact: ["5× faster than SQLite", "731ms → 53ms GROUP BY", "68 tests passing"],
    problem: "A SQL query engine written from scratch that runs analytical queries 5× faster than SQLite.",
    tech: ["Python", "NumPy", "SQL", "Systems Programming"],
    features: [
      "Hand-written lexer, recursive-descent parser, logical planner, vectorized executor",
      "Profiled a GROUP BY bottleneck and added dictionary encoding: 731ms → 53ms (13.8×)",
      "Projection pushdown — a query over 2 columns never reads the other 5",
      "Differential testing against SQLite across 17 query shapes, catching 2 real bugs",
    ],
    role: "Solo — designed and built every layer, from the tokenizer to the executor. 68 tests passing.",
    github: "https://github.com/0xMoni/quarry",
    live: null,
    number: "03",
  },
  {
    name: "goIRL",
    impact: ["3 event sources aggregated", "Daily automated ingestion"],
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
    number: "04",
  },
  {
    name: "SahayakAI",
    impact: ["12 Indian languages", "Sub-2s SOS triage", "Team of 2"],
    problem: "AI-powered crisis co-pilot for hotels — handles emergencies in 12 Indian languages.",
    tech: ["Next.js 15", "Gemini 2.5 Flash", "Firebase", "Vercel"],
    features: [
      "Pre-crisis CCTV crowd density analysis with Gemini Vision",
      "Real-time SOS triage in 12 Indian languages (sub-2s classification)",
      "Auto-generated compliance reports for management",
      "Real-time Firestore staff coordination dashboard",
    ],
    role: "Built the full frontend, Gemini API integrations, and Firestore real-time coordination. Team of 2.",
    github: null,
    live: null,
    number: "05",
  },
  {
    name: "LitterLens",
    impact: ["Alerts in under 30s", "Ward-level mapping", "Team of 2"],
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
  const panelId = `project-${project.name.toLowerCase()}-details`;

  return (
    <motion.div
      className="border-b border-accent-cream/10 py-10 md:py-12"
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
      <p className="text-accent-cream/70 text-base md:text-lg leading-relaxed mb-5 max-w-2xl">
        {project.problem}
      </p>

      {/* Outcomes. These are the numbers worth reading, so they sit above the
          fold rather than inside the collapsed section -- nobody expands a
          card to find out whether the work mattered. */}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
        {project.impact.map((metric) => (
          <li key={metric} className="flex items-center gap-2">
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-accent-blue" />
            <span className="text-sm md:text-base font-medium text-accent-blue">
              {metric}
            </span>
          </li>
        ))}
      </ul>

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
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`${panelId}`}
        className="text-xs font-mono text-accent-blue/70 hover:text-accent-blue transition-colors mb-3 rounded"
      >
        {expanded ? "− hide how it was built" : "+ how it was built"}
      </button>

      <motion.div
        id={panelId}
        // Collapsed content stays in the DOM for the height animation, so it
        // has to be hidden from assistive tech explicitly -- otherwise screen
        // readers announce details that are visually collapsed.
        aria-hidden={!expanded}
        inert={!expanded ? true : undefined}
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
          <h2 className="heading-section font-bold text-accent-cream mt-4">
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
