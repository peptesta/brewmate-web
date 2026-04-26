"use client";
import SearchBar from "@/app/components/SearchBar";
import PopularBeerSection from "./components/sections/PopularBeerSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 flex flex-col items-center pt-12 px-6 min-h-screen">
        {/* SEARCH BAR: Parte del flusso dello scroll */}
        <div className="w-full max-w-md mb-16">
          <SearchBar />
        </div>
        <PopularBeerSection />
      </div>
    </main>
  );
}
