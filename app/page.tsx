"use client";
import SearchBar from "@/app/components/SearchBar";
import PopularBeerCard from "@/app/components/Cards/PopularBeerCard";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 1. BACKGROUND FISSO: Non scrolla mai */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay per scurire il video */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* 2. LAYER UI: Questo è l'UNICO contenitore che scrolla */}
      {/* Usiamo min-h-screen e relativo z-index per stare sopra il video */}
      <div className="relative z-10 flex flex-col items-center pt-12 px-6 min-h-screen">
        {/* SEARCH BAR: Parte del flusso dello scroll */}
        <div className="w-full max-w-md mb-16">
          <SearchBar />
        </div>

        {/* GRIGLIA CARD */}
        <div className="w-full max-w-5xl pb-20">
          <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-4">
            <h2 className="text-white font-serif text-2xl font-bold italic">
              Popular Beers
            </h2>
            <span className="text-white/60 text-xs uppercase tracking-[0.2em]">
              Pick your craft
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PopularBeerCard
              name="Double IPA"
              brewery="Lighthouse"
              abv="8.2"
              tags={["Citrus", "Hoppy"]}
              className="md:col-span-2"
            />
            <PopularBeerCard
              name="Dry Stout"
              brewery="Midnight"
              abv="5.4"
              tags={["Roasted"]}
            />
            <PopularBeerCard
              name="Amber Ale"
              brewery="Sunset"
              abv="6.0"
              tags={["Malty"]}
            />
            <PopularBeerCard
              name="Belgian Wit"
              brewery="Cloudy"
              abv="4.8"
              tags={["Spiced", "Fresh"]}
              className="md:col-span-2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
