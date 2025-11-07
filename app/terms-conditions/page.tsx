import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/terms/TermsHeroSection";
import TermsContentSection from "@/components/terms/TermsContentSection";

export const metadata = {
  title: "Terms and Conditions | Legal Agreement - Truedinkumbet Australia",
  description:
    "Review Truedinkumbet's complete terms and conditions for online casino, sports betting, and gaming services in Australia. PAGCOR licensed legal agreement and policies.",
  keywords:
    "terms and conditions, legal agreement, Truedinkumbet, online casino terms, gaming policy, PAGCOR terms, Australian gaming regulations",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Terms and Conditions - Truedinkumbet Legal Agreement",
    description:
      "Read the complete legal terms and conditions for using Truedinkumbet's gaming platform in Australia.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/terms-conditions",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Truedinkumbet",
    description: "Read Truedinkumbet's complete terms and conditions for online gaming in Australia.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
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
