import "./globals.css";

export const metadata = {
  title: "Truedinkumbet",
  description: "Online Casino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
