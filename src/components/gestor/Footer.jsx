import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bonuses = [
  {
    tag: "BÔNUS 01",
    title: "Plano de Negócios Completo",
    desc: "Desenvolvimento de um roadmap estratégico personalizado para guiar o crescimento da sua agência.",
    items: [],
  },
  {
    tag: "BÔNUS 02",
    title: "Treinamento / Palestra",
    desc: "",
    items: ["Gestão e Liderança", "Gestão de Pessoas", "Gestão de Negócios Turísticos"],
  },
  {
    tag: "BÔNUS 03",
    title: "Diagnóstico do Negócio e Travas de Crescimento",
    desc: "Identificação profunda de gargalos operacionais e mentais que impedem a escala do seu negócio.",
    items: [],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="py-16 bg-gray-50 border-t border-gray-100">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            BÔNUS
          </p>
          <p className="mt-4 text-2xl md:text-3xl text-[#1A2C47] font-light">
            Vantagens Exclusivas de Alto Impacto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.tag}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
              className="rounded-2xl bg-white border border-gray-100 p-6"
            >
              <p className="text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                {bonus.tag}
              </p>
              <p className="text-[#1A2C47] text-lg font-medium leading-snug">
                {bonus.title}
              </p>

              {bonus.desc ? (
                <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
                  {bonus.desc}
                </p>
              ) : null}

              {bonus.items.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {bonus.items.map((item) => (
                    <p key={item} className="text-sm text-gray-500 font-light leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          className="mt-14 rounded-[2rem] bg-[#1A2C47] px-8 py-10 text-center shadow-[0_24px_80px_rgba(26,44,71,0.12)]"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            Método G.E.S.T.O.R.®
          </p>
          <p className="mt-4 text-white/75 font-light text-base md:text-lg">
            Governança Estratégica em Serviços de Turismo de Grupos
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <a
              href="https://www.instagram.com/metodogestorturismo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#D4AF37]/30 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            >
              Instagram
            </a>
            <a
              href="https://www.metodogestorturismo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/5 hover:text-[#D4AF37]"
            >
              www.metodogestorturismo.com.br
            </a>
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Método G.E.S.T.O.R.®
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
