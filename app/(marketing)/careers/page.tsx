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
  {
    icon: Zap,
    title: "Work on Cutting-Edge AI",
    description: "Build real products with the latest AI tools and models before most developers have seen them.",
  },
  {
    icon: Heart,
    title: "Meaningful Impact",
    description: "Your work directly helps local businesses grow. You will actually see the results of what you build in the community around you.",
  },
  {
    icon: TrendingUp,
    title: "Grow Fast",
    description: "A small team means you own more, learn faster, and advance quicker than you ever could at a large corporation.",
  },
  {
    icon: Globe,
    title: "Flexible and Remote-Friendly",
    description: "Most roles offer remote or hybrid flexibility. We care about results, not where you work from.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
            <Briefcase className="w-4 h-4" />
            We&apos;re Hiring
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
            Build the Future of AI
            <br />
            <span className="gradient-text">Right Here in Missouri</span>
          </h1>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Join a team of builders putting powerful AI tools into the hands of real businesses.
            Small team, big impact, and absolutely zero corporate nonsense.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="card rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D9FFFD] border border-[#009991]/20 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-[#009991]" />
                </div>
                <h3 className="text-[#3B3B3B] font-semibold">{perk.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009991] animate-pulse" />
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B3B3B] mb-4">
              Join the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              Click any role to see the details and apply. We typically respond within 5 business days.
            </p>
          </div>
          <JobListings />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
