"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  badge, title, titleHighlight, subtitle,
  align = "center", className, light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {badge && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <span className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase",
            light
              ? "bg-white/20 text-white border border-white/30"
              : "bg-[#ede9fe] text-[#7c3aed] border border-[#7c3aed]/20"
          )}>
            <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", light ? "bg-white" : "bg-[#7c3aed]")} />
            {badge}
          </span>
        </div>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight",
        light ? "text-white" : "text-[#3B3B3B]"
      )}>
        {title}{" "}
        {titleHighlight && (
          <span className={light ? "text-[#ede9fe]" : "gradient-text"}>{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg leading-relaxed",
          align === "center" && "max-w-2xl mx-auto",
          light ? "text-white/80" : "text-[#6b7280]"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
