import dynamic from "next/dynamic";
import Header from "@/components/header/header";
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
import DoctorsData from "@/app/doctorsdata/doctorsdata";
import HospitalLocation from "@/components/HospitalLocation/hospitallocations";
import FooterComponent from "@/components/footer/footer";

const HospitalComparisond = dynamic(
  () => import("@/components/dynamictable/dynamictables"),
);

export default function LadyPilesConditions({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const doctor = DoctorsData.Proctology["Dr. Shreedevi KN"];

  const HeroData = {
    heading: "Best Piles & Fistula Treatment for Women in Bangalore",
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
        "Experienced colorectal specialists",
        "Modern laser treatment methods",
        "Proven treatment outcomes",
      ],
      buttonText: "Book Appointment",
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
        imageAlt: "Payment options illustration",
        buttonText: "Check EMI Options",
        ctaType: "modal",
      },
      {
        titlePrefix: "Talk To",
        titleHighlight: "Women Care Advisor",
        description:
          "Get clear guidance on piles treatment, costs, and recovery for women.",
        image: "/talktohealthadvaiser.png",
        imageAlt: "Women health advisor illustration",
        buttonText: "Call Our Advisors",
        ctaType: "call",
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
      "Laser piles treatment",
      "Lifestyle and dietary guidance",
      "Advanced DGHAL procedure for piles",
      "Ultrasonic shears excision for minimal pain and faster recovery",
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
    heading: "Expert  Piles Treatment for Women at Chirag Hospitals",
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
        text: "I came for piles treatment which i have been suffering from last 4 years; i came 2 know about this hospitals through google and this hospital is super specialist hospital for piles. Hospital is very neat and clean, Dr. Shreedevi who is my consulting doctor she is very friendly, very polite and explain all the things regarding this. I went for latest laser surgery which was painless, also the nursing was very good, i was taken great care during my hospitalization. Thank to chirag hospital and their staff for great support and service.my experience with this hospital is very nice.",
        name: "Sowjanya Chandrashekar",
        rating: 5,
      },
      {
        // title: "Smooth and painless",
        text: "My mother-in-law was not keeping well for two weeks, she had severe pain and blood loss while passing motions. We were aware that it has something to do with piles. My colleague referred us to chirag hospital, we took appointment and met doctors there. Got all our questions answered by them, my family was very worried about the treatment, but the doctor gave us the good hope and he performed that without surgery the problem can be cured. Now she is doing absolutely good. Doctors in chirag hospital are excellent doctors with a pleasing personalities. We are thankful to them and the staff for giving best service.",
        name: "Abhi Abhi D",
        rating: 5,
      },
      {
        // title: "Colorectal Diseases",
        text: "In June 2021, I consulted several doctors for my piles condition, and most of them immediately recommended surgery, which I was not mentally prepared for at that time. I was specifically looking for a doctor who could help me manage the condition without surgery. With that hope, I visited Chirag Global Hospital and consulted Dr. Shreedevi. After a thorough evaluation and a few necessary tests, she explained my condition clearly and suggested a non-surgical treatment approach. The clarity and confidence with which she explained everything gave me a lot of reassurance.",
        name: "Lakshmi Devi",
        rating: 5,
      },
      {
        // title: "Admitted for my fistula surgery",
        text: "I had severe pain and bleeding for a month and was diagnosed with piles. My family was worried, but after consulting Dr. Shreedevi at Chirag Global Hospital, I felt confident and reassured. She explained the condition clearly and treated me with medicines and minimal procedures, without major surgery. Today, I am doing well and living a normal life. I highly recommend Dr. Shreedevi and the Chirag Hospital team.",
        name: "RAJESHWARI MANDURI",
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
        PhoneNumber={"08065916415"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:08065916415"}
      />
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
              className="block lg:hidden fixed bottom-0 left-0 w-full z-200 bg-transparent   px-4 py-1"
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
        footernumber="08065916415"
      />
    </>
  );
}
