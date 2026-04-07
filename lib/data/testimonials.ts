export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jennifer Walsh",
    title: "Owner",
    company: "Walsh Family Pharmacy",
    content:
      "Modern AI Solutions transformed how we handle prescription tracking and customer follow-ups. What used to take our staff hours now runs automatically. Our team can actually focus on patient care instead of paperwork.",
    rating: 5,
  },
  {
    id: "t2",
    name: "David Koerner",
    title: "General Manager",
    company: "Koerner Auto Group",
    content:
      "The custom CRM they built for us replaced three separate tools we were juggling. Our sales team has everything in one place — leads, follow-ups, service records. We've seen a measurable increase in close rates.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Lisa Monroe",
    title: "Director of Operations",
    company: "Southeast Missouri Healthcare",
    content:
      "Their RAG-powered knowledge base completely changed how our staff finds compliance information. Instead of searching through hundreds of documents, they just ask a question and get an instant, cited answer.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Tim Hargrove",
    title: "Owner",
    company: "Hargrove Construction LLC",
    content:
      "I was skeptical AI could help a construction business, but the automated scheduling and customer communication system they built has saved us hours every week. Our clients are happier and our team is less stressed.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Rachel Simmons",
    title: "Marketing Manager",
    company: "Cape Girardeau Chamber of Commerce",
    content:
      "The lead capture and follow-up automation they set up for our events program has tripled our member engagement rate. The chatbot handles most initial inquiries so our team can focus on high-value conversations.",
    rating: 5,
  },
];
