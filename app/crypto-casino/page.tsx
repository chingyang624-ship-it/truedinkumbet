import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CryptoCasinoHeroSection from "@/components/crypto-casino/CryptoCasinoHeroSection";
import CryptoCasinoIntroSection from "@/components/crypto-casino/CryptoCasinoIntroSection";
import CryptoCasinoWhyChooseSection from "@/components/crypto-casino/CryptoCasinoWhyChooseSection";
import CryptoCasinoProvidersSection from "@/components/crypto-casino/CryptoCasinoProvidersSection";
import CryptoCasinoFeaturesSection from "@/components/crypto-casino/CryptoCasinoFeaturesSection";
import CryptoCasinoFAQSection from "@/components/crypto-casino/CryptoCasinoFAQSection";

export const metadata = {
  title: "Crypto Casino Australia | Bitcoin & Crypto Games at Truedinkumbet",
  description:
    "Play crypto casino games with Bitcoin, Ethereum, and other cryptocurrencies at Truedinkumbet. Fast transactions, secure, and exclusive crypto bonuses for Australian players.",
  keywords:
    "crypto casino Australia, Bitcoin casino, Ethereum casino, cryptocurrency gambling, blockchain gaming, digital currency casino, Truedinkumbet crypto",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Crypto Casino Australia - Bitcoin & Crypto Games at Truedinkumbet",
    description:
      "Play casino games with cryptocurrency at Truedinkumbet. Fast, secure transactions with Bitcoin, Ethereum, and other cryptocurrencies.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/crypto-casino",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Crypto Casino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Casino Australia - Bitcoin Games at Truedinkumbet",
    description:
      "Play crypto casino games with Bitcoin and other cryptocurrencies at Truedinkumbet. Fast and secure transactions.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
  },
  robots: "index, follow",
};

export default function CryptoCasinoPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: "910px" }}>
      <Header />
      <main className="flex-1">
        <CryptoCasinoHeroSection />
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
        <CryptoCasinoIntroSection />
        <CryptoCasinoWhyChooseSection />
        <CryptoCasinoProvidersSection />
        <CryptoCasinoFeaturesSection />
        <CryptoCasinoFAQSection />
      </main>
      <Footer />
    </div>
  );
}
