import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Gift, Sparkles } from "lucide-react";

const audience = [
  "Agências que já operam turismo de grupos e sentem a operação excessivamente dependente de pessoas.",
  "Empresas que estão estruturando marca própria de grupos e querem começar do jeito certo.",
  "Gestores que buscam previsibilidade financeira, segurança e mais clareza para decidir.",
  "Operações que entendem o valor da gestão e querem profissionalizar comercial, processos e entrega.",
];

const bonuses = [
  {
    title: "Plano de Negócios Completo",
    desc: "Roadmap estratégico personalizado para orientar crescimento, posicionamento e escala.",
  },
  {
    title: "Treinamento ou palestra",
    desc: "Conteúdos em gestão e liderança, gestão de pessoas e gestão de negócios turísticos.",
  },
  {
    title: "Diagnóstico do negócio",
    desc: "Leitura aprofundada dos gargalos operacionais e mentais que travam a evolução da agência.",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bonus" className="relative overflow-hidden border-b border-white/8 bg-[#0d1726]/72 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,151,65,0.12),transparent_22%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
              Para quem é
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
              O método é para quem quer crescer com método, não com improviso.
            </h2>

            <div className="mt-10 space-y-4">
              {audience.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.48, delay: 0.08 + index * 0.06 }}
                  className="flex gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#c89741]/10">
                    <Check className="h-4 w-4 text-[#ddb97d]" />
                  </div>
                  <p className="text-sm leading-7 text-white/72 md:text-base">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-[#c89741]/16 bg-[#0b1422]/88 p-6">
              <div className="flex items-center gap-3 text-[#ddb97d]">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Escopo importante</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/64 md:text-base">
                O programa não assume a gestão do negócio, o treinamento completo das equipes ou a
                execução prática da operação. Ele orienta o gestor, organiza a estrutura e consolida
                a direção estratégica ao longo do ano.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="rounded-[34px] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
              Bônus de alto impacto
            </p>
            <div className="mt-8 grid gap-4">
              {bonuses.map((bonus, index) => (
                <motion.article
                  key={bonus.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.48, delay: 0.18 + index * 0.07 }}
                  className="rounded-[26px] border border-white/10 bg-[#0e1828] p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c89741]/20 bg-[#c89741]/10">
                      <Gift className="h-5 w-5 text-[#ddb97d]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ddb97d]">
                        Bônus {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-3xl text-white">{bonus.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/66 md:text-base">{bonus.desc}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
