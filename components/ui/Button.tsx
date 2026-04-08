"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variants = {
  primary:
    "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-[0_4px_16px_rgba(124,58,237,0.25)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.35)]",
  outline:
    "border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white",
  ghost:
    "text-[#3B3B3B] hover:text-[#7c3aed] hover:bg-[#f5f3ff]",
  white:
    "bg-white text-[#7c3aed] hover:bg-[#f5f3ff] shadow-md font-semibold",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children, variant = "primary", size = "md",
  href, onClick, className, disabled, type = "button", external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
        <Link href={href} className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type} onClick={onClick} disabled={disabled} className={classes}
    >
      {children}
    </motion.button>
  );
}
