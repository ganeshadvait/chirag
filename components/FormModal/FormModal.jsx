"use client";
import { useState, useEffect } from "react";

export default function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [utmParams, setUtmParams] = useState({});

  // Capture UTM parameters on mount
  useEffect(() => {
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone_number || formData.phone_number.trim() === "") {
      newErrors.phone_number = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
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
        page_url: window.location.href,
        form_type: "Consultation Form",
        button_text: "Submit",
        message: `New consultation request from ${
          formData.full_name || "Guest"
        }`,
        source: "Website",
        date_time: new Date().toISOString(),
        url: window.location.pathname,
        ...utmParams,
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch("/api/leads/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        setSubmitStatus("error");
        setSubmitMessage("Server error. Please try again or call us directly.");
        return;
      }

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! Your consultation request has been submitted successfully. We'll contact you soon."
        );
        setFormData({ full_name: "", phone_number: "" });
        setTimeout(() => {
          onClose();
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
    } catch (error) {
      setSubmitStatus("error");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#0b1b3f] mb-2">
            Book Free Consultation
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
                    submitStatus === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {submitMessage}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="full_name"
                placeholder="Patient Name (Optional)"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F8B956] placeholder-gray-400"
                disabled={submitting}
              />
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 font-medium">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Mobile Number *"
                  value={formData.phone_number}
                  onChange={handleChange}
                  maxLength="10"
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#F8B956] hover:bg-[#e5a742] text-white text-base font-semibold rounded-full py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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
      </div>
    </div>
  );
}
