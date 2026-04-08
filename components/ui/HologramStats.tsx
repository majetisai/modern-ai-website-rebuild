"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience", color: "#a855f7" },
  { value: "8", label: "Core Services", color: "#3b82f6" },
  { value: "30m", label: "Free Consult", color: "#7c3aed" },
  { value: "100%", label: "Custom Built", color: "#f97316" },
];

const SIZE = 180;
const C = SIZE / 2;
const R = SIZE * 0.38;

export default function HologramStats() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % stats.length), 2200);
    return () => clearInterval(timer);
  }, []);

  const stat = stats[idx];

  return (
    <div className="relative" style={{ width: SIZE, height: SIZE }}>
      {/* Outermost slow ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: "hologram-spin 18s linear infinite" }}>
        <circle cx={C} cy={C} r={R + 20} fill="none" stroke="rgba(124,58,237,0.18)"
          strokeWidth="1" strokeDasharray="6 12" strokeLinecap="round" />
      </svg>

      {/* Outer gradient ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: "hologram-spin 10s linear infinite" }}>
        <defs>
          <linearGradient id="hs-rg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r={R + 10} fill="none" stroke="url(#hs-rg1)"
          strokeWidth="1.5" strokeDasharray="30 15" strokeLinecap="round" opacity="0.55" />
      </svg>

      {/* Main ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: "hologram-spin 7s linear infinite reverse" }}>
        <defs>
          <linearGradient id="hs-rg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="66%" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r={R} fill="none" stroke="url(#hs-rg2)"
          strokeWidth="2" strokeDasharray="45 8" strokeLinecap="round" />
      </svg>

      {/* Inner glow ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: "hologram-spin 4s linear infinite" }}>
        <circle cx={C} cy={C} r={R - 12} fill="none" stroke="rgba(59,130,246,0.22)"
          strokeWidth="1" strokeDasharray="10 20" strokeLinecap="round" />
      </svg>

      {/* Center orb background */}
      <div
        className="absolute rounded-full"
        style={{
          width: (R - 14) * 2,
          height: (R - 14) * 2,
          top: C - (R - 14),
          left: C - (R - 14),
          background: "radial-gradient(circle at 35% 35%, rgba(168,85,247,0.35), rgba(59,130,246,0.2) 50%, rgba(10,0,30,0.92))",
          boxShadow: `0 0 24px rgba(124,58,237,0.35), inset 0 0 16px rgba(124,58,237,0.15)`,
          border: "1px solid rgba(124,58,237,0.35)",
          animation: "hologram-pulse 3s ease-in-out infinite",
        }}
      />

      {/* Cycling stat in center */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: (R - 14) * 2,
          height: (R - 14) * 2,
          top: C - (R - 14),
          left: C - (R - 14),
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center px-1"
          >
            <div
              className="text-2xl font-extrabold leading-none"
              style={{ color: stat.color, textShadow: `0 0 12px ${stat.color}88` }}
            >
              {stat.value}
            </div>
            <div
              className="text-[9px] font-semibold leading-tight mt-1 text-center"
              style={{ color: "rgba(255,255,255,0.6)", maxWidth: 64 }}
            >
              {stat.label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute flex gap-1.5 justify-center" style={{ bottom: 6, left: 0, right: 0 }}>
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === idx ? 12 : 5,
              height: 5,
              background: i === idx ? s.color : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
