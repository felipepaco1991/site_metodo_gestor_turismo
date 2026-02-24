import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Estruturação",
    color: "#1A2C47",
  },
  {
    number: "02",
    title: "Implementação Assistida",
    color: "#2A3F5F",
  },
  {
    number: "03",
    title: "Otimização",
    color: "#D4AF37",
  },
  {
    number: "04",
    title: "Consolidação",
    color: "#C9A961",
  },
];

export default function ProjectPhases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            Metodologia
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            As <span className="font-semibold">4 Fases</span> do Projeto
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#1A2C47]/20 via-[#D4AF37]/30 to-[#D4AF37]/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="relative text-center group"
              >
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ borderColor: phase.color, boxShadow: `0 0 0 4px ${phase.color}10` }}
                >
                  <span className="text-2xl font-light" style={{ color: phase.color }}>
                    {phase.number}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-[#1A2C47] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {phase.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}