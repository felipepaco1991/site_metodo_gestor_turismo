import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A2C47]">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#C9A961]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-transparent blur-3xl"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-0 w-[600px] h-[600px] border border-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/3"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-0 w-[700px] h-[700px] border border-[#D4AF37]/3 rounded-full -translate-y-1/2 translate-x-1/3"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase">
              O QUE É O MÉTODO G.E.S.T.O.R.®
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
          >
            <span className="font-semibold text-[#D4AF37]">G.E.S.T.O.R.</span>
            <span className="text-[#D4AF37] text-3xl">®</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-16 h-[2px] bg-[#D4AF37] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-4"
          >
            Governança Estratégica em Serviços de Turismo de Grupos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base text-gray-400 font-light leading-relaxed mb-10 max-w-lg"
          >
            Consultoria estratégica anual que transforma sua empresa, organiza sua operação e garante previsibilidade, segurança e margem saudável no turismo de grupos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#investimento"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#D4AF37] text-[#1A2C47] text-sm font-semibold tracking-wide rounded-lg hover:bg-[#C9A961] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
            >
              Agendar Consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucao"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              A Estrutura por Trás do Método
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 backdrop-blur-sm overflow-hidden p-8">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent blur-2xl"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9A961] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <span className="text-[#1A2C47] text-5xl font-bold">G</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#D4AF37] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
