"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Stories"
          title="Hear From Businesses"
          titleHighlight="Like Yours"
          subtitle="Real results from real Southeast Missouri businesses that have transformed how they work with Modern AI Solutions."
        />

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#faf8ff] rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-[#ede9fe]"
          >
            <Quote className="w-10 h-10 text-[#7c3aed]/30 mx-auto mb-6" />

            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#7c3aed] text-[#7c3aed]" />
              ))}
            </div>

            <blockquote className="text-[#3B3B3B] text-lg md:text-xl leading-relaxed font-medium mb-8">
              &ldquo;{testimonials[current].content}&rdquo;
            </blockquote>

            <div>
              <div className="text-[#3B3B3B] font-bold">{testimonials[current].name}</div>
              <div className="text-[#7c3aed] text-sm font-medium">
                {testimonials[current].title}, {testimonials[current].company}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6b7280] hover:text-[#7c3aed] hover:border-[#7c3aed] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#7c3aed]" : "w-2 bg-gray-200 hover:bg-gray-300"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6b7280] hover:text-[#7c3aed] hover:border-[#7c3aed] transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
