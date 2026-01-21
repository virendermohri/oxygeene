import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoLogoWhatsapp } from "react-icons/io5";
import FestivalBanner from "@/components/FestivalBanner";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
;




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFCY1RSG1N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFCY1RSG1N');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <footer>
          {/* <FestivalBanner/> */}
          <Navbar />
        </footer>
        <aside>

          <a
            href="https://wa.me/917015875541?text=Hello%20CareKwik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed md:bottom-5 bottom-24 md:right-5 p-2 right-3 z-50 bg-green-500 text-white  rounded-full shadow-lg hover:bg-green-600"
          >
            <IoLogoWhatsapp className="text-2xl" />
          </a>
        </aside>
        <main>

          {children}
        </main>
        <footer>

          <Footer />
        </footer>
      </body>

    </html>
  );
}
