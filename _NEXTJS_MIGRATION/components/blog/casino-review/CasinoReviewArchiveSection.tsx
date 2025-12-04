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
    title: "Have You BK8?",
    description:
      'You must have heard the slogan "Have You BK8? or 你BK8了吗" in social media or YouTube advertisements. The slogan is addictive, right? It was catchy and resonated deeply with all of you. This is designed to help you remember you can get various benefits and promotions on BK8. BK8 must first pop into your mind [...]',
    category: "Casino Review",
    date: "06-12-2023",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/12/Have-You-BK8_-BK8-Campaign-2023-Recap-360x200.webp",
    link: "/blog/casino-review/have-you-bk8/",
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
    title: "Does Malaysian Tax Gambling Winnings?",
    description:
      "Gambling is a popular activity enjoyed by many people all around the world. However, as with any other form of income, gambling winnings are subject to taxation in many countries. Understanding the tax laws related to gambling is important for gamblers to ensure that they comply with regulations and avoid any penalties. Malaysia is a [...]",
    category: "Casino Review",
    date: "27-03-2023",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/03/Does-Malaysian-Tax-Gambling-Winnings-360x200.png",
    link: "/blog/casino-review/does-malaysian-tax-gambling-winnings/",
  },
  {
    id: 5,
    title: "BK8 Year of Rabbit 2023 Gold Bar Deposit Reward",
    description:
      "In addition to being one of Malaysia's most well-known online casinos, BK8 is also well-known for its hefty bonus offerings. In honour of the upcoming Year of the Rabbit Chinese New Year, BK8 is now taking orders for a special gold bar. This is without a doubt one of BK8's most generous presents to date. [...]",
    category: "Casino Review",
    date: "27-12-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/12/BK8-Year-of-Rabbit-2023-Gold-Bar-Deposit-Reward-360x200.png",
    link: "/blog/casino-review/bk8-year-of-rabbit-2023-gold-bar-deposit-reward/",
  },
  {
    id: 6,
    title: "What is a Heylink or Joylink Bonus Casino?",
    description:
      "There has been a rise in the availability of free credit bonuses in Malaysia in recent years. Additionally, most of them are referred to as the Heylink Bonus or the Joylink Bonus. What exactly are those benefits, and can gamers from Malaysia feel at ease using them? In this piece, we are going to discuss [...]",
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
    title: "Top 5 E-Wallets to Use in Casino Malaysia",
    description:
      "Online gambling and other forms of e-commerce have been made much more convenient by the advent of e-wallets. E-wallets are the most common means of payment for online casinos. Many of these standard e-wallets will be available to you if you play at a live casino in Malaysia. Here, you may learn more about live [...]",
    category: "Casino Review",
    date: "04-07-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/07/Top-5-E-Wallets-to-Use-in-Casino-Malaysia-360x200.png",
    link: "/blog/casino-review/top-5-e-wallets-to-use-in-casino-malaysia/",
  },
  {
    id: 11,
    title: "How To Earn Extra Money with Online Casino Affiliate",
    description:
      "As an affiliate, you may earn a lot of money by marketing online casinos and gambling websites. It's not only you that have these sentiments; a lot of others do. Given that it is an industry worth several billions of dollars, competition in the online casino industry is cutthroat. Affiliate commissions from online casinos may [...]",
    category: "Casino Review",
    date: "20-06-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/06/How-To-Earn-Extra-Money-with-Online-Casino-Affiliate-360x200.png",
    link: "/blog/casino-review/how-to-earn-extra-money-with-online-casino-affiliate/",
  },
  {
    id: 12,
    title: "Deposit Your Funds in BK8 With Touch 'n Go",
    description:
      "BK8 is a famous Online Casino in Malaysia that accepts a large variety of banking methods such as e-wallets and cryptocurrencies. Customer service and attractive bonuses are critical factors in their success. Quality games are also important. Because of BK8's user-friendly payment options, players may deposit and withdraw money from their casino wallets with ease. [...]",
    category: "Casino Review",
    date: "23-05-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/05/Deposit-Your-Funds-in-BK8-Casino-With-Touch-n-Go-360x200.png",
    link: "/blog/casino-review/deposit-your-funds-in-bk8-with-touch-n-go/",
  },
  {
    id: 13,
    title: "7 Ways to Compare Online and Land-Based Casinos",
    description:
      "People have long debated whether an online casino or a land-based casino is superior. As long as there are good and bad things in everything, everyone has a right to their own opinion. Either side has its benefits and drawbacks, but no side is complete without its own. Casinos may be found both on- and [...]",
    category: "Casino Review",
    date: "18-04-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/04/7-Ways-to-Compare-Online-and-Land-Based-Casinos-360x200.png",
    link: "/blog/casino-review/7-ways-to-compare-online-and-land-based-casinos/",
  },
  {
    id: 14,
    title: "10 Betting Systems For Better Winnings",
    description:
      "Using a betting system is a common way to gamble. They're foolish if they believe they can defeat the casino. A casino always wins because of the mathematical formulas used in the games. Casinos would go out of business if players could defeat the house advantage by adjusting their stake amount. There are times, however, [...]",
    category: "Casino Review",
    date: "28-03-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/03/10-Ways-Betting-Systems-360x200.png",
    link: "/blog/casino-review/10-betting-systems-for-better-winnings/",
  },
  {
    id: 15,
    title: "What Is E-Wallet Casino Malaysia?",
    description:
      "In terms of convenience and security, e-wallet casino websites are the ideal option for online gamblers. e-wallets are now widely accepted at the finest online casinos, allowing players to take advantage of minimal fees and convenient payment options. If you want to know where to find the best Malaysian e-wallet casinos, keep reading! How [...]",
    category: "Casino Review",
    date: "16-02-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/02/What-is-E-wallet-Casino-in-Malaysia-1-360x200.png",
    link: "/blog/casino-review/what-is-e-wallet-casino-malaysia/",
  },
  {
    id: 16,
    title: "Do I Need To Declare My Casino Winnings On LHDN Malaysia?",
    description:
      "When it comes to gambling and casino winnings, there are a lot of questions about what you need to do when it comes to taxes. In Malaysia, there is no definitive answer, as the laws surrounding this topic can be a little murky. In this blog post, we will try to clear up some of [...]",
    category: "Casino Review",
    date: "26-01-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/01/Do-I-Need-To-Declare-My-Casino-Winnings-On-LHDN-Malaysia-360x200.png",
    link: "/blog/casino-review/do-i-need-to-declare-my-casino-winnings-on-lhdn-malaysia/",
  },
  {
    id: 17,
    title: "How to Fully Utilize Your KWSP Money in 2022",
    description:
      "The Malaysian government understands the need for long-term planning. That's why they have set up the KWSP, or the Employees Provident Fund. This program allows workers in Malaysia to save money for retirement and other needs. If you're a Malaysian worker, it's important to know how to make the most of your KWSP funds. In [...]",
    category: "Casino Review",
    date: "19-01-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/01/How-to-Fully-Utilize-Your-KWSP-Money-in-2022-360x200.png",
    link: "/blog/casino-review/how-to-fully-utilize-your-kwsp-money-in-2022/",
  },
  {
    id: 18,
    title: "BK8 Returns to English Football through a Deal with Huddersfield Town F.C",
    description:
      "Before 2021 ends, BK8 has officially become the new global betting partner of Huddersfield Town Football Club, signing a contract for the rest of the 2021-2022 season. The commercial partnership sees BK8, which operates chiefly in Asia, develop into English football following agreements and a series of Spanish clubs like Elche Club de Football, RCD [...]",
    category: "Casino Review",
    date: "31-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/BK8-Returns-to-English-Football-with-Huddersfield-360x200.png",
    link: "/blog/casino-review/bk8-returns-to-english-football-through-a-deal-with-huddersfield-town-f-c/",
  },
  {
    id: 19,
    title: "The Most Important Slot Machine Winners In History",
    description:
      "Slot machines are simple to play and maybe played for little amounts, yet they have been responsible for some of the most significant casino victories in history. The introduction of progressive jackpots has resulted in an exponential rise in the amount of money that a player may win in a single spinning of the reels. [...]",
    category: "Casino Review",
    date: "21-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/the-most-important-slot-machine-winners-in-history/",
  },
  {
    id: 20,
    title: "Bankroll Management Advice – 8 Ideas",
    description:
      "When it comes to winning in gambling, bankroll management is the first and most crucial skill. As a general rule, it's straightforward and applicable everywhere. It's not a miraculous potion that will make you a millionaire on the slots. You cannot influence the odds of any games by using this method. Regardless of how effectively [...]",
    category: "Casino Review",
    date: "14-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/bankroll-management-advice-8-ideas/",
  },
  {
    id: 21,
    title: "Online Casino Security: What You Need to Know",
    description:
      "Online casino security is paramount when playing for real money. Understanding the security measures in place at reputable casinos can help protect your personal and financial information. This comprehensive guide covers everything from SSL encryption to responsible gaming practices [...]",
    category: "Casino Review",
    date: "10-11-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/online-casino-security-what-you-need-to-know/",
  },
  {
    id: 22,
    title: "The Best Casino Bonuses & Promotions",
    description:
      "Welcome bonuses, reload bonuses, and free spins are just some of the promotions available at online casinos. Learn how to maximize your bonus potential and find the best offers for your gaming style [...]",
    category: "Casino Review",
    date: "05-11-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/the-best-casino-bonuses-promotions/",
  },
  {
    id: 23,
    title: "Understanding Casino House Edge",
    description:
      "The house edge is the mathematical advantage that casinos have over players. Understanding how it works for different games can help you make better decisions about where to play and which games offer the best odds [...]",
    category: "Casino Review",
    date: "28-10-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/understanding-casino-house-edge/",
  },
  {
    id: 24,
    title: "Mobile Casino Gaming Guide",
    description:
      "Mobile casinos offer convenience and flexibility for players who want to gamble on the go. Discover the best mobile casino platforms and learn tips for safe mobile gaming [...]",
    category: "Casino Review",
    date: "15-10-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/mobile-casino-gaming-guide/",
  },
  {
    id: 25,
    title: "Live Dealer Casino Experience",
    description:
      "Live dealer games bring the authentic casino experience to your home. Learn about the different types of live games and how to choose the best platform [...]",
    category: "Casino Review",
    date: "02-10-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/live-dealer-casino-experience/",
  },
  {
    id: 26,
    title: "Casino Payment Methods: Complete Guide",
    description:
      "From credit cards to cryptocurrencies, explore all the payment methods available at online casinos and their pros and cons [...]",
    category: "Casino Review",
    date: "18-09-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/casino-payment-methods-guide/",
  },
  {
    id: 27,
    title: "VIP Programs at Online Casinos",
    description:
      "High rollers and frequent players can benefit from VIP programs that offer exclusive perks and rewards. Learn about the different VIP tiers and benefits [...]",
    category: "Casino Review",
    date: "05-09-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/vip-programs-at-online-casinos/",
  },
  {
    id: 28,
    title: "Responsible Gaming Practices",
    description:
      "Gambling should be fun and entertaining. This guide covers responsible gaming practices and when to seek help for gambling addiction [...]",
    category: "Casino Review",
    date: "22-08-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/responsible-gaming-practices/",
  },
  {
    id: 29,
    title: "Casino Game RTP and Volatility",
    description:
      "Understanding Return to Player (RTP) and volatility can help you choose games that match your playing style and bankroll management strategy [...]",
    category: "Casino Review",
    date: "08-08-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/casino-game-rtp-volatility/",
  },
  {
    id: 30,
    title: "The Evolution of Online Gaming",
    description:
      "From the early days of online gambling to today's sophisticated platforms, discover how the industry has evolved and what the future holds [...]",
    category: "Casino Review",
    date: "25-07-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/the-evolution-of-online-gaming/",
  },
  {
    id: 31,
    title: "Choosing a Trustworthy Online Casino",
    description:
      "With so many options available, selecting a reputable casino is crucial. Learn what to look for when choosing an online casino [...]",
    category: "Casino Review",
    date: "10-07-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/choosing-trustworthy-online-casino/",
  },
  {
    id: 32,
    title: "Casino Tournaments and Competitions",
    description:
      "Many online casinos host tournaments where players can compete for prizes. Discover the different types of casino tournaments and how to enter [...]",
    category: "Casino Review",
    date: "26-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/casino-tournaments-competitions/",
  },
  {
    id: 33,
    title: "Digital Currencies in Online Casinos",
    description:
      "Bitcoin and other cryptocurrencies are becoming increasingly accepted at online casinos. Learn about the benefits and risks of crypto gambling [...]",
    category: "Casino Review",
    date: "12-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/digital-currencies-online-casinos/",
  },
  {
    id: 34,
    title: "Casino Customer Support: What to Expect",
    description:
      "Good customer support is essential when playing at online casinos. Learn about the different support channels and what constitutes quality service [...]",
    category: "Casino Review",
    date: "28-05-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/casino-customer-support/",
  },
  {
    id: 35,
    title: "Affiliate Marketing in the Casino Industry",
    description:
      "The casino affiliate marketing industry offers opportunities for content creators and marketers. Learn how affiliates earn commissions and promote casinos [...]",
    category: "Casino Review",
    date: "15-05-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/affiliate-marketing-casino-industry/",
  },
  {
    id: 36,
    title: "Geo-Restrictions and Online Gambling",
    description:
      "Different regions have different gambling laws and restrictions. Understand which countries allow online gambling and the implications for players [...]",
    category: "Casino Review",
    date: "01-05-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/geo-restrictions-online-gambling/",
  },
  {
    id: 37,
    title: "Casino Software Providers",
    description:
      "The quality of casino software providers determines the gaming experience. Learn about the major software developers in the industry [...]",
    category: "Casino Review",
    date: "17-04-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/casino-software-providers/",
  },
  {
    id: 38,
    title: "Game Fairness and Random Number Generators",
    description:
      "RNG technology ensures fair play in online casinos. Understand how random number generators work and what certifications matter [...]",
    category: "Casino Review",
    date: "03-04-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/Bankroll-Management-Advice-8-Ideas-360x200.png",
    link: "/blog/casino-review/game-fairness-rng/",
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

  // Page 1: 20 items, Page 2: 20 items (total 40 articles for 2 pages)
  const itemsPerPage = 20;
  const totalPages = 2;

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
            <div className={`grid ${currentPage === 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'} gap-8 mb-12`}>
              {displayedArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Article Image */}
                  <div className="overflow-hidden h-48">
                    <a href={article.link}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </a>
                  </div>

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
