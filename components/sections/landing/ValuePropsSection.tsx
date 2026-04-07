"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data/processSteps";

const valueProps = [
  {
    icon: Zap,
    title: "Built Around Your Business",
    description:
      "Every solution we create is designed specifically for how your business works. We don't hand you generic software and walk away — we build tools that fit your exact workflow from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Over Flashy",
    description:
      "We focus on AI that solves real problems and delivers measurable outcomes. If a simpler approach gets better results, that's what we recommend — your success always comes first.",
  },
  {
    icon: TrendingUp,
    title: "Results You Can Actually Measure",
    description:
      "Every project starts with clear goals and success metrics. We track time saved, revenue generated, and efficiency gained so you always know what your investment is delivering.",
  },
  {
    icon: HeartHandshake,
    title: "We Stick Around After Launch",
    description:
      "No disappearing acts here. We stay with you post-launch with ongoing support, monitoring, and improvements so your AI investment keeps growing in value over time.",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fffe]">
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#009991] rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center shadow-lg"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#D9FFFD] text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Value Props */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="The Partner Your Business"
          titleHighlight="Actually Needs"
          subtitle="We are not a national vendor pushing a product. We are your local AI team — invested in your success because we are part of the same community you are."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D9FFFD] flex items-center justify-center">
                <prop.icon className="w-6 h-6 text-[#009991]" />
              </div>
              <h3 className="text-[#3B3B3B] font-bold text-lg leading-snug">{prop.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
