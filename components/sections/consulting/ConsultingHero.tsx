"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck, ArrowRight, Zap } from "lucide-react";
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground";

export default function ConsultingHero() {
  return (
    <section
      className="pt-28 pb-0 min-h-[65vh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050010 0%, #0a0a0a 50%, #000a10 100%)" }}
    >
      <AnimatedHeroBackground type="orbit" opacity={0.75} />

      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", color: "#fb923c" }}>
              <ClipboardCheck className="w-4 h-4" />
              AI Consulting
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Is Your Business{" "}
            <span className="gradient-text">Ready for AI?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "#9ca3af" }}
          >
            Do not invest in AI without a plan. Our free assessment identifies exactly where AI can
            save your team time, reduce costs, and generate new revenue, specific to your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#7c3aed" }} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Take the Free AI Readiness Assessment</h2>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                5 quick questions. Personalized recommendations. Zero obligation.
              </p>
            </div>
            <Link href="/assessment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shrink-0 transition-all hover:opacity-90 w-full sm:w-auto justify-center"
              style={{ background: "#7c3aed", boxShadow: "0 0 24px rgba(124,58,237,0.3)" }}>
              Start Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <svg viewBox="0 0 1440 40" fill="none" className="w-full">
        <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 40 L0 40 Z" fill="#f9f9f9" />
      </svg>
    </section>
  );
}
