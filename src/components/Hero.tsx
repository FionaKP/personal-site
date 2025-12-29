"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SharpCornerBrackets, PaperAirplaneWithTrail } from "./HandDrawn";

const words = [
  { prefix: "I'm an", word: "adventurer" },
  { prefix: "I'm an", word: "engineer" },
  { prefix: "I'm a", word: "competitor" },
  { prefix: "I'm", word: "fully alive" },
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/70 via-[#1e3a5f]/50 to-[#1e3a5f]/80" />
      </div>

      {/* Sharp corner brackets */}
      <SharpCornerBrackets className="text-amber-400/50 z-[5]" />

      {/* Paper airplane with dotted trail */}
      <div className="absolute top-20 left-0 w-64 sm:w-80 z-[5]">
        <PaperAirplaneWithTrail className="text-amber-400/60 w-full h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
            Software & Robotics Engineer
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-roboto)] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
          Hi, I'm{" "}
          <span className="text-amber-400">Fiona</span>
        </h1>

        <div className="h-16 sm:h-20 flex items-center justify-center">
          <p
            className={`text-2xl sm:text-3xl md:text-4xl text-white/90 font-light transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {words[currentWordIndex].prefix}{" "}
            <span className="font-semibold text-amber-400">
              {words[currentWordIndex].word}
            </span>
          </p>
        </div>

        <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Engineer building systems people actually use,
          taking ideas from zero to one through user-centered design, iteration, and execution.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
