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
];

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} - BK8 Casino Review`,
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
