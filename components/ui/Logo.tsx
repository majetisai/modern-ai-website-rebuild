import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  /** On dark backgrounds, apply brightness filter to keep logo visible */
  white?: boolean;
}

const heights = { sm: 28, md: 36, lg: 48 };
// Maintain the SVG's natural aspect ratio: 251.29mm × 73.01mm ≈ 3.44:1
const RATIO = 251.29 / 73.01;

export default function Logo({ className, size = "md", href = "/", white }: LogoProps) {
  const h = heights[size];
  const w = Math.round(h * RATIO);

  const content = (
    <div className={cn("inline-flex items-center select-none flex-shrink-0", className)}>
      <Image
        src="/logo/mai_logo.svg"
        alt="Modern AI Solutions"
        width={w}
        height={h}
        priority
        style={{
          // On dark sections invert to white; use CSS filter so we don't need a separate white SVG
          filter: white ? "brightness(0) invert(1)" : "none",
          display: "block",
        }}
      />
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
