import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Calculator, ClipboardList, Shield, Heart } from "lucide-react";

const deliverables = [
  { icon: Target, title: "Modelo assertivo de negócio de grupos" },
  { icon: Calculator, title: "Precificação correta" },
  { icon: ClipboardList, title: "Planejamento e operação assertiva" },
  { icon: Shield, title: "Gestão de risco e contratos" },
  { icon: Heart, title: "Experiência do cliente no grupo" },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucao" className="py-28 md:py-36 bg-[#1A2C47] relative overflow-hidden">
      {/* Decorative elements */}
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
            A Solução
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            O Método <span className="font-semibold text-white">G.E.S.T.O.R.®</span> é um projeto de consultoria estratégica anual que organiza o turismo de grupos a partir de{" "}
            <span className="text-[#D4AF37]">governança, gestão e tomada de decisão estruturada.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-white/50 text-base font-light"
        >
          <span>Não é mentoria.</span>
          <span className="hidden md:block">·</span>
          <span>Não é execução.</span>
          <span className="hidden md:block">·</span>
          <span className="text-white/80 font-medium">É estrutura para crescer com segurança.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 mb-10 text-center"
        >
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-lg text-white/70 font-light">
            É construir através do Método <span className="text-white font-medium">G.E.S.T.O.R.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm text-center hover:bg-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/[0.15] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/[0.25] transition-colors">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}