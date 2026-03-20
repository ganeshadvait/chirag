"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useFormModal } from "@/hooks/useFormModal";
import { contactAction } from "@/hooks/contact";

export interface DoctorInfo {
  image?: string;
  name?: string;
  qualifications?: string;
  designation?: string;
  experience?: string;
  booklink?: string;
  // insurance?: string;
  // free?: string;
  intro?: string;
  intro2?: string;
  highlights?: string[];
}

interface DoctorHeroProps {
  doctor?: DoctorInfo;
}

const DEFAULT_DOCTOR: DoctorInfo = {
  image: "/api/placeholder/300/300",
  name: "Dr. Name",
  qualifications: "Qualifications",
  designation: "Specialist",
  experience: "Experience",
  booklink: "#",
  // insurance: "Have Insurance?",
  // free: "Get Free OPD",
  intro: "Introduction content goes here.",
  intro2: "Experience description goes here.",
  highlights: ["Expertise item 1", "Expertise item 2", "Expertise item 3"],
};

export default function Doctordetailspagehero({
  doctor = {},
}: DoctorHeroProps) {
  const merged = { ...DEFAULT_DOCTOR, ...doctor };

  const { handleButtonClick, FormModal } = useFormModal();

  return (
    <section>
      <div className="doctorhero flex items-stretch justify-center">
        <div
          className="doctorhero__left"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #C5B4F5 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full">
              <div className="doctorhero__img-container">
                <div className="relative mb-2 h-[270px] w-auto min-w-[300px] rounded-[20px] flex items-center justify-center">
                  <Image
                    src={merged.image || "/api/placeholder/300/300"}
                    alt={merged.name || "Doctor"}
                    fill
                    className="doctorhero__img object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center">
                {merged.name || "Doctor Name"}
              </h3>
              <p className="text-sm text-gray-600 mb-1 text-center">
                {merged.qualifications || "Qualifications"}
              </p>
              <p className="text-sm text-gray-600 mb-1 text-center">
                {merged.designation || "Specialist"}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-700 mb-2">
                <Icon icon="lucide:briefcase" className="w-5 h-5" />
                <span>Experience: {merged.experience || "N/A"}</span>
              </div>
              <button
                className="w-full h-[45px] text-white rounded-full mb-2 bg-[#F8B956]"
                onClick={contactAction}
              >
                Book Appointment
              </button>
              {/* <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-gray-700">
                  {merged.insurance || "Have Insurance?"}
                </span>
                <button className="p-0">{merged.free || "Get Free OPD"}</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="doctorhero__right">
          <div className="p-6">
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Introduction:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {merged.intro || "Introduction content not available."}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Experience: {merged.intro2 || "Experience details not available."}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {merged.highlights && merged.highlights.length > 0 ? (
                  merged.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon
                        icon="lucide:check-circle"
                        className="w-5 h-5 text-purple-600 flex-shrink-0"
                      />
                      {highlight}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No highlights available</li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </div>
      {/* Form Modal */}
      <FormModal />
    </section>
  );
}
