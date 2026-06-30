import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer id="investimento" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,151,65,0.16),transparent_22%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-24 md:px-8 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="rounded-[36px] border border-white/10 bg-[#0c1523]/88 p-8 md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
                Investimento
              </p>
              <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
                Invista no futuro estratégico da sua agência.
              </h2>
              <p className="mt-5 max-w-2xl font-display text-2xl italic text-white/68 md:text-3xl">
                “A transformação da sua agência começa com uma decisão estratégica de valor.”
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
                Programa com foco em retorno sobre investimento, maturidade operacional e escala
                sustentável no turismo de grupos.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#c89741]/22 bg-white/5 p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-white/48">Investimento de</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-5xl text-[#e8c48a] md:text-7xl">R$ 6.780,00</span>
                <span className="pb-2 text-lg text-white/44">/mês</span>
              </div>
              <div className="my-6 h-px w-full bg-white/10" />
              <p className="text-sm leading-7 text-white/60">
                Tempo mínimo de contrato: <span className="font-semibold text-[#ddb97d]">12 meses</span>
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ddb97d]">
                Foco em ROI, posicionamento e escala
              </p>
              <a
                href="#fabiana"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c89741] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#101a29] transition-colors duration-300 hover:bg-[#ddb36d]"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left"
        >
          <p className="text-sm tracking-wide text-white/42">
            Método G.E.S.T.O.R.® · Governança Estratégica em Serviços de Turismo de Grupos
          </p>
          <p className="text-xs text-white/32">
            © {new Date().getFullYear()} metodogestorturismo.com.br · Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
