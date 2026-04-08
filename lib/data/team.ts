export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  expertise: string[];
  accentColor: string;
}

export const team: TeamMember[] = [
  {
    id: "gbain",
    name: "Gary Bain",
    role: "Founder and CEO",
    bio: "A 15+ year sales leader combining a proven track record of driving revenue growth with hands-on technical expertise. Gary founded Modern AI Solutions to bring enterprise-grade AI capabilities to local Southeast Missouri businesses.",
    // Unsplash: https://unsplash.com/photos/man-in-black-suit-jacket
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&q=80",
    linkedinUrl: "https://linkedin.com/company/modernaisolutions",
    expertise: ["AI Strategy", "Sales Automation", "Business Development", "Solution Architecture"],
    accentColor: "from-[#7c3aed] to-[#5b21b6]",
  },
  {
    id: "dev1",
    name: "Alex Rivera",
    role: "Lead AI Engineer",
    bio: "Specializes in building document intelligence systems, conversational AI, and workflow automation. Passionate about turning cutting-edge AI research into practical tools that real businesses can use every day.",
    // Unsplash: https://unsplash.com/photos/man-wearing-white-top
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80",
    linkedinUrl: "#",
    expertise: ["AI Systems", "Document Intelligence", "Python", "Automation Pipelines"],
    accentColor: "from-purple-500 to-purple-700",
  },
  {
    id: "dev2",
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    bio: "Full-stack engineer focused on Next.js, Node.js, and custom web application development. Builds the client-facing products that make complex AI capabilities accessible to everyday business users.",
    // Unsplash: https://unsplash.com/photos/woman-smiling
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face&q=80",
    linkedinUrl: "#",
    expertise: ["Next.js", "React", "Node.js", "PostgreSQL"],
    accentColor: "from-blue-500 to-blue-700",
  },
  {
    id: "consultant1",
    name: "Marcus Johnson",
    role: "AI Solutions Consultant",
    bio: "Works directly with clients to assess their AI readiness, identify automation opportunities, and design tailored solution roadmaps. Background in operations management and business process optimization.",
    // Unsplash: https://unsplash.com/photos/man-in-white-dress-shirt
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80",
    linkedinUrl: "#",
    expertise: ["Business Analysis", "Process Optimization", "CRM", "Change Management"],
    accentColor: "from-orange-500 to-orange-700",
  },
];
