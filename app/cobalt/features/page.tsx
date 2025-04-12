"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { 
  FaFish, 
  FaMusic, 
  FaFlask, 
  FaGem, 
  FaTree,
  FaDownload,
  FaGithub,
  FaDiscord,
  FaHome,
  FaUser,
  FaCube,
  FaSkull
} from "react-icons/fa";

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState<string>('Loading total downloads...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const fetchDownloadStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/JellyLabScripts/FarmHelper/releases');
        const releases = await response.json();
        
        let totalDownloads = 0;
        releases.forEach((release: any) => {
          release.assets.forEach((asset: any) => {
            totalDownloads += asset.download_count;
          });
        });
        
        setDownloadCount(`${totalDownloads.toLocaleString()} total downloads`);
      } catch (error) {
        console.error('Error fetching download stats:', error);
        setDownloadCount('Thousands of downloads');
      }
    };
    
    fetchDownloadStats();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0e0e10] min-h-screen">
      <title>Cobalt | Features</title>
      
      <div className="fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } pt-20 pb-10 px-6`}
      >
        {/* Features Section */}
        <section className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-white mb-3">C O B A L T | Features</h1>
            <p className="text-sm text-gray-500 mb-5">
              These are the currently implemented automation modules in Cobalt
            </p>
            <div className="text-blue-400 text-sm">
              <FaDownload className="inline mr-1" />
              <span>{downloadCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trophy Fishing */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaFish className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Trophy Fishing</h3>
              <p className="text-gray-500 mb-5">
                Advanced trophy fishing automation with sea creature detection and optimal pathing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>

            {/* Auto Harp */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaMusic className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Auto Harp</h3>
              <p className="text-gray-500 mb-5">
                Perfect harp playing automation that completes melodies with 100% accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>

            {/* Auto Experiments */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaFlask className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Auto Experiments</h3>
              <p className="text-gray-500 mb-5">
                Intelligent superpairs solver with optimal path calculation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>

            {/* Gemstone Powder */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaGem className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Gemstone Powder</h3>
              <p className="text-gray-500 mb-5">
                Automated gemstone mining with powder grinding optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-amber-900/20 text-xs font-light rounded text-amber-400 border border-[#3f3f46]">BROKEN</span>
              </div>
            </div>

            {/* Park Foraging */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaTree className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Park Foraging</h3>
              <p className="text-gray-500 mb-5">
                Optimized park foraging routes for maximum efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-amber-900/20 text-xs font-light rounded text-amber-400 border border-[#3f3f46]">BROKEN</span>
              </div>
            </div>

            {/* Private Island Foraging */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaHome className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Private Island Foraging</h3>
              <p className="text-gray-500 mb-5">
                Automated foraging on your private island with tree detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>

            {/* Slug Fishing */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaFish className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Slug Fishing</h3>
              <p className="text-gray-500 mb-5">
                Automated Slug fishing QOL feature.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>

            {/* Mining Bot */}
            <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                <FaGem className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Mining Bot</h3>
              <p className="text-gray-500 mb-5">
                Automated Mining Bot for specified resources.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Broken Failsafes Section */}
        <section className="container mx-auto mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-normal text-white mb-2">BROKEN FAILSAFES</h2>
            <p className="text-sm text-gray-500">
              Currently non-functional safety features that need attention
            </p>
          </div>
          

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {/* Player Detection */}
              <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-red-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                  <FaUser className="text-xl text-red-400" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Player Detection</h3>
                <p className="text-gray-500 mb-5">
                  Failsafe to detect nearby players and pause automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-900/20 text-xs font-light rounded text-red-400 border border-[#3f3f46]">BROKEN</span>
                </div>
              </div>
              

              {/* Block Change Detection */}
              <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-red-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                  <FaCube className="text-xl text-red-400" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Block Change Detection</h3>
                <p className="text-gray-500 mb-5">
                  Detection system for unexpected block changes in the environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-900/20 text-xs font-light rounded text-red-400 border border-[#3f3f46]">BROKEN</span>
                </div>
              </div>

              {/* Bad Effects Detection */}
              <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-red-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                  <FaSkull className="text-xl text-red-400" />
                </div>
                <h3 className="text-xl font-normal text-white mb-3">Bad Effects Detection</h3>
                <p className="text-gray-500 mb-5">
                  System to detect harmful potion effects and respond appropriately.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-900/20 text-xs font-light rounded text-red-400 border border-[#3f3f46]">BROKEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}