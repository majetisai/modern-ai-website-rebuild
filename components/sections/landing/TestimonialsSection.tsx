"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-[#0d1428]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Stories"
          title="Real Results for"
          titleHighlight="Real Businesses"
          subtitle="Hear from local Southeast Missouri businesses that have transformed their operations with Modern AI Solutions."
        />

        <div className="relative">
          {/* Testimonial Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 md:p-12 text-center relative"
          >
            <Quote className="w-10 h-10 text-[#009991]/30 mx-auto mb-6" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#009991] text-[#009991]" />
              ))}
            </div>

            <blockquote className="text-[#f0f4ff] text-lg md:text-xl leading-relaxed font-medium mb-8">
              &ldquo;{testimonials[current].content}&rdquo;
            </blockquote>

            <div>
              <div className="text-white font-bold">{testimonials[current].name}</div>
              <div className="text-[#009991] text-sm font-medium">
                {testimonials[current].title}, {testimonials[current].company}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#8b9cc8] hover:text-[#009991] hover:border-[#009991]/40 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#009991]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#8b9cc8] hover:text-[#009991] hover:border-[#009991]/40 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
