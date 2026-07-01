import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers } from "lucide-react";
import GoldenCircles from "./GoldenCircles";

const features = [
  "Modelo de negócio assertivo",
  "Modelo operacional",
  "Precificação correta",
  "Gestão de riscos",
  "Análises contábil, fiscal, financeira e cambial",
  "Estratégias para aéreo em grupos",
  "Modelos de processos",
  "Gestão de rotas e roteiros",
  "Hedge Cambial",
  "Informações mercadológicas",
  "Network de parceiros",
  "Experiência do cliente",
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="o-que-voce-recebe"
      className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white relative overflow-hidden"
    >
      <GoldenCircles />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            Conteúdos, treinamentos e consultoria aplicados ao turismo de grupos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/20 hover:shadow-lg hover:shadow-[#D4AF37]/[0.04] transition-all duration-500 group"
            >
              <div className="absolute top-6 right-6 text-5xl font-extralight text-gray-100 group-hover:text-[#D4AF37]/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1A2C47]/[0.06] flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/[0.08] transition-colors duration-300">
                <Layers className="w-5 h-5 text-[#1A2C47]/70 group-hover:text-[#D4AF37] transition-colors duration-300" />
              </div>
              <h3 className="text-[#1A2C47] font-medium text-lg mb-1">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            COBERTURA DE CONTEÚDO (%)
          </p>
          <p className="mt-4 text-gray-400 font-light text-base md:text-lg">
            Estratégia · Finanças · Operações · Mercado · Pessoas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
