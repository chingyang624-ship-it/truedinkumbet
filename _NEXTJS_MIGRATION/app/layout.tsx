import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://truedinkumbetaucasino.com"),
  title: "Truedinkumbet Australia: Best Trusted Online Casino & Betting Site 2025",
  description:
    "Join Truedinkumbet Australia for the ultimate gaming experience. Play Slots, Live Casino & Sports Betting with instant crypto withdrawals. Claim your 100% Welcome Bonus now!",
  keywords:
    "Truedinkumbet Australia, Truedinkumbet casino login, best online casino Australia 2025, trusted betting site Australia, crypto casino AU, Truedinkumbet app download",
  authors: [{ name: "Truedinkumbet Australia Team" }],
  themeColor: "#1f2937",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://truedinkumbetaucasino.com/",
  },
  openGraph: {
    type: "website",
    siteName: "Truedinkumbet Casino",
    title: "Truedinkumbet: #1 Trusted Casino in Australia",
    description:
      "Play with confidence. Licensed, Secure, and Fast Payouts. Join 50,000+ Aussie players today.",
    url: "https://truedinkumbetaucasino.com/",
    images: [
      {
        url: "https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png",
        width: 1200,
        height: 630,
        alt: "Truedinkumbet Casino",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@truedinkumbet",
    title: "Truedinkumbet Australia - Play & Win",
    description: "Best odds, huge jackpots, and instant withdrawals.",
    images: ["https://static.gwvkyk.com/media/5307c1b56d296b57af7db.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
