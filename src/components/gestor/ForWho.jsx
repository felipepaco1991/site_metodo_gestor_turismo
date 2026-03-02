import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import GoldenCircles from "./GoldenCircles";

const targetAudience = [
  "Já operam turismo de grupos ou estão iniciando",
  "Profissionais que querem criar marca própria de grupos",
  "Buscam previsibilidade financeira",
  "Entendem o valor da gestão",
  "Querem profissionalizar a operação",
  "Querem garantir que o seu processo é assertivo",
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
              Para Quem É
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47] leading-tight">
              O Método <span className="font-semibold">G.E.S.T.O.R.®</span> é para empresas e pessoas que:
            </h2>

            <div className="mt-10 space-y-4">
              {targetAudience.map((item, i) => (
                <motion.div
                  key={i}
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
              <motion.div
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={manifestoContainerVariants}
                className="space-y-4 text-gray-500 font-light text-[15px] leading-relaxed"
              >
                <motion.p variants={manifestoItemVariants}>
                  Nós trabalhamos com empresas que já vendem turismo de grupos ou estão iniciando, mas sentem que a operação depende demais de pessoas, improviso e/ou experiência individual.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  O problema é que, sem processo, o grupo deixa de ser um ativo e vira um risco, mesmo quando vende bem.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  O <span className="text-[#1A2C47] font-medium">Método G.E.S.T.O.R.®</span> nasceu exatamente para resolver isso.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  Não é apenas uma mentoria. Nem tão pouco um processo de execução. É um projeto anual estratégico, focado em orientar tomadas de decisão e a revelar processos mais assertivos no turismo de grupos.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  Ao longo de 12 meses, acompanhamos a empresa com encontros estratégicos semanais e suporte tático pontual, estruturando precificação, processos, riscos e planejamentos.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  O objetivo não é criar dependência, mas <span className="text-[#1A2C47] font-medium">autonomia.</span>
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  Ao final do projeto, a agência opera turismo de grupos com mais margem, segurança e previsibilidade.
                </motion.p>
                <motion.p variants={manifestoItemVariants}>
                  Por isso, trabalhamos com um <span className="text-[#D4AF37] font-medium">número limitado de agências por ano.</span>
                </motion.p>
                <motion.p
                  variants={manifestoItemVariants}
                  className="text-[#1A2C47] font-medium text-base pt-2 border-t border-gray-100"
                >
                  "O Método G.E.S.T.O.R.® é para quem entende que crescer exige método."
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
