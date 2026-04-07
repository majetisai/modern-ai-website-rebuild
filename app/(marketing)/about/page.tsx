import type { Metadata } from "next";
import { MapPin, Target, Users, Lightbulb, ShieldCheck, Heart, TrendingUp, Handshake } from "lucide-react";
import CtaSection from "@/components/sections/landing/CtaSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

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
      "We tell you what AI can and can't do for your business. No hype, no overselling. If AI isn't the right solution, we'll tell you.",
  },
  {
    icon: Target,
    title: "Results Obsessed",
    description:
      "Every project is measured by business outcomes — time saved, revenue generated, efficiency gained. Good-looking code that doesn't move the needle isn't good enough.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We're part of Southeast Missouri too. When local businesses grow, our whole community grows. That's why we're invested in your long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "AI evolves fast. We stay at the cutting edge so you don't have to — and proactively bring new opportunities to your attention.",
  },
  {
    icon: Heart,
    title: "Partnership Mentality",
    description:
      "We're not a vendor. We're a partner. No disappearing acts after launch — we're with you for the full journey.",
  },
  {
    icon: Handshake,
    title: "Radical Transparency",
    description:
      "You own everything we build. Source code, data, documentation — it's all yours. We earn your trust, not lock it in.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#009991]/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-6">
                <MapPin className="w-4 h-4" />
                Jackson, Missouri
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#f0f4ff] leading-tight mb-6">
                Built for{" "}
                <span className="gradient-text">Main Street</span>,<br />
                Powered by AI
              </h1>
              <p className="text-[#8b9cc8] text-lg leading-relaxed mb-6">
                Modern AI Solutions LLC was founded with a simple belief: the transformative power
                of AI shouldn&apos;t be reserved for Fortune 500 companies. Local businesses in
                Southeast Missouri deserve the same cutting-edge tools — built to fit their
                exact workflows and budget.
              </p>
              <p className="text-[#8b9cc8] text-lg leading-relaxed">
                We combine 15+ years of sales and business leadership with hands-on technical
                expertise to deliver practical, measurable AI solutions. Not theoretical. Not
                experimental. Real tools that real businesses use every day.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Years of Business Experience" },
                { value: "50+", label: "Businesses Served" },
                { value: "100%", label: "Client Satisfaction Rate" },
                { value: "SE Missouri", label: "Locally Owned & Operated" },
              ].map((stat) => (
                <GlassCard key={stat.label} className="text-center p-8">
                  <div className="text-3xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-[#8b9cc8] text-sm leading-tight">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0d1428]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#009991]/15 text-[#00b8af] border border-[#009991]/30 mb-6">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <blockquote className="text-3xl md:text-4xl font-bold text-[#f0f4ff] leading-snug mb-8">
            &ldquo;To translate complex AI technology into practical efficiency and sustainable
            growth for <span className="gradient-text">every business</span> we serve.&rdquo;
          </blockquote>
          <p className="text-[#8b9cc8] text-lg leading-relaxed">
            We use a modern, scalable team approach — augmented with specialized talent and
            AI-powered development — to deliver solutions that were previously only accessible
            to enterprise companies with enterprise budgets.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What We Stand"
            titleHighlight="For"
            subtitle="These aren't words on a wall. They're the principles behind every decision we make and every solution we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <GlassCard key={value.title} variant="hover-glow" animate className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#009991]/15 border border-[#009991]/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#009991]" />
                </div>
                <h3 className="text-white font-bold text-lg">{value.title}</h3>
                <p className="text-[#8b9cc8] text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-[#0d1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #009991 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <MapPin className="w-10 h-10 text-[#009991] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Proudly Based in <span className="gradient-text">Jackson, Missouri</span>
              </h2>
              <p className="text-[#8b9cc8] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We&apos;re not a remote vendor trying to sell you a solution from across the country.
                We live here, work here, and shop at the same businesses we serve. When we say
                we care about Southeast Missouri&apos;s success — we mean it personally.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
                <div className="w-2 h-2 rounded-full bg-[#009991] animate-pulse" />
                <span className="text-[#8b9cc8] text-sm">Serving Southeast Missouri &amp; beyond</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
