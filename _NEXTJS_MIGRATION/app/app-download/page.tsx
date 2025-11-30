import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDownloadContent from "@/components/app-download/AppDownloadContent";

export const metadata = {
  title:
    "Truedinkumbet App Download | Login & Register | Online Casino Australia",
  description:
    "Download the Truedinkumbet App for iOS and Android. Login, register, and play your favorite casino games on the go. Secure, fast, and reliable.",
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
