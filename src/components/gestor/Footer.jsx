import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-100">
      <div ref={ref} className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-sm text-gray-400 font-light tracking-wide"
        >
          Método G.E.S.T.O.R.® - Governança Estratégica em Serviços de Turismo de Grupos
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="mt-2 text-xs text-gray-300"
        >
          © {new Date().getFullYear()} metodogestorturismo.com.br · Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
