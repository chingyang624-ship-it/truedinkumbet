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
    title: "Deposit Your Funds in Truedinkumbet With Touch 'n Go",
    description:
      "Truedinkumbet is a famous Online Casino in Australia that accepts a large variety of banking methods such as e-wallets and cryptocurrencies. Customer service and attractive bonuses are critical factors in their success. Quality games are also important. Because of Truedinkumbet's user-friendly payment options, players may deposit and withdraw money from their casino wallets with ease. [...]",
    category: "Casino Review",
    date: "23-05-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/05/Deposit-Your-Funds-in-BK8-Casino-With-Touch-n-Go-360x200.png",
    link: "/blog/casino-review/deposit-your-funds-in-truedinkumbet-with-touch-n-go/",
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
    title: "What Is E-Wallet Casino Australia?",
    description:
      "In terms of convenience and security, e-wallet casino websites are the ideal option for online gamblers. e-wallets are now widely accepted at the finest online casinos, allowing players to take advantage of minimal fees and convenient payment options. If you want to know where to find the best Australian e-wallet casinos, keep reading! How [...]",
    category: "Casino Review",
    date: "16-02-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/02/What-is-E-wallet-Casino-in-Malaysia-1-360x200.png",
    link: "/blog/casino-review/what-is-e-wallet-casino-australia/",
  },
  {
    id: 16,
    title: "Do I Need To Declare My Casino Winnings In Australia?",
    description:
      "When it comes to gambling and casino winnings, there are a lot of questions about what you need to do when it comes to taxes. In Australia, there is no definitive answer, as the laws surrounding this topic can be a little murky. In this blog post, we will try to clear up some of [...]",
    category: "Casino Review",
    date: "26-01-2022",
    image:
      "https://www.bk8.services/wp-content/uploads/2022/01/Do-I-Need-To-Declare-My-Casino-Winnings-On-LHDN-Malaysia-360x200.png",
    link: "/blog/casino-review/do-i-need-to-declare-my-casino-winnings-in-australia/",
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
    title: "Truedinkumbet Returns to English Football through a Deal with Huddersfield Town F.C",
    description:
      "Before 2021 ends, Truedinkumbet has officially become the new global betting partner of Huddersfield Town Football Club, signing a contract for the rest of the 2021-2022 season. The commercial partnership sees Truedinkumbet, which operates chiefly in Australia, develop into English football following agreements and a series of Spanish clubs like Elche Club de Football, RCD [...]",
    category: "Casino Review",
    date: "31-12-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/12/BK8-Returns-to-English-Football-with-Huddersfield-360x200.png",
    link: "/blog/casino-review/truedinkumbet-returns-to-english-football-through-a-deal-with-huddersfield-town-f-c/",
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
    id: 22,
    title: "You Should Stop Gambling If You See Any Of These 6 Signs",
    description:
      "It's easy to get addicted to gambling when the prize money is genuine. But don't be misled by the headline. Throughout my whole life, gambling has and will continue to play a significant role. The last thing we want, though, is for any of you to get influenced by it and start engaging in risky [...]",
    category: "Casino Review",
    date: "09-11-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/11/You-Should-Stop-Gambling-If-You-See-Any-Of-These-6-Signs-360x200.png",
    link: "/blog/casino-review/you-should-stop-gambling-if-you-see-any-of-these-6-signs/",
  },
  {
    id: 23,
    title: "Join Truedinkumbet Affiliate Program and Transform Your Ability to Pure Profit",
    description:
      "Modern technology has conveyed the internet as one of the most dependable and convenient modes of earning money. Combining a new stride in it, Truedinkumbet, a renowned online casino platform, is endowing creative minds like YouTubers, bloggers, vloggers, and others an opportunity to earn through their affiliate marketing program. The affiliate program will only require them to [...]",
    category: "Casino Review",
    date: "12-10-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/10/Join-BK8-Affiliate-Program-and-Transform-Your-Ability-to-Pure-Profit-360x200.png",
    link: "/blog/casino-review/join-truedinkumbet-affiliate-program-and-transform-your-ability-to-pure-profit/",
  },
  {
    id: 24,
    title: "Kelly Smith Becomes Truedinkumbet's Brand Ambassador",
    description:
      "Truedinkumbet has agreed on a deal with former England and Arsenal female football legend Kelly Smith. This appointment makes Kelly Smith the first female footballer to represent an international betting brand. Kelly Smith had a remarkable career, where she won 20 trophies with Arsenal and 100 caps with the English. The partnership is a win [...]",
    category: "Casino Review",
    date: "28-09-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/09/Kelly-Smith-Becomes-BK8-Brand-Ambassador-360x200.png",
    link: "/blog/casino-review/kelly-smith-becomes-truedinkumbet-brand-ambassador/",
  },
  {
    id: 25,
    title: "Choose the Best Casino: How Do You Compare Online Casinos?",
    description:
      "The growth of online casinos was one of the most successful business stories in recent years. For around two decades, these platforms have gone from fringe interest to massive revenue producers that raised $53.7 billion in 2019 alone! It should increase by at least 11% by 2027. The greatest part is to achieve this. The [...]",
    category: "Casino Review",
    date: "07-09-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/09/How-Do-You-Compare-Online-Casinos-360x200.png",
    link: "/blog/casino-review/choose-the-best-casino-how-do-you-compare-online-casinos/",
  },
  {
    id: 26,
    title: "Which is Better: Online Casinos versus Land-Based Casinos",
    description:
      "People used to gamble for joy and entertainment since the beginning of humanity. In 1636, the first legal casino started with the first gambling establishment in Venice, Europe. Since then, more and more casinos have started to emerge in various cities globally with various games but almost have the same atmosphere. This blog seeks to [...]",
    category: "Casino Review",
    date: "07-07-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/07/Which-is-Better-Online-Casinos-versus-Land-Based-Casinos-360x200.png",
    link: "/blog/casino-review/which-is-better-online-casinos-versus-land-based-casinos/",
  },
  {
    id: 27,
    title: "Mistakes to Avoid When Playing Online Gambling",
    description:
      "Many players believe that after playing multiple games at a real casino or playing one of the free games at an online game, they have experience with real money games. Online casino gambling is one of a person's most profitable and entertaining activities. However, there are some common online gambling mistakes that you need to [...]",
    category: "Casino Review",
    date: "29-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/06/Mistakes-to-Avoid-When-Playing-Online-Gambling-360x200.png",
    link: "/blog/casino-review/mistakes-to-avoid-when-playing-online-gambling/",
  },
  {
    id: 28,
    title: "Online Gambling Trends: 2021",
    description:
      "Online casinos emerged in the gambling community in the middle of the nineties. The high-speed internet access led to the massive development of the remote gambling sector. Almost every family nowadays has an internet-accessible PC. That only proves that the emergence of technology propels the trends and success of the online gambling sector. The adaption [...]",
    category: "Casino Review",
    date: "25-06-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/06/Online-Gambling-Trends-2021-360x200.png",
    link: "/blog/casino-review/online-gambling-trends-2021/",
  },
  {
    id: 29,
    title: "How to Deposit in an Online Casino Australia?",
    description:
      "With the advent of technology and the web, specifically, Online Casinos have gained quite some popularity. More and more people have started playing at online casino sites each year compared to traditional casinos. Of course, every online casino has different deposit and withdrawal methods. The reason being is, that online casinos are safe, and convenient [...]",
    category: "Casino Review",
    date: "23-04-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/04/How-to-Deposit-in-an-Online-Casino-Malaysia-360x200.png",
    link: "/blog/casino-review/how-to-deposit-in-an-online-casino-australia/",
  },
  {
    id: 30,
    title: "Is It Safe To Use Bitcoin For Online Casinos?",
    description:
      "The emergence of cryptocurrency brought about several scepticisms initially. However, over time, the impact of digital currency has been felt in different online business industries, and more people have accepted cryptocurrency as the funds of the future. Several other alternative currencies, simply named Altcoin, have followed following the launch of the first cryptocurrency in 2009. [...]",
    category: "Casino Review",
    date: "08-02-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/02/Is-It-Safe-To-Use-Bitcoin-For-Online-Casinos-360x200.png",
    link: "/blog/casino-review/is-it-safe-to-use-bitcoin-for-online-casinos/",
  },
  {
    id: 31,
    title: "Why Bitcoin or Other Cryptocurrencies and Casinos are Great Together",
    description:
      "As predicted by many analysts over the last few years, online casino gaming continues to expand. This is a result of many nations being affected by a pandemic. Despite a major health issue around, individuals still gamble, which is understandable because brick and mortar casinos are closed and physical or social distancing is needed. Today, [...]",
    category: "Casino Review",
    date: "04-01-2021",
    image:
      "https://www.bk8.services/wp-content/uploads/2021/01/Why-Bitcoin-or-Other-Cryptocurrencies-and-Casinos-are-Great-Together-360x200.png",
    link: "/blog/casino-review/why-bitcoin-or-other-cryptocurrencies-and-casinos-are-great-together/",
  },
  {
    id: 32,
    title: "How Crypto (USDT) Gambling is Regulated Around the World",
    description:
      "The emergence of crypto-gambling and betting received different perceptions from various countries worldwide. The most defined stance came from the Japanese. Recently, the House of Representatives in Japan released a new regulation for crypto-asset, which affects the exchange and custodians of the digital currency. This regulation is simply referred to as the Payment Services Act [...]",
    category: "Casino Review",
    date: "09-12-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/12/How-Crypto-Gambling-Is-Regulated-Around-the-World-360x200.png",
    link: "/blog/casino-review/how-crypto-gambling-is-regulated-around-the-world/",
  },
  {
    id: 33,
    title: "Cryptocurrency vs. Traditional Currency in Online Casino",
    description:
      "In the year 2008, a new era began in the financial world when Bitcoin – the most popular cryptocurrency was introduced to the world. Since then, hundreds of other digital currencies have come to the scene. Many industries including the online casino industry have adopted using the cryptocurrency as one of the payment methods thanks [...]",
    category: "Casino Review",
    date: "26-11-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/11/Cryptocurrency-vs.-Traditional-Currency-in-Online-Casino-360x200.png",
    link: "/blog/casino-review/cryptocurrency-vs-traditional-currency-in-online-casino/",
  },
  {
    id: 34,
    title: "How Old Should I Be To Use An Online Casino Service?",
    description:
      "The legal age for gambling varies distinctively according to location. Hence, the big question, how old a person should be to legally use an online casino sevice? The legal gambling age in Australia is 18 years. Because Australia has strict regulations around gambling, participants must adhere to these laws to ensure legal compliance. That is [...]",
    category: "Casino Review",
    date: "23-11-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/11/How-Old-Should-I-Be-To-Use-An-Online-Casino-Service-360x200.png",
    link: "/blog/casino-review/how-old-should-i-be-to-use-an-online-casino-service/",
  },
  {
    id: 35,
    title: "The First Online Casino Australia That Accepts Cryptocurrency",
    description:
      "Many years ago, \"cryptocurrency and bitcoin\" were vague terms people literally knew little or nothing about. Fast forward to the present day, cryptocurrency has changed the way we think about money. The decentralized digital currencies have introduced the world to a modern era. This currency doesn't only aid you in acquiring goods and services online/offline, [...]",
    category: "Casino Review",
    date: "18-11-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/11/The-First-Online-Casino-Malaysia-That-Accepts-Cryptocurrency-360x200.png",
    link: "/blog/casino-review/the-first-online-casino-australia-that-accepts-cryptocurrency/",
  },
  {
    id: 36,
    title: "How is The Gambling Industry in Australia?",
    description:
      "Gambling industry is not far from art in Australia; every other individual is involved in it, but some things have changed over the decade. The ways have changed, but the plan remains the same. Have you noticed how the digital revolution has changed so much in our life in the past decade, just like [...]",
    category: "Casino Review",
    date: "09-11-2020",
    image:
      "https://www.bk8.services/wp-content/uploads/2020/11/How-Is-The-Gambling-Industry-In-Malaysia-360x200.jpg",
    link: "/blog/casino-review/how-is-the-gambling-industry-in-australia/",
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

  // Page 1: 20 items, Page 2: 18 items (total 38 articles for 2 pages)
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
