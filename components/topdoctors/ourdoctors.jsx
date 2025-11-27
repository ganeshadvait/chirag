"use client";

import { useEffect, useState } from "react";
// import { handleWhatsappConnection } from "../../careconsole"; // adjust path
import LoaderModal from "../LoaderModal";
import Image from "next/image";

const DoctorCard = ({
  url,
  name,
  qualification,
  designation,
  experience,
  description,
  mobileNumberDoctor,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [onClosee, setClosee] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    // Set initially
    updateScreenSize();

    // Listen for resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  const handleClick = () => {
    alert("WhatsApp feature is coming soon!");
  };

  return (
    <section>
      <div
        id="doctors"
        className="doctors_card_contanier flex w-full max-w-4xl h-auto items-stretch rounded-xl border transition-transform duration-300 hover:-translate-y-1 mt-4"
      >
        <div className="left_doctor flex-shrink-0 w-72">
          <div className="doctor_card bg-white shadow-md w-72 text-center">
            <div className="bg-[#CBC9C5] flex items-center justify-center rounded-t-3xl p-3 inner_doctor">
              <Image
                src={url}
                alt={name}
                width={250} // matches max-w-[250px]
                height={200} // pick an approximate height (will scale with h-auto)
                className="max-w-[250px] h-auto mb-[-12px] opacity-100"
              />
            </div>
            <div className="p-4 content_cars">
              <h3 className="text-lg font-bold text-black-900 doctor_name">
                {name}
              </h3>
              <p className="text-sm text-gray-600 designation">{qualification}</p>
              <p className="text-sm text-gray-600 designation">{designation}</p>
              <p className="text-sm text-gray-600 designation">{experience}</p>

              <button
                onClick={handleClick}
                className="dbutton mt-4 border border-black-900 text-black-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
        <div className="right_content flex-1 p-4 flex items-center">
          <div className="text-gray-600 leading-relaxed text-left md:text-center">
            <p className="extra_fonts right_align doctor_desktop_description">
              {description}
            </p>
          </div>
        </div>

      </div>
      {showModal && (
        <LoaderModal
          serviceTitle={serviceTitle}
          showFallback={showFallback}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </section>
  );
};

export default DoctorCard;
