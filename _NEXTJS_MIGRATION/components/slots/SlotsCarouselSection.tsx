"use client";

import { useState, useRef } from "react";

const featuredGames = [
  {
    title: "Thunder Coins XXL ",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc1f22ae8e0cb4b72ac18d2e3d886314b",
    provider: "BNG",
    rtp: "97.05",
  },
  {
    title: "Coin Strike 2",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2d750595f6854b1ebec8d6a1de0f6e05",
    provider: "BNG",
    rtp: "96.75",
  },
  {
    title: "Cash Coin",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2aac83baa38f45a893130b9537416678",
    provider: "JILI",
    rtp: "96.73",
  },
  {
    title: "Pirate Queen 2",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdea56528893740118078f68cd11c8549",
    provider: "JILI",
    rtp: "96.73",
  },
  {
    title: "Treasure Aztec",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6aa8e0ce5b74489bbae7a48bdbf52db6",
    provider: "SLOT MANIA",
    rtp: "96.95",
  },
];

const allGames = [
  {
    title: "NextSpin",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F950705a7eb5c4cfd8137ff3dbc70c085",
    badge: "Hot",
  },
  {
    title: "PG Slot",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F14c8c8e18fe946a88bfce09ee40aed46",
    badge: "Hot",
  },
  {
    title: "Jili",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F66fa8995c86e4b028a1c778e73360e7b",
    badge: "New",
  },
  {
    title: "Fa Chai",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb08dd67544264eddbfe3ab8221e87bf0",
  },
  {
    title: "YGR",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6d823d7ec18e456f985a0dd88ce77ce8",
  },
  {
    title: "Funky Games",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fde89bd1767fe4a6086414b87817c37b4",
  },
  {
    title: "Joker",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd6642e50f6ff4600984f15f35152493e",
  },
  {
    title: "Netent",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F46b37bfa1cca408ab68219fc7505605b",
  },
  {
    title: "Red Tiger",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd017039930fd48ebb8341bfc30db79a0",
  },
  {
    title: "Play n Go",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffbb96123fda14b3fa7e5fae623cc6c96",
  },
  {
    title: "MT Game",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4a4863c02fff4cf9b1de46cd7a161b83",
  },
  {
    title: "Microgaming",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4909f0e150cf43399a59a2359044cca5",
  },
  {
    title: "CQ9",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F041fb5ef0f4c4339a0c729757fab16ee",
  },
  {
    title: "Bins",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7f7349d210af421db8080c2aee57fe35",
    badge: "New",
  },
  {
    title: "JDB",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb78419a919b84b9ba1f6bd4ed7fd31bd",
    badge: "New",
  },
  {
    title: "Relax Gaming",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F01f44f93382b4b91b4dd91e25c050ec0",
    badge: "New",
  },
  {
    title: "Novomatic",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc54059e0127641ce995e6f66aefd36eb",
    badge: "New",
  },
];

export default function SlotsCarouselSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 250;
    const newPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

    carousel.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1f2124" }}
        >
          Featured Slot Games
        </h2>

        <div className="relative mb-8">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous games"
          >
            ←
          </button>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {featuredGames.map((game, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <a
                    href="https://truedinkumbet.com/RFSEOTDK"
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
                      style={
                        [2, 3, 4].includes(index) ? { height: "225px" } : {}
                      }
                    />
                  </a>
                </div>

                <div
                  className="bg-white p-3 rounded-lg"
                  style={[2].includes(index) ? { marginTop: "13px" } : {}}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "#1f2124" }}
                    >
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
                  <p className="text-xs mb-2" style={{ color: "#889da4" }}>
                    {game.provider}
                  </p>
                  <span
                    className="inline-block px-2 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#0088f3" }}
                  >
                    RTP {game.rtp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next games"
          >
            →
          </button>
        </div>

        <div className="mt-16 w-full">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "#1f2124" }}
          >
            Explore All Games
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                padding: "15px 0",
                maxWidth: "100%",
              }}
            >
              {allGames.map((game, index) => (
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
                  {game.badge && (
                    <p
                      style={{
                        backgroundColor:
                          game.badge === "Hot"
                            ? "rgb(255, 101, 15)"
                            : "rgb(224, 9, 44)",
                        borderRadius: "15px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "11px",
                        fontWeight: "600",
                        lineHeight: "11px",
                        paddingBottom: "2px",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        paddingTop: "2px",
                        position: "absolute",
                        right: "0px",
                        textAlign: "center",
                        top: "0px",
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
                        alt={`Truedinkumbet ${game.title} Slot Game`}
                        width="240"
                        height="300"
                        src={game.image}
                        style={{
                          aspectRatio: "240 / 300",
                          cursor: "pointer",
                          display: "block",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                          transition: "transform 0.3s ease",
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
