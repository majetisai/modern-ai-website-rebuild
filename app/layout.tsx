import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modern AI Solutions — Your Strategic AI Partner",
    template: "%s | Modern AI Solutions",
  },
  description:
    "Modern AI Solutions LLC delivers custom AI-powered software, chatbots, RAG systems, CRM, POS, and workflow automation for businesses in Southeast Missouri and beyond.",
  keywords: [
    "AI solutions",
    "custom software",
    "chatbots",
    "RAG systems",
    "CRM",
    "POS systems",
    "workflow automation",
    "Southeast Missouri",
    "Jackson Missouri",
  ],
  authors: [{ name: "Modern AI Solutions LLC" }],
  creator: "Modern AI Solutions LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modernaisolutions.com",
    siteName: "Modern AI Solutions",
    title: "Modern AI Solutions — Your Strategic AI Partner",
    description:
      "Custom AI-powered software and consulting for forward-thinking businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern AI Solutions — Your Strategic AI Partner",
    description:
      "Custom AI-powered software and consulting for forward-thinking businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
