export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Very good and reliable bookmaker I ever come across. Strong and supportive Customer Service that can be reached out at anytime 24/7. Good promotion been offered time to time especially on VIP members",
      source: "trustpilot.com",
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      text: "BK8 Online Casino is licensed and regulated, ensuring a safe and secure gambling experience.",
      source: "onlinecasinomalaysia.bet",
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      text: "To sum up, BK8 is a reputable online gaming platform that offers a diverse range of betting and gambling opportunities.",
      source: "onlinecasinoz.vegas",
      verified: true,
    },
    {
      id: 4,
      rating: 5,
      text: "In my experience, the site feels safe, user-friendly, and fun. The interface is smooth and well-designed, so playing at BK8 always feels enjoyable and hassle-free. Overall, BK8 has quickly become one of my favorite online gaming destinations in Malaysia.",
      source: "casino.com",
      verified: true,
    },
    {
      id: 5,
      rating: 5,
      text: "All in all, when combined with other factors that come into play in our review, BK8 Casino has landed a High Safety Index of 8.9. This casino can be considered a recommendable option for most players since it fosters fairness and honesty in their treatment of customers.",
      source: "casino.guru",
      verified: true,
    },
    {
      id: 6,
      rating: 5,
      text: "BK8 Casino has a great games lobby! There is a good mix of games, which is coupled with some fantastic and user-friendly features.",
      source: "askgamblers.com",
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
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;{testimonial.text}&quot;
              </p>
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
