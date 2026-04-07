import type { Metadata } from "next";
import { BrainCircuit } from "lucide-react";
import ServiceCardsGrid from "@/components/sections/services/ServiceCardsGrid";
import CtaSection from "@/components/sections/landing/CtaSection";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Custom AI solutions for Southeast Missouri businesses: workflow automation, chatbots, web apps, integrations, databases, and more.",
};

const problemsWeSolve = [
  "Outdated websites that are hard to update and do not attract customers",
  "Data locked in spreadsheets with no way to get insights",
  "Business systems that do not talk to each other",
  "Repetitive tasks eating up your team's valuable time",
  "Slow decision making because reports take too long",
  "Leads falling through the cracks due to manual follow up",
  "Manual data entry creating costly mistakes",
  "Generic tools that do not fit how your business actually works",
  "No visibility into what is happening across your operations",
  "Growing pains that your current software cannot keep up with",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
              <BrainCircuit className="w-4 h-4" />
              What We Build
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
              AI Solutions Built{" "}
              <span className="gradient-text">for Your Business</span>
            </h1>
            <p className="text-[#6b7280] text-lg md:text-xl leading-relaxed max-w-2xl">
              Every solution we build is custom designed for your specific workflow, your team, and your goals.
              No cookie-cutter software. Just tools that actually work for real businesses like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#3B3B3B] mb-2">Sound Familiar?</h2>
            <p className="text-[#6b7280] mb-8">
              These are the challenges we hear from business owners every week. If any of these ring a bell,
              we have a solution designed for exactly that situation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {problemsWeSolve.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fffe] border border-[#D9FFFD]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#009991] shrink-0" />
                  <span className="text-[#6b7280] text-sm">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009991] animate-pulse" />
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

      <CtaSection />
    </>
  );
}
