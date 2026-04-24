"use client";
import React from "react";
import Button from "./BeerButton";

const SearchBar = () => {
  return (
    <form
      className="flex items-center w-[80vw] max-w-4xl relative"
      noValidate // Rimuove validazione browser
    >
      <input
        className="w-full rounded-full pl-6 pr-16 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brew-gold/50 transition-all duration-300 shadow-2xl"
        placeholder="Search for the best beers..."
        type="text"
        autoComplete="off"
      />

      {/* Posizionamento del boccale a destra */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 scale-75 md:scale-90">
        <Button />
      </div>
    </form>
  );
};

export default SearchBar;
