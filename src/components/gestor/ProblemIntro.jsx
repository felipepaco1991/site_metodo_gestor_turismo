import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A2C47] leading-relaxed">
            O turismo de grupos pode ser{" "}
            <span className="font-semibold">altamente lucrativo.</span>
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 leading-relaxed">
              Mas, sem estrutura, ele se transforma em{" "}
              <span className="text-[#D4AF37] font-medium">risco.</span>
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 md:mt-20 space-y-6"
        >
          {[
            "Grupos cheios não garantem margem.",
            "Experiência sem processo não gera previsibilidade.",
            "Crescimento sustentável não vem de vender mais.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="text-lg md:text-xl text-gray-500 font-light text-center"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-semibold text-[#1A2C47]">
            Vem de estruturar melhor!
          </p>
        </motion.div>
      </div>
    </section>
  );
}