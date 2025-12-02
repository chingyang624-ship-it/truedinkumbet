"use client";

import { useState, useEffect } from "react";

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BETA-ALL-GresiniAnnouncement-2000x525-en 1",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F3c2dd3b441354457b71fdfa1614b8ba9",
    },
    {
      title: "Truedinkumbet-Burnley-FC-Partnership",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F603ab0ba627a41b58099ecbea3cbacbe",
    },
    {
      title: "banner20250124082758635",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff651e9de69e140649352c9998b761560",
    },
    {
      title: "banner20250228093805642",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdd6a28c4c0ef4eaf9136674ea0e0e0ec",
    },
    {
      title: "banner20241024105658074",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcc9ebbe3e8774784b6ba2cbbec1aa215",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full bg-slate-50 pt-16 md:pt-20 pb-4"
      role="region"
      aria-label="Home Page"
      tabIndex={0}
    >
      <div className="w-full px-4 md:px-0">
        <div className="relative overflow-hidden rounded-lg md:rounded-xl">
          <div className="relative w-full aspect-video md:aspect-auto" style={{ minHeight: "250px", maxHeight: "500px" }}>
            {/* Slides */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://truedinkumbet.com/RFSEOTDK"
                    className="block w-full h-full"
                    aria-label="View Slide Details"
                  >
                    <img
                      alt={slide.title}
                      title={slide.title}
                      draggable="false"
                      loading="lazy"
                      src={slide.image}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Slide Controls */}
            <div
              aria-label="Slide controls"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Show slide ${index + 1} of ${slides.length}`}
                  role="tab"
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? "bg-yellow-400 w-8 h-3 cursor-default"
                      : "bg-white/70 hover:bg-white w-3 h-3 cursor-pointer"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
