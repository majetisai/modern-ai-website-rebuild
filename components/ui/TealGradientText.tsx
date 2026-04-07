import { cn } from "@/lib/utils/cn";

interface TealGradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function TealGradientText({
  children,
  className,
  as: Tag = "span",
}: TealGradientTextProps) {
  return (
    <Tag className={cn("gradient-text", className)}>
      {children}
    </Tag>
  );
}
