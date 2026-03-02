import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

const formContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.08 },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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
            Quem Somos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A2C47]">
            Mais de <span className="font-semibold">20 anos</span> na área turística
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            Somos uma equipe com mais de 20 anos na área turística. Todos os desafios que você vier a passar ou estiver passando, já vivenciamos, e por isto; podemos garantir melhores estratégias para que você atue de maneira mais assertiva no turismo de grupos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 p-10 md:p-14 rounded-3xl bg-[#1A2C47] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="text-center mb-10"
            >
              <p className="text-[#D4AF37] text-xl md:text-2xl font-medium">Solicite um diagnóstico.</p>
              <p className="mt-3 text-white/70 font-light text-base">
                Vamos te ajudar a operar turismo de grupo com lucro e segurança, sem improviso.
              </p>
              <p className="mt-2 text-white/90 font-medium">Não perca esta oportunidade.</p>
            </motion.div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <p className="text-white text-lg font-medium">Mensagem enviada!</p>
                <p className="text-white/60 font-light mt-2">Em breve entraremos em contato.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={formContainerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <motion.input
                  variants={formItemVariants}
                  required
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="col-span-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                />
                <motion.input
                  variants={formItemVariants}
                  required
                  type="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="col-span-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                />
                <motion.input
                  variants={formItemVariants}
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                />
                <motion.textarea
                  variants={formItemVariants}
                  placeholder="Conte um pouco sobre sua operação..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm resize-none"
                />
                <motion.div variants={formItemVariants} className="col-span-1 sm:col-span-2 flex justify-center mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-[#1A2C47] font-semibold rounded-full hover:bg-[#C9A961] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
                  >
                    <span>Solicitar Diagnóstico</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
