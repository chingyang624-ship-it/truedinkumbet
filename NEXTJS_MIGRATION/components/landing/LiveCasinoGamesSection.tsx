"use client";

import { useState, useEffect } from "react";

interface LiveCasinoGame {
  id: number;
  title: string;
  provider: string;
  image: string;
}

const liveCasinoGames: LiveCasinoGame[] = [
  {
    id: 1,
    title: "Crazy Time",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-1.webp",
  },
  {
    id: 2,
    title: "Super Sic-Bo",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-2.webp",
  },
  {
    id: 3,
    title: "Mega Ball",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-3.webp",
  },
  {
    id: 4,
    title: "Lightning Dice",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-4.webp",
  },
  {
    id: 5,
    title: "Lightning Baccarat",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-5.webp",
  },
  {
    id: 6,
    title: "Lightning Roulette",
    provider: "Evolution Gaming",
    image: "https://www.bk8.services/wp-content/uploads/2023/04/live-casino-carousel-6.webp",
  },
];

export default function LiveCasinoGamesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= liveCasinoGames.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.floor((liveCasinoGames.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const getVisibleGames = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % liveCasinoGames.length;
      visible.push(liveCasinoGames[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Best Live Casino Games
        </h2>

        <div className="relative">
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
                    alt={`Truedinkumbet ${game.title} Live Casino`}
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

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous games"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next games"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
