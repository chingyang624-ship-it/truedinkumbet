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
      "With hits like Cai Shen 888 and Double Flame, SpadeGaming has a cult following. The games are colorful, fast-paced, and built to attract players who enjoy quick action and high volatility slots.",
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
      "SCR888 is one of the oldest online slot providers. With simple mechanics and straightforward wins, it's the go-to for beginners. The platform focuses on player experience, offering consistent payouts and stable performance across devices.",
    reviewLink: "/reviews/scr888",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 6,
    name: "SA Gaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/10/SA_Gaming.png",
    bonus: "Live Casino",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "SA Gaming brings triple-A graphics and immersive sound effects to the table. Every slot and live game feels premium, and it's clear why SA Gaming remains one of the top developers for both live and slot games.",
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
      "This fan-favorite provider powers some of the most dynamic slots at Truedinkumbet. Games like Gates of Olympus offer high volatility, multipliers, and regular Drops & Wins tournaments for cash prizes.",
    reviewLink: "/reviews/pragmatic-play",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 9,
    name: "PlayTech",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/Playtech-300x90.png",
    bonus: "Live Casino",
    bonusPercentage: "5%",
    bonusAmount: "AUD 150",
    description:
      "As one of the world's biggest software brands, Playtech continues to innovate with every release. Their omnichannel gaming experience means you can switch between desktop and mobile without losing progress.",
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
      "Play'n GO has been in the industry for many years. It has established itself as a reputable institution when it comes to creating online casino slots as well as exciting games.",
    reviewLink: "/reviews/playn-go",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 11,
    name: "Microgaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/microgaming-300x90.png",
    bonus: "Live Casino",
    bonusPercentage: "50%",
    bonusAmount: "AUD 1,080",
    description:
      "Microgaming is a global legend in online slot software. Their titles such as Mega Moolah and Immortal Romance are loved for big jackpots and progressive prizes.",
    reviewLink: "/reviews/microgaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 12,
    name: "Mega888",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/mega888-300x90.png",
    bonus: "Mobile Slots",
    bonusPercentage: "50%",
    bonusAmount: "AUD 100",
    description:
      "Mega888 is popular among mobile users. The app offers a mix of slots and mini-games, all with fast loading and attractive bonuses. Many players rate Mega888 as the easiest to win slot platform.",
    reviewLink: "/reviews/mega888",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 13,
    name: "Evolution Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd70ed0c152e24c659f1bdcb32bd4d1cc",
    bonus: "Live Casino",
    bonusPercentage: "100%",
    bonusAmount: "AUD 500",
    description:
      "Evolution Gaming is the world's leading provider of live casino solutions. With their cutting-edge technology and immersive live dealer experience, Evolution Gaming sets the gold standard for online live casino gaming.",
    reviewLink: "/reviews/evolution-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 14,
    name: "NetEnt",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0f9112dcba64412a9879ce1d9588d138",
    bonus: "Slots",
    bonusPercentage: "30%",
    bonusAmount: "AUD 400",
    description:
      "NetEnt is a world-renowned game developer known for innovative, feature-rich slots with exceptional graphics. Their games consistently deliver high RTP rates and exciting bonus features for Australian players.",
    reviewLink: "/reviews/netent",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 15,
    name: "Red Tiger",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F30246c2dd4034e0a9bfd510466932b24",
    bonus: "Slots",
    bonusPercentage: "35%",
    bonusAmount: "AUD 450",
    description:
      "Red Tiger Gaming is known for delivering premium quality games with stunning visuals and innovative mechanics. Their slots are designed for maximum entertainment and fairness.",
    reviewLink: "/reviews/red-tiger",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 16,
    name: "Yggdrasil",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0f9112dcba64412a9879ce1d9588d138",
    bonus: "Slots",
    bonusPercentage: "40%",
    bonusAmount: "AUD 600",
    description:
      "Yggdrasil Gaming develops truly unique slot experiences with proprietary mechanics that set them apart. Their games feature advanced graphics and engaging gameplay that keeps players coming back.",
    reviewLink: "/reviews/yggdrasil",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 17,
    name: "Booongo",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9d1a8148f05547549c43fa2220f56fef",
    bonus: "Slots",
    bonusPercentage: "25%",
    bonusAmount: "AUD 350",
    description:
      "Popular in the Asia-Pacific market, BNG has also gained strong traction in the Australian market. Known for vibrant visuals and creative gameplay with mobile-optimized titles.",
    reviewLink: "/reviews/booongo",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 18,
    name: "Imperium Games",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0db731b988cd4a6681d0793a165b4270",
    bonus: "Slots",
    bonusPercentage: "30%",
    bonusAmount: "AUD 400",
    description:
      "A trusted name for Australian players, Imperium Games delivers culturally relevant games with rich storylines, bonus games, and high win potential.",
    reviewLink: "/reviews/imperium-games",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 19,
    name: "Vpower",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F411c79e09cbd446487ea5b3b4ab25990",
    bonus: "Slots",
    bonusPercentage: "28%",
    bonusAmount: "AUD 380",
    description:
      "An iconic brand in the slot game Australia scene, Vpower focuses on simplicity and fast gameplay. Its classic slots remain a go-to choice for players who enjoy retro-style games with real win potential.",
    reviewLink: "/reviews/vpower",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 20,
    name: "JILI",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdbdac6c97dc34011872a1bcffbd16e5e",
    bonus: "Slots & Fishing",
    bonusPercentage: "45%",
    bonusAmount: "AUD 700",
    description:
      "JILI Games is one of the rising stars in online slots, known for vibrant graphics, smooth gameplay, and creative bonus features. Popular titles like Golden Empire and Crazy 777 deliver high volatility action.",
    reviewLink: "/reviews/jili",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 21,
    name: "918Kiss / Kiss918",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/918kiss-300x90.png",
    bonus: "Slots",
    bonusPercentage: "22%",
    bonusAmount: "AUD 320",
    description:
      "A Malaysian favorite for years, 918Kiss is known for its smooth gameplay, classic slot feel, and high RTP rates. Players love titles like Great Blue and Highway Kings for their nostalgic yet rewarding experience.",
    reviewLink: "/reviews/918kiss",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 22,
    name: "Asia Gaming",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/asiagaming-300x90.png",
    bonus: "Live Casino",
    bonusPercentage: "40%",
    bonusAmount: "AUD 550",
    description:
      "Asia Gaming (AG) provides locally themed slot and live dealer games inspired by Asian myths and traditions. Their graphics and sounds appeal strongly to players who enjoy a cultural connection.",
    reviewLink: "/reviews/asia-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 23,
    name: "NextSpin",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/nextspin-300x90.png",
    bonus: "Fishing Games",
    bonusPercentage: "32%",
    bonusAmount: "AUD 420",
    description:
      "NextSpin specializes in exciting fishing games with immersive underwater themes. Their games feature smooth animations, engaging mechanics, and fair payouts that attract dedicated fishing game enthusiasts.",
    reviewLink: "/reviews/nextspin",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 24,
    name: "JDB",
    logo: "https://www.bk8.services/wp-content/uploads/2020/03/jdb-300x90.png",
    bonus: "Fishing Games",
    bonusPercentage: "38%",
    bonusAmount: "AUD 500",
    description:
      "JDB is known for producing engaging fishing games with high-quality graphics and smooth gameplay. Their titles are popular across Asia and have earned a strong following among fishing game aficionados.",
    reviewLink: "/reviews/jdb",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 25,
    name: "YL Gaming",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8fe8d9b9688a41e9b75595f028b4cda4",
    bonus: "Fishing Games",
    bonusPercentage: "35%",
    bonusAmount: "AUD 450",
    description:
      "A rising star in the fishing game Australia scene, YL Gaming is known for innovation and visual polish. Fishing 2 is one of their flagship titles, offering jackpot modes, high RTPs, and engaging user experience.",
    reviewLink: "/reviews/yl-gaming",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 26,
    name: "AE Live Casino",
    logo: "https://www.bk8.services/wp-content/uploads/2023/08/casino-ug.webp",
    bonus: "Live Casino",
    bonusPercentage: "50%",
    bonusAmount: "AUD 900",
    description:
      "AE Live Casino offers premium live dealer experiences with professional broadcasters and multiple table options. Players enjoy seamless streaming, professional dealers, and authentic casino atmosphere.",
    reviewLink: "/reviews/ae-live",
    playLink: "https://truedinkumbet.com/register",
    rating: 5,
  },
  {
    id: 27,
    name: "WM Live Casino",
    logo: "https://www.bk8.services/wp-content/uploads/2023/08/casino-wm.webp",
    bonus: "Live Casino",
    bonusPercentage: "55%",
    bonusAmount: "AUD 1,000",
    description:
      "WM Live Casino is known for its cutting-edge technology and premium live gaming experience. With multiple game options and competitive betting limits, WM attracts both casual and high-roller players.",
    reviewLink: "/reviews/wm-live",
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
            href="/reviews?page=3"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
          >
            3
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
