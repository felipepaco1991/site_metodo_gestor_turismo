import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FileText, Map, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Estratégia e posicionamento",
    items: [
      "Diagnóstico do negócio e travas de crescimento",
      "Conhecimento de mercado e diferenciação",
      "Posicionamento de marca e cultura organizacional",
    ],
  },
  {
    icon: FileText,
    title: "Estruturação e documentação",
    items: [
      "Validação de empresa, cadastros e operação",
      "Contratos, fichas, pagamentos e seguros",
      "Planilhas, sistemas e fluxos internos do método",
    ],
  },
  {
    icon: Map,
    title: "Operação, margem e plano",
    items: [
      "Precificação de grupos e melhora de margens",
      "Roteiros, logística e acompanhamento operacional",
      "Entrega do plano de negócios consolidado",
    ],
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodo" className="relative overflow-hidden border-b border-white/8 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,151,65,0.16),transparent_22%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
            O método
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Consultoria estratégica anual.
            <span className="mt-3 block font-display text-2xl italic text-[#e6c38b] md:text-3xl">
              Não é gestão do negócio. Não é execução operacional.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
            O G.E.S.T.O.R.® foi desenhado para orientar decisões, estruturar processos, elevar a
            maturidade da operação e consolidar um plano de negócio sólido para o turismo de grupos.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c89741]/22 bg-[#c89741]/10">
                  <Icon className="h-5 w-5 text-[#ddb97d]" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-white">{pillar.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70 md:text-base">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c89741]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-10 rounded-[28px] border border-[#c89741]/18 bg-[#0d1726]/72 p-6 md:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c89741]/12">
              <ShieldCheck className="h-5 w-5 text-[#ddb97d]" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ddb97d]">
                Escopo do programa
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-white/66 md:text-base">
                O foco está em treinamentos, direcionamento estratégico, aulas, orientações e
                modelos proprietários de processo, documentos, planilhas e sistemas do método.
                Demandas fora desse escopo exigem avaliação específica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
