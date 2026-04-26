import PopularBeerCard from "@/app/components/Cards/PopularBeerCard";

export default function PopularBeerSection() {
  return (
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
  );
}
