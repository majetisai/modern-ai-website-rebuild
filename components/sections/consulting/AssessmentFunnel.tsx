"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, Send } from "lucide-react";
import { IS_PROTOTYPE } from "@/lib/utils/constants";

const questions = [
  {
    id: "business_size",
    question: "How many employees does your business have?",
    options: [
      { label: "Just me (Solo)", value: "solo" },
      { label: "2–10 employees", value: "small" },
      { label: "11–50 employees", value: "medium" },
      { label: "51+ employees", value: "large" },
    ],
  },
  {
    id: "biggest_challenge",
    question: "What's your biggest operational challenge right now?",
    options: [
      { label: "Too much manual, repetitive work", value: "manual_work" },
      { label: "Slow or lost customer follow-up", value: "followup" },
      { label: "Data scattered across multiple systems", value: "data_silos" },
      { label: "Outdated website or customer-facing tools", value: "website" },
    ],
  },
  {
    id: "current_tools",
    question: "Which tools are you currently using?",
    options: [
      { label: "Mostly spreadsheets and email", value: "basic" },
      { label: "Some dedicated software (CRM, POS, etc.)", value: "some_tools" },
      { label: "Multiple disconnected systems", value: "disconnected" },
      { label: "We have a tech stack but need AI on top", value: "advanced" },
    ],
  },
  {
    id: "ai_experience",
    question: "How familiar is your team with AI tools?",
    options: [
      { label: "AI is totally new to us", value: "beginner" },
      { label: "We've tried ChatGPT or similar", value: "curious" },
      { label: "We use some AI tools already", value: "experienced" },
      { label: "We want custom AI, not generic tools", value: "advanced" },
    ],
  },
  {
    id: "timeline",
    question: "What's your ideal timeline to get started?",
    options: [
      { label: "As soon as possible", value: "asap" },
      { label: "Within the next 30 days", value: "month" },
      { label: "Next 1–3 months", value: "quarter" },
      { label: "Still researching options", value: "researching" },
    ],
  },
];

interface Results {
  headline: string;
  description: string;
  recommendations: string[];
  urgency: string;
}

function getResults(answers: Record<string, string>): Results {
  const challenge = answers.biggest_challenge;
  const experience = answers.ai_experience;
  const timeline = answers.timeline;

  const recs: string[] = [];

  if (challenge === "manual_work") recs.push("Workflow Automation", "Database & Dashboard Solutions");
  if (challenge === "followup") recs.push("AI Chatbots & Virtual Assistants", "Sales & Marketing Automation");
  if (challenge === "data_silos") recs.push("System Integrations & Data Flow", "Database & Dashboard Solutions");
  if (challenge === "website") recs.push("Modern Websites & Web Apps", "Sales & Marketing Automation");

  if (experience === "advanced" || experience === "experienced") {
    recs.push("RAG & Document Intelligence");
  } else {
    recs.push("AI Readiness Assessment");
  }

  const urgencyMap: Record<string, string> = {
    asap: "Our team can typically start an initial assessment within 2–3 business days.",
    month: "We can schedule your discovery call this week to meet your 30-day window.",
    quarter: "We have availability to begin planning your project this month.",
    researching: "No pressure — take the time you need. Our free assessment has no obligations.",
  };

  return {
    headline: "Great news — we can help.",
    description: "Based on your answers, here are the solutions most likely to deliver immediate ROI for your business:",
    recommendations: [...new Set(recs)].slice(0, 3),
    urgency: urgencyMap[timeline] || urgencyMap.researching,
  };
}

export default function AssessmentFunnel() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = results
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length;
  const progress = step === 0 ? 0 : Math.round((step / totalSteps) * 100);
  const isQuestion = step >= 1 && step <= totalSteps;
  const question = isQuestion ? questions[step - 1] : null;
  const results = step > totalSteps ? getResults(answers) : null;

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (isQuestion && selected) {
      setAnswers((prev) => ({ ...prev, [question!.id]: selected }));
      setSelected("");
      setStep((s) => s + 1);
    } else if (step === 0) {
      setStep(1);
    }
  };

  const handleSubmit = () => {
    if (!name || !email) return;
    if (IS_PROTOTYPE) {
      console.log("Assessment submission (prototype):", { name, email, answers });
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-[#009991]/20 border-2 border-[#009991] flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#009991]" />
        </div>
        <h3 className="text-3xl font-extrabold text-white mb-4">We&apos;ll Be in Touch Soon!</h3>
        <p className="text-[#8b9cc8] max-w-md mx-auto">
          Thanks {name}! We&apos;ve received your assessment and someone from our team will reach out
          within 1 business day to schedule your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      {step > 0 && step <= totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-[#8b9cc8] mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#009991] to-[#00b8af] rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Intro */}
        {step === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass rounded-3xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#009991]/20 border border-[#009991]/30 flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#009991]" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              AI Readiness Assessment
            </h3>
            <p className="text-[#8b9cc8] leading-relaxed mb-8 max-w-lg mx-auto">
              Answer 5 quick questions and we&apos;ll identify the AI solutions most likely to
              deliver immediate value for your specific business — with no obligation.
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {["Takes less than 2 minutes", "Personalized recommendations", "Free — no strings attached"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#8b9cc8] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#009991] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#009991] text-white font-bold hover:bg-[#00b8af] transition-colors shadow-[0_0_25px_rgba(0,153,145,0.3)]"
            >
              Start My Assessment <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Questions */}
        {isQuestion && question && (
          <motion.div
            key={`q-${step}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              {question.question}
            </h3>
            <div className="space-y-3 mb-8">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                    selected === option.value
                      ? "border-[#009991] bg-[#009991]/15 text-white"
                      : "border-white/10 bg-white/3 text-[#8b9cc8] hover:border-[#009991]/50 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${
                      selected === option.value ? "border-[#009991] bg-[#009991]" : "border-white/30"
                    }`} />
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => { setStep((s) => s - 1); setSelected(""); }}
                className="flex items-center gap-1 text-[#8b9cc8] hover:text-white transition-colors text-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selected}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#00b8af] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {step === totalSteps ? "See Results" : "Continue"} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Results */}
        {step > totalSteps && results && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-[#009991]" />
              <h3 className="text-2xl font-extrabold text-white">{results.headline}</h3>
            </div>
            <p className="text-[#8b9cc8] mb-6">{results.description}</p>

            <div className="space-y-3 mb-6">
              {results.recommendations.map((rec, i) => (
                <div key={rec} className="flex items-center gap-3 p-4 rounded-xl bg-[#009991]/10 border border-[#009991]/20">
                  <span className="w-6 h-6 rounded-full bg-[#009991] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[#f0f4ff] font-medium">{rec}</span>
                </div>
              ))}
            </div>

            <p className="text-[#8b9cc8] text-sm mb-6 italic">{results.urgency}</p>

            {/* Contact Form */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-white font-semibold mb-4">
                Want us to send you a personalized breakdown?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none transition-colors text-sm"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!name || !email}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#00b8af] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" /> Send My Results & Schedule a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
