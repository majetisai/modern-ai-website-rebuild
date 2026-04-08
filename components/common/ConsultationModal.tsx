"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useConsultationModal } from "@/lib/context/ConsultationModalContext";
import ConsultationForm from "@/components/common/ConsultationForm";

export default function ConsultationModal() {
  const { isOpen, close } = useConsultationModal();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Subtle glow orbs in backdrop */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 pointer-events-none"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />

          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl"
            style={{ background: "#0d0d0d", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
              style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                  <Sparkles className="w-4 h-4" style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Free Consultation</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>No pressure. No obligation.</div>
                </div>
              </div>
              <button
                onClick={close}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ color: "#9ca3af" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form container */}
            <div className="px-6 py-6">
              <h2 className="text-2xl font-extrabold text-white mb-1">
                Let&apos;s Talk About Your Business
              </h2>
              <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
                Fill in your details and we will be in touch within one business day to schedule your free 30-minute strategy session.
              </p>
              <div className="dark-form">
                <ConsultationForm />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
