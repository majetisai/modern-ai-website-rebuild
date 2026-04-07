"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { IS_PROTOTYPE } from "@/lib/utils/constants";

const leadSources = [
  "Google Search",
  "Facebook",
  "LinkedIn",
  "Referral from a friend or colleague",
  "Local event or networking",
  "Saw your signage or ad",
  "Other",
];

export default function ConsultationForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", businessName: "", jobTitle: "",
    email: "", phone: "", message: "", leadSource: "", newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const MAX_MESSAGE = 180;

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (IS_PROTOTYPE) console.log("Consultation form (prototype):", form);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-[#D9FFFD] border-2 border-[#009991] flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#009991]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#3B3B3B] mb-3">You are all set!</h3>
        <p className="text-[#6b7280] max-w-sm mx-auto">
          Thanks {form.firstName}! We received your request and someone from our team will be in touch within one business day to schedule your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">Last Name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Smith"
            className="input-field"
          />
        </div>
      </div>

      {/* Business Name */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          value={form.businessName}
          onChange={(e) => update("businessName", e.target.value)}
          placeholder="Your Business Name"
          className="input-field"
        />
      </div>

      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          value={form.jobTitle}
          onChange={(e) => update("jobTitle", e.target.value)}
          placeholder="Owner, Manager, Director..."
          className="input-field"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="jane@yourbusiness.com"
          className="input-field"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#D5D5D5] bg-gray-50 text-sm text-[#3B3B3B] shrink-0">
            🇺🇸 +1
          </div>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 555-5555"
            className="input-field"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          Business Info and Challenges <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) => {
            if (e.target.value.length <= MAX_MESSAGE) update("message", e.target.value);
          }}
          rows={4}
          placeholder="Share a little about your business, your challenges, or what you would like to achieve with AI."
          className="input-field resize-none"
        />
        <div className="text-right text-xs text-[#9ca3af] mt-1">
          {form.message.length} / {MAX_MESSAGE}
        </div>
      </div>

      {/* Lead Source */}
      <div>
        <label className="block text-sm font-medium text-[#3B3B3B] mb-1.5">
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={form.leadSource}
          onChange={(e) => update("leadSource", e.target.value)}
          className="input-field"
        >
          <option value="">Select an option...</option>
          {leadSources.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Newsletter */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f8fffe] border border-[#D9FFFD]">
        <input
          type="checkbox"
          id="newsletter"
          checked={form.newsletter}
          onChange={(e) => update("newsletter", e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded accent-[#009991] cursor-pointer"
        />
        <label htmlFor="newsletter" className="text-sm text-[#6b7280] cursor-pointer leading-relaxed">
          <span className="font-medium text-[#3B3B3B]">Optional:</span> Yes, keep me in the loop! I want to receive exclusive insights, the latest AI trends, and special offers from Modern AI Solutions by email. Unsubscribe anytime.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-teal justify-center py-4 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending your request...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Schedule My Free Consultation
          </span>
        )}
      </button>

      <p className="text-center text-xs text-[#9ca3af]">
        We typically respond within one business day. No spam, no pressure — ever.
      </p>
    </form>
  );
}
