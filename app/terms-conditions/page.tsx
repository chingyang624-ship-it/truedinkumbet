import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/terms/TermsHeroSection";
import TermsContentSection from "@/components/terms/TermsContentSection";

export const metadata = {
  title: "Terms and Conditions - Truedinkumbet",
  description:
    "Read the terms and conditions for using Truedinkumbet online casino.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <TermsHeroSection />
        <TermsContentSection />
      </main>
      <Footer />
    </div>
  );
}
