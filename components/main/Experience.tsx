import { workExperience } from "@/constants/index";
import React from "react";
import { Button } from "../sub/MovingBorders";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="py-24 bg-gray-100 dark:bg-gray-900" id="testimonials">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
        My
        <span className="text-purple-600 dark:text-purple-400">
          {" "}
          Work Experience
        </span>
      </h1>
      <div className="w-full mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-12">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border border-neutral-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-6 md:p-8 lg:p-12 gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Image
                src={card.thumbnail}
                width={1000}
                height={500}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 rounded-md shadow-sm"
              />
              <div className="lg:ml-6">
                <h1 className="text-start text-2xl font-bold text-gray-900 dark:text-white">
                  {card.title}
                </h1>
                <p className="text-start text-gray-600 dark:text-gray-300 mt-2 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

// import { workExperience } from "@/constants/index";
// import React from "react";
// import { Button } from "../sub/MovingBorders";

// export default function Experience() {
//   return (
//     <div className="py-20" id="testimonials">
//       <h1 className="heading">
//         My
//         <span className="text-purple"> works Experience</span>
//       </h1>
//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             duration={Math.floor(Math.random() * 10000) + 10000}
//             borderRadius="1.75 rem"
//             className="flex-1 text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// }
