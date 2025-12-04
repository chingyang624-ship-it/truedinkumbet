import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasinoReviewArticleContent from "@/components/blog/casino-review/CasinoReviewArticleContent";

const articleSlugs = [
  "how-crypto-gambling-is-regulated-around-the-world",
  "cryptocurrency-vs-traditional-currency-in-online-casino",
  "why-bitcoin-or-other-cryptocurrencies-and-casinos-are-great-together",
  "what-is-cryptocurrency-casino",
  "have-you-truedinkumbet",
  "tips-for-gambling-online-with-a-small-budget",
  "does-australian-tax-gambling-winnings",
  "truedinkumbet-year-of-rabbit-2023-gold-bar-deposit-reward",
  "what-is-a-heylink-or-joylink-bonus-casino",
  "tips-for-playing-safely-at-online-casinos",
  "genting-casino-vs-online-casino",
  "what-is-gaming-curacao",
  "top-5-e-wallets-to-use-in-casino-australia",
  "how-to-earn-extra-money-with-online-casino-affiliate",
  "deposit-your-funds-in-truedinkumbet-with-touch-n-go",
  "7-ways-to-compare-online-and-land-based-casinos",
  "10-betting-systems-for-better-winnings",
  "what-is-e-wallet-casino-australia",
  "do-i-need-to-declare-my-casino-winnings-in-australia",
  "how-to-fully-utilize-your-kwsp-money-in-2022",
  "truedinkumbet-returns-to-english-football-through-a-deal-with-huddersfield-town-f-c",
  "the-most-important-slot-machine-winners-in-history",
  "bankroll-management-advice-8-ideas",
  "what-is-the-process-for-online-casino-bonuses",
  "you-should-stop-gambling-if-you-see-any-of-these-6-signs",
  "kelly-smith-becomes-truedinkumbet-brand-ambassador",
  "choose-the-best-casino-how-do-you-compare-online-casinos",
  "which-is-better-online-casinos-versus-land-based-casinos",
  "mistakes-to-avoid-when-playing-online-gambling",
  "online-gambling-trends-2021",
  "how-to-deposit-in-an-online-casino-australia",
  "is-it-safe-to-use-bitcoin-for-online-casinos",
  "why-bitcoin-or-other-cryptocurrencies-and-casinos-are-great-together",
  "how-crypto-gambling-is-regulated-around-the-world",
  "cryptocurrency-vs-traditional-currency-in-online-casino",
  "how-old-should-i-be-to-use-an-online-casino-service",
  "the-first-online-casino-australia-that-accepts-cryptocurrency",
  "how-is-the-gambling-industry-in-australia",
  "the-first-online-casino-malaysia-that-accepts-cryptocurrency",
];

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata() {
  return {
    title: "Casino Review Article - Truedinkumbet",
    description: "Read our latest casino review and gaming insights",
    robots: {
      index: true,
      follow: true,
    },
  };
}

interface CasinoReviewArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CasinoReviewArticlePage({
  params,
}: CasinoReviewArticlePageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CasinoReviewArticleContent slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
