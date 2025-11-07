import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FishingHeroSection from "@/components/fishing/FishingHeroSection";
import FishingCarouselSection from "@/components/fishing/FishingCarouselSection";
import FishingProvidersSection from "@/components/fishing/FishingProvidersSection";
import FishingIntroSection from "@/components/fishing/FishingIntroSection";
import FishingWhyChooseSection from "@/components/fishing/FishingWhyChooseSection";
import FishingGamesSection from "@/components/fishing/FishingGamesSection";
import FishingProvidersDetailsSection from "@/components/fishing/FishingProvidersDetailsSection";
import FishingMobileAppSection from "@/components/fishing/FishingMobileAppSection";
import FishingFAQSection from "@/components/fishing/FishingFAQSection";

export const metadata = {
  title: "Fishing Games at Truedinkumbet | Play Online Fishing Australia",
  description: "Play exciting fishing games at Truedinkumbet with stunning graphics, big payouts, and exclusive bonuses. Licensed fishing game entertainment for Australia.",
  keywords: "fishing games Australia, online fishing game, fishing game casino, fish hunting game, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Fishing Games at Truedinkumbet - Online Fishing Entertainment",
    description: "Enjoy thrilling fishing games with great graphics and payouts at Truedinkumbet. Play and win today!",
    type: "website",
    url: "https://truedinkumbetaucasino.com/fishing",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Fishing Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishing Games at Truedinkumbet - Online Fishing Australia",
    description: "Play exciting fishing games with great graphics and payouts at Truedinkumbet.",
  },
  robots: "index, follow",
};

export default function FishingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <FishingHeroSection />
        <FishingCarouselSection />
        <FishingProvidersSection />
        <FishingIntroSection />
        <FishingWhyChooseSection />
        <FishingGamesSection />
        <FishingProvidersDetailsSection />
        <FishingMobileAppSection />
        <FishingFAQSection />
      </main>
      <Footer />
    </div>
  );
}
