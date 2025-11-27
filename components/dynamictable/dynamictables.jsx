"use client";
import React from "react";
// import "./tablestyles.css";

export default function HospitalComparison({ thead1, thead2, thead3, theading, rows, ConditionVideo }) {
  return (
    <section className="w-[95%] md:w-[96%] max-w-[1500px] mx-auto">
      <h2 className="table_heading text-center text-xl font-bold text-indigo-900 pt-8 pb-4">
        {theading}
      </h2>

      <div className="tablevideo fade-in mt-6 gap-6">
        <div className="w-full lg:w-1/2">
          <div>
            <video
              className="w-full h-[240px] lg:h-[405px] rounded-lg video-container"
              autoPlay
              muted
              loop
              playsInline
              controls
              // onMouseEnter={(e) => (e.currentTarget.controls = true)}
              // onMouseLeave={(e) => (e.currentTarget.controls = false)}
            >
              <source src={ConditionVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="w-full lg:w-1/2 overflow-x-auto table_container">
          <table className="w-full border-collapse border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-300 text-gray-800">
                <th style={{ background: "#F0DA69" }}>{thead1}</th>
                <th
                  style={{ background: "#F0DA69" }}
                  className="text-center font-semibold py-[10px]"
                >
                {thead2}
                </th>
                <th
                  style={{ background: "#F0DA69" }}
                  className="text-center font-semibold py-[10px]"
                >
                {thead3}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ label, other, lux }, idx) => (
                <tr key={idx} className="border">
                  <td
                    className="table_head font-semibold text-center"
                    style={{ background: "#FAF3D2" }}
                  >
                    {label}
                  </td>
                  <td className="table_others text-center" style={{ background: "#F9F0C3" }}>
                    {other}
                  </td>
                  <td
                    className="table_lux text-center font-medium"
                    style={{ background: "#F6E8A5" }}
                  >
                    {lux}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
