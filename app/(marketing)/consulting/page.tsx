import type { Metadata } from "next";
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
      "A comprehensive look at your business processes, current tools, and AI opportunities. You receive a clear written roadmap you can act on whether or not you choose to build with us.",
    features: [
      "Full business process review",
      "AI opportunity identification",
      "Prioritized recommendations",
      "Vendor-neutral advice",
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
      "We design, build, and launch your custom AI solution from the ground up. Fixed scope, fixed price with clear milestones and your approval at every stage before we move forward.",
    features: [
      "Discovery and solution design",
      "Agile build with weekly demos",
      "Staff training and documentation",
      "60-day post-launch support",
      "Full source code ownership",
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
      "Your on-call AI team. We handle ongoing development, monitoring, maintenance, and new features as your business grows. The most cost-effective option for long-term growth.",
    features: [
      "Priority support and fast response",
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
    description: "We take a close look at your business, processes, data, and goals to find the highest-impact AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We put together a clear, prioritized roadmap with realistic outcomes for each initiative. No guesswork.",
  },
  {
    step: "03",
    title: "Design",
    description: "Every solution is architected specifically for your business before any development begins.",
  },
  {
    step: "04",
    title: "Build",
    description: "We build in focused sprints with regular demos and your sign-off at every milestone.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy, train your team, and monitor performance closely, then iterate based on real results.",
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
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
              <ClipboardCheck className="w-4 h-4" />
              AI Readiness Assessment
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
              Is Your Business{" "}
              <span className="gradient-text">Ready for AI?</span>
            </h1>
            <p className="text-[#6b7280] text-lg md:text-xl leading-relaxed">
              Do not invest in AI without a plan. Our free assessment identifies exactly where AI can
              save your team time, reduce costs, and generate new revenue — specific to your business.
            </p>
          </div>

          {/* Assessment Funnel */}
          <AssessmentFunnel />
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="A Proven Path from"
            titleHighlight="Idea to Impact"
            subtitle="We follow a transparent, milestone-driven process so you always know what is happening and why at every step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProcess.map((item) => (
              <div
                key={item.step}
                className="card rounded-2xl p-6 relative overflow-hidden hover:border-[#009991]/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 text-[8rem] font-extrabold text-[#009991]/5 leading-none select-none">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="text-[#009991] font-mono text-sm font-bold mb-3">{item.step}</div>
                  <h3 className="text-[#3B3B3B] font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement Models"
            title="Choose How We"
            titleHighlight="Work Together"
            subtitle="Every business is different. We offer three flexible ways to engage, from a one-time audit to a long-term AI partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  model.featured
                    ? "bg-[#009991] text-white shadow-[0_8px_40px_rgba(0,153,145,0.25)] scale-105"
                    : "card"
                }`}
              >
                {model.featured && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#009991] mb-4 self-start">
                    Most Popular
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  model.featured ? "bg-white/20" : "bg-[#D9FFFD] border border-[#009991]/20"
                }`}>
                  <model.icon className={`w-6 h-6 ${model.featured ? "text-white" : "text-[#009991]"}`} />
                </div>
                <h3 className={`font-bold text-xl mb-1 ${model.featured ? "text-white" : "text-[#3B3B3B]"}`}>
                  {model.title}
                </h3>
                <p className={`text-sm mb-2 ${model.featured ? "text-white/70" : "text-[#6b7280]"}`}>
                  {model.subtitle}
                </p>
                <p className={`font-bold text-lg mb-4 ${model.featured ? "text-[#D9FFFD]" : "text-[#009991]"}`}>
                  {model.price}
                </p>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${model.featured ? "text-white/80" : "text-[#6b7280]"}`}>
                  {model.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${model.featured ? "text-white/90" : "text-[#6b7280]"}`}>
                      <Check className={`w-4 h-4 shrink-0 ${model.featured ? "text-[#D9FFFD]" : "text-[#009991]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/consulting#assessment"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    model.featured
                      ? "bg-white text-[#009991] hover:bg-[#D9FFFD]"
                      : "border border-[#009991] text-[#009991] hover:bg-[#D9FFFD]"
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
