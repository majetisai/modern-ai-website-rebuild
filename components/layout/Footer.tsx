import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import {
  COMPANY_FULL_NAME,
  TAGLINE,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  LOCATION,
  REGION,
  FACEBOOK_URL,
  LINKEDIN_URL,
  NAV_LINKS,
} from "@/lib/utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { label: "Automated Workflows", href: "/services#automated-workflows" },
    { label: "AI Chatbots", href: "/services#chatbots" },
    { label: "RAG Systems", href: "/services#rag-systems" },
    { label: "Custom POS and CRM", href: "/services#pos-crm" },
    { label: "System Integrations", href: "/services#integrations" },
    { label: "Web Applications", href: "/services#web-apps" },
  ];

  return (
    <footer className="bg-[#00504C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" href="/" className="[&_span]:!text-white [&_.gradient-text]:!text-[#D9FFFD]" />
            </div>
            <p className="text-[#D9FFFD]/80 text-sm leading-relaxed mb-6">
              {TAGLINE}. Helping {REGION} businesses grow smarter with practical AI solutions built around their specific needs.
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#D9FFFD]/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[#D9FFFD]/70 hover:text-white transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-[#D9FFFD]/70 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 shrink-0 text-[#D9FFFD]" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-center gap-3 text-[#D9FFFD]/70 hover:text-white transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 shrink-0 text-[#D9FFFD]" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#D9FFFD]/70 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 text-[#D9FFFD] mt-0.5" />
                  <span>{LOCATION}<br />Serving {REGION}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#D9FFFD]/50 text-sm">
          <p>© {year} {COMPANY_FULL_NAME}. All rights reserved.</p>
          <p>Locally owned and operated in {LOCATION}</p>
        </div>
      </div>
    </footer>
  );
}
