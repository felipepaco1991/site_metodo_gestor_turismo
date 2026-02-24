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
  { icon: HelpCircle, text: "Não sabem precificar ou não têm certeza sobre" },
  { icon: Layers, text: "Desorganização operacional" },
  { icon: ShieldAlert, text: "Insegurança jurídica" },
  { icon: Link2, text: "Dependência excessiva de operadoras" },
  { icon: UserX, text: "Cancelamentos e conflitos com clientes" },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-white relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            O Cenário Atual
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            Muitas empresas que trabalham com{" "}
            <span className="font-semibold">turismo de grupo:</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1A2C47]/[0.06] flex items-center justify-center group-hover:bg-[#D4AF37]/[0.08] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#1A2C47]/60 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <p className="text-gray-600 font-light text-base leading-relaxed pt-1.5">
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