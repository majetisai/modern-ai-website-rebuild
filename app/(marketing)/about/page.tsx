import type { Metadata } from "next";
import { MapPin, Target, Users, Lightbulb, ShieldCheck, Heart, Handshake } from "lucide-react";
import CtaSection from "@/components/sections/landing/CtaSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Modern AI Solutions LLC is a locally owned AI consulting and custom software company based in Jackson, Missouri, serving Southeast Missouri businesses.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty First",
    description:
      "We tell you what AI can and cannot do for your business. No hype, no overselling. If AI is not the right solution, we will tell you that too.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every project is measured by business outcomes: time saved, revenue generated, efficiency gained. Great-looking code that does not move the needle is not good enough.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We are part of Southeast Missouri too. When local businesses grow, our whole community grows. That is why we are personally invested in your long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "AI evolves fast. We stay ahead of the curve so you do not have to, and we proactively bring new opportunities to your attention before your competitors find them.",
  },
  {
    icon: Heart,
    title: "Partnership Mentality",
    description:
      "We are not a vendor. We are a partner. No disappearing acts after launch. We are with you for the full journey and genuinely care about your outcomes.",
  },
  {
    icon: Handshake,
    title: "Radical Transparency",
    description:
      "You own everything we build. Source code, data, documentation — all of it is yours. We earn your trust through results, not contracts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
                <MapPin className="w-4 h-4" />
                Jackson, Missouri
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
                Built for{" "}
                <span className="gradient-text">Main Street</span>,<br />
                Powered by AI
              </h1>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                Modern AI Solutions LLC was founded on a simple belief: the transformative power
                of AI should not be reserved for Fortune 500 companies. Local businesses in
                Southeast Missouri deserve the same powerful tools, built to fit their
                exact workflows and real-world budgets.
              </p>
              <p className="text-[#6b7280] text-lg leading-relaxed">
                We combine 15 or more years of sales and business leadership with hands-on technical
                expertise to deliver practical, measurable AI solutions. Not theoretical. Not
                experimental. Real tools that real businesses use every single day.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Years of Business Experience" },
                { value: "50+", label: "Businesses Served" },
                { value: "100%", label: "Client Satisfaction Rate" },
                { value: "SE Missouri", label: "Locally Owned and Operated" },
              ].map((stat) => (
                <div key={stat.label} className="card rounded-2xl text-center p-8">
                  <div className="text-3xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-[#6b7280] text-sm leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
            <Target className="w-4 h-4" />
            Our Mission
          </span>
          <blockquote className="text-3xl md:text-4xl font-bold text-[#3B3B3B] leading-snug mb-8">
            &ldquo;To translate complex AI technology into practical efficiency and sustainable
            growth for <span className="gradient-text">every business</span> we serve.&rdquo;
          </blockquote>
          <p className="text-[#6b7280] text-lg leading-relaxed">
            We use a modern, collaborative team approach to deliver solutions that were previously
            only accessible to enterprise companies with enterprise budgets. Every business deserves
            that same competitive advantage.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What We Stand"
            titleHighlight="For"
            subtitle="These are not just words on a wall. They are the principles behind every decision we make and every solution we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D9FFFD] border border-[#009991]/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#009991]" />
                </div>
                <h3 className="text-[#3B3B3B] font-bold text-lg">{value.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#009991] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <MapPin className="w-10 h-10 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Proudly Based in Jackson, Missouri
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We are not a remote vendor trying to sell you a solution from across the country.
                We live here, work here, and shop at the same businesses we serve. When we say
                we care about Southeast Missouri&apos;s success, we mean it personally.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
                <div className="w-2 h-2 rounded-full bg-[#D9FFFD] animate-pulse" />
                <span className="text-white text-sm">Serving Southeast Missouri and beyond</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
