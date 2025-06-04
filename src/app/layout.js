import { Cinzel,Poppins } from 'next/font/google';
import "./globals.css";
import "../../public/css/vendors.css";
import "../../public/css/main.css";
import Header from "../app/layout/Header";
import Footer from "../app/layout/Footer";
import AOSProvider from "../components/AOSProvider";
import ReactQueryProvider from "./context/ReactQueryProvider";

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'], // customize as needed
  variable: '--font-cinzel',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // customize as needed
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "",
  title: {
    default: "Shivaay Corporate - Innovative Business Solutions", 
    template: "%s | Shivaay Corporate ",
  },
  description:
    "Shivaay Corporate provides cutting-edge technology solutions for businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${poppins.variable}`}>
        <ReactQueryProvider>
          <AOSProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AOSProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
