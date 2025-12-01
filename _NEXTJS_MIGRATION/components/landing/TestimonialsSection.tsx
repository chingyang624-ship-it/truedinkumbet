export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Truedinkumbet is the best online casino I've played on. Great games, fast payouts, and excellent customer service!",
      source: "John M.",
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      text: "I love the variety of games and the generous bonuses. Highly recommended!",
      source: "Sarah K.",
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      text: "Amazing experience with Truedinkumbet. The live casino games are fantastic and the support team is very helpful.",
      source: "Michael T.",
      verified: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Players Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real reviews from satisfied Truedinkumbet players
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  {testimonial.source}
                </span>
                {testimonial.verified && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
