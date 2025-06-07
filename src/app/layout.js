import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import "../../public/css/vendors.css";
import "../../public/css/main.css";
import Header from "../app/layout/Header";
import Footer from "../app/layout/Footer";
import AOSProvider from "../components/AOSProvider";
import ReactQueryProvider from "./context/ReactQueryProvider";
import getWebsiteSettings from "../utils/websiteSettings";
import { metadata } from "./seo/metadata";
import PageName from "./context/PageInfoProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // customize as needed
  variable: "--font-poppins",
  display: "swap",
});
export { metadata };

export default async function RootLayout({ children, params }) {
  const settings = await getWebsiteSettings();
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${poppins.variable}`}>
        <ReactQueryProvider>
          <AOSProvider>
            <main>
              <Header settings={settings} />

              {children}

              <Footer settings={settings} />
            </main>
          </AOSProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
