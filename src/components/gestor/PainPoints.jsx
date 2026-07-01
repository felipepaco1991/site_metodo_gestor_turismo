import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock3, MessageCircle, LineChart } from "lucide-react";

const painPoints = [
  {
    icon: Clock3,
    text: "1 hora semanal",
    desc: "Mentoria exclusiva para ajuste de rota, análise de desafios e direcionamento estratégico personalizado.",
  },
  {
    icon: MessageCircle,
    text: "Suporte tático via WhatsApp",
    desc: "Acesso direto para resolução de dúvidas pontuais e suporte em tomadas de decisão imediatas.",
  },
  {
    icon: LineChart,
    text: "Acompanhamento mensal e anual",
    desc: "Monitoramento contínuo dos indicadores de sucesso para garantir a consolidação dos resultados.",
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#1A2C47]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] font-black text-white/[0.025] leading-none">G</span>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/[0.04] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            ACOMPANHAMENTO
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white">
            Suporte de Elite em Cada Etapa
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3">
          {painPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.09] hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-white/90 font-medium text-base group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                  <p className="text-white/65 font-light text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            INTENSIDADE DO SUPORTE
          </p>
          <p className="mt-4 text-white/60 font-light text-base md:text-lg">
            Anual · Mensal · Semanal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
