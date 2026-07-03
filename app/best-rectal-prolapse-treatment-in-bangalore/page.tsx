"use client";
// File :  app/piles/[slug]/page.tsx
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import Hero from "@/components/partials/hero/hero";
import WhatIsPediatric from "@/components/partials/whatispediatric/whatispediatric";
import PediatricConditions from "@/components/partials/pediatricconditions/pediatricconditions";
import CausesRiskFactors from "@/components/partials/causesriskfactors/causesriskfactors";
import WhenConsult from "@/components/partials/whenconsult/whenconsult";
import TreatmentOptions from "@/components/partials/treatmentoptions/treatmentoptions";
import WhyChoosePediatric from "@/components/partials/whychoosepediatric/whychoosepediatric";
import RisksOfDelayPediatric from "@/components/partials/risksofdelaypediatric/risksofdelaypediatric";
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
import FooterComponent from "@/components/footer/footer";

type HeroDataType = {
  heading: string;
  points: string[];
  buttonText: string;
  imageSrc: string;
};

type PilesPageProps = {
  params: {
    slug: string;
  };
};
const HospitalComparisond = dynamic(
  () => import("@/components/dynamictable/dynamictables"),
);

const contentMap: Record<
  string,
  {
    phone?: string;
    hero?: Partial<HeroDataType>;
    faqs?: { faqTitle: string; faqAnswer: string }[];
  }
