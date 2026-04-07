import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import {
  COMPANY_NAME,
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
    { label: "Custom POS & CRM", href: "/services#pos-crm" },
    { label: "System Integrations", href: "/services#integrations" },
    { label: "Web Applications", href: "/services#web-apps" },
  ];

  return (
    <footer className="bg-[#040810] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#009991] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-white font-bold text-xl leading-none">Modern</span>
                <span className="gradient-text font-bold text-xl leading-none"> AI</span>
              </div>
            </Link>
            <p className="text-[#8b9cc8] text-sm leading-relaxed mb-6">
              {TAGLINE}. Helping {REGION} businesses harness AI to
              work smarter, grow faster, and compete at any level.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#8b9cc8] hover:text-[#009991] hover:border-[#009991]/40 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#8b9cc8] hover:text-[#009991] hover:border-[#009991]/40 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8b9cc8] hover:text-[#009991] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#8b9cc8] hover:text-[#009991] transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-[#8b9cc8] hover:text-[#009991] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#009991]" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 text-[#8b9cc8] hover:text-[#009991] transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#009991]" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#8b9cc8] text-sm">
                  <MapPin className="w-4 h-4 shrink-0 text-[#009991] mt-0.5" />
                  <span>
                    {LOCATION}
                    <br />
                    Serving {REGION}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#4a5580] text-sm">
          <p>© {year} {COMPANY_FULL_NAME}. All rights reserved.</p>
          <p className="text-xs">
            Locally owned &amp; operated in {LOCATION}
          </p>
        </div>
      </div>
    </footer>
  );
}
