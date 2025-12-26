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
    heading: "Best Piles Treatment for Women in Bangalore",
    points: [
      "Top female piles specialists",
      "Safe and advanced laser treatment",
      "Personalized care for women",
      "Same-day discharge & faster recovery",
      "Minimal pain, no stitches",
    ],
    buttonText: "Book Appointment",
    imageSrc: "/chiragheroimage.png",
  };

  const statsSectionData = {
    heading: "Trusted by Women\nPatients",
    description:
      "Women receive safe, private, and effective piles treatment with quicker recovery and dedicated medical support.",
    stats: [
      { value: "24 hr", label: "Discharge" },
      { value: "98%", label: "Patient Satisfaction" },
      { value: "3 Days", label: "Recovery Time" },
      { value: "5 Days", label: "Average Stay" },
    ],
  };

  const risksOfDelayData = {
    heading: "Risks of Delaying Piles Treatment",
    risks: [
      "Increased pain",
      "Heavy bleeding",
      "Risk of anemia",
      "Chronic discomfort",
      "Treatment complications",
    ],
  };

  const doctorsSectionData = {
    heading: "Our Top Doctors",

    topDoctors: [
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
      {
        name: "Dr. Rajasekhar M R",
        designation: "MBBS, MS",
        qualification: "Founder and Senior Colorectal Surgeon",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorchiragcard.png",
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
    "Chirag Global Hospital - Trusted Piles Treatment for Women in Bangalore";

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
        titleRest: "the Condition",
        icon: "/severitydisease.png",
      },
      {
        titleBold: "Patient’s",
        titleRest: "Health Condition",
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
          "Affordable piles treatment for women with EMI options available.",
        image: "/checkinsurancecoverage.png",
        imageAlt: "Payment options illustration",
        buttonText: "Check EMI Options",
      },
      {
        titlePrefix: "Talk To",
        titleHighlight: "Women Care Advisor",
        description:
          "Get clear guidance on piles treatment, costs, and recovery for women.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Women health advisor illustration",
        buttonText: "Call Our Advisors",
      },
    ],
  };

  const whyChooseData = {
    heading: "Why Choose Chirag Hospitals for Women’s Piles Treatment",
    points: [
      "Experienced female piles specialists",
      "High comfort and privacy standards",
      "Affordable treatment options",
      "Dedicated pre and post care",
      "Women-friendly hospital environment",
    ],
  };

  const InfoContent = {
    theading: "Piles Treatment for Women at Chirag Hospitals",
    ConditionVideo: "/chirag-piles-video.mp4",

    title: "What Are Piles in Women?",
    description: (
      <>
        Piles in women are swollen veins in the anal area that cause pain,
        bleeding, and discomfort. Early treatment ensures faster relief and
        recovery.
      </>
    ),

    points: [
      "Internal Piles – Piles inside the rectum",
      "External Piles – Piles outside the anus",
      "Thrombosed Piles – Piles with blood clots",
    ],
  };

  const InfoData = {
    aboutTitle: "Symptoms of Piles in Women",
    aboutText:
      "Women may experience bleeding, pain, itching, swelling, or discomfort during bowel movements that require medical attention.",

    advantagesTitle: "Treatment Options for Piles",
    advantages: [
      "Medication for early stages",
      "Lifestyle and dietary guidance",
      "Non-surgical procedures",
      "Laser piles treatment",
    ],

    costTitle: "Why Laser Is Best Treatment",
    costIntro: "Laser piles treatment for women offers:",
    costPoints: [
      "Minimal pain procedure",
      "No cuts or stitches",
      "Same-day discharge",
      "Faster recovery time",
    ],

    expandedContent: [
      "Laser piles treatment is a safe and effective option for women seeking quick relief with minimal discomfort.",
      "Treatment plan and cost are decided after consultation based on individual condition and severity.",
    ],
  };

  const BannerData = {
    heading: "Get Relief from Piles – Women’s Care",
    buttonText: "Book Appointment",
    imageSrc: "/scheduleyourvisit.png",
  };

  const faqs = [
    {
      faqTitle: "Is piles treatment safe for women?",
      faqAnswer:
        "Yes, piles treatment is safe for women and is tailored based on individual health needs.",
    },
    {
      faqTitle: "Can women choose a female doctor for piles treatment?",
      faqAnswer:
        "Yes, women can consult experienced female piles specialists at Chirag Hospitals.",
    },
    {
      faqTitle: "Is laser piles treatment suitable for women?",
      faqAnswer:
        "Yes, laser treatment is a preferred option for women due to minimal pain and faster recovery.",
    },
    {
      faqTitle: "How much does piles treatment for women cost?",
      faqAnswer:
        "The cost depends on treatment type and severity, with EMI options available.",
    },
    {
      faqTitle: "Why choose Chirag Hospitals for women’s piles treatment?",
      faqAnswer:
        "Chirag Hospitals offers expert female surgeons, privacy-focused care, and advanced treatment options.",
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
