import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Truedinkumbet - Best Online Casino & Sports Betting Australia | Licensed by PAGCOR",
  description:
    "Play at Truedinkumbet - Australia's leading online casino with sports betting, live dealers, slots, and crypto gaming. Licensed, safe, and secure. Join now!",
  keywords:
    "online casino Australia, sports betting, live casino, slot games, crypto casino, PAGCOR licensed, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  creator: "Truedinkumbet",
  publisher: "Truedinkumbet",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://truedinkumbetaucasino.com"),
  alternates: {
    canonical: "https://truedinkumbetaucasino.com",
  },
  openGraph: {
    title: "Truedinkumbet - Best Online Casino & Sports Betting Australia",
    description:
      "Join Truedinkumbet for world-class gaming - slots, live dealers, sports betting, and crypto games. PAGCOR licensed and regulated.",
    type: "website",
    url: "https://truedinkumbetaucasino.com",
    siteName: "Truedinkumbet",
    locale: "en_AU",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Online Casino",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truedinkumbet - Online Casino & Sports Betting Australia",
    description:
      "Play at Truedinkumbet - Australia's trusted online casino. Sports betting, live dealers, slots, and crypto gaming.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
    creator: "@truedinkumbet",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
