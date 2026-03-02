"use client";

import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
import DoctorsData from "@/app/doctorsdata/doctorsdata";
import { contactAction } from "@/hooks/contact";

export default function HeroSection({
  heading,
  subheading,
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {heading}
          </h1>
          <p className="text-gray-700 mt-2">{subheading}</p>

          <ul className="mt-6 space-y-6">
            {points.map((item, idx) => {
              const colonIdx = item.indexOf(": ");
              const label = colonIdx !== -1 ? item.slice(0, colonIdx) : null;
              const rest = colonIdx !== -1 ? item.slice(colonIdx + 2) : item;
              return (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#625587] text-white text-sm shrink-0">
                    ✓
                  </span>
                  <span className="text-lg text-gray-700">
                    {label && <strong>{label}: </strong>}
                    {rest}
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={contactAction}
            className="mt-6 bg-[#F8B956] hover:bg-transparent transition text-white hover:text-black border-2 border-transparent hover:border-[#F8B956] font-semibold rounded-full px-8 py-3 text-lg"
          >
            {buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <section className="w-full max-w-md mx-auto">
          {imageSrc && (
            <>
              <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden !z-0">
                <Image
                  src={imageSrc}
                  alt={heading}
                  fill
                  className="object-cover  !z-0"
                />
              </div>
            </>
          )}
          <div className="bg-gray-100 rounded-xl  max-w-md mx-auto px-4 py-6 -mt-4 relative z-0">
            <ul className="text-gray-800 font-medium space-y-1 flex flex-col items-center justify-center">
              <li>{doctorInfo.name}</li>
              <li>{doctorInfo.qualifications}</li>
              <li className="text-center">{doctorInfo.designation}</li>
              <li>{doctorInfo.experience}</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Form Modal */}
      <FormModal />
    </section>
  );
}
