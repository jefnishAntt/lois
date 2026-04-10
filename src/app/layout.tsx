import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// 1. Heading Font (Bebas Neue)
const bebasNeue = Bebas_Neue({
  weight: "400", // Bebas Neue only comes in 400
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

// 2. Body Font (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Infrastructure Authority | Build & Beyond",
  description: "Senior-level infrastructure solutions and engineering excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
