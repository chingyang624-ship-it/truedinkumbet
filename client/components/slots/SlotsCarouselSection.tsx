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
  { title: 'NextSpin', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9f31e5ab165a451798aced9f6bc248db', badge: 'Hot' },
  { title: 'PG Slot', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6270696975cd4a12aad4fbee0374d4b2', badge: 'Hot' },
  { title: 'Jili', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff8b276e143534adeaa84d077140d61a6', badge: 'New' },
  { title: 'Fa Chai', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5dc9c3e98f2e426995e52f25a8a8cc76' },
  { title: 'YGR', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F79d1e928c8e7409094e0dce9165a6549' },
  { title: 'Funky Games', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faebfa2fe4380480db7edfdda32b7e4dd' },
  { title: 'Joker', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F17a8c826d3e4417eb7d4a8a11fa94072' },
  { title: 'Netent', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5909e89a006d4687a175510f9e55adca' },
  { title: 'Red Tiger', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5d3d050402ea427bafb664a948b12dd3' },
  { title: 'Play n Go', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9f13294da9f945f8995f08b291c88a00' },
  { title: 'MT Game', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdb451952f74f4cf5806e10c7213b2869' },
  { title: 'Microgaming', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6fbcbb73a0fe41c19f04f5d8adea7a9d' },
  { title: 'CQ9', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4454bec1e2174e25904ea6f34745f941' },
  { title: 'Bins', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7825b7787ce64892b004da9e264b18cf', badge: 'New' },
  { title: 'JDB', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F15d7a82bc7cd433ea85b709acc101220', badge: 'New' },
  { title: 'Relax Gaming', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F900a2c729797420999ad59ed766a953a', badge: 'New' },
  { title: 'Novomatic', image: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd3f8b03098c44104bf33a583339ceaa0', badge: 'New' },
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
                      alt={`Truedinkumbet ${game.title} Slots Game`}
                      loading="lazy"
                      src={game.image}
                      className="w-full h-auto object-cover"
                      style={[2, 3, 4].includes(index) ? { height: '225px' } : {}}
                    />
                  </a>
                </div>

                <div className="bg-white p-3 rounded-lg" style={[2].includes(index) ? { marginTop: '13px' } : {}}>
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

        <div className="mt-16 w-full">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f2124' }}>Explore All Games</h3>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', padding: '15px 0', maxWidth: '100%' }}>
              {allGames.map((game, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    textAlign: 'center',
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
                        right: '0px',
                        textAlign: 'center',
                        top: '0px',
                        zIndex: 10,
                      }}
                    >
                      {game.badge}
                    </p>
                  )}
                  {game.image ? (
                    <a
                      target="_blank"
                      rel="sponsored noopener"
                      href="#"
                      style={{
                        cursor: 'pointer',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt={`Truedinkumbet ${game.title} Slot Game`}
                        width="240"
                        height="300"
                        src={game.image}
                        style={{
                          aspectRatio: '240 / 300',
                          cursor: 'pointer',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
