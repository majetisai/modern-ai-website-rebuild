"use client";

import { motion } from "framer-motion";

interface Props {
  size?: number;
  className?: string;
}

export default function HologramOrb({ size = 180, className = "" }: Props) {
  return (
    <div
      className={`relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #7c3aed, #3b82f6, #7c3aed, #f97316, #7c3aed)",
          filter: `blur(${size * 0.1}px)`,
          opacity: 0.35,
          animation: "hologram-spin 6s linear infinite",
        }}
      />

      {/* Middle ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: size * 0.08,
          background: "conic-gradient(from 180deg, #7c3aed, #3b82f6, #7c3aed, #7c3aed)",
          filter: `blur(${size * 0.06}px)`,
          opacity: 0.25,
          animation: "hologram-spin 4s linear infinite reverse",
        }}
      />

      {/* Core sphere */}
      <div
        className="absolute rounded-full"
        style={{
          inset: size * 0.18,
          background: `radial-gradient(circle at 35% 35%, rgba(0,220,210,0.9), rgba(59,130,246,0.6) 40%, rgba(124,58,237,0.8) 70%, rgba(0,0,20,0.9))`,
          boxShadow: `0 0 ${size * 0.15}px rgba(124,58,237,0.5), 0 0 ${size * 0.3}px rgba(59,130,246,0.2), inset 0 0 ${size * 0.1}px rgba(124,58,237,0.3)`,
          animation: "hologram-pulse 3s ease-in-out infinite, hologram-flicker 7s ease-in-out infinite",
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{ inset: size * 0.18, opacity: 0.15 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              height: 1,
              top: `${(i / 8) * 100}%`,
              background: "rgba(0,255,240,0.6)",
            }}
          />
        ))}
      </div>

      {/* Orbiting dot */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: size * 0.06,
          height: size * 0.06,
          marginTop: -(size * 0.42),
          marginLeft: -(size * 0.03),
          borderRadius: "50%",
          background: "#00ffef",
          boxShadow: `0 0 ${size * 0.1}px #00ffef`,
          animation: "hologram-spin 3s linear infinite",
          transformOrigin: `${size * 0.03}px ${size * 0.42}px`,
        }}
      />
    </div>
  );
}

/* Floating card hologram */
export function HologramCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "rgba(0,10,20,0.7)",
        border: "1px solid rgba(124,58,237,0.35)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 30px rgba(124,58,237,0.15), 0 0 60px rgba(59,130,246,0.08)",
      }}
      animate={{
        boxShadow: [
          "0 0 30px rgba(124,58,237,0.15), 0 0 60px rgba(59,130,246,0.08)",
          "0 0 50px rgba(124,58,237,0.25), 0 0 90px rgba(124,58,237,0.12)",
          "0 0 30px rgba(124,58,237,0.15), 0 0 60px rgba(59,130,246,0.08)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.8), rgba(59,130,246,0.5), transparent)" }} />
      {/* Bottom scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(59,130,246,0.4), transparent)" }} />
      {/* Left border glow */}
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.5), transparent)" }} />

      {children}
    </motion.div>
  );
}
