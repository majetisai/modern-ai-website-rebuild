import Link from "next/link";
import { Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center mx-auto mb-6">
        <Zap className="w-8 h-8 text-[#7c3aed]" />
      </div>
      <h1 className="text-7xl font-extrabold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-[#8b9cc8] mb-8 max-w-md">
        Looks like this page got lost in the algorithm. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold hover:bg-[#8b5cf6] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
