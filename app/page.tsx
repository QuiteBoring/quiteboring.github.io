"use client";

import { useEffect, useRef, useState, useCallback } from 'react'; 
import Project from './components/Project';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<0 | 1>(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === 'home' ? 0 : 1);
          }
        });
      },
      {
        threshold: 0.5,
        root: containerRef.current
      }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((section: 0 | 1) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const ref = section === 0 ? homeRef : projectsRef;
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => setIsScrolling(false), 300);
  }, [isScrolling]); 

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isScrolling) return;
      if (e.key === 'ArrowDown' && activeSection === 0) {
        scrollToSection(1);
      } else if (e.key === 'ArrowUp' && activeSection === 1) {
        scrollToSection(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, isScrolling, scrollToSection]);

  const ArrowIcon = ({ direction }: { direction: 'up' | 'down' }) => (
    <svg
      className="w-8 h-8 text-gray-500 hover:text-blue-400 transition-colors duration-300 ease-in-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {direction === 'down' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      )}
    </svg>
  );

  const projects = [
    {
      image: "/projects/cobalt.png",
      title: "Cobalt",
      description: "A feature rich Hypixel Skyblock QOL mod. With the intent of bringing a free and open source mod to the community.",
      utilities: ["NextJS", "Tailwind", "CSS", "Java", "Kotlin", "Mixins"],
      location: "/cobalt",
      status: "ACTIVE"
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/011/458/701/small_2x/fish-cartoon-icon-clipart-png.png",
      title: "SkyFish",
      description: "A QOL fishing mod, and my first Hypixel Skyblock related mod.",
      utilities: ["Java", "Mixins"],
      location: "https://github.com/QuiteBoring/SkyFish",
      status: "ARCHIVED"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0e0e10]"
    >
      <title>QuiteBoring</title>
      {activeSection === 1 && (
        <button
          onClick={() => scrollToSection(0)}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-[#18181b] border border-[#3f3f46] hover:border-blue-500 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowIcon direction="up" />
        </button>
      )}

      <section
        id="home"
        ref={homeRef}
        className="snap-start grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      >
        <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
          <h1 className="text-3xl text-white">Hi, I&apos;m Nathan 👋</h1>
          <p className="text-sm text-gray-500">I am an experienced and passionate developer.</p>
        </main>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="snap-start min-h-screen flex items-center justify-center py-16 px-4 sm:px-8"
      >
        <div className="w-full">
          <div className="container mx-auto">
            <h2 className="text-3xl text-white mb-8 text-center">Projects</h2>
            <div className={`flex flex-wrap justify-center gap-6 
              ${projects.length === 1 ? 'max-w-2xl mx-auto' : ''}`}>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`${projects.length === 1 ? 'w-full flex justify-center' : 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'}`}
                >
                  <div className="bg-[#18181b] rounded-lg p-6 border border-[#3f3f46] transition-all hover:border-blue-500 hover:-translate-y-1">
                    <Project {...project} />
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className={`px-2 py-1 text-xs font-light rounded border border-[#3f3f46] ${
                        project.status === "ACTIVE" 
                          ? "bg-blue-900/20 text-blue-400" 
                          : "bg-amber-900/20 text-amber-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeSection === 0 && (
        <button
          onClick={() => scrollToSection(1)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-[#18181b] border border-[#3f3f46] hover:border-blue-500 transition-all"
          aria-label="Scroll to bottom"
        >
          <ArrowIcon direction="down" />
        </button>
      )}
    </div>
  );
}