export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We start with a free 30-minute conversation to understand your business, your challenges, and where AI can deliver the most impact. No tech jargon — just a clear picture of your goals.",
    duration: "Free · 30 min",
    icon: "Phone",
  },
  {
    step: 2,
    title: "AI Readiness Assessment",
    description:
      "Our team audits your current processes, data, and systems to identify automation opportunities and build a prioritized roadmap tailored to your ROI potential.",
    duration: "1–2 business days",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "Solution Design",
    description:
      "We design your custom solution architecture — no off-the-shelf templates. You review and approve every detail before a single line of code is written.",
    duration: "3–5 business days",
    icon: "Pencil",
  },
  {
    step: 4,
    title: "Build & Iterate",
    description:
      "Our team builds your solution in focused sprints with regular demos. You're involved throughout — no surprises at launch, only exactly what you approved.",
    duration: "2–6 weeks",
    icon: "Code2",
  },
  {
    step: 5,
    title: "Launch & Support",
    description:
      "We deploy, train your team, and stay with you post-launch. No disappearing acts — we monitor performance and iterate based on real-world results.",
    duration: "Ongoing",
    icon: "Rocket",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Businesses Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "%", label: "Avg. Time Saved" },
];
