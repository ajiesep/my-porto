import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  iconList?: string[]; // Menambahkan prop iconList
}

const ProjectCard = ({ src, title, description, iconList }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e] transition-transform transform hover:scale-105 duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover rounded-t-lg"
      />

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Menambahkan tampilan untuk iconList */}
        {iconList && iconList.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {iconList.map((icon, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full"
              >
                {icon}
              </span>
            ))}
          </div>
        )}

        {/* <button className="mt-3 text-blue-400 hover:text-blue-300 transition-all underline focus:outline-none">
          Show More
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
