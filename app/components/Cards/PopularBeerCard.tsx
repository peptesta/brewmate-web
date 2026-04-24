interface PopularBeerCardProps {
  name: string;
  brewery: string;
  abv: string;
  tags: string[];
  className?: string;
  image?: string; // Aggiunta prop per l'immagine
}

const PopularBeerCard = ({
  name,
  brewery,
  abv,
  tags,
  className = "",
  image = "/image/placeholder-beer.jpg", // Immagine di default
}: PopularBeerCardProps) => {
  return (
    <div
      className={`group relative h-96 w-full overflow-hidden rounded-[2.5rem] 
      /* Effetto Glassmorphism */
      bg-white/10 backdrop-blur-xl border border-white/20 
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
      transition-all duration-500 hover:-translate-y-2 hover:border-brew-gold/50
      /* Centramento della card nel suo slot di griglia */
      mx-auto ${className}`}
    >
      {/* 1. PARTE SUPERIORE: Immagine */}
      <div className="relative h-1/2 w-full overflow-hidden p-4">
        <div className="h-full w-full rounded-2xl overflow-hidden bg-brew-stout/40">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 2. PARTE INFERIORE: Contenuto */}
      <div className="h-1/2 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-brew-gold text-[10px] font-black uppercase tracking-[0.2em]">
              {brewery}
            </p>
            <span className="bg-brew-gold/90 text-brew-stout text-[10px] font-bold px-2 py-0.5 rounded-full">
              {abv}% ABV
            </span>
          </div>
          <h3 className="text-white text-2xl font-serif font-bold leading-tight group-hover:text-brew-gold transition-colors">
            {name}
          </h3>
        </div>

        {/* Tag e Pulsante */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-black/20 backdrop-blur-md border border-white/10 text-white/70 px-2.5 py-1 rounded-lg text-[9px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="w-full py-2.5 bg-white text-brew-stout text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all hover:bg-brew-gold">
            View Details
          </button>
        </div>
      </div>

      {/* Riflesso di luce "Glass" */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
    </div>
  );
};

export default PopularBeerCard;
