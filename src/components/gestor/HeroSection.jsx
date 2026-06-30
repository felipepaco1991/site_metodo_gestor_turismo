import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CalendarDays } from "lucide-react";

const metrics = [
  { value: "12 meses", label: "Programa anual de consultoria" },
  { value: "06 fases", label: "Jornada estruturada de evolução" },
  { value: "1h/semana", label: "Mentoria estratégica exclusiva" },
];

export default function HeroSection() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/8 pt-24"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/AdobeStock_550821201.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(9,17,31,0.96),rgba(9,17,31,0.72),rgba(18,28,43,0.92))]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(200,151,65,0.22),transparent_26%)]" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c89741]/30 bg-[#c89741]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f2d8b7]"
          >
            <BadgeCheck className="h-4 w-4" />
            Consultoria estratégica anual para turismo de grupos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-4xl font-heading text-5xl leading-[0.96] text-white md:text-6xl lg:text-7xl"
          >
            Método G.E.S.T.O.R.<span className="text-[#c89741]">®</span>
            <span className="mt-4 block font-display text-2xl font-medium italic text-[#ecd7b7] md:text-3xl lg:text-4xl">
              Governança Estratégica em Serviços de Turismo de Grupos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/72 md:text-lg"
          >
            Uma estrutura de alto nível para organizar posicionamento, documentação, precificação,
            processos, riscos e plano de negócios com foco em margem, previsibilidade e escala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#investimento"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c89741] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#101a29] transition-all duration-300 hover:bg-[#ddb36d]"
            >
              Ver investimento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#fases"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/4 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/84 transition-all duration-300 hover:border-[#c89741]/40 hover:bg-white/8"
            >
              Conhecer as 6 fases
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-2xl text-[#e8c48a] md:text-3xl">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full border border-[#c89741]/18 lg:block" />
          <div className="absolute -right-6 bottom-10 hidden h-40 w-40 rounded-full bg-[#c89741]/10 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111b2b]/72 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_38%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-[26px] border border-white/10 bg-white/4 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae73]">
                    Posicionamento
                  </p>
                  <p className="mt-2 font-display text-2xl text-white">Foco em ROI e escala</p>
                </div>
                <BriefcaseBusiness className="h-9 w-9 text-[#c89741]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae73]">
                    Cobertura
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white/86">
                    Diagnóstico do negócio, travas de crescimento, estrutura empresarial e branding.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae73]">
                    Entrega
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white/86">
                    Treinamentos, modelos proprietários, processos, fluxogramas e plano de negócios.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#c89741]/18 bg-[#0d1726] p-6">
                <div className="flex items-center gap-3 text-[#f3d8b8]">
                  <CalendarDays className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Jornada estratégica de 12 meses
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/66">
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">Mercado e mindsets</div>
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">Documentação e sistemas</div>
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">Operação e finanças</div>
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">Plano de negócios</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
