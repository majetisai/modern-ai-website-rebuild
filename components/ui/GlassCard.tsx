"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover-glow" | "featured";
  animate?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "section" | "li";
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  animate = false,
  onClick,
  as: Tag = "div",
}: GlassCardProps) {
  const baseClasses = cn(
    "glass rounded-2xl p-6",
    variant === "hover-glow" && "glass-hover transition-all duration-300 cursor-pointer",
    variant === "featured" &&
      "border-[#009991]/40 shadow-[0_0_40px_rgba(0,153,145,0.15)] bg-[rgba(0,153,145,0.08)]",
    onClick && "cursor-pointer",
    className
  );

  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={onClick}
        whileHover={variant === "hover-glow" ? { y: -4 } : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Tag className={baseClasses} onClick={onClick}>
      {children}
    </Tag>
  );
}
