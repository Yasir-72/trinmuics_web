"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} antialiased bg-[#DDE2E5] px-2 md:px-10`}
      >
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
