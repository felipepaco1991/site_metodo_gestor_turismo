import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O QUE É O MÉTODO G.E.S.T.O.R.®", href: "#programa-anual" },
  { label: "PARA QUEM É", href: "#para-quem" },
  { label: "O QUE VOCÊ RECEBE", href: "#o-que-voce-recebe" },
  { label: "QUEM SOMOS", href: "#quem-somos" },
  { label: "INVESTIMENTO", href: "#investimento" },
];

const desktopNavVariants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, staggerChildren: 0.08 },
  },
};

const desktopItemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, staggerChildren: 0.06, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.18 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-[#1A2C47]/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-20 md:h-24 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, "#programa-anual")}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="flex items-center"
          >
            <img
              src="/fabiana-lima-logo.png"
              alt="Fabiana Lima"
              className="h-12 w-auto object-contain md:h-14"
            />
          </motion.a>

          <motion.div
            initial="hidden"
            animate="show"
            variants={desktopNavVariants}
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                variants={desktopItemVariants}
                className={`text-sm font-light transition-colors duration-300 hover:text-[#D4AF37] ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-[#1A2C47]" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="flex flex-col items-center gap-8 pt-12 px-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  variants={mobileItemVariants}
                  className="text-xl font-light text-[#1A2C47] hover:text-[#D4AF37] transition-colors text-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
