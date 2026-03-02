//File :- app/colorectal-cancer/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Header from "@/components/header/header";
import Hero from "@/components/partials/hero/hero";
import Number from "@/components/partials/number/number";
import Cost from "@/components/partials/cost/cost";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import Why from "@/components/partials/why/why";
import Google from "@/components/partials/google/google";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";
import Reviews from "@/components/partials/reviews/reviews";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";
import TreatmentOptions from "@/components/partials/treatmentoptions/treatmentoptions";
import SymptomsInfo from "@/components/partials/symptomsinfo/symptomsinfo";
import FooterComponent from "@/components/footer/footer";

type HeroDataType = {
  heading: string;
  subheading?: string;
  points: string[];
  buttonText: string;
  imageSrc: string;
};

type PilesPageProps = {
  params: {
    slug: string;
  };
};
const contentMap: Record<
  string,
  {
    phone?: string;
    hero?: Partial<HeroDataType>;
    faqs?: { faqTitle: string; faqAnswer: string }[];
  }
> = {
  "colorectal-laser-treatment-cost-in-bangalore": {
    phone: "08065916415",
    hero: {
      heading: "Best Colorectal Cancer Treatment in Bangalore",
      points: [
        "Stage 0: Abnormal cells are only in the lining of the colon or rectum",
        "Stage 1: Cancer grows into the muscle layer but hasn't spread to other parts",
        "Stage 2: Cancer spreads to walls of the colon/rectum or nearby tissue but not to lymph nodes",
        "Stage 3: Cancer spreads to nearby lymph nodes but not to other organs",
        "Stage 4: Cancer spreads to other parts of the body, like the liver or lungs",
      ],
    },
    faqs: [
      {
        faqTitle: "Is colorectal cancer treatable?",
        faqAnswer:
          "Early-stage colorectal cancer can be treated effectively, often with surgery and/or chemotherapy. The treatment plan depends on the stage and location of the cancer.",
      },
      {
        faqTitle: "Will I need surgery?",
        faqAnswer:
          "Surgery is often a part of the treatment for colorectal cancer, but it depends on the stage and type of tumor. Our specialists will discuss options with you.",
      },
      {
        faqTitle: "How soon do I need to act?",
        faqAnswer:
          "If you're experiencing symptoms or have been diagnosed, we recommend getting evaluated as soon as possible to confirm staging and prevent delays in treatment.",
      },
      {
        faqTitle: "What can I expect during chemotherapy?",
        faqAnswer:
          "Chemotherapy is a common treatment for colorectal cancer. Side effects vary, but we provide detailed guidance on what to expect and how to manage them.",
      },
      {
        faqTitle: "Can I get a second opinion?",
        faqAnswer:
          "Yes, we offer second opinions to confirm treatment plans and help guide you to the best possible care.",
      },
    ],
  },
};

