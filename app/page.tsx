"use client";
import Link from "next/link";
import { Beer, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const trendingBeers = [
  {
    id: 1,
    name: "IPA Baladin",
    brewery: "Baladin",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 2,
    name: "Menabrea Ambrata",
    brewery: "Menabrea",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
    rating: 4.2,
    reviews: 89,
  },
  {
    id: 3,
    name: "Birra del Borgo ReAle",
    brewery: "Birra del Borgo",
    image:
      "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
  },
];

const feedReviews = [
  {
    id: 1,
    beerId: 1,
    beerName: "IPA Baladin",
    brewery: "Baladin",
    price: 4.5,
    location: "Beer Shop Milano",
    rating: 5,
    user: "Marco R.",
    userLevel: "Maestro Birraio",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
    comment:
      "Incredibile profilo luppolato con note di agrumi e resina. Il prezzo è ottimo per la qualità!",
  },
  {
    id: 2,
    beerId: 2,
    beerName: "Menabrea Ambrata",
    brewery: "Menabrea",
    price: 3.2,
    location: "Carrefour Express Roma",
    rating: 4,
    user: "Giulia M.",
    userLevel: "Novizio",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
    comment:
      "Ottima birra ambrata, malto bilanciato e finale pulito. Prezzo conveniente!",
  },
  {
    id: 3,
    beerId: 3,
    beerName: "Birra del Borgo ReAle",
    brewery: "Birra del Borgo",
    price: 5.8,
    location: "Eataly Torino",
    rating: 5,
    user: "Andrea C.",
    userLevel: "Conoscitore",
    image:
      "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=300&fit=crop",
    comment:
      "Una delle migliori Extra IPA italiane. Luppolatura americana perfettamente bilanciata.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-md mx-auto">
        {" "}
        <section className="px-4 py-6 bg-gray-50">
          <h2 className="mb-4 text-brew-stout font-bold flex items-center gap-2">
            <span>🔥</span> Più Recensite Oggi
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {trendingBeers.map((beer, index) => (
              <motion.div
                key={beer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/beer/${beer.id}`}
                  className="flex-shrink-0 block w-48 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all active:scale-95"
                >
                  <img
                    src={beer.image}
                    alt={beer.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-brew-stout truncate">
                      {beer.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{beer.brewery}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star
                          size={14}
                          className="fill-brew-gold text-brew-gold"
                        />
                        <span className="text-xs font-bold">{beer.rating}</span>
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {beer.reviews} rec.
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Feed Recensioni */}
        <section className="px-4 py-6">
          <h2 className="mb-4 text-brew-stout font-bold">📋 Feed Recensioni</h2>
          <div className="space-y-6">
            {feedReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/beer/${review.beerId}`}
                  className="block bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-50 transition-all active:scale-[0.98]"
                >
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.beerName}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brew-gold text-brew-stout font-black px-3 py-1 rounded-full shadow-lg">
                      €{review.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-lg font-black text-brew-stout leading-tight">
                        {review.beerName}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {review.brewery}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-brew-green font-bold mb-4 bg-brew-green/10 w-fit px-2 py-1 rounded">
                      <MapPin size={12} />
                      <span>{review.location}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-brew-stout text-brew-gold flex items-center justify-center text-xs font-bold shadow-inner">
                          {review.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-brew-stout">
                            {review.user}
                          </p>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Beer
                                key={i}
                                size={12}
                                className={
                                  i < review.rating
                                    ? "fill-brew-gold text-brew-gold"
                                    : "text-gray-200"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs italic text-gray-600 max-w-[180px] line-clamp-2 text-right">
                        "{review.comment}"
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
