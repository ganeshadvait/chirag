"use client";
import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function HospitalLocation({ locationsectionheading }) {
  return (
    <section className="flex flex-col items-center hospital_location_section py-4 sm:py-8">
      <h2 className="Location_heading font-semibold text-center text-[#7966af] sm:py-4 text-[24px] sm:text-[30px]">
        Our Hospital Location
      </h2>
      <div className="border-grey-100 location_card shadow-lg">
        <div className="leftl-right">
          <a href="https://maps.app.goo.gl/nAWJqH1nyXAZvcth8">

            <Image
              src="/chirag-map.webp"
              alt="Description"
              width={800}    // choose a base width
              height={450}   // choose a base height (16:9 ratio for maps usually)
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="leftl-lright">
          <div className="p-6 lg:w-[83%]">
            <h3 className="gmb_title text-lg font-500 text-gray-900 mb-3">
              {locationsectionheading}
            </h3>

            {/* Google Review */}
            <div className="google_reviews flex text-gray-500 mt-2 mb-3">
              {/* Google Icon and Text */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="text-lg font-bold">4.7</span>
                  <div className="flex text-yellow-500 ml-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Count */}
              <span className="font-medium review_count">
                1790 Google Reviews
              </span>
            </div>

            {/* Address Info */}
            <p className="mt-3 text-gray-700 flex items-start address_info">
               103, 6th Cross Rd, Dollar Layout, BTM 2nd Stage,
              Bengaluru, Karnataka 560076
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-4 w-full mobilectas">
              <a
                href="https://maps.app.goo.gl/WmC3dzUAfeQFuG1A9"
                target="_blank"
                rel="noopener noreferrer"
                className="review_button flex items-center justify-center gap-2 bg-[#f8b956] text-white px-4 py-2 rounded-3xl hover:bg-[#68559e] flex-1"
              >
                <FaMapMarkerAlt /> Get Direction
              </a>

              <a
                // href="https://maps.app.goo.gl/evEJmyVJqMArfBoG7"
                href="https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="google-btn border border-gray-100 flex gap-2 px-6 py-4 rounded-3xl hover:bg-gray-100 flex-1 justify-center"
              >
                <Image
                  src="/iconG.webp"
                  alt="Google Icon"
                  width={28}   // matches w-7 (7 * 4px = 28px)
                  height={28}  // matches h-7
                  className="w-7 h-7"
                />
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
