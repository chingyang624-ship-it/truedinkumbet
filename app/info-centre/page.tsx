import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCentreHeroSection from "@/components/info-centre/InfoCentreHeroSection";
import InfoCentreFAQSection from "@/components/info-centre/InfoCentreFAQSection";

export const metadata = {
  title: "Info Centre | Help & Support - Truedinkumbet Customer Care",
  description:
    "Get answers to your questions about Truedinkumbet games, accounts, bonuses, deposits, and responsible gaming. Customer support and helpful resources available 24/7.",
  keywords:
    "help Truedinkumbet, customer support, FAQ, gaming guides, account help, bonus information, deposit help, withdrawal support",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Info Centre - Truedinkumbet Help & Support Center",
    description:
      "Get answers to your questions about Truedinkumbet. Comprehensive help center and 24/7 customer support resources.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/info-centre",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Info Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Info Centre - Truedinkumbet Help & Support",
    description:
      "Get help and answers at Truedinkumbet's customer support centre. FAQ and gaming guides available.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function InfoCentrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <InfoCentreHeroSection />
        <InfoCentreFAQSection />
      </main>
      <Footer />
    </div>
  );
}
