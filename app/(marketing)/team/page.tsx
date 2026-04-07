import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data/team";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/sections/landing/CtaSection";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Modern AI Solutions team, AI engineers, developers, and consultants committed to delivering real results for Southeast Missouri businesses.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FFFD] text-[#009991] text-xs font-bold tracking-widest uppercase border border-[#009991]/20 mb-6">
            The People Behind the Platform
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3B3B3B] leading-tight mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            We are a focused team of AI engineers, developers, and business consultants who are
            genuinely invested in the success of every client we work with.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.id} className="card rounded-2xl p-6 flex flex-col">
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#3B3B3B] font-bold text-xl">{member.name}</h3>
                    <p className="text-[#009991] text-sm font-semibold mb-2">{member.role}</p>
                    <div className="flex gap-2">
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#D9FFFD] flex items-center justify-center text-[#009991] hover:bg-[#009991] hover:text-white transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="mt-auto">
                  <p className="text-[#9ca3af] text-xs uppercase tracking-wider font-semibold mb-2">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full text-xs bg-[#D9FFFD] text-[#009991] border border-[#009991]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-[#3B3B3B] mb-3">Want to Join Our Team?</h2>
            <p className="text-[#6b7280] mb-6">
              We are always looking for talented AI engineers, developers, and business
              consultants who share our passion for building tools that actually make a difference.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#007a73] transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
