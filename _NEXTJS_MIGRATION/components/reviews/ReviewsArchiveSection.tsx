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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2229e3be2cc448b9960574a393a0a2e4",
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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F37ebd4ebace24537b24a8967cd6f4d7a",
    bonus: "Slots",
    bonusPercentage: "20%",
    bonusAmount: "AUD 300",
    description:
      "The Ultimate Gaming Super 8 Way Slot Game will not only give you a chance to win big but will also give you a great user experience and entertainment thanks to its well-built interface and the well-organized sounds it produces.",
    reviewLink: "/reviews/ultimate-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 3,
    name: "TopTrend Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb619da356953448a929ad71aba313b38",
    bonus: "Slots",
    bonusPercentage: "20%",
    bonusAmount: "AUD 300",
    description:
      "There is no denying that the Asian online casino gambling industry is growing rapidly and TopTrend online casino sites are there to serve the market.",
    reviewLink: "/reviews/toptrend-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 4,
    name: "SpadeGaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7c88345237174b53b86f3ee7b3aa26a9",
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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fae080888adac4235ae1d5bfd79db7d86",
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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcbefd0f5109e41968ecff9cc2a473545",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "The games offered by SA Gaming as well as live merchant studios are evenly distributed across the Asian casino sites and have been warmly received by the consumers.",
    reviewLink: "/reviews/sa-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 7,
    name: "QQKeno",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdd31610e8fc34f33912d2101ac96445e",
    bonus: "Weekly Turnover",
    bonusPercentage: "",
    bonusAmount: "AUD 128",
    description:
      "QQKeno is a popular lottery game that is available online, offering prize and payouts based on number gaming and selection of different ranges.",
    reviewLink: "/reviews/qqkeno",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 8,
    name: "Pragmatic Play",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe5390d8bdeb5475f852e8fd2f147e42c",
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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa22d11fdf9634d8ea67cac9d2d43980e",
    bonus: "Live",
    bonusPercentage: "5%",
    bonusAmount: "AUD 150",
    description:
      "PlayTech has provided the best gaming software in the iGaming world, offering a huge selection of high-quality games. With the use of cutting edge technology and top-notch games, PlayTech has managed to stay on top, launching its land-based casino in 2001 in City Club Casino.",
    reviewLink: "/reviews/playtech",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 10,
    name: "Play'n GO",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F22c7f7ebd1994f4f8f9ed4e6314ad7dc",
    bonus: "Slots",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Play'n GO has been in the industry for many years. It has established itself as a reputable institution when it comes to creating online casino slots as well as exciting games. The company goes out of its way to ensure that the games offered are appealing to players.",
    reviewLink: "/reviews/playn-go",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 11,
    name: "Microgaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6a30c00a0c014ff8b59782518e9cc56d",
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
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F13656b7825ba4288ae84df3a5f51889a",
    bonus: "Mega & Kiss",
    bonusPercentage: "50%",
    bonusAmount: "AUD 100",
    description:
      "Mega888 is known to set new standards for the gaming community, shatter expectations and deliver the most satisfying user experience in the industry. Today, we will be looking into whether there is the truth behind these claims, and what makes Mega888 such a celebrated online casino in Asia.",
    reviewLink: "/reviews/mega888",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 13,
    name: "MaxBet",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcdd5bc0304d24d918287efbc51a38af4",
    bonus: "Sports",
    bonusPercentage: "100%",
    bonusAmount: "AUD 800",
    description:
      "MaxBet is the greatest online casino sportsbook provider in Asia right now! Previously referred to as IBCBET, MaxBet provides one of the best sportsbook betting designed to cater to each customer's individual needs.",
    reviewLink: "/reviews/maxbet",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 14,
    name: "IDNPoker",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F62884cbba2654f0f82175f464a2f5b64",
    bonus: "VIP Program",
    bonusPercentage: "",
    bonusAmount: "",
    description:
      "IDNPoker online casinos make use of the latest technology in the casino industry to deliver an excellent gaming experience to gamblers throughout Asia. At the moment, IDNPoker is the largest poker network that is only exclusive to players in Asia.",
    reviewLink: "/reviews/idnpoker",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 15,
    name: "Gold Deluxe",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcef824e65aec4ba9b90e699b815d1006",
    bonus: "Live",
    bonusPercentage: "5%",
    bonusAmount: "AUD 150",
    description:
      "Gold Deluxe or Golden Deluxe is a renowned face in Asian gambling, who has been among the talking points of success since 2011. The software provider is a specialist in developing top online casino platforms, mainly for table games.",
    reviewLink: "/reviews/gold-deluxe",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 16,
    name: "GamePlay Interactive",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F12c3b8f8a04049e0ba06c3a67c2fb317",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Gameplay Interactive makes sure that it creates casino gaming software that can easily be integrated and customized in order to meet the needs of any online casino. The great thing is that Gameplay Interactive provides multi-currency, as well as multi-lingual support.",
    reviewLink: "/reviews/gameplay-interactive",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 17,
    name: "GG Fishing",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F509a89c66e9341b98dfcf690b63f366c",
    bonus: "Fishing",
    bonusPercentage: "30%",
    bonusAmount: "AUD 1,000",
    description:
      "Fishing World is a highly played fish shooting game in Malaysia. The provider, GG Gaming is a supplier for the currently popular fish shooting game in Asia's market.",
    reviewLink: "/reviews/gg-fishing",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 18,
    name: "Fishing War",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4c878222a2ab44a68b2169dbe010e27c",
    bonus: "Fishing",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Fishing War is one of the highest rating online fishing games released by leading Asian game maker SpadeGaming – outstanding for his creative betting products.",
    reviewLink: "/reviews/fishing-war",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 19,
    name: "Fishing God",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcdb7d82cdad74294b9a043ab17b5c074",
    bonus: "Fishing",
    bonusPercentage: "",
    bonusAmount: "AUD 888",
    description:
      "Fishing God is one of the fishing games with real money exchanging and attractive gifts. With many outstanding events taking place daily, players will be assigned daily tasks, which is to reduce the specific number of fish.",
    reviewLink: "/reviews/fishing-god",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 20,
    name: "SA Fishing",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fba82fda383864a56bc1572aa117e30a9",
    bonus: "Fishing",
    bonusPercentage: "",
    bonusAmount: "AUD 888",
    description:
      "Fishermen Gold is among the top online fishing games in today's modern and digital generation. If you are searching for a game that can provide you with a high level of fun and entertainment, this can be the best fish shooting online game for you.",
    reviewLink: "/reviews/sa-fishing",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 21,
    name: "Evolution Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F36d593db52f843ef9597c1f00d03ecae",
    bonus: "Live",
    bonusPercentage: "1%",
    bonusAmount: "UNLIMITED",
    description:
      "The Evolution Gaming site boasts of the best games and within each game, they have many variants to it. Hence, you can be sure that you may find this to be a complete, total and one-stop solution for all your gambling and gaming needs, whether you are a new player or an expert.",
    reviewLink: "/reviews/evolution-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 22,
    name: "Dream Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ffe4ef454be9340f0aa5309cabc314d94",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Dream Gaming diversion platform with many all-around trained professional dealers, the real casino environment, stable top of the line equipment, professional technical support to ensure the stable operation of the platform, giving the player as though on the scene of the excellent experience.",
    reviewLink: "/reviews/dream-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 23,
    name: "PT Fish",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fbb037b3034104126868d087a7b517734",
    bonus: "Fishing",
    bonusPercentage: "",
    bonusAmount: "AUD 888",
    description:
      "Playtech Fishing: Cash Fish is introduced to the online casino players by Playtech Slot, a popular and easy fishing game. Find hidden treasure in the deep ocean with Money Shark. For you to capture different species of marine creatures in the elusive ocean, there are three different powerful weapons-usable.",
    reviewLink: "/reviews/pt-fish",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 24,
    name: "BetRadar",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6678ec1d8e3f4e90b5f8469c5d80f847",
    bonus: "Sports",
    bonusPercentage: "100%",
    bonusAmount: "AUD 800",
    description:
      "Betradar is known all over the world for offering sports betting services to online casino sites worldwide. The brand is run by Sportradar and is one of the leading names in iGaming.",
    reviewLink: "/reviews/betradar",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
  },
  {
    id: 25,
    name: "Asia Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7c0f583ccb98408ab40ff2825eb763af",
    bonus: "Live",
    bonusPercentage: "150%",
    bonusAmount: "AUD 300",
    description:
      "Asia Gaming follows the 'Impressive Experience Only' principle, providing players with quality and out-of-the-box thinking products for the most extraordinary gaming experiences.",
    reviewLink: "/reviews/asia-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 26,
    name: "918Kiss",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f4a3be554914f07b6a0beebdd9d2b2f",
    bonus: "Mega & Kiss",
    bonusPercentage: "150%",
    bonusAmount: "AUD 150",
    description:
      "918kiss is an application-based online casino where users register an account and play their collection of games with money deposited into the account's wallet. All deposited money will be translated into in-app credits.",
    reviewLink: "/reviews/918kiss",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 27,
    name: "AllBet",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe7e47fa99ba94908a857dedc0ccdbb2a",
    bonus: "Live",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "AllBet casino is one of the most visited gambling platforms so far. This is because it offers some of the best features. In this review, we will share some detailed information on the casino so as to help you make informed decisions.",
    reviewLink: "/reviews/allbet",
    playLink: "https://truedinkumbet.com/register",
    rating: 4,
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
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const itemsPerPage = page === 1 ? 20 : 7;
  const startIndex = page === 1 ? 0 : 20;
  const endIndex = startIndex + itemsPerPage;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Reviews Archive
        </h1>

        <div className="space-y-6">
          {paginatedReviews.map((review) => (
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
                  {!review.bonusPercentage && review.bonusAmount && (
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
          {page === 1 ? (
            <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded opacity-40">
              1
            </span>
          ) : (
            <a
              href="/reviews?page=1"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
            >
              « Previous
            </a>
          )}
          <a
            href="/reviews?page=1"
            className={`inline-block px-4 py-2 rounded transition-colors ${
              page === 1
                ? "bg-gray-800 text-white opacity-40"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            1
          </a>
          <a
            href="/reviews?page=2"
            className={`inline-block px-4 py-2 rounded transition-colors ${
              page === 2
                ? "bg-gray-800 text-white opacity-40"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            2
          </a>
          {page === 1 && (
            <a
              href="/reviews?page=2"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
            >
              Next »
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
