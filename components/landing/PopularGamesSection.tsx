'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PopularGame {
  id: number;
  title: string;
  provider: string;
  rtp: string;
  image: string;
}

const popularGames: PopularGame[] = [
  {
    id: 1,
    title: 'Triple Panda',
    provider: 'Next Spin',
    rtp: '96.93',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
  {
    id: 2,
    title: 'Magical Lamp',
    provider: 'Next Spin',
    rtp: '97.01',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
  {
    id: 3,
    title: 'Dragon Clan',
    provider: 'Next Spin',
    rtp: '96.93',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
  {
    id: 4,
    title: 'Maya Quest',
    provider: 'Next Spin',
    rtp: '96.84',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
  {
    id: 5,
    title: 'Dragon Blitz',
    provider: 'Next Spin',
    rtp: '96.87',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
  {
    id: 6,
    title: 'Candy Bonanza',
    provider: 'Next Spin',
    rtp: '96.73',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b',
  },
];

export default function PopularGamesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % popularGames.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % popularGames.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? popularGames.length - 1 : prev - 1
    );
  };

  const getVisibleGames = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visible.push(popularGames[(currentIndex + i) % popularGames.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Popular Games We Love
        </h2>

        <div className="relative">
          {/* Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {getVisibleGames().map((game) => (
              <a
                key={game.id}
                href="/slots"
                className="group cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {game.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">{game.provider}</p>
                      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
                        RTP {game.rtp}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous games"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <div className="flex gap-2 flex-1 justify-center">
              {popularGames.map((_, index) => (
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
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
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
