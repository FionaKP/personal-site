"use client";

import { useState } from "react";

const wordPairs = [
  { word: "Engineer", descriptor: "Systems-Driven" },
  { word: "Problem Solver", descriptor: "Analytical" },
  { word: "Builder", descriptor: "Intentional" },
  { word: "Competitor", descriptor: "Driven" },
  { word: "Explorer", descriptor: "Curious" },
];

function WordItem({ word, descriptor }: { word: string; descriptor: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="cursor-pointer relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base word */}
      <span
        className={`font-[family-name:var(--font-caveat)] text-xl sm:text-2xl md:text-3xl transition-all duration-500 ease-out inline-block ${
          isHovered
            ? "opacity-0 scale-95 text-amber-400"
            : "opacity-100 scale-100 text-amber-400"
        }`}
      >
        {word}
      </span>

      {/* Hover word - overlaid */}
      <span
        className={`font-[family-name:var(--font-caveat)] text-xl sm:text-2xl md:text-3xl transition-all duration-500 ease-out absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ${
          isHovered
            ? "opacity-100 scale-100 text-white"
            : "opacity-0 scale-105 text-white"
        }`}
      >
        {descriptor}
      </span>
    </span>
  );
}

export default function WordMarquee() {
  return (
    <div className="bg-[#1e3a5f] py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {wordPairs.map((pair, index) => (
            <WordItem key={index} word={pair.word} descriptor={pair.descriptor} />
          ))}
        </div>
      </div>
    </div>
  );
}
