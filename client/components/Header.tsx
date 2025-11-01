import { useState, useEffect } from "react";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      title: "BETA-ALL-GresiniAnnouncement-2000x525-en 1",
      image:
        "https://bk8mycasino.com/wp-content/uploads/2025/03/BETA-ALL-GresiniAnnouncement-2000x525-en-1-1200x349.jpg",
    },
    {
      title: "BK8-Burnley-FC-Partnership",
      image:
        "https://bk8mycasino.com/wp-content/uploads/2023/09/BK8-Burnley-FC-Partnership-1200x349.webp",
    },
    {
      title: "banner20250124082758635",
      image:
        "https://bk8mycasino.com/wp-content/uploads/2025/03/banner20250124082758635-1200x349.webp",
    },
    {
      title: "banner20250228093805642",
      image:
        "https://bk8mycasino.com/wp-content/uploads/2025/03/banner20250228093805642-1200x349.webp",
    },
    {
      title: "banner20241024105658074",
      image:
        "https://bk8mycasino.com/wp-content/uploads/2025/03/banner20241024105658074-1200x349.webp",
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

  const navItems = [
    { name: "Slots", href: "#slots" },
    { name: "Live Casino", href: "#casino" },
    { name: "Esports", href: "#esports" },
    { name: "Sports", href: "#sports" },
    { name: "Fishing", href: "#fishing" },
  ];

  return (
    <header className="bg-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full z-50 bg-white/86 px-5">
        <div className="flex flex-wrap items-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden md:hidden flex-basis-1/6 py-1 px-3"
          >
            <img
              loading="lazy"
              src="https://bk8mycasino.com/wp-content/uploads/2023/05/burger.webp"
              alt="Menu"
              className="w-6 h-6"
            />
          </button>

          {/* Logo */}
          <a href="/" className="flex-1 md:flex-basis-1/4 py-1 px-2 mr-2">
            <img
              alt="BK8"
              width="110"
              height="50"
              loading="lazy"
              src="https://bk8mycasino.com/wp-content/uploads/2024/05/bk8logo.gif"
              className="w-28 h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-basis-3/4 text-left">
            <ul className="flex gap-3 z-10 relative">
              {navItems.map((item) => (
                <li key={item.name} className="inline-block">
                  <a
                    href={item.href}
                    className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="inline-block">
                <a
                  href="#blog"
                  className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px]"
                >
                  Blog
                </a>
                <ul className="hidden absolute bg-white/86 top-[52px] left-0 w-48 p-4 mt-4">
                  <li>
                    <a
                      href="#crypto"
                      className="font-medium text-gray-800 hover:text-gray-600 transition-colors text-sm"
                    >
                      Crypto casino
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex flex-basis-1/4 gap-4 text-right py-2 px-2">
            <a
              href="#login"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
            >
              Login
            </a>
            <a
              href="#register"
              className="inline-block text-sm font-bold text-white bg-orange-500 rounded-lg px-3 py-2 hover:bg-orange-600 transition-all animate-bounce"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div
        className="relative w-full bg-blue-900 pt-20 pb-4"
        role="region"
        aria-label="Home Page"
        tabIndex={0}
      >
        <div className="text-center">
          <div className="relative rounded-lg overflow-hidden">
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
                        fetchPriority={index === 0 ? "high" : "auto"}
                        height="349"
                        width="1200"
                        alt={slide.title}
                        title={slide.title}
                        draggable="false"
                        loading="lazy"
                        src={slide.image}
                        className="w-full max-w-5xl h-auto mx-auto"
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

      {/* Mobile Auth Buttons (shown on smaller screens) */}
      <div className="md:hidden flex gap-2 px-5 pb-4">
        <a
          href="#register"
          className="flex-1 py-3 bg-red-700 text-white font-semibold text-center rounded hover:bg-red-800 transition-colors"
        >
          Join
        </a>
        <a
          href="#login"
          className="flex-1 py-3 bg-blue-600 text-white font-semibold text-center rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </a>
      </div>
    </header>
  );
}
