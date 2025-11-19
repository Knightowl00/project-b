"use client";

import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { IoIosBus } from "react-icons/io";
import { VscCreditCard } from "react-icons/vsc";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour12: true });

  const navIcons = [
    { label: "HOME", icon: IoHomeOutline },
    { label: "TRACK", icon: IoIosBus },
    { label: "BUY", icon: VscCreditCard },
    { label: "MENU", icon: IoMenu },
  ];

  return (
    <main className="flex flex-col items-center justify-between h-screen bg-white px-4 py-6 font-overpass mb-50">
      <Logo />

      <section className="text-center">
        <div className="flex flex-col items-center mb-4">
          <p className="text-xl mb-2 text-black font-source">
            Scan this code to ride
          </p>
          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
            {/* ✅ Replace placeholder with QR code */}
            <QRCodeCanvas
              value="https://transitpass.app/ride/12345" // 👈 your pass URL or unique code
              size={128} // size in pixels
              bgColor="#ffffff"
              fgColor="#000000"
              level="H" // error correction level
            />
          </div>
        </div>

        <h2 className="text-4xl text-lime-500 font-extrabold font-montserrat">
          FRIDAY 10
        </h2>
        <h2 className="text-3xl font-source mt-2">
          Current Time <br /> {formatTime(currentTime)}
        </h2>
        <h2 className="text-3xl mt-2 font-overpass">
          Expires: 10/10/2025 <br /> 5:26:08 PM
        </h2>
      </section>

      <nav className="flex justify-around w-full mt-6 pt-2">
        {navIcons.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex flex-col items-center text-xs text-gray-600 font-source"
          >
            <Icon className="w-10 h-10 mb-1" />
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
}
