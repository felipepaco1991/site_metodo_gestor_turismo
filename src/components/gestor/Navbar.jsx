import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#topo" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Método", href: "#metodo" },
  { label: "Fases", href: "#fases" },
  { label: "Bônus", href: "#bonus" },
  { label: "Fabiana", href: "#fabiana" },
  { label: "Investimento", href: "#investimento" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0d1728]/90 shadow-[0_12px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-8">
          <a
            href="#topo"
            onClick={(event) => handleNavClick(event, "#topo")}
            className="flex h-16 items-center overflow-visible md:h-20"
          >
            <img
              src="/logo-fabiana.png"
              alt="Fabiana Lima"
              className="relative top-[2px] block h-12 w-auto object-contain md:top-[4px] md:h-16"
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm font-medium tracking-[0.18em] text-white/72 transition-colors duration-300 hover:text-[#e2b66a]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#fabiana"
              onClick={(event) => handleNavClick(event, "#fabiana")}
              className="rounded-full border border-[#c89741]/40 bg-[#c89741]/12 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4dcc0] transition-all duration-300 hover:border-[#c89741] hover:bg-[#c89741]/18"
            >
              Solicitar diagnóstico
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-40 bg-[#09111f]/96 px-6 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="border-b border-white/8 pb-4 font-heading text-2xl text-white/90"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
