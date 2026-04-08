"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, Send, SkipForward, ArrowRight } from "lucide-react";
import Link from "next/link";
import { IS_PROTOTYPE } from "@/lib/utils/constants";
import { useConsultationModal } from "@/lib/context/ConsultationModalContext";

const questions = [
  {
    id: "business_type",
    question: "What type of business do you run?",
    subtitle: "This helps us give you more relevant recommendations.",
    options: [
      { label: "Retail or E-commerce", value: "retail" },
      { label: "Restaurant or Food Service", value: "restaurant" },
      { label: "Healthcare or Medical", value: "healthcare" },
      { label: "Professional Services (law, accounting, consulting)", value: "professional" },
      { label: "Construction or Trades", value: "construction" },
      { label: "Real Estate", value: "realestate" },
      { label: "Manufacturing or Distribution", value: "manufacturing" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "business_size",
    question: "How many people work in your business?",
    subtitle: "This helps us understand the scale of solution that makes sense for you.",
    options: [
      { label: "Just me. I run the show solo.", value: "solo" },
      { label: "2 to 10 people", value: "small" },
      { label: "11 to 50 people", value: "medium" },
      { label: "More than 50 people", value: "large" },
    ],
  },
  {
    id: "biggest_challenge",
    question: "What is your biggest headache right now?",
    subtitle: "Pick the one that keeps you up at night.",
    options: [
      { label: "Too much manual, repetitive work eating up our time", value: "manual_work" },
      { label: "Leads and customers falling through the cracks", value: "followup" },
      { label: "Data scattered across too many systems that do not talk", value: "data_silos" },
      { label: "Our website or online presence is outdated and underperforming", value: "website" },
    ],
  },
  {
    id: "current_tools",
    question: "How would you describe your current tech setup?",
    subtitle: "No wrong answers here. This just helps us understand your starting point.",
    options: [
      { label: "Mostly spreadsheets and email, keeping it simple", value: "basic" },
      { label: "A few dedicated tools but nothing connected", value: "some_tools" },
      { label: "Several systems that do not really talk to each other", value: "disconnected" },
      { label: "Solid setup, I just want AI layered on top of what I have", value: "advanced" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    subtitle: "There is no pressure here. This just helps us prioritize our availability.",
    options: [
      { label: "As soon as possible, I need this now", value: "asap" },
      { label: "Ideally within the next 30 days", value: "month" },
      { label: "Sometime in the next few months", value: "quarter" },
      { label: "Still exploring, no timeline yet", value: "researching" },
    ],
  },
];

interface Results {
  headline: string;
  description: string;
  recommendations: string[];
  urgency: string;
  score: number;
}

function getResults(answers: Record<string, string>): Results {
  const challenge = answers.biggest_challenge;
  const experience = answers.current_tools;
  const timeline = answers.timeline;
  const businessType = answers.business_type;

  const recs: string[] = [];

  if (challenge === "manual_work") recs.push("Workflow Automation", "Database and Dashboard Solutions");
  if (challenge === "followup") recs.push("AI Chatbots and Virtual Assistants", "Sales and Marketing Automation");
  if (challenge === "data_silos") recs.push("System Integrations", "Database and Dashboard Solutions");
  if (challenge === "website") recs.push("Modern Websites and Web Applications", "Sales and Marketing Automation");

  if (businessType === "retail" || businessType === "restaurant") recs.push("Custom POS Systems");
  if (experience === "advanced" || experience === "disconnected") recs.push("Smart Document Search and Intelligence");
  else recs.push("AI Readiness Assessment");

  const urgencyMap: Record<string, string> = {
    asap: "Our team can typically start an initial assessment within 2 to 3 business days. Reach out today and we will get you moving.",
    month: "We can schedule your discovery call this week so you are well within your 30-day window.",
    quarter: "We have availability to begin planning this month. No rush at all.",
    researching: "Take all the time you need. Our free consultation has zero obligations and zero pressure.",
  };

  const scoreMap: Record<string, number> = {
    asap: 95, month: 85, quarter: 70, researching: 55,
  };

  return {
    headline: "Good news. We can definitely help.",
    description: "Based on what you shared, here are the solutions most likely to make an immediate difference:",
    recommendations: [...new Set(recs)].slice(0, 3),
    urgency: urgencyMap[timeline] || urgencyMap.researching,
    score: scoreMap[timeline] || 65,
  };
}

const CARD_STYLE = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const SELECTED_STYLE = {
  background: "rgba(124,58,237,0.18)",
  border: "2px solid #7c3aed",
  boxShadow: "0 0 16px rgba(124,58,237,0.25)",
};

const OPTION_STYLE = {
  background: "rgba(255,255,255,0.06)",
  border: "2px solid rgba(255,255,255,0.15)",
  color: "#e5e7eb",
};

export default function DarkAssessmentFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { open } = useConsultationModal();

  const totalSteps = questions.length;
  const progress = step === 0 ? 0 : Math.round((step / totalSteps) * 100);
  const isQuestion = step >= 1 && step <= totalSteps;
  const question = isQuestion ? questions[step - 1] : null;
  const results = step > totalSteps ? getResults(answers) : null;

  const handleNext = () => {
    if (isQuestion && selected) {
      setAnswers((prev) => ({ ...prev, [question!.id]: selected }));
      setSelected("");
      setStep((s) => s + 1);
    } else if (step === 0) {
      setStep(1);
    }
  };

  const handleSkip = () => {
    if (isQuestion) {
      setSelected("");
      setStep((s) => s + 1);
    }
  };

  const handleSubmit = () => {
    if (!name || !email) return;
    if (IS_PROTOTYPE) console.log("Assessment submission (prototype):", { name, email, answers });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 max-w-md mx-auto">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(124,58,237,0.2)", border: "2px solid rgba(124,58,237,0.5)" }}
        >
          <CheckCircle className="w-12 h-12" style={{ color: "#7c3aed" }} />
        </div>
        <h3 className="text-3xl font-extrabold text-white mb-4">We will be in touch soon!</h3>
        <p className="mb-8" style={{ color: "#9ca3af" }}>
          Thanks {name}! We received your assessment and someone from our team will reach out within one business day.
        </p>
        <Link href="/" className="btn-teal rounded-xl px-6 py-3">Back to Home</Link>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      {step > 0 && step <= totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-2" style={{ color: "#6b7280" }}>
            <span>Question {step} of {totalSteps}</span>
            <span style={{ color: "#7c3aed" }}>{progress}% complete</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #c4b5fd)" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          {/* Step dots */}
          <div className="flex justify-between mt-3">
            {questions.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i < step ? "#7c3aed" : "rgba(255,255,255,0.15)",
                  boxShadow: i < step ? "0 0 8px rgba(124,58,237,0.6)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Intro */}
        {step === 0 && (
          <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="rounded-3xl p-8 md:p-10 text-center" style={CARD_STYLE}>
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#7c3aed" strokeWidth={1.8}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">AI Readiness Assessment</h3>
            <p className="leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "#9ca3af" }}>
              Answer 5 quick questions and we will identify the AI solutions most likely to deliver real value for your specific business. Completely free with no strings attached.
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {["Takes less than 2 minutes", "Personalized recommendations for your business", "Free with absolutely no obligation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#d1d5db" }}>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#7c3aed" }} />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
              style={{ background: "#7c3aed", boxShadow: "0 0 32px rgba(124,58,237,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#7c3aed")}
            >
              Start the Assessment <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Questions */}
        {isQuestion && question && (
          <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            className="rounded-3xl p-8 md:p-10" style={CARD_STYLE}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{question.question}</h3>
            {question.subtitle && (
              <p className="text-sm mb-6" style={{ color: "#6b7280" }}>{question.subtitle}</p>
            )}

            <div className="space-y-3 mb-8">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelected(option.value)}
                  className="w-full text-left px-5 py-4 rounded-xl transition-all duration-200 text-sm font-medium"
                  style={selected === option.value ? SELECTED_STYLE : OPTION_STYLE}
                  onMouseEnter={(e) => {
                    if (selected !== option.value) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== option.value) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full shrink-0 transition-all flex items-center justify-center"
                      style={{
                        border: selected === option.value ? "2px solid #7c3aed" : "2px solid rgba(255,255,255,0.3)",
                        background: selected === option.value ? "#7c3aed" : "transparent",
                        boxShadow: selected === option.value ? "0 0 10px rgba(124,58,237,0.6)" : "none",
                      }}
                    >
                      {selected === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span style={{ color: selected === option.value ? "#ffffff" : "#e5e7eb" }}>
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => { setStep((s) => s - 1); setSelected(""); }}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSkip}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#d1d5db",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#d1d5db";
                  }}
                >
                  <SkipForward className="w-4 h-4" /> Skip
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all text-white"
                  style={{
                    background: selected ? "#7c3aed" : "rgba(255,255,255,0.08)",
                    border: selected ? "none" : "1px solid rgba(255,255,255,0.15)",
                    boxShadow: selected ? "0 0 24px rgba(124,58,237,0.45)" : "none",
                    opacity: selected ? 1 : 0.45,
                    cursor: selected ? "pointer" : "not-allowed",
                  }}
                >
                  {step === totalSteps ? "See My Results" : "Next"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        {step > totalSteps && results && (
          <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl p-8 md:p-10" style={CARD_STYLE}>

            {/* Score ring */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative w-20 h-20 shrink-0">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#7c3aed" strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 34 * results.score / 100} ${2 * Math.PI * 34}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-extrabold" style={{ color: "#7c3aed" }}>{results.score}%</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{results.headline}</h3>
                <p className="text-sm mt-1" style={{ color: "#9ca3af" }}>AI Readiness Score</p>
              </div>
            </div>

            <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>{results.description}</p>

            <div className="space-y-3 mb-6">
              {results.recommendations.map((rec, i) => (
                <div
                  key={rec}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: "#7c3aed" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-medium text-sm text-white">{rec}</span>
                </div>
              ))}
            </div>

            <p className="text-sm mb-6 italic" style={{ color: "#9ca3af" }}>{results.urgency}</p>

            <div
              className="border-t pt-6 mb-6"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-white font-semibold mb-4">Want us to send you a personalized breakdown?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#f0f0f0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#f0f0f0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!name || !email}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: "#7c3aed", boxShadow: "0 0 24px rgba(124,58,237,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7c3aed")}
              >
                <Send className="w-4 h-4" /> Send My Results
              </button>
            </div>

            <button
              onClick={open}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#c4b5fd",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.12)";
              }}
            >
              Schedule a Free Consultation Instead <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
