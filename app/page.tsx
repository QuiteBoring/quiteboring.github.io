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
      className="w-8 h-8 text-zinc-500 hover:text-white transition-colors duration-300 ease-in-out"
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
      location: "/cobalt"
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/011/458/701/small_2x/fish-cartoon-icon-clipart-png.png",
      title: "SkyFish",
      description: "A QOL fishing mod, and my first Hypixel Skyblock related mod.",
      utilities: ["Java", "Mixins"],
      location: "https://github.com/QuiteBoring/SkyFish"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      <title>QuiteBoring</title>
      {activeSection === 1 && (
        <button
          onClick={() => scrollToSection(0)}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full"
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
          <h1 className="text-3xl text-red-50">Hi, I&apos;m Nathan 👋</h1>
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
            <h2 className="text-3xl text-red-50 mb-8 text-center">Projects</h2>
            <div className={`flex flex-wrap justify-center gap-6 
              ${projects.length === 1 ? 'max-w-2xl mx-auto' : ''}`}>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`${projects.length === 1 ? 'w-full flex justify-center' : 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'} duration-300 backdrop-blur-sm hover:-translate-y-1 hover:ease-in-out hover:duration-300`}
                >
                  <Project {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeSection === 0 && (
        <button
          onClick={() => scrollToSection(1)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full"
          aria-label="Scroll to bottom"
        >
          <ArrowIcon direction="down" />
        </button>
      )}
    </div>
  );
}
