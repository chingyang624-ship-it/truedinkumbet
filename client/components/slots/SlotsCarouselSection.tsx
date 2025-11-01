import { useState, useEffect } from 'react';

const featuredGames = [
  {
    title: 'Roma II',
    image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/slot-romaII.webp',
    provider: 'NextSpin',
    rtp: '97.05',
    badge: 'Hot',
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Slot Games</h2>

        <div className="relative mb-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src={featuredGames[currentSlide].image}
              alt={featuredGames[currentSlide].title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-3xl font-bold text-white">{featuredGames[currentSlide].title}</h3>
            <p className="text-gray-300">Provider: {featuredGames[currentSlide].provider}</p>
            <p className="text-yellow-400 font-semibold">RTP: {featuredGames[currentSlide].rtp}%</p>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {featuredGames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {featuredGames.map((game, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative group"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-32 object-cover hover:opacity-80 transition-opacity"
              />
              <div className="bg-gray-800 p-2">
                <p className="text-white font-semibold text-sm">{game.title}</p>
                <p className="text-gray-400 text-xs">{game.provider}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Explore All Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allGames.map((game, index) => (
              <div key={index} className="relative group">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                />
                {game.badge && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {game.badge}
                  </div>
                )}
                <p className="text-white text-sm font-semibold mt-2 text-center">{game.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
