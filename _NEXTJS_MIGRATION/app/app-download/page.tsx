import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDownloadContent from "@/components/app-download/AppDownloadContent";

export const metadata = {
  title: "Download Truedinkumbet App | Official APK for Android & iOS",
  description:
    "Get the official Truedinkumbet App for iPhone and Android. Fast, secure, and virus-free. Download now to claim your exclusive App-only bonus!",
  keywords:
    "Truedinkumbet app download, Truedinkumbet APK, casino app Australia, betting app android, ios casino app, mobile casino login, Truedinkumbet mobile",
  authors: [{ name: "Truedinkumbet Mobile Team" }],
  themeColor: "#0a0a0a",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://truedinkumbetaucasino.com/app-download",
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Mobile",
    title: "Download the Truedinkumbet Casino App",
    description:
      "Play Slots & Live Casino on the go. Fast, Secure & Exclusive Mobile Bonuses.",
    url: "https://truedinkumbetaucasino.com/app-download",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Casino App",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Get the Truedinkumbet App Now",
    description: "Official Android & iOS App. Download & Play.",
    image: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
  },
};

export default function AppDownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <AppDownloadContent />
      </main>
      <Footer />
    </div>
  );
}
