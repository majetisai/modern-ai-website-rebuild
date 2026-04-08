"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground";

export default function AboutHero() {
  return (
    <section
      className="pt-28 pb-0 min-h-[60vh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #030810 0%, #0a0a0a 50%, #080010 100%)" }}
    >
      <AnimatedHeroBackground type="waves" opacity={0.75} />

      <div className="absolute -top-24 left-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border mb-6"
                style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd" }}>
                <MapPin className="w-4 h-4" />
                Jackson, Missouri
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Built for{" "}
              <span className="gradient-text">Main Street</span>,<br />
              Powered by AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed mb-4" style={{ color: "#9ca3af" }}
            >
              Modern AI Solutions LLC was founded on a simple belief: the transformative power
              of AI should not be reserved for Fortune 500 companies. Local businesses in
              Southeast Missouri deserve the same powerful tools, built to fit their
              exact workflows and real-world budgets.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg leading-relaxed" style={{ color: "#9ca3af" }}
            >
              We combine 15 or more years of sales and business leadership with hands-on technical
              expertise to deliver practical, measurable AI solutions every single day.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop&q=85"
                alt="Modern AI Solutions team collaborating"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 rounded-2xl shadow-xl p-3 sm:p-5"
              style={{ background: "rgba(0,10,20,0.9)", border: "1px solid rgba(124,58,237,0.3)" }}>
              <div className="text-2xl sm:text-3xl font-extrabold mb-1 gradient-text">15+</div>
              <div className="text-xs sm:text-sm" style={{ color: "#6b7280" }}>Years of Experience</div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 text-white rounded-2xl shadow-xl px-3 py-2 sm:px-5 sm:py-3"
              style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}>
              <div className="text-xl sm:text-2xl font-extrabold">50+</div>
              <div className="text-xs opacity-80">Businesses Served</div>
            </div>
          </motion.div>
        </div>
      </div>

      <svg viewBox="0 0 1440 40" fill="none" className="w-full">
        <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 40 L0 40 Z" fill="#f9f7f0" />
      </svg>
    </section>
  );
}
