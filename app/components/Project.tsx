import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  utilities: Array<string>;
  location: string;
}

export default function Project({ title, description, utilities, location }: ProjectProps) {
  return (
    <Link 
      className="bg-zinc-800/40 flex flex-row items-center p-4 rounded-lg w-full max-w-xl hover:shadow-lg transition-shadow duration-300 min-h-[128px]"
      href={location}
    >  
      <div className="flex-1 min-w-0 h-full flex flex-col justify-center">  
        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {utilities.map((tech, index) => (
              <span 
                key={index}
                className="bg-zinc-800/40 border border-zinc-700 rounded-lg 
                  px-2 py-1 text-white text-xs sm:text-sm truncate 
                  hover:bg-zinc-700/40 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}