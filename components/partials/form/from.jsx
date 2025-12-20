// components/ConsultationForm.jsx
"use client";
import { useState, useEffect } from "react";
import TestimonialSlider from "@/components/partials/reviews/reviews";

// Simple up arrow SVG
function UpIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14V6M10 6L5 11M10 6L15 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConsultationForm({ reviewsData }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation styles
  const formAnim = showForm
    ? "max-h-[500px] opacity-100 scale-100 "
    : "max-h-0 opacity-0 scale-95 pointer-events-none";

  // Only allow submit if form is open
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showForm) return;
    setSubmitting(true);
    // Simulate submit
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <div className="w-full max-w-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-4 md:p-6 mx-auto my-4">
      {mounted && !showForm && reviewsData && (
        <div className="hidden lg:block min-h-[220px]">
          <TestimonialSlider
            testimonials={reviewsData.testimonials}
            ctaText={reviewsData.ctaText}
            ctaLink={reviewsData.ctaLink}
          />
        </div>
      )}
      <h2
        className={`text-xl font-semibold text-[#0b1b3f] mt-2 mb-0 md:mb-4  ${!showForm ? "hidden" : "block"
          }`}
      >
        Book Free Consultation
      </h2>

      {/* Animated Form Inputs - hidden on mobile, toggled by Book Now */}
      <div
        className={`overflow-hidden transition-all duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] ${!showForm ? "my-0" : "my-4"
          }  ${formAnim}`}
      >
        <form onSubmit={handleSubmit}>
          {/* Patient Name */}
          <input
            type="text"
            placeholder="Patient Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-gray-700 focus:outline-none placeholder-gray-400 mb-3"
            disabled={submitting}
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
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-gray-700 focus:outline-none placeholder-gray-400"
              disabled={submitting}
            />
          </div>
          {/* Submit inside form for desktop */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#F8B956] hover:bg-transparent border-2 border-transparent hover:border-[#F8B956] hover:text-black transition text-white text-sm font-semibold rounded-full shadow min-w-[80px] px-2 py-3 md:py-4"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Action Buttons: Book Now & Call Now, always visible */}
      <div className="flex flex-row gap-3 mt-0 md:mt-5 w-full items-center">
        <button
          className="group flex-1 bg-[#F8B956] hover:bg-transparent border-2 border-transparent hover:border-[#F8B956] hover:text-black transition text-white text-sm font-semibold rounded-full shadow min-w-[80px] px-2 py-3 md:py-4 flex items-center justify-center gap-2"
          onClick={() => setShowForm((v) => !v)}
        >
          Book Now
          <img
            src="/uil_calender.svg"
            alt="Calendar"
            className="w-5 h-5 transition group-hover:invert"
          />
        </button>
        {/* Mobile + Tablet: Get Directions */}
        <button
          className="flex-1 lg:hidden bg-[#625587] border-2 border-[#625587] text-white transition text-sm font-semibold rounded-full shadow px-2 py-3"
          onClick={() =>
            window.open(
              "https://www.google.com/maps?q=YOUR+CLINIC+ADDRESS",
              "_blank"
            )
          }
        >
          Get Directions
        </button>

        {/* Desktop only: Call Now */}
        <button
          className="hidden lg:flex flex-1 bg-[#625587] hover:bg-transparent border-2 border-[#625587] hover:text-[#0b1b3f] text-white transition text-sm font-semibold rounded-full shadow px-2 py-3 md:py-4 items-center justify-center"
          onClick={() => window.open("tel:+919999999999", "_self")}
        >
          Call Now
        </button>


      </div>
    </div>
  );
}