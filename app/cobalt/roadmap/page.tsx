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
      description:
        "Website to showcase progress and about us with a sleek UI design.",
      progress: 75,
    },
    {
      title: "Cheats",
      description:
        "Dungeon cheats and simple utilities. Ex: Auto Dojo, Blaze Helper",
      progress: 0,
    },
    {
      title: "Macros",
      description:
        "Skip the boring parts, and automate some parts of Hypixel Skyblock",
      progress: 5,
    },
    {
      title: "Discord Bot",
      description:
        "Discord bot for some utilities and embeds made across the server.",
      progress: 3,
    },
  ];

  return (
    <div className="bg-[image:var(--radial)]">
      <title>Roadmap</title>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center mt-4 z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen pt-[100px] pb-20 box-border px-4`}
      >
        <h1 className="text-3xl font-normal text-white mb-6">Roadmap</h1>

        <div className="relative w-full max-w-4xl">
          <div className="flex flex-col space-y-10">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-center ${index === roadmapItems.length - 1 ? "mb-0" : "mb-10"}`}
              >
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all w-full">
                  <h2 className="text-xl text-white font-medium">
                    {item.title}
                  </h2>
                  <p className="text-white/70 mt-2 text-sm">
                    {item.description}
                  </p>
                  <div className="mt-3 h-1 bg-white/10 rounded-full">
                    <div
                      className="h-full bg-green-400 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}