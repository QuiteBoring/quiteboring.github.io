"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0e0e10]">
      <title>C o b a l t</title>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]`}
      >
        <h1 className="text-3xl font-normal text-white mb-3">C O B A L T</h1>
        <p className="text-sm text-gray-500 mb-5">
          The next generation of QOL scripts
        </p>
        <div className="flex space-x-4">
          <a
            className="px-8 py-3 bg-[#18181b] font-light text-white rounded-md border border-[#2d2d32] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Download
          </a>
          <a
            className="px-8 py-3 bg-[#18181b] font-light text-white rounded-md border border-[#2d2d32] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200"
            href="https://discord.gg/cobaltqol"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}