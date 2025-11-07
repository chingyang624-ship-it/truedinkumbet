"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlotsHeroSection from "@/components/slots/SlotsHeroSection";
import SlotsCarouselSection from "@/components/slots/SlotsCarouselSection";
import SlotsIntroSection from "@/components/slots/SlotsIntroSection";
import SlotsWhyChooseSection from "@/components/slots/SlotsWhyChooseSection";
import SlotsProvidersSection from "@/components/slots/SlotsProvidersSection";
import SlotsPopularGamesSection from "@/components/slots/SlotsPopularGamesSection";
import SlotsBonusesSection from "@/components/slots/SlotsBonusesSection";
import SlotsTipsSection from "@/components/slots/SlotsTipsSection";
import SlotsFAQSection from "@/components/slots/SlotsFAQSection";

export const metadata = {
  title: "Truedinkumbet Slots - Play Best Slot Games Australia",
  description:
    "Play thousands of slot games at Truedinkumbet. Win big with our premier online slots in Australia.",
};

export default function SlotsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SlotsHeroSection />
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
        <SlotsCarouselSection />
        <SlotsIntroSection />
        <SlotsWhyChooseSection />
        <SlotsProvidersSection />
        <SlotsPopularGamesSection />
        <SlotsBonusesSection />
        <SlotsTipsSection />
        <SlotsFAQSection />
      </main>
      <Footer />
    </div>
  );
}
