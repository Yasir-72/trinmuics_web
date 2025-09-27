"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";
// import SplashScreen from "@/components/layout/splashscreen";
import CtaBanner from "@/components/layout/cta";
// import SplashScreen from "@/components/layout/splashscreen"; // ✅ Import Splash Screen
// import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} antialiased bg-[#DDE2E5] px-2 md:px-10`}
      >
        {loading ? (
          <SplashScreen onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
        <>
          <Header />
          {children}
          <CtaBanner />
          <Footer />
        </>
      </body>
    </html>
  );
}
