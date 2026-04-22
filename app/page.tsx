"use client";
import { trendingBeers, feedReviews } from "./lib/mockData";

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
            className="w-full h-full object-cover"
          >
            <source src="/video/bg_good_idea.mp4" type="video/mp4" />
          </video>

          {/* LAYER 1: Overlay scuro generale per contrasto */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* LAYER 2: L'EFFETTO BLUR PROGRESSIVO */}
          {/* Questo div sfoca ciò che sta sotto (il video) nella parte finale */}
          <div className="absolute bottom-0 left-0 w-full h-[40vh] backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black_60%)] pointer-events-none" />

          {/* LAYER 3: IL GRADIENTE COLORE (copre il blur e lo unisce al gold) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#FFBF00_100%)] pointer-events-none" />
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 -mt-[35vh]">
        {/* Hero Content */}
        <section className="h-[60vh] flex flex-col items-center justify-end pb-12 px-6 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            BrewMate
          </h1>
          <p className="text-white/90 mt-4 font-medium tracking-widest uppercase text-sm drop-shadow-md">
            The Finest Craft Selection
          </p>
        </section>

        {/* CONTENUTO SOLIDO */}
        <div className="bg-brew-gold pt-10 pb-20 relative">
          {/* Ombra interna per dare profondità al passaggio */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

          <div className="max-w-md mx-auto space-y-12 px-4"></div>
        </div>
      </div>
    </main>
  );
}
