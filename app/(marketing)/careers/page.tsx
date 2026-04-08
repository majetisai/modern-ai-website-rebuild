import type { Metadata } from "next";
import { Zap, Heart, TrendingUp, Globe } from "lucide-react";
import JobListings from "@/components/sections/careers/JobListings";
import CareersHero from "@/components/sections/careers/CareersHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Modern AI Solutions team. Open positions for AI engineers, full-stack developers, and business consultants in Jackson, Missouri.",
};

const perks = [
  { icon: Zap, title: "Work on Cutting-Edge AI", description: "Build real products with the latest AI tools and models before most developers have seen them.", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { icon: Heart, title: "Meaningful Impact", description: "Your work directly helps local businesses grow. You will actually see the results of what you build in the community around you.", iconBg: "bg-red-100", iconColor: "text-red-500" },
  { icon: TrendingUp, title: "Grow Fast", description: "A small team means you own more, learn faster, and advance quicker than you ever could at a large corporation.", iconBg: "bg-green-100", iconColor: "text-green-600" },
  { icon: Globe, title: "Flexible and Remote-Friendly", description: "Most roles offer remote or hybrid flexibility. We care about results, not where you work from.", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
];

export default function CareersPage() {
  return (
    <>
      <CareersHero />

      {/* Perks */}
      <section className="py-16 bg-[#fffdf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="card rounded-2xl p-6 flex flex-col gap-3 border-t-4 border-amber-300">
                <div className={`w-10 h-10 rounded-xl ${perk.iconBg} flex items-center justify-center`}>
                  <perk.icon className={`w-5 h-5 ${perk.iconColor}`} />
                </div>
                <h3 className="text-[#3B3B3B] font-semibold">{perk.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-c absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #fdba74, #f97316)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase border border-amber-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
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

    </>
  );
}
