"use client";

import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
import { useState } from "react";
import { SUPPORT_PHONE_TEL } from "@/constants/contact";

export default function DoctorsSection({
  heading,
  topDoctors,
  moreDoctors,
  banner,
}) {
  const { handleButtonClick, FormModal } = useFormModal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="doctors" className="w-full max-w-[1200px] mx-auto px-4 py-4">
      {/* TITLE */}
      <h2 className="text-[24px] sm:text-[30px] text-[#625587] text-center font-semibold mb-8">
        {heading}
      </h2>

      {/* DOCTORS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top Doctors */}
        {topDoctors.map((doc, idx) => (
          <DoctorCard key={`top-${idx}`} doctor={doc} />
        ))}

        {/* More Doctors
            - Always visible on desktop
            - Toggle only on mobile */}
        {moreDoctors.map((doc, idx) => (
          <div
            key={`more-${idx}`}
            className={`${showMore ? "block" : "hidden"} sm:block`}
          >
            <DoctorCard doctor={doc} />
          </div>
        ))}
      </div>

      {moreDoctors.length > 0 && (
        <div className="flex justify-center mt-8 sm:hidden">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border-2 border-[#625587] text-[#625587]
            rounded-full px-8 py-2 text-sm font-semibold
            hover:bg-[#625587] hover:text-white transition"
          >
            {showMore ? "View Less" : "View More Doctors"}
          </button>
        </div>
      )}

      <ConsultBanner {...banner} handleButtonClick={handleButtonClick} />

      <FormModal />
    </section>
  );
}

/* ===================== Doctor Card (OLD UI + FULL HEIGHT IMAGE) ===================== */

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md px-5 py-4 h-full">
      <div className="flex gap-4 items-stretch h-full">
        {/* IMAGE – FULL HEIGHT */}
        <div className="w-20 flex-shrink-0 self-stretch">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full h-full rounded-xl object-cover object-top"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[15px] font-semibold text-gray-900">
              {doctor.name}
            </p>

            <p className="text-gray-700 mt-1 text-[12px] leading-snug">
              {doctor.designation}
            </p>

            <p className="text-gray-700 mt-1 text-[12px] leading-snug">
              {doctor.qualification}
            </p>

            <p className="text-[12px] text-gray-500 mt-1">
              Experience:{" "}
              <span className="text-gray-900">{doctor.experience}</span>
            </p>
          </div>

          {/* CTA – LEFT ALIGNED */}
          {/* CTA – LEFT ALIGNED */}

          <a
            href={SUPPORT_PHONE_TEL}
            className="mt-3 self-start inline-block
    border-2 border-[#625587] text-[#625587]
    rounded-full px-4 py-2 text-sm font-medium
    hover:bg-[#625587] hover:text-white transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

/* ======================= Consult Banner ======================= */

function ConsultBanner({
  heading = "",
  points = [],
  buttonText = "",
  imageSrc = "",
  handleButtonClick,
}) {
  return (
    <div className="w-full bg-[#9e8dce] rounded-2xl my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* LEFT */}
        <div className="flex flex-col items-start gap-4 max-w-md p-6">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-white">
            {heading}
          </h2>

          <ul className="text-white text-[16px] sm:text-[18px] list-disc pl-5 space-y-2">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <button
            onClick={handleButtonClick}
            className="rounded-full bg-[#f8b956] px-8 py-4 text-sm font-medium text-white
            hover:bg-[#e0a644] transition"
          >
            {buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block w-full max-w-md">
          <div className="relative w-full aspect-[5/4]">
            <Image
              src={imageSrc}
              alt={heading}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
