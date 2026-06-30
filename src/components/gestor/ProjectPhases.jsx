import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    month: "Mês 1-2",
    title: "Diagnósticos, mercado e mindsets",
    desc: "Leitura da maturidade da marca, diagnóstico do negócio e identificação das travas de crescimento.",
  },
  {
    month: "Mês 2-4",
    title: "Estruturação ou validação da empresa",
    desc: "Documentação, cadastros, cultura organizacional e alinhamento da marca para o turismo de grupos.",
  },
  {
    month: "Mês 4-6",
    title: "Otimização documental e sistemas",
    desc: "Contratos, formulários, pagamentos, seguros, roteiros e padrões operacionais para atender o cliente.",
  },
  {
    month: "Mês 6-8",
    title: "Implementação e treinamentos",
    desc: "Aéreos, precificação, contratação de serviços, day by day e eficiência operacional com foco financeiro.",
  },
  {
    month: "Mês 8-10",
    title: "Consolidação e processos próprios",
    desc: "Criação de fluxogramas, rotinas internas e definição de usabilidade de planilhas e sistemas.",
  },
  {
    month: "Mês 10-12",
    title: "Perfil definido e plano de negócios",
    desc: "Posicionamento de mercado, experiência do cliente e fechamento do plano estratégico da agência.",
  },
];

export default function ProjectPhases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fases" className="relative overflow-hidden border-b border-white/8 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,151,65,0.14),transparent_25%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
            Jornada de evolução estratégica
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            06 fases estruturadas para maturidade real.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/66 md:text-lg">
            A lógica do programa acompanha a evolução natural da agência: primeiro organiza
            diagnóstico e estrutura, depois fortalece operação, margem e plano de crescimento.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.title}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.08 + index * 0.06 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ddb97d]">{phase.month}</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c89741]/20 bg-[#c89741]/10 font-display text-2xl text-[#e8c48a]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-3xl leading-tight text-white">{phase.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/66 md:text-base">{phase.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
