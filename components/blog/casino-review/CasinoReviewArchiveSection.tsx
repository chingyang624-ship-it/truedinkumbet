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
    title: "Have You Truedinkumbet? Why We Are Australia's Top Choice in 2025",
    description:
      "It's more than just a catchy slogan. It is a movement. In 2025, Australian punters are moving away from slow, traditional platforms and embracing the speed and privacy of Truedinkumbet. But what does it actually mean to 'True Dinkum Bet'? It means getting fair odds, instant payouts, and a no-nonsense gaming experience.",
    category: "Casino Review",
    date: "10-12-2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa8ed94b8a8364e74a9509e1afecd68fa",
    link: "/blog/casino-review/have-you-truedinkumbet/",
  },
  {
    id: 3,
    title: "Tips for Gambling Online With a Small Budget: The Aussie Guide",
    description:
      "Online gambling has become increasingly popular down under, offering a convenient and accessible way for Aussies to enjoy their favourite online pokies and live casino games. However, it's essential to approach online gambling cautiously, especially if you have a small budget. Managing a small budget for online pokies is crucial to avoid overspending.",
    category: "Casino Review",
    date: "16-12-2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa8ed94b8a8364e74a9509e1afecd68fa",
    link: "/blog/casino-review/tips-for-gambling-online-with-a-small-budget/",
  },
  {
    id: 4,
    title: "Do I Need To Declare My Casino Winnings To The ATO? (2025 Update)",
    description:
      "When you hit a massive jackpot on Truedinkumbet or win a high-stakes hand of Baccarat, the first thought is usually: 'I'm rich!' The second thought is often: 'Wait, does the ATO want a cut?' We have fantastic news for Aussie players. Unlike the US, Australia is a tax-haven for gamblers. In this guide, we explain why your winnings are yours to keep.",
    category: "Casino Tips / Taxation",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2023/03/Does-Malaysian-Tax-Gambling-Winnings-360x200.png",
    link: "/blog/casino-review/do-i-need-to-declare-my-casino-winnings-in-australia/",
  },
  {
    id: 5,
    title: "Truedinkumbet Lunar New Year Exclusive: The 2026 Year of the Horse Gold Bar Giveaway",
    description:
      "The Lunar New Year is approaching, and 2026 marks the Year of the Horse. Truedinkumbet is proud to announce our most prestigious campaign ever: The 24K Gold Bar Giveaway. This is not a digital reward or a bonus credit. This is a physical, solid gold asset delivered straight to your door. Discover how you can claim your fortune with our exclusive Year of the Horse promotion.",
    category: "Casino Review",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/12/BK8-Year-of-Rabbit-2023-Gold-Bar-Deposit-Reward-360x200.png",
    link: "/blog/casino-review/truedinkumbet-year-of-horse-2026-gold-bar-deposit-reward/",
  },
  {
    id: 6,
    title: "What is a Heylink or Joylink Bonus? Is It Safe for Aussies?",
    description:
      "If you frequent Australian online gambling groups on Facebook or Telegram, you have likely seen posts shouting: 'Click this Heylink for Free $10!' or 'Joylink Unlimited Credit!' There has been a massive rise in these 'Link-in-Bio' style bonuses in recent years. But what exactly are they? And more importantly, are they safe? In this guide, we uncover the truth.",
    category: "Casino Strategy / Security",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/11/What-is-a-Heylink-or-Joylink-Bonus-Casino-360x200.png",
    link: "/blog/casino-review/what-is-a-heylink-or-joylink-bonus-casino/",
  },
  {
    id: 7,
    title: "6 Tips for Playing Safely at Online Casinos in Australia",
    description:
      "Safety is the number one concern for Aussie punters. We all want to have a punt and maybe win some cash, but nobody wants to be taken for a ride by a dodgy operator. At Truedinkumbet, we believe in fair play. Here are our top 6 tips for playing safely online in Australia.",
    category: "Casino Safety / Guides",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/11/Tips-for-Playing-Safely-at-Online-Casinos-360x200.png",
    link: "/blog/casino-review/tips-for-playing-safely-at-online-casinos/",
  },
  {
    id: 8,
    title: "The Ultimate Showdown: Land-Based Casinos vs. Online Casinos in Australia (2025)",
    description:
      "Since the first poker machines appeared in Aussie pubs, gambling has been a core part of our culture. For decades, the pinnacle of this experience was visiting iconic venues like Crown Melbourne, Crown Perth, or The Star in Sydney and the Gold Coast. However, the digital revolution has shifted the battlefield. With the rise of premium online platforms like Truedinkumbet, players are voting with their wallets.",
    category: "Casino Strategy / Industry News",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/08/Genting-Casino-vs-Online-Casino-360x200.png",
    link: "/blog/casino-review/land-based-casino-vs-online-casino/",
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
    title: "10 Betting Systems For Better Winnings",
    description:
      "When it comes to gambling and betting, having a solid strategy can make a significant difference in your overall success. Many experienced gamblers rely on proven betting systems to maximize their winnings and minimize losses. In this comprehensive guide, we explore the top 10 betting systems that have stood the test of time [...]",
    category: "Casino Strategy",
    date: "15-07-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/07/Betting-Systems-360x200.png",
    link: "/blog/casino-review/10-betting-systems-for-better-winnings/",
  },
  {
    id: 11,
    title: "How To Earn Extra Money with Online Casino Affiliate",
    description:
      "As an affiliate, you may earn a lot of money by marketing online casinos and gambling websites. It's not only you that have these sentiments; a lot of others do. Given that it is an industry worth several billions of dollars, competition in the online casino industry is cutthroat. Affiliate commissions from online casinos may be a lucrative source of [...]",
    category: "Casino Review",
    date: "20-06-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/06/How-To-Earn-Extra-Money-with-Online-Casino-Affiliate-360x200.png",
    link: "/blog/casino-review/how-to-earn-extra-money-with-online-casino-affiliate/",
  },
  {
    id: 12,
    title: "Deposit Your Funds in Truedinkumbet With Debit/Credit Card (Visa/Mastercard)",
    description:
      "Truedinkumbet is a famous Online Casino in Australia that accepts a large variety of banking methods such as credit/debit cards (Visa and Mastercard) and cryptocurrencies. Customer service and attractive bonuses are critical factors in their success. Quality games are also important. Because of Truedinkumbet's user-friendly payment options, players may deposit and withdraw money from their casino wallets with ease. [...]",
    category: "Casino Review",
    date: "23-05-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/05/Deposit-Your-Funds-in-BK8-Casino-With-Touch-n-Go-360x200.png",
    link: "/blog/casino-review/deposit-your-funds-in-truedinkumbet-with-card/",
  },
  {
    id: 13,
    title: "7 Ways to Compare Online and Land-Based Casinos",
    description:
      "Choosing between online and land-based casinos can be challenging, especially for new players. Each option offers unique advantages and disadvantages. Understanding the key differences will help you make an informed decision about where to gamble. In this guide, we explore 7 important ways to compare online casinos with traditional brick-and-mortar establishments [...]",
    category: "Casino Review",
    date: "28-04-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/04/Compare-Online-Casinos-360x200.png",
    link: "/blog/casino-review/7-ways-to-compare-online-and-land-based-casinos/",
  },
  {
    id: 14,
    title: "What Is E-Wallet Casino Australia?",
    description:
      "E-wallets have revolutionized the way Australians gamble online, offering speed, security, and convenience that traditional payment methods simply cannot match. Whether you're interested in PayID, Skrill, or other digital payment solutions, this guide covers everything you need to know about e-wallet casinos in Australia [...]",
    category: "Casino Payment Methods",
    date: "19-04-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/04/E-Wallet-Casino-360x200.png",
    link: "/blog/casino-review/what-is-e-wallet-casino-australia/",
  },
  {
    id: 15,
    title: "Do I Need To Declare My Casino Winnings To The ATO In Australia?",
    description:
      "One of the most common questions from Australian gamblers is whether they need to declare their casino winnings to the ATO. The good news is that for most casual players, the answer is no. In this comprehensive guide, we explain the tax laws surrounding gambling winnings in Australia [...]",
    category: "Casino Taxation",
    date: "10-04-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/04/ATO-Tax-Gambling-360x200.png",
    link: "/blog/casino-review/do-i-need-to-declare-my-casino-winnings-to-the-ato/",
  },
  {
    id: 16,
    title: "How to Fully Utilize Your Superannuation in 2025",
    description:
      "Your superannuation is one of your most valuable financial assets. In 2025, there are more ways than ever to make the most of your super. Whether you're nearing retirement or just starting out, understanding how to effectively utilize your superannuation can significantly impact your financial future [...]",
    category: "Lifestyle / Finance",
    date: "15-03-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/03/Superannuation-Guide-360x200.png",
    link: "/blog/casino-review/how-to-fully-utilize-your-superannuation-in-2025/",
  },
  {
    id: 17,
    title: "The Most Important Pokies Winners In History",
    description:
      "Slot machines are simple to play and maybe played for little amounts, yet they have been responsible for some of the most significant casino victories in history. The introduction of progressive jackpots has resulted in an exponential rise in the amount of money that a player may win in a single spinning of the reels. [...]",
    category: "Casino Review",
    date: "21-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/The-Most-Important-Slot-Machine-Winners-In-History-360x200.png",
    link: "/blog/casino-review/the-most-important-slot-machine-winners-in-history/",
  },
  {
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 22,
    title: "Kelly Smith Becomes Truedinkumbet's Brand Ambassador",
    description:
      "In an exciting development for the online gaming industry, Truedinkumbet has announced that Kelly Smith, the legendary football legend and media personality, has become the official brand ambassador. Smith brings her passion for excellence and competitive spirit to the Truedinkumbet community, inspiring players to embrace the thrill of online gaming [...]",
    category: "Casino News",
    date: "05-10-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/10/Kelly-Smith-Brand-Ambassador-360x200.png",
    link: "/blog/casino-review/kelly-smith-becomes-truedinkumbet-brand-ambassador/",
  },
  {
    id: 23,
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
    id: 24,
    title: "Which is Better: Online Casinos versus Land-Based Casinos",
    description:
      "The debate between online casinos and traditional brick-and-mortar establishments has been ongoing for years. Both offer unique experiences and advantages. In this comprehensive comparison, we explore the pros and cons of each to help you decide which option is right for you [...]",
    category: "Casino Review",
    date: "15-08-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/08/Online-vs-Land-Based-Casinos-360x200.png",
    link: "/blog/casino-review/which-is-better-online-casinos-versus-land-based-casinos/",
  },
  {
    id: 25,
    title: "Mistakes to Avoid When Playing Online Gambling",
    description:
      "Online gambling can be a fun and exciting pastime, but making common mistakes can quickly turn it into a costly experience. Whether you're a beginner or an experienced player, understanding these pitfalls is essential to protecting your bankroll and enjoying responsible gaming [...]",
    category: "Casino Tips",
    date: "22-07-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/07/Mistakes-Gambling-360x200.png",
    link: "/blog/casino-review/mistakes-to-avoid-when-playing-online-gambling/",
  },
  {
    id: 26,
    title: "Online Gambling Trends: 2021",
    description:
      "As we move deeper into 2021, the online gambling industry continues to evolve with new trends, technologies, and player preferences. From cryptocurrency integration to live streaming and beyond, this guide explores the most significant trends shaping the future of online gaming [...]",
    category: "Casino Industry News",
    date: "30-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/06/Gambling-Trends-2021-360x200.png",
    link: "/blog/casino-review/online-gambling-trends-2021/",
  },
  {
    id: 27,
    title: "How to Deposit in an Online Casino in Australia: The Ultimate Guide",
    description:
      "Depositing funds into your online casino account should be quick and straightforward. However, with so many payment methods available, it can be confusing to choose the right one. This comprehensive guide covers all available deposit options for Australian players, including fees, processing times, and security considerations [...]",
    category: "Casino Guides",
    date: "10-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/06/How-to-Deposit-Online-Casino-360x200.png",
    link: "/blog/casino-review/how-to-deposit-in-an-online-casino-australia/",
  },
  {
    id: 29,
    title: "How Old Should I Be To Use An Online Casino Service in Australia?",
    description:
      "In Australia, the legal gambling age is 18 years old. Unlike some countries where the age might be 21 or vary based on religion, Australia has a strict, uniform rule across all states and territories. [...]",
    category: "Casino Review",
    date: "15-01-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/How-Old-Should-I-Be-Online-Casino-Australia-360x200.png",
    link: "/blog/casino-review/how-old-should-i-be-to-use-an-online-casino-service/",
  },
  {
    id: 30,
    title: "The #1 Crypto Casino in Australia: Why Truedinkumbet Accepts USDT & Bitcoin",
    description:
      "Banks blocking your deposits? Switch to Crypto! Discover why Truedinkumbet is Australia's premier Crypto Casino, offering instant USDT withdrawals and anonymous gaming. No bank blocks, maximum privacy.",
    category: "Cryptocurrency Casino / Tech",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/Rise-of-Crypto-Casinos-USDT-Gambling-360x200.png",
    link: "/blog/casino-review/the-first-online-casino-australia-that-accepts-cryptocurrency/",
  },
  {
    id: 31,
    title: "How is The Gambling Industry in Australia?",
    description:
      "The gambling industry is not far from a national sport in Australia; almost every other individual is involved in it, whether it's the pokies or sports betting. However, some things have changed over the decade. [...]",
    category: "Casino Review",
    date: "21-01-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/How-Is-Gambling-Industry-Australia-360x200.png",
    link: "/blog/casino-review/how-is-the-gambling-industry-in-australia/",
  },
  {
    id: 32,
    title: "Top 5 E-Wallets to Use in Online Casinos Australia",
    description:
      "When it comes to online gambling in Australia, choosing the right e-wallet can make all the difference. E-wallets offer speed, security, and convenience that traditional payment methods simply cannot match. In this guide, we explore the top 5 e-wallets trusted by Australian casino players in 2025. [...]",
    category: "Casino Review / Payment Methods",
    date: "22-01-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/Top-5-E-Wallets-Casino-Australia-360x200.png",
    link: "/blog/casino-review/top-5-e-wallets-to-use-in-casino-australia/",
  },
  {
    id: 33,
    title: "How to Smartly Spend Your ATO Tax Refund in 2025",
    description:
      "It's that time of the year again. You have lodged your return with the ATO (Australian Taxation Office), and suddenly, a nice lump sum of cash hits your bank account. For many Aussies, a Tax Refund feels like 'free money.' But instead of blowing it all on overpriced avocado toast or bills, why not plan how to use it effectively? In this guide, we explore the best ways to maximize your 2025 Tax Refund.",
    category: "Lifestyle / Finance",
    date: "10-12-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/01/How-Is-Gambling-Industry-Australia-360x200.png",
    link: "/blog/casino-review/how-to-smartly-spend-your-ato-tax-refund-in-2025/",
  },
  {
    id: 34,
    title: "The Evolution of Pokies: From Mechanical Machines to Digital Gaming",
    description:
      "Australian pokies have come a long way since the first mechanical machines. Today's online pokies offer incredible graphics, immersive themes, and better odds than ever before. Discover how technology has transformed the pokies industry and what that means for players in 2025 [...]",
    category: "Casino Review / Gaming",
    date: "08-02-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/02/Pokies-Evolution-360x200.png",
    link: "/blog/casino-review/the-evolution-of-pokies-digital-gaming/",
  },
  {
    id: 35,
    title: "Live Dealer Games: The Future of Online Casino Entertainment",
    description:
      "Live dealer games have revolutionized online gambling by bringing the casino experience directly to your home. With real dealers, real cards, and real-time interaction, live games offer an authentic experience that virtual games cannot match. Learn why they're becoming increasingly popular in Australia [...]",
    category: "Casino Review / Live Games",
    date: "05-02-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/02/Live-Dealer-Games-360x200.png",
    link: "/blog/casino-review/live-dealer-games-future-online-casino/",
  },
  {
    id: 36,
    title: "VIP Programs at Online Casinos: Are They Worth It?",
    description:
      "Most online casinos offer VIP programs with exclusive perks, higher withdrawal limits, and better bonuses. But are they actually worth joining? In this guide, we analyze the benefits and drawbacks of VIP programs at leading online casinos, including Truedinkumbet [...]",
    category: "Casino Strategy",
    date: "02-02-2025",
    image:
      "https://www.bk8.services/wp-content/uploads/2025/02/VIP-Programs-Casino-360x200.png",
    link: "/blog/casino-review/vip-programs-online-casinos/",
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
  const itemsPerPage = 20;
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
