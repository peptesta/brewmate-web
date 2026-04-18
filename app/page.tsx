"use client";
import Link from "next/link";
import { trendingBeers, feedReviews } from "./lib/mockData";
import TrendingBeersSection from "./sections/TrendingBeers";
import NearbyReviewsSection from "./sections/NearbyReviews";

export default function Home() {
  // Aggiungi distanza e tempo alle recensioni (opzionale)
  const reviewsWithMeta = feedReviews.map((review, index) => ({
    ...review,
    id: review.id.toString(),
    beerId: review.beerId.toString(),
    distance: `${(Math.random() * 5 + 0.5).toFixed(1)} km`,
    timeAgo: ["2 ore fa", "ieri", "3 ore fa", "5 ore fa", "1 ora fa"][
      index % 5
    ],
  }));

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-md mx-auto pb-20 overscroll-none">
        {/* Sezione Birre di Tendenza */}
        <TrendingBeersSection
          beers={trendingBeers.map((beer) => ({
            ...beer,
            id: beer.id.toString(),
          }))}
        />

        {/* Sezione Recensioni Vicino a Te */}
        <NearbyReviewsSection reviews={reviewsWithMeta} />
      </main>
    </div>
  );
}
