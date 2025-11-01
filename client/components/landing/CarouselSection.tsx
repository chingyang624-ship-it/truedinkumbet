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
      className="relative w-full bg-slate-50 pt-20 pb-4"
      role="region"
      aria-label="Home Page"
      tabIndex={0}
    >
      <div className="text-center w-full">
        <div className="relative overflow-hidden">
          <div className="relative text-center">
            {/* Slides */}
            <ul className="relative text-center list-none m-0 p-0">
              {slides.map((slide, index) => (
                <li
                  key={index}
                  className={`absolute left-0 top-0 w-full text-center ${
                    index === currentSlide
                      ? "relative z-20 opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  style={{
                    backfaceVisibility: "hidden",
                    float: index === currentSlide ? "left" : "left",
                    marginRight: "-100%",
                    width: "100%",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#register"
                    className="inline-block"
                    aria-label="View Slide Details"
                  >
                    <img
                      height="349"
                      width="1200"
                      alt={slide.title}
                      title={slide.title}
                      draggable="false"
                      loading="lazy"
                      src={slide.image}
                      className="w-full h-auto"
                      style={{ paddingRight: "2px", margin: "0 200px -5px 0" }}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Slide Controls */}
            <ol
              aria-label="Slide controls"
              className="absolute bottom-6 left-10 flex gap-3 z-20 list-none m-0 p-0"
            >
              {slides.map((_, index) => (
                <li key={index} role="presentation">
                  <button
                    aria-label={`Show slide ${index + 1} of ${slides.length}`}
                    role="tab"
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-yellow-400 w-8 cursor-default"
                        : "bg-white w-3 cursor-pointer hover:w-4"
                    }`}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
