import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDownloadContent from "@/components/app-download/AppDownloadContent";

export const metadata = {
  title:
    "Truedinkumbet App Download | Login & Register | Online Casino Australia",
  description:
    "Download the Truedinkumbet App for iOS and Android. Login, register, and play your favorite casino games on the go. Secure, fast, and reliable.",
  keywords:
    "Truedinkumbet app, Truedinkumbet login, Truedinkumbet register, online casino app, mobile casino Australia, Truedinkumbet APK",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Truedinkumbet App Download | Login & Register",
    description:
      "Download the Truedinkumbet App for iOS and Android. Login, register, and play your favorite casino games on the go.",
    type: "website",
    url: "https://truedinkumbetaucasino.com/app-download",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet App Download",
      },
    ],
  },
  robots: "index, follow",
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
