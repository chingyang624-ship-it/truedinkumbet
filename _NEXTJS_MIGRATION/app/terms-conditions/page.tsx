"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/terms/TermsHeroSection";
import TermsContentSection from "@/components/terms/TermsContentSection";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TermsHeroSection />
        <TermsContentSection />
      </main>
      <Footer />
    </div>
  );
}
