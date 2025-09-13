import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";
// import SplashScreen from "@/components/layout/splashscreen"; // ✅ Import Splash Screen
// import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2500); // splash screen visible for 2.5s
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} antialiased bg-[#DDE2E5] px-2 md:px-10`}
      >
        {/* {loading ? (
          // <SplashScreen /> // ✅ Show splash screen first
        ) : ( */}
          <>
            <Header />
            {children}
            <Footer />
          </>
        {/* )} */}
      </body>
    </html>
  );
}
