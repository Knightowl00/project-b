import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Transit Pass UI",
  description: "One-way transit pass with live clock and QR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="min-w-screen min-h-screen relative">
      <body
        className={`${inter.variable} font-sans antialiased min-w-full min-h-screen bg-white text-black relative`}
      >
        {children}
      </body>
    </html>
  );
}
