import type { Metadata } from "next";
import { motion } from "framer-motion";
import { ClipboardCheck, DollarSign, RefreshCw, ArrowRight, Check } from "lucide-react";
import AssessmentFunnel from "@/components/sections/consulting/AssessmentFunnel";
import CtaSection from "@/components/sections/landing/CtaSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "Start with a free AI Readiness Assessment. Modern AI Solutions helps Southeast Missouri businesses discover exactly where AI can reduce cost and drive growth.",
};

const engagementModels = [
  {
    icon: ClipboardCheck,
    title: "AI Audit",
    subtitle: "One-time engagement",
    price: "Starting at $500",
    description:
      "A comprehensive assessment of your business processes, technology stack, and AI opportunities. You receive a detailed roadmap — even if you choose not to build with us.",
    features: [
      "Full business process review",
      "AI opportunity identification",
      "Prioritized recommendations",
      "Vendor-agnostic advice",
      "Written roadmap document",
    ],
    cta: "Start With an Audit",
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "Project-Based",
    subtitle: "Custom build",
    price: "Custom quote",
    description:
      "We design, build, and launch your custom AI solution. Fixed scope, fixed price — with clear milestones and your approval at every stage before we proceed.",
    features: [
      "Discovery & solution design",
      "Agile build with weekly demos",
      "Staff training & documentation",
      "60-day post-launch support",
      "Source code ownership (yours)",
    ],
    cta: "Get a Custom Quote",
    featured: true,
  },
  {
    icon: DollarSign,
    title: "Monthly Retainer",
    subtitle: "Ongoing partnership",
    price: "From $1,500/mo",
    description:
      "Your on-call AI team. We handle ongoing development, monitoring, maintenance, and new feature builds as your business evolves. The most cost-effective option for growth.",
    features: [
      "Priority support & response",
      "Continuous improvement",
      "New feature development",
      "Performance monitoring",
      "Monthly strategy reviews",
    ],
    cta: "Explore Retainer Plans",
    featured: false,
  },
];

const consultingProcess = [
  {
    step: "01",
    title: "Assessment",
    description: "We analyze your business, processes, data, and goals to identify the highest-impact AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a clear, prioritized roadmap with expected ROI for each initiative — no guesswork.",
  },
  {
    step: "03",
    title: "Design",
    description: "Every solution is architected specifically for your business before any development begins.",
  },
  {
    step: "04",
    title: "Build",
    description: "We build in focused sprints with regular demos and your approval at every milestone.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy, train your team, and monitor performance — then iterate based on real results.",
  },
  {
    step: "06",
    title: "Grow",
    description: "As your business grows, we expand your AI capabilities with new features and integrations.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#009991]/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#009991]/4 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-6">
              <ClipboardCheck className="w-4 h-4" />
              AI Readiness Assessment
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f0f4ff] leading-tight mb-6">
              Is Your Business{" "}
              <span className="gradient-text">Ready for AI?</span>
            </h1>
            <p className="text-[#8b9cc8] text-lg md:text-xl leading-relaxed">
              Don&apos;t invest in AI blind. Our assessment identifies exactly where AI can reduce
              your costs, save your team time, and generate new revenue — specific to your business.
            </p>
          </div>

          {/* Assessment Funnel */}
          <AssessmentFunnel />
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-[#0d1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="A Proven Path from"
            titleHighlight="Idea to Impact"
            subtitle="We follow a transparent, milestone-driven process so you always know what's happening and why."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProcess.map((item, i) => (
              <div
                key={item.step}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-[#009991]/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 text-[8rem] font-extrabold text-[#009991]/5 leading-none select-none">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="text-[#009991] font-mono text-sm font-bold mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#8b9cc8] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement Models"
            title="Choose How We"
            titleHighlight="Work Together"
            subtitle="Every business is different. We offer three flexible ways to engage — from a one-time audit to a long-term AI partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  model.featured
                    ? "bg-gradient-to-br from-[#009991]/20 to-[#009991]/5 border-2 border-[#009991]/50 shadow-[0_0_40px_rgba(0,153,145,0.15)] scale-105"
                    : "glass"
                }`}
              >
                {model.featured && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#009991] text-white mb-4 self-start">
                    Most Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-[#009991]/15 border border-[#009991]/20 flex items-center justify-center mb-4">
                  <model.icon className="w-6 h-6 text-[#009991]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{model.title}</h3>
                <p className="text-[#8b9cc8] text-sm mb-2">{model.subtitle}</p>
                <p className="text-[#009991] font-bold text-lg mb-4">{model.price}</p>
                <p className="text-[#8b9cc8] text-sm leading-relaxed mb-6 flex-1">{model.description}</p>
                <ul className="space-y-2 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#8b9cc8]">
                      <Check className="w-4 h-4 text-[#009991] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/consulting#assessment"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    model.featured
                      ? "bg-[#009991] text-white hover:bg-[#00b8af] shadow-[0_0_20px_rgba(0,153,145,0.3)]"
                      : "border border-[#009991]/40 text-[#009991] hover:bg-[#009991]/10"
                  }`}
                >
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
