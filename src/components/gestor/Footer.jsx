import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 font-light tracking-wide">
          Método G.E.S.T.O.R.® — Governança Estratégica em Serviços de Turismo de Grupos
        </p>
        <p className="mt-2 text-xs text-gray-300">
          © {new Date().getFullYear()} metodogestorturismo.com.br · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}