import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/data/team";
import TeamHero from "@/components/sections/team/TeamHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Modern AI Solutions team, AI engineers, developers, and consultants committed to delivering real results for Southeast Missouri businesses.",
};

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamPage() {
  const [featured, ...rest] = team;

  return (
    <>
      <TeamHero />

      {/* ── Featured Leader (HPE-style: large photo left, bio right) ────── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#7c3aed] mb-10">Leadership</p>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Photo */}
            <div className="w-full lg:w-[360px] shrink-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src={featured.imageUrl}
                  alt={featured.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {featured.expertise.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full text-xs bg-[#ede9fe] text-[#7c3aed] border border-[#7c3aed]/20 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 pt-2">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-[#3B3B3B] mb-2 leading-tight">
                {featured.name}
              </h3>
              <p className="text-[#7c3aed] font-semibold text-lg mb-6">{featured.role}</p>
              <p className="text-[#4b5563] text-base leading-relaxed mb-4">{featured.bio}</p>
              <p className="text-[#6b7280] text-base leading-relaxed mb-8">
                With a deep commitment to the Southeast Missouri community, Gary believes every local
                business deserves access to the same AI capabilities that power the world&apos;s most
                successful companies — delivered with a personal touch that national vendors simply cannot match.
              </p>
              {featured.linkedinUrl && featured.linkedinUrl !== "#" && (
                <a
                  href={featured.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B3B3B] text-white font-semibold text-sm hover:bg-[#7c3aed] transition-colors"
                >
                  <LinkedInIcon />
                  View LinkedIn Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Grid (3-col grid like HPE) ─────────────────────────────── */}
      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#7c3aed] mb-10">The Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {rest.map((member) => (
              <div key={member.id} className="group">
                {/* Photo */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-md bg-gray-100">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <h3 className="text-[#3B3B3B] font-bold text-xl mb-0.5">{member.name}</h3>
                <p className="text-[#7c3aed] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.expertise.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-full text-[11px] bg-[#ede9fe] text-[#7c3aed] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                {member.linkedinUrl && member.linkedinUrl !== "#" ? (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#7c3aed] font-semibold hover:underline"
                  >
                    View the bio <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-sm text-[#9ca3af] italic">Profile coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Team ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-3">Want to Join Our Team?</h2>
              <p className="text-white/80 mb-6">
                We are always looking for talented AI engineers, developers, and business
                consultants who share our passion for building tools that actually make a difference.
              </p>
              <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#7c3aed] font-semibold hover:bg-[#ede9fe] transition-colors">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
