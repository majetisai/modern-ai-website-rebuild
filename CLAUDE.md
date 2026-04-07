# CLAUDE.md — Modern AI Solutions Website

## Project Overview
Next.js 16 marketing website + admin panel (Phase 2) for **Modern AI Solutions LLC**.
Dark mode first, glassmorphism aesthetic, ModernAI Teal brand, 2026 design standards.

## Tech Stack
- **Framework**: Next.js 16.x (App Router, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config — all tokens in `app/globals.css`)
- **Animations**: Framer Motion + GSAP 3.x with ScrollTrigger
- **Icons**: Lucide React
- **Phase 2 additions**: Prisma + PostgreSQL, NextAuth.js v5, Resend + React Email

## Commands
```bash
npm run dev          # Dev server on :3000
npm run build        # Production build
npm run lint         # ESLint
```

## Environment Variables (Phase 2)
```
DATABASE_URL=           # PostgreSQL connection string
NEXTAUTH_SECRET=        # 32-char random string
NEXTAUTH_URL=           # http://localhost:3000 (dev) / https://modernaisolutions.com (prod)
RESEND_API_KEY=         # Email sending
NEXT_PUBLIC_SITE_URL=   # For OG images / canonical URLs
```

## Project Conventions

### File Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Utilities / hooks: `camelCase.ts` (e.g., `cn.ts`, `useScrollReveal.ts`)
- API routes: `route.ts` (Next.js App Router convention)
- Data files: `camelCase.ts` in `lib/data/`

### Component Architecture
- **Server Components by default** — no `"use client"` unless the component needs hooks, events, or browser APIs
- Push `"use client"` to the lowest possible leaf in the tree
- Animations (Framer Motion, GSAP) always require `"use client"`
- Data fetching: direct in Server Components via `lib/data/` files (prototype) or Prisma (full build)

### Styling Rules
1. **Tailwind utility classes only** — no custom CSS except in `app/globals.css`
2. Use `cn()` (clsx + tailwind-merge) for conditional/composed classes
3. **Dark mode is DEFAULT** — this is a dark-navy site, no light mode toggle
4. Glass cards: always use `<GlassCard>` component — never inline `backdrop-blur` ad-hoc
5. Brand teal: always reference `var(--color-teal-500)` or the Tailwind class; never hardcode `#009991`
6. Spacing: prefer Tailwind scale values, avoid arbitrary values unless truly necessary

### Brand Constants (`lib/utils/constants.ts`)
```
BRAND_COLOR: "#009991"
PHONE: "573-200-6241"
EMAIL: "gbain@modernaisolutions.com"
FACEBOOK_URL: "https://facebook.com/modernaisolutions"
LINKEDIN_URL: "https://linkedin.com/company/modernaisolutions"
LOCATION: "Jackson, Missouri"
REGION: "Southeast Missouri"
TAGLINE: "Your Strategic AI Partner"
COMPANY_NAME: "Modern AI Solutions LLC"
IS_PROTOTYPE: true   ← remove in full build
```

### Animation Guidelines
- Framer Motion: scroll-reveal, hover states, modals, page transitions, carousels
- GSAP + ScrollTrigger: hero particle canvas, SVG process-line drawing
- All sections use `useInView` from Framer Motion for scroll-triggered reveals
- Standard variants: `initial={{ opacity: 0, y: 32 }}` → `animate={{ opacity: 1, y: 0 }}`
- Durations: fast=0.2s, normal=0.4s, slow=0.7s, hero=1.0s
- Always check `prefers-reduced-motion` — import `shouldAnimate` from `lib/utils/constants.ts`

### Image Guidelines
- Source: Unsplash / Pexels (copyright-free, commercial OK, no attribution required)
- Always use `next/image` with explicit `width`/`height` or `fill` + `sizes`
- Document the source URL in a comment above the import
- Prototype: static imports from `public/images/`

### Prototype Flag
- `IS_PROTOTYPE = true` in `lib/utils/constants.ts` disables real DB/email calls
- In prototype, forms log to console only
- **Never ship with `IS_PROTOTYPE = true` in production**

## Commit Format
```
feat: add hero section particle animation
fix: mobile navbar overflow on iOS Safari
style: align GlassCard hover shadow to design spec
chore: update dependencies
```

## Phase 2 Notes (Admin Panel)
- Route: `/admin` — protected by NextAuth middleware
- Admin users seeded manually via `prisma db seed` — no self-signup
- All admin API routes check session server-side
- Zod validation before every DB write
- Consistent API response shape: `{ data, error, message }`
