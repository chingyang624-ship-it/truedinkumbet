import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SportsHeroSection from '@/components/sports/SportsHeroSection';
import SportsProvidersGrid from '@/components/sports/SportsProvidersGrid';
import SportsTypesSection from '@/components/sports/SportsTypesSection';
import SportsProvidersSection from '@/components/sports/SportsProvidersSection';
import SportsMobileAppSection from '@/components/sports/SportsMobileAppSection';
import SportsFAQSection from '@/components/sports/SportsFAQSection';

export default function Sports() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SportsHeroSection />
        <SportsProvidersGrid />
        <SportsTypesSection />
        <SportsProvidersSection />
        <SportsMobileAppSection />
        <SportsFAQSection />
      </main>
      <Footer />
    </div>
  );
}
