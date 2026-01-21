import React from "react";
import Image from "next/image";

interface ConditionsWeTreatProps {
  conditions: {
    src: string;
    alt: string;
    label: string;
  }[];
}

const ConditionsWeTreat = ({ conditions }: ConditionsWeTreatProps) => {
  return (
    <section className="py-12 bg-white text-center max-w-[900px] mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-900 mb-10">
        Conditions We Treat
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 px-4">
        {conditions.map(({ src, alt, label }, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl p-6
                       flex flex-col items-center hover:shadow-md transition"
          >
            <div className="mb-4">
              <Image src={src} alt={alt} width={80} height={80} />
            </div>
            <p className="text-gray-700 font-medium text-sm text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConditionsWeTreat;
