// components/ConsultationForm.jsx
"use client";
import { useState } from "react";

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="w-full max-w-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-6 mx-auto my-10">
      <h2 className="text-xl font-semibold text-[#0b1b3f] mb-4">
        Book Free Consultation
      </h2>

      {/* Patient Name */}
      <input
        type="text"
        placeholder="Patient Name (Optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-coral-400 placeholder-gray-400 mb-3"
      />

      {/* Mobile Number */}
      <div className="w-full flex items-center gap-2">
        <div className="px-3 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700">
          +91
        </div>
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-coral-400 placeholder-gray-400"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full mt-5 bg-[#ff7164] hover:bg-[#ff5b4c] transition text-white text-lg font-semibold py-3 rounded-full shadow">
        BOOK NOW
      </button>
    </div>
  );
}
