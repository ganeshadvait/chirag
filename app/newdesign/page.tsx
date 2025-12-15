import React from "react";

import dynamic from "next/dynamic";
import Header from "@/components/partials/header/header";
import Hero from "@/components/partials/hero/hero";
import Number from "@/components/partials/number/number";
import Cost from "@/components/partials/cost/cost";
import Risk from "@/components/partials/risks/risk";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import Why from "@/components/partials/why/why";
import Google from "@/components/partials/google/google";
import Info from "@/components/partials/info/info";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";
import Reviews from "@/components/partials/reviews/reviews";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";

const HospitalComparisond = dynamic(
  () => import("@/components/dynamictable/dynamictables")
);

export default function NewDesign() {
  const faqs = [
    {
      faqTitle: " What are piles?",
      faqAnswer:
        "Piles are swollen veins in the anal area that may cause pain, itching, or bleeding.",
    },
    {
      faqTitle: "How do I know if I have piles?",
      faqAnswer:
        "Common signs include bleeding during bowel movements, a lump near the anus, pain, or irritation.",
    },
    {
      faqTitle: "Do all piles need surgery?",
      faqAnswer:
        "No. Early-stage piles can often be treated with medicines, fibre, ointments, and Sitz baths.",
    },
    {
      faqTitle: "What is laser treatment for piles?",
      faqAnswer:
        "Laser treatment is a minimally invasive procedure that seals the swollen veins with controlled laser energy — no major cuts or stitches.",
    },
    {
      faqTitle: "Is laser treatment painful?",
      faqAnswer:
        "Most patients experience minimal discomfort compared to traditional surgery.",
    },
    {
      faqTitle: "How long does the procedure take?",
      faqAnswer: "Usually around 20–30 minutes, depending on the case.",
    },
  ];
  const pilesComparisonContent = {
    theading: "Piles Treatment at Chirag Hospitals",
    ConditionVideo: "/chirag-piles-video.mp4",

    title: "What are Piles or Hemorrhoids?",
    description: (
      <>
        Piles are swollen blood vessels found inside or under the skin around
        the bottom. These are also called <strong>Hemorrhoids</strong>. There
        are 3 types of Piles.
      </>
    ),

    points: [
      "External Hemorrhoids",
      "Internal Hemorrhoids",
      "Interno – External Piles",
    ],
  };
  const defaultLocationHeading =
    "Our Hospital location Chirag Global Hospitals";
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* LEFT SIDE 70% */}
        <div className="space-y-10">
          <Hero />
          <Number />
          <Cost />
          <Risk />
          <Doctors />
          <HospitalLocation locationsectionheading={defaultLocationHeading} />
          <CostDepends />
          <InsurenceAdvisor />
          <Why />
          <HospitalComparisond {...pilesComparisonContent} />
          <Info />
          <CtaBanner />
          {faqs.length > 0 && (
            <Faqs
              className="md:!w-[95%] w-full mx-[unset]"
              // fheading={fheading}
              faqs={faqs.map((faq) => ({
                faqquestion: faq.faqTitle,
                faqanswer: faq.faqAnswer,
              }))}
            />
          )}
        </div>

        {/* RIGHT SIDE 30% (Sticky Form) */}
        <div className="relative">
          {/* Desktop: sticky, Mobile: fixed bottom */}
          <div className="hidden lg:block sticky top-24">
            <Form />
          </div>
          <div
            className="block lg:hidden fixed bottom-0 left-0 w-full z-50 bg-transparent   px-4 py-1"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
