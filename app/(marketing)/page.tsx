import { notFound } from "next/navigation";

// The homepage is served by app/page.tsx (root level).
// This file exists because Next.js 16 requires a default export from any
// page.tsx in a route group, but app/page.tsx takes precedence for "/".
export default function MarketingRootPage() {
  notFound();
}
