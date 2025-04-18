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
    <div className="bg-[#0e0e10] relative min-h-screen overflow-hidden">
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

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#18181b] rounded-md p-3 border border-[#2d2d32] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200">
              <User
                name="Nathan"
                description="Insecure Retard"
                image="https://cdn.discordapp.com/avatars/1324116012240732172/5a9aab44dfd0ee1c809b36b37a08760d.webp?size=128"
              />
            </div>
            <div className="bg-[#18181b] rounded-md p-3 border border-[#2d2d32] hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200">
              <User
                name="Kobe"
                description="Best web developer out here"
                image="https://cdn.discordapp.com/avatars/1187752214429712508/c56ede65ab9588869a61b94374f4536a.webp?size=128"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}