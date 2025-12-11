"use client";

import Image from "next/image";

export default function PilesTreatmentSection() {
  return (
    <section className="w-full bg-white py-12 my-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Best Piles Treatment In Hyderabad
          </h1>

          <ul className="mt-6 space-y-4">
            {[
              "No Cut, No Dressing",
              "Expert Piles Doctors",
              "FREE Doctor Consult",
              "Pay Later Facility",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">
                  ✓
                </span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold rounded-full px-8 py-3 text-lg">
            Calculate Surgery Cost
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/interaction.png"
            alt="Doctor in white coat"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
