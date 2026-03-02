import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingDown,
  Users,
  Shuffle,
  AlertTriangle,
  Eye,
  HelpCircle,
  Layers,
  ShieldAlert,
  Link2,
  UserX
} from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "Vendem bem, mas não têm resultados" },
  { icon: Users, text: "Dependem de pessoas, não de processo" },
  { icon: Shuffle, text: "Tomam decisões no improviso" },
  { icon: AlertTriangle, text: "Têm prejuízos ou margens muito baixas" },
  { icon: ShieldAlert, text: "Assumem riscos financeiros sem perceber" },
  { icon: Eye, text: "Não compreendem os prejuízos ocultos" },
  { icon: HelpCircle, text: "Não sabem precificar com segurança" },
  { icon: Layers, text: "Desorganização operacional" },
  { icon: ShieldAlert, text: "Insegurança jurídica" },
  { icon: Link2, text: "Dependência excessiva de operadoras" },
  { icon: UserX, text: "Cancelamentos e conflitos com clientes" },
  { icon: TrendingDown, text: "Crescimento sem previsibilidade" },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#1A2C47]">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] font-black text-white/[0.025] leading-none">G</span>
      </div>

      {/* Subtle gradient orbs */}
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
            O Cenário Atual
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-white">
            Muitas empresas que trabalham com{" "}
            <span className="font-semibold">turismo de grupo:</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {painPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.09] hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <p className="text-white/75 font-light text-base group-hover:text-white/90 transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}