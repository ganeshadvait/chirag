"use client";
import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
export default function DoctorsSection({
  heading,
  topDoctors,
  moreDoctors,
  banner,
}) {
  const { openModal, FormModal } = useFormModal();
  return (
    <div id="doctors" className="w-full  mx-auto px-4 py-6">
      {/* TITLE */}
      <h2 className="text-[24px] sm:text-[30px] text-[#625587] text-center font-semibold mb-8">
        Our Top Doctors
      </h2>

      {/* TOP DOCTORS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {topDoctors.map((doc, idx) => (
          <DoctorCard key={idx} doctor={doc} openModal={openModal} />
        ))}
      </div>

      {/* CONSULT BANNER */}
      <ConsultBanner {...banner} openModal={openModal} />

      {/* MORE DOCTORS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {moreDoctors.map((doc, idx) => (
          <DoctorCard key={idx} doctor={doc} openModal={openModal} />
        ))}
      </div>

      {/* Form Modal */}
      <FormModal />
    </div>
  );
}

/* ------------------ Doctor Card ------------------ */

function DoctorCard({ doctor, openModal }) {
  return (
    <div className="flex flex-col gap-3 justify-between items-center bg-white rounded-2xl shadow-md px-5 py-4">
      <div className="flex items-start gap-4 w-full">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-20 h-20 rounded-xl object-cover object-top"
        />

        <div className="flex-1">
          <p className="text-md font-semibold text-gray-900">{doctor.name}</p>
          <p className="text-gray-700 mt-1 leading-snug text-[12px]">
            {doctor.designation}
          </p>
          <p className="text-gray-700 mt-1 leading-snug text-[12px]">
            {doctor.qualification}
          </p>
          <p className="text-[12px] text-gray-500 mt-1">
            Experience:{" "}
            <span className="text-gray-900 text-[12px]">
              {doctor.experience}
            </span>
          </p>
        </div>
      </div>

      {/* CTA BUTTON */}
      <button
        onClick={openModal}
        className="border-2 border-[#625587] text-[#625587] rounded-full px-6 py-2 mt-4 md:mt-0 text-center font-semibold leading-tight hover:bg-[#625587] hover:text-white transition flex items-center gap-2 w-full text-center flex justify-center items-center"
      >
        <span className="text-base text-center">Book Free Consultation</span>
      </button>
    </div>
  );
}

/* ------------------ Consult Banner ------------------ */

function ConsultBanner({
  heading = "",
  points = [],
  buttonText = "",
  imageSrc = "",
  openModal,
}) {
  return (
    <div className="w-full bg-[#9e8dce] rounded-2xl my-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 max-w-md p-6">
          {/* <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white ">
                <span className="text-xl">🏪</span>
              </div> */}

          <div>
            <h2 className="text-[30px] sm:text-[32px] font-semibold text-white mb-4">
              {heading}
            </h2>
            <ul className="mt-2 text-white text-[16px] sm:text-[18px] list-disc list-outside pl-4 sm:pl-6 space-y-2">
              {points.length > 0 &&
                points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
          <button
            onClick={openModal}
            className="mt-3 rounded-full bg-[#f8b956] px-8 py-4 text-sm font-medium text-white hover:bg-teal-600 transition transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
          >
            {buttonText}
          </button>
        </div>

        {/* Right Card */}
        <div className="hidden md:block w-full max-w-md rounded-2xl text-center">
          <div className="relative mx-auto w-[80%] aspect-[5/4]">
            <Image
              src={imageSrc}
              alt={heading}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
