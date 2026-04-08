"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, DollarSign, ChevronDown, Send, X } from "lucide-react";
import { jobs, type Job } from "@/lib/data/jobs";
import { IS_PROTOTYPE } from "@/lib/utils/constants";

function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (IS_PROTOTYPE) {
      console.log("Job application (prototype):", { job: job.id, ...form });
    }
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-100"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-[#3B3B3B] font-bold text-xl">{job.title}</h3>
            <p className="text-[#7c3aed] text-sm">{job.department} · {job.location}</p>
          </div>
          <button onClick={onClose} className="text-[#6b7280] hover:text-[#3B3B3B] transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#ede9fe] border-2 border-[#7c3aed] flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-[#7c3aed]" />
            </div>
            <h4 className="text-[#3B3B3B] font-bold text-lg mb-2">Application Submitted!</h4>
            <p className="text-[#6b7280] text-sm">
              We will review your application and reach out within 5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">Full Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">Email Address *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input-field"
                placeholder="555-555-5555"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">Why do you want this role?</label>
              <textarea
                value={form.cover}
                onChange={(e) => setForm({ ...form, cover: e.target.value })}
                rows={4}
                className="input-field resize-none"
                placeholder="Tell us a bit about yourself and why you are excited about this position..."
              />
            </div>
            <button
              type="submit"
              className="w-full btn-teal justify-center py-3 rounded-xl"
            >
              <Send className="w-4 h-4" /> Submit Application
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function JobListings() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  return (
    <>
      <div className="space-y-4">
        {jobs.map((job, i) => {
          const isExpanded = expandedId === job.id;
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`card rounded-2xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "border-[#7c3aed]/40" : ""
              }`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[#3B3B3B] font-bold text-xl mb-1">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#6b7280]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#7c3aed]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                        {job.type}
                      </span>
                      {job.salary && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#7c3aed]" />
                          {job.salary}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ede9fe] text-[#7c3aed] border border-[#7c3aed]/20">
                      {job.department}
                    </span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-[#6b7280]" />
                    </motion.div>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{job.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-[#3B3B3B] font-semibold text-sm mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-[#6b7280] text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-2 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[#3B3B3B] font-semibold text-sm mb-3">Nice to Have</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((n) => (
                              <li key={n} className="flex items-start gap-2 text-[#6b7280] text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                {n}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        onClick={() => setApplyingJob(job)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold hover:bg-[#6d28d9] transition-colors"
                      >
                        Apply Now <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {applyingJob && (
          <ApplicationModal job={applyingJob} onClose={() => setApplyingJob(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
