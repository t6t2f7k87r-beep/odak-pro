 import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Odak Danışmanlık | Rusya Üniversite Danışmanlığı",
  description:
    "Rusya'da üniversite eğitimi almak isteyen öğrenciler için profesyonel danışmanlık hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}