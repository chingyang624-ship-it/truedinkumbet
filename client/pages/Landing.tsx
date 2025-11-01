import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import GamesSection from '@/components/landing/GamesSection';
import BonusesSection from '@/components/landing/BonusesSection';
import VIPSection from '@/components/landing/VIPSection';
import MobileAppSection from '@/components/landing/MobileAppSection';
import FAQSection from '@/components/landing/FAQSection';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
