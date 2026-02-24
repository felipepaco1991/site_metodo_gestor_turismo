import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const targetAudience = [
  "Já operam turismo de grupos ou estão iniciando",
  "Profissionais que querem criar marca própria de grupos",
  "Buscam previsibilidade financeira",
  "Entendem o valor da gestão",
  "Querem profissionalizar a operação",
  "Querem garantir que o seu processo é assertivo",
];

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="para-quem" className="py-28 md:py-36 bg-gray-50 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Target Audience */}
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
                  <p className="text-gray-600 font-light text-base leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Manifesto Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]/20 rounded-tl-xl" />
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="space-y-4 text-gray-500 font-light text-[15px] leading-relaxed">
                <p>
                  Nós trabalhamos com empresas que já vendem turismo de grupos ou estão iniciando, mas sentem que a operação depende demais de pessoas, improviso e experiência individual.
                </p>
                <p>
                  O problema é que, sem processo, o grupo deixa de ser um ativo e vira um risco — mesmo quando vende bem.
                </p>
                <p>
                  O <span className="text-[#1A2C47] font-medium">Método G.E.S.T.O.R.®</span> nasceu exatamente para resolver isso.
                </p>
                <p>
                  Não é mentoria e não é execução. É uma consultoria estratégica anual, focada em governança, gestão e tomada de decisão no turismo de grupos.
                </p>
                <p>
                  Ao longo de 12 meses, acompanhamos a empresa com encontros estratégicos semanais e suporte tático pontual, estruturando precificação, processos, gestão de risco e planejamento.
                </p>
                <p>
                  O objetivo não é criar dependência, mas <span className="text-[#1A2C47] font-medium">autonomia.</span>
                </p>
                <p>
                  Ao final do projeto, a agência opera turismo de grupos com mais margem, segurança e previsibilidade.
                </p>
                <p>
                  Por isso, trabalhamos com um <span className="text-[#D4AF37] font-medium">número limitado de agências por ano.</span>
                </p>
                <p className="text-[#1A2C47] font-medium text-base pt-2 border-t border-gray-100">
                  "O Método G.E.S.T.O.R.® é para quem entende que crescer exige método."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}