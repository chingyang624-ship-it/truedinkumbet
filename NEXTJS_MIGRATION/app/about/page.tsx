import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";

export const metadata = {
  title: "About Truedinkumbet - About Us",
  description:
    "Learn more about Truedinkumbet and our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHeroSection />
        <AboutIntroSection />
        <AboutMissionSection />
        <AboutValuesSection />
      </main>
      <Footer />
    </div>
  );
}
