import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGithub, FaWrench } from "react-icons/fa";
import { FaHouse, FaCircleUser, FaMapLocationDot } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full pt-4.5 p-3.5 bg-[#0e0e10] border-b border-[#3f3f46] flex justify-between items-center backdrop-blur-sm">
      <Link className="text-sm ml-3 sm:ml-5 font-medium text-white hover:text-[#3b82f6] transition-colors duration-200" href="/cobalt">
        C O B A L T
      </Link>

      <div className="hidden md:flex items-center space-x-6 mr-3 sm:mr-5">
        <Link
          href="/cobalt/about"
          className="text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center text-sm"
        >
          <FaCircleUser className="mr-2" />
          About Us
        </Link>
        <Link
          href="/cobalt/features"
          className="text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center text-sm"
        >
          <FaWrench className="mr-2" />
          Features
        </Link>
        <Link
          href="/cobalt/roadmap"
          className="text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center text-sm"
        >
          <FaMapLocationDot className="mr-2" />
          Roadmap
        </Link>
        <Link
          href="https://discord.gg/cobaltqol"
          target="_blank"
          className="text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center text-sm"
        >
          <FaDiscord className="mr-2" />
          Discord
        </Link>
        <Link
          href="https://github.com/CobaltQOL"
          target="_blank"
          className="text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center text-sm"
        >
          <FaGithub className="mr-2" />
          Github
        </Link>
      </div>

      <button
        className="md:hidden text-[#a1a1aa] hover:text-white transition duration-200 mr-3 relative h-6 w-6 z-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <span
            className={`block absolute h-[2px] w-full bg-current transition-transform duration-200 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block absolute h-[2px] w-full bg-current transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block absolute h-[2px] w-full bg-current transition-transform duration-200 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed left-0 right-0 w-full md:hidden bg-[#0e0e10] backdrop-blur-sm border-t border-[#3f3f46] shadow-xl transition-all duration-200 z-40 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0 top-[56px]"
            : "opacity-0 invisible -translate-y-2 top-[56px]"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link
            href="/cobalt"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            onClick={closeMenu}
          >
            <FaHouse className="mr-3" />
            Home
          </Link>
          <Link
            href="/cobalt/roadmap"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            onClick={closeMenu}
          >
            <FaMapLocationDot className="mr-3" />
            Roadmap
          </Link>
          <Link
            href="/cobalt/about"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            onClick={closeMenu}
          >
            <FaCircleUser className="mr-3" />
            About Us
          </Link>
          <Link
            href="/cobalt/features"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            onClick={closeMenu}
          >
            <FaWrench className="mr-3" />
            Features
          </Link>
          <a
            href="https://discord.gg/cobaltqol"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <FaDiscord className="mr-3" />
            Discord
          </a>
          <a
            href="https://github.com/CobaltQOL"
            className="text-[#a1a1aa] hover:text-white transition-colors duration-200 text-left w-full pl-[2%] flex items-center py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <FaGithub className="mr-3" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}