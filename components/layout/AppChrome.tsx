"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NO_CHROME_PATHS = ["/assessment"];

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = NO_CHROME_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <>
      {!hideChrome && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
