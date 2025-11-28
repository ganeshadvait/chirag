"use client";
import React, { useState } from "react";
// import "./fastyles.css";

type FAQ = {
  faqquestion: string;
  faqanswer: string;
};

type Props = {
  // fheading: string;
  faqs: FAQ[];
};

export default function Faqs({ faqs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs_section">
      <h2 className="text-3xl text-[#7966af] mb-[24px] text-center font-bold faq_title">
        {/* {fheading || "FAQ’s (Frequently Asked Questions)"} */}
        Frequently Asked Questions
      </h2>
      <div className="faq_wrapper inner_section">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion_head">
              <span>{faq.faqquestion}</span>
              <p className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path stroke="currentColor" d="M13.5 5.5 8 11 2.5 5.5" />
                </svg>
              </p>
            </div>

            <div
              className="accordion_content"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
                transform:
                  activeIndex === index ? "translateY(0)" : "translateY(-10px)",
                transition: "all 0.3s ease",
              }}
            >
              <p className="faq_answer">{faq.faqanswer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
