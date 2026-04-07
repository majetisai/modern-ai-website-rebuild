export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  niceToHave: string[];
  salary?: string;
}

export const jobs: Job[] = [
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Jackson, MO / Remote",
    type: "Full-Time",
    description:
      "We're looking for an AI/ML Engineer to design and build production AI systems using Claude API, RAG pipelines, and custom LLM integrations. You'll work directly with clients to transform their operations through intelligent automation.",
    requirements: [
      "3+ years of experience in AI/ML engineering",
      "Hands-on experience with LLM APIs (Claude, OpenAI, or similar)",
      "Proficiency in Python and JavaScript/TypeScript",
      "Experience building RAG systems and vector databases",
      "Strong understanding of software engineering fundamentals",
    ],
    niceToHave: [
      "Experience with Anthropic's Claude API specifically",
      "Background in enterprise software integration",
      "Knowledge of business process automation",
      "Experience with Pinecone, Weaviate, or similar vector stores",
    ],
    salary: "$90,000 – $130,000",
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Jackson, MO / Remote",
    type: "Full-Time",
    description:
      "Join our team as a Full-Stack Developer building custom web applications and AI-powered tools for our clients. You'll work across the entire stack — from React frontends to Node.js backends and database architecture.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React / Next.js and Node.js",
      "Experience with relational databases (PostgreSQL, MySQL)",
      "Strong API design and integration skills",
      "Understanding of modern deployment and cloud infrastructure",
    ],
    niceToHave: [
      "Experience with AI/LLM integrations",
      "Familiarity with Tailwind CSS and design systems",
      "Background in client-facing consulting or agency work",
      "Experience with Prisma ORM",
    ],
    salary: "$75,000 – $110,000",
  },
  {
    id: "ai-consultant",
    title: "AI Solutions Consultant",
    department: "Consulting",
    location: "Jackson, MO (On-site required)",
    type: "Full-Time",
    description:
      "As an AI Solutions Consultant, you'll be the bridge between our technical team and our clients. You'll conduct AI readiness assessments, identify automation opportunities, and guide businesses through their AI transformation journey.",
    requirements: [
      "5+ years of business consulting or operations experience",
      "Strong understanding of business processes and workflow analysis",
      "Excellent communication and presentation skills",
      "Experience with CRM, ERP, or business automation tools",
      "Ability to translate technical concepts for non-technical audiences",
    ],
    niceToHave: [
      "Experience with AI tools and automation platforms",
      "Background in change management",
      "Southeast Missouri business network",
      "Experience with process mapping (BPMN, flowcharts)",
    ],
    salary: "$70,000 – $95,000",
  },
  {
    id: "intern",
    title: "Software Development Intern",
    department: "Engineering",
    location: "Jackson, MO / Remote",
    type: "Internship",
    description:
      "Learn to build real AI-powered applications alongside our senior engineering team. You'll work on live client projects, not toy assignments — gaining hands-on experience with the technologies shaping the future of business.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Basic proficiency in JavaScript or Python",
      "Eagerness to learn and take on real responsibility",
      "Strong problem-solving mindset",
    ],
    niceToHave: [
      "Any React or Node.js experience",
      "Interest in AI and automation",
      "Personal projects or GitHub portfolio",
    ],
    salary: "$18 – $22/hour",
  },
];
