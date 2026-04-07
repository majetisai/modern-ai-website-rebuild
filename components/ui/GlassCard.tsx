"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover" | "teal" | "featured";
  animate?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children, className, variant = "default", animate = false, onClick,
}: GlassCardProps) {
  const baseClasses = cn(
    "rounded-2xl p-6",
    variant === "default" && "card",
    variant === "hover" && "card cursor-pointer",
    variant === "teal" && "card-teal",
    variant === "featured" && "bg-[#009991] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,153,145,0.3)]",
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
        whileHover={variant === "hover" ? { y: -4 } : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses} onClick={onClick}>{children}</div>;
}
