"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const words = ["adventurer", "engineer", "competitor", "fully alive"];

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

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
            Software & Robotics Engineer
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-roboto)] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
          Hi, I'm{" "}
          <span className="text-pink-300">Fiona</span>
        </h1>

        <div className="h-16 sm:h-20 flex items-center justify-center">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light">
            I'm an{" "}
            <span
              className={`inline-block font-semibold text-pink-300 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {words[currentWordIndex]}
            </span>
          </p>
        </div>

        <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          A student, athlete, christian, and a whole lot more.
          I believe in doing over perfection and living life fully.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-[#1e3a5f] rounded-lg font-semibold hover:bg-pink-100 transition-colors"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
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
