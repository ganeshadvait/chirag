"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

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
      <Second
        services={services}
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
      />

      {/* <Conditioncost /> */}
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <section
        className="w-[90%]"
        style={{
          margin: "auto",
        }}
      >
        <h2 className="doctors_heading text-xl font-bold text-center text-[#7966AF] mb-4">
          Our Top Doctors
        </h2>
        <div className="doctors_container">
          <DoctorCard
            url="/doctorbg.png"
            name="Dr. Rajasekhar"
            qualification="MBBS, MS"
            designation="COLORECTAL SURGEON"
            experience="Experieance:38 years"
            description="Dr. Rajasekhar is a leading colorectal specialist in Bangalore, known for effective conservative and advanced laser treatments for piles. He focuses on accurate diagnosis, personalised care, and faster, comfortable recovery."
            mobileNumberDoctor={"tel:917969084448"}
          />
          {/* <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr. Abhishek Katha"
            qualification="MBBS, MS, FMAS"
            designation="Piles Specialist"
            experience="Experieance:9 years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
            mobileNumberDoctor={"tel:917969084448"}
          /> */}
        </div>
      </section>
      <HospitalComparisond thead1={"Features"} thead2={"Other Hospital"} thead3={"chirag Hospitals"} theading={"Piles Treatment at Chirag Hospitals"} rows={tableData} ConditionVideo={"/chirag-piles-video.mp4"} />
      <Accreditations />
      <VideoSection />
      <VideoWithCarousel />
      <Luxgpt />

      {faqs.length > 0 && (
        <Faqs
          // fheading={fheading}
          faqs={faqs.map((faq) => ({
            faqquestion: faq.faqTitle,
            faqanswer: faq.faqAnswer,
          }))}
        />
      )}
      <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="38 years of experience in diagnosing & treating piles, fistula, fissure, constipation and other colon/rectal disorders."
        footernumber="9380498256"
      />
      <MobileStickyFooter mobileNumber="tel:9380498256" />
    </>
  );
}
