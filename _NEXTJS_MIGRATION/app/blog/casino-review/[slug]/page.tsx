import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasinoReviewArticleContent from "@/components/blog/casino-review/CasinoReviewArticleContent";

export const metadata: Metadata = {
  title: "Casino Review Article - BK8",
  description: "Read our latest casino review and gaming insights",
  robots: {
    index: true,
    follow: true,
  },
};

interface CasinoReviewArticlePageProps {
  params: {
    slug: string;
  };
}

export default function CasinoReviewArticlePage({
  params,
}: CasinoReviewArticlePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CasinoReviewArticleContent slug={params.slug} />
      </main>
      <Footer />
    </div>
  );
}
