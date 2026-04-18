"use client";
import { Beer } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UpperNav() {
  return (
    <header className="bg-brew-stout text-white px-4 py-2 sticky top-0 z-40 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -20 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Beer className="text-brew-gold" size={28} strokeWidth={2} />
          </motion.div>
          <h1 className="text-brew-gold font-bold text-lg tracking-tight">
            BrewMate
          </h1>
        </div>

        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          <div className="w-7 h-7 rounded-full bg-brew-gold flex items-center justify-center">
            <span className="text-brew-stout font-bold text-xs">MR</span>
          </div>
          <span className="text-white text-xs font-medium">Novizio</span>
        </div>
      </div>
    </header>
  );
}
