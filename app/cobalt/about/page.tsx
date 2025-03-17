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
              description="Mentally Unstable"
              image="https://cdn.discordapp.com/avatars/1324116012240732172/b392359380aab7fda7630060c6be2e12.png"
            />
            <User
              name="Twiston"
              description="Quality shitcode 🐸"
              image="https://cdn.discordapp.com/avatars/855798460593733652/79549714d67ed70ac29c71fb258d9f29.png"
            />
            <User
              name="Night"
              description="Can barely play skyblock"
              image="https://cdn.discordapp.com/avatars/452076196419600394/004771eef61f8884ecfb09a40636e0ba.png"
            />
            <User
              name="Nima"
              description="Long live Germany!"
              image="https://cdn.discordapp.com/avatars/697415764306821141/5b26ed78e66734e98ec070c95b3e7762.png"
            />
          </div>

          <div className="w-[70%] mt-6 mb-4 h-px bg-gray-400 opacity-50"></div>

          <h1 className="text-3xl font-normal text-white mb-3">Contributors</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <User
              name="Kessu"
              description="Emotional Support"
              image="https://cdn.discordapp.com/avatars/618823461938135090/bc39e7371900ada8bd1f4af581c9a2f9.png"
            />
            <User
              name="Funzies"
              description="Professional bullshitter"
              image="https://cdn.discordapp.com/avatars/1176527774597521448/7260300494e8c870933a4a6cbf019ab0.png"
            />
            <User
              name="Kobe"
              description="Helped with original website"
              image="https://cdn.discordapp.com/avatars/1187752214429712508/c56ede65ab9588869a61b94374f4536a.png"
            />
            <User
              name="Flow"
              description="Best critiques!"
              image="https://cdn.discordapp.com/avatars/1300063261609295932/28a2a45a6e3c2086568b41f72e5449b7.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}