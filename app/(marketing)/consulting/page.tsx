import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, RefreshCw, ClipboardCheck, ArrowRight, Check } from "lucide-react";
import CtaSection from "@/components/sections/landing/CtaSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ConsultingHero from "@/components/sections/consulting/ConsultingHero";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "Modern AI Solutions helps Southeast Missouri businesses discover exactly where AI can reduce cost and drive growth. Start with a free AI Readiness Assessment.",
};

const engagementModels = [
  {
    icon: ClipboardCheck,
    title: "AI Audit",
    subtitle: "One-time engagement",
    price: "Starting at $500",
    description: "A comprehensive look at your business processes, current tools, and AI opportunities. You receive a clear written roadmap you can act on whether or not you choose to build with us.",
    features: ["Full business process review", "AI opportunity identification", "Prioritized recommendations", "Vendor-neutral advice", "Written roadmap document"],
    cta: "Start With an Audit",
    featured: false,
    border: "border-t-4 border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Project-Based",
    subtitle: "Custom build",
    price: "Custom quote",
    description: "We design, build, and launch your custom AI solution from the ground up. Fixed scope, fixed price with clear milestones and your approval at every stage.",
    features: ["Discovery and solution design", "Agile build with weekly demos", "Staff training and documentation", "60-day post-launch support", "Full source code ownership"],
    cta: "Get a Custom Quote",
    featured: true,
    border: "",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    icon: DollarSign,
    title: "Monthly Retainer",
    subtitle: "Ongoing partnership",
    price: "From $1,500/mo",
    description: "Your on-call AI team. We handle ongoing development, monitoring, maintenance, and new features as your business grows.",
    features: ["Priority support and fast response", "Continuous improvement", "New feature development", "Performance monitoring", "Monthly strategy reviews"],
    cta: "Explore Retainer Plans",
    featured: false,
    border: "border-t-4 border-orange-400",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const consultingProcess = [
  { step: "01", title: "Assessment", description: "We take a close look at your business, processes, data, and goals to find the highest-impact AI opportunities.", badge: "bg-purple-100 text-purple-700" },
  { step: "02", title: "Strategy", description: "We put together a clear, prioritized roadmap with realistic outcomes for each initiative. No guesswork.", badge: "bg-blue-100 text-blue-700" },
  { step: "03", title: "Design", description: "Every solution is architected specifically for your business before any development begins.", badge: "bg-[#ede9fe] text-[#7c3aed]" },
  { step: "04", title: "Build", description: "We build in focused sprints with regular demos and your sign-off at every milestone.", badge: "bg-orange-100 text-orange-700" },
  { step: "05", title: "Launch", description: "We deploy, train your team, and monitor performance closely, then iterate based on real results.", badge: "bg-green-100 text-green-700" },
  { step: "06", title: "Grow", description: "As your business grows, we expand your AI capabilities with new features and integrations.", badge: "bg-pink-100 text-pink-700" },
];

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />

      {/* Process */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#f9f9f9" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-b absolute top-0 right-0 w-60 h-60 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #c084fc, #9333ea)" }} />
          <div className="blob-c absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #93c5fd, #3b82f6)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="A Proven Path from"
            titleHighlight="Idea to Impact"
            subtitle="We follow a transparent, milestone-driven process so you always know what is happening and why at every step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProcess.map((item) => (
              <div key={item.step} className="card rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 text-[7rem] font-extrabold opacity-[0.04] leading-none select-none text-gray-400">
                  {item.step}
                </div>
                <div className="relative">
                  <div className={`inline-block text-xs font-bold px-3 py-1 rounded-lg mb-3 ${item.badge}`}>{item.step}</div>
                  <h3 className="text-[#3B3B3B] font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#f5f7ff" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-a absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #93c5fd, #3b82f6)" }} />
          <div className="blob-c absolute top-10 right-0 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #fdba74, #f97316)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement Models"
            title="Choose How We"
            titleHighlight="Work Together"
            subtitle="Every business is different. We offer three flexible ways to engage, from a one-time audit to a long-term AI partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  model.featured
                    ? "bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white shadow-[0_16px_48px_rgba(124,58,237,0.3)] scale-105"
                    : `card ${model.border}`
                }`}
              >
                {model.featured && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#7c3aed] mb-4 self-start">
                    Most Popular
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${model.iconBg}`}>
                  <model.icon className={`w-6 h-6 ${model.iconColor}`} />
                </div>
                <h3 className={`font-bold text-xl mb-1 ${model.featured ? "text-white" : "text-[#3B3B3B]"}`}>{model.title}</h3>
                <p className={`text-sm mb-2 ${model.featured ? "text-white/70" : "text-[#6b7280]"}`}>{model.subtitle}</p>
                <p className={`font-bold text-lg mb-4 ${model.featured ? "text-[#ede9fe]" : "text-[#7c3aed]"}`}>{model.price}</p>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${model.featured ? "text-white/80" : "text-[#6b7280]"}`}>{model.description}</p>
                <ul className="space-y-2 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${model.featured ? "text-white/90" : "text-[#6b7280]"}`}>
                      <Check className={`w-4 h-4 shrink-0 ${model.featured ? "text-[#ede9fe]" : "text-[#7c3aed]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/assessment"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    model.featured ? "bg-white text-[#7c3aed] hover:bg-[#ede9fe]" : "border border-[#7c3aed] text-[#7c3aed] hover:bg-[#ede9fe]"
                  }`}
                >
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
