import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsCarouselSection from "@/components/slots/SlotsCarouselSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsPopularGamesSection from "@/components/slots/SlotsPopularGamesSection";
import SlotsTipsSection from "@/components/slots/SlotsTipsSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";

export const metadata = {
  title: "Online Slots Australia | Best Slot Games at Truedinkumbet | High RTP Slots",
  description:
    "Play thousands of online slot games at Truedinkumbet with high RTP, progressive jackpots, and exclusive slot bonuses. Enjoy the best slots experience in Australia from top providers like Pragmatic Play and JILI.",
  keywords:
    "online slots Australia, best slot games, progressive jackpots, high RTP slots, Pragmatic Play slots, JILI slots, slot machine games, Truedinkumbet slots",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Online Slots Australia - Thousands of Slot Games at Truedinkumbet",
    description:
      "Play thousands of online slot games with high RTP, progressive jackpots, and exclusive bonuses at Truedinkumbet. Licensed and secure slots gaming for Australian players.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/slots",
    type: "website",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Slots Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Slots Australia - Best Slot Games at Truedinkumbet",
    description:
      "Play online slot games with high RTP, progressive jackpots, and exclusive bonuses at Truedinkumbet.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function SlotsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <SlotsHeroSection />
        <SlotsCarouselSection />
        <SlotsIntroSection />
        <SlotsWhyChooseSection />
        <SlotsBonusesSection />
        <SlotsProvidersSection />
        <SlotsPopularGamesSection />
        <SlotsTipsSection />
        <SlotsFAQSection />
      </main>
      <Footer />
    </div>
  );
}