> = {
  "best-rectal-prolapse-treatment-in-bangalore": {
    phone: "08065916418",
    hero: {
      heading: "Affordable Piles Treatment in Bangalore",
      points: [
        "Packages starting from ₹50,000",
        "Transparent pricing, no surprises",
        "Laser & advanced options available",
        "Faster recovery-focused care",
        "Easy payment options available",
      ],
    },
    faqs: [
      {
        faqTitle: "How much does Piles laser treatment cost in Bangalore?",
        faqAnswer:
          "The cost ranges from ₹50,000, depending on the complexity of the treatment and hospital charges.",
      },
      {
        faqTitle: "Are there any hidden costs for laser piles treatment?",
        faqAnswer:
          "No, Chirag Global Hospitals provides transparent pricing, and all costs will be discussed upfront. We offer no hidden charges.",
      },
      {
        faqTitle: "Is Piles laser treatment covered under insurance?",
        faqAnswer:
          "Yes, most major insurance plans cover laser treatment for piles. Chirag Global Hospitals assists with cashless insurance claims.",
      },
      {
        faqTitle: "Can I pay for the treatment in installments?",
        faqAnswer:
          "Yes, Chirag Global Hospitals offers zero-interest EMI options for your convenience.",
      },
      {
        faqTitle: "Is laser treatment for piles worth the cost?",
        faqAnswer:
          "Yes, laser treatment provides quick recovery, minimal pain, and a higher success rate with fewer complications compared to traditional surgery.",
      },
      {
        faqTitle:
          "Will the treatment cost be higher if the condition is severe?",
        faqAnswer:
          "Yes, in some cases, if the piles are advanced, the cost may vary slightly depending on the additional procedures required. Contact us today to get a personalized quotation and learn more about your treatment options.",
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

  const defaultPhone = "08065916418";
  const finalPhone = pageContent?.phone ?? defaultPhone;

  const finalPhoneTel = `tel:${finalPhone}`;

  const HeroData = {
    heading: "Rectal Prolapse Treatment at Chirag Global Hospitals",
    subheading:
      "Advanced Diagnosis & Comprehensive Treatment for Rectal Prolapse",
    points: [
      "Experienced colorectal surgery specialists",
      "Advanced laparoscopic (keyhole) surgery",
      "Personalized treatment for every stage",
      "Short hospital stay & quick recovery",
      "Complete pre, surgical & post care support",
    ],
    buttonText: "Book Appointment",
    imageSrc: "/Chirag Doctors Main.png",
  };

  const finalHeroData = {
    ...HeroData,
    ...(pageContent?.hero ?? {}),
    heading: pageContent?.hero?.heading ?? HeroData.heading,
    points: pageContent?.hero?.points ?? HeroData.points,
  };

  const whatIsPediatricData = {
    heading: "What is Rectal Prolapse?",
    image: "/rectalprolapse/what is rectal prolapse.png",
    imageAlt: "Rectal prolapse illustration",
    paragraphs: [
      "Rectal prolapse is a condition where the rectum (the last part of the large intestine) slips out through the anus due to weakness of the pelvic floor muscles and supporting ligaments. Although it is less common than piles, fissures, or fistulas, rectal prolapse can significantly affect bowel function, daily activities, and overall quality of life.",
      "At Chirag Global Hospitals, our dedicated colorectal specialists bring over 30 years of expertise in diagnosing and treating both simple and complex rectal prolapse with advanced, patient-specific surgical techniques.",
      "The rectum is the final portion of the large intestine that stores stool before bowel movements. Normally, strong pelvic floor muscles and supporting tissues keep the rectum securely in place.",
      "When these supporting structures become weak, the rectum gradually slips downward and may protrude through the anal opening. In the early stages, the prolapse may occur only during bowel movements and return on its own. As the condition progresses, it may require manual repositioning and eventually remain outside even while standing, walking, or performing daily activities.",
    ],
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

  const symptomsData = {
    heading: "Common Symptoms of Rectal Prolapse",
    subheading: "Patients with rectal prolapse may experience:",
    signs: [
      "A fleshy mass protruding through the anus",
      "Difficulty passing stools",
      "Feeling of incomplete bowel evacuation",
      "Leakage of stool or mucus",
      "Rectal bleeding",
      "Chronic constipation",
      "Excessive straining during bowel movements",
      "Difficulty controlling bowel movements (fecal incontinence)",
      "Discomfort or heaviness in the pelvic region",
    ],
  };

  const whoAtRiskData = {
    heading: "Who is at Risk?",
    intro: "Rectal prolapse is more commonly seen in:",
    image: "/rectalprolapse/causes and risk factor rectal prolapse.png",
    imageAlt: "Who is at risk of rectal prolapse",
    causes: [
      { title: "Elderly individuals, especially above 60 years", description: "" },
      { title: "People suffering from chronic constipation", description: "" },
      { title: "Women after multiple childbirths", description: "" },
      { title: "Patients with weakened pelvic floor muscles", description: "" },
      { title: "Individuals with chronic neurological disorders", description: "" },
      { title: "Children (usually managed conservatively)", description: "" },
    ],
  };

  const associatedConditionsData = {
    heading: "Rectal Prolapse is More Than Just a Prolapsed Rectum",
    subheading:
      "One of the most important aspects often overlooked is that rectal prolapse rarely occurs in isolation. Many patients also have:",
    signs: [
      "Weak pelvic floor muscles",
      "Stretched or weakened anal sphincters",
      "Urinary bladder prolapse (Cystocele)",
      "Vaginal wall weakness",
      "Uterine prolapse",
      "Pelvic organ descent",
      "Chronic constipation or obstructed defecation syndrome",
      "Fecal incontinence",
      "Urinary symptoms",
    ],
  };

  const pelvicDysfunctionData = {
    heading: "Pelvic Floor Dysfunction",
    intro:
      "These conditions together form Pelvic Floor Dysfunction, where multiple compartments of the pelvic outlet are affected. Simply correcting the protruding rectum without addressing these associated problems may lead to:",
    image: "/rectalprolapse/risk delaying rectal prolapse.png",
    imageAlt: "Pelvic floor dysfunction",
    risks: [
      { title: "Persistent symptoms", description: "" },
      { title: "Poor functional outcomes", description: "" },
      { title: "Recurrence of prolapse", description: "" },
      { title: "New bowel or urinary complications", description: "" },
      {
        title: "This is why rectal prolapse surgery should never be considered a routine procedure.",
        description: "",
      },
    ],
  };

  const evaluationData = {
    heading: "Comprehensive Pelvic Floor Evaluation",
    subheading:
      "At Chirag Global Hospitals, every patient undergoes a detailed evaluation to identify all associated pelvic floor disorders before surgery. Our assessment may include:",
    signs: [
      "Detailed clinical examination",
      "Proctoscopy",
      "Colonoscopy",
      "Defecography",
      "Pelvic floor assessment",
      "Anal sphincter evaluation",
      "Imaging studies whenever required",
    ],
  };

  const personalizedApproachData = {
    heading: "Personalized Treatment Approach",
    subheading: "Treatment depends on:",
    signs: [
      "Age",
      "Severity of prolapse",
      "Pelvic floor strength",
      "Anal sphincter function",
      "Associated pelvic organ prolapse",
      "Overall health condition",
    ],
  };

  const treatmentOptionsData = {
    heading: "Advanced Surgical Treatment",
    subheading:
      "Complete rectal prolapse in adults generally requires surgery. Rather than performing the same procedure for every patient, our colorectal team carefully selects the most appropriate surgery based on the patient's overall pelvic floor condition.",
    options: [
      {
        title: "Conservative Management",
        description:
          "Selected early-stage cases and children may benefit from a high-fibre diet, constipation management, pelvic floor strengthening exercises, and lifestyle modifications.",
      },
      {
        title: "Delorme's Procedure",
        description:
          "A minimally invasive perineal procedure performed through the anal opening without abdominal incisions — suitable for selected patients.",
      },
      {
        title: "Perineal Rectosigmoidectomy (Altemeier Procedure)",
        description:
          "A perineal procedure performed through the anal opening without abdominal incisions, offering faster recovery and an excellent cosmetic outcome.",
      },
      {
        title: "Laparoscopic & Robotic Rectopexy",
        description:
          "For selected patients, advanced laparoscopic or robotic rectopexy may provide better long-term functional outcomes depending on the underlying pelvic floor abnormalities.",
      },
    ],
  };

  const perinealBenefitsData = {
    heading: "Benefits of Minimally Invasive Perineal Procedures",
    subheading:
      "These procedures are performed through the anal opening without abdominal incisions, offering:",
    signs: [
      "Minimal postoperative pain",
      "Faster recovery",
      "Early bowel function",
      "Short hospital stay",
      "Early return to normal activities",
      "Excellent cosmetic outcome",
    ],
  };

  const whyExpertiseData = {
    heading: "Why Expertise Matters",
    subheading:
      "Successful rectal prolapse treatment is not simply about removing the prolapse. The key to long-term success lies in:",
    signs: [
      "Identifying every associated pelvic floor disorder",
      "Choosing the right procedure",
      "Restoring pelvic floor support",
      "Preserving bowel control",
      "Preventing recurrence",
    ],
  };

  const whyChooseData = {
    heading: "Why Choose Chirag Global Hospitals?",
    subheading:
      "At Chirag Global Hospitals, our comprehensive approach has helped thousands of patients achieve excellent functional outcomes and improved quality of life.",
    features: [
      { title: "30+ years of dedicated colorectal expertise", description: "" },
      { title: "Highly experienced colorectal surgeons", description: "" },
      { title: "Specialized pelvic floor evaluation", description: "" },
      {
        title: "Comprehensive treatment for all pelvic outlet disorders",
        description: "",
      },
      {
        title: "Advanced minimally invasive surgical techniques",
        description: "",
      },
      { title: "Personalized treatment planning", description: "" },
      { title: "High success rates", description: "" },
      { title: "Excellent functional outcomes", description: "" },
      { title: "Faster recovery with modern surgical care", description: "" },
      {
        title: "Comprehensive pre-operative and post-operative support",
        description: "",
      },
    ],
  };
  const doctorsSectionData = {
    heading: "Our Top Doctors",

    topDoctors: [
      {
        name: "Dr. Rajasekhar M R",
        designation: "MBBS, MS General Surgeon",
        qualification: "Chairman, Chief Colorectal Surgeon & Proctologist",
        experience: "38 Years",
        reviews: "99%",
        img: "/doctorchiragcard.png",
      },
      {
        name: "Dr. Shreedevi KN",
        designation: "MBBS, MS General Surgery, FSGE (Surgical Gastroenterology )",
        qualification: "Head Colorectal Surgery & Proctology",
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
        designation: "MMBS MS General Surgery",
        qualification: "Colorectal Surgeon & Proctologist",
        experience: "4 Years",
        reviews: "99%",
        img: "/doctorjyotsnacard.png",
      },
    ],

    banner: {
      heading: "Consult The Doctor Now",
      points: [
        "Experienced colorectal specialists",
        "Modern laser treatment methods",
        "Proven treatment outcomes",
      ],
      buttonText: "Book Appointment",
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
    heading: "Don't Ignore Rectal Prolapse — Book Your Consultation Today",
    buttonText: "Book An Appointment",
    imageSrc: "/scheduleyourvisit.png",
  };

  const faqs = [
    {
      faqTitle: "What is the difference between hemorrhoids (piles) and rectal prolapse?",
      faqAnswer:
        "While both can cause a protrusion from the anus, they are different conditions. Hemorrhoids are swollen blood vessels in the anal canal, while rectal prolapse involves the actual rectal wall turning inside out. Rectal prolapse produces concentric circular folds of tissue, whereas prolapsed hemorrhoids appear as separate grape-like swellings. A specialist can distinguish between them through clinical examination.",
    },
    {
      faqTitle: "Can rectal prolapse be cured without surgery?",
      faqAnswer:
        "Early internal prolapse (Stage 1) may improve with conservative measures including dietary changes, pelvic floor exercises, and biofeedback. However, external rectal prolapse (Stages 2-3) requires surgical correction for lasting relief. Conservative measures alone cannot fix a full-thickness prolapse, though they play an important role in post-surgical recovery.",
    },
    {
      faqTitle: "What is laparoscopic rectopexy and why is it preferred?",
      faqAnswer:
        "Laparoscopic rectopexy is a keyhole surgery where the rectum is mobilized and fixed (attached) to the sacrum through 3–4 small incisions (5–10mm each). It's preferred because it offers over 95% cure rate, preserves bowel and sexual function, causes less pain than open surgery, requires a shorter hospital stay (2–3 days), and allows faster return to normal activities (2–3 weeks).",
    },
    {
      faqTitle: "How long does recovery take after rectal prolapse surgery?",
      faqAnswer:
        "After laparoscopic rectopexy, most patients go home within 2–3 days. Return to light activities takes 1–2 weeks, and full recovery including return to heavy lifting takes 4–6 weeks. Perineal procedures often have shorter initial recovery. Your surgeon will provide specific guidelines based on your procedure.",
    },
    {
      faqTitle: "Will I regain bowel control after rectal prolapse surgery?",
      faqAnswer:
        "Many patients experience significant improvement in bowel control after prolapse repair. When the prolapse is corrected, the anal sphincter muscles are no longer stretched and can regain tone. However, if incontinence has been present for a long time, full recovery may take several months and may benefit from pelvic floor physiotherapy. This is why early treatment is important.",
    },
    {
      faqTitle: "Can rectal prolapse come back after surgery?",
      faqAnswer:
        "Recurrence rates vary by procedure. Laparoscopic rectopexy has a recurrence rate of 2–5%, while perineal procedures have higher rates (10–20%). Following post-operative dietary advice, performing pelvic floor exercises, avoiding straining, and maintaining a healthy weight all help prevent recurrence.",
    },
    {
      faqTitle: "Is rectal prolapse common in women?",
      faqAnswer:
        "Yes, rectal prolapse is approximately 6 times more common in women than men, particularly after age 50. Multiple vaginal deliveries, hormonal changes after menopause, and associated pelvic organ prolapse (bladder, uterus) are contributing factors. Women may also have concurrent rectocele or cystocele that can be addressed simultaneously.",
    },
    {
      faqTitle: "How much does rectal prolapse treatment cost at Chirag Hospitals?",
      faqAnswer:
        "Treatment costs depend on the procedure type and complexity. We offer cashless insurance processing, interest-free EMI options through GMoney, and transparent pricing. Contact our health advisors at 08065916418 for a detailed cost estimate based on your specific condition.",
    },
  ];

  const finalFaqs = pageContent?.faqs ?? faqs;

  const testimonialSectionData = {
    testimonials: [
      {
        // title: "Laser treatment for my dad's piles",
        text: "I visited this hospital for rectal prolapse treatment and received excellent care. The doctor explained my condition clearly and guided me through the treatment options. The procedure went smoothly, and my recovery has been very comfortable.",
        name: "Ramesh K.",
        rating: 5,
      },
      {
        // title: "Smooth and painless",
        text: "Very thankful to Dr. Rajashekar and the staff for their support during my rectal prolapse treatment. I was nervous in the beginning, but the team handled everything professionally and made me feel at ease. The results have been very good.",
        name: "Lakshmi P.",
        rating: 5,
      },
      {
        // title: "Colorectal Diseases",
        text: "Highly recommend this hospital for rectal prolapse treatment. The specialists were experienced, the facilities were clean, and the entire process was well organized. I also appreciated the follow-up care after treatment.",
        name: "Suresh M.",
        rating: 5,
      },
      {
        // title: "Admitted for my fistula surgery",
        text: "I had a positive experience here for rectal prolapse treatment. Dr. Rajashekar was patient, answered all my questions, and gave me confidence before the procedure. Recovery was smooth, and I’m feeling much better now.",
        name: "Anitha R.",
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
            <WhatIsPediatric {...whatIsPediatricData} />
            <WhenConsult {...symptomsData} />
            <CausesRiskFactors {...whoAtRiskData} />
            <WhenConsult {...associatedConditionsData} />
            <RisksOfDelayPediatric {...pelvicDysfunctionData} />
            <WhenConsult {...evaluationData} />
            <WhenConsult {...personalizedApproachData} />
            <TreatmentOptions {...treatmentOptionsData} />
            <WhenConsult {...perinealBenefitsData} />
            <Doctors {...doctorsSectionData} />
            <CostDepends
              heading={treatmentCostDependsData.heading}
              items={treatmentCostDependsData.items}
              ctaText={treatmentCostDependsData.ctaText}
            />
            <InsurenceAdvisor {...insuranceAdvisorData} />
            <WhenConsult {...whyExpertiseData} />
            <WhyChoosePediatric {...whyChooseData} />
            <CtaBanner {...BannerData} />
            {/* <Cost
            title={costSectionData.title}
            points={costSectionData.points}
            buttonText={costSectionData.buttonText}
            imageSrc={costSectionData.imageSrc}
          /> */}
            <HospitalLocation locationsectionheading={defaultLocationHeading} />
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
