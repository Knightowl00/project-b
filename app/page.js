"use client";

//* Import React hooks used for local component state and lifecycle handling.
import { useEffect, useState } from "react";

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
  return (
    <main className="flex flex-col items-center justify-between h-screen bg-white px-4 py-6 font-inter">
      {/* Header: page title and a short description about activation */}
      <div className="text-center">
        <h1 className="text-xl font-semibold">One Way Pass</h1>
        <p className="text-sm text-gray-500">
          Pass will be activated upon scan
        </p>
      </div>

      {/* Logo: large stylized initial using gradient text */}
      <div className="my-4">
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-grotesk">
          M
        </div>
      </div>

      {/* QR Code: visual placeholder for an actual QR code component */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md mb-2">
          <span className="text-xs text-gray-500">QR Code</span>
        </div>
        <p className="text-sm text-gray-600">Scan this code to ride</p>
      </div>

      {/* Pass Details: date, live time, and expiry info */}
      <div className="text-center mt-4">
        <p className="text-lg font-medium">FRIDAY 10</p>
        <p className="text-sm font-mono text-gray-700">
          Current Time: {formatTime(currentTime)}
        </p>
        <p className="text-sm text-gray-700">Expires: 10/10/2025 5:26:08 PM</p>
      </div>

      {/* Bottom Navigation: simple nav buttons mapped from an array */}
      <nav className="flex justify-around w-full mt-6 border-t pt-2">
        {["HOME", "TRACK", "BUY", "MENU"].map((label) => (
          <button
            key={label}
            className="flex flex-col items-center text-xs text-gray-600"
          >
            {/* Icon placeholder */}
            <div className="w-6 h-6 bg-gray-300 rounded-full mb-1" />
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
}
