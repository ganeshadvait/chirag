import dynamic from "next/dynamic";

import LadyHeroSection from "@/components/partials/hero/ladypileshero";
import Number from "@/components/partials/number/number";

import Risk from "@/components/partials/risks/risk";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import Why from "@/components/partials/why/why";

import Info from "@/components/partials/info/info";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";
import DoctorsData from "../doctorsdata/doctorsdata";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";
import { image } from "motion/react-client";

const HospitalComparisond = dynamic(
  () => import("@/components/dynamictable/dynamictables")
);

export default function NewDesign() {
  const doctor = DoctorsData.Proctology["Dr. Shreedevi KN"];

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
    imageSrc: doctor.url,
    name: doctor.name,
    qualifications: doctor.qualification,
    designation: doctor.designation,
    experience: doctor.experience,
  };

  const statsSectionData = {
    heading: "Trusted by Women\nPatients",
    description:
      "Women receive safe, private, and effective piles treatment with quicker recovery and dedicated medical support.",
    stats: [
      { value: "24 hr", label: "Discharge" },
      { value: "180K+", label: "Patient Treated" },
      { value: "3 Days", label: "Recovery Time" },
      { value: "99.5%", label: "Success Rate" },
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
      imageSrc: "/ladypilesconsultthedoctor.png",
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
    imageSrc: "/ladypilestypes.png",
    

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
        // title: "Laser treatment for my dad's piles",
        text: "It was in June 2021, when I consulted few doctors for my piles issue and all of them asked me to go for surgery which I was not ready. Surgery is not something we can get ready immediately, I was personally looking for a doctor who can cure me without surgery. With similar expectation I visited Chirag hospital to taken consultation from chirag hospital doctors, they ran me through few tests and suggested me to start treatment without any need of surgery. So, this time I was convinced because of the clarity they gave me. Very down to earth people talks to patients in the way they understand not with medical terminologies. I decided to strictly follow the medicines and precautions, they have suggested. Even after the treatment the follow up care was best. I highly recommend doctors at chirag hospital for piles related disorders.",
        name: "Laxmi",
        rating: 5,
      },
      {
        // title: "Smooth and painless",
        text: "I recently had a wonderful experience at chirag Hospital in Bangalore. The staff was incredibly helpful and accommodating throughout my stay. I also had the pleasure of being treated by DR.Rajasekhar sir, who is an expert in piles and fistula treatment. He took the time to explain my condition and recommended a treatment plan that worked perfectly for me. I highly recommend chirag Hospital to anyone seeking quality medical care.",
        name: "Indu",
        rating: 5,
      },
      {
        // title: "Colorectal Diseases",
        text: "I had severe pain and bleeding from motion area for 1 month. I did VRS test and found that I had piles. My family got scared with my condition, but somehow, I was confident that a good doctor can resolve my problem. My brother did good research and found Chirag hospital who are best hospital for piles related problems.I visited the hospital and got my questions answered on my problem. I was advised to take medicines and some minimum treatment and believed the doctor completely in regard to my health. With his support and service, I am doing good today and leading a normal life. I highly recommend chirag hospital Thank you, sir, for the treatment. I was very scared of surgery but you people treated me without doing any major surgery. Thank u once again.",
        name: "Rajeshwari",
        rating: 5,
      },
      {
        // title: "Admitted for my fistula surgery",
        text: "Dr. Rajasekhar sir is the best surgeon to treat piles and fistula issues. He got many years of experience. He is so down to earth person. speaks very softly with patients and understands the problem in detail before he prescribe the treatment. I have undergone laser surgery for piles. Same day i got discharges and pain completely vanished from 4rth day onwards. I highly recommend this hospital for piles issue.",
        name: "Kiran",
        rating: 5,
      },
    ],
    ctaText: "Google Review",
    ctaLink: "https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* LEFT SIDE 70% */}
        <div className="space-y-10">
          <LadyHeroSection {...HeroData} />
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
