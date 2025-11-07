import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Truedinkumbet - Online Casino, Sports Betting & Live Casino Australia",
  description:
    "Truedinkumbet - Online Casino, Sports Betting, Live Casino, Slots & Crypto Gaming in Australia. Licensed by PAGCOR.",
  keywords:
    "online casino, sports betting, live casino, slots, crypto casino, Australia, Truedinkumbet",
  authors: [{ name: "Truedinkumbet" }],
  openGraph: {
    title: "Truedinkumbet - Online Casino & Sports Betting Australia",
    description:
      "Play online casino games, sports betting, live dealers, and crypto gaming. Licensed and regulated by PAGCOR.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7",
    ],
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
