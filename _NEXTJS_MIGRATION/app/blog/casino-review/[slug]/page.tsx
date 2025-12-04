import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasinoReviewArticleContent from "@/components/blog/casino-review/CasinoReviewArticleContent";

const articleSlugs = [
  "what-is-cryptocurrency-casino",
  "have-you-bk8",
  "tips-for-gambling-online-with-a-small-budget",
  "does-malaysian-tax-gambling-winnings",
  "bk8-year-of-rabbit-2023-gold-bar-deposit-reward",
  "what-is-a-heylink-or-joylink-bonus-casino",
  "tips-for-playing-safely-at-online-casinos",
  "genting-casino-vs-online-casino",
  "what-is-gaming-curacao",
  "top-5-e-wallets-to-use-in-casino-malaysia",
  "how-to-earn-extra-money-with-online-casino-affiliate",
  "deposit-your-funds-in-bk8-with-touch-n-go",
  "7-ways-to-compare-online-and-land-based-casinos",
  "10-betting-systems-for-better-winnings",
  "what-is-e-wallet-casino-malaysia",
  "do-i-need-to-declare-my-casino-winnings-on-lhdn-malaysia",
  "how-to-fully-utilize-your-kwsp-money-in-2022",
  "bk8-returns-to-english-football-through-a-deal-with-huddersfield-town-f-c",
  "the-most-important-slot-machine-winners-in-history",
  "bankroll-management-advice-8-ideas",
  "what-is-the-process-for-online-casino-bonuses",
  "you-should-stop-gambling-if-you-see-any-of-these-6-signs",
  "join-bk8-affiliate-program-and-transform-your-ability-to-pure-profit",
  "kelly-smith-becomes-bk8s-brand-ambassador",
  "choose-the-best-casino-how-do-you-compare-online-casinos",
  "which-is-better-online-casinos-versus-land-based-casinos",
  "mistakes-to-avoid-when-playing-online-gambling",
  "online-gambling-trends-2021",
  "how-to-deposit-in-an-online-casino-malaysia",
  "is-it-safe-to-use-bitcoin-for-online-casinos",
  "why-bitcoin-or-other-cryptocurrencies-and-casinos-are-great-together",
  "how-crypto-gambling-is-regulated-around-the-world",
  "cryptocurrency-vs-traditional-currency-in-online-casino",
  "how-old-should-i-be-to-use-an-online-casino-service",
  "the-first-online-casino-malaysia-that-accepts-cryptocurrency",
  "how-is-the-gambling-industry-in-malaysia",
];

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata() {
  return {
    title: "Casino Review Article - BK8",
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
