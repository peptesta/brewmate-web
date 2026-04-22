"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpperNav() {
  const { scrollY } = useScroll();

  // Trasformiamo lo scroll in opacità del background (da trasparente a un nero molto leggero/traslucido)
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(26, 26, 27, 0)", "rgba(26, 26, 27, 0.4)"],
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(2px)"],
  );

  // Aggiungiamo anche un sottile bordo inferiore che appare solo quando si scende
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(255, 191, 0, 0)", "1px solid rgba(255, 191, 0, 0.2)"],
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur, // Per compatibilità Safari
      }}
      className="text-white px-4 py-4 sticky top-0 z-50 transition-all duration-300"
    >
      <div className="max-w-md mx-auto flex flex-col items-center justify-center text-center">
        {/* Parte superiore: Business/Small font */}
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-white/60 mb-0.5"
        >
          Thirsty? Looking for
        </motion.span>

        {/* Brand Name: Fancy font */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif font-bold text-brew-gold tracking-wide italic"
        >
          BrewMate
        </motion.h1>

        {/* Elemento decorativo */}
        <div className="w-12 h-[1px] bg-brew-gold/30 mt-2 rounded-full" />
      </div>

      {/* Profile pill (Nascondi su mobile se troppo ingombrante) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full border border-white/10">
        <div className="w-6 h-6 rounded-full bg-brew-gold flex items-center justify-center">
          <span className="text-brew-stout font-bold text-[10px]">MR</span>
        </div>
      </div>
    </motion.header>
  );
}
