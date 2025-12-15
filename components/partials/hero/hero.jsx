"use client";

import Image from "next/image";

export default function PilesTreatmentSection() {
  return (
    <section className="w-full bg-white pt-4 md:pt-12 pb-8 my-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Best Piles Treatment In Hyderabad
          </h1>

          <ul className="mt-6 space-y-6">
            {[
              "No Cut, No Dressing",
              "Expert Piles Doctors",
              "FREE Doctor Consult",
              "Pay Later Facility",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#625587] text-white text-sm">
                  ✓
                </span>
                <span className="text-lg text-gray-700 font-semibold">{item}{"."}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-[#F8B956] hover:bg-transparent transition text-white hover:text-black border-2 border-transparent hover:border-[#F8B956] font-semibold rounded-full px-8 py-3 text-lg">
            Calculate Surgery Cost
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/chiragheroimage.png"
            alt="Doctor in white coat"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
