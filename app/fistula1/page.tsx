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
    "Best Fistula Treatment Hospital in Bangalore";


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
      faqTitle: " What is a fistula?",
      faqAnswer:
        "A fistula is a small tunnel that forms between the anus and nearby skin, usually due to infection.",
    },
    {
      faqTitle: "What is laser fistula treatment?",
      faqAnswer:
        "It is a minimally invasive procedure that closes the fistula tract using laser energy—without big cuts or stitches.",
    },
    {
      faqTitle: "Is laser treatment painful?",
      faqAnswer:
        "The procedure is painless because it is done under anesthesia. Afterward, most patients feel only mild discomfort.",
    },
    {
      faqTitle: "How long does the treatment take?",
      faqAnswer:
        "Usually between 30 and 60 minutes.",
    },
    {
      faqTitle: "Do I need to stay in the hospital?",
      faqAnswer:
        "Most patients go home the same day.",
    },
    {
      faqTitle: "How fast is the recovery?",
      faqAnswer:
        "Recovery is quick many patients resume normal work in 2–3 days.",
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
            description="Dr. Rajasekhar is one of Bangalore’s most experienced colorectal specialists, known for his expertise in treating piles using conservative and advanced minimally invasive laser techniques. His patient-first approach ensures diagnosis is accurate, treatment is personalised, and recovery is as fast and comfortable as possible."
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
