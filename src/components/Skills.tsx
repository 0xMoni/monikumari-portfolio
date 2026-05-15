"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "SQL", "C"],
  },
  {
    category: "Frontend",
    items: ["React Native", "Next.js", "React", "Expo", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Firebase Auth"],
  },
  {
    category: "AI / ML",
    items: ["Google Gemini API", "YOLO/Roboflow", "OpenCV", "MediaPipe", "Prompt Engineering"],
  },
  {
    category: "Databases",
    items: ["Firebase", "Supabase", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Figma", "Vercel", "Razorpay", "Claude Code", "Cursor", "Adobe XD", "Notion"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent-mauve tracking-[0.3em] uppercase">
            03 / skills
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-accent-cream mt-4">
            Tools I
            <br />
            <span className="text-accent-blue">wield.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xs font-mono text-accent-mauve uppercase tracking-[0.2em] mb-4 pb-2 border-b border-accent-cream/10">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg border border-accent-cream/10 text-accent-cream/70 hover:border-accent-blue/50 hover:text-accent-blue hover:bg-accent-blue/5 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
