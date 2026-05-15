"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Google Solution Challenge 2026",
    type: "Hackathon",
    description:
      "Built SahayakAI — an AI-powered crisis response system for hospitality using Gemini 2.5 Flash. Handled multilingual SOS triage, CCTV crowd analysis, and auto-generated compliance reports.",
    team: "Team of 2 (404 Coders)",
    date: "2026",
  },
  {
    title: "INNOVATEX 4.0 — Presidency University",
    type: "Hackathon",
    description:
      "Built LitterLens (satellite-based garbage detection) and Syntrix (city-scale resource optimization for 20.4M population across 9 zones with AI demand prediction).",
    team: "Team of 2",
    date: "2026",
  },
  {
    title: "NMIT Sparklab Designathon 2025",
    type: "Design Event",
    description:
      "Designed UI mockups and user flows under time constraints. First exposure to competitive UI/UX design sprints.",
    team: "Team of 4",
    date: "2025",
  },
  {
    title: "Shipped a Monetized Product",
    type: "Milestone",
    description:
      "UniTrack has real paying subscribers via integrated Razorpay payments (₹19/mo). Built the entire payment flow, subscription logic, and role-based access from scratch.",
    team: "Solo",
    date: "2026",
  },
  {
    title: "4 Live Deployed Applications",
    type: "Milestone",
    description:
      "Shipped and maintained production apps: sahayakai-one.vercel.app, goirl-tau.vercel.app, unitrack-web.vercel.app, and this portfolio.",
    team: "Solo / Team",
    date: "2025–2026",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent-mauve tracking-[0.3em] uppercase">
            04 / experience
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-accent-cream mt-4">
            Hackathons &
            <br />
            <span className="text-accent-blue">milestones.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-accent-cream/10" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                className="relative pl-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent-blue/50 bg-background" />

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-accent-cream">
                        {exp.title}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-accent-green/30 text-accent-green/70 uppercase font-mono">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-accent-cream/50 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-2 flex gap-4 text-xs font-mono text-accent-cream/30">
                      <span>{exp.team}</span>
                      <span>·</span>
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
