import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import ServiceCardsGrid from "@/components/sections/services/ServiceCardsGrid";
import ServicesHero from "@/components/sections/services/ServicesHero";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Custom AI solutions for Southeast Missouri businesses: workflow automation, chatbots, web apps, integrations, databases, and more.",
};

const problemsWeSolve = [
  "Outdated websites that are hard to update and do not attract customers",
  "Data locked in spreadsheets with no way to get real insights",
  "Business systems that do not talk to each other",
  "Repetitive tasks eating up your team's valuable time every day",
  "Slow decision making because reports take too long to prepare",
  "Leads falling through the cracks due to manual follow up",
  "Manual data entry creating costly and embarrassing mistakes",
  "Generic tools that do not fit how your business actually works",
  "No visibility into what is happening across your operations",
  "Growing pains that your current software cannot keep up with",
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Problems We Solve */}
      <section className="py-16" style={{ background: "#fdfbff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">

            {/* Left — Sound Familiar? (70%) */}
            <div className="lg:w-[70%]">
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <h2 className="text-2xl font-bold text-[#3B3B3B] mb-2">Sound Familiar?</h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg">
                  These are the challenges we hear from business owners every week. If any of these ring a bell,
                  we have a solution designed for exactly that situation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problemsWeSolve.map((problem) => (
                  <div key={problem} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-[#6b7280] text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — animation (30%), no box wrapper */}
            <div className="lg:w-[30%] shrink-0 flex flex-col items-center">
              <video
                src="/videos/anim-workflow.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full block rounded-2xl"
                style={{ boxShadow: "0 8px 40px rgba(124,58,237,0.15)" }}
              />
              <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                Manual workflows → intelligent automation
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#f7f8ff" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-c absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #818cf8, #6366f1)" }} />
          <div className="blob-a absolute top-10 right-0 w-56 h-56 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #93c5fd, #3b82f6)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ede9fe] text-[#7c3aed] text-xs font-bold tracking-widest uppercase border border-[#7c3aed]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              8 Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B3B3B] mb-4">
              Click Any Service to{" "}
              <span className="gradient-text">See the Details</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Every service is fully customized to your business. Expand any card to see exactly
              what is included and how it could apply to your situation.
            </p>
          </div>
          <ServiceCardsGrid />
        </div>
      </section>

    </>
  );
}
