"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarouselSection from "@/components/landing/CarouselSection";
import NewsTickerSection from "@/components/landing/NewsTickerSection";
import WelcomeSection from "@/components/landing/WelcomeSection";
import GamingCategoriesSection from "@/components/landing/GamingCategoriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LiveCasinoGamesSection from "@/components/landing/LiveCasinoGamesSection";
import PopularGamesSection from "@/components/landing/PopularGamesSection";
import WhyChooseBK8Section from "@/components/landing/WhyChooseBK8Section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
        <WelcomeSection />
        <GamingCategoriesSection />
        <TestimonialsSection />
        <LiveCasinoGamesSection />
        <PopularGamesSection />
        <WhyChooseBK8Section />
      </main>
      <Footer />
    </div>
  );
}
