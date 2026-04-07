"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "teal";
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
    "bg-[#009991] text-white hover:bg-[#00b8af] shadow-[0_0_20px_rgba(0,153,145,0.3)] hover:shadow-[0_0_30px_rgba(0,153,145,0.5)]",
  outline:
    "border border-[#009991] text-[#009991] hover:bg-[#009991] hover:text-white",
  ghost:
    "text-[#8b9cc8] hover:text-white hover:bg-white/5",
  teal:
    "bg-gradient-to-r from-[#009991] to-[#00b8af] text-white hover:from-[#007a73] hover:to-[#009991] shadow-[0_0_25px_rgba(0,153,145,0.35)] hover:shadow-[0_0_40px_rgba(0,153,145,0.55)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
