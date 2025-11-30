'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LiveCasinoGame {
  id: number;
  title: string;
  provider: string;
  image: string;
}

const liveCasinoGames: LiveCasinoGame[] = [
  {
    id: 1,
    title: 'Super Sic-Bo',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
  {
    id: 2,
    title: 'Mega Ball',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
  {
    id: 3,
    title: 'Lightning Dice',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
  {
    id: 4,
    title: 'Lightning Baccarat',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
  {
    id: 5,
    title: 'Lightning Roulette',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
  {
    id: 6,
    title: 'Crazy Time',
    provider: 'Evolution Gaming',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529',
  },
];

export default function LiveCasinoGamesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveCasinoGames.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % liveCasinoGames.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? liveCasinoGames.length - 1 : prev - 1
    );
  };

  const getVisibleGames = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visible.push(liveCasinoGames[(currentIndex + i) % liveCasinoGames.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Best Live Casino Games
        </h2>

        <div className="relative">
          {/* Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {getVisibleGames().map((game) => (
              <a
                key={game.id}
                href="/live-casino"
                className="group cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {game.title}
                    </h3>
                    <p className="text-sm text-gray-600">{game.provider}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous games"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <div className="flex gap-2 flex-1 justify-center">
              {liveCasinoGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to game ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next games"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
