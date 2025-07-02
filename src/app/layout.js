import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import FloatingButton from "@/components/common/FloatingButton";
import { Toaster } from "react-hot-toast";
import api from "../lib/api/axios";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export default async function RootLayout({ children }) {
  let footerContent = "";
  let footerIcons = [];

  try {
    const res = await api.get("/web/footer", { cache: "force-cache", next: { revalidate: 60 } });
    if (res.data.status === "success") {
      footerContent = res.data.data.content || "";
      footerIcons = res.data.data.icons || [];
    }
  } catch (error) {
    console.error("Failed to fetch footer data", error);
  }

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow mt-[var(--header-y)]">{children}</main>
        <Footer content={footerContent} icons={footerIcons} />
        <FloatingButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

// // import localFont from "next/font/local";
// import { Montserrat } from "next/font/google";
// import "./globals.css";
// import Header from "../components/layout/header/Header";
// import Footer from "../components/layout/footer/Footer";
// import FloatingButton from "@/components/common/FloatingButton";
// // import ToasterWrapper from "@/components/common/ToasterWrapper";
// import { Toaster } from "react-hot-toast";
// import api from "../lib/api/axios";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-montserrat",
//   display: "swap",
// });

// // export const metadata = {
// //   title: "Indel Money",
// //   description:
// //     "Indel Money is one leading gold loan provider in Kerala, India that provides instant, hassle-free digital gold loans with flexible repayment.",
// // };

// export default async function RootLayout({ children }) {
//   let footerContent = null;
//   let footerIcons = [];

//   try {
//     const res = await api.get("/web/footer");
//     if (res.data.status === "success") {
//       footerContent = res.data.data.content;
//       footerIcons = res.data.data.icons;
//     }
//   } catch (error) {
//     console.error("Failed to fetch footer data", error);
//   }

//   return (
//     <html lang="en">
//       {/* <body
//         className={`${amino.variable} font-amino min-h-screen flex flex-col antialiased`}
//       > */}
//       <body className={`${montserrat.variable} font-montserrat min-h-screen flex flex-col antialiased`}>
//         <Header />
//         <main className="flex-grow mt-[var(--header-y)]">{children}</main>
//         <Footer content={footerContent} icons={footerIcons} />
//         <FloatingButton />
//         <Toaster position="top-right" />
//         {/* <ToasterWrapper /> */}
//       </body>
//     </html>
//   );
// }
