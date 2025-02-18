import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../assets/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio's DS",
  description: "Hell yeah brother",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased scroll-smooth selection:text-theme-800 selection:bg-theme-200`}
      >
        {children}
      </body>
    </html>
  );
}
