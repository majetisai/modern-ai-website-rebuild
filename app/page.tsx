import type { Metadata } from "next";
import HeroSection from "@/components/sections/landing/HeroSection";
import ValuePropsSection from "@/components/sections/landing/ValuePropsSection";
import ServicesOverviewSection from "@/components/sections/landing/ServicesOverviewSection";
import ProcessSection from "@/components/sections/landing/ProcessSection";
import TestimonialsSection from "@/components/sections/landing/TestimonialsSection";
import CtaSection from "@/components/sections/landing/CtaSection";

export const metadata: Metadata = {
  title: "Modern AI Solutions — Your Strategic AI Partner",
  description:
    "Custom AI-powered software, chatbots, RAG systems, CRM, POS, and workflow automation for Southeast Missouri businesses. Powered by Claude AI.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <ServicesOverviewSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
