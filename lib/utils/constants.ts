// Brand & Company Constants
export const COMPANY_NAME = "Modern AI Solutions";
export const COMPANY_FULL_NAME = "Modern AI Solutions LLC";
export const TAGLINE = "Your Strategic AI Partner";
export const BRAND_COLOR = "#009991";

// Contact
export const PHONE = "573-200-6241";
export const PHONE_HREF = "tel:+15732006241";
export const EMAIL = "gbain@modernaisolutions.com";
export const EMAIL_HREF = "mailto:gbain@modernaisolutions.com";
export const WEBSITE = "https://www.modernaisolutions.com";

// Location
export const LOCATION = "Jackson, Missouri";
export const REGION = "Southeast Missouri";

// Social
export const FACEBOOK_URL = "https://facebook.com/modernaisolutions";
export const LINKEDIN_URL = "https://linkedin.com/company/modernaisolutions";

// Navigation
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
];

// Prototype mode flag — set to false in full build
export const IS_PROTOTYPE = true;

// Animation helpers
export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
};
