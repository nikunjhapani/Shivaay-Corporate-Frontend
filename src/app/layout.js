import { Cinzel, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../../public/css/vendors.css";
import "../../public/css/main.css";
import "../../public/css/custom.css";
import Header from "../app/layout/Header";
import Footer from "../app/layout/Footer";
import AOSProvider from "../components/AOSProvider";
import ReactQueryProvider from "./context/ReactQueryProvider";
import getLayoutData from "../utils/getLayoutData";
import CustomCursor from "../components/ui/CustomCursor";
// import { GlobalLoadingProvider } from "./context/GlobalLoadingContext";
// import LoaderManager from "../components/LoaderManager";
// import PageLoader from "../components/PageLoader";
// import { metadata } from "./seo/metadata";
import ParentHeader from "./layout/ParentHeader";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
// export { metadata };

export default async function RootLayout({ children }) {
  const { settings, menu, submenuMap } = await getLayoutData();

  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${poppins.variable}`}>
        <ReactQueryProvider>
          {/* <GlobalLoadingProvider> */}
            {/* <LoaderManager /> */}

            <AOSProvider>
              <CustomCursor />
              {/* <PageLoader /> */}
              <main>
                {/* <Header settings={settings} /> */}
                <ParentHeader
                  settings={settings}
                  menu={menu}
                  submenuMap={submenuMap}
                />
                {children}

                <Footer
                  settings={settings}
                  menu={menu}
                  submenuMap={submenuMap}
                />
              </main>
              {/* <Footer settings={settings} menu={menu} submenuMap={submenuMap} /> */}
            </AOSProvider>
          {/* </GlobalLoadingProvider> */}
        </ReactQueryProvider>
        {/* <Script src="/js/main.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
