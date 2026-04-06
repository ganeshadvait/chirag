// File: components/medicalTourism/mtDoctorsStrip.jsx
"use client";

import { useState } from "react";
import ConsultationForm from "./form";

const doctors = [
  {
    name: "Dr. Rajashekar M R",
    qualification: "MBBS, MS",
    role: "Founder & Chief Proctologist",
    experience: "42+ Years",
    badge: "Founder",
    image: "/doctorchiragcard.png",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Rajasekhar",
  },
  {
    name: "Dr. Shreedevi K.N.",
    qualification: "MBBS, MS, FSGE Surgical",
    role: "Gastroenterology & Colorectal Surgeon",
    experience: "12+ Years",
    image: "/doctorshreedevicard.png",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Shreedevi",
  },
  {
    name: "Dr. Padmanabh R Bhat",
    qualification: "MBBS, MS(Gen Surgery), FRCS(Edin)",
    role: "General Surgeon",
    experience: "28+ Years",
    image: "/Dr. Padmanabh R Bhat.png",
    whatsappText:
      "I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Padmanabh",
  },
];

export default function MtDoctorsStrip() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="doctors"
      className="border-b border-[#625587]/10 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#C8963E]">
            Meet Your Treating Specialists
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#625587] sm:text-4xl">
            India&apos;s Most Experienced Proctologists
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#5A7078] sm:text-base">
            Led by Dr. Rajasekhar Mysore — 38+ years, 180k+ Patients Treated.
            You&apos;ll be treated by the specialist, not handed off to a
            junior.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative overflow-hidden rounded-[18px] border border-[#625587]/10 bg-[#FAF7F3] px-5 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#625587] hover:shadow-[0_4px_32px_rgba(11,79,90,0.10)] sm:px-6"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#C8963E] to-[#2A8A9E] opacity-0 transition duration-300 group-hover:opacity-100" />

              {doctor.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-[#F8B956] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.5px] text-white">
                  {doctor.badge}
                </div>
              )}

              <div className="mx-auto mb-4 h-[110px] w-[110px] overflow-hidden rounded-full border-[3px] border-[#C8963E]/25 shadow-[0_4px_20px_rgba(11,79,90,0.15)]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-xl font-bold text-[#625587]">
                {doctor.name}
              </div>

              <div className="mt-1 text-xs font-semibold tracking-[0.5px] text-[#C8963E]">
                {doctor.qualification}
              </div>

              <div className="mt-2 text-sm leading-6 text-[#5A7078]">
                {doctor.role}
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#625587]/7 px-3 py-1.5 text-xs font-semibold text-[#625587]">
                <span>⏱</span>
                <span>{doctor.experience}</span>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="mt-4 block w-full rounded-4xl bg-[#625587] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F8B956]"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Consultation Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 pt-20 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[20px] bg-white p-7 text-[#1C2B30] shadow-[0_12px_64px_rgba(11,79,90,0.16)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#5A7078] transition hover:bg-gray-100 hover:text-[#1C2B30]"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-[#625587]">
              Book Your Consultation
            </h3>
            <p className="mt-1 text-sm text-[#5A7078]">
              We&apos;ll respond within 2 hours with a detailed plan &amp; cost
              estimate.
            </p>

            <ConsultationForm source="doctors_section" />
          </div>
        </div>
      )}
    </section>
  );
}
