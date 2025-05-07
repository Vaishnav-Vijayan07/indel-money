// import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import FloatingButton from "@/components/common/FloatingButton";
import { ReduxProvider } from "@/lib/redux/provider";

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

export const metadata = {
  title: "Indel Money",
  description:
    "Indel Money is one leading gold loan provider in Kerala, India that provides instant, hassle-free digital gold loans with flexible repayment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${amino.variable} font-amino min-h-screen flex flex-col antialiased`}
      > */}
      <body
        className={`${montserrat.variable} font-montserrat min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow mt-[var(--header-y)]">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
