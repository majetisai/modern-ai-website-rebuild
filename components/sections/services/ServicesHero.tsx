"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Zap, Bot, BarChart3, Link2 } from "lucide-react";
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground";

const serviceCards = [
  { label: "Automation", desc: "Workflow AI", Icon: Zap, color: "#a855f7", glowRgb: "168,85,247" },
  { label: "Chatbots", desc: "24/7 AI Support", Icon: Bot, color: "#3b82f6", glowRgb: "59,130,246" },
  { label: "Analytics", desc: "Data Insights", Icon: BarChart3, color: "#7c3aed", glowRgb: "124,58,237" },
  { label: "Integration", desc: "Connect Systems", Icon: Link2, color: "#f97316", glowRgb: "249,115,22" },
];

function HologramProjector() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % serviceCards.length), 2600);
    return () => clearInterval(t);
  }, []);

  const s = serviceCards[current];

  return (
    <div className="flex flex-col items-center gap-0 select-none" style={{ perspective: "600px" }}>

      {/* ── Projected card ─────────────────────────────── */}
      <div className="relative" style={{ width: 240, height: 280 }}>

        {/* Projection beam (cone of light from device below) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 180,
            height: 260,
            background: `linear-gradient(to top, rgba(${s.glowRgb},0.18) 0%, rgba(${s.glowRgb},0.06) 50%, transparent 100%)`,
            clipPath: "polygon(30% 100%, 70% 100%, 100% 0%, 0% 0%)",
            transition: "background 0.5s ease",
          }}
        />

        {/* Floating hologram card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 18, scale: 0.88, rotateX: -12 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -14, scale: 0.92, rotateX: 8 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0"
            style={{ height: 250, transformStyle: "preserve-3d" }}
          >
            {/* Card body */}
            <div
              className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-5 overflow-hidden relative"
              style={{
                background: "rgba(4, 2, 22, 0.88)",
                border: `1px solid rgba(${s.glowRgb}, 0.55)`,
                backdropFilter: "blur(16px)",
                boxShadow: `0 0 40px rgba(${s.glowRgb}, 0.2), 0 0 80px rgba(${s.glowRgb}, 0.08)`,
              }}
            >
              {/* Scan lines (horizontal stripes for hologram feel) */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full pointer-events-none"
                  style={{
                    height: 1,
                    top: `${(i / 8) * 100}%`,
                    background: `rgba(${s.glowRgb}, 0.06)`,
                  }}
                />
              ))}

              {/* Top scan line glow */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, rgba(${s.glowRgb}, 0.9), transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, rgba(${s.glowRgb}, 0.5), transparent)` }} />

              {/* Corner brackets */}
              {[
                { top: 8, left: 8, borderTop: true, borderLeft: true },
                { top: 8, right: 8, borderTop: true, borderRight: true },
                { bottom: 8, left: 8, borderBottom: true, borderLeft: true },
                { bottom: 8, right: 8, borderBottom: true, borderRight: true },
              ].map((pos, pi) => (
                <div
                  key={pi}
                  className="absolute w-5 h-5"
                  style={{
                    ...(pos.top !== undefined && { top: pos.top }),
                    ...(pos.bottom !== undefined && { bottom: pos.bottom }),
                    ...(pos.left !== undefined && { left: pos.left }),
                    ...(pos.right !== undefined && { right: pos.right }),
                    borderTop: pos.borderTop ? `2px solid rgba(${s.glowRgb}, 0.9)` : undefined,
                    borderBottom: pos.borderBottom ? `2px solid rgba(${s.glowRgb}, 0.9)` : undefined,
                    borderLeft: pos.borderLeft ? `2px solid rgba(${s.glowRgb}, 0.9)` : undefined,
                    borderRight: pos.borderRight ? `2px solid rgba(${s.glowRgb}, 0.9)` : undefined,
                    borderRadius: pos.borderTop && pos.borderLeft ? "4px 0 0 0"
                      : pos.borderTop && pos.borderRight ? "0 4px 0 0"
                      : pos.borderBottom && pos.borderLeft ? "0 0 0 4px"
                      : "0 0 4px 0",
                  }}
                />
              ))}

              {/* Glowing corner dot */}
              <div className="absolute top-[9px] left-[9px] w-1.5 h-1.5 rounded-full"
                style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />

              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  background: `radial-gradient(circle at 40% 35%, rgba(${s.glowRgb}, 0.2), rgba(${s.glowRgb}, 0.06) 70%)`,
                  border: `1px solid rgba(${s.glowRgb}, 0.45)`,
                  boxShadow: `0 0 28px rgba(${s.glowRgb}, 0.35), inset 0 0 24px rgba(${s.glowRgb}, 0.12)`,
                }}
              >
                <s.Icon
                  style={{
                    width: 36,
                    height: 36,
                    color: s.color,
                    filter: `drop-shadow(0 0 10px ${s.color})`,
                  }}
                />
              </div>

              {/* Label */}
              <div className="text-center px-4">
                <div
                  className="font-bold text-base"
                  style={{ color: s.color, textShadow: `0 0 14px rgba(${s.glowRgb}, 0.7)` }}
                >
                  {s.label}
                </div>
                <div className="text-xs mt-1" style={{ color: "#4b5563" }}>
                  {s.desc}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Projector device ───────────────────────────── */}
      <div className="relative flex flex-col items-center" style={{ marginTop: -6 }}>
        {/* Device top edge glow */}
        <div
          style={{
            width: 160,
            height: 3,
            borderRadius: 4,
            background: `linear-gradient(90deg, transparent, rgba(${s.glowRgb}, 0.8), transparent)`,
            boxShadow: `0 0 12px rgba(${s.glowRgb}, 0.6)`,
            transition: "background 0.5s ease, box-shadow 0.5s ease",
          }}
        />
        {/* Device body */}
        <div
          style={{
            width: 200,
            height: 28,
            borderRadius: "0 0 16px 16px",
            background: "linear-gradient(180deg, rgba(20,10,40,0.95) 0%, rgba(8,4,20,0.98) 100%)",
            border: `1px solid rgba(${s.glowRgb}, 0.25)`,
            borderTop: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(${s.glowRgb}, 0.08)`,
            transition: "border-color 0.5s ease",
          }}
        >
          {/* Lens dots */}
          {[s.color, "rgba(255,255,255,0.15)", "rgba(255,255,255,0.08)"].map((c, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? 8 : 5,
                height: i === 0 ? 8 : 5,
                background: c,
                boxShadow: i === 0 ? `0 0 8px ${s.color}` : undefined,
              }}
            />
          ))}
        </div>
        {/* Device base shadow */}
        <div
          style={{
            width: 160,
            height: 6,
            borderRadius: "50%",
            background: `rgba(${s.glowRgb}, 0.12)`,
            filter: "blur(6px)",
            marginTop: 2,
          }}
        />
      </div>

      {/* ── Dot indicators ─────────────────────────────── */}
      <div className="flex gap-2 mt-4">
        {serviceCards.map((card, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            aria-label={`Show ${card.label}`}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? card.color : "rgba(255,255,255,0.15)",
              boxShadow: i === current ? `0 0 8px ${card.color}` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ServicesHero() {
  return (
    <section
      className="pt-28 pb-0 min-h-[55vh] flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040010 0%, #0a0a0a 50%, #000810 100%)" }}
    >
      <AnimatedHeroBackground type="hexgrid" opacity={0.7} />

      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#a78bfa" }}>
                <BrainCircuit className="w-4 h-4" />
                What We Build
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
            >
              AI Solutions Built{" "}
              <span className="gradient-text">for Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#9ca3af" }}
            >
              Every solution we build is custom designed for your specific workflow, your team, and your goals.
              No cookie-cutter software. Just tools that actually work for real businesses like yours.
            </motion.p>
          </div>

          {/* Right: hologram projector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden sm:flex justify-center items-center"
          >
            <HologramProjector />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <svg viewBox="0 0 1440 40" fill="none" className="w-full mt-8">
        <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 40 L0 40 Z" fill="#fdfbff" />
      </svg>
    </section>
  );
}
