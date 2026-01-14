import Hero from "@/components/partials/hero/hero";
import Number from "@/components/partials/number/number";
import Cost from "@/components/partials/cost/cost";
import Risk from "@/components/partials/risks/risk";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import Why from "@/components/partials/why/why";

import Info from "@/components/partials/info/info";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";

import HospitalLocation from "@/components/HospitalLocation/hospitallocations";

import HospitalComparisond from "@/components/dynamictable/dynamictables";
export default function NewDesign() {
  const pilesHeroData = {
    heading: "Best Piles Treatment In Bangalore",
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
        description: "Find the best hospitals and best doctors for treatment.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Health advisor illustration",
        buttonText: "Call Advisor Now",
      },
    ],
  };
  const whyChooseData = {
    heading: "Why Choose Chirag Hospitals for Piles Treatment in Bangalore",
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
        "Piles (hemorrhoids) are swollen blood vessels inside or around the anus. They may occur internally (inside the rectum) or externally (under the skin surrounding the anus).",
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
    videoSrc: "/chirag-piles-video.mp4",

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

    costTitle: "Piles Laser Operation Cost in Bangalore",
    costIntro: "Cost of piles operation depends on the following:",
    costPoints: [
      "Hospital reputation",
      "Doctor's expertise",
      "Grades of Piles (1,2,3,4)",
      "Advanced DGHAL procedure for piles",
      "Ultrasonic shears excision for minimal pain and faster recovery",
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
        // title: "Laser treatment for my dad's piles",
        text: "Dr Rajasekhar and his staff are amazing. They are friendly, attentive, caring, patient and helpful. I’ve had a multitude of piles surgery have been done by Dr Rajasekhar & Dr. Pruthvija and his staff. When I called with concerns about the hospital’s billing system, they made sure it was smooth and quick. I would highly recommend chirag hospital for piles laser treatment.",
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
        text: "I am a software employee and had piles from last 7 months. I visited chirag hospital a month before to get treated for piles. And I am glad that I met very good doctors in chirag hospital,they are very friendly doctors. During my consultation they gave me clarity about my problem and the asked me to take few medicines and some precautions in terms of food and do. yogas.. By 1 week I was my pain was reduced a lot. It’s been 3 weeks now post-consultation and I am doing absolutely fine with few medications left. A very good doctors and a caring staff, highly recommend.",
        name: "Syam",
        rating: 5,
      },
    ],
    ctaText: "Google Review",
    ctaLink: "https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
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
        experience: "38 Years",
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
        experience: "10 Years",
        reviews: "99%",
        img: "/doctorprithvicard.png",
      },
    ],

    moreDoctors: [
      {
        name: "Dr. Suchitra N Adiga",
        designation: "BAMS, MS(Ayu)",
        qualification: "Proctologist",
        experience: "8 Years",
        reviews: "99%",
        img: "/doctorsuchithracard.png",
      },
      {
        name: "Dr.Jyotsna Vemulapalli",
        designation: "MBBS, MS(Gen Surgery)",
        qualification: "General Surgeon",
        experience: "4 Years",
        reviews: "99%",
        img: "/doctorjyotsnacard.png",
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

          <Why {...whyChooseData} />
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
