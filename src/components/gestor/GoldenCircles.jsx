import React from "react";
import { motion } from "framer-motion";

// Predefined circle configs to avoid random layout shift
const circles = [
  { size: 320, top: "5%",  left: "2%",  duration: 14, delay: 0,   opacity: 0.07, filled: false },
  { size: 180, top: "15%", right: "5%", duration: 18, delay: 2,   opacity: 0.05, filled: true  },
  { size: 80,  top: "40%", left: "8%",  duration: 10, delay: 1,   opacity: 0.12, filled: true  },
  { size: 500, bottom: "0%", right: "-8%", duration: 22, delay: 3, opacity: 0.04, filled: false },
  { size: 60,  top: "70%", left: "30%", duration: 8,  delay: 0.5, opacity: 0.15, filled: true  },
  { size: 140, bottom: "10%", left: "5%", duration: 16, delay: 4, opacity: 0.08, filled: false },
  { size: 40,  top: "30%", right: "15%", duration: 7, delay: 2.5, opacity: 0.18, filled: true  },
  { size: 220, top: "55%", right: "3%",  duration: 20, delay: 1.5, opacity: 0.05, filled: false },
];

export default function GoldenCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {circles.map((c, i) => {
        const style = {
          width: c.size,
          height: c.size,
          ...(c.top !== undefined    ? { top: c.top }       : {}),
          ...(c.bottom !== undefined ? { bottom: c.bottom } : {}),
          ...(c.left !== undefined   ? { left: c.left }     : {}),
          ...(c.right !== undefined  ? { right: c.right }   : {}),
        };

        return (
          <motion.div
            key={i}
            style={style}
            className="absolute rounded-full"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [c.opacity, c.opacity * 1.6, c.opacity],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: c.filled
                  ? `radial-gradient(circle, rgba(212,175,55,${c.opacity * 2.5}) 0%, rgba(212,175,55,0) 70%)`
                  : "none",
                border: !c.filled ? `1px solid rgba(212,175,55,${c.opacity * 3})` : "none",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}