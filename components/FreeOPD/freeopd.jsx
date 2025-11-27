"use client";
import React, { useState } from "react";
// import "./freeopdstyles.css";
import { handleWhatsappConnection } from "../../careconsole";
import LoaderModal from "../LoaderModal";
import Image from "next/image";

export default function FreeOpdSection({ deskimage, mobileimage }) {
  const [showModal, setShowModal] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
   const [onClosee, setClosee] = useState(false);
  const handleWhatsapp = (title) => {
    setShowModal(true);
    setClosee(true);
    setServiceTitle(title);
    setShowFallback(false);

    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 3000);

    handleWhatsappConnection(title)
      .then((success) => {
        if (success) {
          clearTimeout(fallbackTimer);
          window.location.href = `https://wa.me/917969084444?text=Hi, I'm interested in ${title}`;
        } else {
          setShowFallback(true);
        }
      })
      .catch(() => {
        setShowFallback(true);
      });
  };
  return (
    <div className="w-full max-w-[1500px] mx-auto">
      {/* <h2 className="mt-8 text-3xl font-semibold text-center text-indigo-900 mb-6">
                Get a Free Consultation
            </h2> */}

      <section className="freeopd-section w-[96%] md:w-[80%] my-8 mx-auto  rounded-xl shadow bg-[#1a1a1a]">
        <div className="flex  md:p-0 flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content Section */}
          <div className="freeoldcontetdiv w-full px-2 md:p-10 md:w-1/2 text-center">
            <h2 className="freeopd-heading mt-4 text-xl md:text-3xl font-semibold text-white">
              Get a Free Consultation
            </h2>
            <h2 className="freeopd-content text-base md:text-xl font-medium text-white mt-6 mb-4 leading-relaxed">
              Right treatment begins with an accurate opinion. <br />
              Lux Hospitals offers Free OPD—Patient First, Always.
            </h2>
            <button
              className="freeopd-btn mt-4 px-8 py-3 bg-white text-black text-base font-medium rounded-full hover:bg-indigo-900 hover:text-white transition-transform duration-300 hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsapp("FreeOPD"); // ✅ uses your loader logic
              }}
              // onClick={() => {
              //     window.location.href = "https://wa.me/917969084444";
              // }}
            >
              Book Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Desktop Image */}
            <Image
              src={deskimage}
              alt="Free OPD"
              width={400} // adjust as needed
              height={300} // adjust as needed
              className="hidden sm:block w-full max-w-sm"
            />

            {/* Mobile Image */}
            <Image
              src={mobileimage}
              alt="Free OPD Mobile"
              width={400} // adjust based on your design
              height={300} // adjust based on your design
              className="block sm:hidden w-full max-w-sm"
            />
          </div>
        </div>
      </section>
      {showModal && (
        <LoaderModal
          serviceTitle={serviceTitle}
          showFallback={showFallback}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
