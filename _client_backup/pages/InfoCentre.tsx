import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoCentreHeroSection from '@/components/info-centre/InfoCentreHeroSection';
import InfoCentreFAQSection from '@/components/info-centre/InfoCentreFAQSection';

export default function InfoCentre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InfoCentreHeroSection />
        <InfoCentreFAQSection />
      </main>
      <Footer />
    </div>
  );
}
