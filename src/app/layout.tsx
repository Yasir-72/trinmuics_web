"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";
import SplashScreen from "@/components/layout/splashscreen";

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

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} antialiased bg-[#DDE2E5] px-6 md:px-10`}
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
      </body>
    </html>
  );
}
