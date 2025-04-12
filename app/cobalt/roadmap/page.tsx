"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Roadmap() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const roadmapItems = [
    {
      title: "Website",
      description: "Website to showcase progress and about us with a sleek UI design.",
      progress: 90,
    },
    {
      title: "Cheats",
      description: "Dungeon cheats and simple utilities. Ex: Auto Dojo, Blaze Helper",
      progress: 0,
    },
    {
      title: "Macros",
      description: "Skip the boring parts, and automate some parts of Hypixel Skyblock",
      progress: 30,
    },
    {
      title: "Discord Bot",
      description: "Discord bot for some utilities and embeds made across the server.",
      progress: 5,
    },
  ];

  return (
    <div className="bg-[#0e0e10] relative min-h-screen">
      <title>Roadmap</title>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen pt-[100px] pb-20 box-border px-4`}
      >
        <div className="flex flex-col items-center w-full max-w-4xl">
          <h1 className="text-3xl font-normal text-white mb-6">Roadmap</h1>

          <div className="w-full space-y-4">
            {roadmapItems.map((item) => (
              <div 
                key={item.title}
                className="bg-[#18181b] rounded-md p-4 border border-[#2d2d32] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 w-full"
              >
                <h2 className="text-xl font-normal text-white mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                <div className="w-full bg-[#2d2d32] rounded-full h-1.5">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="text-right mt-1 text-xs text-gray-400">
                  {item.progress}% complete
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}