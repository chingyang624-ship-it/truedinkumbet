'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  source: string;
  verified: boolean;
  author: string;
  platform: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: 'Very good and reliable bookmaker I ever come across. Strong and supportive Customer Service that can be reached out at anytime 24/7. Good promotion been offered time to time especially on VIP members',
    source: 'trustpilot.com',
    verified: true,
    author: 'James M.',
    platform: 'Trustpilot',
  },
  {
    id: 2,
    rating: 5,
    text: 'Truedinkumbet Online Casino is licensed and regulated, ensuring a safe and secure gambling experience.',
    source: 'onlinecasinomalaysia.bet',
    verified: true,
    author: 'Sarah L.',
    platform: 'OnlineCasinoMalaysia',
  },
  {
    id: 3,
    rating: 5,
    text: 'To sum up, Truedinkumbet is a reputable online gaming platform that offers a diverse range of betting and gambling opportunities.',
    source: 'onlinecasinoz.vegas',
    verified: true,
    author: 'David K.',
    platform: 'OnlineCasinoZ',
  },
  {
    id: 4,
    rating: 5,
    text: 'In my experience, the site feels safe, user-friendly, and fun. The interface is smooth and well-designed, so playing at Truedinkumbet always feels enjoyable and hassle-free. Overall, Truedinkumbet has quickly become one of my favorite online gaming destinations.',
    source: 'casino.com',
    verified: true,
    author: 'Michael P.',
    platform: 'Casino.com',
  },
  {
    id: 5,
    rating: 5,
    text: 'All in all, Truedinkumbet Casino has landed a High Safety Index. This casino can be considered a recommendable option for most players since it fosters fairness and honesty in their treatment of customers.',
    source: 'casino.guru',
    verified: true,
    author: 'Emma R.',
    platform: 'Casino.Guru',
  },
  {
    id: 6,
    rating: 5,
    text: 'Truedinkumbet Casino has a great games lobby! There is a good mix of games, which is coupled with some fantastic and user-friendly features.',
    source: 'askgamblers.com',
    verified: true,
    author: 'Robert T.',
    platform: 'AskGamblers',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? 'text-orange-500' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Truedinkumbet Players Say
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => {
              const position =
                (index - currentIndex + testimonials.length) % testimonials.length;
              const isVisible = position < 3;

              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 visible' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Star Rating */}
                    {renderStars(testimonial.rating)}

                    {/* Quote */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    {/* Source and Verified Badge */}
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-800 mb-1">
                        {testimonial.platform}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {testimonial.source}
                      </p>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <span className="text-sm">✓</span>
                          <span className="text-xs font-semibold">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-2 justify-center flex-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
