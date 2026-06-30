import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  Calculator,
  FileWarning,
  Link2,
  Scale,
  Shuffle,
  TrendingDown,
  Users,
} from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "Vendem bem, mas não enxergam resultado financeiro consistente." },
  { icon: Users, text: "Dependem demais de pessoas e pouco de processos próprios." },
  { icon: Shuffle, text: "Tomam decisões no improviso e reagem tarde aos problemas." },
  { icon: AlertTriangle, text: "Operam com margens baixas e riscos ocultos." },
  { icon: FileWarning, text: "Carregam fragilidade documental e insegurança jurídica." },
  { icon: Calculator, text: "Precificam grupos sem margem de segurança real." },
  { icon: Link2, text: "Dependem em excesso de terceiros, operadoras e atalhos operacionais." },
  { icon: Scale, text: "Enfrentam cancelamentos, conflitos e falhas de padronização." },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-[#0d1726]/70 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,151,65,0.12),transparent_24%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
            Cenário atual
          </p>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
            O diagnóstico do método começa onde a maioria das agências trava.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
            As dores abaixo aparecem com frequência em operações de turismo de grupos que cresceram
            sem uma camada real de governança estratégica.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.05 }}
                className="group flex gap-4 rounded-[26px] border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-[#c89741]/30 hover:bg-white/7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c89741]/18 bg-[#c89741]/10">
                  <Icon className="h-5 w-5 text-[#ddb97d]" />
                </div>
                <p className="text-sm leading-7 text-white/76 md:text-base">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
