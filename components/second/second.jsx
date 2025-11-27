//File : - app/components/second/second.jsx
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { handleWhatsappConnection } from "../../careconsole";
import LoaderModal from "../LoaderModal";

export default function Second({ services, onOpenQuestionnaire }) {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [closee, setClosee] = useState(false);


  const handleClick = (index, title) => {
    alert("WhatsApp feature is coming soon!");

  };

  return (
    <>
      <section className="second_section grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const isWhatsApp = service.link === "whatsapp";
          const isQuestions = service.link === "questions"; // 👈 check for questionnaire

          const hasImage = Boolean(service.image); // ✅ check if image exists

          return (
            <a
              key={index}
              href={isWhatsApp || isQuestions ? "#" : service.link}
              onClick={(e) => {
                e.preventDefault();
                const screenWidth = window.innerWidth;

                // 👇 Trigger questionnaire popup if link === "questions"
                if (isQuestions) {
                  onOpenQuestionnaire?.();
                  return;
                }

                if (screenWidth > 600) {
                  handleClick(index, service.title);
                } else if (isWhatsApp) {
                  handleClick(index, service.title);
                } else {
                  window.location.href = service.link;
                }
              }}
              className="block"
              target="_self"
              rel="noopener noreferrer"
            >
              <div
                className={`sessioncards rounded-xl overflow-hidden shadow-lg ${hasImage
                  ? "min-h-[180px] md:min-h-[235px]" // 📱 180px on mobile, 💻 235px on desktop
                  : "min-h-[30px]"
                  }`}
              >
                {hasImage && (
                  <div className="relative w-full h-40">
                    <Image
                      src={service.image}
                      alt="Healthcare Support Services"
                      layout="fill"
                      objectFit="cover"
                      className="image_div_sessioncard rounded-t-lg"
                    />
                  </div>
                )}
                <div
                  className={`flex content_Card items-center justify-center gap-2 `}
                >
                  <h2 className="service_title font-semibold">{service.title}</h2>
                  <Image
                    className="arrowimg"
                    src={service.arrow}
                    alt="arrow-button"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </a>
          );
        })}
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
    </>
  );
}
