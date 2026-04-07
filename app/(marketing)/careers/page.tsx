import type { Metadata } from "next";
import { Briefcase, Zap, Heart, TrendingUp, Globe } from "lucide-react";
import JobListings from "@/components/sections/careers/JobListings";
import CtaSection from "@/components/sections/landing/CtaSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Modern AI Solutions team. Open positions for AI engineers, full-stack developers, and business consultants in Jackson, Missouri.",
};

const perks = [
  { icon: Zap, title: "Work on Cutting-Edge AI", description: "Build real products with Claude API and the latest AI tooling before most developers have seen them." },
  { icon: Heart, title: "Meaningful Impact", description: "Your work directly helps local businesses grow. See the results of what you build in the community around you." },
  { icon: TrendingUp, title: "Grow Fast", description: "Small team means you own more, learn faster, and advance quicker than at a large corporation." },
  { icon: Globe, title: "Flexible & Remote-Friendly", description: "Most roles offer remote or hybrid flexibility. We care about results, not where you work from." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#009991]/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-6">
            <Briefcase className="w-4 h-4" />
            We&apos;re Hiring
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#f0f4ff] leading-tight mb-6">
            Build the Future of AI
            <br />
            <span className="gradient-text">Right Here in Missouri</span>
          </h1>
          <p className="text-[#8b9cc8] text-lg max-w-2xl mx-auto">
            Join a team of builders who are putting powerful AI tools into the hands of real
            businesses. Small team, big impact, zero corporate nonsense.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-[#0d1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="glass rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#009991]/15 border border-[#009991]/20 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-[#009991]" />
                </div>
                <h3 className="text-white font-semibold">{perk.title}</h3>
                <p className="text-[#8b9cc8] text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009991] animate-pulse" />
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f0f4ff] mb-4">
              Join the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#8b9cc8] max-w-xl mx-auto">
              Click any role to see details and apply. We typically respond within 5 business days.
            </p>
          </div>
          <JobListings />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
