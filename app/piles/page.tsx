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
  const HeroData = {
    heading: "Best Piles Treatment In Bangalore",
    points: [
      "Experienced colorectal specialists",
      "30-Min Laser Treatment for Piles",
      "Personalized patient-focused care",
      "Same-day discharge & faster recovery",
      "No Cuts, No Bleeding, No Stitches",
    ],
    buttonText: "Book Appointment",
    imageSrc: "/chiragheroimage.png",
  };
  const statsSectionData = {
    heading: "Trusted by Patients\nWorldwide",
    description:
      "Patients receive safe treatment, quick discharge, shorter hospital stays, and faster recovery with continuous medical care and support.",
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

  // const costSectionData = {
  //   title: "Check Surgery Cost",
  //   points: [
  //     "Find the total cost of Surgery at the best hospitals.",
  //     "Compare surgery prices across top hospitals.",
  //     "Get a clear estimate before visiting the hospital.",
  //   ],
  //   buttonText: "Calculate Surgery Cost",
  //   imageSrc: "/chiraggpt.png",
  // };
  
  const risksOfDelayData = {
    heading: "Risks of Delaying Piles Treatment",
    risks: [
      "Severe pain",
      "Excessive Blood in Stool",
      "Infection risk",
      "Chronic discomfort",
      "Risk of Anaemia",
    ],
  };
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
        "Experienced colorectal specialists",
        "Modern laser treatment methods",
        "Proven treatment outcomes",
      ],
      buttonText: "Book Doctor Appointment",
      imageSrc: "/consultthedoctor.png",
    },
  };
  const defaultLocationHeading =
    "Chirag Global Hospital - Best Colorectal Hospital in Bangalore";

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
    ctaText: "Talk with Our Expert",
  };
  const insuranceAdvisorData = {
    cards: [
      {
        titlePrefix: "Easy",
        titleHighlight: "Payment Options",
        description:
          "Treatment costs are affordable with EMI options available for patients.",
        image: "/checkinsurancecoverage.png",
        imageAlt: "Insurance coverage illustration",
        buttonText: "Check EMI Options",
      },
      {
        titlePrefix: "Talk To",
        titleHighlight: "Health Advisor",
        description:
          "Get clear guidance on treatment options, costs, and recovery process.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Health advisor illustration",
        buttonText: "Call Our Advisors",
      },
    ],
  };
  const whyChooseData = {
    heading: "Why Choose Chirag Hospitals for Piles Treatment in Bangalore",
    points: [
      "Top specialist with 38+ years experience",
      "High patient satisfaction",
      "Affordable treatment options",
      "Complete pre and post care",
      "Patient-friendly hospital support",
    ],
  };
  const InfoContent = {
    theading: "Piles Treatment at Chirag Hospitals",
    ConditionVideo: "/chirag-piles-video.mp4",

    title: "What Are Piles or Hemorrhoids?",
    description: (
      <>
        Piles, also called hemorrhoids, are swollen veins in the anal area that
        cause pain, bleeding, and discomfort. Medical treatment helps relieve
        symptoms and prevents complications.
      </>
    ),

    points: [
      "Internal Piles – Piles inside the rectum",
      "External Piles – Piles outside the anus",
      "Thrombosed Piles – Piles with blood clots",
    ],
  };
  const InfoData = {
    aboutTitle: "Symptoms of Piles",
    aboutText:
      "Piles commonly cause bleeding during bowel movements, pain, itching, swelling, or a lump around the anus that needs medical attention.",

    advantagesTitle: "Treatment Options for Piles",
    advantages: [
      "Medication for early stages",
      "Diet and lifestyle changes",
      "Non-surgical procedures",
      "Laser piles treatment",
    ],

    costTitle: "Why Laser Is Best Treatment",
    costIntro: "Laser piles treatment is preferred because it offers:",
    costPoints: [
      "Minimally invasive procedure",
      "Less pain and bleeding",
      "Same-day discharge possible",
      "Faster recovery time",
    ],

    expandedContent: [
      "Laser piles treatment is a modern option for patients seeking effective relief with minimal discomfort and shorter recovery time.",
      "Treatment plan and cost are decided after medical evaluation based on the severity and individual patient condition.",
    ],
  };

  const BannerData = {
    heading: "Get Relief from Piles – Book Today Now",
    buttonText: "Book An Appointment",
    imageSrc: "/scheduleyourvisit.png",
  };

  const faqs = [
    {
      faqTitle: "What are the common symptoms of piles?",
      faqAnswer:
        "Piles commonly cause bleeding during bowel movements, pain, itching, swelling, or a lump around the anus.",
    },
    {
      faqTitle: "Is laser treatment effective for piles?",
      faqAnswer:
        "Yes, laser treatment is a modern and effective option that helps reduce pain, bleeding, and recovery time.",
    },
    {
      faqTitle: "When should I consult a doctor for piles?",
      faqAnswer:
        "You should consult a doctor if symptoms persist, worsen, or bleeding continues for several days.",
    },
    {
      faqTitle: "Is the doctor experienced in treating piles?",
      faqAnswer:
        "Yes, the doctor has decades of experience in diagnosing and treating different stages of piles.",
    },
    {
      faqTitle: "How much does piles treatment cost at Chirag Hospitals?",
      faqAnswer:
        "The cost varies based on treatment type and condition severity, with EMI options available for convenience.",
    },
    {
      faqTitle: "Why is Chirag Hospitals trusted for piles treatment?",
      faqAnswer: "Chirag Hospitals is known for safe treatment, modern facilities, and consistent patient care.",
    },
  ];
  
  const testimonialSectionData = {
    testimonials: [
      {
        title: "Laser treatment for my dad's piles",
        text: "Dr. Samhitha Reddy's laser treatment for my dad's piles worked wonders. He's pain-free now and really grateful for her care!",
        name: "Mithilesh Sah",
        rating: 5,
      },
      {
        title: "Smooth and painless",
        text: "Dr. Samhitha Reddy's laser treatment for my fissure was smooth and painless. She was super kind, which made the whole process much easier.",
        name: "Rohit Kumar",
        rating: 5,
      },
      {
        title: "Colorectal Diseases",
        text: "Lux hospital is one of best hospital in Hyderabad for colorectal diseases. Dr. Samhita Mam explains everything in detail and the staff is caring.",
        name: "Arti Shettiwar",
        rating: 4.5,
      },
      {
        title: "Admitted for my fistula surgery",
        text: "I was admitted for my fistula surgery, Dr Samhita explained everything clearly. Surgery was seamless & painless. Great staff support.",
        name: "Sanat Jayasingh",
        rating: 4.7,
      },
      {
        title: "Fistula Surgery",
        text: "We were admitted for fistula surgery. Staff and doctor were polite & quick. Special thanks to Ashok for insurance support.",
        name: "Sujith V",
        rating: 4.8,
      },
    ],
    ctaText: "Google Review",
    ctaLink: "https://www.google.com/search?q=your+business+name+reviews",
  };
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* LEFT SIDE 70% */}
        <div className="space-y-10">
          <Hero {...HeroData} />
          <Number {...statsSectionData} />
          {/* <Cost
            title={costSectionData.title}
            points={costSectionData.points}
            buttonText={costSectionData.buttonText}
            imageSrc={costSectionData.imageSrc}
          /> */}
          <Risk {...risksOfDelayData} />
          <Doctors {...doctorsSectionData} />
          <HospitalLocation locationsectionheading={defaultLocationHeading} />
          <CostDepends
            heading={treatmentCostDependsData.heading}
            items={treatmentCostDependsData.items}
            ctaText={treatmentCostDependsData.ctaText}
          />
          <InsurenceAdvisor {...insuranceAdvisorData} />

          <Why {...whyChooseData} />
          <HospitalComparisond {...InfoContent} />
          <Info {...InfoData} />
          <CtaBanner {...BannerData} />
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
