"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Phone, ClipboardCheck, Pencil, Code2, Rocket
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data/processSteps";

const iconMap: Record<string, React.ElementType> = {
  Phone, ClipboardCheck, Pencil, Code2, Rocket,
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="From First Call to"
          titleHighlight="Lasting Results"
          subtitle="A transparent, step-by-step journey with no hidden surprises — just a clear path from idea to impact."
        />

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          {/* Animated fill line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px origin-top bg-gradient-to-b from-[#009991] to-[#00b8af] -translate-x-1/2"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Phone;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Bubble (center on desktop) */}
                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4">
                    <div className="w-12 h-12 rounded-full bg-[#009991] flex items-center justify-center teal-glow text-white font-extrabold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Card — left or right on desktop */}
                  <div className={`md:w-[calc(50%-3rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                    <div className="glass rounded-2xl p-6">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#009991]/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#009991]" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{step.title}</h3>
                          <span className="text-[#009991] text-xs font-semibold">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-[#8b9cc8] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
