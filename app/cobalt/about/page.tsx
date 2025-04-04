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
              description="Insecure Retard"
              image="https://images-ext-1.discordapp.net/external/25CCu-pIKciIJPuddE68gplsFVlXAHWC4U5vXc-JjRQ/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1324116012240732172/3d1f2b5923f3ea1f0f18754377db2347.png"
            />
            <User
              name="Night"
              description="Chill Guy"
              image="https://images-ext-1.discordapp.net/external/Os0wZG-T6bvRljd_riR_sh0OJr8Boy_iEtx409y4hU8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/452076196419600394/004771eef61f8884ecfb09a40636e0ba.png"
            />
            <User
              name="Twiston"
              description="Frog"
              image="https://images-ext-1.discordapp.net/external/spXcCAR1LT8HG_3ndwzHqVgJWHi9HjIj0s30y0S53g4/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/855798460593733652/79549714d67ed70ac29c71fb258d9f29.png"
            />
            <User
              name="Nima"
              description="Communist German"
              image="https://images-ext-1.discordapp.net/external/V4MNxSWbGCAXGafZwgsKTY5777Pb6Dvzm1ucRiHjmsM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/697415764306821141/5b26ed78e66734e98ec070c95b3e7762.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
