export default function CarouselSection() {
  const slides = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F34fc7e65b06f49549fa6e2c5b7d7f866",
      alt: "BETA-ALL-GresiniAnnouncement-2000x525-en 1",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0df3ad2b4eaf44a397adf42d1f2a79e2",
      alt: "Truedinkumbet-Burnley-FC-Partnership",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F21e7fa3f1b184f178c7c5f0f9e5a5b0a",
      alt: "banner20250124082758635",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1fca8e6ecd704ea1b3d5e8f1a2c3d4e5",
      alt: "banner20250228093805642",
    },
  ];

  return (
    <div className="w-full bg-slate-50 pt-20 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <style>{`
          @keyframes carouselRotate {
            0% { transform: translateX(0); }
            ${100 / slides.length}% { transform: translateX(0); }
            ${100 / slides.length + 0.1}% { transform: translateX(-100%); }
            ${(2 * 100) / slides.length}% { transform: translateX(-100%); }
            ${(2 * 100) / slides.length + 0.1}% { transform: translateX(-200%); }
            ${(3 * 100) / slides.length}% { transform: translateX(-200%); }
            ${(3 * 100) / slides.length + 0.1}% { transform: translateX(-300%); }
            ${(4 * 100) / slides.length}% { transform: translateX(-300%); }
            ${(4 * 100) / slides.length + 0.1}% { transform: translateX(0); }
            100% { transform: translateX(0); }
          }

          .carousel-container {
            animation: carouselRotate 20s infinite;
          }
        `}</style>
        <div className="relative w-full overflow-hidden bg-gray-200 rounded-xl h-64 sm:h-80 md:h-96">
          <div className="carousel-container flex w-full h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full h-full flex-shrink-0"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
