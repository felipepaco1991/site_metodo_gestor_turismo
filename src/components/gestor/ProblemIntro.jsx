import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GoldenCircles from "./GoldenCircles";

const diagnostics = [
  "Grupos cheios não garantem margem saudável.",
  "Experiência sem processo não gera previsibilidade.",
  "Crescimento sem governança aumenta risco operacional e financeiro.",
];

export default function ProblemIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diagnostico" className="relative overflow-hidden border-b border-white/8 py-24 md:py-32">
      <GoldenCircles />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
            Diagnóstico estratégico
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            O turismo de grupos pode ser altamente lucrativo.
            <span className="mt-3 block font-display text-2xl italic text-white/68 md:text-3xl">
              Sem estrutura, ele vira risco.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/66 md:text-lg">
            O método parte de um princípio simples: vender mais não resolve se a agência continua
            dependente de improviso, decisões reativas, documentação frágil e margens mal
            protegidas.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {diagnostics.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="mb-5 h-px w-14 bg-[#c89741]" />
              <p className="font-display text-2xl text-[#e8c48a]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-base leading-7 text-white/78">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
