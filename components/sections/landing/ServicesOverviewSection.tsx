"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Workflow, Globe, TrendingUp, BrainCircuit,
  MessageSquare, BarChart3, Store, Plug, ArrowRight
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Workflow, Globe, TrendingUp, BrainCircuit, MessageSquare, BarChart3, Store, Plug,
};

const overviewServices = [
  {
    icon: "BrainCircuit",
    title: "RAG & Document Intelligence",
    description: "Instant, accurate answers from your knowledge base — cited, never hallucinated.",
    href: "/services#rag-systems",
  },
  {
    icon: "MessageSquare",
    title: "AI Chatbots & Assistants",
    description: "Claude-powered bots that qualify leads, book appointments, and support customers 24/7.",
    href: "/services#chatbots",
  },
  {
    icon: "Workflow",
    title: "Workflow Automation",
    description: "Eliminate manual, repetitive tasks. Let intelligent processes run themselves.",
    href: "/services#automated-workflows",
  },
  {
    icon: "Store",
    title: "Custom POS & CRM",
    description: "Purpose-built systems that fit exactly how you work — not the other way around.",
    href: "/services#pos-crm",
  },
  {
    icon: "TrendingUp",
    title: "Sales & Marketing Automation",
    description: "Capture, nurture, and convert leads automatically around the clock.",
    href: "/services#sales-marketing",
  },
  {
    icon: "Plug",
    title: "System Integrations",
    description: "Connect all your tools into a seamless ecosystem. End data silos forever.",
    href: "/services#integrations",
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d1428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Build"
          title="AI Solutions That"
          titleHighlight="Drive Real Results"
          subtitle="From intelligent chatbots to full CRM systems — every solution is built with Claude AI and designed to solve your specific business challenges."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {overviewServices.map((service, i) => {
            const Icon = iconMap[service.icon] || BrainCircuit;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col gap-4 group transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#009991]/15 border border-[#009991]/20 flex items-center justify-center group-hover:bg-[#009991]/25 transition-colors">
                      <Icon className="w-6 h-6 text-[#009991]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00b8af] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#8b9cc8] text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#009991] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#009991] font-semibold hover:text-[#00b8af] transition-colors"
          >
            View all 8 services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
