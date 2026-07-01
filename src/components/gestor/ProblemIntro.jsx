import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GoldenCircles from "./GoldenCircles";

const pillars = [
  "Governança",
  "Estratégia",
  "Segurança",
  "Tomada de Decisão",
  "Operação",
  "Resultados",
];

export default function ProblemIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programa-anual" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <GoldenCircles />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
            O QUE É O MÉTODO G.E.S.T.O.R.®
          </p>

          <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-light text-[#1A2C47] leading-relaxed">
            Um programa anual de consultoria estratégica
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Organiza e estrutura o turismo de grupos a partir de 5 pilares fundamentais. É a base para crescer ou escalar com segurança.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {pillars.map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              className="text-lg text-gray-500 font-light text-center"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            Cobertura estratégica do método
          </p>
          <p className="mt-4 text-gray-400 font-light text-base md:text-lg">
            Governança · Gestão · Indicadores · Processos · Decisão
          </p>
        </motion.div>
      </div>
    </section>
  );
}
