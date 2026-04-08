import type { Metadata } from "next";
import DarkAssessmentFunnel from "@/components/sections/assessment/DarkAssessmentFunnel";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Take our free AI Readiness Assessment to discover exactly where AI can reduce costs and drive growth for your Southeast Missouri business.",
};

export default function AssessmentPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060010 0%, #0a0a0a 50%, #030810 100%)" }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#c4b5fd",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7c3aed" }} />
            Free Assessment
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            How Does Your Business{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #c4b5fd, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stack Up on AI?
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            Answer 5 quick questions and get a personalized AI readiness report with
            specific recommendations for your business. Completely free, no strings attached.
          </p>
        </div>

        <DarkAssessmentFunnel />
      </div>
    </main>
  );
}
