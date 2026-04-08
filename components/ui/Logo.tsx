import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  white?: boolean;
}

/**
 * Sparkle icon — matches modernaisolutions.com exactly.
 * Two 4-pointed stars (large elongated + small accent), no background box.
 */
function Sparkle({ px, white }: { px: number; white?: boolean }) {
  const c = white ? "#D9FFFD" : "#009991";
  const ca = white ? "rgba(217,255,253,0.6)" : "rgba(0,153,145,0.55)";

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "inline-block", flexShrink: 0, verticalAlign: "middle" }}
    >
      {/* Large 4-pointed elongated star — long on vertical axis */}
      <path
        d="M24 3 L26.5 19 L41 24 L26.5 29 L24 45 L21.5 29 L7 24 L21.5 19 Z"
        fill={c}
      />
      {/* Small accent 4-pointed star — upper right */}
      <path
        d="M38.5 7 L39.4 12 L44.5 12.5 L39.8 14.2 L40.8 19 L38.5 15.5 L36.2 19 L37.2 14.2 L32.5 12.5 L37.6 12 Z"
        fill={ca}
      />
    </svg>
  );
}

export default function Logo({ className, size = "md", href = "/", white }: LogoProps) {
  const textClass = {
    sm: "text-[1.05rem]",
    md: "text-[1.25rem]",
    lg: "text-[1.6rem]",
  };
  const sparkPx = { sm: 17, md: 22, lg: 28 };

  const graphite = white ? "#ffffff" : "#3B3B3B";
  const teal     = white ? "#D9FFFD" : "#009991";

  const content = (
    <div className={cn("inline-flex items-center gap-[2px] select-none", className)}>
      {/* "Modern" — graphite */}
      <span
        style={{ color: graphite, fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1 }}
        className={textClass[size]}
      >
        Modern
      </span>

      {/* " AI" + sparkle — teal */}
      <span
        style={{ color: teal, fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1 }}
        className={cn(textClass[size], "inline-flex items-center gap-[2px]")}
      >
        &nbsp;AI<Sparkle px={sparkPx[size]} white={white} />
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }
  return content;
}
