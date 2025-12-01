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
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 h-64 sm:h-80 md:h-96">
        <img
          src={slides[0].image}
          alt={slides[0].alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`w-2 h-2 rounded-full ${
              idx === 0 ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
