import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Headphones, Layers, Calendar, FileText, Lock } from "lucide-react";
import GoldenCircles from "./GoldenCircles";

const features = [
  { icon: Video, title: "Encontro estratégico semanal", desc: "60 minutos" },
  { icon: Headphones, title: "Suporte tático pontual", desc: "e limitado" },
  { icon: Layers, title: "Projeto estruturado", desc: "em 4 fases" },
  { icon: Calendar, title: "Acompanhamento", desc: "por 12 meses" },
  { icon: FileText, title: "Entrega de padrões", desc: "planilhas e modelos" },
  { icon: Lock, title: "Vagas", desc: "limitadas" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white relative overflow-hidden"
    >
      <GoldenCircles />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            Estrutura
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            Como <span className="font-semibold">Funciona</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/20 hover:shadow-lg hover:shadow-[#D4AF37]/[0.04] transition-all duration-500 group"
              >
                <div className="absolute top-6 right-6 text-5xl font-extralight text-gray-100 group-hover:text-[#D4AF37]/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1A2C47]/[0.06] flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/[0.08] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#1A2C47]/70 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <h3 className="text-[#1A2C47] font-medium text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
