"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, Send, SkipForward } from "lucide-react";
import { IS_PROTOTYPE } from "@/lib/utils/constants";

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
      { label: "Just me — I run the show solo", value: "solo" },
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
    subtitle: "No wrong answers here — just helps us understand your starting point.",
    options: [
      { label: "Mostly spreadsheets and email — keeping it simple", value: "basic" },
      { label: "A few dedicated tools but nothing connected", value: "some_tools" },
      { label: "Several systems that do not really talk to each other", value: "disconnected" },
      { label: "Solid setup, I just want AI layered on top of what I have", value: "advanced" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    subtitle: "There is no pressure — this just helps us prioritize our team's availability.",
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
    asap: "Our team can typically start an initial assessment within 2 to 3 business days. Fill out the form below and we will reach out today.",
    month: "We can schedule your discovery call this week so you are well within your 30-day window.",
    quarter: "We have availability to begin planning this month. No rush — we will make sure the timing works for you.",
    researching: "Take all the time you need. Our free consultation has zero obligations and zero pressure.",
  };

  return {
    headline: "Good news — we can definitely help.",
    description: "Based on what you shared, here are the solutions most likely to make an immediate difference for your business:",
    recommendations: [...new Set(recs)].slice(0, 3),
    urgency: urgencyMap[timeline] || urgencyMap.researching,
  };
}

export default function AssessmentFunnel() {
  const [step, setStep] = useState(0);
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
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-[#D9FFFD] border-2 border-[#009991] flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#009991]" />
        </div>
        <h3 className="text-3xl font-extrabold text-[#3B3B3B] mb-4">We will be in touch soon!</h3>
        <p className="text-[#6b7280] max-w-md mx-auto">
          Thanks {name}! We have received your assessment and someone from our team will reach out within one business day to chat.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      {step > 0 && step <= totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-[#6b7280] mb-2">
            <span>Question {step} of {totalSteps}</span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#009991] rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Intro */}
        {step === 0 && (
          <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D9FFFD] flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#009991]" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#3B3B3B] mb-4">AI Readiness Assessment</h3>
            <p className="text-[#6b7280] leading-relaxed mb-8 max-w-lg mx-auto">
              Answer 5 quick questions and we will identify the AI solutions most likely to deliver real value for your specific business — completely free, no strings attached.
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {["Takes less than 2 minutes", "Personalized recommendations for your business", "Free with absolutely no obligation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#6b7280] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#009991] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={handleNext} className="btn-teal rounded-xl px-8 py-4">
              Start the Assessment <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Questions */}
        {isQuestion && question && (
          <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#3B3B3B] mb-2">{question.question}</h3>
            {question.subtitle && <p className="text-[#6b7280] text-sm mb-6">{question.subtitle}</p>}

            <div className="space-y-3 mb-8">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelected(option.value)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-sm ${
                    selected === option.value
                      ? "border-[#009991] bg-[#D9FFFD] text-[#3B3B3B] font-medium"
                      : "border-gray-200 bg-white text-[#6b7280] hover:border-[#009991]/50 hover:text-[#3B3B3B]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${
                      selected === option.value ? "border-[#009991] bg-[#009991]" : "border-gray-300"
                    }`} />
                    {option.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button onClick={() => { setStep((s) => s - 1); setSelected(""); }}
                className="flex items-center gap-1 text-[#6b7280] hover:text-[#3B3B3B] transition-colors text-sm">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <div className="flex items-center gap-3">
                <button onClick={handleSkip}
                  className="flex items-center gap-1.5 text-[#9ca3af] hover:text-[#6b7280] transition-colors text-sm">
                  <SkipForward className="w-4 h-4" />
                  Skip this question
                </button>
                <button onClick={handleNext} disabled={!selected}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#007a73] disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm">
                  {step === totalSteps ? "See My Results" : "Next"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        {step > totalSteps && results && (
          <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-[#009991]" />
              <h3 className="text-2xl font-extrabold text-[#3B3B3B]">{results.headline}</h3>
            </div>
            <p className="text-[#6b7280] mb-6">{results.description}</p>

            <div className="space-y-3 mb-6">
              {results.recommendations.map((rec, i) => (
                <div key={rec} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fffe] border border-[#D9FFFD]">
                  <span className="w-6 h-6 rounded-full bg-[#009991] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[#3B3B3B] font-medium text-sm">{rec}</span>
                </div>
              ))}
            </div>

            <p className="text-[#6b7280] text-sm mb-6 italic">{results.urgency}</p>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-[#3B3B3B] font-semibold mb-4">Want us to send you a personalized breakdown?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}
                  className="input-field" />
                <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="input-field" />
              </div>
              <button onClick={handleSubmit} disabled={!name || !email}
                className="btn-teal rounded-xl px-6 py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                <Send className="w-4 h-4" /> Send My Results and Schedule a Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
