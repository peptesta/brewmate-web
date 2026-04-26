"use client";
import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { Search, Beer, Pencil, PersonStanding } from "lucide-react";
export default function UpperNav() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Background dinamico che diventa opaco scrollando
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(26, 26, 27, 0)", "#1A1A1B"], // Usa il tuo brew-stout
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"],
  );

  const menuItems = [
    { name: "Discover", href: "#", icon: <Search className="w-6 h-6" /> },
    { name: "Popular Brews", href: "#", icon: <Beer className="w-6 h-6" /> },
    { name: "Beer Reviews", href: "#", icon: <Pencil className="w-6 h-6" /> },
    {
      name: "My Profile",
      href: "#",
      icon: <PersonStanding className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <motion.header
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className="text-white px-6 py-4 sticky top-0 z-[100]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LEFT: Branding */}
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-white/50 mb-1">
              Thirsty? Looking for
            </span>
            <h1 className="text-3xl font-serif font-bold text-brew-gold tracking-tight italic">
              BrewMate
            </h1>
          </div>

          {/* RIGHT: Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-[110] p-2 hover:bg-white/5 rounded-full transition-colors focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-0.5 bg-brew-gold transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              />
              <span
                className={`h-0.5 bg-brew-gold transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}
              />
              <span
                className={`h-0.5 bg-brew-gold transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-brew-stout flex flex-col justify-center items-center p-12"
          >
            {/* Texture soft opzionale */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/image/beer-texture.jpg')] bg-cover" />

            <nav className="relative z-10 flex flex-col gap-8 text-center">
              {menuItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col items-center"
                >
                  <span className="text-brew-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all">
                    0{i + 1}
                  </span>
                  <div className="flex items-center gap-4 text-white hover:text-brew-gold transition-all">
                    {item.icon}
                    <span className="text-4xl md:text-6xl font-serif font-bold group-hover:italic leading-none">
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
            </nav>

            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-brew-gold/20" />
              <p className="text-white/30 text-[10px] uppercase tracking-widest italic">
                The Finest Craft Selection
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
