"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow, Globe, TrendingUp, BrainCircuit,
  MessageSquare, BarChart3, Store, Plug,
  ChevronDown, Check,
} from "lucide-react";
import { services } from "@/lib/data/services";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Workflow, Globe, TrendingUp, BrainCircuit, MessageSquare, BarChart3, Store, Plug,
};

export default function ServiceCardsGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || BrainCircuit;
        const isExpanded = expandedId === service.id;

        return (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className={`card rounded-2xl overflow-hidden transition-all duration-300 ${
              isExpanded ? "border-[#009991]/40 shadow-[0_8px_30px_rgba(0,153,145,0.12)]" : ""
            }`}
          >
            {/* Card Header */}
            <button
              onClick={() => toggle(service.id)}
              className="w-full p-6 text-left"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#D9FFFD] border border-[#009991]/20">
                    <Icon className="w-6 h-6 text-[#009991]" />
                  </div>
                  <div>
                    <h3 className="text-[#3B3B3B] font-bold text-lg leading-snug">{service.title}</h3>
                    <p className="text-[#009991] text-sm font-medium mt-0.5">{service.tagline}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 mt-1"
                >
                  <ChevronDown className="w-5 h-5 text-[#6b7280]" />
                </motion.div>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mt-3 line-clamp-2">
                {service.description}
              </p>
            </button>

            {/* Expanded Drawer */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-[#3B3B3B] font-semibold text-sm uppercase tracking-wider mb-3">
                          What&apos;s Included
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-[#6b7280]">
                              <Check className="w-4 h-4 text-[#009991] mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-[#3B3B3B] font-semibold text-sm uppercase tracking-wider mb-3">
                          Common Use Cases
                        </h4>
                        <ul className="space-y-2">
                          {service.useCases.map((u) => (
                            <li key={u} className="flex items-start gap-2 text-sm text-[#6b7280]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#009991] mt-2 shrink-0" />
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <Button href="/consulting" variant="primary" size="sm">
                        Discuss This Solution
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
