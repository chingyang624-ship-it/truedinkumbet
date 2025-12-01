
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDownloadContent from "@/components/app-download/AppDownloadContent";

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
