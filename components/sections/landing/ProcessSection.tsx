"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Pencil, Code2, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data/processSteps";

const iconMap: Record<string, React.ElementType> = {
  Phone, ClipboardCheck, Pencil, Code2, Rocket,
};

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fffe]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="From First Conversation to"
          titleHighlight="Real Results"
          subtitle="We follow a clear, step-by-step process so you always know what is happening and why. No surprises, no handoffs to a junior team — just straightforward collaboration from start to finish."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D9FFFD] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Phone;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Step dot */}
                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-5">
                    <div className="w-16 h-16 rounded-full bg-[#009991] flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`md:w-[calc(50%-3.5rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                    <div className="card p-6">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#D9FFFD] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#009991]" />
                        </div>
                        <div>
                          <h3 className="text-[#3B3B3B] font-bold text-lg">{step.title}</h3>
                          <span className="text-[#009991] text-xs font-semibold">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{step.description}</p>
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
