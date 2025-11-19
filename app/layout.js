import "./globals.css";
import { Overpass, Source_Sans_3, Montserrat } from "next/font/google";

// Configure fonts with CSS variables
const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Transit Pass UI",
  description: "One-way transit pass with live clock and QR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpass.classNAme} ${sourceSans.className} ${montserrat.className} font-overpass min-w-full min-h-screen bg-white text-black antialiased mt-[500px]`}
      >
        {children}
      </body>
    </html>
  );
}
