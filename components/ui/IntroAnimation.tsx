"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Sparkle matching brand guide */
function BigSparkle() {
  return (
    <svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 3 L26.5 19 L41 24 L26.5 29 L24 45 L21.5 29 L7 24 L21.5 19 Z"
        fill="#7c3aed"
      />
      <path
        d="M38.5 7 L39.4 12 L44.5 12.5 L39.8 14.2 L40.8 19 L38.5 15.5 L36.2 19 L37.2 14.2 L32.5 12.5 L37.6 12 Z"
        fill="rgba(124,58,237,0.6)"
      />
    </svg>
  );
}

const MODERN_LETTERS = "Modern".split("");
const AI_LETTERS = "AI".split("");

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"letters" | "shine" | "exit">("letters");

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen");
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem("intro_seen", "1");

      // All letters finish by ~2.4s — pause 0.6s, then shine
      const t1 = setTimeout(() => setPhase("shine"), 3000);
      // Shine takes 2.2s — exit after it completes
      const t2 = setTimeout(() => setPhase("exit"), 5400);
      // Fade out animation takes 0.9s
      const t3 = setTimeout(() => setVisible(false), 6400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 50%, #e8f4ff 100%)" }}
        >
          {/* Animated bg blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ede9fe] rounded-full blur-3xl opacity-50"
            />
            <motion.div
              animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 0.95, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"
            />
          </div>

          {/* Logo */}
          <div className="relative flex flex-col items-center gap-6">
            <div
              className="flex items-end gap-1 sm:gap-3 px-4"
              style={{ perspective: "800px" }}
            >
              {/* "Modern" — graphite, letter by letter — slow dramatic reveal */}
              {MODERN_LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 70, rotateX: -90, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block font-extrabold leading-none select-none"
                  style={{
                    fontSize: "clamp(2.5rem, 9vw, 8rem)",
                    color: "#3B3B3B",
                    letterSpacing: "-0.02em",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Space */}
              <span style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}>&nbsp;</span>

              {/* "AI" — purple, after Modern */}
              {AI_LETTERS.map((letter, i) => (
                <motion.span
                  key={`ai-${i}`}
                  initial={{ opacity: 0, y: 70, rotateX: -90, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{
                    delay: 1.15 + i * 0.20,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block font-extrabold leading-none select-none"
                  style={{
                    fontSize: "clamp(2.5rem, 9vw, 8rem)",
                    color: "#7c3aed",
                    letterSpacing: "-0.02em",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Sparkle icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -60 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 1.8,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                }}
                className="mb-1 sm:mb-2"
              >
                <BigSparkle />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-[#6b7280] text-lg font-medium tracking-widest uppercase"
            >
              Your Strategic AI Partner
            </motion.p>

            {/* Silver shine coat — slow, dramatic, after everything appears */}
            {phase === "shine" && (
              <motion.div
                initial={{ x: "-160%", skewX: "-15deg" as unknown as number }}
                animate={{ x: "260%" }}
                transition={{ duration: 2.2, ease: [0.25, 0.0, 0.35, 1.0] }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ borderRadius: 8 }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: "skewX(-15deg)",
                    background:
                      "linear-gradient(105deg, transparent 5%, rgba(200,200,240,0.05) 20%, rgba(230,230,255,0.5) 35%, rgba(255,255,255,0.95) 50%, rgba(210,215,255,0.55) 65%, rgba(200,200,240,0.05) 80%, transparent 95%)",
                  }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
