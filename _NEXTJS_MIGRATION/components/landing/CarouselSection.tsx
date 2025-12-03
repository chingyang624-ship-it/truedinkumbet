export default function CarouselSection() {
  const slides = [
    {
      id: 1,
      image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
      alt: "Banner 1",
    },
    {
      id: 2,
      image: "https://static.gwvkyk.com/media/a7b8da74e1986ee754f17.png",
      alt: "Banner 2",
    },
    {
      id: 3,
      image: "https://static.gwvkyk.com/media/40882c84e198683d1cbb1.png",
      alt: "Banner 3",
    },
    {
      id: 4,
      image: "https://static.gwvkyk.com/media/29334a60339864d3c7a06.png",
      alt: "Banner 4",
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="w-full">
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
        <div className="relative w-full overflow-hidden bg-gray-200">
          <div className="carousel-container flex w-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
