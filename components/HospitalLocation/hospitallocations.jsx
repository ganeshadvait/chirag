"use client";
import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function HospitalLocation({ locationsectionheading }) {
  return (
    <section className="flex flex-col items-center hospital_location_section py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="Location_heading font-semibold text-center text-[#7966af] sm:py-4 text-[24px] sm:text-[28px] lg:text-[30px]">
        Our Hospital Location
      </h2>

      <div className="location_card w-full max-w-5xl border border-gray-100 shadow-lg rounded-2xl overflow-hidden flex flex-col lg:flex-row bg-white">
        {/* MAP */}
        <a
          href="https://maps.app.goo.gl/nAWJqH1nyXAZvcth8"
          className="leftl-right relative block w-full aspect-[16/9] lg:aspect-auto lg:w-1/2 lg:self-stretch lg:min-h-[340px] shrink-0"
        >
          <Image
            src="/chirag-map.webp"
            alt="Chirag Global Hospital location on Google Maps"
            fill
            sizes="(max-width: 1024px) 100vw, 512px"
            className="object-cover"
          />
        </a>

        {/* CONTENT */}
        <div className="leftl-lright w-full lg:w-1/2 flex items-center">
          <div className="p-5 md:p-6 lg:p-6 xl:p-8 w-full">
            <h3 className="gmb_title text-base md:text-lg font-medium text-gray-900 mb-3">
              {locationsectionheading}
            </h3>

            {/* Google Review */}
            <div className="google_reviews flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-500 mt-2 mb-3">
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900">4.7</span>
                <div className="flex text-yellow-500 ml-2 text-sm md:text-base">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>

              <span className="font-medium review_count text-sm md:text-base">
                1790 Google Reviews
              </span>
            </div>

            {/* Address Info */}
            <p className="mt-3 text-gray-700 flex items-start address_info text-sm md:text-base leading-relaxed">
              103, 6th Cross Rd, Dollar Layout, BTM 2nd Stage, Bengaluru,
              Karnataka 560076
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full mobilectas">
              <a
                href="https://maps.app.goo.gl/WmC3dzUAfeQFuG1A9"
                target="_blank"
                rel="noopener noreferrer"
                className="review_button flex items-center justify-center gap-2 bg-[#f8b956] text-white px-3 py-3 rounded-3xl hover:bg-[#68559e] transition flex-1 text-sm whitespace-nowrap"
              >
                <FaMapMarkerAlt className="shrink-0" /> Get Direction
              </a>

              <a
                href="https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="google-btn border border-gray-200 flex items-center gap-2 px-3 py-3 rounded-3xl hover:bg-gray-100 transition flex-1 justify-center text-sm whitespace-nowrap"
              >
                <Image
                  src="/iconG.webp"
                  alt="Google Icon"
                  width={28}
                  height={28}
                  className="w-6 h-6 shrink-0"
                />
                Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}