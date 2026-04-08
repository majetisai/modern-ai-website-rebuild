"use client";

import { motion } from "framer-motion";
import { type ElementType } from "react";

interface HologramIconProps {
  Icon: ElementType;
  /** CSS color for the icon (e.g. "#7c3aed") */
  color: string;
  /** RGB triplet for glow (e.g. "124,58,237") */
  glowRgb: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Animation speed variation offset (seconds) */
  offset?: number;
}

const sizes = {
  sm: { box: 44, icon: 18, radius: 10 },
  md: { box: 56, icon: 24, radius: 12 },
  lg: { box: 72, icon: 30, radius: 14 },
};

export default function HologramIcon({
  Icon,
  color,
  glowRgb,
  size = "md",
  className = "",
  offset = 0,
}: HologramIconProps) {
  const d = sizes[size];

  return (
    <motion.div
      className={`relative flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: d.box,
        height: d.box,
        borderRadius: d.radius,
        background: `rgba(${glowRgb}, 0.07)`,
        border: `1px solid rgba(${glowRgb}, 0.4)`,
      }}
      animate={{
        boxShadow: [
          `0 0 10px rgba(${glowRgb}, 0.18), inset 0 0 10px rgba(${glowRgb}, 0.07)`,
          `0 0 22px rgba(${glowRgb}, 0.38), inset 0 0 16px rgba(${glowRgb}, 0.12)`,
          `0 0 10px rgba(${glowRgb}, 0.18), inset 0 0 10px rgba(${glowRgb}, 0.07)`,
        ],
      }}
      transition={{ duration: 2.8 + offset, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Top scan line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.7), transparent)`,
        }}
      />

      {/* Corner dots */}
      <div className="absolute top-[4px] left-[4px] w-[5px] h-[5px] rounded-full"
        style={{ background: `rgba(${glowRgb}, 0.8)`, boxShadow: `0 0 4px rgba(${glowRgb}, 1)` }} />
      <div className="absolute top-[4px] right-[4px] w-[5px] h-[5px] rounded-full"
        style={{ background: `rgba(${glowRgb}, 0.5)` }} />
      <div className="absolute bottom-[4px] left-[4px] w-[5px] h-[5px] rounded-full"
        style={{ background: `rgba(${glowRgb}, 0.3)` }} />

      {/* Corner bracket marks */}
      <div className="absolute top-[2px] left-[2px] w-3 h-3"
        style={{ borderTop: `1.5px solid rgba(${glowRgb}, 0.6)`, borderLeft: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRadius: "3px 0 0 0" }} />
      <div className="absolute top-[2px] right-[2px] w-3 h-3"
        style={{ borderTop: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRight: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRadius: "0 3px 0 0" }} />
      <div className="absolute bottom-[2px] left-[2px] w-3 h-3"
        style={{ borderBottom: `1.5px solid rgba(${glowRgb}, 0.6)`, borderLeft: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRadius: "0 0 0 3px" }} />
      <div className="absolute bottom-[2px] right-[2px] w-3 h-3"
        style={{ borderBottom: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRight: `1.5px solid rgba(${glowRgb}, 0.6)`, borderRadius: "0 0 3px 0" }} />

      <Icon style={{ width: d.icon, height: d.icon, color, position: "relative", zIndex: 1 }} />
    </motion.div>
  );
}
