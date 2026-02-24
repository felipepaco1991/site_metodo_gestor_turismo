import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000"; // Replace with actual number

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico para minha empresa.")}`;

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
          className="mt-12 text-center space-y-6"
        >
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            Somos uma equipe com mais de 20 anos na área turística.
            Todos os desafios que você está passando ou quer minimizar, e garantir melhores previsibilidades na atuação do turismo de grupos, nós já vivenciamos, e podemos te ajudar a tornar a tua operação assertiva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 p-10 md:p-14 rounded-3xl bg-[#1A2C47] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />
          
          <div className="relative z-10">
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Se sua agência já trabalha com turismo de grupos e precisa de estrutura estratégica,{" "}
              <span className="text-[#D4AF37] font-medium">solicite um diagnóstico.</span>
            </p>
            <p className="mt-4 text-white/70 font-light">
              Vamos te ajudar a operar turismo de grupo com lucro e segurança, sem improviso.
            </p>
            <p className="mt-2 text-white/90 font-medium">
              Não perca esta oportunidade.
            </p>

            <div className="mt-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20BD5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale conosco pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}