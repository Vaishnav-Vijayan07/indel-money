"use client";

// import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import FloatingButton from "@/components/common/FloatingButton";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { useEffect, useState } from "react";

// Define font with modern configuration
// const amino = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Amino-Thin.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Amino-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Amino-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Amino-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Amino-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Amino-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-amino",
//   preload: true,
//   display: "swap",
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// export const metadata = {
//   title: "Indel Money",
//   description:
//     "Indel Money is one leading gold loan provider in Kerala, India that provides instant, hassle-free digital gold loans with flexible repayment.",
// };

export default function RootLayout({ children }) {
  const [footerData, setFooterData] = useState(null);

  const fetchFooterData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/footer`, {
        cache: "no-store", // Ensure fresh data
      });
      const result = await response.json();
      if (result.status === "success" && result.data) {
        setFooterData(result.data);
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  return (
    <html lang="en">
      {/* <body
        className={`${amino.variable} font-amino min-h-screen flex flex-col antialiased`}
      > */}
      <body className={`${montserrat.variable} font-montserrat min-h-screen flex flex-col antialiased`}>
        <Header />
        <Provider store={store}>
          <main className="flex-grow mt-[var(--header-y)]">{children}</main>
        </Provider>
        <Footer footerData={footerData?.content} icons={footerData?.icons} />
        <FloatingButton />
      </body>
    </html>
  );
}
