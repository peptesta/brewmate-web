"use client";
import { Home, Search, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    {
      icon: Plus,
      label: "Add",
      href: "/add",
      isMain: true,
    },
    { icon: Search, label: "Search", href: "/search" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glassmorphism background with gradient */}
      <div className="absolute inset-0 bg-black backdrop-blur-xl border-t border-white/5" />

      {/* Subtle glow effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-lg mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isMain = item.isMain;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex flex-col items-center group ${isMain ? "-mt-8" : ""}`}
              >
                {isMain ? (
                  // Center prominent button
                  <motion.div
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative"
                  >
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />

                    {/* Button container */}
                    <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full shadow-[0_8px_32px_rgba(245,158,11,0.4)] border border-amber-300/50">
                      <item.icon
                        size={28}
                        className="text-slate-900"
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Label below main button */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-amber-500/80 whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>
                ) : (
                  // Regular nav items
                  <div className="flex flex-col items-center gap-1.5 min-w-[56px]">
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="relative p-2 rounded-xl transition-colors duration-300"
                    >
                      {/* Hover background */}
                      <div
                        className={`absolute inset-0 rounded-xl transition-all duration-300 ${isActive ? "bg-amber-500/10" : "bg-transparent group-hover:bg-white/5"}`}
                      />

                      <item.icon
                        size={24}
                        className={`relative z-10 transition-all duration-300 ${
                          isActive
                            ? "text-amber-400"
                            : "text-slate-400 group-hover:text-slate-200"
                        }`}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                    </motion.div>

                    <span
                      className={`text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-amber-400"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Safe area padding for mobile */}
      <div className="h-safe-area-inset-bottom bg-slate-900" />
    </nav>
  );
}
