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
      text: "Truedinkumbet Casino has a great games lobby! There is a good mix of games, which is coupled with some fantastic and user-friendly features.",
      source: "askgamblers.com",
      verified: true,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Truedinkumbet Feedback: What the Top Australia Casino Review Sites Really Think
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed min-h-[120px]">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between text-xs">
                <div className="text-gray-900 font-medium">
                  {testimonial.source}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-green-600">
                    <span>✓</span>
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
