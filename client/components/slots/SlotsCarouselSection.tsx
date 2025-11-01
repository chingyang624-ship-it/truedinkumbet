import { useState, useRef } from 'react';

const featuredGames = [
  {
    title: 'Thunder Coins XXL ',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc1f22ae8e0cb4b72ac18d2e3d886314b',
    provider: 'BNG',
    rtp: '97.05',
  },
  {
    title: 'Coin Strike 2',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2d750595f6854b1ebec8d6a1de0f6e05',
    provider: 'BNG',
    rtp: '96.75',
  },
  {
    title: 'Cash Coin',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2aac83baa38f45a893130b9537416678',
    provider: 'JILI',
    rtp: '96.73',
  },
  {
    title: 'Pirate Queen 2',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdea56528893740118078f68cd11c8549',
    provider: 'JILI',
    rtp: '96.73',
  },
  {
    title: 'Treasure Aztec',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6aa8e0ce5b74489bbae7a48bdbf52db6',
    provider: 'SLOT MANIA',
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

        <div className="mt-16 inline-table w-full text-center" style={{ paddingBottom: '10px', paddingTop: '10px' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f2124' }}>Explore All Games</h3>
          <div style={{ display: 'inline-table', paddingBottom: '10px', paddingTop: '10px', textAlign: 'center', width: '100%' }}>
            {allGames.map((game, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-block',
                  paddingBottom: '15px',
                  paddingTop: '15px',
                  position: 'relative',
                  textAlign: 'center',
                  width: '14.2857%',
                }}
              >
                {game.badge && (
                  <p
                    style={{
                      backgroundColor: game.badge === 'Hot' ? 'rgb(255, 101, 15)' : 'rgb(224, 9, 44)',
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
                      right: '5px',
                      textAlign: 'center',
                      top: '5px',
                      zIndex: 10,
                    }}
                  >
                    {game.badge}
                  </p>
                )}
                <a
                  target="_blank"
                  rel="sponsored noopener"
                  href="#"
                  style={{
                    cursor: 'pointer',
                    transition: 'transition-duration 0.3s',
                  }}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt={`BK8 ${game.title} Slot Game`}
                    width="240"
                    height="300"
                    src={game.image}
                    style={{
                      aspectRatio: '240 / 300',
                      cursor: 'pointer',
                      display: 'inline',
                      lineHeight: '18px',
                      maxWidth: '100%',
                      transition: 'transition-duration 0.3s',
                      verticalAlign: 'middle',
                      width: '80%',
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
