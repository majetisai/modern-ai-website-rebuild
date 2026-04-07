import type { Metadata } from "next";
import { BrainCircuit, ArrowRight } from "lucide-react";
import ServiceCardsGrid from "@/components/sections/services/ServiceCardsGrid";
import CtaSection from "@/components/sections/landing/CtaSection";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Custom AI solutions built with Claude: RAG systems, chatbots, workflow automation, CRM, POS, system integrations, and more for Southeast Missouri businesses.",
};

const problemsWesolve = [
  "Outdated websites lacking features and integration",
  "Siloed data requiring manual transfer and upkeep",
  "Disconnected business systems that don't talk",
  "Inefficient processes wasting staff time",
  "Reactive decision-making instead of proactive",
  "Spreadsheet management of critical data",
  "Manual data entry eating up valuable hours",
  "Lost leads due to slow manual follow-up",
  "Delayed reporting and business insights",
  "Generic tools that don't understand your business",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#009991]/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#009991]/4 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-6">
              <BrainCircuit className="w-4 h-4" />
              Built with Claude AI
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f0f4ff] leading-tight mb-6">
              AI Solutions Built{" "}
              <span className="gradient-text">for Your Business</span>
            </h1>
            <p className="text-[#8b9cc8] text-lg md:text-xl leading-relaxed max-w-2xl">
              Every solution we build leverages Claude AI — Anthropic&apos;s most capable model
              — to solve real business challenges with intelligence, accuracy, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-[#0d1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-2">Sound Familiar?</h2>
            <p className="text-[#8b9cc8] mb-8">
              These are the challenges we hear from businesses every week. We can help with custom
              solutions designed to address your exact situation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {problemsWesolve.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-[#009991] shrink-0" />
                  <span className="text-[#8b9cc8] text-sm">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009991] animate-pulse" />
              8 Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f0f4ff] mb-4">
              Click Any Service to{" "}
              <span className="gradient-text">See the Details</span>
            </h2>
            <p className="text-[#8b9cc8] max-w-2xl mx-auto">
              Every service is fully customized — no off-the-shelf templates. Expand any card
              to see exactly what&apos;s included and how it can apply to your business.
            </p>
          </div>
          <ServiceCardsGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
