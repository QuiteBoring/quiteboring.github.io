"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { User } from "../components/user";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[image:var(--radial)] relative min-h-screen">
      <title>About Us</title>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen pt-[100px] pb-20 box-border`}
      >
        <div className="flex flex-col items-center max-w-[90%]">
          <h1 className="text-3xl font-normal text-white mb-3">About Us</h1>
          <p className="text-sm md:text-base text-gray-500 mb-5 text-center">
            We believe everyone should have access to free QOL scripts. Open source is an incredible concept that we deeply admire and support. We are passionate about giving back to the community.
          </p>

          <div className="w-[70%] mt-2 mb-4 h-px bg-gray-400 opacity-50"></div>

          <h1 className="text-3xl font-normal text-white mb-3">Developers</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <User
              name="Nathan"
              description="Lone Alpha Wolf"
              image="https://cdn.discordapp.com/avatars/1324116012240732172/3ced4d4152ec40f49d4c6a83622ee8f1.png?size=4096"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
