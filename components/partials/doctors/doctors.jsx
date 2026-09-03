"use client";

import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
import { useState } from "react";
import { contactAction } from "@/hooks/contact";
import {
  SUPPORT_PHONE_DEFAULT,
  toTel,
} from "@/constants/contact";

export default function DoctorsSection({
  heading,
  topDoctors,
  moreDoctors,
  banner,
}) {
  const { handleButtonClick, FormModal, supportPhone } = useFormModal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="doctors" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-0">
      {/* TITLE */}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] text-[#625587] text-center font-semibold mb-8">
        {heading}
      </h2>

      {/* DOCTORS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {/* Top Doctors */}
        {topDoctors.map((doc, idx) => (
          <DoctorCard key={`top-${idx}`} doctor={doc} supportPhone={supportPhone} />
        ))}

        {/* More Doctors
            - Always visible on tablet/desktop
            - Toggle only on mobile */}
        {moreDoctors.map((doc, idx) => (
          <div
            key={`more-${idx}`}
            className={`${showMore ? "block" : "hidden"} sm:block h-full`}
          >
            <DoctorCard doctor={doc} supportPhone={supportPhone} />
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

      <ConsultBanner {...banner} handleButtonClick={contactAction} />

      <FormModal />
    </section>
  );
}

/* ===================== Doctor Card (OLD UI + FULL HEIGHT IMAGE) ===================== */

function DoctorCard({ doctor, supportPhone }) {
  return (
    <div className="bg-white rounded-2xl shadow-md px-3 sm:px-4 py-4 h-full">
      <div className="flex gap-3 xl:gap-4 items-stretch h-full">
        {/* IMAGE */}
        <div className="w-16 sm:w-[72px] xl:w-20 flex-shrink-0 self-stretch">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full h-full rounded-xl object-cover object-top"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
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

          {/* CTA – never wider than the card */}
          <a
            href={toTel(supportPhone)}
            className="mt-3 block w-full max-w-[180px] text-center
    border-2 border-[#625587] text-[#625587]
    rounded-full px-2 py-2 text-[12px] xl:text-[13px] font-medium
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
    <div className="w-full bg-[#9e8dce] rounded-2xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-stretch items-center justify-between gap-6 lg:gap-8">
        {/* LEFT */}
        <div className="flex flex-col items-start justify-center gap-4 w-full md:w-[55%] lg:w-1/2 p-6 lg:p-8">
          <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] xl:text-[32px] font-semibold text-white">
            {heading}
          </h2>

          <ul className="text-white text-[15px] md:text-[16px] xl:text-[18px] list-disc pl-5 space-y-2">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <button
            onClick={handleButtonClick}
            className="rounded-full bg-[#f8b956] px-6 md:px-8 py-3 md:py-4 text-sm font-medium text-white
            hover:bg-[#e0a644] transition"
          >
            {buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex md:w-[45%] lg:w-1/2 justify-center items-end px-4">
          <div className="relative w-full max-w-[320px] lg:max-w-[380px] xl:max-w-md aspect-[5/4]">
            <Image
              src={imageSrc}
              alt={heading}
              fill
              sizes="(max-width: 1024px) 320px, (max-width: 1280px) 380px, 28rem"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}