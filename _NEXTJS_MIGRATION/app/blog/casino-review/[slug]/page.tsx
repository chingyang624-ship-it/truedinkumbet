import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasinoReviewArticleContent from "@/components/blog/casino-review/CasinoReviewArticleContent";

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
