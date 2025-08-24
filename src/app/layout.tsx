import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

// Using Inter as a modern alternative to Raleway
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom Nepal School",
  description:
    "Nurturing Passion, Shaping the Future – A Center of Excellence in Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
