"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, Sparkles, Zap, Bot, BarChart3, Link2, BrainCircuit } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils/constants";
import { useConsultationModal } from "@/lib/context/ConsultationModalContext";
import HologramOrb from "@/components/ui/HologramOrb";
import HologramStats from "@/components/ui/HologramStats";
import HologramIcon from "@/components/ui/HologramIcon";

const highlights = [
  "No long-term contracts required",
  "Free initial consultation included",
  "Based right here in Southeast Missouri",
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; opacity: number };
    const particles: Particle[] = [];
    const COUNT = 70;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let raf: number;
    const MAX_DIST = 130;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function HeroSection() {
  const { open } = useConsultationModal();

  return (
    <section
      className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080010 0%, #0a0a0a 40%, #030810 100%)" }}
    >
      {/* Particle network */}
      <ParticleCanvas />

      {/* Purple glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
      />
      {/* Orange glow bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }}
      />
      {/* Teal glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hologram stats — top right */}
        <div className="absolute top-8 right-4 lg:right-12 hidden md:block">
          <HologramStats />
        </div>
        {/* Small orb bottom left */}
        <div className="absolute bottom-32 left-4 lg:left-12 opacity-40 hidden lg:block">
          <HologramOrb size={80} />
        </div>

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs sm:text-sm font-semibold max-w-[90vw]"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#c4b5fd",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Your Strategic AI Partner — SE Missouri</span>
            <span
              className="w-2 h-2 rounded-full animate-pulse shrink-0"
              style={{ background: "#7c3aed" }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Smarter Business
            <br />
            Starts with the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #c4b5fd, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Right AI
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: "#9ca3af" }}
          >
            We build custom AI-powered tools and automation systems that help local businesses
            save time, cut manual work, and grow with confidence. Practical solutions that actually
            work for your business.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-1.5 mb-8"
          >
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm" style={{ color: "#d1d5db" }}>
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#7c3aed" }} />
                {h}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-8"
          >
            <button
              onClick={open}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all w-full sm:w-auto"
              style={{
                background: "#7c3aed",
                color: "#fff",
                boxShadow: "0 0 32px rgba(124,58,237,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#6d28d9";
                e.currentTarget.style.boxShadow = "0 0 48px rgba(124,58,237,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#7c3aed";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(124,58,237,0.35)";
              }}
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all w-full sm:w-auto"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#f3f4f6",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              Take AI Assessment
            </Link>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <Phone className="w-4 h-4" />
              Prefer to call? Reach us at {PHONE}
            </a>
          </motion.div>

          {/* Floating hologram service icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-3 sm:gap-5 mt-6 flex-wrap"
          >
            {[
              { Icon: BrainCircuit, color: "#a855f7", glowRgb: "168,85,247", label: "AI" },
              { Icon: Zap, color: "#f97316", glowRgb: "249,115,22", label: "Automate" },
              { Icon: Bot, color: "#3b82f6", glowRgb: "59,130,246", label: "Chatbots" },
              { Icon: BarChart3, color: "#7c3aed", glowRgb: "124,58,237", label: "Analytics" },
              { Icon: Link2, color: "#22c55e", glowRgb: "34,197,94", label: "Integrate" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
              >
                <HologramIcon Icon={item.Icon} color={item.color} glowRgb={item.glowRgb} size="sm" offset={i * 0.5} />
                <span className="text-[10px] font-medium tracking-wide" style={{ color: "#4b5563" }}>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: "#4b5563" }}>Scroll to explore</span>
          <div className="w-px h-8 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <motion.div
              className="w-full rounded-full"
              style={{ height: "40%", background: "#7c3aed" }}
              animate={{ y: ["0%", "150%", "0%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #fafbff)" }}
      />
    </section>
  );
}
