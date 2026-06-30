import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarClock, FileStack, MessageCircleMore, Presentation, TimerReset } from "lucide-react";

const supportItems = [
  {
    icon: Presentation,
    title: "1 hora semanal",
    desc: "Mentoria estratégica exclusiva para ajustes de rota, análise de desafios e direcionamento executivo.",
  },
  {
    icon: MessageCircleMore,
    title: "Suporte tático via WhatsApp",
    desc: "Canal direto para dúvidas pontuais e decisões que exigem resposta mais rápida no meio da operação.",
  },
  {
    icon: CalendarClock,
    title: "Acompanhamento mensal e anual",
    desc: "Leitura contínua da evolução do negócio para consolidar resultados ao longo dos 12 meses.",
  },
  {
    icon: FileStack,
    title: "Modelos e materiais proprietários",
    desc: "Planilhas, documentos, fluxos e referências que aceleram a profissionalização da agência.",
  },
  {
    icon: TimerReset,
    title: "Ritmo mínimo de 12 meses",
    desc: "Tempo de contrato pensado para sair do improviso e alcançar maturidade estratégica real.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-[#0d1726]/68 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_22%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
            Acompanhamento
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
            Suporte de elite em cada etapa da jornada.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
            O programa combina cadência semanal, suporte tático e evolução progressiva para
            transformar a agência em uma operação menos vulnerável e mais estratégica.
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-5">
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
                className="flex h-full flex-col rounded-[26px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c89741]/18 bg-[#c89741]/10">
                  <Icon className="h-5 w-5 text-[#ddb97d]" />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
