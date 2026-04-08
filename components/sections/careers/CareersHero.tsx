"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground";

export default function CareersHero() {
  return (
    <section
      className="pt-28 pb-0 min-h-[55vh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #030010 0%, #0a0a0a 50%, #000310 100%)" }}
    >
      <AnimatedHeroBackground type="matrix" opacity={0.5} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}>
            <Briefcase className="w-4 h-4" />
            We are Hiring
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Build the Future of AI
          <br />
          <span className="gradient-text">Right Here in Missouri</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}
        >
          Join a team of builders putting powerful AI tools into the hands of real businesses.
          Small team, big impact, and absolutely zero corporate nonsense.
        </motion.p>
      </div>

      <svg viewBox="0 0 1440 40" fill="none" className="w-full">
        <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 40 L0 40 Z" fill="#fffdf0" />
      </svg>
    </section>
  );
}
