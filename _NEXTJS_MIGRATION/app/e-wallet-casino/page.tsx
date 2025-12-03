import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EWalletHeroSection from "@/components/e-wallet-casino/EWalletHeroSection";
import EWalletSlotsSection from "@/components/e-wallet-casino/EWalletSlotsSection";
import EWalletBonusesSection from "@/components/e-wallet-casino/EWalletBonusesSection";
import EWalletPaymentSection from "@/components/e-wallet-casino/EWalletPaymentSection";
import EWalletDepositGuideSection from "@/components/e-wallet-casino/EWalletDepositGuideSection";
import EWalletFAQSection from "@/components/e-wallet-casino/EWalletFAQSection";

export const metadata = {
  title: "E-Wallet Casino Australia 2024 | Truedinkumbet",
  description: "Discover the best e-wallet casino in Australia with Truedinkumbet. Enjoy safe deposits via Apple Pay, Google Pay, Neteller, Skrill and more. Play premium slots with AUD 1,080 welcome bonus.",
  keywords: "e-wallet casino Australia, online casino e-wallet, safe deposit methods, slots Australia, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "E-Wallet Casino Australia 2024 | Truedinkumbet",
    description: "The best e-wallet casino in Australia with premium games and safe payment methods.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/e-wallet-casino",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet E-Wallet Casino",
      },
    ],
  },
};

export default function EWalletCasinoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <EWalletHeroSection />
        <EWalletSlotsSection />
        <EWalletBonusesSection />
        <EWalletPaymentSection />
        <EWalletDepositGuideSection />
        <EWalletFAQSection />
      </main>
      <Footer />
    </div>
  );
}
