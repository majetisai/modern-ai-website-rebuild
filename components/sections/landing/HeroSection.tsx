"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils/constants";

const highlights = [
  "No long-term contracts required",
  "Free initial consultation",
  "Based right here in Southeast Missouri",
];

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9FFFD] text-[#009991] text-sm font-semibold mb-6 border border-[#009991]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#009991] animate-pulse" />
              Your Strategic AI Partner in Southeast Missouri
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3B3B3B] leading-tight mb-6"
            >
              Smarter Business
              <br />
              Starts with the{" "}
              <span className="gradient-text">Right AI</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl"
            >
              We build custom AI-powered tools and automation systems that help local businesses
              save time, reduce manual work, and grow with confidence. No jargon, no guesswork
              — just practical solutions that actually work.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 mb-10"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-[#3B3B3B] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#009991] shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link href="/consulting" className="btn-teal rounded-xl px-8 py-4 text-base">
                Get a Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline rounded-xl px-8 py-4 text-base">
                See What We Build
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#009991] transition-colors">
                <Phone className="w-4 h-4" />
                Prefer to call? Reach us at {PHONE}
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            {/* Source: Unsplash — https://unsplash.com/photos/people-sitting-down-near-table-with-assorted-laptop-computers-SYTO3xs06fU */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaborating on AI solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Teal overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#009991]/10 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D9FFFD] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#009991]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#009991]">40%</div>
                  <div className="text-xs text-[#6b7280] font-medium">Average time saved</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-[#009991] text-white rounded-2xl shadow-lg px-4 py-3"
            >
              <div className="text-xs font-semibold opacity-80">Businesses Served</div>
              <div className="text-2xl font-extrabold">50+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Teal wave divider */}
      <div className="mt-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 L1440 60 L0 60 Z" fill="#f8fffe"/>
        </svg>
      </div>
    </section>
  );
}
