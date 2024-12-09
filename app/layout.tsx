import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topheader from "./components/topheader";
import Navbar from "./components/navbar";
import Mobilenavbar from "./components/mobilenavbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <Topheader/>
        <div className="hidden md:block lg:block">
        <Navbar/>
        </div >

        <div className="md:hidden">
        <Mobilenavbar />
        </div>
        </div>
        
        {children}
        <Footer/>
        </body>
    </html>
  );
}