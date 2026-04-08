"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Workflow, TrendingUp, BrainCircuit,
  MessageSquare, BarChart3, Store, Plug, ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import HologramIcon from "@/components/ui/HologramIcon";

const overviewServices = [
  {
    Icon: BrainCircuit,
    title: "Smart Document Search",
    description: "Your team gets instant, accurate answers from your own documents and knowledge base. No more digging through files for hours.",
    href: "/services#rag-systems",
    color: "#a855f7",
    glowRgb: "168,85,247",
    accentColor: "group-hover:border-purple-400/40",
    accentBg: "group-hover:bg-purple-50/30",
  },
  {
    Icon: MessageSquare,
    title: "AI Chatbots and Assistants",
    description: "Always-on virtual assistants that answer customer questions, qualify leads, and book appointments around the clock.",
    href: "/services#chatbots",
    color: "#06b6d4",
    glowRgb: "6,182,212",
    accentColor: "group-hover:border-cyan-400/40",
    accentBg: "group-hover:bg-cyan-50/30",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    description: "We eliminate the manual, repetitive tasks that drain your team's time and energy so they can focus on what actually matters.",
    href: "/services#automated-workflows",
    color: "#f97316",
    glowRgb: "249,115,22",
    accentColor: "group-hover:border-orange-400/40",
    accentBg: "group-hover:bg-orange-50/30",
  },
  {
    Icon: Store,
    title: "Custom POS and CRM Systems",
    description: "Purpose-built point-of-sale and customer management systems designed around exactly how you do business.",
    href: "/services#pos-crm",
    color: "#eab308",
    glowRgb: "234,179,8",
    accentColor: "group-hover:border-yellow-400/40",
    accentBg: "group-hover:bg-yellow-50/30",
  },
  {
    Icon: TrendingUp,
    title: "Sales and Marketing Automation",
    description: "Capture leads, send follow-ups, and nurture prospects automatically so you never let a potential customer slip through.",
    href: "/services#sales-marketing",
    color: "#22c55e",
    glowRgb: "34,197,94",
    accentColor: "group-hover:border-green-400/40",
    accentBg: "group-hover:bg-green-50/30",
  },
  {
    Icon: Plug,
    title: "System Integrations",
    description: "We connect all your existing tools so your data flows seamlessly and your team stops copying information between systems.",
    href: "/services#integrations",
    color: "#f43f5e",
    glowRgb: "244,63,94",
    accentColor: "group-hover:border-rose-400/40",
    accentBg: "group-hover:bg-rose-50/30",
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Build"
          title="AI Solutions That Solve"
          titleHighlight="Real Business Problems"
          subtitle="From intelligent assistants to fully custom systems, everything we build is designed to address the specific challenges your business faces every single day."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {overviewServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className={`relative h-full flex flex-col gap-4 p-6 rounded-2xl border-2 border-transparent ${service.accentColor} ${service.accentBg} bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1`}>
                  <HologramIcon Icon={service.Icon} color={service.color} glowRgb={service.glowRgb} size="md" offset={i * 0.3} />
                  <div className="flex-1">
                    <h3 className="text-[#3B3B3B] font-bold text-lg mb-2 group-hover:text-[#7c3aed] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#7c3aed] text-sm font-semibold">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-[#faf8ff] border border-[#7c3aed]/30 text-[#7c3aed] font-semibold px-6 py-3 rounded-xl hover:bg-[#ede9fe] transition-colors">
            Explore all 8 services we offer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
