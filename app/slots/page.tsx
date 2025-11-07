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
  title: "Slots at Truedinkumbet | Best Online Slot Games Australia | Play Now",
  description: "Play thousands of slot games at Truedinkumbet with high RTP, progressive jackpots, and exclusive bonuses. Enjoy the best online slots experience in Australia.",
  keywords: "online slots Australia, slot games, progressive jackpots, RTP slots, Pragmatic Play slots, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Slots at Truedinkumbet - Best Online Slot Games",
    description: "Play thousands of slot games with high payouts and exciting features at Truedinkumbet. Licensed and secure slots gaming in Australia.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/slots",
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
    title: "Slots at Truedinkumbet - Online Slot Games Australia",
    description: "Play thousands of slot games with high RTP and progressive jackpots at Truedinkumbet.",
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
