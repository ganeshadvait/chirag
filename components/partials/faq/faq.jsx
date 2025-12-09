// components/FaqSection.jsx
"use client";
import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      q: "Is laser operation for piles effective?",
      a: "Yes, laser surgery is highly effective for treating piles. It reduces pain, bleeding, and recovery time compared to conventional surgery."
    },
    {
      q: "When do piles need surgery?",
      a: "Surgery is recommended when piles cause severe pain, recurring bleeding, prolapse, or do not respond to medicines and lifestyle changes."
    },
    {
      q: "Is piles operation painful?",
      a: "Laser piles surgery involves minimal discomfort. Most patients return to normal activities within a day or two."
    },
    {
      q: "Do piles recur after laser treatment?",
      a: "Recurrence is rare if proper diet, hydration, and bowel habits are maintained after laser treatment."
    },
    {
      q: "Which doctor treats piles?",
      a: "A general surgeon or a colorectal/proctology specialist treats piles and related anorectal conditions."
    },
    {
      q: "Is piles treatment covered under insurance?",
      a: "Yes, most insurance plans cover piles surgery. Coverage may vary by insurer and policy type."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] divide-y">
        {faqs.map((item, i) => (
          <div key={i} className="px-5 md:px-7">
            {/* Row */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-5 cursor-pointer hover:bg-gray-50 transition text-left"
            >
              <span className="text-lg text-gray-900">{item.q}</span>

              <span
                className={`text-red-500 text-xl transform transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                ❯
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 mb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed pb-4">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
