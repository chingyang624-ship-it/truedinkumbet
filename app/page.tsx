import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarouselSection from "@/components/landing/CarouselSection";
import TitleSection from "@/components/landing/TitleSection";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GamesSection from "@/components/landing/GamesSection";
import BonusesSection from "@/components/landing/BonusesSection";
import VIPSection from "@/components/landing/VIPSection";
import MobileAppSection from "@/components/landing/MobileAppSection";
import FAQSection from "@/components/landing/FAQSection";

export const metadata = {
  title: "Truedinkumbet - Online Casino, Sports Betting & Live Casino Australia",
  description:
    "Truedinkumbet - Online Casino, Sports Betting, Live Casino, Slots & Crypto Gaming in Australia. Licensed by PAGCOR.",
  keywords:
    "online casino, sports betting, live casino, slots, crypto casino, Australia, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Truedinkumbet - Online Casino & Sports Betting Australia",
    description:
      "Play online casino games, sports betting, live dealers, and crypto gaming. Licensed and regulated by PAGCOR.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CarouselSection />
        <section className="w-full">
          <div className="hidden md:flex gap-4 justify-center py-6 px-4">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: "#ffffff",
                color: "#1f2124",
                border: "1px solid #ddd",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="px-8 py-3 rounded-lg font-bold text-white transition-colors"
              style={{
                backgroundColor: "#ff6500",
              }}
            >
              Join Now
            </a>
          </div>

          <div className="md:hidden w-full flex gap-0">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 py-3 bg-red-700 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Join
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 py-3 bg-blue-600 text-white font-semibold text-center transition-colors"
              style={{ borderRadius: 0 }}
            >
              Login
            </a>
          </div>
        </section>
        <TitleSection />
        <HeroSection />
        <FeaturesSection />
        <GamesSection />
        <BonusesSection />
        <VIPSection />
        <MobileAppSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
