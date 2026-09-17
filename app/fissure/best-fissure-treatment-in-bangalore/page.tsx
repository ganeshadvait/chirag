"use client";
// File :  app/piles/best-piles-laser-treatment-in-bangalore/page.tsx
import Header from "@/components/header/header";
import Hero from "@/components/partials/hero/hero";
import Number from "@/components/partials/number/number";
import RisksOfDelayPediatric from "@/components/partials/risksofdelaypediatric/risksofdelaypediatric";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import WhyChoosePediatric from "@/components/partials/whychoosepediatric/whychoosepediatric";
import WhenConsult from "@/components/partials/whenconsult/whenconsult";
import TreatmentOptions from "@/components/partials/treatmentoptions/treatmentoptions";
import WhyLaserBest from "@/components/partials/whylaserbest/whylaserbest";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";
import FooterComponent from "@/components/footer/footer";

export default function PilesConditions() {
  const finalPhone = "08065916415";
  const finalPhoneTel = `tel:${finalPhone}`;

  const finalHeroData = {
    heading: "Best Fissure Treatment in Bangalore",
    points: [
      "Experienced colorectal specialists",
      "Painless laser & advanced treatments",
      "Same-day consultation & diagnosis",
      "Personalized treatment for quick relief",
      "No Cuts, No Bleeding, No Stitches",
    ],
    buttonText: "Book Appointment",
    imageSrc: "/chiragheroimage.png",
  };

  const statsSectionData = {
    heading: "Trusted by Patients\nWorldwide",
    description:
      "Patients receive safe treatment, quick discharge, shorter hospital stays, and faster recovery with continuous medical care and support.",
    stats: [
      {
        value: "24 hr",
        label: "Same-Day Discharge",
      },
      {
        value: "180K+",
        label: "Patient Treated",
      },
      {
        value: "3-7 Days",
        label: "Recovery Time",
      },
      {
        value: "98%+",
        label: "Success Rate",
      },
    ],
  };

  const risksOfDelayData = {
    heading: "Risks of Delaying Fissure Treatment",
    intro:
      "",
    image: "/piles/risk of delaying piles.png",
    imageAlt: "Risks of delaying piles treatment",
    risks: [
      {
        title: "Severe & Persistent Pain",
        description:
          "Anal fissures cause sharp, tearing pain during & after bowel movements, often worsening with time and affecting quality of life.",
      },
      {
        title: "Chronic Muscle Spasm",
        description:
          "The internal anal sphincter becomes hyperactive, maintaining tension and preventing natural healing, prolonging discomfort.",
      },
      {
        title: "Difficulty with Bowel Movements",
        description:
          "Fear of pain may lead to constipation & straining, which further irritates the fissure and delays healing.",
      },
      {
        title: "Risk of Infection or Bleeding",
        description:
          "Open anal fissures can bleed or become infected if untreated, requiring more intensive care and higher risk of complications.",
      },
      {
        title: "Reduced Mobility & Sleep",
        description:
          "Constant pain and discomfort affect sitting, daily activities, sleep quality, and overall well-being and work productivity.",
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
        designation: "MBBS MS General Surgery",
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
          "Enjoy hassle-free treatment and insurance support through GMoney, with zero processing fees and interest-free finance.",
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
    heading: "Why Choose Chirag Hospitals for Fissure Treatment",
    subheading:
      "Bangalore’s Leading Hospital for Advanced Piles Management and Surgery",
    features: [
      {
        title: "30+ Years in Colorectal & Proctology Care",
        description:
          "Our specialized team treats all grades of anal fissures—acute, chronic, complex, and recurrent—with proven expertise and successful outcomes.",
      },
      {
        title: "Advanced Laser & Botox Treatment Options",
        description:
          "We offer cutting-edge laser fissure treatment and Botox injections, minimizing pain and ensuring faster, more comfortable healing.",
      },
      {
        title: "Complete Evaluation & Diagnosis",
        description:
          "Every patient undergoes thorough examination to understand fissure grade, location, and sphincter tone, guiding precise treatment selection.",
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Whether acute or chronic, internal or external, we tailor treatment based on symptoms, sphincter function, and patient preference for minimal or surgical options.",
      },
      {
        title: "Compassionate Proctology Care",
        description:
          "Fissure treatment requires specialized care. We provide safe, dignified treatment in a supportive clinical environment with proper pre- and post-care guidance.",
      },
      {
        title: "Transparent Pricing & Flexible EMI",
        description:
          "Clear cost breakdowns and interest-free EMI options make fissure treatment accessible, with no hidden charges or surprise bills.",
      },
    ],
  };
const whenConsultData = {
    heading: "Symptoms of Anal Fissures",
    subheading:
      "",
    signs: [
      "Sharp, Tearing Pain During Bowel Movements",
      "Burning Sensation After Defecation",
      "Visible Tear or Crack in the Anal Area",
      "Bleeding During or After Bowel Movements",
      "Itching or Irritation Around the Anus",
      "Muscle Spasm & Tension in the Anal Area",
    ],
  };

const treatmentOptionsData = {
    heading: "Treatment Options for Fissures ",
    subheading:
      "",
    options: [
      {
        icon: "zap",
        title: "Conservative Management",
        description:
          "High-fibre diet, stool softeners, adequate water, warm sitz baths, and topical anesthetics to reduce pain and promote natural healing.",
      },
      {
        icon: "wrench",
        title: "Topical Medications",
        description:
          "Nitroglycerin, diltiazem, or lidocaine creams help relax the anal sphincter, reduce spasm, and ease pain while healing progresses.",
      },
      {
        icon: "shield",
        title: "Botulinum Toxin (Botox) Injection",
        description:
          "Relaxes the anal sphincter to reduce spasm and pain, allowing fissures to heal naturally without surgery.",
      },
      {
        icon: "filetext",
        title: "Laser Fissure Treatment",
        description:
          "Minimally invasive laser procedure to relax the sphincter and promote healing with minimal tissue damage and faster recovery.",
      },
      {
        icon: "hexagon",
        title: "Lateral Internal Sphincterotomy (LIS)",
        description:
          "Surgical procedure that carefully cuts the internal anal sphincter to reduce spasm, tension, and pain for lasting relief.",
      },
      {
        icon: "smile",
        title: "Advanced Fissurectomy",
        description:
          "Surgical removal of chronic fissure tissue combined with sphincter relaxation for complete, long-term resolution.",
      },
    ],
  };

  const whyLaserBestData = {
    heading: "Why Laser is the Best Treatment for Fissures ",
    subheading:
      "",
    image: "",
    imageAlt: "",
    points: [
      {
        title: "Painless & Precise",
        description:
          "Laser energy targets the fissure without cutting healthy tissue, reducing post-procedure pain significantly",
      },
      {
        title: "Relieves Sphincter Spasm",
        description:
          "Laser heat helps relax the anal sphincter, addressing the root cause of fissure pain",
      },
      {
        title: "Faster Healing",
        description:
          "Promotes tissue regeneration and blood flow, allowing fissures to heal in days instead of weeks",
      },
      {
        title: "Minimal Recovery Time",
        description:
          "Most patients resume normal activities within 3-7 days with minimal restrictions",
      },
      {
        title: "Lower Recurrence Rate",
        description:
          "Effective sphincter relaxation reduces the risk of fissure recurrence compared to other methods",
      },
      {
        title: "No Stitches or Dressing Changes",
        description:
          "Wound-free procedure means no dressing maintenance or infection risk",
      },
    ],
  };


  const BannerData = {
    heading: "Get Relief from Piles – Book Now",
    buttonText: "Book An Appointment",
    imageSrc: "/scheduleyourvisit.png",
  };

  const faqs = [
    {
      faqTitle: "What causes anal fissures?",
      faqAnswer:
        "Fissures result from tight anal sphincter, constipation, straining, childbirth, or repeated trauma during bowel movements.",
    },
    {
      faqTitle: "Is fissure treatment painful?",
      faqAnswer:
        "Modern treatments like laser and Botox are nearly painless, with minimal discomfort compared to the fissure pain itself.",
    },
    {
      faqTitle: "How long does fissure treatment take?",
      faqAnswer:
        "Laser treatment takes 15-20 minutes. Conservative treatment may take 4-6 weeks for healing.",
    },
    {
      faqTitle: "Can fissures heal on their own?",
      faqAnswer:
        "Some acute fissures heal with conservative care, but chronic fissures often need medical intervention.",
    },
    {
      faqTitle: "What's the success rate of laser treatment?",
      faqAnswer:
        "Laser fissure treatment has a 95%+ success rate with minimal recurrence when combined with proper sphincter relaxation.",
    },
    {
      faqTitle: "When should I see a doctor?",
      faqAnswer:
        "Consult immediately if pain is severe, persists beyond 2 weeks, or bleeding is frequent.",
    },
  ];

  const finalFaqs = faqs;

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
            <RisksOfDelayPediatric {...risksOfDelayData} />
            <Doctors {...doctorsSectionData} />
            <HospitalLocation locationsectionheading={defaultLocationHeading} />
            <CostDepends
              heading={treatmentCostDependsData.heading}
              items={treatmentCostDependsData.items}
              ctaText={treatmentCostDependsData.ctaText}
            />
            <InsurenceAdvisor {...insuranceAdvisorData} />
            <WhenConsult {...whenConsultData} />
            <TreatmentOptions {...treatmentOptionsData} />
            <WhyLaserBest {...whyLaserBestData} />
            <section className="w-[95%] md:w-[96%] max-w-[1500px] mx-auto py-8">
              <div className="grid grid-cols-1 gap-8 rounded-lg bg-[#f8f7fb] p-6 md:grid-cols-2 md:p-8">
                <div>
                  <h2 className="mb-5 text-xl font-bold text-[#625587] sm:text-2xl">
                    Cost Factors
                  </h2>
                  <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-gray-900 sm:text-lg">
                    <li>Type of Procedure (Conservative, Botox, Laser, Surgical)</li>
                    <li>Severity of Condition (Acute vs. Chronic)</li>
                    <li>Past Medical History &amp; Comorbidities</li>
                    <li>Contact for Exact Cost</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-5 text-xl font-bold text-[#625587] sm:text-2xl">
                    Payment &amp; Support
                  </h2>
                  <ul className="space-y-5 text-base leading-relaxed text-gray-900 sm:text-lg">
                    <li>
                      <strong>Easy EMI Options</strong> - Hassle-free treatment
                      with zero processing fees and interest-free financing
                      through GMoney
                    </li>
                    <li>
                      <strong>Health Advisor Support</strong> - Get clear
                      guidance on treatment options, costs, recovery timeline,
                      and what to expect
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <WhyChoosePediatric {...whyChooseData} />
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
