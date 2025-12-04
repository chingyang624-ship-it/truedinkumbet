import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasinoReviewHeroSection from "@/components/blog/casino-review/CasinoReviewHeroSection";
import CasinoReviewArchiveSection from "@/components/blog/casino-review/CasinoReviewArchiveSection";

export const metadata: Metadata = {
  title: "Casino Review Archives - Truedinkumbet | Trusted Online Casino",
  description:
    "Browse our comprehensive casino review archives covering cryptocurrency casinos, e-wallet payments, responsible gaming, and casino strategies.",
  keywords:
    "casino review, online casino, e-wallet casino, cryptocurrency casino, casino strategies, gambling tips, casino games",
  authors: [{ name: "Truedinkumbet Casino Reviews" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Casino Review Archives - Truedinkumbet",
    description: "Read trusted casino reviews and gambling guides",
    url: "https://www.truedinkumbet.com/blog/category/casino-review/",
    images: [
      {
        url: "https://www.truedinkumbet.com/wp-content/uploads/2024/05/truedinkumbet-logo.gif",
        width: 150,
        height: 50,
        alt: "Truedinkumbet Casino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casino Review Archives - Truedinkumbet",
    description: "Read trusted casino reviews and gambling guides",
  },
};

export default function CasinoReviewCategoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CasinoReviewHeroSection />
        <CasinoReviewArchiveSection />
      </main>
      <Footer />
    </div>
  );
}
