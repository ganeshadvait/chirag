// import React from "react";
// import "./wwtstyles.css";
// import Image from "next/image";

// const conditions = [
//   {
//     src: "/piles 1.png",
//     alt: "Piles / Hemorrhoids",
//     label: "Piles / Hemorrhoids",
//   },
//   {
//     src: "/anal fistula 1.png",
//     alt: "Anal Fistula",
//     label: "Anal Fistula",
//   },
//   {
//     src: "/Anal Fissures 1.png",
//     alt: "Anal Fissures",
//     label: "Anal Fissures",
//   },
//   {
//     src: "/perianal abscess 1.png",
//     alt: "Perianal Abscess",
//     label: "Perianal Abscess",
//   },
  
//   // Add more conditions here if needed
// ];

// const ConditionsWeTreat = () => {
//   return (
//     <section className="py-10 bg-white text-center whatwetreat_section">
//       <h2 className="text-3xl font-semibold text-indigo-900 mb-8">
//         Conditions We Treat
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
//         {conditions.map(({ src, alt, label }, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box"
//           >
//             <div className="mb-4">
//               <Image
//                 src={src}
//                 alt={alt}
//                 width={100}
//                 height={100}
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-gray-700 font-medium text-base">{label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ConditionsWeTreat;

import React from "react";
// import "./wwtstyles.css";
import Image from "next/image";

const ConditionsWeTreat = ({ conditions }) => {
  return (
    <section className="py-10 bg-white text-center whatwetreat_section max-w-[1500px] mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-900 mb-8">
        Conditions We Treat
      </h2>

      <div className="conditions-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {conditions.map(({ src, alt, label }, idx) => (
          <div
            key={idx}
            className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box"
          >
            <div className="mb-4">
              <Image
                src={src}
                alt={alt}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 font-medium text-base">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConditionsWeTreat;
