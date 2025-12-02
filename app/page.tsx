"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

interface TopDoctorsProps {
  doctorOrder: string[];
}

// Static imports
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Second from "@/components/second/second";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";
import FooterComponent from "@/components/footer/footer";
import Faqs from "@/components/faqs/faq";
import MobileStickyFooter from "@/components/mobilsticky";
import Conditioncost from "@/components/conditioncost";
import VideoWithCarousel from "@/components/VideoWithCarousel/VideoWithCarousel";
import DoctorsData from "@/app/doctorsdata/doctorsdata"
import Treatments from "@/components/ouradvtreatments/treatments"
import Symptoms from "@/components/symptoms/symptoms"
import Numbers from "@/components/Number/number"
import ConditionConsultation from "@/components/conditionconsulatation/conditionconsulatation";

const DoctorsSection = dynamic(
  () => import("../components/topdoctors/DoctorsMoreTree"),
  { ssr: false }
);

// Dynamic imports
const DoctorCard = dynamic(() => import("@/components/topdoctors/ourdoctors"));
const HospitalComparison = dynamic(
  () => import("@/components/Treatmenttable/Hospitalcomparison")
);
const HospitalComparisond = dynamic(() =>
  import("@/components/dynamictable/dynamictables")
);
const Accreditations = dynamic(
  () => import("@/components/Accreditions/accreditions")
);
const VideoSection = dynamic(() => import("@/components/Videosection/videos"));
const PatientTalks = dynamic(
  () => import("@/components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("@/components/luxgpt/luxgpt"));

export default function Home() {
  const heroHeading =
    "Welcome to Chirag Global Hospitals";


  // Dummy content
  const defaultDescList = [
    "38+ Years Expertise in Colorectal Care",
    "Minimally Invasive Laser & DG-HAL Procedures",
    "90% Patients Treated Without Surgery First",
    "Same-Day Consultation & Comfortable OPD Experience",
  ];

  const services = [
    {
      image:
        "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
      arrow: "\Arrow.svg",
      link: "tel:917969084448",
    },
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-5.avif",
      title: "Cost Estimation",
      arrow: "/Arrow.svg",
      link: "whatsapp",
    },
    {
      image:
        "https://luxhospitals.com/wp-content/uploads/2025/04/converted-2.avif",
      title: "Second Opinion",
      arrow: "/Arrow.svg",
      link: "whatsapp",
    },
    {
      image:
        "https://luxhospitals.com/wp-content/uploads/2025/04/converted-5.avif",
      title: "Insurance Coverage",
      arrow: "/Arrow.svg",
      link: "tel:917969084448",
    },
  ];

  const defaultLocationHeading =
    "Our Hospital location Chirag Global Hospitals";

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
      faqAnswer:
        "Usually around 20–30 minutes, depending on the case.",
    },
  ];

  const tableData = [
    { label: "Treatment Type", other: "Open Surgery", lux: "Laser + Harmonic" },
    { label: "Recovery Time", other: "7–10 Days", lux: "Same Day" },
    { label: "Pain & Bleeding", other: "Painful with Bleeding", lux: "Painless & Bloodless" },
    { label: "Insurance & EMI", other: "Not Always Cashless", lux: "All Insurances + 0% EMI" },
    { label: "Room Type", other: "General / Shared", lux: "Private Suite" },
    { label: "Cost Transparency", other: "Variable & Hidden Costs", lux: "Fixed & Transparent" },
  ];

  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  const doctorOrder = [
    "Dr. Samhitha Reddy",
    "Dr. Abhishek Katha",
    "Dr. Priyank Salecha",
    "Dr. Harshitha Kakarla",
    "Dr. Pragnia Poloju",
    "Dr. Samhitha Alukur",
    "Dr. M Ram Prabhu",
    "Dr. Chandana Guduru",
    "Dr. Madan Mohan",
    "Dr. Sai Kishan Sirasala"
  ];
  const treatment = [
    {
      title: "Laser Treatment for Piles",
      desc: "A pain-free, same-day procedure with faster recovery and minimal downtime.",
      icon: "👨‍⚕️",
    },
    {
      title: "Stapler Surgery for Piles",
      desc: "An innovative method that offers quick relief with reduced risk of recurrence.",
      icon: "🩺",
    },
    {
      title: "Fistula Treatment",
      desc: "Advanced surgical options like LIFT procedure, laser ablation, and more.",
      icon: "🏥",
    },
  ];

  const SymptomsContent = {
    heading: "Symptoms of Piles",
    icon: "🩺",
    symptoms: [
      "Blood In Stool",
      "Swelling Around The Anus",
      "Sometimes Associated With Pain & Burning",
      "Itching May Be Present Sometimes",
    ],
  }
  const pilesComparisonContent = {
    theading: "Piles Treatment at Chirag Hospitals",
    ConditionVideo: "/chirag-piles-video.mp4",

    title: "What are Piles or Hemorrhoids?",
    description: (
      <>
        Piles are swollen blood vessels found inside or under the skin around the bottom.
        These are also called <strong>Hemorrhoids</strong>. There are 3 types of Piles.
      </>
    ),

    points: [
      "External Hemorrhoids",
      "Internal Hemorrhoids",
      "Interno – External Piles",
    ],
  };

  const conditionConsultationContent = {
    leftBox: {
      heading: "Why Laser Treatment?",
      points: [
        "No Cuts and No Bleed",
        "30 min procedure",
        "Get back to normal life within 24 hours",
      ],
    },

    rightBox: {
      heading: "Your Journey to Health Starts Here",
      points: [
        <>
          <strong>Consultation</strong> Visit us for a detailed consultation with our
          experienced doctors. (Both online and offline options available.)
        </>,
        <>
          <strong>Diagnosis</strong> Advanced diagnostic tools for accurate
          identification of your condition.
        </>,
        <>
          <strong>Treatment</strong> Get the best-in-class treatment tailored to your
          needs.
        </>,
        <>
          <strong>Follow-Up Care</strong> Regular check-ups to ensure a smooth
          recovery and long-term wellness.
        </>,
      ],
    },
  };

  return (
    <>
      <Header
        PhoneNumber={"07969084448"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084448"}
      />
      <Hero
        heading={heroHeading}
        descList={defaultDescList}
        heroImage={"/happypatient.avif"}
      />
      <Treatments
        heading="Our Advanced Treatments"
        items={treatment}
      />
      <Symptoms
        heading={SymptomsContent.heading}
        icon={SymptomsContent.icon}
        symptoms={SymptomsContent.symptoms}
      />
      {/* <Second
        services={services}
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
      /> */}

      {/* <Conditioncost /> */}
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      {
        doctorOrder.length > 0 && (
          <section
            className="w-[95%] py-4 sm:py-8"
            style={{ margin: "auto" }}
          >
            <h2 className="doctors_heading text-xl font-bold text-center text-indigo-900 mb-6">
              Our Top Doctors
            </h2>
            <DoctorsSection
              doctors={doctorOrder.map((doctorName) => {
                const departmentKeys = Object.keys(DoctorsData as any).filter(
                  (dept) => DoctorsData[dept][doctorName]
                );

                if (departmentKeys.length === 0) return null;

                let chosenDept = departmentKeys[0];

                // Special handling for duplicate doctors
                if (doctorName === "Dr. Abhishek Katha") {
                  chosenDept = "General & Laparoscopic";
                }
                if (doctorName === "Dr. Samhitha Reddy") {
                  chosenDept = "Proctology";
                }

                const cardData = DoctorsData[chosenDept][doctorName];

                return {
                  url: cardData.url,
                  name: cardData.name,
                  qualification: cardData.qualification,
                  designation: `${chosenDept} Specialist`, // 👈 forced department-based designation
                  experience: cardData.experience,
                  description: cardData.description,
                  mobileNumberDoctor:
                    cardData.mobileNumberDoctor || "tel:07969084443",
                };
              }).filter(Boolean)}
            />

          </section>
        )
      }
      <HospitalComparisond {...pilesComparisonContent} />
      <ConditionConsultation
        leftBox={conditionConsultationContent.leftBox}
        rightBox={conditionConsultationContent.rightBox}
      />
      <Numbers />
      <Accreditations />
      <VideoSection />
      <VideoWithCarousel />
      {/* <Luxgpt /> */}

      {
        faqs.length > 0 && (
          <Faqs
            // fheading={fheading}
            faqs={faqs.map((faq) => ({
              faqquestion: faq.faqTitle,
              faqanswer: faq.faqAnswer,
            }))}
          />
        )
      }
      <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="38 years of experience in diagnosing & treating piles, fistula, fissure, constipation and other colon/rectal disorders."
        footernumber="9380498256"
      />
      <MobileStickyFooter mobileNumber="tel:9380498256" />
    </>
  );
}
