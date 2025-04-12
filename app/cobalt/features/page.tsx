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
  FaHome,
  FaUser,
  FaCube,
  FaSkull
} from "react-icons/fa";
import { IconType } from "react-icons";

interface FeatureItem {
  icon: IconType;
  title: string;
  description: string;
  status: {
    active: boolean;
    stable: boolean;
  };
}

interface FailsafeItem {
  icon: IconType;
  title: string;
  description: string;
}

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState<string>('Loading total downloads...');

  const features: FeatureItem[] = [
    {
      icon: FaFish,
      title: "Trophy Fishing",
      description: "Advanced trophy fishing automation with sea creature detection and optimal pathing.",
      status: { active: true, stable: true }
    },
    {
      icon: FaMusic,
      title: "Auto Harp",
      description: "Perfect harp playing automation that completes melodies with 100% accuracy.",
      status: { active: true, stable: true }
    },
    {
      icon: FaFlask,
      title: "Auto Experiments",
      description: "Intelligent superpairs solver with optimal path calculation.",
      status: { active: true, stable: true }
    },
    {
      icon: FaGem,
      title: "Gemstone Powder",
      description: "Automated gemstone mining with powder grinding optimization.",
      status: { active: true, stable: false }
    },
    {
      icon: FaTree,
      title: "Park Foraging",
      description: "Optimized park foraging routes for maximum efficiency.",
      status: { active: true, stable: false }
    },
    {
      icon: FaHome,
      title: "Private Island Foraging",
      description: "Automated foraging on your private island with tree detection.",
      status: { active: true, stable: true }
    },
    {
      icon: FaFish,
      title: "Slug Fishing",
      description: "Automated Slug fishing QOL feature.",
      status: { active: true, stable: true }
    },
    {
      icon: FaGem,
      title: "Mining Bot",
      description: "Automated Mining Bot for specified resources.",
      status: { active: true, stable: true }
    }
  ];

  const failsafes: FailsafeItem[] = [
    {
      icon: FaUser,
      title: "Player Detection",
      description: "Failsafe to detect nearby players and pause automation."
    },
    {
      icon: FaCube,
      title: "Block Change Detection",
      description: "Detection system for unexpected block changes in the environment."
    },
    {
      icon: FaSkull,
      title: "Bad Effects Detection",
      description: "System to detect harmful potion effects and respond appropriately."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const fetchDownloadStats = async (): Promise<void> => {
      setDownloadCount("0 Downloads");
    };
    
    fetchDownloadStats();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0e0e10] min-h-screen">
      <title>Features</title>
      
      <div className="fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } pt-20 pb-10 px-6`}
      >
        <section className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-normal text-white mb-3">Features</h1>
            <p className="text-sm text-gray-500 mb-5">
              These are the currently implemented automation modules in Cobalt
            </p>
            <div className="text-blue-400 text-sm">
              <FaDownload className="inline mr-1" />
              <span>{downloadCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                    <Icon className="text-xl text-blue-400" />
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-500 mb-5">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-900/20 text-xs font-light rounded text-blue-400 border border-[#3f3f46]">ACTIVE</span>
                    {feature.status.stable ? (
                      <span className="px-2 py-1 bg-green-900/20 text-xs font-light rounded text-green-400 border border-[#3f3f46]">STABLE</span>
                    ) : (
                      <span className="px-2 py-1 bg-amber-900/20 text-xs font-light rounded text-amber-400 border border-[#3f3f46]">BROKEN</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-normal text-white mb-2">Broken Features</h2>
            <p className="text-sm text-gray-500">
              Currently non-functional safety features that need attention
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {failsafes.map((failsafe, index) => {
                const Icon = failsafe.icon;
                return (
                  <div 
                    key={index}
                    className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-red-500 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4 border border-[#3f3f46]">
                      <Icon className="text-xl text-red-400" />
                    </div>
                    <h3 className="text-xl font-normal text-white mb-3">{failsafe.title}</h3>
                    <p className="text-gray-500 mb-5">
                      {failsafe.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-900/20 text-xs font-light rounded text-red-400 border border-[#3f3f46]">BROKEN</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}