"use client";

import { useEffect, useRef } from "react";

export type HeroBgType = "hexgrid" | "orbit" | "waves" | "constellation" | "matrix";

interface Props {
  type: HeroBgType;
  opacity?: number;
}

/* ── Hex Grid (Services) ─────────────────────────────────── */
function hexGrid(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): () => void {
  let raf: number;
  let t = 0;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const size = 36;
    const w = size * 2;
    const h = Math.sqrt(3) * size;
    const cols = Math.ceil(canvas.width / w) + 2;
    const rows = Math.ceil(canvas.height / h) + 2;
    t += 0.012;

    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * w * 0.75;
        const y = row * h + (col % 2 === 0 ? 0 : h / 2);
        const dist = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
        const wave = Math.sin(dist * 0.018 - t) * 0.5 + 0.5;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const px = x + size * 0.9 * Math.cos(angle);
          const py = y + size * 0.9 * Math.sin(angle);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();

        const alpha = wave * 0.18 + 0.03;
        const color = wave > 0.6
          ? `rgba(124,58,237,${alpha})`
          : wave > 0.3
          ? `rgba(59,130,246,${alpha * 0.7})`
          : `rgba(124,58,237,${alpha * 0.5})`;
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(raf);
}

/* ── Orbit Rings (Consulting) ────────────────────────────── */
function orbit(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): () => void {
  let raf: number;
  let t = 0;

  const rings = [
    { rx: 0.38, ry: 0.14, speed: 0.004, dotSize: 3, color: "#7c3aed" },
    { rx: 0.28, ry: 0.10, speed: -0.006, dotSize: 2.5, color: "#3b82f6" },
    { rx: 0.48, ry: 0.18, speed: 0.003, dotSize: 2, color: "#7c3aed" },
    { rx: 0.20, ry: 0.07, speed: -0.009, dotSize: 2, color: "#8b5cf6" },
    { rx: 0.58, ry: 0.22, speed: 0.002, dotSize: 1.5, color: "#6366f1" },
  ];

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    t += 1;

    rings.forEach((r, i) => {
      const rx = r.rx * canvas.width;
      const ry = r.ry * canvas.height;
      const angle = t * r.speed + (i * Math.PI * 0.4);

      // Draw ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = r.color + "28";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Draw dot
      const dotX = cx + Math.cos(angle) * rx;
      const dotY = cy + Math.sin(angle) * ry;
      ctx.beginPath();
      ctx.arc(dotX, dotY, r.dotSize, 0, Math.PI * 2);
      ctx.fillStyle = r.color;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(dotX, dotY, r.dotSize * 3, 0, Math.PI * 2);
      ctx.fillStyle = r.color + "30";
      ctx.fill();
    });

    // Central glow
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
    grad.addColorStop(0, "rgba(124,58,237,0.15)");
    grad.addColorStop(1, "transparent");
    ctx.beginPath();
    ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(raf);
}

/* ── Wave Flow (About) ───────────────────────────────────── */
function waves(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): () => void {
  let raf: number;
  let t = 0;

  const waveLines = [
    { amp: 0.04, freq: 0.008, speed: 0.02, yRatio: 0.3, color: "rgba(124,58,237," },
    { amp: 0.06, freq: 0.006, speed: -0.015, yRatio: 0.45, color: "rgba(59,130,246," },
    { amp: 0.03, freq: 0.010, speed: 0.025, yRatio: 0.55, color: "rgba(124,58,237," },
    { amp: 0.05, freq: 0.007, speed: -0.018, yRatio: 0.65, color: "rgba(139,92,246," },
    { amp: 0.04, freq: 0.009, speed: 0.016, yRatio: 0.75, color: "rgba(99,102,241," },
  ];

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 1;
    const W = canvas.width;
    const H = canvas.height;

    waveLines.forEach((wave) => {
      const baseY = H * wave.yRatio;
      const amp = H * wave.amp;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const y = baseY + Math.sin(x * wave.freq + t * wave.speed) * amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = wave.color + "0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Brighter center section
      ctx.beginPath();
      for (let x = W * 0.3; x <= W * 0.7; x += 3) {
        const y = baseY + Math.sin(x * wave.freq + t * wave.speed) * amp;
        x === W * 0.3 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = wave.color + "0.55)";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(raf);
}

/* ── Constellation (Team) ────────────────────────────────── */
function constellation(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): () => void {
  let raf: number;

  type Star = { x: number; y: number; vx: number; vy: number; r: number; bright: boolean };
  const stars: Star[] = [];
  const COUNT = 55;

  const init = () => {
    stars.length = 0;
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 0.5,
        bright: Math.random() < 0.15,
      });
    }
  };
  init();

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {
      s.x = (s.x + s.vx + canvas.width) % canvas.width;
      s.y = (s.y + s.vy + canvas.height) % canvas.height;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.bright ? s.r * 2 : s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.bright ? "rgba(167,139,250,0.9)" : "rgba(124,58,237,0.5)";
      ctx.fill();

      if (s.bright) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124,58,237,0.15)";
        ctx.fill();
      }
    }

    // Connections
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          const alpha = (1 - d / 110) * 0.2;
          const colorIdx = (i + j) % 3;
          const colors = ["rgba(124,58,237,", "rgba(59,130,246,", "rgba(124,58,237,"];
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = colors[colorIdx] + alpha + ")";
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(raf);
}

/* ── Matrix / Data Stream (Careers) ─────────────────────── */
function matrix(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): () => void {
  let raf: number;
  const fontSize = 15;
  const cols = Math.floor(canvas.width / fontSize);
  const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -50);

  const chars = "01アイウエオカキクケコABCDEF<>{}[]∑∫≈∞";

  const draw = () => {
    ctx.fillStyle = "rgba(6,0,16,0.06)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `bold ${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Bright leading character
      if (drops[i] > 0) {
        ctx.fillStyle = "rgba(220,255,253,1)";
        ctx.fillText(char, x, y);
      } else {
        const colType = i % 3;
        if (colType === 0) ctx.fillStyle = "rgba(167,139,250,0.9)";
        else if (colType === 1) ctx.fillStyle = "rgba(80,150,255,0.85)";
        else ctx.fillStyle = "rgba(160,80,255,0.85)";
        ctx.fillText(char, x, y);
      }

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.5;
    }

    raf = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(raf);
}

/* ── Main Component ──────────────────────────────────────── */
const animFns = { hexgrid: hexGrid, orbit, waves, constellation, matrix };

export default function AnimatedHeroBackground({ type, opacity = 0.65 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const cleanup = animFns[type]?.(canvas, ctx);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", resize);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
    />
  );
}
