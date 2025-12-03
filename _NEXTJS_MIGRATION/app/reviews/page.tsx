import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsHeroSection from "@/components/reviews/ReviewsHeroSection";
import ReviewsArchiveSection from "@/components/reviews/ReviewsArchiveSection";

export const metadata = {
  title: "Reviews Archive | Gaming Provider Reviews - Truedinkumbet Australia",
  description:
    "Read comprehensive reviews of top gaming providers and online casino platforms. Find the best slots, live casino, and sports betting providers available at Truedinkumbet Australia.",
  keywords:
    "gaming reviews, casino provider reviews, slots provider reviews, online casino reviews, Truedinkumbet reviews, gaming platforms Australia",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Reviews Archive - Gaming Provider Reviews",
    description:
      "Explore detailed reviews of leading gaming providers and casino platforms reviewed by Truedinkumbet Australia.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/reviews",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Reviews Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews Archive - Gaming Provider Reviews",
    description: "Explore comprehensive reviews of gaming providers and casino platforms.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

function ReviewsLoading() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Reviews Archive</h1>
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-24 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReviewsHeroSection />
        <Suspense fallback={<ReviewsLoading />}>
          <ReviewsArchiveSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
