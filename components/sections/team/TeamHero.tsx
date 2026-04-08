"use client";

import { motion } from "framer-motion";
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground";

export default function TeamHero() {
  return (
    <section
      className="pt-28 pb-0 min-h-[50vh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060010 0%, #0a0a0a 50%, #030610 100%)" }}
    >
      <AnimatedHeroBackground type="constellation" opacity={0.7} />

      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}>
            The People Behind the Platform
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Meet the <span className="gradient-text">Team</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}
        >
          We are a focused team of AI engineers, developers, and business consultants who are
          genuinely invested in the success of every client we work with.
        </motion.p>
      </div>

      <svg viewBox="0 0 1440 40" fill="none" className="w-full">
        <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 40 L0 40 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