export default function PilesConditions() {
  const params = useParams<{ slug?: string }>();
  const slug = params?.slug ?? "";

  const normalizedSlug = decodeURIComponent(String(slug))
    .trim()
    .replace(/\/+$/, "")
    .toLowerCase();

  const pageContent = contentMap[normalizedSlug];

  const defaultPhone = "08065916415";
  const finalPhone = pageContent?.phone ?? defaultPhone;

  const finalPhoneTel = `tel:${finalPhone}`;

  const HeroData = {
    heading: "Best Colorectal Cancer Treatment in Bangalore",
    subheading: "Stages of colorectal Cancer",
    points: [
      "Stage 0: Abnormal cells are only in the lining of the colon or rectum",
      "Stage 1: Cancer grows into the muscle layer but hasn't spread to other parts",
      "Stage 2: Cancer spreads to walls of the colon/rectum or nearby tissue but not to lymph nodes",
      "Stage 3: Cancer spreads to nearby lymph nodes but not to other organs",
      "Stage 4: Cancer spreads to other parts of the body, like the liver or lungs",
    ],
    buttonText: "Book Appointment",
    imageSrc: "/chiragheroimage.png",
  };

  const finalHeroData = {
    ...HeroData,
    ...(pageContent?.hero ?? {}),
    heading: pageContent?.hero?.heading ?? HeroData.heading,
    points: pageContent?.hero?.points ?? HeroData.points,
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
        value: "180K+",
        label: "Patient Treated",
      },
      {
        value: "3 Days",
        label: "Recovery Time",
      },
      {
        value: "99.5%",
        label: "Success Rate",
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

  const symptomsInfoData = {
    symptomsHeading: "Symptoms You Shouldn't Ignore",
    symptoms: [
      "Blood in stool or rectal bleeding",
      "Unexplained weight loss or fatigue",
      "Persistent change in bowel habits",
      "Abdominal discomfort, bloating, or cramps",
      "Feeling of incomplete evacuation",
      "Low hemoglobin (anemia) or weakness",
    ],
    ctaText: "Book a Specialist Consultation",
    diagnosisHeading: "Why Early Diagnosis Matters",
    diagnosisText:
      "If you notice any of the above symptoms, early evaluation can help guide your next steps for treatment, reducing delays and improving outcome.",
  };
  const doctorsSectionData = {
    heading: "Our Top Doctors",

    topDoctors: [
      {
        name: "Dr. Rajasekhar M R",
        designation: "MBBS, MS",
        qualification: "Founder and Senior Colorectal Surgeon",
        experience: "38 Years",
        reviews: "99%",
        img: "/doctorchiragcard.png",
      },
      {
        name: "Dr. Shreedevi KN",
        designation: "MBBS, MS, FSGE",
        qualification: "Surgical Gastroenterologist and Colorectal surgeon",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorshreedevicard.png",
      },
      {
        name: "Dr. Padmanabh R Bhat",
        designation: "MBBS, MS(Gen Surgery),FRCS(Edin)",
        qualification: "General Surgeon",
        experience: "28 Years",
        reviews: "99%",
        img: "/doctorpadmanabhcard.png",
      },
    ],

    moreDoctors: [
      {
        name: "Dr.Jyotsna Vemulapalli",
        designation: "MBBS, MS(Gen Surgery)",
        qualification: "General Surgeon",
        experience: "4 Years",
        reviews: "99%",
        img: "/doctorjyotsnacard.png",
      },
      {
        name: "Dr. Prithvija Chakravarthy",
        designation: "BAMS, MD(Ayu),YIC (Yoga - SVYASA)",
        qualification: "Proctologist",
        experience: "10 Years",
        reviews: "99%",
        img: "/doctorprithvicard.png",
      },
      {
        name: "Dr. Suchitra N Adiga",
        designation: "BAMS, MS(Ayu)",
        qualification: "Proctologist",
        experience: "8 Years",
        reviews: "99%",
        img: "/doctorsuchithracard.png",
      },
    ],

    banner: {
      heading: "Consult The Doctor Now",
      points: [
        "Experienced oncologists",
        "Various treatment methods",
        "Proven treatment outcomes",
      ],
      buttonText: "Book Appointment",
      imageSrc: "/consultthedoctor.png",
    },
  };
  const defaultLocationHeading =
    "Chirag Global Hospital - Best Colorectal Hospital in Bangalore";

  const treatmentOptionsData = {
    heading: "Treatment Options",
    options: [
      {
        title: "Surgery",
        description:
          "When appropriate, surgery will be considered for tumor removal, depending on staging.",
      },
      {
        title: "Chemotherapy",
        description:
          "Often recommended as part of the treatment plan to shrink tumors or after surgery to reduce recurrence.",
      },
      {
        title: "Radiation Therapy",
        description:
          "Can be used pre-surgery for rectal cancer to shrink the tumor or post-surgery for better results.",
      },
      {
        title: "Targeted / Immunotherapy",
        description:
          "Used based on the tumor's biological makeup. This may be suitable for certain cases with metastasis.",
      },
      {
        title: "Supportive Care",
        description:
          "Nutritional counseling, pain management, and emotional support to guide you through treatment.",
      },
    ],
    ctaText: "Book An Appointment",
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
    ctaText: "Chat with Our Expert",
  };
  const insuranceAdvisorData = {
    cards: [
      {
        titlePrefix: "Easy",
        titleHighlight: "Payment Options",
        description:
          "Enjoy hassle-free cashless treatment and insurance support through GMoney, with zero processing fees and interest-free finance.",
        image: "/checkinsurancecoverage.png",
        imageAlt: "Insurance coverage illustration",
        buttonText: "Check EMI Options",
        ctaType: "modal",
      },
      {
        titlePrefix: "Talk To",
        titleHighlight: "Health Advisor",
        description:
          "Get clear guidance on treatment options, costs, and recovery process.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Health advisor illustration",
        buttonText: "Call Our Advisors",
        ctaType: "call",
      },
    ],
  };

  const whyChooseData = {
    heading: "Why Choose Chirag Hospital Colorectal Cancer",
    points: [
      "Specialized Team: Expert oncologists, colorectal surgeons, and radiologists with years of experience",
      "Comprehensive Care: We guide you from diagnosis through recovery, focusing on personalized treatment plans",
      "Cutting-Edge Treatments: Including the latest in laser surgery and immunotherapy",
      "Patient-Centered Approach: Clear communication, coordinated care, and ongoing support through every stage of treatment",
      "Privacy & Comfort: Confidential consultations and a caring, supportive team",
    ],
  };
  const InfoContent = {
    theading: "Piles Treatment at Chirag Hospitals",
    videoSrc: "/chirag-piles-video.mp4",

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
      "Laser piles treatment",
      "Lifestyle and dietary guidance",
      "Advanced DGHAL procedure for piles",
      "Ultrasonic shears excision for minimal pain and faster recovery",
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
    heading: "Get Relief from colorectal cancer  – Book Now",
    buttonText: "Book An Appointment",
    imageSrc: "/scheduleyourvisit.png",
  };

  const faqs = [
    {
      faqTitle: "Is colorectal cancer treatable?",
      faqAnswer:
        "Early-stage colorectal cancer can be treated effectively, often with surgery and/or chemotherapy. The treatment plan depends on the stage and location of the cancer.",
    },
    {
      faqTitle: "Will I need surgery?",
      faqAnswer:
        "Surgery is often a part of the treatment for colorectal cancer, but it depends on the stage and type of tumor. Our specialists will discuss options with you.",
    },
    {
      faqTitle: "How soon do I need to act?",
      faqAnswer:
        "If you're experiencing symptoms or have been diagnosed, we recommend getting evaluated as soon as possible to confirm staging and prevent delays in treatment.",
    },
    {
      faqTitle: "What can I expect during chemotherapy?",
      faqAnswer:
        "Chemotherapy is a common treatment for colorectal cancer. Side effects vary, but we provide detailed guidance on what to expect and how to manage them.",
    },
    {
      faqTitle: "Can I get a second opinion?",
      faqAnswer:
        "Yes, we offer second opinions to confirm treatment plans and help guide you to the best possible care.",
    },
  ];

  const finalFaqs = pageContent?.faqs ?? faqs;

  const testimonialSectionData = {
    testimonials: [
      {
        // title: "Laser treatment for my dad's piles",
        text: "Dr Rajasekhar and his staff are amazing. They are friendly, attentive, caring, patient and helpful. I've had a multitude of piles surgery have been done by Dr Rajasekhar & Dr. Pruthvija and his staff. When I called with concerns about the hospital's billing system, they made sure it was smooth and quick. I would highly recommend chirag hospital for piles laser treatment.",
        name: "Abddul",
        rating: 5,
      },
      {
        // title: "Smooth and painless",
        text: "I had a wonderful experience with Dr. Rajasekhar sir and his team a wonderful surgeons at Chirag hospital. His entire team is always helpful and kind. Dr. Rajasekar treated me for piles and he made sure I was comfortable. The staff in the hospital were very cooperative and soft spoken. They ensured I am prepared for the entire treatment. Dr. rajasekhar sir is friendly and approachable at any time in case of need. I feel much better and happy that I chose Dr. rajasekar sir to do my piles treatment. I would highly recommend anyone who wants to undergo piles treatment without undergoing any surgery.",
        name: "Sai",
        rating: 5,
      },
      {
        // title: "Colorectal Diseases",
        text: "I had piles issues for the last 2 years. even though I got surgery before, the problem came back again. Rajasekhar sir did surgery on me 4 months back. till now, no problem. treatment is good. fees are high but very good doctors. If treatment is more important than anything else, everyone should visit this hospital for piles and fistula problems.",
        name: "Kasireddy",
        rating: 5,
      },
      {
        // title: "Admitted for my fistula surgery",
        text: "I am a software employee and had piles from last 7 months. I visited chirag hospital a month before to get treated for piles. And I am glad that I met very good doctors in chirag hospital,they are very friendly doctors. During my consultation they gave me clarity about my problem and the asked me to take few medicines and some precautions in terms of food and do. yogas.. By 1 week I was my pain was reduced a lot. It's been 3 weeks now post-consultation and I am doing absolutely fine with few medications left. A very good doctors and a caring staff, highly recommend.",
        name: "Syam",
        rating: 5,
      },
    ],
    ctaText: "Google Reviews",
    ctaLink:
      "https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  };
  return (
    <>
      <Header
        PhoneNumber={finalPhone}
        mobilectatext={"Call Now"}
        mobileNumberHeader={finalPhoneTel}
      />
      <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
          {/* LEFT SIDE 70% */}
          <div className="space-y-10">
            <Hero {...finalHeroData} />
            <Number {...statsSectionData} />
            {/* <Cost
            title={costSectionData.title}
            points={costSectionData.points}
            buttonText={costSectionData.buttonText}
            imageSrc={costSectionData.imageSrc}
          /> */}
            {/* <Risk {...risksOfDelayData} /> */}
            <SymptomsInfo {...symptomsInfoData} />
            <Doctors {...doctorsSectionData} />
            <HospitalLocation locationsectionheading={defaultLocationHeading} />
            <TreatmentOptions {...treatmentOptionsData} />

            <CostDepends
              heading={treatmentCostDependsData.heading}
              items={treatmentCostDependsData.items}
              ctaText={treatmentCostDependsData.ctaText}
            />
            <InsurenceAdvisor {...insuranceAdvisorData} />

            <Why {...whyChooseData} />
            {/* <HospitalComparisond {...InfoContent} /> */}
            {/* <Info {...InfoData} /> */}
            <CtaBanner {...BannerData} />
            {finalFaqs.length > 0 && (
              <Faqs
                className="md:!w-[95%] w-full mx-[unset]"
                // fheading={fheading}
                faqs={finalFaqs.map((faq) => ({
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
      <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="Providing trusted care with decades of experience in diagnosing and treating colorectal and digestive health conditions."
        footernumber={finalPhone}
      />
    </>
  );
}
