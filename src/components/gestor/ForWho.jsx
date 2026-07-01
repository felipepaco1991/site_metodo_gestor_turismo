import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import GoldenCircles from "./GoldenCircles";

const targetAudience = [
  "Está começando do zero e quer iniciar com estrutura.",
  "Já opera grupos, mas precisa validar e otimizar sua operação.",
  "Fatura pouco, ou deseja aumentar margem e previsibilidade.",
  "Quer criar marca própria em turismo de grupos com eficiência.",
  "Valoriza acompanhamento de alguém com experiência real.",
  "Deseja crescer como os grandes do mercado.",
  "Entende que antes de crescer, precisa implementar o método certo.",
];

const notForAudience = [
  "Acreditam já saber tudo sobre o mercado.",
  "Tentam fazer tudo sozinhos.",
  "Não desejam investir em conhecimento e experiência.",
];

const manifestoContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.08 },
  },
};

const manifestoItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="para-quem" className="py-28 md:py-36 bg-gray-50 relative overflow-hidden">
      <GoldenCircles />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
              PARA QUEM É
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47] leading-tight">
              O G.E.S.T.O.R. é para você que:
            </h2>

            <div className="mt-10 space-y-4">
              {targetAudience.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A2C47]/[0.08] flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#1A2C47]" />
                  </div>
                  <p className="text-gray-600 font-light text-base leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]/20 rounded-tl-xl"
            />
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
                PARA QUEM NÃO É
              </p>
              <h3 className="mt-4 text-2xl md:text-3xl font-light text-[#1A2C47]">
                Não é para empresários que:
              </h3>

              <motion.div
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={manifestoContainerVariants}
                className="mt-8 space-y-5 text-gray-500 font-light text-[15px] leading-relaxed"
              >
                {notForAudience.map((item) => (
                  <motion.div key={item} variants={manifestoItemVariants} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <p>{item}</p>
                  </motion.div>
                ))}

                <motion.p
                  variants={manifestoItemVariants}
                  className="text-[#1A2C47] font-medium text-base pt-2 border-t border-gray-100"
                >
                  "O sucesso do programa depende do comprometimento com o novo e da abertura para investir em conhecimento."
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
