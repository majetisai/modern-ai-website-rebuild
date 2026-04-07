"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data/processSteps";

const valueProps = [
  {
    icon: Zap,
    title: "Built on Claude AI",
    description:
      "Every solution we build leverages Anthropic's Claude — the most capable and trustworthy AI available — for results that are accurate, safe, and genuinely intelligent.",
  },
  {
    icon: ShieldCheck,
    title: "Custom, Not Cookie-Cutter",
    description:
      "We design solutions around your exact workflow, not the other way around. No forcing your business into generic software that doesn't fit.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Every project has clear success metrics. We track time saved, revenue generated, and efficiency gained — so you always know the impact on your bottom line.",
  },
  {
    icon: Clock,
    title: "No Disappearing Acts",
    description:
      "We stay with you after launch. Ongoing support, monitoring, and iteration mean your AI investment keeps delivering value as your business grows.",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0f1e]">
      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#8b9cc8] text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Value Props */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Modern AI Solutions"
          title="The AI Partner"
          titleHighlight="Built for Your Business"
          subtitle="We're not a national vendor with a generic pitch. We're your local strategic AI partner — invested in your success because we're part of the same community."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, i) => (
            <GlassCard
              key={prop.title}
              variant="hover-glow"
              animate
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#009991]/15 border border-[#009991]/20 flex items-center justify-center">
                <prop.icon className="w-6 h-6 text-[#009991]" />
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">{prop.title}</h3>
              <p className="text-[#8b9cc8] text-sm leading-relaxed">{prop.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
