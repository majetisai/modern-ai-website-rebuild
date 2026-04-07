"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Workflow, Globe, TrendingUp, BrainCircuit,
  MessageSquare, BarChart3, Store, Plug, ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Workflow, Globe, TrendingUp, BrainCircuit, MessageSquare, BarChart3, Store, Plug,
};

const overviewServices = [
  {
    icon: "BrainCircuit",
    title: "Smart Document Search",
    description: "Your team gets instant, accurate answers from your own documents and knowledge base — no more digging through files.",
    href: "/services#rag-systems",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: "MessageSquare",
    title: "AI Chatbots and Assistants",
    description: "Always-on virtual assistants that answer customer questions, qualify leads, and book appointments around the clock.",
    href: "/services#chatbots",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: "Workflow",
    title: "Workflow Automation",
    description: "We eliminate the manual, repetitive tasks that drain your team's time and energy so they can focus on what matters.",
    href: "/services#automated-workflows",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "Store",
    title: "Custom POS and CRM Systems",
    description: "Purpose-built point-of-sale and customer management systems designed around exactly how you do business.",
    href: "/services#pos-crm",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: "TrendingUp",
    title: "Sales and Marketing Automation",
    description: "Capture leads, send follow-ups, and nurture prospects automatically so you never let a potential customer slip away.",
    href: "/services#sales-marketing",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: "Plug",
    title: "System Integrations",
    description: "We connect all your existing tools so your data flows seamlessly and your team stops copying information between systems.",
    href: "/services#integrations",
    color: "bg-red-50 text-red-600",
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
          subtitle="From intelligent assistants to fully custom systems, everything we build is designed to address the specific challenges your business faces every day."
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
                  <div className="card p-6 h-full flex flex-col gap-4 group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#3B3B3B] font-bold text-lg mb-2 group-hover:text-[#009991] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#009991] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#009991] font-semibold hover:text-[#007a73] transition-colors">
            Explore all 8 services we offer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
