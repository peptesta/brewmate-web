"use client";
import SearchBar from "@/app/components/SearchBar";
import PopularBeerCard from "@/app/components/Cards/PopularBeerCard";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brew-gold">
      {/* SECTION VIDEO: Sticky */}
      <div className="relative h-screen w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/image/bg_fallback.png"
            className="w-full h-full object-cover"
          >
            <source
              src="https://tqzix1icsyo3ajkl.public.blob.vercel-storage.com/bg_good_idea-ezgif.com-reverse-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* 1. LAYER OVERLAY (Scurisce un po' il video per leggere meglio) */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />

          {/* 2. LAYER UI (SearchBar + Cards) */}
          {/* Questo contenitore è z-50 per stare sopra tutto */}
          <div className="absolute inset-0 z-50 flex flex-col items-center pt-10 px-6 overflow-y-auto pt-24">
            {/* SEARCH BAR */}
            <div className="w-full max-w-md mb-16 -mt-16">
              <SearchBar />
            </div>

            {/* GRIGLIA CARD - PROPRIO SOTTO LA BARRA */}
            <div className="w-full max-w-5xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-4">
                <h2 className="text-white font-serif text-2xl font-bold italic">
                  Popular Beers
                </h2>
                <span className="text-white/60 text-xs uppercase tracking-[0.2em]">
                  Pick your craft
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 mb-4">
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

          {/* 3. EFFETTI ESTETICI (Blur e Gradienti) */}
          {/* Nota: z-20 e z-30 per stare sotto la UI ma sopra il video */}
          {/*<div className="absolute bottom-0 left-0 w-full h-[40vh] backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black_60%)] pointer-events-none z-20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#FFBF00_100%)] pointer-events-none z-30" /> */}
        </div>
      </div>

      {/* CONTENT LAYER (Per il resto della pagina se scrolli giù) */}
      {/*<div className="relative z-[60] bg-brew-gold min-h-screen"> */}
      {/* Qui puoi mettere altre sezioni se serve */}
      {/*</div>*/}
    </main>
  );
}
