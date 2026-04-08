"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HologramIcon from "@/components/ui/HologramIcon";
import { stats } from "@/lib/data/processSteps";

const valueProps = [
  {
    Icon: Zap,
    color: "#f59e0b",
    glowRgb: "245,158,11",
    title: "Built Around Your Business",
    description:
      "Every solution we create is designed specifically for how your business works. We do not hand you generic software and walk away. We build tools that fit your exact workflow from day one.",
    accent: "border-l-4 border-amber-400",
  },
  {
    Icon: ShieldCheck,
    color: "#3b82f6",
    glowRgb: "59,130,246",
    title: "Practical Over Flashy",
    description:
      "We focus on AI that solves real problems and delivers measurable outcomes. If a simpler approach gets better results, that is what we recommend. Your success always comes first.",
    accent: "border-l-4 border-blue-400",
  },
  {
    Icon: TrendingUp,
    color: "#22c55e",
    glowRgb: "34,197,94",
    title: "Results You Can Measure",
    description:
      "Every project starts with clear goals and success metrics. We track time saved, revenue generated, and efficiency gained so you always know exactly what your investment is delivering.",
    accent: "border-l-4 border-green-400",
  },
  {
    Icon: HeartHandshake,
    color: "#7c3aed",
    glowRgb: "124,58,237",
    title: "We Stick Around After Launch",
    description:
      "No disappearing acts here. We stay with you post-launch with ongoing support, monitoring, and improvements so your AI investment keeps growing in value over time.",
    accent: "border-l-4 border-[#7c3aed]",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8ff]">
      {/* Stats band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #003d39 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative grid grid-cols-3 gap-0 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-7 sm:py-10 px-3 sm:px-8 ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 sm:mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#ede9fe] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Value Props */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="The Partner Your Business"
          titleHighlight="Actually Needs"
          subtitle="We are not a national vendor pushing a product. We are your local AI team, invested in your success because we are part of the same community you are."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card p-6 flex flex-col gap-4 ${prop.accent}`}
            >
              <HologramIcon Icon={prop.Icon} color={prop.color} glowRgb={prop.glowRgb} size="md" offset={i * 0.4} />
              <h3 className="text-[#3B3B3B] font-bold text-lg leading-snug">{prop.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
