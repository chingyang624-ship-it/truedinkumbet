import { useState, useRef } from 'react';

const featuredGames = [
  {
    title: 'Roma II',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-romaII.webp',
    provider: 'NextSpin',
    rtp: '97.05',
  },
  {
    title: 'Roma',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-roma.webp',
    provider: 'NextSpin',
    rtp: '96.75',
  },
  {
    title: 'Candy Bonanza Xmas',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-candy-bonanza-xmas.webp',
    provider: 'NextSpin',
    rtp: '96.73',
  },
  {
    title: 'Candy Bonanza',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-candy.webp',
    provider: 'NextSpin',
    rtp: '96.73',
  },
  {
    title: 'Golden Fa',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-golden-fa.webp',
    provider: 'NextSpin',
    rtp: '96.95',
  },
];

const allGames = [
  { title: 'NextSpin', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-nextspin.webp', badge: 'Hot' },
  { title: 'PG Slot', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-pgsoft.webp', badge: 'Hot' },
  { title: 'Jili', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-jili.webp', badge: 'New' },
  { title: 'Hong Chow', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-hc.webp' },
  { title: 'Fa Chai', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-fc.webp' },
  { title: 'YGR', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-ygr.webp' },
  { title: 'Funky Games', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-funkygames.webp' },
  { title: 'Joker', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-joker.webp' },
  { title: 'Netent', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-netent.webp' },
  { title: 'Red Tiger', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-rt.webp' },
  { title: 'Play n Go', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-p&g.webp' },
  { title: 'MT Game', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-mt.webp' },
  { title: 'Microgaming', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-mg.webp' },
  { title: 'CQ9', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-cq9.webp' },
  { title: 'Bins', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-bins.webp', badge: 'New' },
  { title: 'JDB', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-jdb.webp', badge: 'New' },
  { title: 'Relax Gaming', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-rg.webp', badge: 'New' },
  { title: 'PS', image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-ps.webp', badge: 'New' },
];

export default function SlotsCarouselSection() {
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
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>Featured Slot Games</h2>

        <div className="relative mb-8">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous games"
          >
            ←
          </button>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {featuredGames.map((game, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="sponsored noopener"
                    className="block"
                  >
                    <img
                      decoding="async"
                      alt={`BK8 ${game.title} Slots Game`}
                      loading="lazy"
                      src={game.image}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                </div>

                <div className="bg-white p-3 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-base" style={{ color: '#1f2124' }}>
                      {game.title}
                    </h3>
                    <img
                      decoding="async"
                      alt="Info"
                      width="25"
                      height="25"
                      loading="lazy"
                      src="https://bk8mycasino.com/wp-content/uploads/2023/08/info.webp"
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-xs mb-2" style={{ color: '#889da4' }}>
                    {game.provider}
                  </p>
                  <span
                    className="inline-block px-2 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: '#0088f3' }}
                  >
                    RTP {game.rtp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next games"
          >
            →
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f2124' }}>Explore All Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allGames.map((game, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-40 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  {game.badge && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {game.badge}
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold mt-2 text-center" style={{ color: '#1f2124' }}>
                  {game.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
