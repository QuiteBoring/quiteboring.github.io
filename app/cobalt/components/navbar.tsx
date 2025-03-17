import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaHouse, FaCircleUser, FaMapLocationDot } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full pt-4.5 p-3.5 bg-slate-800 border-b border-slate-900 flex justify-between items-center backdrop-blur-sm">
      <Link className="text-sm ml-3 sm:ml-5 font-medium text-white" href="/cobalt">
        C O B A L T
      </Link>

      <div className="flex items-center">
        <div className="hidden md:flex space-x-4 mr-3 sm:mr-5">
          <Link
            href="/cobalt/roadmap"
            className="text-zinc-300 hover:text-white transition duration-300 flex items-center"
          >
            <FaMapLocationDot className="mr-2" />
            Roadmap
          </Link>
          <Link
            href="/cobalt/about"
            className="text-zinc-300 hover:text-white transition duration-300 mr-5 flex items-center"
          >
            <FaCircleUser className="mr-2" />
            About Us
          </Link>
          <Link
            href="https://discord.gg/cobaltqol"
            target="_blank"
            className="text-zinc-300 hover:text-white transition duration-300 mr-5 flex items-center"
          >
            <FaDiscord className="mr-2" />
            Discord
          </Link>
          <Link
            href="https://github.com/CobaltQOL"
            target="_blank"
            className="text-zinc-300 hover:text-white transition duration-300 mr-5 flex items-center"
          >
            <FaGithub className="mr-2" />
            Github
          </Link>
        </div>

        <button
          className="md:hidden text-zinc-300 hover:text-white transition duration-300 mr-3 relative h-6 w-6 z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <span
              className={`block absolute h-[2px] w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block absolute h-[2px] w-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block absolute h-[2px] w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 w-full md:hidden bg-slate-800 backdrop-blur-sm border-b border-slate-900/25 shadow-xl transition-all duration-300 z-40 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-5 pt-16">
          <Link
            href="/cobalt"
            className="text-zinc-300 hover:text-white transition duration-300 text-left w-full pl-[2%] flex items-center"
            onClick={closeMenu}
          >
            <FaHouse className="mr-2" />
            Home
          </Link>
          <Link
            href="/cobalt/roadmap"
            className="text-zinc-300 hover:text-white transition duration-300 text-left w-full pl-[2%] flex items-center"
            onClick={closeMenu}
          >
            <FaMapLocationDot className="mr-2" />
            Roadmap
          </Link>
          <Link
            href="/cobalt/about"
            className="text-zinc-300 hover:text-white transition duration-300 text-left w-full pl-[2%] flex items-center"
            onClick={closeMenu}
          >
            <FaCircleUser className="mr-2" />
            About Us
          </Link>
          <a
            href="https://discord.gg/cobaltqol"
            className="text-zinc-300 hover:text-white transition duration-300 text-left w-full pl-[2%] flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <FaDiscord className="mr-2" />
            Discord
          </a>
          <a
            href="https://github.com/CobaltQOL"
            className="text-zinc-300 hover:text-white transition duration-300 text-left w-full pl-[2%] flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
