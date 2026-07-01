import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const experiences = [
  "Diretoria Executiva do Grupo AirmetClub (2 Anos)",
  "Diretoria do Grupo Arbo (Atualmente)",
  "Palestrante em grandes eventos turísticos",
  "Apoio em logística e lançamento de rotas religiosas no Brasil",
];

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quem-somos" className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#1A2C47]/[0.02] blur-3xl translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            QUEM SOMOS
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            Fabiana Lima
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            FORMAÇÃO
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            MBA em Gestão de Negócios, Controladoria, Finanças Corporativas e Inteligência Artificial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 space-y-4"
        >
          <p className="text-center text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
            EXPERIÊNCIAS
          </p>
          {experiences.map((item, index) => (
            <p key={index} className="text-center text-gray-600 font-light text-base leading-relaxed">
              {item}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 p-10 md:p-14 rounded-3xl bg-[#1A2C47] relative overflow-hidden"
          id="investimento"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />

          <div className="relative z-10 text-center">
            <p className="text-[#D4AF37] text-sm font-medium tracking-[0.25em] uppercase">
              INVESTIMENTO
            </p>
            <h3 className="mt-4 text-white text-3xl md:text-4xl font-light">
              Invista no Futuro do Seu Negócio
            </h3>
            <p className="mt-6 text-white/70 font-light text-base max-w-2xl mx-auto">
              "A transformação da sua agência começa com uma decisão estratégica de valor."
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-[#1A2C47] font-semibold rounded-full hover:bg-[#C9A961] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
              >
                <span>Agendar Consultoria</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
