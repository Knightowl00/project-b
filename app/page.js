"use client";

import Image from "next/image";
//* Import React hooks used for local component state and lifecycle handling.
import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosBus } from "react-icons/io";
import { VscCreditCard } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";

//* Home: a simple client-side page component that renders a one-way transit pass UI.
//* - Shows a clock that updates every second using `useState` + `useEffect`.
//* - Renders placeholder areas for a logo, QR code, pass details and bottom nav.
export default function Home() {
  //* `currentTime` holds the current Date; updated every second by the effect below.
  const [currentTime, setCurrentTime] = useState(new Date());

  //* Effect: start an interval timer when component mounts, clear when unmounting.
  //* This keeps `currentTime` in-sync every second. The empty dependency array
  //* ensures the timer is created only once.
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  //* Helper: format a Date into a localized time string (e.g., "5:26:08 PM").
  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour12: true });

  //* JSX: page layout using Tailwind utility classes for spacing and typography.
  //* The main container is a full-height column that spaces header, content, and nav.

  //* Icons list array
  const navIcons = [
    { label: "HOME", icon: IoHomeOutline },
    { label: "TRACK", icon: IoIosBus },
    { label: "BUY", icon: VscCreditCard },
    { label: "MENU", icon: IoMenu },
  ];

  return (
    <main className="flex flex-col items-center justify-between h-screen bg-white px-4 py-6 font-inter">
      {/* Logo: large stylized initial using gradient text */}
      <Logo />
      {/* Detail section */}
      <section className="">
        {/* QR Code: visual placeholder for an actual QR code component */}
        <div className="flex flex-col items-center">
          <p className="text-xl mb-2 text-black ">Scan this code to ride</p>
          <div className="w-45 h-45 bg-gray-200 flex items-center justify-center rounded-md mb-2">
            <span className="text-xs text-gray-500">QR Code</span>
          </div>
        </div>

        {/* Pass Details: date, live time, and expiry info */}
        <div className="text-center mt-4 text-4xl text-black font-extrabold ">
          <h2 className="text-4xl text-lime-500 font-extrabold ">FRIDAY 10</h2>
          <h2 className="text-3xl font-mono ">
            Current Time <br /> {formatTime(currentTime)}
          </h2>
          <h2 className="text-3xl ">
            Expires: 10/10/2025 <br /> 5:26:08 PM
          </h2>
        </div>
      </section>

      {/* Bottom Navigation: simple nav buttons mapped from an array */}
      <nav className="flex justify-around w-full mt-6  pt-2">
        {navIcons.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex flex-col items-center text-xs text-gray-600"
          >
            <Icon className="w-6 h-6 mb-1 text-gray-600" />
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
}
