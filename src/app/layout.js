import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../../public/css/vendors.css';
import '../../public/css/main.css';
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import AOSProvider from "@/components/AOSProvider"; // <-- import client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivaay Corporate - Innovative Business Solutions",
  description: "Shivaay Corporate provides cutting-edge technology solutions for businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
         <AOSProvider>
        <Header />
        <main className="flex-grow">{children}</main>
          <Footer />
          </AOSProvider>
      </body>
    </html>
  );
}
