// File: components/medicalTourism/mtFaq.jsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I start the process from abroad?",
    answer:
      "Simply WhatsApp us your medical reports or describe your symptoms. Our international coordinator will review your case, share a preliminary diagnosis, and send a treatment plan + cost estimate within 24 hours.",
  },
  {
    question: "How long will I need to stay in India?",
    answer:
      "Most colorectal procedures at Chirag are daycare or require 1–3 days of hospitalisation. We typically recommend staying in Bangalore for 5–7 days for follow-up monitoring before flying home.",
  },
  {
    question: "Will I get a Medical Visa for India?",
    answer:
      "Yes. We issue an official medical visa invitation letter on hospital letterhead. India's e-Medical Visa is available to citizens of 150+ countries and can be processed in 3–5 business days.",
  },
  {
    question: "Can I speak to the doctor before travelling?",
    answer:
      "Absolutely. You can book a video consultation with Dr. Rajasekhar or a senior specialist so you can ask questions, share reports and get a professional opinion before booking your flights.",
  },
  {
    question: "Is the treatment safe? What is your success rate?",
    answer:
      "Chirag Global Hospitals has a 99.5% success rate across 50,000+ procedures. We are NABH accredited — the highest quality standard for Indian hospitals — and use the latest laser and minimally invasive techniques.",
  },
  {
    question: "What happens if I need follow-up after returning home?",
    answer:
      "Our team provides WhatsApp-based follow-up support and video consultations for up to 6 months post-surgery. We also send a complete discharge summary to your home doctor.",
  },
];

export default function MtFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[2px] text-[#C8963E]">
          Common Questions
        </span>

        <h2 className="text-3xl font-bold leading-tight text-[#625587] sm:text-4xl lg:text-5xl">
          International Patient FAQs
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A7078]">
          Everything you need to know before making your decision.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#E2EDF0]"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between bg-[#FAF7F3] px-5 py-[18px] text-left text-sm font-semibold text-[#0B4F5A] transition hover:bg-[#F3EFE8]"
                >
                  <span className="pr-4 text-[#625587]">{faq.question}</span>
                  <span
                    className={`shrink-0 text-xl text-[#625587] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] px-5 pb-4"
                      : "grid-rows-[0fr] px-5 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-0 text-sm leading-7 text-[#5A7078]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}