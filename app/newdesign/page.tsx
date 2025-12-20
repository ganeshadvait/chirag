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
  const pilesHeroData = {
    heading: "Best Piles Treatment In Hyderabad",
    points: [
      "No Cut, No Dressing",
      "Expert Piles Doctors",
      "FREE Doctor Consult",
      "Pay Later Facility",
    ],
    buttonText: "Calculate Surgery Cost",
    imageSrc: "/chiragheroimage.png",
  };
  const statsSectionData = {
    heading: "Trusted by Patients\nWorldwide",
    description:
      "Our healthcare efficiency, faster discharge times, and superior recovery procedures help patients heal quickly and safely.",
    stats: [
      {
        value: "24 hr",
        label: "Discharge",
      },
      {
        value: "98%",
        label: "Patient Satisfaction",
      },
      {
        value: "3 Days",
        label: "Recovery Time",
      },
      {
        value: "5 Days",
        label: "Average Stay",
      },
    ],
  };


  const costSectionData = {
    title: "Check Surgery Cost",
    points: [
      "Find the total cost of Surgery at the best hospitals.",
      "Compare surgery prices across top hospitals.",
      "Get a clear estimate before visiting the hospital.",
    ],
    buttonText: "Calculate Surgery Cost",
    imageSrc: "/chiraggpt.png",
  };
  const treatmentCostDependsData = {
    heading: "Treatment Cost Depends On",
    items: [
      {
        titleBold: "Type of",
        titleRest: "Procedure",
        icon: "/typeofprocedure.png",
      },
      {
        titleBold: "Severity of",
        titleRest: "the Disease",
        icon: "/severitydisease.png",
      },
      {
        titleBold: "Past Medical",
        titleRest: "Condition",
        icon: "/pastmedical.png",
      },
      {
        titleBold: "Contact",
        titleRest: "for exact cost",
        icon: "/contact.png",
      },
    ],
    ctaText: "Chat with Expert",
  };
  const insuranceAdvisorData = {
    cards: [
      {
        titlePrefix: "Check",
        titleHighlight: "Insurance Coverage",
        description:
          "Find out if this treatment is covered in your insurance policy or not.",
        image: "/checkinsurancecoverage.png",
        imageAlt: "Insurance coverage illustration",
        buttonText: "Check Insurance Coverage",
      },
      {
        titlePrefix: "Talk To",
        titleHighlight: "Health Advisor",
        description:
          "Find the best hospitals and best doctors for treatment.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Health advisor illustration",
        buttonText: "Call Advisor Now",
      },
    ],
  };
  const whyChooseData = {
    heading: "Why Choose HexaHealth for Piles Treatment in Hyderabad?",
    points: [
      "Advanced Laser Techniques",
      "Expert Surgeons Team",
      "Zero Waiting Time",
      "Affordable Treatment Options",
      "24/7 Patient Support",
    ],
  };




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
  const risksOfDelayData = {
    heading: "Risks of Delay in Piles Operation",
    risks: [
      "Intolerable Pain",
      "Excessive Blood in Stool",
      "Risk of Severe Infection",
      "Prolapsed (Bulging) Piles",
      "Risk of Anaemia",
    ],
  };

  const laserPilesInfoData = {
    aboutTitle: "About Laser Piles Operation",
    aboutText:
      "In laser piles operation, a special laser is used to shrink the pile mass, resulting in reduced swelling and discomfort. This advanced technique provides effective treatment with minimal bleeding.",

    advantagesTitle: "Advantages of Laser Operation for Piles",
    advantages: [
      "Minimal pain and discomfort",
      "Quicker recovery time",
      "Reduced risk of complications",
      "Early return to daily activities",
    ],

    costTitle: "Piles Laser Operation Cost in Hyderabad",
    costIntro: "Cost of piles operation depends on the following:",
    costPoints: [
      "Hospital reputation",
      "Doctor's expertise",
      "Grades of Piles (1,2,3,4)",
      "Procedure type (laser, stapler, open)",
      "Any pre-existing medical conditions",
    ],

    expandedContent: [
      "Laser piles surgery is typically recommended for patients looking for minimally invasive treatment with faster recovery. Most patients can resume normal activities within a few days.",
      "The final cost may vary depending on hospital facilities, surgeon experience, and post-operative care requirements.",
    ],
  };

  const aiHealthBannerData = {
    heading: "Your Health Matters – Schedule Your Visit",
    buttonText: "Calculate Surgery Cost",
    imageSrc: "/scheduleyourvisit.png",
  };
  const testimonialSectionData = {
    testimonials: [
      {
        title: "Laser treatment for my dad's piles",
        text:
          "Dr. Samhitha Reddy's laser treatment for my dad's piles worked wonders. He's pain-free now and really grateful for her care!",
        name: "Mithilesh Sah",
        rating: 5,
      },
      {
        title: "Smooth and painless",
        text:
          "Dr. Samhitha Reddy's laser treatment for my fissure was smooth and painless. She was super kind, which made the whole process much easier.",
        name: "Rohit Kumar",
        rating: 5,
      },
      {
        title: "Colorectal Diseases",
        text:
          "Lux hospital is one of best hospital in Hyderabad for colorectal diseases. Dr. Samhita Mam explains everything in detail and the staff is caring.",
        name: "Arti Shettiwar",
        rating: 4.5,
      },
      {
        title: "Admitted for my fistula surgery",
        text:
          "I was admitted for my fistula surgery, Dr Samhita explained everything clearly. Surgery was seamless & painless. Great staff support.",
        name: "Sanat Jayasingh",
        rating: 4.7,
      },
      {
        title: "Fistula Surgery",
        text:
          "We were admitted for fistula surgery. Staff and doctor were polite & quick. Special thanks to Ashok for insurance support.",
        name: "Sujith V",
        rating: 4.8,
      },
    ],
    ctaText: "Google Review",
    ctaLink: "https://www.google.com/search?q=your+business+name+reviews",
  };


  const defaultLocationHeading =
    "Our Hospital location Chirag Global Hospitals";


  const doctorsSectionData = {
  heading: "Our Top Doctors",

  topDoctors: [
    {
      name: "Dr. Rajasekhar M R",
      designation: "MBBS, MS",
      qualification: "Founder and Senior Colorectal Surgeon",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorchiragcard.png",
    },
    {
      name: "Dr. Shreedevi KN",
      designation: "MBBS, MS, FSGE",
      qualification: "Surgical Gastroenterologist and colo rectal surgeon",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorshreedevicard.png",
    },
    {
      name: "Dr. Prithvija Chakravarthy",
      designation: "BAMS, MD(Ayu),YIC (Yoga - SVYASA)",
      qualification: "Proctologist",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorprithvicard.png",
    },
  ],

  moreDoctors: [
    {
      name: "Dr. Suchitra N Adiga",
      designation: "BAMS, MS(Ayu)",
      qualification: "Proctologist",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorsuchithracard.png",
    },
    {
      name: "Dr.Jyotsna Vemulapalli",
      designation: "MBBS, MS(Gen Surgery)",
      qualification: "General Surgeon",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorjyotsnacard.png",
    },
    {
      name: "Dr. Padmanabh R Bhat",
      designation: "MBBS, MS(Gen Surgery),FRCS(Edin)",
      qualification: "General Surgeon",
      experience: "12 Years",
      reviews: "99%",
      img: "/doctorpadmanabhcard.png",
    },
  ],

  banner: {
    heading: "Consult The Doctor Now",
    points: [
      "Free Consultation",
      "Online Consultation",
      "Know your condition from top doctors",
    ],
    buttonText: "Talk to the Doctor",
    imageSrc: "/consultthedoctor.png",
  },
};

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* LEFT SIDE 70% */}
        <div className="space-y-10">
          <Hero {...pilesHeroData} />
          <Number {...statsSectionData} />
          <Cost
            title={costSectionData.title}
            points={costSectionData.points}
            buttonText={costSectionData.buttonText}
            imageSrc={costSectionData.imageSrc}
          />
          <Risk {...risksOfDelayData} />
          <Doctors {...doctorsSectionData} />
          <HospitalLocation locationsectionheading={defaultLocationHeading} />
          <CostDepends
            heading={treatmentCostDependsData.heading}
            items={treatmentCostDependsData.items}
            ctaText={treatmentCostDependsData.ctaText}
          />
          <InsurenceAdvisor {...insuranceAdvisorData} />

          <Why {...whyChooseData}/>
          <HospitalComparisond {...pilesComparisonContent} />
          <Info {...laserPilesInfoData} />
          <CtaBanner {...aiHealthBannerData} />
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
            <Form reviewsData={testimonialSectionData} />
          </div>
          <div
            className="block lg:hidden fixed bottom-0 left-0 w-full z-50 bg-transparent   px-4 py-1"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
          >
            <Form reviewsData={testimonialSectionData} />
          </div>
        </div>
      </div>
    </div>
  );
}
