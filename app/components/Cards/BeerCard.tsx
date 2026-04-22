"use client";
import { motion } from "framer-motion";

type BeerCardProps = {
  name: string;
  price: number | string;
  brand: string;
};

export default function BeerCard({ name, price, brand }: BeerCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-brew-stout p-4 rounded-2xl border border-white/10 shadow-lg mb-4"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{brand}</p>
        </div>
        <div className="bg-brew-gold px-3 py-1 rounded-full">
          <span className="text-brew-stout font-bold">€ {price}</span>
        </div>
      </div>

      {/* Mini indicatore prezzo medio con animazione CSS */}
      <div className="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
        <div className="progress-bar-shine h-full bg-brew-green w-2/3" />
      </div>
    </motion.div>
  );
}
