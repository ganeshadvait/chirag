"use client";

import React from "react";
// import "./tablestyles.css";

export default function HospitalComparison({ theading, ConditionVideo }) {
  return (
    <section className="w-[95%] md:w-[96%] mx-auto my-10 fade-in">
      <h2 className="table_heading text-center text-xl font-bold text-indigo-900">
        {theading}
      </h2>

      <div className="tablevideo fade-in mt-6 gap-6">

        <div className="w-full lg:w-1/2">
          <div>
            <video
              className="w-full h-[240px] lg:h-[420px] rounded-lg video-container"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={ConditionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>


        {/* TABLE SECTION */}
        <div className="w-full lg:w-1/2 overflow-x-auto table_container m-0 p-0">
          <table className="w-full border-collapse border rounded-lg ">
            <thead>
              <tr className="bg-green-300 text-gray-800">
                <th
                  className="table_head text-center font-semibold py-[10px]"
                  style={{ background: "#F0DA69" }}
                >Features</th>
                <th
                  className="table_head text-center font-semibold py-[10px]"
                  style={{ background: "#F0DA69" }}
                >
                  Other Hospital
                </th>
                <th
                  className="table_head text-center font-semibold py-[10px]"
                  style={{ background: "#F0DA69" }}
                >
                  Lux Hospitals
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Cost
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  Variable
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  FIXED
                </td>
              </tr>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Sterilization
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  Autoclave / ETO
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  PLASMA STERILIZATION
                </td>
              </tr>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Insurance
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  80-85% Coverage
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  100% COVERAGE
                </td>
              </tr>
              <tr className=" border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Recurrence Chances
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  5-10%
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  0-1%
                </td>
              </tr>
              <tr className=" border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Recovery
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  24-48 Hours
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  12-24 Hours
                </td>
              </tr>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Rooms
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  Sharing / Single Room
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  SUITE ROOM
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
