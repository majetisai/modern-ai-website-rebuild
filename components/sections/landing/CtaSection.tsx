"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ConsultationForm from "@/components/common/ConsultationForm";

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009991] animate-pulse" />
              Free Consultation
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
              Ready to See What AI Can Do for{" "}
              <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
              Start with a free 30-minute conversation. We will take the time to understand your business,
              identify where AI can make the biggest difference, and walk you through exactly how we would approach it.
              No pressure, no obligation, no tech jargon.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "A genuine conversation about your goals and challenges",
                "Clear, honest recommendations tailored to your situation",
                "A realistic picture of what AI can and cannot do for you",
                "Zero sales pressure — we earn your trust, not lock it in",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#3B3B3B]">
                  <div className="w-5 h-5 rounded-full bg-[#D9FFFD] border border-[#009991]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#009991]" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Teal card */}
            <div className="bg-[#009991] rounded-2xl p-6 text-white">
              <p className="font-semibold text-lg mb-2">Prefer to talk first?</p>
              <p className="text-[#D9FFFD]/80 text-sm mb-4">
                Give us a call and we will answer your questions right away — no appointment needed.
              </p>
              <a href="tel:+15732006241" className="inline-flex items-center gap-2 bg-white text-[#009991] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#D9FFFD] transition-colors text-sm">
                Call 573-200-6241 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-2xl font-extrabold text-[#3B3B3B] mb-2 text-center">Schedule a Free Consultation</h3>
              <p className="text-[#6b7280] text-sm text-center mb-8">
                Unlock the true potential of your business. Connect with us for a free strategy session and personalized recommendations.
              </p>
              <ConsultationForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
