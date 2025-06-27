import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoLogoWhatsapp } from "react-icons/io5";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <a
          href="https://wa.me/918307190216?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed md:bottom-5 bottom-24 md:right-5 right-3 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
          <IoLogoWhatsapp />
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
