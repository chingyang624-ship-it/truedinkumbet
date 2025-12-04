"use client";

import { useState } from "react";

interface CasinoReviewArticle {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

const casinoReviewArticles: CasinoReviewArticle[] = [
  {
    id: 1,
    title: "What is Cryptocurrency Casino?",
    description:
      "Online gambling is evolving, and cryptocurrency casinos are at the forefront of this change. With digital assets becoming more mainstream, more players are asking: What is a cryptocurrency casino, and why should I use one? In this guide, we break down what makes crypto casinos unique, their benefits, and what you need to know before [...]",
    category: "Casino Review",
    date: "28-01-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/10/What-is-Cryptocurrency-Casino-360x200.jpg",
    link: "/blog/casino-review/what-is-cryptocurrency-casino/",
  },
  {
    id: 2,
    title: "Have You Truedinkumbet?",
    description:
      'You must have heard the slogan "Have You Truedinkumbet?" in social media or YouTube advertisements. The slogan is addictive, right? It was catchy and resonated deeply with all of you. This is designed to help you remember you can get various benefits and promotions on Truedinkumbet. Truedinkumbet must first pop into your mind [...]',
    category: "Casino Review",
    date: "06-12-2023",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/12/Have-You-BK8_-BK8-Campaign-2023-Recap-360x200.webp",
    link: "/blog/casino-review/have-you-truedinkumbet/",
  },
  {
    id: 3,
    title: "Tips for Gambling Online With a Small Budget",
    description:
      "Online gambling has become increasingly popular over the years, offering a convenient and accessible way for people to enjoy their favourite casino games from their homes. However, it's essential to approach online gambling cautiously, especially if you have a small budget. Managing a small budget for online gambling is crucial to avoid overspending and potential [...]",
    category: "Casino Review",
    date: "16-05-2023",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/05/Tips-for-Gambling-Online-With-a-Small-Budget.png",
    link: "/blog/casino-review/tips-for-gambling-online-with-a-small-budget/",
  },
  {
    id: 4,
    title: "Does Australian Tax Gambling Winnings?",
    description:
      "Gambling is a popular activity enjoyed by many people all around the world. However, as with any other form of income, gambling winnings are subject to taxation in many countries. Understanding the tax laws related to gambling is important for gamblers to ensure that they comply with regulations and avoid any penalties. Australia is a [...]",
    category: "Casino Review",
    date: "27-03-2023",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/03/Does-Malaysian-Tax-Gambling-Winnings-360x200.png",
    link: "/blog/casino-review/does-australian-tax-gambling-winnings/",
  },
  {
    id: 5,
    title: "Truedinkumbet Year of Rabbit 2023 Gold Bar Deposit Reward",
    description:
      "In addition to being one of Australia's most well-known online casinos, Truedinkumbet is also well-known for its hefty bonus offerings. In honour of the upcoming Year of the Rabbit Chinese New Year, Truedinkumbet is now taking orders for a special gold bar. This is without a doubt one of Truedinkumbet's most generous presents to date. [...]",
    category: "Casino Review",
    date: "27-12-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/12/BK8-Year-of-Rabbit-2023-Gold-Bar-Deposit-Reward-360x200.png",
    link: "/blog/casino-review/truedinkumbet-year-of-rabbit-2023-gold-bar-deposit-reward/",
  },
  {
    id: 6,
    title: "What is a Heylink or Joylink Bonus Casino?",
    description:
      "There has been a rise in the availability of free credit bonuses in Australia in recent years. Additionally, most of them are referred to as the Heylink Bonus or the Joylink Bonus. What exactly are those benefits, and can gamers from Australia feel at ease using them? In this piece, we are going to discuss [...]",
    category: "Casino Review",
    date: "14-11-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/11/What-is-a-Heylink-or-Joylink-Bonus-Casino-360x200.png",
    link: "/blog/casino-review/what-is-a-heylink-or-joylink-bonus-casino/",
  },
  {
    id: 7,
    title: "Tips for Playing Safely at Online Casinos",
    description:
      "The safety of your personal information is of paramount importance while gambling online. If you play smart and don't get scammed, gambling in an online casino may be a great way to pass the time and perhaps earn some additional cash, but only if you don't get taken advantage of. It's one thing to lose [...]",
    category: "Casino Review",
    date: "02-11-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/11/Tips-for-Playing-Safely-at-Online-Casinos-360x200.png",
    link: "/blog/casino-review/tips-for-playing-safely-at-online-casinos/",
  },
  {
    id: 8,
    title: "Genting Casino vs Online Casino",
    description:
      "Since the dawn of time, gambling and casinos have been an integral part of our society. For hundreds of years, people have delighted in placing bets on sporting events, casino games, and some other lotteries. However, throughout time, there have been numerous alterations. The gaming industry has seen a tremendous change since the internet's arrival. [...]",
    category: "Casino Review",
    date: "22-08-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/08/Genting-Casino-vs-Online-Casino-360x200.png",
    link: "/blog/casino-review/genting-casino-vs-online-casino/",
  },
  {
    id: 9,
    title: "What is Gaming Curacao?",
    description:
      "Identifying a good online casino may be a challenge. It's possible that those who are new to the world of online gambling may find it challenging to comprehend all of the accessible possibilities. It might be tough to discern which casinos can be trusted since there are so many of them now operating online. A [...]",
    category: "Casino Review",
    date: "04-08-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/08/What-is-Gaming-Curacao-360x200.png",
    link: "/blog/casino-review/what-is-gaming-curacao/",
  },
  {
    id: 10,
    title: "Top 5 E-Wallets to Use in Casino Australia",
    description:
      "Online gambling and other forms of e-commerce have been made much more convenient by the advent of e-wallets. E-wallets are the most common means of payment for online casinos. Many of these standard e-wallets will be available to you if you play at a live casino in Australia. Here, you may learn more about live [...]",
    category: "Casino Review",
    date: "04-07-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/07/Top-5-E-Wallets-to-Use-in-Casino-Malaysia-360x200.png",
    link: "/blog/casino-review/top-5-e-wallets-to-use-in-casino-australia/",
  },
  {
    id: 11,
    title: "Bankroll Management Advice – 8 Ideas",
    description:
      "When it comes to winning in gambling, bankroll management is the first and most crucial skill. As a general rule, it's straightforward and applicable everywhere. It's not a miraculous potion that will make you a millionaire on the slots. You cannot influence the odds of any games by using this method. [...]",
    category: "Casino Review",
    date: "14-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-360x200.png",
    link: "/blog/casino-review/bankroll-management-advice-8-ideas/",
  },
  {
    id: 12,
    title: "What Is the Process for Online Casino Bonuses?",
    description:
      "When discussing an online casino, it's impossible to avoid bringing up the bonuses and incentives the casino provides. Because they bring in new consumers and keep existing ones coming back, promotional offers have become critical for online casinos. First-time online gamblers should learn about casino bonuses and other safety measures before they risk their money. [...]",
    category: "Casino Review",
    date: "23-11-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/11/What-Is-the-Process-for-Online-Casino-Bonuses-360x200.png",
    link: "/blog/casino-review/what-is-the-process-for-online-casino-bonuses/",
  },
  {
    id: 13,
    title: "You Should Stop Gambling If You See Any Of These 6 Signs",
    description:
      "It's easy to get addicted to gambling when the prize money is genuine. But don't be misled by the headline. Throughout my whole life, gambling has and will continue to play a significant role. The last thing we want, though, is for any of you to get influenced by it and start engaging in risky behaviours. [...]",
    category: "Casino Review",
    date: "09-11-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/11/You-Should-Stop-Gambling-If-You-See-Any-Of-These-6-Signs-360x200.png",
    link: "/blog/casino-review/you-should-stop-gambling-if-you-see-any-of-these-6-signs/",
  },
  {
    id: 16,
    title: "Choose the Best Casino: How Do You Compare Online Casinos?",
    description:
      "The growth of online casinos was one of the most successful business stories in recent years. For around two decades, these platforms have gone from fringe interest to massive revenue producers that raised $53.7 billion in 2019 alone! It should increase by at least 11% by 2027. [...]",
    category: "Casino Review",
    date: "07-09-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/09/How-Do-You-Compare-Online-Casinos-360x200.png",
    link: "/blog/casino-review/choose-the-best-casino-how-do-you-compare-online-casinos/",
  },
  {
    id: 17,
    title: "How Crypto Gambling is Regulated Around the World",
    description:
      "The emergence of crypto-gambling and betting received different perceptions from various countries worldwide. The most defined stance came from the Japanese. Recently, the House of Representatives in Japan released a new regulation for crypto-asset, which affects the exchange and custodians of the digital currency. [...]",
    category: "Casino Review",
    date: "09-12-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/12/How-Crypto-Gambling-Regulated-World-360x200.png",
    link: "/blog/casino-review/how-crypto-gambling-is-regulated-around-the-world/",
  },
  {
    id: 18,
    title: "How Old Should I Be To Use An Online Casino Service in Australia?",
    description:
      "In Australia, the legal gambling age is 18 years old. Unlike some countries where the age might be 21 or vary based on religion, Australia has a strict, uniform rule across all states and territories. [...]",
    category: "Casino Review",
    date: "15-01-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/How-Old-Should-I-Be-Online-Casino-Australia-360x200.png",
    link: "/blog/casino-review/how-old-should-i-be-to-use-an-online-casino-service/",
  },
];

const recentPosts = [
  {
    title: "What is Cryptocurrency Casino?",
    link: "/blog/casino-review/what-is-cryptocurrency-casino/",
  },
  {
    title: "Texas Hold'em Poker Hands Rankings",
    link: "/blog/poker-review/texas-holdem-poker-hands-rankings/",
  },
  {
    title: "How to Win at Keno: 5 Tips that Actually Work",
    link: "/blog/lottery-review/how-to-win-at-keno-5-tips-that-actually-work/",
  },
  {
    title: "How To Play Online Poker: A Step-by-Step Guide",
    link: "/blog/poker-review/how-to-play-online-poker-a-step-by-step-guide/",
  },
  {
    title: "Online Roulette Tips 2025: How to Play Like a Pro",
    link: "/blog/live-casino-review/online-roulette-tips-2025-how-to-play-like-a-pro/",
  },
];

const categories = [
  {
    name: "2023 Chinese Zodiac Luck",
    link: "/blog/category/2023-chinese-zodiac-luck/",
  },
  {
    name: "Casino Review",
    link: "/blog/category/casino-review/",
    active: true,
  },
  {
    name: "Cryptocurrency Casino",
    link: "/blog/category/cryptocurrency-casino/",
  },
  {
    name: "Esports Review",
    link: "/blog/category/esports-review/",
  },
  {
    name: "Fishing Review",
    link: "/blog/category/fishing-review/",
  },
  {
    name: "Live Casino Review",
    link: "/blog/category/live-casino-review/",
  },
  {
    name: "Lottery Review",
    link: "/blog/category/lottery-review/",
  },
  {
    name: "Poker Review",
    link: "/blog/category/poker-review/",
  },
  {
    name: "Slots Review",
    link: "/blog/category/slots-review/",
  },
  {
    name: "Sports Review",
    link: "/blog/category/sports-review/",
  },
];

export default function CasinoReviewArchiveSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(casinoReviewArticles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedArticles = casinoReviewArticles.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-12 text-center lg:text-left">
              Casino Review
            </h1>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {displayedArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <a
                        href={`/blog/category/casino-review/`}
                        className="text-sm font-bold text-orange-500 hover:text-orange-600"
                      >
                        {article.category}
                      </a>
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3">
                      <a
                        href={article.link}
                        className="text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        {article.title}
                      </a>
                    </h2>

                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    <a
                      href={article.link}
                      className="text-red-600 hover:text-red-700 font-bold text-sm"
                    >
                      read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mb-12">
                {currentPage === 1 ? (
                  <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded opacity-40">
                    1
                  </span>
                ) : (
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    « Previous
                  </button>
                )}

                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`inline-block px-4 py-2 rounded transition-colors ${
                      currentPage === idx + 1
                        ? "bg-gray-800 text-white opacity-40"
                        : "bg-gray-800 text-white hover:bg-gray-900"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    Next »
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-orange-500">
                ⭐️Recent Post⭐️
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post, idx) => (
                  <li key={idx}>
                    <a
                      href={post.link}
                      className="text-orange-500 hover:text-orange-600 transition-colors text-sm"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-orange-500">
                📁Categories📁
              </h3>
              <ul className="space-y-2">
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <a
                      href={category.link}
                      className={`text-sm transition-colors ${
                        category.active
                          ? "text-orange-500 font-bold"
                          : "text-orange-500 hover:text-orange-600"
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
