"use client";
import { useState, useEffect } from "react";

// Data
const modalData = {
  title: "Piles Cost at Lux Hospitals",
  description: "We offer affordable, advanced surgical options with expert care and same-day discharge in most cases.",
  note: "Actual cost may vary based on condition severity, diagnosis, and treatment type. Final estimate will be shared after consultation.",
  buttonText: "Book Appointment",
  buttonLink: "https://wa.me/917969084444",
  table: [
    { procedure: "Open Surgery", cost: "₹50,000 onwards" },
    { procedure: "Laser Surgery", cost: "₹60,000 onwards" },
    { procedure: "Laser + Harmonic Surgery", cost: "₹65,000 onwards" },
  ],
};

// Table Component
function CostTable({ rows }) {
  return (
    <div className="w-[85%] mx-auto overflow-hidden rounded-[26px] shadow-[8px_8px_5.3px_0px_#090F3440] mb-6">
      <table className="w-full mx-auto text-sm text-center border-collapse">
        <thead className="bg-[#994F9F] text-white text-sm sm:text-base">
          <tr>
            <th className="px-4 py-3 border-r border-gray-300">Procedures Type</th>
            <th className="px-4 py-3">Estimated Cost</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`text-sm sm:text-base border-b border-gray-300`}
            >
              <td className="px-4 py-3 border-r border-gray-300">{row.procedure}</td>
              <td className="px-4 py-3">{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Modal Component
function CostModal({ data, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto">
      <div
        className="bg-white p-6 rounded-2xl w-[90%] sm:w-full max-w-2xl shadow-lg mx-auto relative 
          sm:mt-[100px] mt-[50px] mb-6 
          max-h-[calc(100vh-120px)] 
          overflow-y-auto sm:overflow-hidden
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-center text-[#994F9F] mb-3">
          {data.title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-center text-gray-600 mb-6">
          {data.description}
        </p>

        {/* Table */}
        <CostTable rows={data.table} />

        {/* Note */}
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          <strong>Note:</strong> {data.note}
        </p>

        {/* Button */}
        <button
          onClick={() => window.open(data.buttonLink, "_blank")}
          className="w-full bg-[#994F9F] text-white py-3 rounded-lg font-medium"
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}

// Main Component
export default function CostPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center p-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-[#994F9F] text-white px-4 py-2 rounded-lg"
      >
        View Surgery Cost
      </button>

      {open && <CostModal data={modalData} onClose={() => setOpen(false)} />}
    </div>
  );
}
