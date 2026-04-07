export interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "automated-workflows",
    icon: "Workflow",
    title: "Automated Workflows & Processes",
    tagline: "Eliminate manual, repetitive tasks forever",
    description:
      "We design and build intelligent automation systems that run themselves. From data entry to multi-step approval chains, your team focuses on what matters while AI handles the rest.",
    features: [
      "End-to-end process mapping and automation",
      "Custom trigger-based workflows",
      "Integration with your existing tools",
      "Real-time monitoring and alerts",
      "Escalation and exception handling",
    ],
    useCases: [
      "Invoice processing and approval",
      "Customer onboarding automation",
      "Inventory reorder triggers",
      "Employee task routing",
      "Report generation and distribution",
    ],
    color: "from-teal-500/20 to-teal-700/5",
  },
  {
    id: "web-apps",
    icon: "Globe",
    title: "Modern Websites & Web Apps",
    tagline: "Sites that convert and systems that scale",
    description:
      "Beyond beautiful design — we build web applications that integrate seamlessly with your business systems, convert visitors into customers, and grow with your business.",
    features: [
      "Custom Next.js / React applications",
      "Mobile-first, responsive design",
      "CMS integration for easy content updates",
      "E-commerce and payment processing",
      "SEO optimization built-in",
    ],
    useCases: [
      "Business landing pages",
      "Customer portals",
      "E-commerce storefronts",
      "Booking and scheduling apps",
      "Internal operations dashboards",
    ],
    color: "from-blue-500/20 to-blue-700/5",
  },
  {
    id: "sales-marketing",
    icon: "TrendingUp",
    title: "Sales & Marketing Automation",
    tagline: "Capture and nurture leads 24/7 automatically",
    description:
      "Never lose a lead to slow follow-up again. We build automated sales funnels that capture, qualify, and nurture prospects around the clock — turning your website into a revenue engine.",
    features: [
      "Lead capture and scoring systems",
      "Automated email / SMS sequences",
      "CRM integration and pipeline tracking",
      "A/B testing and conversion optimization",
      "Campaign analytics and ROI reporting",
    ],
    useCases: [
      "Lead follow-up automation",
      "Abandoned cart recovery",
      "Customer re-engagement campaigns",
      "Appointment booking workflows",
      "Referral program automation",
    ],
    color: "from-orange-500/20 to-orange-700/5",
  },
  {
    id: "rag-systems",
    icon: "BrainCircuit",
    title: "RAG & Document Intelligence",
    tagline: "Your knowledge base, made instantly searchable",
    description:
      "Retrieval-Augmented Generation (RAG) systems built with Claude AI that let your team — or your customers — get instant, accurate answers from your documents, manuals, and knowledge base.",
    features: [
      "Custom document ingestion pipeline",
      "Semantic search over internal knowledge",
      "Multi-format support (PDF, Word, URLs, databases)",
      "Source-cited answers (no hallucinations)",
      "Secure, private deployment",
    ],
    useCases: [
      "Employee knowledge base Q&A",
      "Customer support automation",
      "Contract and document review",
      "Compliance policy search",
      "Product manual assistant",
    ],
    color: "from-purple-500/20 to-purple-700/5",
  },
  {
    id: "chatbots",
    icon: "MessageSquare",
    title: "AI Chatbots & Virtual Assistants",
    tagline: "Always-on support and sales, powered by Claude",
    description:
      "Intelligent chatbots that actually understand your business. Built on Claude AI, they handle customer questions, qualify leads, book appointments, and escalate to humans when needed.",
    features: [
      "Claude AI-powered conversational intelligence",
      "Website, SMS, and WhatsApp deployment",
      "Lead qualification and routing",
      "Appointment scheduling integration",
      "Human handoff with full context",
    ],
    useCases: [
      "Customer service automation",
      "Lead qualification chatbot",
      "FAQ and support deflection",
      "Booking and reservation assistant",
      "Internal HR / IT helpdesk bot",
    ],
    color: "from-cyan-500/20 to-cyan-700/5",
  },
  {
    id: "database-dashboards",
    icon: "BarChart3",
    title: "Database & Dashboard Solutions",
    tagline: "Ditch the spreadsheets. Get real intelligence.",
    description:
      "Replace chaotic spreadsheets with real databases and live dashboards that give you instant, accurate business insights. Make decisions based on data, not gut feel.",
    features: [
      "Custom database design and build",
      "Live reporting dashboards",
      "KPI tracking and alerting",
      "Role-based access control",
      "Data migration from existing systems",
    ],
    useCases: [
      "Sales performance dashboards",
      "Inventory tracking systems",
      "Financial reporting",
      "Customer analytics",
      "Operational metrics monitoring",
    ],
    color: "from-green-500/20 to-green-700/5",
  },
  {
    id: "pos-crm",
    icon: "Store",
    title: "Custom POS & CRM Systems",
    tagline: "Purpose-built tools that fit your exact workflow",
    description:
      "Generic software forces you to change how you work. We build custom POS and CRM systems designed around your specific processes — so your team works faster, not harder.",
    features: [
      "Custom point-of-sale applications",
      "Customer relationship management",
      "Inventory and order management",
      "Payment processing integration",
      "Customer loyalty programs",
    ],
    useCases: [
      "Retail store POS systems",
      "Service business CRM",
      "Restaurant ordering systems",
      "Contractor job tracking",
      "Client portal management",
    ],
    color: "from-yellow-500/20 to-yellow-700/5",
  },
  {
    id: "integrations",
    icon: "Plug",
    title: "System Integrations & Data Flow",
    tagline: "Connect everything. End siloed data forever.",
    description:
      "Your tools should talk to each other. We connect CRM, accounting, e-commerce, email, and every other system you use into a seamless data ecosystem — eliminating manual transfers forever.",
    features: [
      "API integration between any tools",
      "Bidirectional data sync",
      "Real-time and batch transfer modes",
      "Error handling and retry logic",
      "Integration monitoring and logging",
    ],
    useCases: [
      "QuickBooks + CRM sync",
      "E-commerce + inventory sync",
      "Email marketing + CRM",
      "Website forms + database",
      "Multi-location data consolidation",
    ],
    color: "from-red-500/20 to-red-700/5",
  },
];
