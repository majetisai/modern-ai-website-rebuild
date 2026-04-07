"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { PHONE, PHONE_HREF } from "@/lib/utils/constants";

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007a73] via-[#009991] to-[#00b8af]" />
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow effects */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            No obligations. No tech jargon. Just results.
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Ready to Transform
            <br />
            Your Business with AI?
          </h2>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Start with a free 30-minute conversation. We&apos;ll identify your biggest
            automation opportunities and show you exactly how we&apos;d solve them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/consulting"
              className="bg-white text-[#009991] hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border-0"
              size="lg"
            >
              Start Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href={PHONE_HREF}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Or call {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
