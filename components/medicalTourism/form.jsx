"use client";

import { useState } from "react";

const countries = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Saudi Arabia",
  "Kenya",
  "Nigeria",
  "Tanzania",
  "Bangladesh",
  "Sri Lanka",
  "Afghanistan",
  "Other",
];

const treatments = [
  "Piles / Hemorrhoids",
  "Fistula",
  "Fissure",
  "Pilonidal Sinus",
  "Colon Cancer",
  "Ulcerative Colitis",
  "Rectal Prolapse",
  "Constipation",
  "Not Sure / Need Diagnosis",
];

export default function ConsultationForm({ source = "unknown" }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, "");
    return /^\+?\d{7,15}$/.test(cleaned);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setPhoneError("");

    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phoneNumber");

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number (e.g. +1 234 567 8900)");
      setSubmitting(false);
      return;
    }

    const data = {
      full_name: formData.get("fullName"),
      country: formData.get("country"),
      phone_number: phone,
      treatment: formData.get("treatment"),
      source,
    };

    try {
      const res = await fetch("/api/leads/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="fullName"
          className="text-sm font-semibold text-[#625587]"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Your name"
          className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="country"
          className="text-sm font-semibold text-[#625587]"
        >
          Country
        </label>
        <select
          id="country"
          name="country"
          required
          className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]"
        >
          <option value="">Select your country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="phoneNumber"
          className="text-sm font-semibold text-[#625587]"
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          placeholder="+1 000 000 0000"
          className={`rounded-lg border bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E] ${phoneError ? "border-red-400" : "border-[#D8E4E7]"}`}
          onChange={() => phoneError && setPhoneError("")}
        />
        {phoneError && (
          <p className="text-xs text-red-500">{phoneError}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="treatment"
          className="text-sm font-semibold text-[#625587]"
        >
          Condition / Treatment Needed
        </label>
        <select
          id="treatment"
          name="treatment"
          required
          className="rounded-lg border border-[#D8E4E7] bg-[#FAF7F3] px-4 py-3 text-sm text-[#1C2B30] outline-none focus:border-[#2A8A9E]"
        >
          <option value="">Select treatment</option>
          {treatments.map((treatment) => (
            <option key={treatment} value={treatment}>
              {treatment}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 w-full rounded-4xl bg-[#F8B956] px-4 py-3.5 text-base font-bold text-white transition hover:bg-[#625587] disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Book My Consultation →"}
      </button>

      {submitted && (
        <p className="text-center text-sm font-semibold !text-green-600">
          Thank you! Our coordinator will contact you within 2 hours.
        </p>
      )}

      <p className="text-center text-xs text-[#5A7078]">
        🔒 100% private. No spam. A coordinator will contact you within 2
        hours.
      </p>
    </form>
  );
}
