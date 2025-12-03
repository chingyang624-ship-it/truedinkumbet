import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarouselSection from "@/components/landing/CarouselSection";
import NewsTickerSection from "@/components/landing/NewsTickerSection";
import TitleSection from "@/components/landing/TitleSection";
import HeroSection from "@/components/landing/HeroSection";
import WelcomeSection from "@/components/landing/WelcomeSection";
import GamingCategoriesSection from "@/components/landing/GamingCategoriesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GamesSection from "@/components/landing/GamesSection";
import BonusesSection from "@/components/landing/BonusesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LiveCasinoGamesSection from "@/components/landing/LiveCasinoGamesSection";
import PopularGamesSection from "@/components/landing/PopularGamesSection";
import WhyChooseTruedinkumbetSection from "@/components/landing/WhyChooseTruedinkumbetSection";
import PaymentMethodsSection from "@/components/landing/PaymentMethodsSection";
import GameProvidersSection from "@/components/landing/GameProvidersSection";
import VIPSection from "@/components/landing/VIPSection";
import MobileAppSection from "@/components/landing/MobileAppSection";
import FAQSection from "@/components/landing/FAQSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Truedinkumbet Australia: Best Trusted Online Casino & Betting Site 2025",
  description:
    "Join Truedinkumbet Australia for the ultimate gaming experience. Play Slots, Live Casino & Sports Betting with instant crypto withdrawals. Claim your 100% Welcome Bonus now!",
  keywords:
    "Truedinkumbet Australia, Truedinkumbet casino login, best online casino Australia 2025, trusted betting site Australia, crypto casino AU, Truedinkumbet app download",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CarouselSection />
        <NewsTickerSection />
        <section className="w-full bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="flex-1 sm:flex-initial px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors text-center text-sm md:text-base"
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
                className="flex-1 sm:flex-initial px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold text-white transition-colors text-center text-sm md:text-base hover:opacity-90"
                style={{
                  backgroundColor: "#ff6500",
                }}
              >
                Join Now
              </a>
            </div>
          </div>
        </section>
        <TitleSection />
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <GamesSection />
        <GamingCategoriesSection />
        <BonusesSection />
        <TestimonialsSection />
        <LiveCasinoGamesSection />
        <PopularGamesSection />
        <WhyChooseTruedinkumbetSection />
        <PaymentMethodsSection />
        <GameProvidersSection />
        <VIPSection />
        <MobileAppSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
