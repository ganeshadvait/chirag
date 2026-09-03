"use client";

import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
import DoctorsData from "@/app/doctorsdata/doctorsdata";
import { contactAction } from "@/hooks/contact";

export default function HeroSection({
  heading,
  subheading = "",
  points,
  buttonText,
  imageSrc,
}) {
  const { handleButtonClick, FormModal } = useFormModal();

  const doctor = DoctorsData.Proctology["Dr. Rajasekhar"];

  const doctorInfo = {
    image: doctor.url,
    name: doctor.name,
    qualifications: doctor.qualification,
    designation: doctor.designation,
    experience: doctor.experience,
    booklink: doctor.mobileNumberDoctor || "#",
    highlights: doctor.highlights || [],
  };

  return (
    <section className="w-full bg-white pt-4 pb-4 my-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 xl:gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug">
            {heading}
          </h1>
          {subheading && (
            <p className="text-gray-700 mt-2 font-bold text-lg md:text-[20px] lg:text-lg xl:text-[20px]">
              {subheading}
            </p>
          )}

          <ul className="mt-6 space-y-5 md:space-y-6 lg:space-y-5 text-left">
            {points.map((item, idx) => {
              const colonIdx = item.indexOf(": ");
              const label = colonIdx !== -1 ? item.slice(0, colonIdx) : null;
              const rest = colonIdx !== -1 ? item.slice(colonIdx + 2) : item;
              return (
                <li key={idx} className="flex items-start md:items-center gap-3">
                  <span className="w-6 h-6 mt-0.5 md:mt-0 flex items-center justify-center rounded-full bg-[#625587] text-white text-sm shrink-0">
                    ✓
                  </span>
                  <span className="text-base md:text-lg lg:text-base xl:text-lg text-gray-700">
                    {label && <strong>{label}: </strong>}
                    {rest}
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={contactAction}
            className="mt-6 md:mt-8 bg-[#F8B956] hover:bg-transparent transition text-white hover:text-black border-2 border-transparent hover:border-[#F8B956] font-semibold rounded-full px-6 md:px-8 py-3 text-base md:text-lg"
          >
            {buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-md mx-auto">
          {imageSrc && (
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[360px] xl:h-[400px] rounded-xl overflow-hidden z-0">
              <Image
                src={imageSrc}
                alt={heading}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 32rem, 28rem"
                className="object-cover"
              />
            </div>
          )}
          <div className="bg-gray-100 rounded-b-xl w-full px-4 py-5 md:py-6 -mt-4 pt-8 relative z-10 shadow-sm">
            <ul className="text-gray-800 font-medium space-y-1 flex flex-col items-center justify-center text-sm md:text-base text-center">
              <li>{doctorInfo.name}</li>
              <li>{doctorInfo.qualifications}</li>
              <li>{doctorInfo.designation}</li>
              <li>{doctorInfo.experience}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <FormModal />
    </section>
  );
}
