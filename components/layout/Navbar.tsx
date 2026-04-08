"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/utils/constants";
import Logo from "@/components/ui/Logo";
import { useConsultationModal } from "@/lib/context/ConsultationModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { open } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-sm border-b border-gray-100 py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-[#7c3aed] bg-[#ede9fe]"
                      : "text-[#3B3B3B] hover:text-[#7c3aed] hover:bg-[#f5f3ff]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#7c3aed] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE}
              </a>
              <button
                onClick={open}
                className="btn-teal text-sm px-5 py-2.5 rounded-lg"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#3B3B3B] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-white pt-20 px-4 overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                      pathname === link.href
                        ? "text-[#7c3aed] bg-[#ede9fe]"
                        : "text-[#3B3B3B] hover:text-[#7c3aed] hover:bg-[#f5f3ff]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3"
              >
                <a href={PHONE_HREF} className="text-center text-[#6b7280] font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> {PHONE}
                </a>
                <button
                  onClick={() => { setIsMobileOpen(false); open(); }}
                  className="btn-teal justify-center text-center rounded-xl py-3"
                >
                  Schedule Free Consultation
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
