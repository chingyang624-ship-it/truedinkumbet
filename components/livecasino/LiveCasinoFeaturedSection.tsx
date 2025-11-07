'use client';

import { useState, useRef } from 'react';

const featuredProviders = [
  {
    title: 'Sexy Baccarat Live Casino',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7cd266f836fc457c9cbca7d99c74084e',
    badge: 'Hot',
  },
  {
    title: 'Big Gaming Live Casino',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffe9553cccaf04381a8de3fdd36b4756f',
    badge: 'Hot',
  },
  {
    title: 'Pragmatic Play Live Casino',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F56ce338cdc13440abaa4da451142cadf',
    badge: 'New',
  },
  {
    title: 'Yeebet Live Casino',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3213fb0fe817413285dd7d6ff46f164a',
    badge: 'Hot',
  },
  {
    title: 'Playtech Live Casino',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7fc6904e783647c6a6ddece861a07762',
    badge: 'Hot',
  },
];

export default function LiveCasinoFeaturedSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 250;
    const newPosition = direction === 'left'
      ? scrollPosition - scrollAmount
      : scrollPosition + scrollAmount;

    carousel.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>Featured Live Casino Providers</h2>

        <div className="relative mb-8">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous providers"
          >
            ←
          </button>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth', marginRight: '-4px' }}
          >
            {featuredProviders.map((provider, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  {provider.badge && (
                    <p
                      style={{
                        backgroundColor: provider.badge === 'Hot' ? 'rgb(255, 101, 15)' : 'rgb(224, 9, 44)',
                        borderRadius: '15px',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '11px',
                        fontWeight: '600',
                        lineHeight: '11px',
                        paddingBottom: '2px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        paddingTop: '2px',
                        position: 'absolute',
                        right: '10px',
                        textAlign: 'center',
                        top: '10px',
                        zIndex: 10,
                      }}
                    >
                      {provider.badge}
                    </p>
                  )}
                  <a
                    href="https://truedinkumbetaucasino.com/RFSEOTDK"
                    target="_blank"
                    rel="sponsored noopener"
                    className="block"
                  >
                    <img
                      decoding="async"
                      alt={`Truedinkumbet ${provider.title}`}
                      loading="lazy"
                      src={provider.image}
                      className="w-full h-auto object-cover"
                      style={{ height: '225px' }}
                    />
                  </a>
                </div>

                <div className="bg-white p-3 rounded-lg">
                  <h3 className="font-semibold text-base" style={{ color: '#1f2124' }}>
                    {provider.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next providers"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
