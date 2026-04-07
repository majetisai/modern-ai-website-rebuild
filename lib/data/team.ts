export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    id: "gbain",
    name: "Gary Bain",
    role: "Founder & CEO",
    bio: "A 15+ year sales leader combining a proven track record of driving revenue growth with hands-on technical expertise. Gary founded Modern AI Solutions to bring enterprise-grade AI capabilities to local Southeast Missouri businesses.",
    // Unsplash: https://unsplash.com/photos/man-in-black-suit-jacket-sibVwORYqs0
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/company/modernaisolutions",
    expertise: ["AI Strategy", "Sales Automation", "Business Development", "Solution Architecture"],
  },
  {
    id: "dev1",
    name: "Alex Rivera",
    role: "Lead AI Engineer",
    bio: "Specializes in building RAG pipelines, conversational AI systems, and Claude-powered applications. Passionate about turning cutting-edge AI research into practical business tools.",
    // Unsplash: https://unsplash.com/photos/man-wearing-white-top-near-concrete-wall-ZHvM3XIOHoE
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    expertise: ["Claude API", "RAG Systems", "Python", "LLM Fine-tuning"],
  },
  {
    id: "dev2",
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    bio: "Full-stack engineer focused on Next.js, Node.js, and custom web application development. Builds the client-facing products that make complex AI capabilities accessible to everyday business users.",
    // Unsplash: https://unsplash.com/photos/woman-smiling-HyTwtsk8XqA
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    expertise: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: "consultant1",
    name: "Marcus Johnson",
    role: "AI Solutions Consultant",
    bio: "Works directly with clients to assess their AI readiness, identify automation opportunities, and design tailored solution roadmaps. Background in operations management and business process optimization.",
    // Unsplash: https://unsplash.com/photos/man-in-white-dress-shirt-sitting-on-chair-ILip77SbmOE
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    expertise: ["Business Analysis", "Process Optimization", "CRM", "Change Management"],
  },
];
