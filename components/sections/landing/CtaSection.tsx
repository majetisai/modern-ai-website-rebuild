"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useConsultationModal } from "@/lib/context/ConsultationModalContext";
import { PHONE, PHONE_HREF } from "@/lib/utils/constants";
import HologramStats from "@/components/ui/HologramStats";

interface Props {
  showHologram?: boolean;
}

export default function CtaSection({ showHologram = false }: Props) {
  const { open } = useConsultationModal();

  return (
    <section
      className="py-14 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080010 0%, #0a0a0a 50%, #030810 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      {/* Hologram — absolute top-right, only when enabled */}
      {showHologram && (
        <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-75 pointer-events-none hidden sm:block">
          <HologramStats />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7c3aed" }} />
            Ready When You Are
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
            Ready to See What AI Can Do
            <br />
            for{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            Start with a free 30-minute conversation. We will understand your business, identify where AI
            can make the biggest difference, and walk you through exactly how we would approach it.
            No pressure, no obligation, no jargon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary — teal glow */}
            <button
              onClick={open}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all"
              style={{ background: "#7c3aed", boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 4px 20px rgba(124,58,237,0.3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8b5cf6";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(124,58,237,0.7), 0 4px 28px rgba(124,58,237,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#7c3aed";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(124,58,237,0.5), 0 4px 20px rgba(124,58,237,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary — bright white */}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.22)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Phone className="w-4 h-4" /> Call {PHONE}
            </a>
          </div>

          <p className="mt-6 text-xs" style={{ color: "#6b7280" }}>
            We typically respond within one business day. No spam, no pressure ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
