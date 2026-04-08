import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "navy" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "teal", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
        variant === "teal" && "bg-[#7c3aed]/15 text-[#8b5cf6] border border-[#7c3aed]/30",
        variant === "navy" && "bg-white/5 text-[#8b9cc8] border border-white/10",
        variant === "outline" && "border border-[#7c3aed] text-[#7c3aed]",
        className
      )}
    >
      {children}
    </span>
  );
}
