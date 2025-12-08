export default function SlotsAllGamesGridSection() {
  const games = [
    {
      title: "Game 1",
      image: "https://static.gwvkyk.com/media/6dc2870daf196fdcbbf19.png",
    },
    {
      title: "Game 2",
      image: "https://static.gwvkyk.com/media/23e31119af1964d2b41a1.png",
    },
    {
      title: "Game 3",
      image: "https://static.gwvkyk.com/media/72a50783af196c70f5bf9.png",
    },
    {
      title: "Game 4",
      image: "https://static.gwvkyk.com/media/5cdeea93af1967b0f561a.png",
    },
    {
      title: "Game 5",
      image: "https://static.gwvkyk.com/media/02b123d3af1963ff2587c.png",
    },
    {
      title: "Game 6",
      image: "https://static.gwvkyk.com/media/c9726908af1969ea5d9d5.png",
    },
    {
      title: "Game 7",
      image: "https://static.gwvkyk.com/media/26c4ce18af196bc7f6221.png",
    },
    {
      title: "Game 8",
      image: "https://static.gwvkyk.com/media/fe012f38af196a4bb8981.png",
    },
    {
      title: "Game 9",
      image: "https://static.gwvkyk.com/media/ba24e0c8af196dff07405.png",
    },
    {
      title: "Game 10",
      image: "https://static.gwvkyk.com/media/e61557d8af196d698807b.png",
    },
    {
      title: "Game 11",
      image: "https://static.gwvkyk.com/media/064dcde8af1960940f765.png",
    },
    {
      title: "Game 12",
      image: "https://static.gwvkyk.com/media/4a7688f8af19633bfe7b0.png",
    },
    {
      title: "Game 13",
      image: "https://static.gwvkyk.com/media/18331309af1966d5e3553.png",
    },
    {
      title: "Game 14",
      image: "https://static.gwvkyk.com/media/493da919af196340a954f.png",
    },
    {
      title: "Game 15",
      image: "https://static.gwvkyk.com/media/8f2e1f29af1964a70687d.png",
    },
    {
      title: "Game 16",
      image: "https://static.gwvkyk.com/media/5d119839af1962053fd8a.png",
    },
    {
      title: "Game 17",
      image: "https://static.gwvkyk.com/media/1e48e349af196e1b7319a.png",
    },
    {
      title: "Game 18",
      image: "https://static.gwvkyk.com/media/c2eb3b204c2965d90ee0a.png",
    },
    {
      title: "Game 19",
      image: "https://static.gwvkyk.com/media/e6ba1a59af196f4385cec.png",
    },
    {
      title: "Game 20",
      image: "https://static.gwvkyk.com/media/322ec469af196a5ea4f95.png",
    },
    {
      title: "Game 21",
      image: "https://static.gwvkyk.com/media/db8076d9af196c9e0f0ef.png",
    },
    {
      title: "Game 22",
      image: "https://static.gwvkyk.com/media/8246a4e9af19669f9b654.png",
    },
    {
      title: "Game 23",
      image: "https://static.gwvkyk.com/media/d3b812f9af1963eb5dfbd.png",
    },
    {
      title: "Game 24",
      image: "https://static.gwvkyk.com/media/9de20cf9af1967e55f711.png",
    },
    {
      title: "Game 25",
      image: "https://static.gwvkyk.com/media/43fe392aaf196c1b6e288.png",
    },
    {
      title: "Game 26",
      image: "https://static.gwvkyk.com/media/7fddafcaaf196c2caa9e0.png",
    },
    {
      title: "Game 27",
      image: "https://static.gwvkyk.com/media/e86f0edaaf1962caf6157.png",
    },
    {
      title: "Game 28",
      image: "https://static.gwvkyk.com/media/b0f9661baf196647e2bb1.png",
    },
    {
      title: "Game 29",
      image: "https://static.gwvkyk.com/media/e5282712bf196cf525acd.png",
    },
    {
      title: "Game 30",
      image: "https://static.gwvkyk.com/media/8730701caf196cdbb7a7b.png",
    },
    {
      title: "Game 31",
      image: "https://static.gwvkyk.com/media/82232d1caf196af460b3d.png",
    },
    {
      title: "Game 32",
      image: "https://static.gwvkyk.com/media/ef924f4caf19628fcf97e.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          All Slot Games
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore our complete collection of slot games
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
            padding: "15px 0",
            width: "100%",
          }}
        >
          {games.map((game, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                textAlign: "center",
              }}
            >
              <a
                target="_blank"
                rel="sponsored noopener"
                href="https://truedinkumbet.com/RFSEOTDK"
                style={{
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt={`Truedinkumbet ${game.title}`}
                  src={game.image}
                  style={{
                    aspectRatio: "4 / 5",
                    cursor: "pointer",
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
