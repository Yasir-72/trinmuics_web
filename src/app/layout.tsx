import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "@/components/layout/footer";

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
        className={`${montserrat.variable} antialiased bg-[#DDE2E5] px-6 md:px-10`}
      >
        <Header />

        {children}
        <Footer />
        <></>
      </body>
    </html>
  );
}
