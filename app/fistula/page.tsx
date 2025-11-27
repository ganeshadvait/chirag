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
      arrow: "/Arrow.svg",
      link: "tel:917969084448",
    },
    {
      image: "/cost extimation.avif",
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

      <Conditioncost />
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <section
        className="w-[90%]"
        style={{
          margin: "auto",
        }}
      >
        <h2 className="doctors_heading text-xl font-bold text-center text-indigo-900 mb-4">
          Our Top Doctors
        </h2>
        <div className="doctors_container">
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experieance:8 years"
            description="Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
            mobileNumberDoctor={"tel:917969084448"}
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr. Abhishek Katha"
            qualification="MBBS, MS, FMAS"
            designation="Piles Specialist"
            experience="Experieance:9 years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
            mobileNumberDoctor={"tel:917969084448"}
          />
        </div>
      </section>
      <HospitalComparisond thead1={"Features"} thead2={"Other Hospital"} thead3={"Lux Hospitals"} theading={"Piles Treatment at Lux Hospitals"} rows={tableData} ConditionVideo={"/piles final dr sam.webm"} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
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
      extradesc={""}
        footerdesc="Visit the best piles hospital in Hyderabad for painless, advanced treatment and expert care!"
        footernumber="07969084448"
      />
      <MobileStickyFooter mobileNumber="tel:07969084449" />
    </>
  );
}
