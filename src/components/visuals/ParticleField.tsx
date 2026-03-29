"use client";
import { motion } from "framer-motion";

// Deterministic particle positions to avoid hydration mismatch
const particles = [
  { id: 0, x: 12, y: 8, size: 2, duration: 15, delay: 0 },
  { id: 1, x: 28, y: 22, size: 1.5, duration: 18, delay: 1 },
  { id: 2, x: 45, y: 5, size: 3, duration: 12, delay: 2 },
  { id: 3, x: 62, y: 35, size: 1, duration: 20, delay: 0.5 },
  { id: 4, x: 78, y: 12, size: 2.5, duration: 14, delay: 3 },
  { id: 5, x: 92, y: 28, size: 1.5, duration: 16, delay: 1.5 },
  { id: 6, x: 8, y: 55, size: 2, duration: 19, delay: 2.5 },
  { id: 7, x: 35, y: 68, size: 1, duration: 13, delay: 4 },
  { id: 8, x: 55, y: 45, size: 3, duration: 17, delay: 0.8 },
  { id: 9, x: 72, y: 62, size: 1.5, duration: 15, delay: 3.5 },
  { id: 10, x: 88, y: 48, size: 2, duration: 11, delay: 1.2 },
  { id: 11, x: 18, y: 78, size: 1, duration: 18, delay: 2.8 },
  { id: 12, x: 42, y: 88, size: 2.5, duration: 14, delay: 0.3 },
  { id: 13, x: 68, y: 82, size: 1.5, duration: 16, delay: 4.2 },
  { id: 14, x: 95, y: 72, size: 2, duration: 12, delay: 1.8 },
  { id: 15, x: 5, y: 38, size: 1, duration: 20, delay: 3.2 },
  { id: 16, x: 25, y: 42, size: 3, duration: 13, delay: 0.6 },
  { id: 17, x: 52, y: 25, size: 1.5, duration: 17, delay: 2.2 },
  { id: 18, x: 82, y: 38, size: 2, duration: 15, delay: 4.5 },
  { id: 19, x: 15, y: 92, size: 1.5, duration: 19, delay: 1.6 },
];

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
