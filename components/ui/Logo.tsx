import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Logo({ className, size = "md", href = "/" }: LogoProps) {
  const sizes = { sm: "h-8", md: "h-10", lg: "h-12" };

  const content = (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      {/* Spark Icon — matches brand guide */}
      <svg
        className={cn(sizes[size], "w-auto")}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#009991" />
        {/* Sparkle / four-pointed star */}
        <path
          d="M20 8 L21.8 17.2 L31 15 L22 19 L24 28 L20 20.5 L16 28 L18 19 L9 15 L18.2 17.2 Z"
          fill="white"
          opacity="0.15"
        />
        <path
          d="M20 9 L21.5 17.5 L30 16 L21.5 20 L23 28 L20 21 L17 28 L18.5 20 L10 16 L18.5 17.5 Z"
          fill="white"
        />
        {/* Small accent spark */}
        <path
          d="M30 10 L30.7 12.3 L33 13 L30.7 13.7 L30 16 L29.3 13.7 L27 13 L29.3 12.3 Z"
          fill="#D9FFFD"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0.5">
          <span
            style={{ color: "#3B3B3B", fontWeight: 700 }}
            className={cn(size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl")}
          >
            Modern
          </span>
          <span
            style={{ color: "#009991", fontWeight: 700 }}
            className={cn(size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl")}
          >
            {" "}AI
          </span>
        </div>
        <span style={{ color: "#6b7280", fontSize: "0.65rem", letterSpacing: "0.08em" }}>
          SOLUTIONS
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
