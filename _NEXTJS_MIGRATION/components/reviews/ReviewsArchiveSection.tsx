"use client";

import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  logo: string;
  bonus: string;
  bonusPercentage: string;
  bonusAmount: string;
  description: string;
  reviewLink: string;
  playLink: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "CMD368",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/CMD368_VN-300x90.png",
    bonus: "Sports",
    bonusPercentage: "100%",
    bonusAmount: "AUD 800",
    description:
      "CMD368 is a bookmaker company that offers sports bookings to gamblers worldwide. Players from all over the world can bet live for different sports like tennis, baseball, motorsports, basketball, and many others.",
    reviewLink: "/reviews/cmd368",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 2,
    name: "Ultimate Gaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/ultimate-300x90.png",
    bonus: "Slots",
    bonusPercentage: "20%",
    bonusAmount: "AUD 300",
    description:
      "The Ultimate Gaming Super 8 Way Slot Game will not only give you a chance to win big but will also give you a great user experience and entertainment thanks to its well-built interface and the well-organized sounds it produces.",
    reviewLink: "/reviews/ultimate-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 3,
    name: "TopTrend Gaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/toptrend-gaming-300x90.png",
    bonus: "Slots",
    bonusPercentage: "20%",
    bonusAmount: "AUD 300",
    description:
      "There is no denying that the Asian online casino gambling industry is growing rapidly and TopTrend online casino sites are there to serve the market.",
    reviewLink: "/reviews/toptrend-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 4,
    name: "SpadeGaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/spadegaming-300x90.png",
    bonus: "Slots",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "SpadeGaming is the pioneer in the gaming industry in today's era. Be it sitting idle at home or coming home from work after a long and stressful day, SpadeGaming can prove to be fruitful in terms of running bets for leisure time and a small side income.",
    reviewLink: "/reviews/spadegaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 5,
    name: "SCR888",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/Untitled-1-01-1024x315-1-300x90.png",
    bonus: "Daily Reload",
    bonusPercentage: "50%",
    bonusAmount: "AUD 100",
    description:
      "SCR888 is designed to provide the most exquisite online gaming experience for both casual and hardcore players alike.",
    reviewLink: "/reviews/scr888",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 6,
    name: "SA Gaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/10/SA_Gaming.png",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "The games offered by SA Gaming as well as live merchant studios are evenly distributed across the Asian casino sites and have been warmly received by the consumers.",
    reviewLink: "/reviews/sa-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 7,
    name: "QQKeno",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/qqkeno-logo-01-300x90.jpg",
    bonus: "Weekly Turnover",
    bonusPercentage: "",
    bonusAmount: "AUD 128",
    description:
      "QQKeno is a popular lottery game that is available online, offering prize and payouts based on number gaming and selection of different ranges.",
    reviewLink: "/reviews/qqkeno",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 8,
    name: "Pragmatic Play",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/pragmaticplay-300x90.png",
    bonus: "Slots",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Pragmatic play publishes on average, two new games a month. At first glance, that may not really sound like an overly impressive figure, but it is when you consider the sheer amount of work that goes into every game. Currently, there are more than 100 games available in Pragmatic Play slots.",
    reviewLink: "/reviews/pragmatic-play",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 9,
    name: "PlayTech",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/Playtech-300x90.png",
    bonus: "Live",
    bonusPercentage: "5%",
    bonusAmount: "AUD 150",
    description:
      "PlayTech has provided the best gaming software in the iGaming world, offering a huge selection of high-quality games. With the use of cutting edge technology and top-notch games, PlayTech has managed to stay on top, launching its land-based casino in 2001 in City Club Casino.",
    reviewLink: "/reviews/playtech",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 10,
    name: "Play'n GO",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/playngo-300x90.png",
    bonus: "Slots",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Play'n GO has been in the industry for many years. It has established itself as a reputable institution when it comes to creating online casino slots as well as exciting games. The company goes out of its way to ensure that the games offered are appealing to players.",
    reviewLink: "/reviews/playn-go",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 11,
    name: "Microgaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/microgaming-300x90.png",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "MicroGaming is an online gaming software supplier since 1994 when they claimed to have developed the world's earliest online casino software. Also followed by the earliest mobile casino software a decade later in 2004.",
    reviewLink: "/reviews/microgaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 12,
    name: "Mega888",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/mega888-300x90.png",
    bonus: "Mega & Kiss",
    bonusPercentage: "50%",
    bonusAmount: "AUD 100",
    description:
      "Mega888 is known to set new standards for the gaming community, shatter expectations and deliver the most satisfying user experience in the industry. Today, we will be looking into whether there is the truth behind these claims, and what makes Mega888 such a celebrated online casino in Asia.",
    reviewLink: "/reviews/mega888",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="inline-block bg-blue-700 text-yellow-300 rounded-full w-7 h-7 flex items-center justify-center text-sm"
        >
          <Star size={14} fill="currentColor" className="text-yellow-300" />
        </span>
      ))}
    </div>
  );
};

export default function ReviewsArchiveSection() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Reviews Archive</h1>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
            >
              {/* Numbering and Logo Section */}
              <div className="md:w-1/4 flex flex-col items-center justify-start">
                <div className="text-2xl font-bold text-blue-700 mb-4">
                  {review.id}
                </div>
                <div className="w-full flex justify-center">
                  <img
                    alt={review.name}
                    loading="lazy"
                    src={review.logo}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Rating Section */}
              <div className="md:w-1/4 flex justify-center items-start pt-2">
                <StarRating rating={review.rating} />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2">
                <h4 className="text-lg font-light mb-3">
                  {review.bonus}
                  {review.bonusPercentage && (
                    <>
                      {" "}
                      <strong className="text-green-600 font-bold">
                        {review.bonusPercentage}
                      </strong>{" "}
                      Welcome Bonus, Up To{" "}
                      <strong className="text-green-600 font-bold">
                        {review.bonusAmount}
                      </strong>
                    </>
                  )}
                  {!review.bonusPercentage && (
                    <>
                      {" "}
                      <strong className="text-green-600 font-bold">
                        {review.bonusAmount}
                      </strong>
                    </>
                  )}
                </h4>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {review.description}
                </p>
              </div>

              {/* Action Buttons Section */}
              <div className="md:w-1/4 flex flex-col gap-2 justify-start">
                <a
                  href={review.reviewLink}
                  className="text-center bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors text-sm font-semibold"
                >
                  Review
                </a>
                <a
                  href={review.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors text-sm font-semibold"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded opacity-40">
            1
          </span>
          <a
            href="/reviews?page=2"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
          >
            2
          </a>
          <a
            href="/reviews?page=2"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
          >
            Next »
          </a>
        </div>
      </div>
    </div>
  );
}
