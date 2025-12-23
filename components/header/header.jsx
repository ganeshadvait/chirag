"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoaderModal from "../LoaderModal";
import Image from "next/image";

export default function Header({
  PhoneNumber,
  mobilectatext,
  mobileNumberHeader,
}) {
  const scrollToSection = (id) => {
    if (!id) {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({
        top: element.offsetTop - 175,
        behavior: "smooth",
      });
    }
  };

  const handleCTAclick = (ctaLabel) => {
    console.log("CTA Clicked:", ctaLabel); // First confirmation
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_click",
      cta_label: ctaLabel,
    });
    console.log("DataLayer now:", window.dataLayer); // Second confirmation
  };
  const [showModal, setShowModal] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [onClosee, setClosee] = useState(false);
  const handleWhatsapp = (title) => {
    alert("WhatsApp feature is coming soon!");
  };

  return (
    <>
      <header className="header w-[96%] h-[90px] mx-auto my-2 flex items-center justify-between p-5 border border-[#ebeff6] bg-white sticky top-[10px] z-[1000] transition-all duration-300 ease-in-out max-w-[1500px] shadow-lg rounded-xl">
        <div className="header__logos">
          <img
            className="logo-fade header__logo"
            src="/Chirag-New-logo_.webp"
          />
          <img
            className="logo-fade header__logotwo"
            src="/CHIRAG 30 years logo.png"
          />
          <img
            className="logo-fade header__logothree"
            src="/Transparent logo NABH.png"
          />
        </div>

        <nav className="header__menu font-semibold">
          <ul>
            {[
              { link: "", value: "Home" },
              { link: "doctors", value: "Doctors" },
              { link: "reviews", value: "Reviews" },
              { link: "faqs", value: "FAQ's" },
              { link: "contact", value: "Contact Us" },
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.link)}
                style={{ cursor: "pointer" }}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          {/* <!-- Mobile Link (≤ 760px) --> */}
          <a
            href={mobileNumberHeader}
            className="header_cta_type_one mobile-only flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 active:translate-y-0.5"
          >
            <Image
              src="/phone-call-icon svg.svg"
              alt="Call Icon"
              width={20} // default size
              height={20} // default size
              className="w-4 h-4 md:w-5 md:h-5 ringing"
            />
            <span className="phone_number">{PhoneNumber}</span>
            <span
              data-cta="header cta call button"
              className="call_now gtm-cta"
            >
              Call Now
            </span>
          </a>

          {/* <!-- Desktop Link (> 760px) --> */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleWhatsapp("Contact");
            }}
            className="header_cta_type_one desktop-only flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 active:translate-y-0.5"
          >
            <Image
              src="/phone-call-icon svg.svg"
              alt="Call Icon"
              width={20} // base size (matches md:w-5 / 20px)
              height={20}
              className="w-4 h-4 md:w-5 md:h-5 ringing"
            />
            <span className="phone_number">{PhoneNumber}</span>
            <span
              data-cta="header cta call button"
              className="call_now gtm-cta"
            >
              Message on WhatsApp
            </span>
          </a>
        </div>
      </header>
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
