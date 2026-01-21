// components/ConsultationForm.jsx
"use client";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import TestimonialSlider from "@/components/partials/reviews/reviews";

import type { Review } from "@/components/reviews-carousel";
import ReviewsCarousel from "@/components/reviews-carousel";

type LegacyTestimonial = {
  // title: string;
  text: string;
  name: string;
  rating: number;
  testimonial_date?: string;
};

interface ConsultationFormProps {
  reviewsData?: {
    testimonials: Array<Review | LegacyTestimonial>;
    ctaText: string;
    ctaLink: string;
  } | null;
}
type FormData = {
  full_name: string;
  phone_number: string;
};

// Simple up arrow SVG
function UpIcon({ className = "" }: { className?: string }) {
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

export default function ConsultationForm({
  reviewsData,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone_number: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    utm_platform: "",
    utm_device: "",
  });

  // Capture UTM parameters on mount
  useEffect(() => {
    setMounted(true);

    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
      utm_platform: urlParams.get("utm_platform") || "",
      utm_device: urlParams.get("utm_device") || "",
    };

    setUtmParams(params);
  }, []);

  // Normalize incoming testimonials to the `Review` shape expected by the carousel
  // const normalizedReviews: Review[] = (reviewsData?.testimonials ?? []).map(
  //   (t, idx) => {
  //     // If it's already a `Review`, keep as is
  //     if (
  //       (t as Review).author !== undefined &&
  //       (t as Review).body !== undefined
  //     ) {
  //       return t as Review;
  //     }
  //     // Otherwise, map legacy shape to `Review`
  //     const lt = t as LegacyTestimonial;
  //     return {
  //       id: `${lt.name}-${idx}`,
  //       body: lt.text,
  //       author: lt.name,
  //       title: lt.title,
  //     };
  //   }
  // );

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name as keyof FormData]: value,
        } as FormData)
    );
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Phone number is required
    if (!formData.phone_number || formData.phone_number.trim() === "") {
      newErrors.phone_number = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!showForm) return;

    // Validate form
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      // Prepare lead data
      const leadData = {
        full_name: formData.full_name || "Guest",
        email: "",
        phone_number: formData.phone_number,
        alt_phone_number: "",
        city: "",
        state: "",
        country: "India",
        condition: "",
        preferred_date: "",
        additional_notes: "",
        page_url: typeof window !== "undefined" ? window.location.href : "",
        form_type: "Consultation Form",
        button_text: "Submit",
        message: `New consultation request from ${
          formData.full_name || "Guest"
        }`,
        source: "Website",
        date_time: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.pathname : "",
        ...utmParams,
      };

      // Submit to API with timeout
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/leads/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
        signal: controller.signal,
      });

      window.clearTimeout(timeoutId);

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        setSubmitStatus("error");
        setSubmitMessage("Server error. Please try again or call us directly.");
        return;
      }

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! Your consultation request has been submitted successfully. We'll contact you soon."
        );

        // Reset form
        setFormData({
          full_name: "",
          phone_number: "",
        });

        // Hide form after 3 seconds
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result?.error ||
            result?.message ||
            "Failed to submit. Please try again."
        );
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Better error messages based on error type
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        setSubmitMessage(
          "Network error. Please check your internet connection and try again."
        );
      } else if (error.name === "AbortError") {
        setSubmitMessage("Request timeout. Please try again.");
      } else {
        setSubmitMessage(
          "An error occurred. Please try again or call us at +91 9999999999"
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Animation styles
  const formAnim = showForm
    ? "max-h-[400px] opacity-100 scale-100"
    : "max-h-0 opacity-0 scale-95 pointer-events-none";

  return (
    <div className="w-full max-w-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-4 md:p-6 mx-auto my-4 z-[1000]">
      {mounted && !showForm && reviewsData && (
        <div className="hidden lg:block min-h-[220px]">
          <TestimonialSlider
            testimonials={(reviewsData?.testimonials ?? []) as any[]}
            ctaText={reviewsData?.ctaText ?? ""}
            ctaLink={reviewsData?.ctaLink ?? "#"}
          />
        </div>
        // <div className=" hidden lg:flex min-h-[600px] w-full items-center justify-center overflow-visible p-8">
        // <div className="w-full max-w-4xl overflow-visible">
        //   <ReviewsCarousel height="300px" reviews={normalizedReviews} />
        // </div>
        // </div>
      )}

      <h2
        className={`text-xl font-semibold text-[#0b1b3f] mt-2 mb-0 md:mb-4 ${
          !showForm ? "hidden" : "block"
        }`}
      >
        Book Appointment
      </h2>

      {/* Success/Error Message */}
      {submitStatus && (
        <div
          className={`mb-4 p-4 rounded-lg ${
            submitStatus === "success"
              ? "bg-green-50 border border-green-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          <div className="flex items-start gap-2">
            {submitStatus === "success" ? (
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <p
              className={`text-sm ${
                submitStatus === "success" ? "text-green-800" : "text-red-800"
              }`}
            >
              {submitMessage}
            </p>
          </div>
        </div>
      )}

      {/* Animated Form Inputs */}
      <div
        className={`overflow-hidden transition-all duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] ${
          !showForm ? "my-0" : "my-4"
        } ${formAnim}`}
      >
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Patient Name */}
          <div>
            <input
              type="text"
              name="full_name"
              placeholder="Patient Name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F8B956] placeholder-gray-400"
              disabled={submitting}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <div className="w-full flex items-center gap-2">
              <div className="px-3 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 font-medium">
                +91
              </div>
              <input
                type="tel"
                name="phone_number"
                placeholder="Mobile Number *"
                value={formData.phone_number}
                onChange={handleChange}
                maxLength={10}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.phone_number ? "border-red-500" : "border-gray-300"
                } text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F8B956] placeholder-gray-400`}
                disabled={submitting}
              />
            </div>
            {errors.phone_number && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.phone_number}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#F8B956] hover:bg-transparent border-2 border-transparent hover:border-[#F8B956] hover:text-black transition text-white text-sm font-semibold rounded-full shadow min-w-[80px] px-2 py-3 md:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Action Buttons: Book Now & Call Now, always visible */}
      <div className="flex flex-row gap-3 mt-0 md:mt-5 w-full items-center">
        <button
          className="group flex-1 bg-[#F8B956] hover:bg-transparent border-2 border-transparent hover:border-[#F8B956] hover:text-black transition text-white text-sm font-semibold rounded-full shadow min-w-[80px] px-2 py-3 md:py-4 flex items-center justify-center gap-2"
          onClick={() => setShowForm((v: boolean) => !v)}
        >
          <img
            src="/uil_calender.svg"
            alt="Calendar"
            className="w-5 h-5 transition group-hover:invert"
          />
          {showForm ? "Close Form" : "Book Now"}
          
        </button>
        {/* Mobile + Tablet: Get Directions */}
        <button
          className="flex-1 lg:hidden bg-[#625587] border-2 border-[#625587] text-white transition text-sm font-semibold rounded-full shadow px-2 py-3"
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/3ox9s9tsJ9rD9tmu7",
              "_blank"
            )
          }
        >
          Get Directions
        </button>

        {/* Desktop only: Call Now */}
        <button
          className="hidden lg:flex flex-1 bg-[#625587] hover:bg-transparent border-2 border-[#625587] hover:text-[#0b1b3f] text-white transition text-sm font-semibold rounded-full shadow px-2 py-3 md:py-4 items-center justify-center"
          onClick={() => window.open("tel:08065916415", "_self")}
        >
          Call Now
        </button>
      </div>
    </div>
  );
}
