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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="glass rounded-3xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-white font-bold text-xl">{job.title}</h3>
            <p className="text-[#009991] text-sm">{job.department} · {job.location}</p>
          </div>
          <button onClick={onClose} className="text-[#8b9cc8] hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#009991]/20 border-2 border-[#009991] flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-[#009991]" />
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Application Submitted!</h4>
            <p className="text-[#8b9cc8] text-sm">
              We&apos;ll review your application and reach out within 5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[#8b9cc8] text-sm mb-1 block">Full Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none text-sm"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="text-[#8b9cc8] text-sm mb-1 block">Email Address *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none text-sm"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="text-[#8b9cc8] text-sm mb-1 block">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none text-sm"
                placeholder="555-555-5555"
              />
            </div>
            <div>
              <label className="text-[#8b9cc8] text-sm mb-1 block">Why do you want this role?</label>
              <textarea
                value={form.cover}
                onChange={(e) => setForm({ ...form, cover: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#4a5580] focus:border-[#009991] focus:outline-none text-sm resize-none"
                placeholder="Tell us a bit about yourself and why you're excited about this position..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#00b8af] transition-colors"
            >
              Submit Application
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
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "border-[#009991]/40" : "glass-hover"
              }`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b9cc8]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#009991]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#009991]" />
                        {job.type}
                      </span>
                      {job.salary && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#009991]" />
                          {job.salary}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#009991]/15 text-[#00b8af] border border-[#009991]/20">
                      {job.department}
                    </span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-[#8b9cc8]" />
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
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      <p className="text-[#8b9cc8] text-sm leading-relaxed mb-6">{job.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-[#8b9cc8] text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#009991] mt-2 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-3">Nice to Have</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((n) => (
                              <li key={n} className="flex items-start gap-2 text-[#8b9cc8] text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                                {n}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        onClick={() => setApplyingJob(job)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#009991] text-white font-semibold hover:bg-[#00b8af] transition-colors"
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
