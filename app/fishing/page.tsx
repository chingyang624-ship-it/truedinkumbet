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
import RelatedGamesSection from "@/components/RelatedGamesSection";

export const metadata = {
  title: "Online Fishing Games Australia | Play at Truedinkumbet | Big Payouts",
  description:
    "Play exciting online fishing games at Truedinkumbet with stunning graphics, big payouts, and exclusive bonuses. Licensed fishing game entertainment for Australian players.",
  keywords:
    "fishing games Australia, online fishing games, fishing game casino, fish hunting games, fishing slots, Truedinkumbet fishing",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Online Fishing Games Australia - Play at Truedinkumbet",
    description:
      "Enjoy thrilling fishing games with great graphics, big payouts, and exclusive bonuses at Truedinkumbet. Play and win today!",
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
    title: "Online Fishing Games Australia - Play at Truedinkumbet",
    description:
      "Play exciting fishing games with great graphics, big payouts, and exclusive bonuses at Truedinkumbet.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function FishingPage() {
  const relatedGames = [
    {
      title: "Online Slots",
      description:
        "Play thousands of online slot games with high RTP and big wins. From classic to progressive jackpot slots.",
      href: "/slots",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe93f3b84925e441fae7c53c7cd43dc9b",
    },
    {
      title: "Live Casino",
      description:
        "Experience authentic live casino gaming with real dealers. Baccarat, roulette, blackjack, and more.",
      href: "/live-casino",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c37345aca9d46bebb44b8219a5c1529",
    },
    {
      title: "Sports Betting",
      description:
        "Bet on all major sports with competitive odds and live betting. Football, basketball, cricket, tennis, and more.",
      href: "/sports",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5443f7041c3f4b079179c988f0da43b2",
    },
  ];

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
        <RelatedGamesSection currentPage="fishing" relatedGames={relatedGames} />
      </main>
      <Footer />
    </div>
  );
}
