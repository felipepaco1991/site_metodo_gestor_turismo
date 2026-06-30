import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Send } from "lucide-react";

const experiences = [
  "Diretoria Executiva do Grupo AirmetClub (2 anos)",
  "Diretoria do Grupo Arbo (atualmente)",
  "Palestrante em grandes eventos turísticos",
  "Apoio em logística e lançamento de rotas religiosas no Brasil",
];

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="fabiana" className="relative overflow-hidden border-b border-white/8 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,151,65,0.14),transparent_22%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="rounded-[34px] border border-white/10 bg-white/5 p-7 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
              Quem conduz
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-white md:text-5xl">
              Fabiana Lima
            </h2>
            <p className="mt-4 font-display text-2xl italic text-[#e6c38b] md:text-3xl">
              visão executiva aplicada ao turismo de grupos
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[#ddb97d]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ddb97d]">
                    Formação
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/66 md:text-base">
                  MBA em Gestão de Negócios, Controladoria, Finanças Corporativas e Inteligência
                  Artificial.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-5 w-5 text-[#ddb97d]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ddb97d]">
                    Experiência
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  {experiences.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c89741]" />
                      <p className="text-sm leading-7 text-white/66 md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0d1726]/84"
          >
            <div className="relative border-b border-white/10 px-7 py-8 md:px-8">
              <div
                className="absolute inset-0 opacity-18"
                style={{ backgroundImage: "url('/assets/AdobeStock_274407399.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(9,17,31,0.92),rgba(18,28,43,0.86))]" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ddb97d]">
                  Solicitar diagnóstico
                </p>
                <h3 className="mt-4 font-heading text-3xl leading-tight text-white md:text-4xl">
                  Comece pela leitura certa da sua operação.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
                  Se a sua agência precisa de margem, segurança e previsibilidade no turismo de
                  grupos, esse é o primeiro passo para entender onde atuar.
                </p>
              </div>
            </div>

            <div className="px-7 py-8 md:px-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[28px] border border-[#c89741]/18 bg-[#111b2b] px-6 py-10 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c89741]/14">
                    <Send className="h-6 w-6 text-[#ddb97d]" />
                  </div>
                  <p className="mt-5 font-display text-3xl text-white">Mensagem registrada</p>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    O próximo contato pode ser usado para aprofundar diagnóstico, escopo e
                    aderência ao programa.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-[#c89741]/40 focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Seu e-mail"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-[#c89741]/40 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone ou WhatsApp"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-[#c89741]/40 focus:outline-none sm:col-span-2"
                  />
                  <textarea
                    rows={5}
                    placeholder="Conte um pouco sobre sua operação e o momento atual da agência."
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-sm leading-7 text-white placeholder:text-white/35 focus:border-[#c89741]/40 focus:outline-none sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-[#c89741] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#101a29] transition-colors duration-300 hover:bg-[#ddb36d]"
                    >
                      Solicitar diagnóstico estratégico
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
