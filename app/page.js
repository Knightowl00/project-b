"use client";

import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { IoIosBus } from "react-icons/io";
import { VscCreditCard } from "react-icons/vsc";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [qrCodeValue, setQrCodeValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setQrCodeValue(`PASS-${now.toISOString()}`); // 👈 QR updates every 2s
    }, 2000);

    return () => clearInterval(interval);
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
    <main className="flex flex-col items-center justify-between h-screen bg-white px-4 py-6 font-overpass">
      <Logo />

      <section className="text-center w-full">
        <div className="flex flex-col items-center mb-4">
          <p className="text-xl mb-2 text-black font-source">
            Scan this code to ride
          </p>
          <div className="w-full h-32 flex items-center justify-center rounded-md">
            <QRCodeCanvas
              value={qrCodeValue}
              size={128}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
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
          <div
            key={label}
            className="flex flex-col items-center text-xs gap-2 text-gray-600 font-source"
          >
            <Icon className="w-6 h-6 mb-1" />
            <p>{label}</p>
          </div>
        ))}
      </nav>
    </main>
  );
}
