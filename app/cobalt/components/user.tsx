import Image from "next/image";

export interface UserProps {
  name: string;
  description: string;
  image: string;
}

export function User(props: UserProps) {
  return (
    <div className="  flex items-center p-4 rounded-lg w-[300px] h-[100px] hover:shadow-lg transition-shadow duration-300">
      <Image
        className="rounded-full"
        src={props.image}
        alt={props.name}
        width={50}
        height={50}
      />
      <div className="ml-4">
        <h1 className="text-white text-lg font-bold">{props.name}</h1>
        <h2 className="text-white text-sm">{props.description}</h2>
      </div>
    </div>
  );
}
