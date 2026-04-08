import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Target, Users, Lightbulb, ShieldCheck, Heart, Handshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutHero from "@/components/sections/about/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Modern AI Solutions LLC is a locally owned AI consulting and custom software company based in Jackson, Missouri, serving Southeast Missouri businesses.",
};

const values = [
  { icon: ShieldCheck, title: "Honesty First", description: "We tell you what AI can and cannot do for your business. No hype, no overselling. If AI is not the right solution, we will tell you that too.", iconBg: "bg-blue-100", iconColor: "text-blue-600", border: "border-t-4 border-blue-400" },
  { icon: Target, title: "Results Focused", description: "Every project is measured by business outcomes: time saved, revenue generated, efficiency gained. Great-looking code that does not move the needle is not good enough.", iconBg: "bg-orange-100", iconColor: "text-orange-600", border: "border-t-4 border-orange-400" },
  { icon: Users, title: "Community First", description: "We are part of Southeast Missouri too. When local businesses grow, our whole community grows. That is why we are personally invested in your long-term success.", iconBg: "bg-green-100", iconColor: "text-green-600", border: "border-t-4 border-green-400" },
  { icon: Lightbulb, title: "Continuous Innovation", description: "AI evolves fast. We stay ahead of the curve so you do not have to, and we proactively bring new opportunities to your attention before your competitors find them.", iconBg: "bg-yellow-100", iconColor: "text-yellow-600", border: "border-t-4 border-yellow-400" },
  { icon: Heart, title: "Partnership Mentality", description: "We are not a vendor. We are a partner. No disappearing acts after launch. We are with you for the full journey and genuinely care about your outcomes.", iconBg: "bg-red-100", iconColor: "text-red-500", border: "border-t-4 border-red-400" },
  { icon: Handshake, title: "Radical Transparency", description: "You own everything we build. Source code, data, documentation — all of it is yours. We earn your trust through results, not contracts.", iconBg: "bg-purple-100", iconColor: "text-purple-600", border: "border-t-4 border-purple-400" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold tracking-widest uppercase border border-white/20 mb-6">
            <Target className="w-4 h-4" />
            Our Mission
          </span>
          <blockquote className="text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
            &ldquo;To translate complex AI technology into practical efficiency and sustainable
            growth for <span className="text-[#ede9fe]">every business</span> we serve.&rdquo;
          </blockquote>
          <p className="text-white/80 text-lg leading-relaxed">
            We use a modern, collaborative team approach to deliver solutions previously
            only accessible to enterprise companies with enterprise budgets.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#fffaf5" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-b absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #fdba74, #f97316)" }} />
          <div className="blob-a absolute top-10 left-0 w-56 h-56 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #86efac, #22c55e)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What We Stand"
            titleHighlight="For"
            subtitle="These are not just words on a wall. They are the principles behind every decision we make and every solution we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className={`card rounded-2xl p-6 flex flex-col gap-4 ${value.border}`}>
                <div className={`w-12 h-12 rounded-xl ${value.iconBg} flex items-center justify-center`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className="text-[#3B3B3B] font-bold text-lg">{value.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#f0f5ff" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-c absolute top-0 left-0 w-72 h-72 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #93c5fd, #3b82f6)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ede9fe] text-[#7c3aed] text-xs font-bold tracking-widest uppercase border border-[#7c3aed]/20 mb-6">
                <MapPin className="w-4 h-4" />
                Locally Rooted
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B3B3B] mb-6">
                Proudly Based in{" "}
                <span className="gradient-text">Jackson, Missouri</span>
              </h2>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                We are not a remote vendor trying to sell you a solution from across the country.
                We live here, work here, and shop at the same businesses we serve.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Jackson, MO HQ", "Cape Girardeau", "Poplar Bluff", "Sikeston", "Perryville"].map((city) => (
                  <span key={city} className="px-4 py-2 rounded-full bg-white border border-blue-100 text-[#3B3B3B] text-sm font-medium shadow-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-2 ring-blue-100">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=420&fit=crop&q=85"
                alt="Local Southeast Missouri business community"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
                  <span className="text-[#3B3B3B] text-sm font-semibold">Serving Southeast Missouri and beyond</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
