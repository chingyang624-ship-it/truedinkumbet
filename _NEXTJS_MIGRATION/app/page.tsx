export const dynamic = 'force-dynamic';

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CarouselSection />
        <NewsTickerSection />
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
