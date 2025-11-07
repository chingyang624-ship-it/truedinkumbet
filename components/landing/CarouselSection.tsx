"use client";

import { useState, useRef } from "react";

export default function CarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const featuredGames = [
    {
      title: "Thunder Coins XXL",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd6a97f0fb86d4aea867de4a87ac99c79?format=webp",
    },
    {
      title: "Coin Strike 2",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5b8ad9a2f8c84bfa9cc9a77c79f4b9c8?format=webp",
    },
    {
      title: "Boxing King",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff8c8d9e7b8a9c9d0e1f2a3b4c5d6e7f8?format=webp",
    },
    {
      title: "Big Red",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2?format=webp",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Featured Games
        </h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {featuredGames.map((game, index) => (
              <div key={index} className="flex-shrink-0 w-56">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "#1f2124" }}
                    >
                      {game.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
            aria-label="Previous games"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
            aria-label="Next games"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
