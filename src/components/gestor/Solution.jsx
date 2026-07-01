import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deliverables = [
  { letter: "G", title: "Governança", desc: "Estrutura sólida para decisões estratégicas" },
  { letter: "E", title: "Estratégia", desc: "Planejamento orientado a resultados reais" },
  { letter: "S", title: "Segurança", desc: "Processos que eliminam riscos operacionais" },
  { letter: "T", title: "Tomada de Decisão", desc: "Dados e indicadores para agir com precisão" },
  { letter: "O", title: "Operação", desc: "Eficiência em cada etapa da jornada do grupo" },
  { letter: "R", title: "Resultados", desc: "Margem saudável e previsibilidade de caixa" },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucao" className="py-28 md:py-36 bg-[#1A2C47] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/[0.05] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            O QUE É O MÉTODO G.E.S.T.O.R.®
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            <span className="text-[#D4AF37]">A Estrutura por Trás do Método</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm text-center hover:bg-white/[0.1] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/[0.15] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/[0.25] transition-colors">
                <span className="text-[#D4AF37] text-lg font-semibold">{item.letter}</span>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed mb-2">
                {item.title}
              </p>
              <p className="text-white/80 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
