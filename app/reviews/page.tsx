import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsHeroSection from "@/components/reviews/ReviewsHeroSection";
import ReviewsArchiveSection from "@/components/reviews/ReviewsArchiveSection";

export const metadata = {
  title: "Truedinkumbet Casino Review 2025 | Honest Ratings & Game Provider Analysis",
  description: "Read our in-depth review of Truedinkumbet Casino. Rated 4.9/5 for fast crypto payouts, 5000+ games, and 24/7 VIP support. See why Aussie players trust us.",
  keywords: "Truedinkumbet review, is Truedinkumbet legit, Truedinkumbet scam or real, Spadegaming review, Evolution Gaming casino review, Australian casino ratings",
  authors: [{ name: "Truedinkumbet Review Team" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/reviews",
  openGraph: {
    type: "article",
    siteName: "Truedinkumbet Reviews",
    title: "Truedinkumbet Review: The Verdict (4.9/5)",
    description: "Tested & Verified. Instant Payouts, Licensed Games, and massive VIP bonuses.",
    url: "https://truedinkumbetaucasino.com/reviews",
    images: [
      {
        url: "https://static.gwvkyk.com/media/ef3d53a54b296d128f1f3.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Casino Review",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Truedinkumbet Casino Review 2025",
    description: "See our expert rating and player feedback.",
    image: "https://static.gwvkyk.com/media/ef3d53a54b296d128f1f3.png",
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReviewsHeroSection />
        <ReviewsArchiveSection />
      </main>
      <Footer />
    </div>
  );
}
