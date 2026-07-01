import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  { number: "01", title: "Diagnósticos, mercado e mindsets", month: "Mês 1-2", color: "#1A2C47" },
  { number: "02", title: "Estruturação ou validação da marca", month: "Mês 2-4", color: "#2A3F5F" },
  { number: "03", title: "Otimização documental e sistemas", month: "Mês 4-6", color: "#D4AF37" },
  { number: "04", title: "Implementação e treinamentos", month: "Mês 6-8", color: "#C9A961" },
  { number: "05", title: "Consolidação e processos próprios", month: "Mês 8-10", color: "#1A2C47" },
  { number: "06", title: "Definição de perfil e plano de negócios", month: "Mês 10-12", color: "#2A3F5F" },
];

export default function ProjectPhases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-12 pb-28 md:pt-16 md:pb-36 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            JORNADA DE EVOLUÇÃO ESTRATÉGICA
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            06 fases estruturadas
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-[#1A2C47]/20 via-[#D4AF37]/30 to-[#D4AF37]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="relative text-center group"
              >
                <div
                  className="relative z-10 mx-auto w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ borderColor: phase.color, boxShadow: `0 0 0 4px ${phase.color}10` }}
                >
                  <span className="text-2xl font-light" style={{ color: phase.color }}>
                    {phase.number}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#D4AF37] mb-2">{phase.month}</p>
                <h3 className="text-lg font-medium text-[#1A2C47] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {phase.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            MATURIDADE ESTRATÉGICA AO LONGO DO ANO
          </p>
          <p className="mt-4 text-gray-400 font-light text-base md:text-lg">
            F1 · F2 · F3 · F4 · F5 · F6
          </p>
          <p className="mt-2 text-gray-400 font-light text-sm md:text-base">
            Evolução progressiva em 12 meses de programa
          </p>
        </motion.div>
      </div>
    </section>
  );
}
