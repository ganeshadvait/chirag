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
// import QuestioneryPopUp from "@/components/questionerypopup";
import Conditioncost from "@/components/conditioncost";
// import DoctorsData from "./doctorsdata/doctorsdata"
// import Whatare from "./components/what/whatare";
// const DoctorCardThree = dynamic(() => import("./components/doctorsthreecards/doctorsthreecards"));

// Dynamic imports
const DoctorCard = dynamic(() => import("@/components/topdoctors/ourdoctors"));
const HospitalComparison = dynamic(
  () => import("@/components/Treatmenttable/Hospitalcomparison")
);
const Accreditations = dynamic(
  () => import("@/components/Accreditions/accreditions")
);
const VideoSection = dynamic(() => import("@/components/Videosection/videos"));
const PatientTalks = dynamic(
  () => import("@/components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("@/components/luxgpt/luxgpt"));
// const Footer = dynamic(() => import("./components/footer/footer"));

// const Faqs = dynamic(() => import("./components/faqs/faq"));

export default function Home() {
  // const pathname = usePathname();

  // Fallback hero text based on pathname
  const heroHeading =
    "Lux Hospitals - Advanced Surgerical Hospital in Hyderabad";

  // if (pathname.includes("piles")) {
  //   heroHeading = "Get Relief from Piles Today";

  // } else if (pathname.includes("fistula")) {
  //   heroHeading = "Fistula Treatment at Lux Hospitals";

  // }

  // Dummy content
  const defaultDescList = [
    "Advanced Laser & Minimally Invasive Surgeries",
    "Same-day discharge & 30-minute procedures",
    "Cashless Insurance Accepted",
    "0% EMI Options Available",
    "Expert Doctors & State-of-the-Art Facilities",
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
    "Lux Hospitals - - Leading Center for Proctology & Advanced Surgery";

  // const whatAreH = "What is Piles?";
  // const whatAreP =
  //   "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus. They cause discomfort, bleeding, itching, and pain during bowel movements. Piles can be internal or external and range from mild to severe.";
  // const whatHead = "Treatment we provide";
  // const treatments = [
  //   "Laser Treatment",
  //   "Rubber Band Ligation",
  //   "Sclerotherapy",
  //   "Surgical Hemorrhoidectomy",
  // ];

  // const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: " What medical departments are available at Lux Hospitals.?",
      faqAnswer:
        "We specialize in Proctology, Laparoscopic Surgery, Urology, Gynecology, ENT, Orthopedics, and Plastic & Cosmetic Surgery, all under one roof.",
    },
    {
      faqTitle: "Can I get same-day consultations and quick appointments?",
      faqAnswer:
        "Yes, Lux Hospitals offers fast-track appointments with minimal wait time. Same-day consultations are available for most departments.",
    },
    {
      faqTitle: " Are both male and female doctors available?",
      faqAnswer:
        "Yes, we have highly qualified male and female specialists across all departments, including female gynecologists for women-centric care.",
    },
    {
      faqTitle: "How do I book an appointment at Lux Hospitals?",
      faqAnswer:
        "You can easily book online, call our helpline, or walk in. Our care team will help you with doctor availability and treatment planning.",
    },
    {
      faqTitle: "Why is Lux Hospitals the best preference for you?",
      faqAnswer:
        "Lux Hospitals provides expert care across multiple specialties using advanced equipment. We offer same-day procedures and personalized treatment focused on your comfort and recovery. Patient-first care is always our motto.",
    },
    {
      faqTitle: "Does Lux Hospitals accept health insurance?",
      faqAnswer:
        "Yes, we accept most leading insurance plans for departments like Proctology, Urology, ENT, Orthopedics, Gynecology, and Laparoscopy. Cosmetic procedures are not covered.",
    },
  ];
  // const doctorOrder = [
  //   "Dr. Harshitha Kakarla",
  //   "Dr. Samhitha Alukur",
  //   "Dr. Pragnia Poloju"
  // ];

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
        heroImage={"/happy patient.avif"}
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
      {/* {doctorOrder.length > 0 && (
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
                  {doctorOrder.map((doctorName, ind) => {
                    const cardData = DoctorsData["Gynecology"][doctorName as keyof typeof DoctorsData["Gynecology"]];
                    return (
                      <div key={ind}>
                        <DoctorCardThree
                          url={cardData.url}
                          name={cardData.name}
                          qualification={cardData.qualification}
                          designation="Consultant Piles Specialist"
                          experience={cardData.experience}
                          description={cardData.description}
                          mobileNumberDoctor="tel:07969084448"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )} */}
      <HospitalComparison
        theading={"Treatment at Lux Hospitals"}
        ConditionVideo={"/tablevideo.mp4"}
      />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      {/* {whatAreH && (
              <Whatare
                whatAreH={whatAreH}
                whatAreP={whatAreP}
                whatHead={whatHead}
                treatments={treatments.map((treatment) => ({
                  title: treatment,
                }))}
              />
            )} */}

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
        footerdesc="Visit the best piles hospital in Hyderabad for painless, advanced treatment and expert care!"
        footernumber="07969084448"
      />
      <MobileStickyFooter mobileNumber="tel:07969084449" />

      {/* <MobileStickyFooter/> */}

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
